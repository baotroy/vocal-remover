# Tách Vocal & Beat

Trang web tách giọng hát (vocal) và nhạc nền (instrumental) chạy hoàn toàn trên trình duyệt, giống brizm.dev/vocal-remover. File nhạc không được upload đi đâu.

- Mô hình: Hybrid Transformer Demucs v4 (`htdemucs`, Meta), bản ONNX của dự án [demucs-js](https://github.com/bakkot/demucs-js). Trọng số chỉ dành cho mục đích cá nhân / nghiên cứu.
- Chạy bằng ONNX Runtime Web: WebGPU nếu trình duyệt có (Chrome, Edge), không thì WASM trên CPU (chậm hơn nhiều).
- Kết quả: `vocal.wav` và `nhac-nen.wav` (= trống + bass + nhạc cụ khác), 16-bit, 44.1 kHz.

## Chạy trên máy

```sh
cd vocal-remover
python3 -m http.server 8000
# mở http://localhost:8000/
```

Trang cần được mở qua http(s), không mở trực tiếp bằng file://.

## Cấu trúc

| Đường dẫn | Nội dung |
|---|---|
| `index.html` | Giao diện (HTML/CSS/JS thuần, không cần build) |
| `src/worker.js` | Web Worker: tải mô hình, chạy ONNX Runtime, ghép stem |
| `src/vendor/` | STFT + chia đoạn của demucs-js (MIT) |
| `dist/worker.js` | Worker đã bundle (esbuild) kèm onnxruntime-web 1.22.0 |
| `model/htdemucs.graph.wasm` | Đồ thị mô hình ONNX, trọng số để ngoài (`weights.bin`) |
| `model/w16.*.wasm` | Trọng số lưu dạng float16, chia 6 phần ≤ 14 MB; worker đổi lại float32 khi nạp |
| `ort/ort-wasm.*.wasm` | File WASM của ONNX Runtime (bản WebGPU/JSEP) chia 2 phần |
| `tools/convert.py` | Script tạo `model/` từ `htdemucs.onnx` của gói npm `demucs` |

Các file lớn được chia nhỏ để vừa giới hạn 15 MB/file khi đăng lên claude.ai. Lưu trọng số dạng float16 làm sai lệch đầu ra khoảng 0,01% so với float32.

## Build lại worker

```sh
npm i esbuild@0.24.2 onnxruntime-web@1.22.0
npx esbuild src/worker.js --bundle --format=esm --minify --outfile=dist/worker.js
# tách lại file wasm nếu đổi phiên bản onnxruntime-web
W=node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.jsep.wasm
head -c 11000000 $W > ort/ort-wasm.0.wasm && tail -c +11000001 $W > ort/ort-wasm.1.wasm
```

Khi đổi phiên bản, cập nhật `TOTAL_BYTES` trong `src/worker.js` (chỉ dùng cho thanh tiến trình).

Các file nhị phân (mô hình, trọng số) mang đuôi `.wasm` chỉ để máy chủ artifact chịu phục vụ chúng; nội dung thật là ONNX / float16 thô.
