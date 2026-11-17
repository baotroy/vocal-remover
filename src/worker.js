// Separation worker: loads ONNX Runtime + the Hybrid Transformer Demucs model
// and splits stereo 44.1 kHz audio into vocals and instrumental.
import * as ort from 'onnxruntime-web/webgpu';
import { prep, post, SEGMENT } from './chunk.js';

const CACHE = 'vocal-remover-v1';

// Model and runtime files, relative to the page. Chunked so each file stays
// under the artifact host's 15 MB per-file limit.
const FILES = {
  wasm: ['ort/ort-wasm.0.wasm', 'ort/ort-wasm.1.wasm'],
  graph: ['model/htdemucs.graph.wasm'],
  weights: ['model/w16.00.wasm', 'model/w16.01.wasm', 'model/w16.02.wasm',
            'model/w16.03.wasm', 'model/w16.04.wasm', 'model/w16.05.wasm'],
};

let base = '';
let session = null;
let backend = '';
let gpuName = '';

const post_ = (msg, transfer) => self.postMessage(msg, transfer || []);

async function getCached(url) {
  let cache = null;
  try { cache = await caches.open(CACHE); } catch { /* Cache API unavailable */ }
  if (cache) {
    try {
      const hit = await cache.match(url);
      if (hit) return new Uint8Array(await hit.arrayBuffer());
    } catch { /* ignore */ }
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Không tải được ${url} (HTTP ${res.status})`);
  const buf = new Uint8Array(await res.arrayBuffer());
  if (cache) {
    try { await cache.put(url, new Response(buf.slice())); } catch { /* quota */ }
  }
  return buf;
}

// Downloads a list of chunk files and concatenates them, reporting bytes.
async function fetchParts(list, onBytes) {
  const parts = [];
  for (const p of list) {
    const b = await getCached(new URL(p, base).href);
    parts.push(b);
    onBytes(b.byteLength);
  }
  const total = parts.reduce((n, b) => n + b.byteLength, 0);
  const out = new Uint8Array(total);
  let off = 0;
  for (const b of parts) { out.set(b, off); off += b.byteLength; }
  return out;
}

// float16 -> float32, via a 64K lookup table.
function halfToFloat(u8) {
  const table = new Float32Array(65536);
  for (let h = 0; h < 65536; h++) {
    const s = h & 0x8000 ? -1 : 1, e = (h >> 10) & 0x1f, f = h & 0x3ff;
    table[h] = e === 0 ? s * f * 2 ** -24
      : e === 31 ? (f ? NaN : s * Infinity)
      : s * (1 + f / 1024) * 2 ** (e - 15);
  }
  const src = new Uint16Array(u8.buffer, u8.byteOffset, u8.byteLength / 2);
  const out = new Float32Array(src.length);
  for (let i = 0; i < src.length; i++) out[i] = table[src[i]];
  return new Uint8Array(out.buffer);
}

// Picks the discrete GPU (laptops otherwise may get the integrated one) and
// skips software WebGPU (SwiftShader), which is far slower than plain WASM.
async function pickAdapter(allowSoftware) {
  try {
    const a = await navigator.gpu?.requestAdapter({ powerPreference: 'high-performance' });
    if (!a || (!allowSoftware && (a.isFallbackAdapter || a.info?.isFallbackAdapter))) return null;
    const info = a.info || {};
    const desc = `${info.vendor || ''} ${info.architecture || ''} ${info.description || ''}`;
    if (!allowSoftware && /swiftshader|llvmpipe|software/i.test(desc)) return null;
    gpuName = (info.description || `${info.vendor || ''} ${info.architecture || ''}`).trim();
    return a;
  } catch { return null; }
}

const TOTAL_BYTES = 21872216 + 6357251 + 83967712; // wasm + graph + fp16 weights

async function init(preferGpu, allowSoftware) {
  let done = 0;
  const onBytes = (n) => { done += n; post_({ type: 'load', done, total: TOTAL_BYTES }); };

  ort.env.wasm.wasmBinary = (await fetchParts(FILES.wasm, onBytes)).buffer;
  ort.env.wasm.numThreads = self.crossOriginIsolated ? Math.min(4, navigator.hardwareConcurrency || 1) : 1;
  ort.env.wasm.proxy = false;

  const graph = await fetchParts(FILES.graph, onBytes);
  const weights = halfToFloat(await fetchParts(FILES.weights, onBytes));
  post_({ type: 'status', text: 'Đang khởi tạo mô hình…' });

  const attempts = [];
  const adapter = preferGpu ? await pickAdapter(allowSoftware) : null;
  if (adapter) {
    ort.env.webgpu.adapter = adapter;
    ort.env.webgpu.powerPreference = 'high-performance';
    attempts.push('webgpu');
  }
  attempts.push('wasm');
  let lastErr;
  for (const ep of attempts) {
    try {
      session = await ort.InferenceSession.create(graph, {
        executionProviders: [ep],
        externalData: [{ path: 'weights.bin', data: weights }],
        graphOptimizationLevel: 'all',
      });
      backend = ep;
      break;
    } catch (e) { lastErr = e; }
  }
  if (!session) throw lastErr;
  post_({ type: 'ready', backend, gpu: backend === 'webgpu' ? gpuName : '' });
}

// ---------- DSP helpers ----------
// A small pool of workers doing STFT/ISTFT. Falls back to running inline when
// nested workers are unavailable.
class DspPool {
  static async create() {
    const n = Math.max(1, Math.min(3, (navigator.hardwareConcurrency || 2) - 1));
    const workers = [];
    try {
      for (let i = 0; i < n; i++) workers.push(new Worker(new URL('./dsp-worker.js', import.meta.url), { type: 'module' }));
      const pool = new DspPool(workers);
      await Promise.race([
        Promise.all(workers.map((_, i) => pool.run({ kind: 'ping' }, [], i))),
        new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 10000)),
      ]);
      return pool;
    } catch (e) {
      console.warn('DSP workers unavailable, running inline:', e);
      workers.forEach((w) => w.terminate());
      return new DspPool([]);
    }
  }
  constructor(workers) {
    this.workers = workers;
    this.busy = workers.map(() => 0);
    this.pending = new Map();
    this.nextId = 1;
    workers.forEach((w) => {
      w.onmessage = ({ data }) => {
        const p = this.pending.get(data.id);
        if (!p) return;
        this.pending.delete(data.id);
        this.busy[p.w]--;
        if (data.error) p.reject(new Error(data.error)); else p.resolve(data.out);
      };
      w.onerror = (e) => {
        e.preventDefault?.();
        const err = new Error(e.message || 'Lỗi bộ xử lý tín hiệu');
        for (const p of this.pending.values()) p.reject(err);
        this.pending.clear();
      };
    });
  }
  get size() { return this.workers.length || 1; }
  run(msg, transfer, which) {
    if (!this.workers.length) {
      return new Promise((r) => setTimeout(r, 0)).then(() =>
        msg.kind === 'prep' ? prep(msg.inp) : post(msg.outX, msg.outXt, msg.len));
    }
    const w = which ?? this.busy.indexOf(Math.min(...this.busy));
    const id = this.nextId++;
    this.busy[w]++;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject, w });
      this.workers[w].postMessage({ ...msg, id }, transfer);
    });
  }
  close() { this.workers.forEach((w) => w.terminate()); }
}

// ORT may hand back views into a larger buffer; only transfer whole buffers.
const own = (a) => (a.byteOffset === 0 && a.buffer.byteLength === a.byteLength ? a : a.slice());

async function forward(inp, mag) {
  const [inMix, inMag] = session.inputNames;
  const res = await session.run({
    [inMix]: new ort.Tensor('float32', inp, [1, 2, SEGMENT]),
    [inMag]: new ort.Tensor('float32', mag, [1, 4, 2048, mag.length / (4 * 2048)]),
  });
  const [o1, o2] = session.outputNames;
  return { outX: own(res[o1].data), outXt: own(res[o2].data) };
}

// Splits the song into overlapping 7.8 s chunks (as demucs apply_model does)
// and keeps the GPU busy: STFT of upcoming chunks and ISTFT of finished ones
// run in the DSP workers while the model runs on the current chunk.
async function run(channelData, overlap) {
  const t0 = performance.now();
  const n = channelData[0].length;
  const stride = Math.floor((1 - overlap) * SEGMENT);
  const offsets = [];
  for (let o = 0; o < n; o += stride) offsets.push(o);
  const total = offsets.length;
  post_({ type: 'progress', step: 0, total, elapsed: 0 });

  const weight = new Float32Array(SEGMENT);
  for (let i = 0; i < SEGMENT; i++) weight[i] = i <= SEGMENT / 2 ? i + 1 : SEGMENT - i;
  const maxW = Math.max(...weight.subarray(Math.floor(SEGMENT / 2) - 1, Math.floor(SEGMENT / 2) + 2));
  for (let i = 0; i < SEGMENT; i++) weight[i] /= maxW;

  const vocals = [new Float32Array(n), new Float32Array(n)];
  const inst = [new Float32Array(n), new Float32Array(n)];
  const sumW = new Float32Array(n);

  const pool = await DspPool.create();
  const inputs = new Map(), mags = new Map(), pending = new Set();
  let gpuMs = 0, done = 0;

  const chunkInput = (i) => {
    const off = offsets[i], len = Math.min(SEGMENT, n - off);
    const start = off - Math.floor((SEGMENT - len) / 2);
    const inp = new Float32Array(2 * SEGMENT);
    const a = Math.max(0, start), b = Math.min(n, start + SEGMENT);
    for (let c = 0; c < 2; c++) inp.set(channelData[c].subarray(a, b), c * SEGMENT + a - start);
    return inp;
  };
  const startPrep = (i) => {
    if (i >= total || inputs.has(i)) return;
    const inp = chunkInput(i);
    inputs.set(i, inp);
    const copy = inp.slice();
    mags.set(i, pool.run({ kind: 'prep', inp: copy }, [copy.buffer]));
  };
  const accumulate = (i, y) => {
    const off = offsets[i], len = Math.min(SEGMENT, n - off);
    for (let c = 0; c < 2; c++) {
      const v = vocals[c], s = inst[c];
      const rv = (3 * 2 + c) * len, r0 = c * len, r1 = (2 + c) * len, r2 = (4 + c) * len;
      for (let t = 0; t < len; t++) {
        const w = weight[t];
        v[off + t] += w * y[rv + t];
        s[off + t] += w * (y[r0 + t] + y[r1 + t] + y[r2 + t]);
      }
    }
    for (let t = 0; t < len; t++) sumW[off + t] += weight[t];
    done++;
    post_({ type: 'progress', step: done, total, elapsed: performance.now() - t0 });
  };

  const ahead = pool.size + 1;
  try {
    for (let i = 0; i < total; i++) {
      for (let j = i; j <= i + ahead; j++) startPrep(j);
      const mag = await mags.get(i);
      const inp = inputs.get(i);
      mags.delete(i); inputs.delete(i);
      const tg = performance.now();
      const { outX, outXt } = await forward(inp, mag);
      gpuMs += performance.now() - tg;
      while (pending.size > pool.size) await Promise.race(pending);
      const len = Math.min(SEGMENT, n - offsets[i]);
      const p = pool.run({ kind: 'post', outX, outXt, len }, [outX.buffer, outXt.buffer]).then((y) => accumulate(i, y));
      pending.add(p);
      p.then(() => pending.delete(p), () => pending.delete(p));
    }
    await Promise.all(pending);
  } finally {
    pool.close();
  }

  for (let c = 0; c < 2; c++) {
    for (let t = 0; t < n; t++) { vocals[c][t] /= sumW[t]; inst[c][t] /= sumW[t]; }
  }
  const seconds = (performance.now() - t0) / 1000;
  console.log(`[vocal-remover] ${total} đoạn, tổng ${seconds.toFixed(1)} s, mô hình ${(gpuMs / 1000).toFixed(1)} s (${(gpuMs / total).toFixed(0)} ms/đoạn), ${backend} ${gpuName}, ${pool.workers.length} DSP worker`);
  post_({ type: 'done', vocals, inst, seconds, modelSeconds: gpuMs / 1000, chunks: total, backend, gpu: gpuName },
    [...vocals.map((c) => c.buffer), ...inst.map((c) => c.buffer)]);
}

self.addEventListener('unhandledrejection', (e) => post_({ type: 'error', message: String(e.reason?.message || e.reason) }));
self.addEventListener('error', (e) => post_({ type: 'error', message: String(e.message) }));

self.onmessage = async ({ data }) => {
  try {
    if (data.type === 'init') { base = data.base; await init(data.preferGpu !== false, !!data.allowSoftwareGpu); }
    else if (data.type === 'run') await run(data.channelData, data.overlap ?? 0.25);
  } catch (e) {
    post_({ type: 'error', message: String(e?.message || e) });
  }
};
