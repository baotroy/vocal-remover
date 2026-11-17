import onnx, numpy as np, sys, os
src, out = sys.argv[1], sys.argv[2]
m = onnx.load(src)
bufs = []; off = 0
for t in m.graph.initializer:
    raw = t.raw_data
    n = len(raw)
    del t.external_data[:]
    t.data_location = onnx.TensorProto.EXTERNAL
    for k, v in (("location", "weights.bin"), ("offset", str(off)), ("length", str(n))):
        e = t.external_data.add(); e.key = k; e.value = v
    t.ClearField("raw_data")
    bufs.append(raw); off += n
onnx.save(m, os.path.join(out, "htdemucs.graph.onnx"))
w32 = np.frombuffer(b"".join(bufs), dtype=np.float32)
w32.tofile(os.path.join(out, "weights.bin"))  # fp32 for local verification
w16 = w32.astype(np.float16)
print("overflow", np.isinf(w16).sum(), "n", w32.size, "maxabs", np.abs(w32).max())
b = w16.tobytes(); CH = 14 * 1024 * 1024
os.makedirs(os.path.join(out, "model"), exist_ok=True)
for i in range(0, len(b), CH):
    open(os.path.join(out, "model", f"w16.{i//CH:02d}.bin"), "wb").write(b[i:i+CH])
print("chunks", (len(b)+CH-1)//CH)
