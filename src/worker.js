// Separation worker: loads ONNX Runtime + the Hybrid Transformer Demucs model
// and splits stereo 44.1 kHz audio into vocals and instrumental.
import * as ort from 'onnxruntime-web/webgpu';
import { separateTracks } from './vendor/apply.js';

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

const post = (msg, transfer) => self.postMessage(msg, transfer || []);

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

// Software WebGPU (SwiftShader) is far slower than plain WASM, so skip it.
async function hasRealGpu() {
  try {
    const a = await navigator.gpu?.requestAdapter();
    if (!a || a.isFallbackAdapter || a.info?.isFallbackAdapter) return false;
    const info = a.info || {};
    return !/swiftshader|llvmpipe|software/i.test(`${info.vendor} ${info.architecture} ${info.description}`);
  } catch { return false; }
}

const TOTAL_BYTES = 21872216 + 6357251 + 83967712; // wasm + graph + fp16 weights

async function init(preferGpu) {
  let done = 0;
  const onBytes = (n) => { done += n; post({ type: 'load', done, total: TOTAL_BYTES }); };

  ort.env.wasm.wasmBinary = (await fetchParts(FILES.wasm, onBytes)).buffer;
  ort.env.wasm.numThreads = self.crossOriginIsolated ? Math.min(4, navigator.hardwareConcurrency || 1) : 1;
  ort.env.wasm.proxy = false;

  const graph = await fetchParts(FILES.graph, onBytes);
  const weights = halfToFloat(await fetchParts(FILES.weights, onBytes));
  post({ type: 'status', text: 'Đang khởi tạo mô hình…' });

  const attempts = [];
  if (preferGpu && await hasRealGpu()) attempts.push('webgpu');
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
  post({ type: 'ready', backend });
}

// Adapter with the interface vendor/apply.js expects.
const model = {
  sources: ['drums', 'bass', 'other', 'vocals'],
  audioChannels: 2,
  samplerate: 44100,
  segment: 7.8,
  validLength(length) {
    const training = Math.floor(this.segment * this.samplerate);
    if (training < length) throw new Error(`Segment ${length} > ${training}`);
    return training;
  },
  async forward(mix, magspec) {
    const [inMix, inMag] = session.inputNames;
    const res = await session.run({
      [inMix]: new ort.Tensor('float32', mix.data, mix.shape),
      [inMag]: new ort.Tensor('float32', magspec.data, magspec.shape),
    });
    const [o1, o2] = session.outputNames;
    return {
      outX: { data: res[o1].data, shape: res[o1].dims },
      outXt: { data: res[o2].data, shape: res[o2].dims },
    };
  },
};

async function run(channelData, overlap) {
  const t0 = performance.now();
  const tracks = await separateTracks(model, { channelData, sampleRate: 44100 },
    (step, total) => post({ type: 'progress', step, total, elapsed: performance.now() - t0 }), overlap);
  const n = channelData[0].length;
  const vocals = tracks.vocals.channelData.map((c) => new Float32Array(c));
  const inst = [0, 1].map((ch) => {
    const out = new Float32Array(n);
    for (const s of ['drums', 'bass', 'other']) {
      const src = tracks[s].channelData[ch];
      for (let i = 0; i < n; i++) out[i] += src[i];
    }
    return out;
  });
  post({ type: 'done', vocals, inst, seconds: (performance.now() - t0) / 1000, backend },
    [...vocals.map((c) => c.buffer), ...inst.map((c) => c.buffer)]);
}

self.addEventListener('unhandledrejection', (e) => post({ type: 'error', message: String(e.reason?.message || e.reason) }));
self.addEventListener('error', (e) => post({ type: 'error', message: String(e.message) }));

self.onmessage = async ({ data }) => {
  try {
    if (data.type === 'init') { base = data.base; await init(data.preferGpu !== false); }
    else if (data.type === 'run') await run(data.channelData, data.overlap ?? 0.25);
  } catch (e) {
    post({ type: 'error', message: String(e?.message || e) });
  }
};
