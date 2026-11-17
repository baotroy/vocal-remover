// Per-chunk pre/post-processing around the HTDemucs ONNX model. Runs in the
// DSP workers (or inline when workers are unavailable).
import { specMag, ispecRows } from './fastdsp.js';

export const SR = 44100;
export const SEGMENT = Math.floor(7.8 * SR); // 343980 samples, the model's fixed input
export const SOURCES = ['drums', 'bass', 'other', 'vocals'];
const CH = 2;
const ROWS = SOURCES.length * CH;
const FRAMES = Math.ceil(SEGMENT / 1024); // 336

// inp: planar [2 * SEGMENT] chunk (already centred and zero padded).
// Returns the model's spectrogram input [4, 2048, 336].
export function prep(inp) {
  return specMag(inp, CH, SEGMENT);
}

// outX: model frequency output [4 sources, 4, 2048, 336]; outXt: time output
// [4, 2, SEGMENT]. Returns planar [8 rows, len] (row = source * 2 + channel),
// centre-trimmed to the chunk's real length like demucs' apply_model.
export function post(outX, outXt, len) {
  const y = ispecRows(outX, ROWS, FRAMES, SEGMENT);
  const start = Math.floor((SEGMENT - len) / 2);
  const out = new Float32Array(ROWS * len);
  for (let r = 0; r < ROWS; r++) {
    const o = r * SEGMENT + start, d = r * len;
    for (let j = 0; j < len; j++) out[d + j] = y[o + j] + outXt[o + j];
  }
  return out;
}
