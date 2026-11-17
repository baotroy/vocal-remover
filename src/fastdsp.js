// Fast STFT / ISTFT for HTDemucs, matching demucs HTDemucs._spec / _ispec,
// i.e. torch.stft / torch.istft with n_fft=4096, hop=1024, periodic Hann
// window, normalized=True, center=True and reflect padding.
//
// Replaces the vendor dsp.js path, which recomputed twiddles with Math.cos /
// Math.sin inside every butterfly, ran one full complex FFT per real frame,
// reflected the left padding incorrectly and returned the last 2476 samples of
// every istft row from the wrong row (NaN on the last row).

const N = 4096;          // n_fft
const HOP = 1024;        // hop length
const NF = N / 2;        // frequency bins kept (Nyquist dropped)
const PAD = (HOP / 2) * 3; // demucs pads 1536 samples each side before the STFT
const NORM = 1 / Math.sqrt(N);

const rev = new Uint16Array(N);
for (let i = 0; i < N; i++) {
  let r = 0;
  for (let b = 0, x = i; b < 12; b++, x >>= 1) r = (r << 1) | (x & 1);
  rev[i] = r;
}
const cosT = new Float64Array(N / 2);
const sinT = new Float64Array(N / 2);
for (let k = 0; k < N / 2; k++) { cosT[k] = Math.cos(2 * Math.PI * k / N); sinT[k] = Math.sin(2 * Math.PI * k / N); }
const win = new Float64Array(N);
for (let i = 0; i < N; i++) win[i] = 0.5 * (1 - Math.cos(2 * Math.PI * i / N));

// In-place radix-2 complex FFT of size N. sign -1: forward, +1: inverse (unscaled).
function fft(re, im, sign) {
  for (let i = 0; i < N; i++) {
    const j = rev[i];
    if (i < j) {
      let t = re[i]; re[i] = re[j]; re[j] = t;
      t = im[i]; im[i] = im[j]; im[j] = t;
    }
  }
  for (let size = 2; size <= N; size <<= 1) {
    const half = size >> 1, step = N / size;
    for (let k = 0, j = 0; j < half; j++, k += step) {
      const wr = cosT[k], wi = sign * sinT[k];
      for (let a = j; a < N; a += size) {
        const b = a + half;
        const br = re[b], bi = im[b];
        const tr = wr * br - wi * bi, ti = wr * bi + wi * br;
        re[b] = re[a] - tr; im[b] = im[a] - ti;
        re[a] += tr; im[a] += ti;
      }
    }
  }
}

// torch 'reflect' index into [0, len).
const reflect = (i, len) => (i < 0 ? -i : i >= len ? 2 * (len - 1) - i : i);

/**
 * Model input spectrogram ("magspec"): real/imag of HTDemucs._spec(x).
 * x: planar Float32Array [C * L]. Returns Float32Array [C*2, 2048, le],
 * channel 2c = real, 2c+1 = imag, le = ceil(L / 1024).
 */
export function specMag(x, C, L) {
  const le = Math.ceil(L / HOP);
  const out = new Float32Array(C * 2 * NF * le);
  const re = new Float64Array(N), im = new Float64Array(N);
  // Frame t of the kept range starts at sample t*HOP - PAD of x (after the
  // demucs pad, torch's center pad and dropping the first two frames), with
  // reflect padding at both ends. Two real channels share one complex FFT.
  const store = (c, t, k, r, i) => {
    out[((2 * c) * NF + k) * le + t] = r;
    out[((2 * c + 1) * NF + k) * le + t] = i;
  };
  for (let c0 = 0; c0 < C; c0 += 2) {
    const c1 = c0 + 1 < C ? c0 + 1 : -1;
    const x0 = c0 * L, x1 = c1 * L;
    for (let t = 0; t < le; t++) {
      const s = t * HOP - PAD;
      for (let i = 0; i < N; i++) {
        const idx = reflect(s + i, L), w = win[i] * NORM;
        re[i] = x[x0 + idx] * w;
        im[i] = c1 >= 0 ? x[x1 + idx] * w : 0;
      }
      fft(re, im, -1);
      for (let k = 0; k < NF; k++) {
        const m = (N - k) & (N - 1);
        const a = re[k], b = im[k], cc = re[m], d = im[m];
        store(c0, t, k, (a + cc) / 2, (b - d) / 2);
        if (c1 >= 0) store(c1, t, k, (b + d) / 2, (cc - a) / 2);
      }
    }
  }
  return out;
}

/**
 * HTDemucs._ispec of the model's frequency-branch output.
 * z: Float32Array [rows*2, 2048, le] with real/imag interleaved per row
 * (the model output [1, S, C*2, 2048, le] is laid out like this with
 * rows = S*C). Returns planar Float32Array [rows * length].
 */
export function ispecRows(z, rows, le, length) {
  const out = new Float32Array(rows * length);
  const re = new Float64Array(N), im = new Float64Array(N);
  // demucs pads 2 empty frames each side, so data frame t is istft frame t+2;
  // output sample j sits at uncentered position j + 2048 (center) + 1536 (pad).
  const OFF = NF + PAD;
  const env = new Float64Array(length);
  const frames = le + 4;
  for (let f = 0; f < frames; f++) {
    const start = f * HOP - OFF;
    for (let i = Math.max(0, -start); i < N && start + i < length; i++) env[start + i] += win[i] * win[i];
  }
  const scale = NORM; // irfft's 1/N times sqrt(N) from normalized=True
  const plane = NF * le;
  for (let r0 = 0; r0 < rows; r0 += 2) {
    const r1 = r0 + 1 < rows ? r0 + 1 : -1;
    const re0 = 2 * r0 * plane, im0 = re0 + plane;
    const re1 = 2 * r1 * plane, im1 = re1 + plane;
    for (let t = 0; t < le; t++) {
      // Z = X0 + i*X1 over the full Hermitian spectrum; the inverse FFT then
      // gives row r0 in the real part and row r1 in the imaginary part.
      // DC imaginary parts are dropped and Nyquist is zero, as in irfft.
      re[0] = z[re0 + t]; im[0] = r1 >= 0 ? z[re1 + t] : 0;
      re[NF] = 0; im[NF] = 0;
      for (let k = 1; k < NF; k++) {
        const o = k * le + t;
        const ar = z[re0 + o], ai = z[im0 + o];
        const br = r1 >= 0 ? z[re1 + o] : 0, bi = r1 >= 0 ? z[im1 + o] : 0;
        re[k] = ar - bi; im[k] = ai + br;
        re[N - k] = ar + bi; im[N - k] = br - ai;
      }
      fft(re, im, 1);
      const start = (t + 2) * HOP - OFF;
      const o0 = r0 * length, o1 = r1 * length;
      for (let i = Math.max(0, -start); i < N && start + i < length; i++) {
        const w = win[i] * scale;
        out[o0 + start + i] += re[i] * w;
        if (r1 >= 0) out[o1 + start + i] += im[i] * w;
      }
    }
  }
  for (let r = 0; r < rows; r++) {
    const o = r * length;
    for (let j = 0; j < length; j++) if (env[j] > 1e-11) out[o + j] /= env[j];
  }
  return out;
}
