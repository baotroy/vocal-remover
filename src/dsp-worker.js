// Helper worker: STFT before and ISTFT after each model call, so the CPU work
// runs in parallel with GPU inference instead of between GPU calls.
import { prep, post } from './chunk.js';

self.onmessage = ({ data: m }) => {
  try {
    if (m.kind === 'ping') { self.postMessage({ id: m.id }); return; }
    const out = m.kind === 'prep' ? prep(m.inp) : post(m.outX, m.outXt, m.len);
    self.postMessage({ id: m.id, out }, [out.buffer]);
  } catch (e) {
    self.postMessage({ id: m.id, error: String(e?.message || e) });
  }
};
