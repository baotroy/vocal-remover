var yt=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var zi=Object.defineProperty,mm=Object.getOwnPropertyDescriptor,gm=Object.getOwnPropertyNames,ym=Object.prototype.hasOwnProperty,_m=(e=>typeof yt<"u"?yt:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof yt<"u"?yt:t)[r]}):e)(function(e){if(typeof yt<"u")return yt.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),U=(e,t)=>()=>(e&&(t=e(e=0)),t),Ut=(e,t)=>{for(var r in t)zi(e,r,{get:t[r],enumerable:!0})},wm=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of gm(t))!ym.call(e,i)&&i!==r&&zi(e,i,{get:()=>t[i],enumerable:!(a=mm(t,i))||a.enumerable});return e},nr=e=>wm(zi({},"__esModule",{value:!0}),e),Vt,dt,Rt,$s,ed,td=U(()=>{"use strict";Vt=new Map,dt=[],Rt=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let a=Vt.get(e);if(a===void 0)Vt.set(e,{backend:t,priority:r});else{if(a.priority>r)return;if(a.priority===r&&a.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let i=dt.indexOf(e);i!==-1&&dt.splice(i,1);for(let n=0;n<dt.length;n++)if(Vt.get(dt[n]).priority<=r){dt.splice(n,0,e);return}dt.push(e)}return}throw new TypeError("not a valid backend")},$s=async e=>{let t=Vt.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(a){return r||(t.error=`${a}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},ed=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),a=r.length===0?dt:r,i,n=[],s=new Set;for(let l of a){let d=await $s(l);typeof d=="string"?n.push({name:l,err:d}):(i||(i=d),i===d&&s.add(l))}if(!i)throw new Error(`no available backend found. ERR: ${n.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of n)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let o=t.filter(l=>s.has(typeof l=="string"?l:l.name));return[i,new Proxy(e,{get:(l,d)=>d==="executionProviders"?o:Reflect.get(l,d)})]}}),bm=U(()=>{"use strict";td()}),rd,$m=U(()=>{"use strict";rd="1.22.0"}),fa,Pe,ad=U(()=>{"use strict";$m(),fa="warning",Pe={wasm:{},webgl:{},webgpu:{},versions:{common:rd},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);fa=e}},get logLevel(){return fa}},Object.defineProperty(Pe,"logLevel",{enumerable:!0})}),he,vm=U(()=>{"use strict";ad(),he=Pe}),id,nd,xm=U(()=>{"use strict";id=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let a=r.getContext("2d");if(a!=null){let i,n;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],n=e.dims[3]):(i=e.dims[3],n=e.dims[2]);let s=t?.format!==void 0?t.format:"RGB",o=t?.norm,l,d;o===void 0||o.mean===void 0?l=[255,255,255,255]:typeof o.mean=="number"?l=[o.mean,o.mean,o.mean,o.mean]:(l=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(l[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let c=n*i,f=0,h=c,y=c*2,m=-1;s==="RGBA"?(f=0,h=c,y=c*2,m=c*3):s==="RGB"?(f=0,h=c,y=c*2):s==="RBG"&&(f=0,y=c,h=c*2);for(let w=0;w<n;w++)for(let k=0;k<i;k++){let b=(e.data[f++]-d[0])*l[0],_=(e.data[h++]-d[1])*l[1],S=(e.data[y++]-d[2])*l[2],v=m===-1?255:(e.data[m++]-d[3])*l[3];a.fillStyle="rgba("+b+","+_+","+S+","+v+")",a.fillRect(k,w,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},nd=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),a;if(r!=null){let i,n,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(i=e.dims[2],n=e.dims[1],s=e.dims[3]):(i=e.dims[3],n=e.dims[2],s=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t?.norm,d,c;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?c=[0,0,0,0]:typeof l.bias=="number"?c=[l.bias,l.bias,l.bias,l.bias]:(c=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(c[3]=l.bias[3]));let f=n*i;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let h=4,y=0,m=1,w=2,k=3,b=0,_=f,S=f*2,v=-1;o==="RGBA"?(b=0,_=f,S=f*2,v=f*3):o==="RGB"?(b=0,_=f,S=f*2):o==="RBG"&&(b=0,S=f,_=f*2),a=r.createImageData(i,n);for(let T=0;T<n*i;y+=h,m+=h,w+=h,k+=h,T++)a.data[y]=(e.data[b++]-c[0])*d[0],a.data[m]=(e.data[_++]-c[1])*d[1],a.data[w]=(e.data[S++]-c[2])*d[2],a.data[k]=v===-1?255:(e.data[v++]-c[3])*d[3]}else throw new Error("Can not access image data");return a}}),br,sd,od,ud,ld,dd,km=U(()=>{"use strict";Ci(),br=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:a}=t,i=t.norm??{mean:255,bias:0},n,s;typeof i.mean=="number"?n=[i.mean,i.mean,i.mean,i.mean]:n=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?s=[i.bias,i.bias,i.bias,i.bias]:s=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*a,c=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),f=4,h=0,y=1,m=2,w=3,k=0,b=d,_=d*2,S=-1;o==="RGB"&&(f=3,h=0,y=1,m=2,w=-1),l==="RGBA"?S=d*3:l==="RBG"?(k=0,_=d,b=d*2):l==="BGR"&&(_=0,b=d,k=d*2);for(let v=0;v<d;v++,h+=f,m+=f,y+=f,w+=f)c[k++]=(e[h]+s[0])/n[0],c[b++]=(e[y]+s[1])/n[1],c[_++]=(e[m]+s[2])/n[2],S!==-1&&w!==-1&&(c[S++]=(e[w]+s[3])/n[3]);return l==="RGBA"?new Be("float32",c,[1,4,r,a]):new Be("float32",c,[1,3,r,a])},sd=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,a=typeof ImageData<"u"&&e instanceof ImageData,i=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,n=typeof e=="string",s,o=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(r){let c=l();c.width=e.width,c.height=e.height;let f=d(c);if(f!=null){let h=e.height,y=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(h=t.resizedHeight,y=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=h,o.width=y}else o.tensorFormat="RGBA",o.height=h,o.width=y;f.drawImage(e,0,0),s=f.getImageData(0,0,y,h).data}else throw new Error("Can not access image data")}else if(a){let c,f;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,f=t.resizedWidth):(c=e.height,f=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=c,o.width=f,t!==void 0){let h=l();h.width=f,h.height=c;let y=d(h);if(y!=null)y.putImageData(e,0,0),s=y.getImageData(0,0,f,c).data;else throw new Error("Can not access image data")}else s=e.data}else if(i){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=l();c.width=e.width,c.height=e.height;let f=d(c);if(f!=null){let h=e.height,y=e.width;return f.drawImage(e,0,0,y,h),s=f.getImageData(0,0,y,h).data,o.height=h,o.width=y,br(s,o)}else throw new Error("Can not access image data")}else{if(n)return new Promise((c,f)=>{let h=l(),y=d(h);if(!e||!y)return f();let m=new Image;m.crossOrigin="Anonymous",m.src=e,m.onload=()=>{h.width=m.width,h.height=m.height,y.drawImage(m,0,0,h.width,h.height);let w=y.getImageData(0,0,h.width,h.height);o.height=h.height,o.width=h.width,c(br(w.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return br(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},od=(e,t)=>{let{width:r,height:a,download:i,dispose:n}=t,s=[1,a,r,4];return new Be({location:"texture",type:"float32",texture:e,dims:s,download:i,dispose:n})},ud=(e,t)=>{let{dataType:r,dims:a,download:i,dispose:n}=t;return new Be({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:a,download:i,dispose:n})},ld=(e,t)=>{let{dataType:r,dims:a,download:i,dispose:n}=t;return new Be({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:a,download:i,dispose:n})},dd=(e,t,r)=>new Be({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),vt,er,ha,pd,Sm=U(()=>{"use strict";vt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),er=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),ha=!1,pd=()=>{if(!ha){ha=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,a=typeof r<"u"&&r.from;e&&(vt.set("int64",BigInt64Array),er.set(BigInt64Array,"int64")),t&&(vt.set("uint64",BigUint64Array),er.set(BigUint64Array,"uint64")),a?(vt.set("float16",r),er.set(r,"float16")):vt.set("float16",Uint16Array)}}}),cd,fd,Tm=U(()=>{"use strict";Ci(),cd=e=>{let t=1;for(let r=0;r<e.length;r++){let a=e[r];if(typeof a!="number"||!Number.isSafeInteger(a))throw new TypeError(`dims[${r}] must be an integer, got: ${a}`);if(a<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${a}`);t*=a}return t},fd=(e,t)=>{switch(e.location){case"cpu":return new Be(e.type,e.data,t);case"cpu-pinned":return new Be({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Be({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Be({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Be({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Be,Ci=U(()=>{"use strict";xm(),km(),Sm(),Tm(),Be=class{constructor(e,t,r){pd();let a,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,a=e.type,i=e.dims,e.location){case"cpu-pinned":{let s=vt.get(a);if(!s)throw new TypeError(`unsupported type "${a}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(a!=="float32")throw new TypeError(`unsupported type "${a}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint64"&&a!=="int8"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(a=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let l=vt.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?s=l.from(t,BigInt):s=l.from(t)}else if(t instanceof l)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${a} tensor's data must be type of ${l}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")a="string",s=e;else if(l==="boolean")a="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)a="uint8",s=Uint8Array.from(e);else{let l=er.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);a=l,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");i=o,this.cpuData=s,this.dataLocation="cpu"}let n=cd(i);if(this.cpuData&&n!==this.cpuData.length&&!((a==="uint4"||a==="int4")&&Math.ceil(n/2)===this.cpuData.length))throw new Error(`Tensor's size(${n}) does not match data length(${this.cpuData.length}).`);this.type=a,this.dims=i,this.size=n}static async fromImage(e,t){return sd(e,t)}static fromTexture(e,t){return od(e,t)}static fromGpuBuffer(e,t){return ud(e,t)}static fromMLTensor(e,t){return ld(e,t)}static fromPinnedBuffer(e,t,r){return dd(e,t,r)}toDataURL(e){return id(this,e)}toImageData(e){return nd(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return fd(this,e)}}}),Re,hd=U(()=>{"use strict";Ci(),Re=Be}),Mr,ma,Ye,He,md=U(()=>{"use strict";ad(),Mr=(e,t)=>{(typeof Pe.trace>"u"?!Pe.wasm.trace:!Pe.trace)||console.timeStamp(`${e}::ORT::${t}`)},ma=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],a=!1;for(let i=0;i<r.length;i++){if(a&&!r[i].includes("TRACE_FUNC")){let n=`FUNC_${e}::${r[i].trim().split(" ")[1]}`;t&&(n+=`::${t}`),Mr("CPU",n);return}r[i].includes("TRACE_FUNC")&&(a=!0)}},Ye=e=>{(typeof Pe.trace>"u"?!Pe.wasm.trace:!Pe.trace)||ma("BEGIN",e)},He=e=>{(typeof Pe.trace>"u"?!Pe.wasm.trace:!Pe.trace)||ma("END",e)}}),gd,Im=U(()=>{"use strict";td(),hd(),md(),gd=class yd{constructor(t){this.handler=t}async run(t,r,a){Ye();let i={},n={};if(typeof t!="object"||t===null||t instanceof Re||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Re)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);i[d]=null}if(typeof a=="object"&&a!==null)n=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,c=Object.getOwnPropertyNames(r);for(let f of this.outputNames)if(c.indexOf(f)!==-1){let h=r[f];(h===null||h instanceof Re)&&(d=!0,s=!1,i[f]=h)}if(d){if(typeof a=="object"&&a!==null)n=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else n=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)i[d]=null;let o=await this.handler.run(t,i,n),l={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let c=o[d];c instanceof Re?l[d]=c:l[d]=new Re(c.type,c.data,c.dims)}return He(),l}async release(){return this.handler.dispose()}static async create(t,r,a,i){Ye();let n,s={};if(typeof t=="string"){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,f=0,h=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteOffset' must be an integer.");if(f<0||f>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(h=t.byteLength-f,typeof a=="number"){if(h=a,!Number.isSafeInteger(h))throw new RangeError("'byteLength' must be an integer.");if(h<=0||f+h>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-f}].`);if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof a<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");n=new Uint8Array(c,f,h)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,l]=await ed(s),d=await o.createInferenceSessionHandler(n,l);return He(),new yd(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Vr,Em=U(()=>{"use strict";Im(),Vr=gd}),zm=U(()=>{"use strict"}),Cm=U(()=>{"use strict"}),Am=U(()=>{"use strict"}),Om=U(()=>{"use strict"}),Bm={};Ut(Bm,{InferenceSession:()=>Vr,TRACE:()=>Mr,TRACE_FUNC_BEGIN:()=>Ye,TRACE_FUNC_END:()=>He,Tensor:()=>Re,env:()=>he,registerBackend:()=>Rt});var je=U(()=>{"use strict";bm(),vm(),Em(),hd(),zm(),Cm(),md(),Am(),Om()}),Ai=U(()=>{"use strict"}),_d={};Ut(_d,{default:()=>wd});var ga,ya,wd,Rm=U(()=>{"use strict";Sf(),Et(),Oi(),ga="ort-wasm-proxy-worker",ya=globalThis.self?.name===ga,ya&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":Bi(r.wasm).then(()=>{Qi(r).then(()=>{postMessage({type:t})},a=>{postMessage({type:t,err:a})})},a=>{postMessage({type:t,err:a})});break;case"init-ep":{let{epName:a,env:i}=r;Xi(i,a).then(()=>{postMessage({type:t})},n=>{postMessage({type:t,err:n})});break}case"copy-from":{let{buffer:a}=r,i=Lr(a);postMessage({type:t,out:i});break}case"create":{let{model:a,options:i}=r;Yi(a,i).then(n=>{postMessage({type:t,out:n})},n=>{postMessage({type:t,err:n})});break}case"release":Ji(r),postMessage({type:t});break;case"run":{let{sessionId:a,inputIndices:i,inputs:n,outputIndices:s,options:o}=r;en(a,i,n,s,new Array(s.length).fill(null),o).then(l=>{l.some(d=>d[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:l},rn([...n,...l]))},l=>{postMessage({type:t,err:l})});break}case"end-profiling":tn(r),postMessage({type:t});break;default:}}catch(a){postMessage({type:t,err:a})}}),wd=ya?null:e=>new Worker(e??Oe,{type:"module",name:ga})}),bd={};Ut(bd,{default:()=>$d});var _a,wa,$d,vs,Mm=U(()=>{"use strict";wa=(_a=import.meta.url,async function(e={}){var t,r,a=e,i=new Promise((u,p)=>{t=u,r=p}),n=typeof window=="object",s=typeof WorkerGlobalScope<"u",o=s&&self.name?.startsWith("em-pthread");a.mountExternalData=(u,p)=>{u.startsWith("./")&&(u=u.substring(2)),(a.Fb||(a.Fb=new Map)).set(u,p)},a.unmountExternalData=()=>{delete a.Fb};var l=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,qc:!0}).buffer.constructor;let d=u=>async(...p)=>{try{if(a.Gb)throw Error("Session already started");let g=a.Gb={ec:p[0],errors:[]},$=await u(...p);if(a.Gb!==g)throw Error("Session mismatch");a.Kb?.flush();let x=g.errors;if(0<x.length){let E=await Promise.all(x);if(E=E.filter(B=>B),0<E.length)throw Error(E.join(`
`))}return $}finally{a.Gb=null}};a.jsepInit=(u,p)=>{if(u==="webgpu"){[a.Kb,a.Vb,a.Zb,a.Lb,a.Yb,a.kb,a.$b,a.bc,a.Wb,a.Xb,a.ac]=p;let g=a.Kb;a.jsepRegisterBuffer=($,x,E,B)=>g.registerBuffer($,x,E,B),a.jsepGetBuffer=$=>g.getBuffer($),a.jsepCreateDownloader=($,x,E)=>g.createDownloader($,x,E),a.jsepOnCreateSession=$=>{g.onCreateSession($)},a.jsepOnReleaseSession=$=>{g.onReleaseSession($)},a.jsepOnRunStart=$=>g.onRunStart($),a.cc=($,x)=>{g.upload($,x)}}else if(u==="webnn"){let g=p[0];[a.oc,a.Ob,a.webnnEnsureTensor,a.Pb,a.webnnDownloadTensor]=p.slice(1),a.webnnReleaseTensorId=a.Ob,a.webnnUploadTensor=a.Pb,a.webnnOnRunStart=$=>g.onRunStart($),a.webnnOnRunEnd=g.onRunEnd.bind(g),a.webnnRegisterMLContext=($,x)=>{g.registerMLContext($,x)},a.webnnOnReleaseSession=$=>{g.onReleaseSession($)},a.webnnCreateMLTensorDownloader=($,x)=>g.createMLTensorDownloader($,x),a.webnnRegisterMLTensor=($,x,E,B)=>g.registerMLTensor($,x,E,B),a.webnnCreateMLContext=$=>g.createMLContext($),a.webnnRegisterMLConstant=($,x,E,B,D,L)=>g.registerMLConstant($,x,E,B,D,a.Fb,L),a.webnnRegisterGraphInput=g.registerGraphInput.bind(g),a.webnnIsGraphInput=g.isGraphInput.bind(g),a.webnnRegisterGraphOutput=g.registerGraphOutput.bind(g),a.webnnIsGraphOutput=g.isGraphOutput.bind(g),a.webnnCreateTemporaryTensor=g.createTemporaryTensor.bind(g),a.webnnIsGraphInputOutputTypeSupported=g.isGraphInputOutputTypeSupported.bind(g)}};let c=()=>{let u=(p,g,$)=>(...x)=>{let E=Ze,B=g?.();x=p(...x);let D=g?.();return B!==D&&(p=D,$(B),g=$=null),Ze!=E?new Promise((L,K)=>{na={resolve:L,reject:K}}):x};(()=>{for(let p of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])a[p]=u(a[p],()=>a[p],g=>a[p]=g)})(),d!==void 0&&(a._OrtRun=d(a._OrtRun),a._OrtRunWithBinding=d(a._OrtRunWithBinding)),c=void 0};a.asyncInit=()=>{c?.()};var f,h,y=Object.assign({},a),m=(u,p)=>{throw p},w="";(n||s)&&(s?w=self.location.href:typeof document<"u"&&document.currentScript&&(w=document.currentScript.src),_a&&(w=_a),w=w.startsWith("blob:")?"":w.slice(0,w.replace(/[?#].*/,"").lastIndexOf("/")+1),s&&(h=u=>{var p=new XMLHttpRequest;return p.open("GET",u,!1),p.responseType="arraybuffer",p.send(null),new Uint8Array(p.response)}),f=async u=>{if(j(u))return new Promise((g,$)=>{var x=new XMLHttpRequest;x.open("GET",u,!0),x.responseType="arraybuffer",x.onload=()=>{x.status==200||x.status==0&&x.response?g(x.response):$(x.status)},x.onerror=$,x.send(null)});var p=await fetch(u,{credentials:"same-origin"});if(p.ok)return p.arrayBuffer();throw Error(p.status+" : "+p.url)});var k=console.log.bind(console),b=console.error.bind(console),_=k,S=b;Object.assign(a,y),y=null;var v,T,I,z,A,M,P,Y,F,ee,q,re,Q,V=a.wasmBinary,oe=!1,j=u=>u.startsWith("file://");function ue(){return v.buffer!=z.buffer&&Ce(),z}function N(){return v.buffer!=z.buffer&&Ce(),A}function W(){return v.buffer!=z.buffer&&Ce(),M}function te(){return v.buffer!=z.buffer&&Ce(),P}function O(){return v.buffer!=z.buffer&&Ce(),Y}function ae(){return v.buffer!=z.buffer&&Ce(),F}function Ie(){return v.buffer!=z.buffer&&Ce(),ee}function Ne(){return v.buffer!=z.buffer&&Ce(),Q}if(o){let u=function(p){try{var g=p.data,$=g.Cb;if($==="load"){let x=[];self.onmessage=E=>x.push(E),self.startWorker=()=>{postMessage({Cb:"loaded"});for(let E of x)u(E);self.onmessage=u};for(let E of g.Sb)a[E]&&!a[E].proxy||(a[E]=(...B)=>{postMessage({Cb:"callHandler",Rb:E,args:B})},E=="print"&&(_=a[E]),E=="printErr"&&(S=a[E]));v=g.lc,Ce(),_e(g.mc)}else if($==="run"){Zf(g.Bb),la(g.Bb,0,0,1,0,0),mn(),aa(g.Bb),Ae||(ls(),Ae=!0);try{Qf(g.hc,g.Ib)}catch(x){if(x!="unwind")throw x}}else g.target!=="setimmediate"&&($==="checkMailbox"?Ae&&lr():$&&(S(`worker: received unknown command ${$}`),S(g)))}catch(x){throw ds(),x}};var ve=u,_e,Ae=!1;S=function(...p){p=p.join(" "),console.error(p)},self.alert=function(...p){postMessage({Cb:"alert",text:p.join(" "),jc:yr()})},self.onunhandledrejection=p=>{throw p.reason||p},self.onmessage=u}function Ce(){var u=v.buffer;a.HEAP8=z=new Int8Array(u),a.HEAP16=M=new Int16Array(u),a.HEAPU8=A=new Uint8Array(u),a.HEAPU16=P=new Uint16Array(u),a.HEAP32=Y=new Int32Array(u),a.HEAPU32=F=new Uint32Array(u),a.HEAPF32=ee=new Float32Array(u),a.HEAPF64=Q=new Float64Array(u),a.HEAP64=q=new BigInt64Array(u),a.HEAPU64=re=new BigUint64Array(u)}function ur(){o?startWorker(a):X.Da()}o||(v=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),Ce());var Fr,Pt=0,qt=null;function un(){if(--Pt==0&&qt){var u=qt;qt=null,u()}}function it(u){throw S(u="Aborted("+u+")"),oe=!0,u=new WebAssembly.RuntimeError(u+". Build with -sASSERTIONS for more info."),r(u),u}function ln(){return{a:{L:Kf,Aa:jf,b:Yf,$:wn,A:vn,pa:xn,X:Sn,Z:Tn,qa:In,na:En,ga:zn,ma:Cn,J:An,Y:On,V:Bn,oa:Rn,W:Mn,va:Jf,E:th,Q:rh,O:ih,D:sh,v:oh,r:uh,P:lh,z:gh,R:yh,ja:_h,T:wh,aa:bh,M:$h,F:vh,ia:aa,sa:xh,t:kh,Ca:Sh,w:Eh,o:zh,m:Ah,c:ea,Ba:Oh,n:Bh,j:Nh,u:Dh,p:Uh,f:Ph,s:qh,l:Wh,e:Lh,k:Vh,h:Gh,g:Fh,d:Hh,da:jh,ea:Kh,fa:Zh,ba:Zn,ca:Qn,N:Xn,xa:Xh,ua:em,i:tm,C:rm,G:am,ta:Yh,x:im,ra:nm,U:sm,q:Qh,y:om,K:um,S:lm,za:dm,ya:pm,ka:ts,la:rs,_:Qr,B:as,I:is,ha:ns,H:ss,a:v,wa:Zr}}}var Hr={840156:(u,p,g,$,x)=>{if(a===void 0||!a.Fb)return 1;if((u=$e(Number(u>>>0))).startsWith("./")&&(u=u.substring(2)),!(u=a.Fb.get(u)))return 2;if(p=Number(p>>>0),g=Number(g>>>0),$=Number($>>>0),p+g>u.byteLength)return 3;try{let E=u.subarray(p,p+g);switch(x){case 0:N().set(E,$>>>0);break;case 1:a.nc?a.nc($,E):a.cc($,E);break;default:return 4}return 0}catch{return 4}},840980:(u,p,g)=>{a.Pb(u,N().subarray(p>>>0,p+g>>>0))},841044:()=>a.oc(),841086:u=>{a.Ob(u)},841123:()=>{a.Wb()},841154:()=>{a.Xb()},841183:()=>{a.ac()},841208:u=>a.Vb(u),841241:u=>a.Zb(u),841273:(u,p,g)=>{a.Lb(Number(u),Number(p),Number(g),!0)},841336:(u,p,g)=>{a.Lb(Number(u),Number(p),Number(g))},841393:()=>typeof wasmOffsetConverter<"u",841450:u=>{a.kb("Abs",u,void 0)},841501:u=>{a.kb("Neg",u,void 0)},841552:u=>{a.kb("Floor",u,void 0)},841605:u=>{a.kb("Ceil",u,void 0)},841657:u=>{a.kb("Reciprocal",u,void 0)},841715:u=>{a.kb("Sqrt",u,void 0)},841767:u=>{a.kb("Exp",u,void 0)},841818:u=>{a.kb("Erf",u,void 0)},841869:u=>{a.kb("Sigmoid",u,void 0)},841924:(u,p,g)=>{a.kb("HardSigmoid",u,{alpha:p,beta:g})},842003:u=>{a.kb("Log",u,void 0)},842054:u=>{a.kb("Sin",u,void 0)},842105:u=>{a.kb("Cos",u,void 0)},842156:u=>{a.kb("Tan",u,void 0)},842207:u=>{a.kb("Asin",u,void 0)},842259:u=>{a.kb("Acos",u,void 0)},842311:u=>{a.kb("Atan",u,void 0)},842363:u=>{a.kb("Sinh",u,void 0)},842415:u=>{a.kb("Cosh",u,void 0)},842467:u=>{a.kb("Asinh",u,void 0)},842520:u=>{a.kb("Acosh",u,void 0)},842573:u=>{a.kb("Atanh",u,void 0)},842626:u=>{a.kb("Tanh",u,void 0)},842678:u=>{a.kb("Not",u,void 0)},842729:(u,p,g)=>{a.kb("Clip",u,{min:p,max:g})},842798:u=>{a.kb("Clip",u,void 0)},842850:(u,p)=>{a.kb("Elu",u,{alpha:p})},842908:u=>{a.kb("Gelu",u,void 0)},842960:u=>{a.kb("Relu",u,void 0)},843012:(u,p)=>{a.kb("LeakyRelu",u,{alpha:p})},843076:(u,p)=>{a.kb("ThresholdedRelu",u,{alpha:p})},843146:(u,p)=>{a.kb("Cast",u,{to:p})},843204:u=>{a.kb("Add",u,void 0)},843255:u=>{a.kb("Sub",u,void 0)},843306:u=>{a.kb("Mul",u,void 0)},843357:u=>{a.kb("Div",u,void 0)},843408:u=>{a.kb("Pow",u,void 0)},843459:u=>{a.kb("Equal",u,void 0)},843512:u=>{a.kb("Greater",u,void 0)},843567:u=>{a.kb("GreaterOrEqual",u,void 0)},843629:u=>{a.kb("Less",u,void 0)},843681:u=>{a.kb("LessOrEqual",u,void 0)},843740:(u,p,g,$,x)=>{a.kb("ReduceMean",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:$?Array.from(O().subarray(Number($)>>>0,Number(x)>>>0)):[]})},843915:(u,p,g,$,x)=>{a.kb("ReduceMax",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:$?Array.from(O().subarray(Number($)>>>0,Number(x)>>>0)):[]})},844089:(u,p,g,$,x)=>{a.kb("ReduceMin",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:$?Array.from(O().subarray(Number($)>>>0,Number(x)>>>0)):[]})},844263:(u,p,g,$,x)=>{a.kb("ReduceProd",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:$?Array.from(O().subarray(Number($)>>>0,Number(x)>>>0)):[]})},844438:(u,p,g,$,x)=>{a.kb("ReduceSum",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:$?Array.from(O().subarray(Number($)>>>0,Number(x)>>>0)):[]})},844612:(u,p,g,$,x)=>{a.kb("ReduceL1",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:$?Array.from(O().subarray(Number($)>>>0,Number(x)>>>0)):[]})},844785:(u,p,g,$,x)=>{a.kb("ReduceL2",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:$?Array.from(O().subarray(Number($)>>>0,Number(x)>>>0)):[]})},844958:(u,p,g,$,x)=>{a.kb("ReduceLogSum",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:$?Array.from(O().subarray(Number($)>>>0,Number(x)>>>0)):[]})},845135:(u,p,g,$,x)=>{a.kb("ReduceSumSquare",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:$?Array.from(O().subarray(Number($)>>>0,Number(x)>>>0)):[]})},845315:(u,p,g,$,x)=>{a.kb("ReduceLogSumExp",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:$?Array.from(O().subarray(Number($)>>>0,Number(x)>>>0)):[]})},845495:u=>{a.kb("Where",u,void 0)},845548:(u,p,g)=>{a.kb("Transpose",u,{perm:p?Array.from(O().subarray(Number(p)>>>0,Number(g)>>>0)):[]})},845672:(u,p,g,$)=>{a.kb("DepthToSpace",u,{blocksize:p,mode:$e(g),format:$?"NHWC":"NCHW"})},845805:(u,p,g,$)=>{a.kb("DepthToSpace",u,{blocksize:p,mode:$e(g),format:$?"NHWC":"NCHW"})},845938:(u,p,g,$,x,E,B,D,L,K,se,de,me,Se,Ot)=>{a.kb("ConvTranspose",u,{format:L?"NHWC":"NCHW",autoPad:p,dilations:[g],group:$,kernelShape:[x],pads:[E,B],strides:[D],wIsConst:()=>!!ue()[K>>>0],outputPadding:se?Array.from(O().subarray(Number(se)>>>0,Number(de)>>>0)):[],outputShape:me?Array.from(O().subarray(Number(me)>>>0,Number(Se)>>>0)):[],activation:$e(Ot)})},846371:(u,p,g,$,x,E,B,D,L,K,se,de,me,Se)=>{a.kb("ConvTranspose",u,{format:D?"NHWC":"NCHW",autoPad:p,dilations:Array.from(O().subarray(Number(g)>>>0,2+(Number(g)>>>0)>>>0)),group:$,kernelShape:Array.from(O().subarray(Number(x)>>>0,2+(Number(x)>>>0)>>>0)),pads:Array.from(O().subarray(Number(E)>>>0,4+(Number(E)>>>0)>>>0)),strides:Array.from(O().subarray(Number(B)>>>0,2+(Number(B)>>>0)>>>0)),wIsConst:()=>!!ue()[L>>>0],outputPadding:K?Array.from(O().subarray(Number(K)>>>0,Number(se)>>>0)):[],outputShape:de?Array.from(O().subarray(Number(de)>>>0,Number(me)>>>0)):[],activation:$e(Se)})},847032:(u,p,g,$,x,E,B,D,L,K,se,de,me,Se,Ot)=>{a.kb("ConvTranspose",u,{format:L?"NHWC":"NCHW",autoPad:p,dilations:[g],group:$,kernelShape:[x],pads:[E,B],strides:[D],wIsConst:()=>!!ue()[K>>>0],outputPadding:se?Array.from(O().subarray(Number(se)>>>0,Number(de)>>>0)):[],outputShape:me?Array.from(O().subarray(Number(me)>>>0,Number(Se)>>>0)):[],activation:$e(Ot)})},847465:(u,p,g,$,x,E,B,D,L,K,se,de,me,Se)=>{a.kb("ConvTranspose",u,{format:D?"NHWC":"NCHW",autoPad:p,dilations:Array.from(O().subarray(Number(g)>>>0,2+(Number(g)>>>0)>>>0)),group:$,kernelShape:Array.from(O().subarray(Number(x)>>>0,2+(Number(x)>>>0)>>>0)),pads:Array.from(O().subarray(Number(E)>>>0,4+(Number(E)>>>0)>>>0)),strides:Array.from(O().subarray(Number(B)>>>0,2+(Number(B)>>>0)>>>0)),wIsConst:()=>!!ue()[L>>>0],outputPadding:K?Array.from(O().subarray(Number(K)>>>0,Number(se)>>>0)):[],outputShape:de?Array.from(O().subarray(Number(de)>>>0,Number(me)>>>0)):[],activation:$e(Se)})},848126:(u,p)=>{a.kb("GlobalAveragePool",u,{format:p?"NHWC":"NCHW"})},848217:(u,p,g,$,x,E,B,D,L,K,se,de,me,Se)=>{a.kb("AveragePool",u,{format:Se?"NHWC":"NCHW",auto_pad:p,ceil_mode:g,count_include_pad:$,storage_order:x,dilations:E?Array.from(O().subarray(Number(E)>>>0,Number(B)>>>0)):[],kernel_shape:D?Array.from(O().subarray(Number(D)>>>0,Number(L)>>>0)):[],pads:K?Array.from(O().subarray(Number(K)>>>0,Number(se)>>>0)):[],strides:de?Array.from(O().subarray(Number(de)>>>0,Number(me)>>>0)):[]})},848696:(u,p)=>{a.kb("GlobalAveragePool",u,{format:p?"NHWC":"NCHW"})},848787:(u,p,g,$,x,E,B,D,L,K,se,de,me,Se)=>{a.kb("AveragePool",u,{format:Se?"NHWC":"NCHW",auto_pad:p,ceil_mode:g,count_include_pad:$,storage_order:x,dilations:E?Array.from(O().subarray(Number(E)>>>0,Number(B)>>>0)):[],kernel_shape:D?Array.from(O().subarray(Number(D)>>>0,Number(L)>>>0)):[],pads:K?Array.from(O().subarray(Number(K)>>>0,Number(se)>>>0)):[],strides:de?Array.from(O().subarray(Number(de)>>>0,Number(me)>>>0)):[]})},849266:(u,p)=>{a.kb("GlobalMaxPool",u,{format:p?"NHWC":"NCHW"})},849353:(u,p,g,$,x,E,B,D,L,K,se,de,me,Se)=>{a.kb("MaxPool",u,{format:Se?"NHWC":"NCHW",auto_pad:p,ceil_mode:g,count_include_pad:$,storage_order:x,dilations:E?Array.from(O().subarray(Number(E)>>>0,Number(B)>>>0)):[],kernel_shape:D?Array.from(O().subarray(Number(D)>>>0,Number(L)>>>0)):[],pads:K?Array.from(O().subarray(Number(K)>>>0,Number(se)>>>0)):[],strides:de?Array.from(O().subarray(Number(de)>>>0,Number(me)>>>0)):[]})},849828:(u,p)=>{a.kb("GlobalMaxPool",u,{format:p?"NHWC":"NCHW"})},849915:(u,p,g,$,x,E,B,D,L,K,se,de,me,Se)=>{a.kb("MaxPool",u,{format:Se?"NHWC":"NCHW",auto_pad:p,ceil_mode:g,count_include_pad:$,storage_order:x,dilations:E?Array.from(O().subarray(Number(E)>>>0,Number(B)>>>0)):[],kernel_shape:D?Array.from(O().subarray(Number(D)>>>0,Number(L)>>>0)):[],pads:K?Array.from(O().subarray(Number(K)>>>0,Number(se)>>>0)):[],strides:de?Array.from(O().subarray(Number(de)>>>0,Number(me)>>>0)):[]})},850390:(u,p,g,$,x)=>{a.kb("Gemm",u,{alpha:p,beta:g,transA:$,transB:x})},850494:u=>{a.kb("MatMul",u,void 0)},850548:(u,p,g,$)=>{a.kb("ArgMax",u,{keepDims:!!p,selectLastIndex:!!g,axis:$})},850656:(u,p,g,$)=>{a.kb("ArgMin",u,{keepDims:!!p,selectLastIndex:!!g,axis:$})},850764:(u,p)=>{a.kb("Softmax",u,{axis:p})},850827:(u,p)=>{a.kb("Concat",u,{axis:p})},850887:(u,p,g,$,x)=>{a.kb("Split",u,{axis:p,numOutputs:g,splitSizes:$?Array.from(O().subarray(Number($)>>>0,Number(x)>>>0)):[]})},851043:u=>{a.kb("Expand",u,void 0)},851097:(u,p)=>{a.kb("Gather",u,{axis:Number(p)})},851168:(u,p)=>{a.kb("GatherElements",u,{axis:Number(p)})},851247:(u,p)=>{a.kb("GatherND",u,{batch_dims:Number(p)})},851326:(u,p,g,$,x,E,B,D,L,K,se)=>{a.kb("Resize",u,{antialias:p,axes:g?Array.from(O().subarray(Number(g)>>>0,Number($)>>>0)):[],coordinateTransformMode:$e(x),cubicCoeffA:E,excludeOutside:B,extrapolationValue:D,keepAspectRatioPolicy:$e(L),mode:$e(K),nearestMode:$e(se)})},851688:(u,p,g,$,x,E,B)=>{a.kb("Slice",u,{starts:p?Array.from(O().subarray(Number(p)>>>0,Number(g)>>>0)):[],ends:$?Array.from(O().subarray(Number($)>>>0,Number(x)>>>0)):[],axes:E?Array.from(O().subarray(Number(E)>>>0,Number(B)>>>0)):[]})},851952:u=>{a.kb("Tile",u,void 0)},852004:(u,p,g)=>{a.kb("InstanceNormalization",u,{epsilon:p,format:g?"NHWC":"NCHW"})},852118:(u,p,g)=>{a.kb("InstanceNormalization",u,{epsilon:p,format:g?"NHWC":"NCHW"})},852232:u=>{a.kb("Range",u,void 0)},852285:(u,p)=>{a.kb("Einsum",u,{equation:$e(p)})},852366:(u,p,g,$,x)=>{a.kb("Pad",u,{mode:p,value:g,pads:$?Array.from(O().subarray(Number($)>>>0,Number(x)>>>0)):[]})},852509:(u,p,g,$,x,E)=>{a.kb("BatchNormalization",u,{epsilon:p,momentum:g,spatial:!!x,trainingMode:!!$,format:E?"NHWC":"NCHW"})},852678:(u,p,g,$,x,E)=>{a.kb("BatchNormalization",u,{epsilon:p,momentum:g,spatial:!!x,trainingMode:!!$,format:E?"NHWC":"NCHW"})},852847:(u,p,g)=>{a.kb("CumSum",u,{exclusive:Number(p),reverse:Number(g)})},852944:(u,p,g)=>{a.kb("DequantizeLinear",u,{axis:p,blockSize:g})},853034:(u,p,g,$,x)=>{a.kb("GridSample",u,{align_corners:p,mode:$e(g),padding_mode:$e($),format:x?"NHWC":"NCHW"})},853204:(u,p,g,$,x)=>{a.kb("GridSample",u,{align_corners:p,mode:$e(g),padding_mode:$e($),format:x?"NHWC":"NCHW"})},853374:(u,p)=>{a.kb("ScatterND",u,{reduction:$e(p)})},853459:(u,p,g,$,x,E,B,D,L)=>{a.kb("Attention",u,{numHeads:p,isUnidirectional:g,maskFilterValue:$,scale:x,doRotary:E,qkvHiddenSizes:B?Array.from(O().subarray(Number(D)>>>0,Number(D)+B>>>0)):[],pastPresentShareBuffer:!!L})},853731:u=>{a.kb("BiasAdd",u,void 0)},853786:u=>{a.kb("BiasSplitGelu",u,void 0)},853847:u=>{a.kb("FastGelu",u,void 0)},853903:(u,p,g,$,x,E,B,D,L,K,se,de,me,Se,Ot,hm)=>{a.kb("Conv",u,{format:de?"NHWC":"NCHW",auto_pad:p,dilations:g?Array.from(O().subarray(Number(g)>>>0,Number($)>>>0)):[],group:x,kernel_shape:E?Array.from(O().subarray(Number(E)>>>0,Number(B)>>>0)):[],pads:D?Array.from(O().subarray(Number(D)>>>0,Number(L)>>>0)):[],strides:K?Array.from(O().subarray(Number(K)>>>0,Number(se)>>>0)):[],w_is_const:()=>!!ue()[Number(me)>>>0],activation:$e(Se),activation_params:Ot?Array.from(Ie().subarray(Number(Ot)>>>0,Number(hm)>>>0)):[]})},854487:u=>{a.kb("Gelu",u,void 0)},854539:(u,p,g,$,x,E,B,D,L)=>{a.kb("GroupQueryAttention",u,{numHeads:p,kvNumHeads:g,scale:$,softcap:x,doRotary:E,rotaryInterleaved:B,smoothSoftmax:D,localWindowSize:L})},854756:(u,p,g,$)=>{a.kb("LayerNormalization",u,{axis:p,epsilon:g,simplified:!!$})},854867:(u,p,g,$)=>{a.kb("LayerNormalization",u,{axis:p,epsilon:g,simplified:!!$})},854978:(u,p,g,$,x,E)=>{a.kb("MatMulNBits",u,{k:p,n:g,accuracyLevel:$,bits:x,blockSize:E})},855105:(u,p,g,$,x,E)=>{a.kb("MultiHeadAttention",u,{numHeads:p,isUnidirectional:g,maskFilterValue:$,scale:x,doRotary:E})},855264:(u,p)=>{a.kb("QuickGelu",u,{alpha:p})},855328:(u,p,g,$,x)=>{a.kb("RotaryEmbedding",u,{interleaved:!!p,numHeads:g,rotaryEmbeddingDim:$,scale:x})},855467:(u,p,g)=>{a.kb("SkipLayerNormalization",u,{epsilon:p,simplified:!!g})},855569:(u,p,g)=>{a.kb("SkipLayerNormalization",u,{epsilon:p,simplified:!!g})},855671:(u,p,g,$)=>{a.kb("GatherBlockQuantized",u,{gatherAxis:p,quantizeAxis:g,blockSize:$})},855792:u=>{a.$b(u)},855826:(u,p)=>a.bc(Number(u),Number(p),a.Gb.ec,a.Gb.errors)};function jf(u,p,g){return Vn(async()=>{await a.Yb(Number(u),Number(p),Number(g))})}function Kf(){return typeof wasmOffsetConverter<"u"}class jr{name="ExitStatus";constructor(p){this.message=`Program terminated with exit(${p})`,this.status=p}}var dn=u=>{u.terminate(),u.onmessage=()=>{}},Kr=[],pn=u=>{st.length==0&&(yn(),gn(st[0]));var p=st.pop();if(!p)return 6;Wt.push(p),gt[u.Bb]=p,p.Bb=u.Bb;var g={Cb:"run",hc:u.fc,Ib:u.Ib,Bb:u.Bb};return p.postMessage(g,u.Nb),0},nt=0,ye=(u,p,...g)=>{for(var $=2*g.length,x=ca(),E=pa(8*$),B=E>>>3,D=0;D<g.length;D++){var L=g[D];typeof L=="bigint"?(q[B+2*D]=1n,q[B+2*D+1]=L):(q[B+2*D]=0n,Ne()[B+2*D+1>>>0]=L)}return u=ps(u,0,$,E,p),wr(x),u};function Zr(u){if(o)return ye(0,1,u);if(I=u,!(0<nt)){for(var p of Wt)dn(p);for(p of st)dn(p);st=[],Wt=[],gt={},oe=!0}m(0,new jr(u))}function cn(u){if(o)return ye(1,0,u);Qr(u)}var Qr=u=>{if(I=u,o)throw cn(u),"unwind";Zr(u)},st=[],Wt=[],fn=[],gt={},hn=u=>{var p=u.Bb;delete gt[p],st.push(u),Wt.splice(Wt.indexOf(u),1),u.Bb=0,cs(p)};function mn(){fn.forEach(u=>u())}var gn=u=>new Promise(p=>{u.onmessage=x=>{var E=(x=x.data).Cb;if(x.Hb&&x.Hb!=yr()){var B=gt[x.Hb];B?B.postMessage(x,x.Nb):S(`Internal error! Worker sent a message "${E}" to target pthread ${x.Hb}, but that thread no longer exists!`)}else E==="checkMailbox"?lr():E==="spawnThread"?pn(x):E==="cleanupThread"?hn(gt[x.ic]):E==="loaded"?(u.loaded=!0,p(u)):E==="alert"?alert(`Thread ${x.jc}: ${x.text}`):x.target==="setimmediate"?u.postMessage(x):E==="callHandler"?a[x.Rb](...x.args):E&&S(`worker sent an unknown command ${E}`)},u.onerror=x=>{throw S(`worker sent an error! ${x.filename}:${x.lineno}: ${x.message}`),x};var g,$=[];for(g of[])a.propertyIsEnumerable(g)&&$.push(g);u.postMessage({Cb:"load",Sb:$,lc:v,mc:T})});function yn(){var u=new Worker((()=>{let p=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new p("ort.webgpu.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});st.push(u)}var Zf=u=>{Ce();var p=ae()[u+52>>>2>>>0];u=ae()[u+56>>>2>>>0],ms(p,p-u),wr(p)},Qf=(u,p)=>{nt=0,u=gs(u,p),0<nt?I=u:da(u)};class Xf{constructor(p){this.Jb=p-24}}function Yf(u,p,g){var $=new Xf(u>>>=0);throw p>>>=0,g>>>=0,ae()[$.Jb+16>>>2>>>0]=0,ae()[$.Jb+4>>>2>>>0]=p,ae()[$.Jb+8>>>2>>>0]=g,u}function _n(u,p,g,$){return o?ye(2,1,u,p,g,$):wn(u,p,g,$)}function wn(u,p,g,$){if(u>>>=0,g>>>=0,$>>>=0,l===void 0)return 6;var x=[];return o&&x.length===0?_n(u,p>>>=0,g,$):(u={fc:g,Bb:u,Ib:$,Nb:x},o?(u.Cb="spawnThread",postMessage(u,x),0):pn(u))}var bn=typeof TextDecoder<"u"?new TextDecoder:void 0,$n=(u,p=0,g=NaN)=>{var $=(p>>>=0)+g;for(g=p;u[g]&&!(g>=$);)++g;if(16<g-p&&u.buffer&&bn)return bn.decode(u.buffer instanceof ArrayBuffer?u.subarray(p,g):u.slice(p,g));for($="";p<g;){var x=u[p++];if(128&x){var E=63&u[p++];if((224&x)==192)$+=String.fromCharCode((31&x)<<6|E);else{var B=63&u[p++];65536>(x=(240&x)==224?(15&x)<<12|E<<6|B:(7&x)<<18|E<<12|B<<6|63&u[p++])?$+=String.fromCharCode(x):(x-=65536,$+=String.fromCharCode(55296|x>>10,56320|1023&x))}}else $+=String.fromCharCode(x)}return $},$e=(u,p)=>(u>>>=0)?$n(N(),u,p):"";function vn(u,p,g){return o?ye(3,1,u,p,g):0}function xn(u,p){if(o)return ye(4,1,u,p)}var kn=u=>{for(var p=0,g=0;g<u.length;++g){var $=u.charCodeAt(g);127>=$?p++:2047>=$?p+=2:55296<=$&&57343>=$?(p+=4,++g):p+=3}return p},Ct=(u,p,g)=>{var $=N();if(p>>>=0,0<g){var x=p;g=p+g-1;for(var E=0;E<u.length;++E){var B=u.charCodeAt(E);if(55296<=B&&57343>=B&&(B=65536+((1023&B)<<10)|1023&u.charCodeAt(++E)),127>=B){if(p>=g)break;$[p++>>>0]=B}else{if(2047>=B){if(p+1>=g)break;$[p++>>>0]=192|B>>6}else{if(65535>=B){if(p+2>=g)break;$[p++>>>0]=224|B>>12}else{if(p+3>=g)break;$[p++>>>0]=240|B>>18,$[p++>>>0]=128|B>>12&63}$[p++>>>0]=128|B>>6&63}$[p++>>>0]=128|63&B}}$[p>>>0]=0,u=p-x}else u=0;return u};function Sn(u,p){if(o)return ye(5,1,u,p)}function Tn(u,p,g){if(o)return ye(6,1,u,p,g)}function In(u,p,g){return o?ye(7,1,u,p,g):0}function En(u,p){if(o)return ye(8,1,u,p)}function zn(u,p,g){if(o)return ye(9,1,u,p,g)}function Cn(u,p,g,$){if(o)return ye(10,1,u,p,g,$)}function An(u,p,g,$){if(o)return ye(11,1,u,p,g,$)}function On(u,p,g,$){if(o)return ye(12,1,u,p,g,$)}function Bn(u){if(o)return ye(13,1,u)}function Rn(u,p){if(o)return ye(14,1,u,p)}function Mn(u,p,g){if(o)return ye(15,1,u,p,g)}var Nn,ot,Jf=()=>it(""),Ke=u=>{for(var p="";N()[u>>>0];)p+=Nn[N()[u++>>>0]];return p},Xr={},Yr={},eh={};function Je(u,p,g={}){return function($,x,E={}){var B=x.name;if(!$)throw new ot(`type "${B}" must have a positive integer typeid pointer`);if(Yr.hasOwnProperty($)){if(E.Tb)return;throw new ot(`Cannot register type '${B}' twice`)}Yr[$]=x,delete eh[$],Xr.hasOwnProperty($)&&(x=Xr[$],delete Xr[$],x.forEach(D=>D()))}(u,p,g)}var Dn=(u,p,g)=>{switch(p){case 1:return g?$=>ue()[$>>>0]:$=>N()[$>>>0];case 2:return g?$=>W()[$>>>1>>>0]:$=>te()[$>>>1>>>0];case 4:return g?$=>O()[$>>>2>>>0]:$=>ae()[$>>>2>>>0];case 8:return g?$=>q[$>>>3]:$=>re[$>>>3];default:throw new TypeError(`invalid integer width (${p}): ${u}`)}};function th(u,p,g){g>>>=0,Je(u>>>=0,{name:p=Ke(p>>>0),fromWireType:$=>$,toWireType:function($,x){if(typeof x!="bigint"&&typeof x!="number")throw x=x===null?"null":($=typeof x)=="object"||$==="array"||$==="function"?x.toString():""+x,new TypeError(`Cannot convert "${x}" to ${this.name}`);return typeof x=="number"&&(x=BigInt(x)),x},Db:ut,readValueFromPointer:Dn(p,g,p.indexOf("u")==-1),Eb:null})}var ut=8;function rh(u,p,g,$){Je(u>>>=0,{name:p=Ke(p>>>0),fromWireType:function(x){return!!x},toWireType:function(x,E){return E?g:$},Db:ut,readValueFromPointer:function(x){return this.fromWireType(N()[x>>>0])},Eb:null})}var Jr=[],et=[];function ea(u){9<(u>>>=0)&&--et[u+1]==0&&(et[u]=void 0,Jr.push(u))}var Ee=u=>{if(!u)throw new ot("Cannot use deleted val. handle = "+u);return et[u]},De=u=>{switch(u){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let p=Jr.pop()||et.length;return et[p]=u,et[p+1]=1,p}};function ta(u){return this.fromWireType(ae()[u>>>2>>>0])}var ah={name:"emscripten::val",fromWireType:u=>{var p=Ee(u);return ea(u),p},toWireType:(u,p)=>De(p),Db:ut,readValueFromPointer:ta,Eb:null};function ih(u){return Je(u>>>0,ah)}var nh=(u,p)=>{switch(p){case 4:return function(g){return this.fromWireType(Ie()[g>>>2>>>0])};case 8:return function(g){return this.fromWireType(Ne()[g>>>3>>>0])};default:throw new TypeError(`invalid float width (${p}): ${u}`)}};function sh(u,p,g){g>>>=0,Je(u>>>=0,{name:p=Ke(p>>>0),fromWireType:$=>$,toWireType:($,x)=>x,Db:ut,readValueFromPointer:nh(p,g),Eb:null})}function oh(u,p,g,$,x){if(u>>>=0,g>>>=0,p=Ke(p>>>0),x===-1&&(x=4294967295),x=D=>D,$===0){var E=32-8*g;x=D=>D<<E>>>E}var B=p.includes("unsigned")?function(D,L){return L>>>0}:function(D,L){return L};Je(u,{name:p,fromWireType:x,toWireType:B,Db:ut,readValueFromPointer:Dn(p,g,$!==0),Eb:null})}function uh(u,p,g){function $(E){var B=ae()[E>>>2>>>0];return E=ae()[E+4>>>2>>>0],new x(ue().buffer,E,B)}var x=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][p];Je(u>>>=0,{name:g=Ke(g>>>0),fromWireType:$,Db:ut,readValueFromPointer:$},{Tb:!0})}function lh(u,p){Je(u>>>=0,{name:p=Ke(p>>>0),fromWireType:function(g){for(var $,x=ae()[g>>>2>>>0],E=g+4,B=E,D=0;D<=x;++D){var L=E+D;D!=x&&N()[L>>>0]!=0||(B=$e(B,L-B),$===void 0?$=B:($+="\0",$+=B),B=L+1)}return Qe(g),$},toWireType:function(g,$){$ instanceof ArrayBuffer&&($=new Uint8Array($));var x=typeof $=="string";if(!(x||$ instanceof Uint8Array||$ instanceof Uint8ClampedArray||$ instanceof Int8Array))throw new ot("Cannot pass non-string to std::string");var E=x?kn($):$.length,B=_r(4+E+1),D=B+4;if(ae()[B>>>2>>>0]=E,x)Ct($,D,E+1);else if(x)for(x=0;x<E;++x){var L=$.charCodeAt(x);if(255<L)throw Qe(B),new ot("String has UTF-16 code units that do not fit in 8 bits");N()[D+x>>>0]=L}else for(x=0;x<E;++x)N()[D+x>>>0]=$[x];return g!==null&&g.push(Qe,B),B},Db:ut,readValueFromPointer:ta,Eb(g){Qe(g)}})}var Un=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,dh=(u,p)=>{for(var g=u>>1,$=g+p/2;!(g>=$)&&te()[g>>>0];)++g;if(32<(g<<=1)-u&&Un)return Un.decode(N().slice(u,g));for(g="",$=0;!($>=p/2);++$){var x=W()[u+2*$>>>1>>>0];if(x==0)break;g+=String.fromCharCode(x)}return g},ph=(u,p,g)=>{if(g??=2147483647,2>g)return 0;var $=p;g=(g-=2)<2*u.length?g/2:u.length;for(var x=0;x<g;++x){var E=u.charCodeAt(x);W()[p>>>1>>>0]=E,p+=2}return W()[p>>>1>>>0]=0,p-$},ch=u=>2*u.length,fh=(u,p)=>{for(var g=0,$="";!(g>=p/4);){var x=O()[u+4*g>>>2>>>0];if(x==0)break;++g,65536<=x?(x-=65536,$+=String.fromCharCode(55296|x>>10,56320|1023&x)):$+=String.fromCharCode(x)}return $},hh=(u,p,g)=>{if(p>>>=0,g??=2147483647,4>g)return 0;var $=p;g=$+g-4;for(var x=0;x<u.length;++x){var E=u.charCodeAt(x);if(55296<=E&&57343>=E&&(E=65536+((1023&E)<<10)|1023&u.charCodeAt(++x)),O()[p>>>2>>>0]=E,(p+=4)+4>g)break}return O()[p>>>2>>>0]=0,p-$},mh=u=>{for(var p=0,g=0;g<u.length;++g){var $=u.charCodeAt(g);55296<=$&&57343>=$&&++g,p+=4}return p};function gh(u,p,g){if(u>>>=0,p>>>=0,g=Ke(g>>>=0),p===2)var $=dh,x=ph,E=ch,B=D=>te()[D>>>1>>>0];else p===4&&($=fh,x=hh,E=mh,B=D=>ae()[D>>>2>>>0]);Je(u,{name:g,fromWireType:D=>{for(var L,K=ae()[D>>>2>>>0],se=D+4,de=0;de<=K;++de){var me=D+4+de*p;de!=K&&B(me)!=0||(se=$(se,me-se),L===void 0?L=se:(L+="\0",L+=se),se=me+p)}return Qe(D),L},toWireType:(D,L)=>{if(typeof L!="string")throw new ot(`Cannot pass non-string to C++ string type ${g}`);var K=E(L),se=_r(4+K+p);return ae()[se>>>2>>>0]=K/p,x(L,se+4,K+p),D!==null&&D.push(Qe,se),se},Db:ut,readValueFromPointer:ta,Eb(D){Qe(D)}})}function yh(u,p){Je(u>>>=0,{Ub:!0,name:p=Ke(p>>>0),Db:0,fromWireType:()=>{},toWireType:()=>{}})}function _h(u){la(u>>>0,!s,1,!n,131072,!1),mn()}var ra=u=>{if(!oe)try{if(u(),!(0<nt))try{o?da(I):Qr(I)}catch(p){p instanceof jr||p=="unwind"||m(0,p)}}catch(p){p instanceof jr||p=="unwind"||m(0,p)}};function aa(u){u>>>=0,typeof Atomics.kc=="function"&&(Atomics.kc(O(),u>>>2,u).value.then(lr),u+=128,Atomics.store(O(),u>>>2,1))}var lr=()=>{var u=yr();u&&(aa(u),ra(hs))};function wh(u,p){(u>>>=0)==p>>>0?setTimeout(lr):o?postMessage({Hb:u,Cb:"checkMailbox"}):(u=gt[u])&&u.postMessage({Cb:"checkMailbox"})}var ia=[];function bh(u,p,g,$,x){for(p>>>=0,$/=2,ia.length=$,g=x>>>0>>>3,x=0;x<$;x++)ia[x]=q[g+2*x]?q[g+2*x+1]:Ne()[g+2*x+1>>>0];return(p?Hr[p]:fm[u])(...ia)}var $h=()=>{nt=0};function vh(u){u>>>=0,o?postMessage({Cb:"cleanupThread",ic:u}):hn(gt[u])}function xh(u){}var dr=(u,p)=>{var g=Yr[u];if(g===void 0)throw u=us(u),g=Ke(u),Qe(u),new ot(`${p} has unknown type ${g}`);return g},Pn=(u,p,g)=>{var $=[];return u=u.toWireType($,g),$.length&&(ae()[p>>>2>>>0]=De($)),u};function kh(u,p,g){return p>>>=0,g>>>=0,u=Ee(u>>>0),p=dr(p,"emval::as"),Pn(p,g,u)}function Sh(u,p){return p>>>=0,u=Ee(u>>>0),(p=dr(p,"emval::as")).toWireType(null,u)}var pr=u=>{try{u()}catch(p){it(p)}},lt=0,Ze=null,qn=0,cr=[],Wn={},Ln={},Th=0,na=null,Ih=[];function Vn(u){return function(p){if(!oe){if(lt===0){var g=!1,$=!1;p((x=0)=>{if(!oe&&(qn=x,g=!0,$)){lt=2,pr(()=>ws(Ze)),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.resume(),x=!1;try{var E=function(){var L=O()[Ze+8>>>2>>>0];return L=X[Ln[L]],--nt,L()}()}catch(L){E=L,x=!0}var B=!1;if(!Ze){var D=na;D&&(na=null,(x?D.reject:D.resolve)(E),B=!0)}if(x&&!B)throw E}}),$=!0,g||(lt=1,Ze=function(){var x=_r(65548),E=x+12;ae()[x>>>2>>>0]=E,ae()[x+4>>>2>>>0]=E+65536,E=cr[0];var B=Wn[E];return B===void 0&&(B=Th++,Wn[E]=B,Ln[B]=E),E=B,O()[x+8>>>2>>>0]=E,x}(),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.pause(),pr(()=>ys(Ze)))}else lt===2?(lt=0,pr(bs),Qe(Ze),Ze=null,Ih.forEach(ra)):it(`invalid state: ${lt}`);return qn}}(p=>{u().then(p)})}function Eh(u){return u>>>=0,Vn(async()=>{var p=await Ee(u);return De(p)})}var fr=[];function zh(u,p,g,$){return g>>>=0,$>>>=0,(u=fr[u>>>0])(null,p=Ee(p>>>0),g,$)}var Ch={},hr=u=>{var p=Ch[u];return p===void 0?Ke(u):p};function Ah(u,p,g,$,x){return g>>>=0,$>>>=0,x>>>=0,(u=fr[u>>>0])(p=Ee(p>>>0),p[g=hr(g)],$,x)}function Oh(u,p){return p>>>=0,(u=Ee(u>>>0))==Ee(p)}var Gn=()=>typeof globalThis=="object"?globalThis:Function("return this")();function Bh(u){return(u>>>=0)==0?De(Gn()):(u=hr(u),De(Gn()[u]))}var Rh=u=>{var p=fr.length;return fr.push(u),p},Mh=(u,p)=>{for(var g=Array(u),$=0;$<u;++$)g[$]=dr(ae()[p+4*$>>>2>>>0],"parameter "+$);return g},Fn=(u,p)=>Object.defineProperty(p,"name",{value:u});function Nh(u,p,g){var $=(p=Mh(u,p>>>0)).shift();u--;var x=`return function (obj, func, destructorsRef, args) {
`,E=0,B=[];g===0&&B.push("obj");for(var D=["retType"],L=[$],K=0;K<u;++K)B.push("arg"+K),D.push("argType"+K),L.push(p[K]),x+=`  var arg${K} = argType${K}.readValueFromPointer(args${E?"+"+E:""});
`,E+=p[K].Db;return x+=`  var rv = ${g===1?"new func":"func.call"}(${B.join(", ")});
`,$.Ub||(D.push("emval_returnValue"),L.push(Pn),x+=`  return emval_returnValue(retType, destructorsRef, rv);
`),D.push(x+`};
`),u=function(se){var de=Function;if(!(de instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof de} which is not a function`);var me=Fn(de.name||"unknownFunctionName",function(){});return me.prototype=de.prototype,me=new me,(se=de.apply(me,se))instanceof Object?se:me}(D)(...L),g=`methodCaller<(${p.map(se=>se.name).join(", ")}) => ${$.name}>`,Rh(Fn(g,u))}function Dh(u){return u=hr(u>>>0),De(a[u])}function Uh(u,p){return p>>>=0,u=Ee(u>>>0),p=Ee(p),De(u[p])}function Ph(u){9<(u>>>=0)&&(et[u+1]+=1)}function qh(){return De([])}function Wh(u){u=Ee(u>>>0);for(var p=Array(u.length),g=0;g<u.length;g++)p[g]=u[g];return De(p)}function Lh(u){return De(hr(u>>>0))}function Vh(){return De({})}function Gh(u){for(var p=Ee(u>>>=0);p.length;){var g=p.pop();p.pop()(g)}ea(u)}function Fh(u,p,g){p>>>=0,g>>>=0,u=Ee(u>>>0),p=Ee(p),g=Ee(g),u[p]=g}function Hh(u,p){return p>>>=0,u=(u=dr(u>>>0,"_emval_take_value")).readValueFromPointer(p),De(u)}function jh(u,p){u=-9007199254740992>u||9007199254740992<u?NaN:Number(u),p>>>=0,u=new Date(1e3*u),O()[p>>>2>>>0]=u.getUTCSeconds(),O()[p+4>>>2>>>0]=u.getUTCMinutes(),O()[p+8>>>2>>>0]=u.getUTCHours(),O()[p+12>>>2>>>0]=u.getUTCDate(),O()[p+16>>>2>>>0]=u.getUTCMonth(),O()[p+20>>>2>>>0]=u.getUTCFullYear()-1900,O()[p+24>>>2>>>0]=u.getUTCDay(),u=(u.getTime()-Date.UTC(u.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,O()[p+28>>>2>>>0]=u}var Hn=u=>u%4==0&&(u%100!=0||u%400==0),jn=[0,31,60,91,121,152,182,213,244,274,305,335],Kn=[0,31,59,90,120,151,181,212,243,273,304,334];function Kh(u,p){u=-9007199254740992>u||9007199254740992<u?NaN:Number(u),p>>>=0,u=new Date(1e3*u),O()[p>>>2>>>0]=u.getSeconds(),O()[p+4>>>2>>>0]=u.getMinutes(),O()[p+8>>>2>>>0]=u.getHours(),O()[p+12>>>2>>>0]=u.getDate(),O()[p+16>>>2>>>0]=u.getMonth(),O()[p+20>>>2>>>0]=u.getFullYear()-1900,O()[p+24>>>2>>>0]=u.getDay();var g=(Hn(u.getFullYear())?jn:Kn)[u.getMonth()]+u.getDate()-1|0;O()[p+28>>>2>>>0]=g,O()[p+36>>>2>>>0]=-60*u.getTimezoneOffset(),g=new Date(u.getFullYear(),6,1).getTimezoneOffset();var $=new Date(u.getFullYear(),0,1).getTimezoneOffset();u=0|(g!=$&&u.getTimezoneOffset()==Math.min($,g)),O()[p+32>>>2>>>0]=u}function Zh(u){u>>>=0;var p=new Date(O()[u+20>>>2>>>0]+1900,O()[u+16>>>2>>>0],O()[u+12>>>2>>>0],O()[u+8>>>2>>>0],O()[u+4>>>2>>>0],O()[u>>>2>>>0],0),g=O()[u+32>>>2>>>0],$=p.getTimezoneOffset(),x=new Date(p.getFullYear(),6,1).getTimezoneOffset(),E=new Date(p.getFullYear(),0,1).getTimezoneOffset(),B=Math.min(E,x);return 0>g?O()[u+32>>>2>>>0]=+(x!=E&&B==$):0<g!=(B==$)&&(x=Math.max(E,x),p.setTime(p.getTime()+6e4*((0<g?B:x)-$))),O()[u+24>>>2>>>0]=p.getDay(),g=(Hn(p.getFullYear())?jn:Kn)[p.getMonth()]+p.getDate()-1|0,O()[u+28>>>2>>>0]=g,O()[u>>>2>>>0]=p.getSeconds(),O()[u+4>>>2>>>0]=p.getMinutes(),O()[u+8>>>2>>>0]=p.getHours(),O()[u+12>>>2>>>0]=p.getDate(),O()[u+16>>>2>>>0]=p.getMonth(),O()[u+20>>>2>>>0]=p.getYear(),u=p.getTime(),BigInt(isNaN(u)?-1:u/1e3)}function Zn(u,p,g,$,x,E,B){return o?ye(16,1,u,p,g,$,x,E,B):-52}function Qn(u,p,g,$,x,E){if(o)return ye(17,1,u,p,g,$,x,E)}var Lt={},Qh=()=>performance.timeOrigin+performance.now();function Xn(u,p){if(o)return ye(18,1,u,p);if(Lt[u]&&(clearTimeout(Lt[u].id),delete Lt[u]),!p)return 0;var g=setTimeout(()=>{delete Lt[u],ra(()=>fs(u,performance.timeOrigin+performance.now()))},p);return Lt[u]={id:g,rc:p},0}function Xh(u,p,g,$){u>>>=0,p>>>=0,g>>>=0,$>>>=0;var x=new Date().getFullYear(),E=new Date(x,0,1).getTimezoneOffset();x=new Date(x,6,1).getTimezoneOffset();var B=Math.max(E,x);ae()[u>>>2>>>0]=60*B,O()[p>>>2>>>0]=+(E!=x),u=(p=D=>{var L=Math.abs(D);return`UTC${0<=D?"-":"+"}${String(Math.floor(L/60)).padStart(2,"0")}${String(L%60).padStart(2,"0")}`})(E),p=p(x),x<E?(Ct(u,g,17),Ct(p,$,17)):(Ct(u,$,17),Ct(p,g,17))}var Yh=()=>Date.now(),Jh=1;function em(u,p,g){if(!(0<=u&&3>=u))return 28;if(u===0)u=Date.now();else{if(!Jh)return 52;u=performance.timeOrigin+performance.now()}return q[g>>>0>>>3]=BigInt(Math.round(1e6*u)),0}var sa=[],Yn=(u,p)=>{sa.length=0;for(var g;g=N()[u++>>>0];){var $=g!=105;p+=($&=g!=112)&&p%8?4:0,sa.push(g==112?ae()[p>>>2>>>0]:g==106?q[p>>>3]:g==105?O()[p>>>2>>>0]:Ne()[p>>>3>>>0]),p+=$?8:4}return sa};function tm(u,p,g){return u>>>=0,p=Yn(p>>>0,g>>>0),Hr[u](...p)}function rm(u,p,g){return u>>>=0,p=Yn(p>>>0,g>>>0),Hr[u](...p)}var am=()=>{};function im(u,p){return S($e(u>>>0,p>>>0))}var nm=()=>{throw nt+=1,"unwind"};function sm(){return 4294901760}var om=()=>navigator.hardwareConcurrency;function um(){return it("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function lm(u){u>>>=0;var p=N().length;if(u<=p||4294901760<u)return!1;for(var g=1;4>=g;g*=2){var $=p*(1+.2/g);$=Math.min($,u+100663296);e:{$=(Math.min(4294901760,65536*Math.ceil(Math.max(u,$)/65536))-v.buffer.byteLength+65535)/65536|0;try{v.grow($),Ce();var x=1;break e}catch{}x=void 0}if(x)return!0}return!1}var mr=()=>(it("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),At={},Jn=u=>{u.forEach(p=>{var g=mr();g&&(At[g]=p)})};function dm(){var u=Error().stack.toString().split(`
`);return u[0]=="Error"&&u.shift(),Jn(u),At.Mb=mr(),At.dc=u,At.Mb}function pm(u,p,g){if(u>>>=0,p>>>=0,At.Mb==u)var $=At.dc;else($=Error().stack.toString().split(`
`))[0]=="Error"&&$.shift(),Jn($);for(var x=3;$[x]&&mr()!=u;)++x;for(u=0;u<g&&$[u+x];++u)O()[p+4*u>>>2>>>0]=mr();return u}var oa,ua={},es=()=>{if(!oa){var u,p={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(u in ua)ua[u]===void 0?delete p[u]:p[u]=ua[u];var g=[];for(u in p)g.push(`${u}=${p[u]}`);oa=g}return oa};function ts(u,p){if(o)return ye(19,1,u,p);u>>>=0,p>>>=0;var g=0;return es().forEach(($,x)=>{var E=p+g;for(x=ae()[u+4*x>>>2>>>0]=E,E=0;E<$.length;++E)ue()[x++>>>0]=$.charCodeAt(E);ue()[x>>>0]=0,g+=$.length+1}),0}function rs(u,p){if(o)return ye(20,1,u,p);u>>>=0,p>>>=0;var g=es();ae()[u>>>2>>>0]=g.length;var $=0;return g.forEach(x=>$+=x.length+1),ae()[p>>>2>>>0]=$,0}function as(u){return o?ye(21,1,u):52}function is(u,p,g,$){return o?ye(22,1,u,p,g,$):52}function ns(u,p,g,$){return o?ye(23,1,u,p,g,$):70}var cm=[null,[],[]];function ss(u,p,g,$){if(o)return ye(24,1,u,p,g,$);p>>>=0,g>>>=0,$>>>=0;for(var x=0,E=0;E<g;E++){var B=ae()[p>>>2>>>0],D=ae()[p+4>>>2>>>0];p+=8;for(var L=0;L<D;L++){var K=N()[B+L>>>0],se=cm[u];K===0||K===10?((u===1?_:S)($n(se)),se.length=0):se.push(K)}x+=D}return ae()[$>>>2>>>0]=x,0}o||function(){for(var u=a.numThreads-1;u--;)yn();Kr.unshift(()=>{Pt++,function(p){o?p():Promise.all(st.map(gn)).then(p)}(()=>un())})}();for(var os=Array(256),gr=0;256>gr;++gr)os[gr]=String.fromCharCode(gr);Nn=os,ot=a.BindingError=class extends Error{constructor(u){super(u),this.name="BindingError"}},a.InternalError=class extends Error{constructor(u){super(u),this.name="InternalError"}},et.push(0,1,void 0,1,null,1,!0,1,!1,1),a.count_emval_handles=()=>et.length/2-5-Jr.length;var X,fm=[Zr,cn,_n,vn,xn,Sn,Tn,In,En,zn,Cn,An,On,Bn,Rn,Mn,Zn,Qn,Xn,ts,rs,as,is,ns,ss];(async function(){function u($,x){return X=$.exports,X=function(){var E=X,B={};for(let[D,L]of Object.entries(E))B[D]=typeof L=="function"?(...K)=>{cr.push(D);try{return L(...K)}finally{oe||(cr.pop(),Ze&&lt===1&&cr.length===0&&(lt=0,nt+=1,pr(_s),typeof Fibers<"u"&&Fibers.sc()))}}:L;return B}(),X=function(){var E=X,B=L=>K=>L(K)>>>0,D=L=>()=>L()>>>0;return(E=Object.assign({},E)).Ea=B(E.Ea),E.gb=D(E.gb),E.ib=B(E.ib),E.ub=B(E.ub),E.vb=D(E.vb),E.__cxa_get_exception_ptr=B(E.__cxa_get_exception_ptr),E}(),fn.push(X.jb),T=x,un(),X}Pt++;var p=ln();if(a.instantiateWasm)return new Promise($=>{a.instantiateWasm(p,(x,E)=>{u(x,E),$(x.exports)})});if(o)return new Promise($=>{_e=x=>{var E=new WebAssembly.Instance(x,ln());$(u(E,x))}});Fr??=a.locateFile?a.locateFile?a.locateFile("ort-wasm-simd-threaded.jsep.wasm",w):w+"ort-wasm-simd-threaded.jsep.wasm":new URL("ort-wasm-simd-threaded.jsep.wasm",import.meta.url).href;try{var g=await async function($){var x=Fr;if(!V&&typeof WebAssembly.instantiateStreaming=="function"&&!j(x))try{var E=fetch(x,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(E,$)}catch(B){S(`wasm streaming compile failed: ${B}`),S("falling back to ArrayBuffer instantiation")}return async function(B,D){try{var L=await async function(K){if(!V)try{var se=await f(K);return new Uint8Array(se)}catch{}if(K==Fr&&V)K=new Uint8Array(V);else{if(!h)throw"both async and sync fetching of the wasm failed";K=h(K)}return K}(B);return await WebAssembly.instantiate(L,D)}catch(K){S(`failed to asynchronously prepare wasm: ${K}`),it(K)}}(x,$)}(p);return u(g.instance,g.module)}catch($){return r($),Promise.reject($)}})();var us=u=>(us=X.Ea)(u),ls=()=>(ls=X.Fa)();a._OrtInit=(u,p)=>(a._OrtInit=X.Ga)(u,p),a._OrtGetLastError=(u,p)=>(a._OrtGetLastError=X.Ha)(u,p),a._OrtCreateSessionOptions=(u,p,g,$,x,E,B,D,L,K)=>(a._OrtCreateSessionOptions=X.Ia)(u,p,g,$,x,E,B,D,L,K),a._OrtAppendExecutionProvider=(u,p,g,$,x)=>(a._OrtAppendExecutionProvider=X.Ja)(u,p,g,$,x),a._OrtAddFreeDimensionOverride=(u,p,g)=>(a._OrtAddFreeDimensionOverride=X.Ka)(u,p,g),a._OrtAddSessionConfigEntry=(u,p,g)=>(a._OrtAddSessionConfigEntry=X.La)(u,p,g),a._OrtReleaseSessionOptions=u=>(a._OrtReleaseSessionOptions=X.Ma)(u),a._OrtCreateSession=(u,p,g)=>(a._OrtCreateSession=X.Na)(u,p,g),a._OrtReleaseSession=u=>(a._OrtReleaseSession=X.Oa)(u),a._OrtGetInputOutputCount=(u,p,g)=>(a._OrtGetInputOutputCount=X.Pa)(u,p,g),a._OrtGetInputOutputMetadata=(u,p,g,$)=>(a._OrtGetInputOutputMetadata=X.Qa)(u,p,g,$),a._OrtFree=u=>(a._OrtFree=X.Ra)(u),a._OrtCreateTensor=(u,p,g,$,x,E)=>(a._OrtCreateTensor=X.Sa)(u,p,g,$,x,E),a._OrtGetTensorData=(u,p,g,$,x)=>(a._OrtGetTensorData=X.Ta)(u,p,g,$,x),a._OrtReleaseTensor=u=>(a._OrtReleaseTensor=X.Ua)(u),a._OrtCreateRunOptions=(u,p,g,$)=>(a._OrtCreateRunOptions=X.Va)(u,p,g,$),a._OrtAddRunConfigEntry=(u,p,g)=>(a._OrtAddRunConfigEntry=X.Wa)(u,p,g),a._OrtReleaseRunOptions=u=>(a._OrtReleaseRunOptions=X.Xa)(u),a._OrtCreateBinding=u=>(a._OrtCreateBinding=X.Ya)(u),a._OrtBindInput=(u,p,g)=>(a._OrtBindInput=X.Za)(u,p,g),a._OrtBindOutput=(u,p,g,$)=>(a._OrtBindOutput=X._a)(u,p,g,$),a._OrtClearBoundOutputs=u=>(a._OrtClearBoundOutputs=X.$a)(u),a._OrtReleaseBinding=u=>(a._OrtReleaseBinding=X.ab)(u),a._OrtRunWithBinding=(u,p,g,$,x)=>(a._OrtRunWithBinding=X.bb)(u,p,g,$,x),a._OrtRun=(u,p,g,$,x,E,B,D)=>(a._OrtRun=X.cb)(u,p,g,$,x,E,B,D),a._OrtEndProfiling=u=>(a._OrtEndProfiling=X.db)(u),a._JsepOutput=(u,p,g)=>(a._JsepOutput=X.eb)(u,p,g),a._JsepGetNodeName=u=>(a._JsepGetNodeName=X.fb)(u);var yr=()=>(yr=X.gb)(),Qe=a._free=u=>(Qe=a._free=X.hb)(u),_r=a._malloc=u=>(_r=a._malloc=X.ib)(u),la=(u,p,g,$,x,E)=>(la=X.lb)(u,p,g,$,x,E),ds=()=>(ds=X.mb)(),ps=(u,p,g,$,x)=>(ps=X.nb)(u,p,g,$,x),cs=u=>(cs=X.ob)(u),da=u=>(da=X.pb)(u),fs=(u,p)=>(fs=X.qb)(u,p),hs=()=>(hs=X.rb)(),ms=(u,p)=>(ms=X.sb)(u,p),wr=u=>(wr=X.tb)(u),pa=u=>(pa=X.ub)(u),ca=()=>(ca=X.vb)(),gs=a.dynCall_ii=(u,p)=>(gs=a.dynCall_ii=X.wb)(u,p),ys=u=>(ys=X.xb)(u),_s=()=>(_s=X.yb)(),ws=u=>(ws=X.zb)(u),bs=()=>(bs=X.Ab)();return a.stackSave=()=>ca(),a.stackRestore=u=>wr(u),a.stackAlloc=u=>pa(u),a.setValue=function(u,p,g="i8"){switch(g.endsWith("*")&&(g="*"),g){case"i1":case"i8":ue()[u>>>0]=p;break;case"i16":W()[u>>>1>>>0]=p;break;case"i32":O()[u>>>2>>>0]=p;break;case"i64":q[u>>>3]=BigInt(p);break;case"float":Ie()[u>>>2>>>0]=p;break;case"double":Ne()[u>>>3>>>0]=p;break;case"*":ae()[u>>>2>>>0]=p;break;default:it(`invalid type for setValue: ${g}`)}},a.getValue=function(u,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":case"i8":return ue()[u>>>0];case"i16":return W()[u>>>1>>>0];case"i32":return O()[u>>>2>>>0];case"i64":return q[u>>>3];case"float":return Ie()[u>>>2>>>0];case"double":return Ne()[u>>>3>>>0];case"*":return ae()[u>>>2>>>0];default:it(`invalid type for getValue: ${p}`)}},a.UTF8ToString=$e,a.stringToUTF8=Ct,a.lengthBytesUTF8=kn,function u(){if(0<Pt)qt=u;else if(o)t(a),ur();else{for(;0<Kr.length;)Kr.shift()(a);0<Pt?qt=u:(a.calledRun=!0,oe||(ur(),t(a)))}}(),a.PTR_SIZE=4,i}),$d=wa,vs=globalThis.self?.name?.startsWith("em-pthread"),vs&&wa()}),ba,fi,xs,Oe,vd,$r,ks,Ss,$a,Ts,va,xd,xa,kd,Oi=U(()=>{"use strict";Ai(),ba=typeof location>"u"?void 0:location.origin,fi=import.meta.url>"file:"&&import.meta.url<"file;",xs=()=>{if(fi){let e=URL;return new URL(new e("ort.webgpu.bundle.min.mjs",import.meta.url).href,ba).href}return import.meta.url},Oe=xs(),vd=()=>{if(Oe&&!Oe.startsWith("blob:"))return Oe.substring(0,Oe.lastIndexOf("/")+1)},$r=(e,t)=>{try{let r=t??Oe;return(r?new URL(e,r):new URL(e)).origin===ba}catch{return!1}},ks=(e,t)=>{let r=t??Oe;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Ss=(e,t)=>`${t??"./"}${e}`,$a=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Ts=async e=>(await import(e)).default,va=(Rm(),nr(_d)).default,xd=async()=>{if(!Oe)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if($r(Oe))return[void 0,va()];let e=await $a(Oe);return[e,va(e)]},xa=(Mm(),nr(bd)).default,kd=async(e,t,r)=>{if(!e&&!t&&xa&&Oe&&$r(Oe))return[void 0,xa];{let a="ort-wasm-simd-threaded.jsep.mjs",i=e??ks(a,t),n=r&&i&&!$r(i,t),s=n?await $a(i):i??Ss(a,t);return[n?s:void 0,await Ts(s)]}}}),ka,vr,Gt,Sa,Is,Es,zs,Bi,ge,Et=U(()=>{"use strict";Oi(),vr=!1,Gt=!1,Sa=!1,Is=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Es=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},zs=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Bi=async e=>{if(vr)return Promise.resolve();if(Gt)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Sa)throw new Error("previous call to 'initializeWebAssembly()' failed.");Gt=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!zs())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Es())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let a=Is();r>1&&!a&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let i=e.wasmPaths,n=typeof i=="string"?i:void 0,s=i?.mjs,o=s?.href??s,l=i?.wasm,d=l?.href??l,c=e.wasmBinary,[f,h]=await kd(o,n,r>1),y=!1,m=[];if(t>0&&m.push(new Promise(w=>{setTimeout(()=>{y=!0,w()},t)})),m.push(new Promise((w,k)=>{let b={numThreads:r};if(c)b.wasmBinary=c;else if(d||n)b.locateFile=_=>d??n+_;else if(o&&o.indexOf("blob:")!==0)b.locateFile=_=>new URL(_,o).href;else if(f){let _=vd();_&&(b.locateFile=S=>_+S)}h(b).then(_=>{Gt=!1,vr=!0,ka=_,w(),f&&URL.revokeObjectURL(f)},_=>{Gt=!1,Sa=!0,k(_)})})),await Promise.race(m),y)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},ge=()=>{if(vr&&ka)return ka;throw new Error("WebAssembly is not initialized yet.")}}),Fe,Nr,fe,Ri=U(()=>{"use strict";Et(),Fe=(e,t)=>{let r=ge(),a=r.lengthBytesUTF8(e)+1,i=r._malloc(a);return r.stringToUTF8(e,i,a),t.push(i),i},Nr=(e,t,r,a)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([i,n])=>{let s=t?t+i:i;if(typeof n=="object")Nr(n,s+".",r,a);else if(typeof n=="string"||typeof n=="number")a(s,n.toString());else if(typeof n=="boolean")a(s,n?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof n}`)})},fe=e=>{let t=ge(),r=t.stackSave();try{let a=t.PTR_SIZE,i=t.stackAlloc(2*a);t._OrtGetLastError(i,i+a);let n=Number(t.getValue(i,a===4?"i32":"i64")),s=t.getValue(i+a,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${n}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),Sd,Nm=U(()=>{"use strict";Et(),Ri(),Sd=e=>{let t=ge(),r=0,a=[],i=e||{};try{if(e?.logSeverityLevel===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(i.terminate=!1);let n=0;return e?.tag!==void 0&&(n=Fe(e.tag,a)),r=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,n),r===0&&fe("Can't create run options."),e?.extra!==void 0&&Nr(e.extra,"",new WeakSet,(s,o)=>{let l=Fe(s,a),d=Fe(o,a);t._OrtAddRunConfigEntry(r,l,d)!==0&&fe(`Can't set a run config entry: ${s} - ${o}.`)}),[r,a]}catch(n){throw r!==0&&t._OrtReleaseRunOptions(r),a.forEach(s=>t._free(s)),n}}}),Cs,As,Os,Ft,Bs,Td,Dm=U(()=>{"use strict";Et(),Ri(),Cs=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},As=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Os=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Ft=(e,t,r,a)=>{let i=Fe(t,a),n=Fe(r,a);ge()._OrtAddSessionConfigEntry(e,i,n)!==0&&fe(`Can't set a session config entry: ${t} - ${r}.`)},Bs=async(e,t,r)=>{for(let a of t){let i=typeof a=="string"?a:a.name,n=[];switch(i){case"webnn":if(i="WEBNN",typeof a!="string"){let c=a?.deviceType;c&&Ft(e,"deviceType",c,r)}break;case"webgpu":if(i="JS",typeof a!="string"){let c=a;if(c?.preferredLayout){if(c.preferredLayout!=="NCHW"&&c.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${c.preferredLayout}`);Ft(e,"preferredLayout",c.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${i}`)}let s=Fe(i,r),o=n.length,l=0,d=0;if(o>0){l=ge()._malloc(o*ge().PTR_SIZE),r.push(l),d=ge()._malloc(o*ge().PTR_SIZE),r.push(d);for(let c=0;c<o;c++)ge().setValue(l+c*ge().PTR_SIZE,n[c][0],"*"),ge().setValue(d+c*ge().PTR_SIZE,n[c][1],"*")}await ge()._OrtAppendExecutionProvider(e,s,l,d,o)!==0&&fe(`Can't append execution provider: ${i}.`)}},Td=async e=>{let t=ge(),r=0,a=[],i=e||{};Os(i);try{let n=Cs(i.graphOptimizationLevel??"all"),s=As(i.executionMode??"sequential"),o=typeof i.logId=="string"?Fe(i.logId,a):0,l=i.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log serverity level is not valid: ${l}`);let d=i.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let c=typeof i.optimizedModelFilePath=="string"?Fe(i.optimizedModelFilePath,a):0;if(r=t._OrtCreateSessionOptions(n,!!i.enableCpuMemArena,!!i.enableMemPattern,s,!!i.enableProfiling,0,o,l,d,c),r===0&&fe("Can't create session options."),i.executionProviders&&await Bs(r,i.executionProviders,a),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);Ft(r,"enableGraphCapture",i.enableGraphCapture.toString(),a)}if(i.freeDimensionOverrides)for(let[f,h]of Object.entries(i.freeDimensionOverrides)){if(typeof f!="string")throw new Error(`free dimension override name must be a string: ${f}`);if(typeof h!="number"||!Number.isInteger(h)||h<0)throw new Error(`free dimension override value must be a non-negative integer: ${h}`);let y=Fe(f,a);t._OrtAddFreeDimensionOverride(r,y,h)!==0&&fe(`Can't set a free dimension override: ${f} - ${h}.`)}return i.extra!==void 0&&Nr(i.extra,"",new WeakSet,(f,h)=>{Ft(r,f,h,a)}),[r,a]}catch(n){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&fe("Can't release session options."),a.forEach(s=>t._free(s)),n}}}),xt,rt,kt,Gr,Dr,Mi,Ni,hi,J=U(()=>{"use strict";xt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},rt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},kt=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],a=typeof t=="number"?t:t.reduce((i,n)=>i*n,1);return r>0?Math.ceil(a*r):void 0},Gr=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Dr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Mi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ni=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",hi=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Di,Id=U(()=>{"use strict";Ai(),Di=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),a=r?parseInt(r,10):0;if(a<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let i=t.body.getReader(),n;try{n=new ArrayBuffer(a)}catch(o){if(o instanceof RangeError){let l=Math.ceil(a/65536);n=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw o}let s=0;for(;;){let{done:o,value:l}=await i.read();if(o)break;let d=l.byteLength;new Uint8Array(n,s,d).set(l),s+=d}return new Uint8Array(n,0,a)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Rs,Ms,Ns,Ds,Ui,Us,le,at=U(()=>{"use strict";J(),Rs=["V","I","W","E","F"],Ms=(e,t)=>{console.log(`[${Rs[e]},${new Date().toISOString()}]${t}`)},Ui=(e,t)=>{Ns=e,Ds=t},Us=(e,t)=>{let r=Dr(e),a=Dr(Ns);r>=a&&Ms(r,typeof t=="function"?t():t)},le=(...e)=>{Ds&&Us(...e)}}),Ps,Nt,C,Ur,Ed,zd,Cd,ie=U(()=>{"use strict";Ps=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Nt=class{static calcShape(e,t,r=!1){let a=e.length,i=t.length;if(a===0)return t;if(i===0)return e;let n=Math.max(e.length,t.length),s=new Array(n);if(r){if(a<2||i<2)return;let o=Ps.calcMatMulShape([e[a-2],e[a-1]],[t[i-2],t[i-1]]);if(o===void 0)return;[s[n-2],s[n-1]]=o}for(let o=r?3:1;o<=n;o++){let l=a-o<0?1:e[a-o],d=i-o<0?1:t[i-o];if(l!==d&&l>1&&d>1)return;let c=Math.max(l,d);if(l&&d)s[n-o]=Math.max(l,d);else{if(c>1)return;s[n-o]=0}}return s}static isValidBroadcast(e,t){let r=e.length,a=t.length;if(r>a)return!1;for(let i=1;i<=r;i++)if(e[r-i]!==1&&e[r-i]!==t[a-i])return!1;return!0}},C=class Br{static size(t){return Br.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let a=t.length;if(a===0)return[];let i=new Array(a),n=a-1;for(;n>=0;){if(t[n]%r===0){i[n]=t[n]/r;break}if(r%t[n]!==0)throw new Error("cannot convert shape");i[n]=1,r/=t[n],n--}for(n--;n>=0;n--)i[n]=t[n];return i}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Br.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Br.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,a){let i=1;for(let n=r;n<a;n++){if(t[n]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(t[n])}return i}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let a=new Array(r);a[r-1]=1,a[r-2]=t[r-1];for(let i=r-3;i>=0;--i)a[i]=a[i+1]*t[i+1];return a}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(a=>this.normalizeAxis(a,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(a=>t[a]):t.slice().reverse()}static padShape(t,r){let a=t.length;return t.map((i,n)=>i+r[n]+r[n+a])}static areEqual(t,r){return t.length!==r.length?!1:t.every((a,i)=>a===r[i])}},Ur=class tr{static adjustPoolAttributes(t,r,a,i,n,s){if(!t&&a.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=a.length?a.push(r[o+2]):a[o]=r[o+2];for(let o=0;o<a.length;o++)if(o<i.length){if(i[o]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let o=0;o<a.length;o++)if(o<n.length){if(n[o]<0)throw new Error("dilations should be greater than or equal to 1")}else n.push(1);for(let o=0;o<a.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<a.length;o++){if(a[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=a[o]||s[o+a.length]>=a[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,a,i,n,s,o){if(o){if(n.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)tr.adjustPadAndReturnShape(t[l+(s?1:2)],r[l],a[l],i[l],n,l,l+t.length-2,o)}}static computePoolOutputShape(t,r,a,i,n,s,o){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return tr.computeShapeHelper(t,r,l,a,i,n,s,o),l}static computeConvOutputShape(t,r,a,i,n,s,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return tr.computeShapeHelper(!1,t,l,a,i,n,s,o),l}static computeShapeHelper(t,r,a,i,n,s,o,l){if(t)for(let d=0;d<r.length-2;d++)a.push(1);else for(let d=0;d<r.length-2;d++)a.push(tr.adjustPadAndReturnShape(r[d+2],i[d],n[d],s[d],o,d,d+r.length-2,l))}static adjustPadAndReturnShape(t,r,a,i,n,s,o,l){let d=a*(i-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return n[s]=0,n[o]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(a!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+r-1)/r-1)*r+i-t;return n[s]=Math.floor(l==="SAME_LOWER"?(c+1)/2:c/2),n[o]=c-n[s],Math.floor((t+c-i)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+n[s]+n[o]-d)/r+1)}},Ed=class{static getShapeOfGemmResult(e,t,r,a,i){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let n,s,o;t?(n=e[1],s=e[0]):(n=e[0],s=e[1]);let l=-1;if(a?(o=r[0],l=1):(o=r[1],l=0),r[l]!==s)throw new Error("dimension mismatch");if(n<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(i&&!Nt.isValidBroadcast(i,[n,o]))throw new Error("gemm: invalid bias shape for broadcast");return[n,o,s]}},zd=-34028234663852886e22,Cd=34028234663852886e22}),Pi,Ad=U(()=>{"use strict";J(),Pi=(e,t)=>new(Gr(t))(e)}),Ta,mi,Ia,qs,Ea,Ws,za,Ca,Aa,Ls,Od,Um=U(()=>{"use strict";J(),at(),Ta=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),mi=(e,t)=>{if(t==="int32")return e;let r=Ta.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let a=r/8;if(e.byteLength%a!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${a}.`);let i=e.byteLength/a,n=new(Gr(t))(e.buffer,e.byteOffset,i);switch(t){case"int64":case"uint64":{let s=new Int32Array(i);for(let o=0;o<i;o++){let l=n[o];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(l)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&n.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(n,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Ia=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,a=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let i=BigInt64Array.from(a,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(a.some(n=>n<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(a,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(a.some(n=>n<-128||n>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(a,Number);return new Uint8Array(i.buffer)}case"uint8":{if(a.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(a,Number)}case"uint32":{if(a.some(n=>n<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(a,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},qs=1,Ea=()=>qs++,Ws=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),za=(e,t)=>{let r=Ta.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((a,i)=>a*i)*r/8):0},Ca=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:a,dataType:i,shape:n,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=a,this.dataType=i,this.tensorShape=n,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return za(this.dataType,this.tensorShape)}destroy(){le("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=Ia(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return r.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((a,i)=>a===r[i])}setIsDataConverted(e){this.isDataConverted=e}},Aa=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,a){let i=this.tensorManager.getMLContext(e),n;if(!i.opSupportLimits().input.dataTypes.includes(t)){if(n=Ws.get(t),!n||!i.opSupportLimits().input.dataTypes.includes(n))throw new Error(`WebNN backend does not support data type: ${t}`);le("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${n}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,r))return this.wrapper.tensor;if(a){if(this.wrapper.byteLength!==za(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,s,!0,!0,n),a&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=mi(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else le("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?Ia(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Ls=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=Ea();return this.tensorTrackersById.set(e,new Aa(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,a,i){le("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${a}, copyOld: ${i}}`);let n=this.tensorTrackersById.get(t);if(!n)throw new Error("Tensor not found.");return n.ensureTensor(e,r,a,i)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){le("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,a){let i=this.getMLContext(e),n=Ea(),s=new Ca({sessionId:e,context:i,tensor:t,dataType:r,shape:a});return this.tensorTrackersById.set(n,new Aa(this,s)),this.externalTensors.add(s),n}async getCachedTensor(e,t,r,a,i,n,s){let o=this.getMLContext(e);for(let[d,c]of this.freeTensors.entries())if(c.canReuseTensor(o,t,r)){le("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let f=this.freeTensors.splice(d,1)[0];return f.sessionId=e,f}le("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let l=await o.createTensor({dataType:s??t,shape:r,dimensions:r,usage:a,writable:i,readable:n});return new Ca({sessionId:e,context:o,tensor:l,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Od=(...e)=>new Ls(...e)}),Ht,Vs,Bd,Pm=U(()=>{"use strict";J(),Et(),Ad(),Um(),at(),Ht=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Vs=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),a=Object.keys(t).sort();return r.length===a.length&&r.every((i,n)=>i===a[n]&&e[i]===t[i])},Bd=class{constructor(e){this.tensorManager=Od(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,Ui(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){le("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){le("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)le("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(a=>a.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:a}),a}}else if(e===void 0){let r=this.mlContextCache.findIndex(a=>a.options===void 0&&a.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:a}),a}}let t=this.mlContextCache.findIndex(r=>Vs(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let a=this.mlContextCache.findIndex(i=>i.mlContext===t);a!==-1&&this.mlContextCache.splice(a,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){le("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,a,i){let n=Ht.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,n,a,i)}async createTemporaryTensor(e,t,r){le("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let a=Ht.get(t);if(!a)throw new Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,a,r,!1);let n=this.temporarySessionTensorIds.get(e);return n?n.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!ge().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");le("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Pi(r,t)}}registerMLTensor(e,t,r,a){let i=Ht.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);let n=this.tensorManager.registerTensor(e,t,i,a);return le("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${a}} -> {tensorId: ${n}}`),n}registerMLConstant(e,t,r,a,i,n,s=!1){if(!n)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let l=n.get(o);if(!l)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+r).buffer,c;switch(i.dataType){case"float32":c=new Float32Array(d);break;case"float16":c=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(d):new Uint16Array(d);break;case"int32":c=new Int32Array(d);break;case"uint32":c=new Uint32Array(d);break;case"int64":if(s){let f=mi(new Uint8Array(d),"int64");c=new Int32Array(f.buffer),i.dataType="int32"}else c=new BigInt64Array(d);break;case"uint64":c=new BigUint64Array(d);break;case"int8":c=new Int8Array(d);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return le("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),a.constant(i,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let a=this.mlContextBySessionId.get(e),i=Ht.get(xt(t));return typeof i>"u"?!1:r?!!a?.opSupportLimits().input.dataTypes.includes(i):!!a?.opSupportLimits().output.dataTypes.includes(i)}flush(){}}}),qi=U(()=>{"use strict"}),Oa,xr,kr,Gs,Fs,Ba,gi,Hs,Rd,qm=U(()=>{"use strict";at(),qi(),Oa=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),xr=[],kr=e=>Math.ceil(Number(e)/16)*16,Gs=e=>{for(let t=0;t<xr.length;t++){let r=xr[t];if(e<=r)return r}return Math.ceil(e/16)*16},Fs=1,Ba=()=>Fs++,gi=async(e,t,r,a)=>{let i=kr(r),n=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,n,0,i),e.flush(),await n.mapAsync(GPUMapMode.READ);let o=n.getMappedRange();if(a){let l=a();return l.set(new Uint8Array(o,0,r)),l}else return new Uint8Array(o.slice(0,r))}finally{n.destroy()}},Hs=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Oa)xr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,a=t.byteOffset,i=t.byteLength,n=kr(i),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${i}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:n,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=o.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,a,i)),o.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(o,0,s.gpuData.buffer,0,n),this.backend.device.queue.submit([d.finish()]),o.destroy(),le("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let a=this.storageCache.get(t);if(!a)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==a.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=kr(r.originalSize),n=this.backend.getCommandEncoder();this.backend.endComputePass(),n.copyBufferToBuffer(r.gpuData.buffer,0,a.gpuData.buffer,0,i)}registerExternalBuffer(e,t,r){let a;if(r){if(a=r[0],e===r[1])return le("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, buffer is the same, skip.`),a;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else a=Ba();return this.storageCache.set(a,{gpuData:{id:a,type:0,buffer:e},originalSize:t}),le("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, registered.`),a}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),le("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Gs(e),a,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,n=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||n){let o=(i?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?a=o.pop():a=this.backend.device.createBuffer({size:r,usage:t}):a=this.backend.device.createBuffer({size:r,usage:t})}else a=this.backend.device.createBuffer({size:r,usage:t});let s={id:Ba(),type:0,buffer:a};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),le("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return le("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await gi(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Oa.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(le("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Rd=(...e)=>new Hs(...e)}),js,ce,be=U(()=>{"use strict";js=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},ce=e=>new js(e)}),Dt,Sr,xe,Te,Z,we,yi,Mt,ft,H,jt,R,G,Md,Wi,Ks,Nd,ne=U(()=>{"use strict";J(),ie(),Dt=64,Sr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},xe=(e,t=1)=>{let r=Sr(e,t);return typeof r=="string"?r:r[0]},Te=(e,t=1)=>{let r=Sr(e,t);return typeof r=="string"?r:r[1]},Z=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:C.computeStrides(r)})}),t},we=e=>e%4===0?4:e%2===0?2:1,yi=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Mt=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,ft=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,H=(e,t,r,a)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?a==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:a==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,jt=(e,t,r,a,i)=>{let n=typeof r=="number",s=n?r:r.length,o=[...new Array(s).keys()],l=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=Sr(t,i),c=typeof d=="string"?d:d[1],f=typeof d=="string"?d:d[0],h={indices:l,value:c,storage:f,tensor:t},y=N=>typeof N=="string"?N:`${N}u`,m={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},w=n?"uniforms.":"",k=`${w}${e}_shape`,b=`${w}${e}_strides`,_="";for(let N=0;N<s-1;N++)_+=`
    let dim${N} = current / ${H(b,N,s)};
    let rest${N} = current % ${H(b,N,s)};
    indices[${N}] = dim${N};
    current = rest${N};
    `;_+=`indices[${s-1}] = current;`;let S=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${h.indices} {
    var indices: ${h.indices};
    var current = offset;
    ${_}
    return indices;
  }`,v=N=>(m.offsetToIndices=!0,s<2?N:`o2i_${e}(${N})`),T=[];if(s>=2)for(let N=s-1;N>=0;N--)T.push(`${H(b,N,s)} * (indices[${N}])`);let I=s<2?"":`
  fn i2o_${e}(indices: ${h.indices}) -> u32 {
    return ${T.join("+")};
  }`,z=N=>(m.indicesToOffset=!0,s<2?N:`i2o_${e}(${N})`),A=(...N)=>s===0?"0u":`${h.indices}(${N.map(y).join(",")})`,M=(N,W)=>s<2?`${N}`:`${H(N,W,s)}`,P=(N,W,te)=>s<2?`${N}=${te};`:`${H(N,W,s)}=${te};`,Y={},F=(N,W)=>{m.broadcastedIndicesToOffset=!0;let te=`${W.name}broadcastedIndicesTo${e}Offset`;if(te in Y)return`${te}(${N})`;let O=[];for(let ae=s-1;ae>=0;ae--){let Ie=W.indicesGet("outputIndices",ae+W.rank-s);O.push(`${M(b,ae)} * (${Ie} % ${M(k,ae)})`)}return Y[te]=`fn ${te}(outputIndices: ${W.type.indices}) -> u32 {
             return ${O.length>0?O.join("+"):"0u"};
           }`,`${te}(${N})`},ee=(N,W)=>(()=>{if(h.storage===h.value)return`${e}[${N}]=${W};`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`${e}[${N}]=vec2<u32>(u32(${W}), select(0u, 0xFFFFFFFFu, ${W} < 0));`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`${e}[${N}]=vec2<u32>(u32(${W}), 0u);`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`${e}[${N}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${W}));`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),q=N=>(()=>{if(h.storage===h.value)return`${e}[${N}]`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`i32(${e}[${N}].x)`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`u32(${e}[${N}].x)`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${N}] & 0xFFu), bool(${e}[${N}] & 0xFF00u), bool(${e}[${N}] & 0xFF0000u), bool(${e}[${N}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),re=s<2?"":`
  fn get_${e}ByIndices(indices: ${h.indices}) -> ${c} {
    return ${q(`i2o_${e}(indices)`)};
  }`,Q=s<2?"":(()=>{let N=o.map(te=>`d${te}: u32`).join(", "),W=o.map(te=>`d${te}`).join(", ");return`
  fn get_${e}(${N}) -> ${c} {
    return get_${e}ByIndices(${A(W)});
  }`})(),V=(...N)=>{if(N.length!==s)throw new Error(`indices length must be ${s}`);let W=N.map(y).join(",");return s===0?q("0u"):s===1?q(W[0]):(m.get=!0,m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}(${W})`)},oe=N=>s<2?q(N):(m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}ByIndices(${N})`),j=s<2?"":`
  fn set_${e}ByIndices(indices: ${h.indices}, value: ${c}) {
    ${ee(`i2o_${e}(indices)`,"value")}
  }`,ue=s<2?"":(()=>{let N=o.map(te=>`d${te}: u32`).join(", "),W=o.map(te=>`d${te}`).join(", ");return`
  fn set_${e}(${N}, value: ${c}) {
    set_${e}ByIndices(${A(W)}, value);
  }`})();return{impl:()=>{let N=[],W=!1;return m.offsetToIndices&&(N.push(S),W=!0),m.indicesToOffset&&(N.push(I),W=!0),m.broadcastedIndicesToOffset&&(Object.values(Y).forEach(te=>N.push(te)),W=!0),m.set&&(N.push(ue),W=!0),m.setByIndices&&(N.push(j),W=!0),m.get&&(N.push(Q),W=!0),m.getByIndices&&(N.push(re),W=!0),!n&&W&&N.unshift(`const ${k} = ${h.indices}(${r.join(",")});`,`const ${b} = ${h.indices}(${C.computeStrides(r).join(",")});`),N.join(`
`)},type:h,offsetToIndices:v,indicesToOffset:z,broadcastedIndicesToOffset:F,indices:A,indicesGet:M,indicesSet:P,set:(...N)=>{if(N.length!==s+1)throw new Error(`indices length must be ${s}`);let W=N[s];if(typeof W!="string")throw new Error("value must be string");let te=N.slice(0,s).map(y).join(",");return s===0?ee("0u",W):s===1?ee(te[0],W):(m.set=!0,m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}(${te}, ${W})`)},setByOffset:ee,setByIndices:(N,W)=>s<2?ee(N,W):(m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}ByIndices(${N}, ${W});`),get:V,getByOffset:q,getByIndices:oe,usage:a,name:e,strides:b,shape:k,rank:s}},R=(e,t,r,a=1)=>jt(e,t,r,"input",a),G=(e,t,r,a=1)=>jt(e,t,r,"output",a),Md=(e,t,r)=>jt(e,t,r,"atomicOutput",1),Wi=(e,t,r,a=1)=>jt(e,t,r,"internal",a),Ks=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Dt){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],a=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||a>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*a>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,n=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*a}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${a})
  fn main(${n}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",a=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${a}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:a}of this.uniforms)if(a&&a>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(a/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(a/4)}>`);else{let i=a==null||a===1?r:`vec${a}<${r}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Nd=(e,t)=>new Ks(e,t)}),Zs,Ra,Qs,Xs,Ys,Js,Me,Dd,Ud,ht=U(()=>{"use strict";J(),ie(),be(),ne(),Zs=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Ra=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Qs=(e,t)=>C.sortBasedOnPerm(e,Ra(e.length,t)),Xs=(e,t,r,a)=>{let i=`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let n=0;n<t;++n)i+=`a[${e[n]}]=i[${n}];`;return i+="return a;}"},Ys=(e,t)=>{let r=[],a=[];for(let i=0;i<e.length;++i)e[i]!==1&&r.push(e[i]),e[t[i]]!==1&&a.push(t[i]);return{newShape:r,newPerm:a}},Js=(e,t)=>{let r=0;for(let a=0;a<e.length;++a)if(t[e[a]]!==1){if(e[a]<r)return!1;r=e[a]}return!0},Me=(e,t)=>{let r=e.dataType,a=e.dims.length,i=Ra(a,t),n=Qs(e.dims,i),s=e.dims,o=n,l=a<2||Js(i,e.dims),d;if(l)return d=m=>{let w=R("input",r,s,4),k=G("output",r,o,4);return`
  ${m.registerUniform("output_size","u32").declareVariables(w,k)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let m=C.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64/4)},programUniforms:[{type:12,data:Math.ceil(m/4)}]}},getShaderSource:d};let{newShape:c,newPerm:f}=Ys(e.dims,i),h=C.areEqual(f,[2,3,1]),y=C.areEqual(f,[3,1,2]);if(c.length===2||h||y){s=h?[c[0],c[1]*c[2]]:y?[c[0]*c[1],c[2]]:c,o=[s[1],s[0]];let m=16;return d=w=>{let k=R("a",r,s.length),b=G("output",r,o.length);return`
  ${w.registerUniform("output_size","u32").declareVariables(k,b)}
  var<workgroup> tile : array<array<${b.type.value}, ${m+1}>, ${m}>;
  ${w.mainStart([m,m,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${m} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${m}u + local_id.x;
    let input_row = workgroup_id_x * ${m}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${k.getByIndices(`${k.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${m}u + local_id.x;
    let output_row = workgroup_id_y * ${m}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${b.setByIndices(`${b.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=C.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/m),y:Math.ceil(o[0]/m)},programUniforms:[{type:12,data:w},...Z(s,o)]}},getShaderSource:d}}return d=m=>{let w=R("a",r,s.length),k=G("output",r,o.length);return`
  ${m.registerUniform("output_size","u32").declareVariables(w,k)}

  ${Xs(i,a,w,k)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${k.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${k.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let m=C.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...Z(s,o)]}},getShaderSource:d}},Dd=(e,t)=>{Zs(e.inputs,t.perm),e.compute(Me(e.inputs[0],t.perm))},Ud=e=>ce({perm:e.perm})}),eo,to,ro,ao,io,no,so,oo,uo,lo,qe,Pd,qd,Wd,Ld,Vd,Gd,Fd,Hd,jd,Kd,Wm=U(()=>{"use strict";J(),ie(),ne(),Li(),ht(),eo={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},to={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},ro={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},ao={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},io=(e,t)=>{let r=[];for(let a=t-e;a<t;++a)r.push(a);return r},no=(e,t)=>{let r=[],a=e.length;for(let n=0;n<a;n++)t.indexOf(n)===-1&&r.push(e[n]);let i=t.map(n=>e[n]);return[r,i]},so=(e,t)=>{let r=e.length+t.length,a=[],i=0;for(let n=0;n<r;n++)t.indexOf(n)===-1?a.push(e[i++]):a.push(1);return a},oo=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},uo=(e,t)=>{let r=[];if(!oo(e,t)){for(let a=0;a<t;++a)e.indexOf(a)===-1&&r.push(a);e.forEach(a=>r.push(a))}return r},lo=(e,t,r,a,i,n,s)=>{let o=r[0].dims,l=C.size(n),d=C.size(s),c=R("_A",r[0].dataType,o),f=G("output",i,n),h=64;l===1&&(h=256);let y=`
          var<workgroup> aBestValues : array<f32, ${h}>;
       `,m=w=>`
        ${w.registerUniform("reduceSize","u32").declareVariables(c,f)}
        ${y}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${w.mainStart(h)}

          let outputIndex = global_idx / ${h};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${ro[a]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${h}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${eo[a]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${h}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${to[a]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${f.setByOffset("outputIndex",`${a==="mean"?`${f.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${f.type.storage}(${ao[a]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${h}`,inputDependencies:["type"]},getShaderSource:m,getRunData:()=>({outputs:[{dims:n,dataType:i}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},qe=(e,t,r,a)=>{let i=e.inputs.length===1?r:_i(e.inputs,r),n=i.axes;n.length===0&&!i.noopWithEmptyAxes&&(n=e.inputs[0].dims.map((y,m)=>m));let s=C.normalizeAxes(n,e.inputs[0].dims.length),o=s,l=e.inputs[0],d=uo(o,e.inputs[0].dims.length);d.length>0&&(l=e.compute(Me(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=io(o.length,l.dims.length));let[c,f]=no(l.dims,o),h=c;i.keepDims&&(h=so(c,s)),e.compute(lo(t,i.cacheKey,[l],a,e.inputs[0].dataType,h,f),{inputs:[l]})},Pd=(e,t)=>{qe(e,"ReduceMeanShared",t,"mean")},qd=(e,t)=>{qe(e,"ReduceL1Shared",t,"l1")},Wd=(e,t)=>{qe(e,"ReduceL2Shared",t,"l2")},Ld=(e,t)=>{qe(e,"ReduceLogSumExpShared",t,"logSumExp")},Vd=(e,t)=>{qe(e,"ReduceMaxShared",t,"max")},Gd=(e,t)=>{qe(e,"ReduceMinShared",t,"min")},Fd=(e,t)=>{qe(e,"ReduceProdShared",t,"prod")},Hd=(e,t)=>{qe(e,"ReduceSumShared",t,"sum")},jd=(e,t)=>{qe(e,"ReduceSumSquareShared",t,"sumSquare")},Kd=(e,t)=>{qe(e,"ReduceLogSumShared",t,"logSum")}}),We,po,Pr,_i,Le,co,fo,ho,mo,go,yo,_o,wo,bo,$o,Ve,Zd,Qd,Xd,Yd,Jd,ep,tp,rp,ap,ip,Li=U(()=>{"use strict";J(),ie(),be(),ne(),Wm(),We=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},po=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Pr=(e,t,r,a,i,n,s=!1,o=!1)=>{let l=[],d=r[0].dims,c=d.length,f=C.normalizeAxes(i,c),h=!o&&f.length===0;d.forEach((w,k)=>{h||f.indexOf(k)>=0?s&&l.push(1):l.push(w)});let y=l.length,m=C.size(l);return{name:e,shaderCache:t,getShaderSource:w=>{let k=[],b=R("_A",r[0].dataType,c),_=G("output",n,y),S=a(b,_,f),v=S[2];for(let T=0,I=0;T<c;T++)h||f.indexOf(T)>=0?(s&&I++,v=`for(var j${T}: u32 = 0; j${T} < ${d[T]}; j${T}++) {
                  ${S[2].includes("last_index")?`let last_index = j${T};`:""}
                  ${b.indicesSet("input_indices",T,`j${T}`)}
                  ${v}
                }`):(k.push(`${b.indicesSet("input_indices",T,_.indicesGet("output_indices",I))};`),I++);return`

        ${w.registerUniform("output_size","u32").declareVariables(b,_)}

        ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${b.type.indices};
          let output_indices = ${_.offsetToIndices("global_idx")};

          ${k.join(`
`)}
          ${S[0]}       // init ops for reduce max/min
          ${S[1]}
          ${v}
          ${S[3]}
          ${S.length===4?_.setByOffset("global_idx","value"):S.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:n}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...Z(d,l)]})}},_i=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),ce({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Le=(e,t,r,a)=>{let i=e.inputs,n=i.length===1?r:_i(i,r);e.compute(Pr(t,{hint:n.cacheKey,inputDependencies:["rank"]},[i[0]],n.noopWithEmptyAxes&&n.axes.length===0?po:a,n.axes,i[0].dataType,n.keepDims,n.noopWithEmptyAxes),{inputs:[0]})},co=(e,t)=>{We(e.inputs),Le(e,"ReduceLogSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},fo=(e,t)=>{We(e.inputs),Le(e,"ReduceL1",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},ho=(e,t)=>{We(e.inputs),Le(e,"ReduceL2",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},mo=(e,t)=>{We(e.inputs),Le(e,"ReduceLogSumExp",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},go=(e,t)=>{We(e.inputs),Le(e,"ReduceMax",t,(r,a,i)=>{let n=[];for(let s=0;s<r.rank;s++)(i.indexOf(s)>=0||i.length===0)&&n.push(r.indicesSet("input_indices",s,0));return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},yo=(e,t)=>{We(e.inputs),Le(e,"ReduceMean",t,(r,a,i)=>{let n=1;for(let s=0;s<r.rank;s++)(i.indexOf(s)>=0||i.length===0)&&(n*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${a.type.value}(sum / ${n});`]})},_o=(e,t)=>{We(e.inputs),Le(e,"ReduceMin",t,(r,a,i)=>{let n=[];for(let s=0;s<r.rank;s++)(i.indexOf(s)>=0||i.length===0)&&n.push(`input_indices[${s}] = 0;`);return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},wo=(e,t)=>{We(e.inputs),Le(e,"ReduceProd",t,(r,a)=>[`var value = ${a.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},bo=(e,t)=>{We(e.inputs),Le(e,"ReduceSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},$o=(e,t)=>{We(e.inputs),Le(e,"ReduceSumSquare",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Ve=(e,t,r)=>{if(t.length===0)return r;let a=1,i=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?a*=e[n]:i*=e[n];return i<32&&a>1024},Zd=(e,t)=>{Ve(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?yo(e,t):Pd(e,t)},Qd=(e,t)=>{Ve(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fo(e,t):qd(e,t)},Xd=(e,t)=>{Ve(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ho(e,t):Wd(e,t)},Yd=(e,t)=>{Ve(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?mo(e,t):Ld(e,t)},Jd=(e,t)=>{Ve(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?go(e,t):Vd(e,t)},ep=(e,t)=>{Ve(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?_o(e,t):Gd(e,t)},tp=(e,t)=>{Ve(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?wo(e,t):Fd(e,t)},rp=(e,t)=>{Ve(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?bo(e,t):Hd(e,t)},ap=(e,t)=>{Ve(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?$o(e,t):jd(e,t)},ip=(e,t)=>{Ve(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?co(e,t):Kd(e,t)}}),Ma,np,sp,wi,Lm=U(()=>{"use strict";J(),be(),Li(),Ma=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},np=(e,t)=>{Ma(e.inputs);let r=(a,i,n)=>{let s=[];for(let o=0;o<a.rank;o++)(n.indexOf(o)>=0||n.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Pr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},sp=(e,t)=>{Ma(e.inputs);let r=(a,i,n)=>{let s=[];for(let o=0;o<a.rank;o++)(n.indexOf(o)>=0||n.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};e.compute(Pr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},wi=e=>ce(e)}),vo,Tr,xo,ko,So,sr,To,op,Vi=U(()=>{"use strict";J(),ie(),qi(),ne(),vo=(e,t)=>{let r=e[0],a=e[1],i=e[2],n=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],c=r.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(a.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(a.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==a.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let f=i.dims[0]/3,h=f,y=h;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let S of t.qkvHiddenSizes)if(S%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");f=t.qkvHiddenSizes[0],h=t.qkvHiddenSizes[1],y=t.qkvHiddenSizes[2]}let m=d;if(f!==h)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==f+h+y)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let w=0;if(s){if(h!==y)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==h/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(w=s.dims[3])}let k=m+w,b=-1,_=0;if(n)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==l||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==k)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:w,kvSequenceLength:m,totalSequenceLength:k,maxSequenceLength:b,inputHiddenSize:c,hiddenSize:f,vHiddenSize:y,headSize:Math.floor(f/t.numHeads),vHeadSize:Math.floor(y/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:_,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Tr=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,xo=(e,t,r,a,i,n,s,o)=>{let l=we(s?1:n),d=64,c=n/l;c<d&&(d=32);let f=Math.ceil(n/l/d),h=[{type:12,data:t},{type:12,data:r},{type:12,data:a},{type:12,data:i},{type:12,data:c},{type:12,data:f}],y=xe(e.dataType,l),m=Te(1,l),w=["type"];s&&w.push("type"),o&&w.push("type");let k=b=>{let _=G("x",e.dataType,e.dims,l),S=[_],v=s?R("seq_lens",s.dataType,s.dims):void 0;v&&S.push(v);let T=o?R("total_sequence_length_input",o.dataType,o.dims):void 0;T&&S.push(T);let I=Te(e.dataType),z=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${b.registerUniforms(z).declareVariables(...S)}
  ${b.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Tr(v,T,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${m}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${m}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${m}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${m}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${_.type.value}(${I}(1.0) / ${I}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${m}(x[offset + i]);
        x[offset + i] = ${_.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${_.type.value}(${I}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${y};${l}`,inputDependencies:w},getShaderSource:k,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*r},programUniforms:h})}},ko=(e,t,r,a,i,n,s,o,l)=>{let d=s+n.kvSequenceLength,c=[n.batchSize,n.numHeads,n.sequenceLength,d],f=e>1&&a,h=n.kvNumHeads?n.kvNumHeads:n.numHeads,y=f?[n.batchSize,h,d,n.headSize]:void 0,m=n.nReps?n.nReps:1,w=n.scale===0?1/Math.sqrt(n.headSize):n.scale,k=we(n.headSize),b=n.headSize/k,_=12,S={x:Math.ceil(d/_),y:Math.ceil(n.sequenceLength/_),z:n.batchSize*n.numHeads},v=[{type:12,data:n.sequenceLength},{type:12,data:b},{type:12,data:d},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:1,data:w},{type:12,data:s},{type:12,data:n.kvSequenceLength},{type:12,data:m}],T=f&&a&&C.size(a.dims)>0,I=["type","type"];T&&I.push("type"),i&&I.push("type"),o&&I.push("type"),l&&I.push("type");let z=[{dims:c,dataType:t.dataType,gpuDataType:0}];f&&z.push({dims:y,dataType:t.dataType,gpuDataType:0});let A=M=>{let P=R("q",t.dataType,t.dims,k),Y=R("key",r.dataType,r.dims,k),F=[P,Y];if(T){let j=R("past_key",a.dataType,a.dims,k);F.push(j)}i&&F.push(R("attention_bias",i.dataType,i.dims));let ee=o?R("seq_lens",o.dataType,o.dims):void 0;ee&&F.push(ee);let q=l?R("total_sequence_length_input",l.dataType,l.dims):void 0;q&&F.push(q);let re=G("output",t.dataType,c),Q=[re];f&&Q.push(G("present_key",t.dataType,y,k));let V=Te(1,k),oe=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${_}u;

  var<workgroup> tileQ: array<${P.type.storage}, ${_*_}>;
  var<workgroup> tileK: array<${P.type.storage}, ${_*_}>;
  ${M.registerUniforms(oe).declareVariables(...F,...Q)}
  ${M.mainStart([_,_,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${m===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${m===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Tr(ee,q,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${T&&f?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${f?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${V}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${T&&f?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${f?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${V}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(k){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${k}`)}})()};
        output[outputIdx] = ${re.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${k};${i!==void 0};${a!==void 0};${e}`,inputDependencies:I},getRunData:()=>({outputs:z,dispatchGroup:S,programUniforms:v}),getShaderSource:A}},So=(e,t,r,a,i,n,s=void 0,o=void 0)=>{let l=n+i.kvSequenceLength,d=i.nReps?i.nReps:1,c=i.vHiddenSize*d,f=e>1&&a,h=i.kvNumHeads?i.kvNumHeads:i.numHeads,y=f?[i.batchSize,h,l,i.headSize]:void 0,m=[i.batchSize,i.sequenceLength,c],w=12,k={x:Math.ceil(i.vHeadSize/w),y:Math.ceil(i.sequenceLength/w),z:i.batchSize*i.numHeads},b=[{type:12,data:i.sequenceLength},{type:12,data:l},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:c},{type:12,data:n},{type:12,data:i.kvSequenceLength},{type:12,data:d}],_=f&&a&&C.size(a.dims)>0,S=["type","type"];_&&S.push("type"),s&&S.push("type"),o&&S.push("type");let v=[{dims:m,dataType:t.dataType,gpuDataType:0}];f&&v.push({dims:y,dataType:t.dataType,gpuDataType:0});let T=I=>{let z=R("probs",t.dataType,t.dims),A=R("v",r.dataType,r.dims),M=[z,A];_&&M.push(R("past_value",a.dataType,a.dims));let P=s?R("seq_lens",s.dataType,s.dims):void 0;s&&M.push(P);let Y=o?R("total_sequence_length_input",o.dataType,o.dims):void 0;o&&M.push(Y);let F=[G("output",t.dataType,m)];f&&F.push(G("present_value",t.dataType,y));let ee=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;
  var<workgroup> tileQ: array<${z.type.value}, ${w*w}>;
  var<workgroup> tileV: array<${z.type.value}, ${w*w}>;
  ${I.registerUniforms(ee).declareVariables(...M,...F)}
  ${I.mainStart([w,w,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Tr(P,Y,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${_&&f?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${f?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${z.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${_&&f?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${f?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${a!==void 0};${e}`,inputDependencies:S},getRunData:()=>({outputs:v,dispatchGroup:k,programUniforms:b}),getShaderSource:T}},sr=(e,t,r,a,i,n,s,o,l,d,c=void 0,f=void 0)=>{let h=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),y=h>1?d.pastSequenceLength:0,m=y+d.kvSequenceLength,w=l&&C.size(l.dims)>0?l:void 0,k=[t,r];h>1&&s&&C.size(s.dims)>0&&k.push(s),w&&k.push(w),c&&k.push(c),f&&k.push(f);let b=e.compute(ko(h,t,r,s,w,d,y,c,f),{inputs:k,outputs:h>1?[-1,1]:[-1]})[0];e.compute(xo(b,d.batchSize,d.numHeads,y,d.sequenceLength,m,c,f),{inputs:c&&f?[b,c,f]:[b],outputs:[]});let _=[b,a];h>1&&o&&C.size(o.dims)>0&&_.push(o),c&&_.push(c),f&&_.push(f),e.compute(So(h,b,a,o,d,y,c,f),{inputs:_,outputs:h>1?[0,2]:[0]})},To=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],a=t.sequenceLength,i=t.inputHiddenSize,n=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:a},{type:12,data:i},{type:12,data:n},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=f=>{let h=G("output_q",l[0].dataType,r),y=G("output_k",l[0].dataType,r),m=G("output_v",l[0].dataType,r),w=R("input",l[0].dataType,l[0].dims),k=R("weight",l[1].dataType,l[1].dims),b=R("bias",l[2].dataType,l[2].dims),_=w.type.storage,S=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${_}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${_}, ${s*s}>;
  var<workgroup> tileWeightK: array<${_}, ${s*s}>;
  var<workgroup> tileWeightV: array<${_}, ${s*s}>;
  ${f.registerUniforms(S).declareVariables(w,k,b,h,y,m)}
  ${f.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${_}(0);
    var valueK = ${_}(0);
    var valueV = ${_}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:c},{inputs:l,outputs:[-1,-1,-1]})},op=(e,t)=>{let r=vo(e.inputs,t),[a,i,n]=To(e,r);return sr(e,a,i,n,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Io,Eo,zo,up,Vm=U(()=>{"use strict";je(),J(),ie(),be(),ne(),Io=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(a,i,n)=>{let s=i.length;if(s!==a.length)throw new Error(`${n}: num dimensions != ${s}`);i.forEach((o,l)=>{if(o!==a[l])throw new Error(`${n}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let a=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,a,"Invalid input scale"),r(e[2].dims,a,"Invalid input B"),r(e[3].dims,a,"Invalid input mean"),r(e[4].dims,a,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Eo=(e,t)=>{let{epsilon:r,spatial:a,format:i}=t,n=e[0].dims,s=a?we(n[n.length-1]):1,o=i==="NHWC"&&n.length>1?s:1,l=C.size(n)/s,d=a,c=d?n.length:n,f=R("x",e[0].dataType,e[0].dims,s),h=R("scale",e[1].dataType,e[1].dims,o),y=R("bias",e[2].dataType,e[2].dims,o),m=R("inputMean",e[3].dataType,e[3].dims,o),w=R("inputVar",e[4].dataType,e[4].dims,o),k=G("y",e[0].dataType,c,s),b=()=>{let S="";if(a)S=`let cOffset = ${n.length===1?"0u":i==="NHWC"?`outputIndices[${n.length-1}] / ${s}`:"outputIndices[1]"};`;else if(i==="NCHW")S=`
            ${k.indicesSet("outputIndices","0","0")}
            let cOffset = ${k.indicesToOffset("outputIndices")};`;else{S=`var cIndices = ${h.type.indices}(0);
                       cIndices[0] = outputIndices[${n.length-1}];`;for(let v=1;v<h.rank;v++)S+=`cIndices[${v}] = outputIndices[${v}];`;S+=`let cOffset = ${h.indicesToOffset("cIndices")};`}return S},_=S=>`
  const epsilon = ${r};
  ${S.registerUniform("outputSize","u32").declareVariables(f,h,y,m,w,k)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${k.offsetToIndices(`global_idx * ${s}`)};
    ${b()}
    let scale = ${h.getByOffset("cOffset")};
    let bias = ${y.getByOffset("cOffset")};
    let inputMean = ${m.getByOffset("cOffset")};
    let inputVar = ${w.getByOffset("cOffset")};
    let x = ${f.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${k.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${a}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:_,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...Z(n)]:[{type:12,data:l}]})}},zo=e=>ce(e),up=(e,t)=>{let{inputs:r,outputCount:a}=e,i=zo({...t,outputCount:a});if(he.webgpu.validateInputContent&&Io(r,i),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Eo(r,i))}}),Co,Ao,lp,Gm=U(()=>{"use strict";ie(),ne(),Co=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Ao=e=>{let t=e[0].dims,r=e[0].dims[2],a=C.size(t)/4,i=e[0].dataType,n=R("input",i,t,4),s=R("bias",i,[r],4),o=R("residual",i,t,4),l=G("output",i,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(n,s,o,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let value = ${n.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},lp=e=>{Co(e.inputs),e.compute(Ao(e.inputs))}}),Oo,pe,dp,pp,cp,fp,hp,mp,gp,yp,_p,Bo,wp,bp,$p,vp,rr,xp,Rr,kp,Sp,Tp,Ip,Ep,zp,Cp,Ap,Op,Bp,Rp,Mp,Np,Dp,Up,Pp,Na,qp,bi,$i,Wp,Lp,Vp,Ro,Mo,Gp,Gi=U(()=>{"use strict";J(),ie(),be(),ne(),Oo=(e,t,r,a,i,n,s)=>{let o=Math.ceil(t/4),l="";typeof i=="string"?l=`${i}(a)`:l=i("a");let d=R("inputData",r,[o],4),c=G("outputData",a,[o],4),f=[{name:"vec_size",type:"u32"}];return s&&f.push(...s),`
      ${e.registerUniforms(f).declareVariables(d,c)}

  ${n??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",l)}
  }`},pe=(e,t,r,a,i,n=e.dataType,s,o)=>{let l=[{type:12,data:Math.ceil(C.size(e.dims)/4)}];return s&&l.push(...s),{name:t,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:d=>Oo(d,C.size(e.dims),e.dataType,n,r,a,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:n}],dispatchGroup:{x:Math.ceil(C.size(d[0].dims)/64/4)},programUniforms:l})}},dp=e=>{e.compute(pe(e.inputs[0],"Abs","abs"))},pp=e=>{e.compute(pe(e.inputs[0],"Acos","acos"))},cp=e=>{e.compute(pe(e.inputs[0],"Acosh","acosh"))},fp=e=>{e.compute(pe(e.inputs[0],"Asin","asin"))},hp=e=>{e.compute(pe(e.inputs[0],"Asinh","asinh"))},mp=e=>{e.compute(pe(e.inputs[0],"Atan","atan"))},gp=e=>{e.compute(pe(e.inputs[0],"Atanh","atanh"))},yp=e=>ce(e),_p=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(pe(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Bo=e=>{let t,r,a=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=a?e[1].getFloat32Array()[0]:-34028234663852886e22,r=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=a?e[1].getUint16Array()[0]:64511,r=i?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return ce({min:t,max:r})},wp=(e,t)=>{let r=t||Bo(e.inputs),a=Te(e.inputs[0].dataType);e.compute(pe(e.inputs[0],"Clip",i=>`clamp(${i}, vec4<${a}>(uniforms.min), vec4<${a}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:a},{name:"max",type:a}]),{inputs:[0]})},bp=e=>{e.compute(pe(e.inputs[0],"Ceil","ceil"))},$p=e=>{e.compute(pe(e.inputs[0],"Cos","cos"))},vp=e=>{e.compute(pe(e.inputs[0],"Cosh","cosh"))},rr=e=>ce(e),xp=(e,t)=>{let r=Te(e.inputs[0].dataType);e.compute(pe(e.inputs[0],"Elu",a=>`elu_vf32(${a})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Rr=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,kp=e=>{let t=Te(e.inputs[0].dataType);e.compute(pe(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Rr(t)))},Sp=e=>{e.compute(pe(e.inputs[0],"Exp","exp"))},Tp=e=>{e.compute(pe(e.inputs[0],"Floor","floor"))},Ip=e=>{let t=Te(e.inputs[0].dataType);e.compute(pe(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Rr(t)))},Ep=(e,t)=>{let r=Te(e.inputs[0].dataType);e.compute(pe(e.inputs[0],"LeakyRelu",a=>`select(leaky_relu_alpha_ * ${a}, ${a}, ${a} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},zp=e=>{e.compute(pe(e.inputs[0],"Not",t=>`!${t}`))},Cp=e=>{e.compute(pe(e.inputs[0],"Neg",t=>`-${t}`))},Ap=e=>{e.compute(pe(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Op=e=>{let t=Te(e.inputs[0].dataType);e.compute(pe(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Bp=e=>{e.compute(pe(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Rp=e=>ce(e),Mp=(e,t)=>{let r=Te(e.inputs[0].dataType);e.compute(pe(e.inputs[0],"HardSigmoid",a=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${a} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Np=e=>{e.compute(pe(e.inputs[0],"Sin","sin"))},Dp=e=>{e.compute(pe(e.inputs[0],"Sinh","sinh"))},Up=e=>{e.compute(pe(e.inputs[0],"Sqrt","sqrt"))},Pp=e=>{e.compute(pe(e.inputs[0],"Tan","tan"))},Na=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,qp=e=>{e.compute(pe(e.inputs[0],"Tanh",Na))},bi=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Na("v")};
}
`,$i=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Wp=e=>{let t=Te(e.inputs[0].dataType);e.compute(pe(e.inputs[0],"FastGelu",$i,bi(t),void 0,e.inputs[0].dataType))},Lp=(e,t)=>{let r=Te(e.inputs[0].dataType);return e.compute(pe(e.inputs[0],"ThresholdedRelu",a=>`select(vec4<${r}>(0.0), ${a}, ${a} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Vp=e=>{e.compute(pe(e.inputs[0],"Log","log"))},Ro=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Mo=e=>`quick_gelu_impl(${e})`,Gp=(e,t)=>{let r=Te(e.inputs[0].dataType);e.compute(pe(e.inputs[0],"QuickGelu",Mo,Ro(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),No,Do,Fp,Fm=U(()=>{"use strict";ie(),ne(),Gi(),No=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Do=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=R("input",e[0].dataType,e[0].dims,4),a=R("bias",e[0].dataType,[e[0].dims[2]],4),i=G("output",e[0].dataType,t,4),n=C.size(t)/4,s=xe(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,a,i)}

  ${Rr(s)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Fp=e=>{No(e.inputs),e.compute(Do(e.inputs))}}),Uo,Po,Ge,Hp,jp,Kp,Zp,Qp,Xp,Yp,Jp,ec,tc,Hm=U(()=>{"use strict";J(),ie(),ne(),Uo=(e,t,r,a,i,n,s,o,l,d,c,f)=>{let h,y;typeof o=="string"?h=y=(_,S)=>`${o}((${_}),(${S}))`:typeof o=="function"?h=y=o:(h=o.scalar,y=o.vector);let m=G("outputData",c,a.length,4),w=R("aData",l,t.length,4),k=R("bData",d,r.length,4),b;if(i)if(n){let _=C.size(t)===1,S=C.size(r)===1,v=t.length>0&&t[t.length-1]%4===0,T=r.length>0&&r[r.length-1]%4===0;_||S?b=m.setByOffset("global_idx",y(_?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"),S?`${k.type.value}(${k.getByOffset("0")}.x)`:k.getByOffset("global_idx"))):b=`
            let outputIndices = ${m.offsetToIndices("global_idx * 4u")};
            let offsetA = ${w.broadcastedIndicesToOffset("outputIndices",m)};
            let offsetB = ${k.broadcastedIndicesToOffset("outputIndices",m)};
            ${m.setByOffset("global_idx",y(s||v?w.getByOffset("offsetA / 4u"):`${w.type.value}(${w.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||T?k.getByOffset("offsetB / 4u"):`${k.type.value}(${k.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else b=m.setByOffset("global_idx",y(w.getByOffset("global_idx"),k.getByOffset("global_idx")));else{if(!n)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let _=(S,v,T="")=>{let I=`aData[indexA${v}][componentA${v}]`,z=`bData[indexB${v}][componentB${v}]`;return`
            let outputIndices${v} = ${m.offsetToIndices(`global_idx * 4u + ${v}u`)};
            let offsetA${v} = ${w.broadcastedIndicesToOffset(`outputIndices${v}`,m)};
            let offsetB${v} = ${k.broadcastedIndicesToOffset(`outputIndices${v}`,m)};
            let indexA${v} = offsetA${v} / 4u;
            let indexB${v} = offsetB${v} / 4u;
            let componentA${v} = offsetA${v} % 4u;
            let componentB${v} = offsetB${v} % 4u;
            ${S}[${v}] = ${T}(${h(I,z)});
          `};c===9?b=`
            var data = vec4<u32>(0);
            ${_("data",0,"u32")}
            ${_("data",1,"u32")}
            ${_("data",2,"u32")}
            ${_("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:b=`
            ${_("outputData[global_idx]",0)}
            ${_("outputData[global_idx]",1)}
            ${_("outputData[global_idx]",2)}
            ${_("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(w,k,m)}

        ${f??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${b}
      }`},Po=(e,t,r,a,i,n,s=r.dataType)=>{let o=r.dims.map(w=>Number(w)??1),l=a.dims.map(w=>Number(w)??1),d=!C.areEqual(o,l),c=o,f=C.size(o),h=!1,y=!1,m=[d];if(d){let w=Nt.calcShape(o,l,!1);if(!w)throw new Error("Can't perform binary op on the given tensors");c=w.slice(),f=C.size(c);let k=C.size(o)===1,b=C.size(l)===1,_=o.length>0&&o[o.length-1]%4===0,S=l.length>0&&l[l.length-1]%4===0;m.push(k),m.push(b),m.push(_),m.push(S);let v=1;for(let T=1;T<c.length;T++){let I=o[o.length-T],z=l[l.length-T];if(I===z)v*=I;else break}v%4===0?(y=!0,h=!0):(k||b||_||S)&&(h=!0)}else h=!0;return m.push(h),{name:e,shaderCache:{hint:t+m.map(w=>w.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:w=>Uo(w,o,l,c,h,d,y,i,r.dataType,a.dataType,s,n),getRunData:()=>({outputs:[{dims:c,dataType:s}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(C.size(c)/4)},...Z(o,l,c)]})}},Ge=(e,t,r,a,i,n)=>{e.compute(Po(t,i??"",e.inputs[0],e.inputs[1],r,a,n))},Hp=e=>{Ge(e,"Add",(t,r)=>`${t}+${r}`)},jp=e=>{Ge(e,"Div",(t,r)=>`${t}/${r}`)},Kp=e=>{Ge(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Zp=e=>{Ge(e,"Mul",(t,r)=>`${t}*${r}`)},Qp=e=>{let t=R("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Ge(e,"Pow",{scalar:(r,a)=>`pow_custom(${r},${a})`,vector:(r,a)=>`pow_vector_custom(${r},${a})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Xp=e=>{Ge(e,"Sub",(t,r)=>`${t}-${r}`)},Yp=e=>{Ge(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Jp=e=>{Ge(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},ec=e=>{Ge(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},tc=e=>{Ge(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),qo,Wo,Lo,Vo,rc,ac,jm=U(()=>{"use strict";J(),ie(),be(),ne(),qo=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,a=e[r],i=a.dataType,n=a.dims.length;e.forEach((s,o)=>{if(o!==r){if(s.dataType!==i)throw new Error("input tensors should be one type");if(s.dims.length!==n)throw new Error("input tensors should have the same shape");s.dims.forEach((l,d)=>{if(d!==t&&l!==a.dims[d])throw new Error("non concat dimensions must match")})}})},Wo=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Lo=(e,t)=>{let r=e.length,a=[];for(let i=0;i<r;++i){let n=t.setByOffset("global_idx",e[i].getByIndices("indices"));r===1?a.push(n):i===0?a.push(`if (inputIndex == ${i}u) { ${n} }`):i===r-1?a.push(`else { ${n} }`):a.push(`else if (inputIndex == ${i}) { ${n} }`)}return a.join(`
`)},Vo=(e,t,r,a)=>{let i=C.size(r),n=new Array(e.length),s=new Array(e.length),o=0,l=[],d=[],c=[{type:12,data:i}];for(let w=0;w<e.length;++w)o+=e[w].dims[t],n[w]=o,d.push(e[w].dims.length),s[w]=R(`input${w}`,a,d[w]),l.push("rank"),c.push({type:12,data:n[w]});for(let w=0;w<e.length;++w)c.push(...Z(e[w].dims));c.push(...Z(r));let f=G("output",a,r.length),h=f.indicesGet("indices",t),y=Array.from(Array(n.length).keys()).map(w=>`uniforms.sizeInConcatAxis${w}`).join(","),m=w=>`

  ${(()=>{w.registerUniform("outputSize","u32");for(let k=0;k<e.length;k++)w.registerUniform(`sizeInConcatAxis${k}`,"u32");return w.declareVariables(...s,f)})()}

  ${Wo(n.length,y)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${f.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${h});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${n.length}u>(${y});
      ${h} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Lo(s,f)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:a}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:c}),getShaderSource:m}},rc=(e,t)=>{let r=e.inputs,a=r[0].dims,i=C.normalizeAxis(t.axis,a.length);qo(r,i);let n=a.slice();n[i]=r.reduce((o,l)=>o+(l.dims.length>i?l.dims[i]:0),0);let s=r.filter(o=>C.size(o.dims)>0);e.compute(Vo(s,i,n,r[0].dataType),{inputs:s})},ac=e=>ce({axis:e.axis})}),St,Tt,It,Fi,zt=U(()=>{"use strict";J(),ie(),St=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Tt=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},It=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Fi=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,a]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:a}}else if(t==="Clip"){let[r,a]=e?.activation_params||[zd,Cd];return{activation:t,clipMax:a,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),ke,ic,Hi=U(()=>{"use strict";ke=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},ic=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),nc,Km=U(()=>{"use strict";nc=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),ir,ji,Ki=U(()=>{"use strict";J(),ie(),ne(),zt(),ir=(e,t,r,a,i)=>{let n=a-r;return`
      ${Array.from({length:r}).map((s,o)=>`
      if (${H(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,H(i,o+n,a))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},ji=(e,t,r,a,i=!1,n)=>{let s=e[0].dims,o=e[1].dims,l=s[s.length-2],d=o[o.length-1],c=s[s.length-1],f=we(d),h=we(c),y=we(l),m=C.size(r)/f/y,w=e.length>2,k=a?a.slice(0,-2):r.slice(0,-2),b=[C.size(k),l,d],_=[{type:12,data:m},{type:12,data:l},{type:12,data:d},{type:12,data:c}];Tt(t,_),_.push(...Z(k,s,o)),w&&_.push(...Z(e[2].dims)),_.push(...Z(b));let S=v=>{let T=Wi("batch_dims",e[0].dataType,k.length),I=R("a",e[0].dataType,s.length,h),z=R("b",e[1].dataType,o.length,f),A=G("output",e[0].dataType,b.length,f),M=xe(A.type.tensor),P=St(t,A.type.value,M),Y=[I,z],F="";if(w){let re=i?f:1;Y.push(R("bias",e[2].dataType,e[2].dims.length,re)),F=`${i?`value += bias[col / ${re}];`:`value += ${A.type.value}(bias[row + i]);`}`}let ee=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];It(t,ee);let q=()=>{let re=`var a_data: ${I.type.value};`;for(let Q=0;Q<h;Q++)re+=`
              let b_data${Q} = b[(b_offset + (k + ${Q}) * uniforms.N + col) / ${f}];`;for(let Q=0;Q<y;Q++){re+=`a_data = a[(a_offset + (row + ${Q}) * uniforms.K + k) / ${h}];`;for(let V=0;V<h;V++)re+=`
            values[${Q}] = fma(${z.type.value}(a_data${h===1?"":`[${V}]`}), b_data${V}, values[${Q}]);
`}return re};return`
  ${v.registerUniforms(ee).registerInternalVariables(T).declareVariables(...Y,A)}
  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${f})) * ${f};
    var index1 = global_idx / (uniforms.N / ${f});
    let stride1 = uniforms.M / ${y};
    let row = (index1 % stride1) * ${y};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${T.offsetToIndices("batch")};`}

    var a_indices: ${I.type.indices};
    ${ir("a_indices",I,I.rank-2,T.rank,"batch_indices")}
    ${I.indicesSet("a_indices",I.rank-2,0)}
    ${I.indicesSet("a_indices",I.rank-1,0)}
    let a_offset = ${I.indicesToOffset("a_indices")};

    var b_indices: ${z.type.indices};
    ${ir("b_indices",z,z.rank-2,T.rank,"batch_indices")}
    ${z.indicesSet("b_indices",z.rank-2,0)}
    ${z.indicesSet("b_indices",z.rank-1,0)}
    let b_offset = ${z.indicesToOffset("b_indices")};
    var values: array<${A.type.value}, ${y}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${h}) {
      ${q()}
    }
    for (var i = 0u; i < ${y}u; i++) {
      var value = values[i];
      ${F}
      ${P}
      let cur_indices = ${A.type.indices}(batch, row + i, col);
      let offset = ${A.indicesToOffset("cur_indices")};
      ${A.setByOffset(`offset / ${f}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${f};${h};${y};${i}`,inputDependencies:w?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:_}),getShaderSource:S}}}),Go,Fo,vi,Da,Ho,xi,jo,qr,Zi=U(()=>{"use strict";J(),ie(),ne(),zt(),Ki(),Hi(),Go=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Fo=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,vi=(e,t,r="f32",a,i=!1,n=32,s=!1,o=32)=>{let l=t[1]*e[1],d=t[0]*e[0],c=i?l:n,f=i?n:l,h=c/t[0],y=n/t[1];if(!((i&&h===4&&e[1]===4||!i&&(h===3||h===4))&&c%t[0]===0&&n%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${h} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${h} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${n} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${h}<${r}>, ${c/h}>, ${f}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${n}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${h};
const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${s?`${Math.ceil(o/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${y};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Go(i,a)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${a?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${h===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Fo(i,h)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Da=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Ho=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",xi=(e,t,r="f32",a,i=!1,n=32,s=!1,o=32,l=!1)=>{let d=e[1]*t[1],c=e[0]*t[0],f=i?d:n,h=i?n:d;if(!(h%t[1]===0&&f%t[0]===0&&n%t[1]===0))throw new Error(`tileAHight ${h} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}, tileInner ${n} must be divisible by workgroupSize[1]${t[1]}`);let y=h/t[1],m=f/t[0],w=n/t[1],k=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${h}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          ${Da(i,a)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${n}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${a?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${y};
let tileColA = i32(localId.x) * ${m};
let tileRowB = i32(localId.y) * ${w};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${m}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Da(i,a)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${w}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${a?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Ho(i)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${f}>, ${h}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${c}>, ${n}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(o/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${k}
  }
`},jo=(e,t,r,a,i=!1)=>{let[n,s,o,l]=a,d=xe(a[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${ke(e,d)} {
      var value = ${ke(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${ir("aIndices",s,s.rank-2,n.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${ke(e,d)} {
      var value = ${ke(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${ir("bIndices",o,o.rank-2,n.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${ke(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?"bias[colIn]":`${ke(e,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},qr=(e,t,r,a,i=!1,n)=>{let s=e[0].dims,o=e[1].dims,l=s.slice(0,-2),d=o.slice(0,-2),c=a?a.slice(0,-2):r.slice(0,-2),f=C.size(c),h=s[s.length-2],y=s[s.length-1],m=o[o.length-1],w=y%4===0&&m%4===0,k=h<=8?[4,1,1]:[4,4,1],b=[8,8,1],_=[Math.ceil(m/b[0]/k[0]),Math.ceil(h/b[1]/k[1]),Math.ceil(f/b[2]/k[2])],S=w?4:1,v=[...l,h,y/S],T=v.length,I=[...d,y,m/S],z=I.length,A=[f,h,m/S],M=[{type:6,data:h},{type:6,data:m},{type:6,data:y}];Tt(t,M),M.push(...Z(c,v,I));let P=["rank","rank"],Y=e.length>2;Y&&(M.push(...Z(e[2].dims)),P.push("rank")),M.push(...Z(A));let F=ee=>{let q=c.length,re=Wi("batchDims",e[0].dataType,q,1),Q=xe(e[0].dataType),V=R("a",e[0].dataType,T,S),oe=R("b",e[1].dataType,z,S),j=G("result",e[0].dataType,A.length,S),ue=[V,oe];if(Y){let ae=i?S:1;ue.push(R("bias",e[2].dataType,e[2].dims.length,ae))}let N=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];It(t,N);let W=xe(j.type.tensor),te=St(t,j.type.value,W),O=jo(S,Y,te,[re,V,oe,j],i);return`
  ${ee.registerUniforms(N).registerInternalVariables(re).declareVariables(...ue,j)}
  ${O}
  ${w?vi(k,b,Q,re):xi(k,b,Q,re)}
                   `};return{name:"MatMul",shaderCache:{hint:`${k};${t.activation};${w};${i}`,inputDependencies:P},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:_[0],y:_[1],z:_[2]},programUniforms:M}),getShaderSource:F}}}),Ko,sc,Zm=U(()=>{"use strict";J(),at(),ne(),zt(),Hi(),Km(),Zi(),Ko=(e,t,r,a,i=!1,n,s=4,o=4,l=4,d="f32")=>{let c=M=>{switch(M){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${M} is not supported.`)}},f=M=>{switch(M){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${M} is not supported.`)}},h=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,y=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,m=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",w=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",k=e?"row":"col",b=e?"col":"row",_=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${k} / outWidth;
    let outCol = ${k} % outWidth;

    let WRow = ${b} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${b} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${b} % inChannels;
    var resData = ${ke(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${w}) {
      ${h}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(s)}
    }
    return resData;`,S=e?t&&a?`
    let col = colIn * ${s};
    ${_}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${_}
    }
    return ${ke(s,d)}(0.0);`:a&&r?`
    let col = colIn * ${s};
    ${_}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${_}
    }
    return ${ke(s,d)}(0.0);`,v=e?a&&r?f(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${f(o)}
    }
    return ${ke(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${f(o)}
    }
    return ${ke(o,d)}(0.0);`,T=ke(l,d),I=ke(e?s:o,d),z=ke(e?o:s,d),A=St(n,T,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${I} {
      ${e?S:v}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?v:S}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${T}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${y}
      ${ic(i)}
      ${A}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},sc=(e,t,r,a,i,n,s,o,l)=>{let d=t.format==="NHWC",c=d?e[0].dims[3]:e[0].dims[1],f=r[0],h=d?r[2]:r[3],y=d?r[1]:r[2],m=d?r[3]:r[1],w=d&&(c%4===0||c%3===0)&&m%4===0,k=d?m:h*y,b=d?h*y:m,_=[8,8,1],S=a<=8?[4,1,1]:[4,4,1],v=[Math.ceil(k/_[0]/S[0]),Math.ceil(b/_[1]/S[1]),Math.ceil(f/_[2]/S[2])];le("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${v}`);let T=w?d&&c%4!==0?3:4:1,I=_[1]*S[1],z=_[0]*S[0],A=Math.max(_[0]*T,_[1]),M=a%I===0,P=i%z===0,Y=n%A===0,F=w?[T,4,4]:[1,1,1],ee=[{type:6,data:a},{type:6,data:i},{type:6,data:n},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Tt(t,ee),ee.push(...Z(e[0].dims,e[1].dims));let q=["rank","rank"];s&&(ee.push(...Z(e[2].dims)),q.push("rank")),ee.push(...Z(r));let re=Q=>{let V=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];It(t,V);let oe=w?4:1,j=xe(e[0].dataType),ue=`
      fn setOutputAtIndex(flatIndex : i32, value : ${w?`vec4<${j}>`:j}) {
        result[flatIndex] = ${w?`vec4<${j}>`:j}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${w?`vec4<${j}>`:j}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${w?"/ 4":""}, value);
      }`,N=R("x",e[0].dataType,e[0].dims.length,T===3?1:T),W=R("w",e[1].dataType,e[1].dims.length,oe),te=[N,W],O=G("result",e[0].dataType,r.length,oe);if(s){let ae=R("bias",e[2].dataType,e[2].dims.length,oe);te.push(ae),ue+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${w?`vec4<${j}>`:j} {
          return bias[coords.${d?"w":"y"}${w?"/ 4":""}];
        }`}return`
        ${nc("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${Q.registerUniforms(V).declareVariables(...te,O)}
        ${ue}
        ${Ko(d,M,P,Y,s,t,F[0],F[1],F[2],j)}
        ${w?vi(S,_,j,void 0,!d,A):xi(S,_,j,void 0,!d,A,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${T};${w};${M};${P};${Y};${I};${z};${A}`,inputDependencies:q},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:ee}),getShaderSource:re}}}),Zo,Ua,Kt,Qo,Pa,Xo,oc,uc,Qm=U(()=>{"use strict";J(),at(),ie(),ne(),zt(),Hi(),Zo=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Ua=e=>typeof e=="number"?[e,e,e]:e,Kt=(e,t)=>t<=1?e:e+(e-1)*(t-1),Qo=(e,t,r,a=1)=>{let i=Kt(t,a);return Math.floor((e[0]*(r-1)-r+i)/2)},Pa=(e,t,r,a,i)=>{i==null&&(i=Qo(e,t[0],a[0]));let n=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*i>=t[s]&&(n[s]=Math.trunc((e[s]-t[s]+2*i)/a[s]+1));return n},Xo=(e,t,r,a,i,n,s,o,l,d)=>{let c,f,h,y;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let m=Pa([t,r,a,1],[o,l,d],1,[i,n,s],e);f=m[0],h=m[1],y=m[2]}else if(Array.isArray(e)){if(!e.every((w,k,b)=>w===b[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let m=Pa([t,r,a,1],[o,l,d],1,[i,n,s],e[0]);f=m[0],h=m[1],y=m[2]}else if(e==="SAME_UPPER"){f=Math.ceil(t/i),h=Math.ceil(r/n),y=Math.ceil(a/s);let m=(f-1)*i+o-t,w=(h-1)*n+l-r,k=(y-1)*s+d-a,b=Math.floor(m/2),_=m-b,S=Math.floor(w/2),v=w-S,T=Math.floor(k/2),I=k-T;c={top:S,bottom:v,left:T,right:I,front:b,back:_}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:f,outHeight:h,outWidth:y}},oc=(e,t,r,a,i,n=!1,s="channelsLast")=>{let o,l,d,c,f;if(s==="channelsLast")[o,l,d,c,f]=e;else if(s==="channelsFirst")[o,f,l,d,c]=e;else throw new Error(`Unknown dataFormat ${s}`);let[h,,y,m,w]=t,[k,b,_]=Ua(r),[S,v,T]=Ua(a),I=Kt(y,S),z=Kt(m,v),A=Kt(w,T),{padInfo:M,outDepth:P,outHeight:Y,outWidth:F}=Xo(i,l,d,c,k,b,_,I,z,A),ee=n?h*f:h,q=[0,0,0,0,0];return s==="channelsFirst"?q=[o,ee,P,Y,F]:s==="channelsLast"&&(q=[o,P,Y,F,ee]),{batchSize:o,dataFormat:s,inDepth:l,inHeight:d,inWidth:c,inChannels:f,outDepth:P,outHeight:Y,outWidth:F,outChannels:ee,padInfo:M,strideDepth:k,strideHeight:b,strideWidth:_,filterDepth:y,filterHeight:m,filterWidth:w,effectiveFilterDepth:I,effectiveFilterHeight:z,effectiveFilterWidth:A,dilationDepth:S,dilationHeight:v,dilationWidth:T,inShape:e,outShape:q,filterShape:t}},uc=(e,t,r,a,i,n)=>{let s=n==="channelsLast",o=s?e[0].dims[3]:e[0].dims[1],l=!1,d=[64,1,1],c={x:r.map((_,S)=>S)},f=[Math.ceil(Zo(c.x.map(_=>r[_]))/d[0]),1,1];le("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${f}`);let h=l?s&&o%4!==0?3:4:1,y=C.size(r),m=[{type:12,data:y},{type:12,data:a},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];Tt(t,m),m.push(...Z(e[0].dims,e[1].dims));let w=["rank","rank"],k=e.length===3;k&&(m.push(...Z(e[2].dims)),w.push("rank")),m.push(...Z(r));let b=_=>{let S=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:a.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];It(t,S);let v=l?4:1,T=xe(e[0].dataType),I=R("x",e[0].dataType,e[0].dims.length,h===3?1:h),z=R("W",e[1].dataType,e[1].dims.length,v),A=[I,z],M=G("result",e[0].dataType,r.length,v),P="";if(k){let ee=R("bias",e[2].dataType,e[2].dims.length,v);A.push(ee),P+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${l?`vec4<${T}>`:T} {
          return bias[${s?H("coords",4,5):H("coords",1,5)}${l?"/ 4":""}];
        }`}let Y=ke(h,T),F=St(t,Y,T);return`
            ${P}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${I.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${z.getByIndices("aIndices")};
            }
          ${_.registerUniforms(S).declareVariables(...A,M)}
          ${_.mainStart()}
          ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${M.offsetToIndices("global_idx")};
              let batch = ${H("coords",0,I.rank)};
              let d2 = ${s?H("coords",I.rank-1,I.rank):H("coords",1,I.rank)};
              let xFRCCorner = vec3<u32>(${s?H("coords",1,I.rank):H("coords",2,I.rank)},
              ${s?H("coords",2,I.rank):H("coords",3,I.rank)},
              ${s?H("coords",3,I.rank):H("coords",4,I.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?H("uniforms.x_shape",1,I.rank):H("uniforms.x_shape",2,I.rank)};
              let xShapeZ = ${s?H("uniforms.x_shape",2,I.rank):H("uniforms.x_shape",3,I.rank)};
              let xShapeW = ${s?H("uniforms.x_shape",3,I.rank):H("uniforms.x_shape",4,I.rank)};
              let xShapeU = ${s?H("uniforms.x_shape",4,I.rank):H("uniforms.x_shape",1,I.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${k?"value = value + getBiasByOutputCoords(coords)":""};
              ${F}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${h};${k}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:f[0],y:f[1],z:f[2]},programUniforms:m}),getShaderSource:b}}}),lc,dc,Xm=U(()=>{"use strict";J(),ie(),ne(),zt(),lc=(e,t,r,a)=>{let i=e.length>2,n=i?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],c=d/t.group,f=l&&c>=4?we(d):1,h=C.size(r)/f,y=[{type:12,data:h},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];Tt(t,y),y.push(...Z(s,[o[0],o[1],o[2],o[3]/f]));let m=i?["rank","rank","rank"]:["rank","rank"];y.push(...Z([r[0],r[1],r[2],r[3]/f]));let w=k=>{let b=G("output",e[0].dataType,r.length,f),_=xe(b.type.tensor),S=St(t,b.type.value,_),v=R("x",e[0].dataType,s.length),T=R("w",e[1].dataType,o.length,f),I=[v,T];i&&I.push(R("b",e[2].dataType,e[2].dims,f));let z=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];It(t,z);let A=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${v.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${T.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${v.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${T.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${k.registerUniforms(z).declareVariables(...I,b)}

  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${b.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${f} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${b.type.value} = ${b.type.value}(0);
    ${A}
    ${n}
    ${S}
    ${b.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${f}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:y}),getShaderSource:w}},dc=(e,t,r,a)=>{let i=e.length>2,n=we(r[3]),s=we(r[2]),o=C.size(r)/n/s,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/n],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/n],c=[r[0],r[1],r[2],r[3]/n],f=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Tt(t,f),f.push(...Z(l,d,c));let h=(s-1)*t.strides[1]+d[1],y=m=>{let w=G("output",e[0].dataType,c.length,n),k=xe(w.type.tensor),b=St(t,w.type.value,k),_=R("x",e[0].dataType,l.length,n),S=R("w",e[1].dataType,d.length,n),v=[_,S];i&&v.push(R("b",e[2].dataType,e[2].dims,n));let T=i?"value += b[output_channel];":"",I=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return It(t,I),`
  ${m.registerUniforms(I).declareVariables(...v,w)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${_.type.value}, ${h}>;
    var values: array<${w.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${h}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${_.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${_.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${S.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${T}
      ${b}
      ${w.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${n};${s};${h};${d[0]};${d[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:f}),getShaderSource:y}}}),Yo,Ir,Jo,Er,ki,qa,eu,tu,Si,Ym=U(()=>{"use strict";ie(),Zm(),Qm(),Zi(),Xm(),zt(),Ki(),ht(),Yo=(e,t,r,a,i,n)=>{let s=e[0],o=e.slice(n?1:2,n?3:4),l=o.length,d=t[0],c=t.slice(2).map((h,y)=>h+(h-1)*(r[y]-1)),f=o.map((h,y)=>h+a[y]+a[y+l]).map((h,y)=>Math.floor((h-c[y]+i[y])/i[y]));return f.splice(0,0,s),f.splice(n?3:1,0,d),f},Ir=[2,3,1,0],Jo=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[1]*t.group;if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Er=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let n=2;n<t[1].dims.length;++n)r[n-2]===0&&(r[n-2]=t[1].dims[n]);let a=e.pads.slice();Ur.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,a,e.format==="NHWC",e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:r,pads:a}),i},ki=e=>{let t=Fi(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],i=e.dilations,n=e.group,s=e.kernel_shape,o=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:a,format:r,dilations:i,group:n,kernelShape:s,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},qa=(e,t,r,a)=>{let i=r.format==="NHWC",n=Yo(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,i);if(r.group!==1){let I=[t[0]];if(i){let z=e.kernelCustomData.wT??e.compute(Me(t[1],Ir),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=z),I.push(z)}else I.push(t[1]);t.length===3&&I.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&i&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(dc(I,r,n,a),{inputs:I}):e.compute(lc(I,r,n,a),{inputs:I});return}let s=t.length===3,o=t[0].dims[i?1:2],l=t[0].dims[i?2:3],d=t[0].dims[i?3:1],c=t[1].dims[2],f=t[1].dims[3],h=n[i?1:2],y=n[i?2:3],m=n[i?3:1],w=i&&c===o&&f===l&&r.pads[0]===0&&r.pads[1]===0;if(w||c===1&&f===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let I=n[0],z,A,M,P=[];if(i){let ee=e.kernelCustomData.wT??e.compute(Me(t[1],Ir),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=ee),w){let q=o*l*d;z=t[0].reshape([1,I,q]),A=ee.reshape([1,q,m]),M=[1,I,m]}else z=t[0].reshape([I,o*l,d]),A=ee.reshape([1,d,m]),M=[I,h*y,m];P.push(z),P.push(A)}else z=t[0].reshape([I,d,o*l]),A=t[1].reshape([1,m,d]),M=[I,m,h*y],P.push(A),P.push(z);s&&P.push(t[2]);let Y=M[2],F=P[0].dims[P[0].dims.length-1];Y<8&&F<8?e.compute(ji(P,r,n,M,i,a),{inputs:P}):e.compute(qr(P,r,n,M,i,a),{inputs:P});return}let k=!0,b=e.kernelCustomData.wT??e.compute(Me(t[1],Ir),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=b);let _=[t[0],b];s&&_.push(t[2]);let S=i?h*y:m,v=i?m:h*y,T=c*f*d;e.compute(sc(_,r,n,S,v,T,s,k,a),{inputs:_})},eu=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],n=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),l=Er({...t,pads:i,strides:n,dilations:s,kernelShape:o},a);qa(e,a,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},tu=(e,t,r)=>{let a=r.format==="NHWC"?"channelsLast":"channelsFirst",i=Er(r,t),n=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=oc(t[0].dims,t[1].dims,r.strides,r.dilations,n,!1,a);e.compute(uc(t,i,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],a))},Si=(e,t)=>{if(Jo(e.inputs,t),e.inputs[0].dims.length===3)eu(e,t);else if(e.inputs[0].dims.length===5)tu(e,e.inputs,t);else{let r=Er(t,e.inputs);qa(e,e.inputs,r)}}}),pc,Jm=U(()=>{"use strict";J(),at(),ie(),ne(),pc=(e,t,r)=>{let a=e.length>2,i=t.outputShape,n=t.format==="NHWC",s=t.group,o=e[1].dims,l=o[2]/s,d=o[3],c=n?we(l):1,f=n&&d===1&&l>=4,h=f?Math.floor(l/4)*4:Math.floor(l/c)*c,y=l-h,m=n?we(d):1,w=n?d===1?c:m:1,k=C.size(i)/m,b=[Math.ceil(k/64),1,1];le("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${b}`);let _=["rank","rank"],S=[t.strides[0],t.strides[1]],v=[t.kernelShape[n?1:2],t.kernelShape[n?2:3]],T=[t.dilations[0],t.dilations[1]],I=[v[0]+(t.dilations[0]<=1?0:(t.kernelShape[n?1:2]-1)*(t.dilations[0]-1)),v[1]+(t.dilations[1]<=1?0:(t.kernelShape[n?2:3]-1)*(t.dilations[1]-1))],z=[I[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),I[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],A=[{type:12,data:k},{type:12,data:S},{type:12,data:v},{type:12,data:T},{type:12,data:I},{type:6,data:z},{type:12,data:h},{type:12,data:l},{type:12,data:d},...Z(e[0].dims,e[1].dims)];a&&(A.push(...Z(e[2].dims)),_.push("rank")),A.push(...Z(i));let M=P=>{let Y=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:S.length},{name:"filter_dims",type:"u32",length:v.length},{name:"dilations",type:"u32",length:v.length},{name:"effective_filter_dims",type:"u32",length:I.length},{name:"pads",type:"i32",length:z.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],F=xe(e[0].dataType),ee=n?1:2,q=n?2:3,re=n?3:1,Q=R("W",e[1].dataType,e[1].dims.length,w),V=R("Dy",e[0].dataType,e[0].dims.length,c),oe=[V,Q];a&&oe.push(R("bias",e[2].dataType,[i[re]].length,m));let j=G("result",e[0].dataType,i.length,m),ue=()=>{let te="";if(f)c===4?te+=`
        let xValue = ${V.getByOffset("x_offset")};
        let wValue = ${Q.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?te+=`
          dotProd = dotProd + dot(vec4<${F}>(${V.getByOffset("x_offset")}, ${V.getByOffset("x_offset + 1u")}), vec4<${F}>(${Q.getByOffset("w_offset")}, ${Q.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(te+=`
          dotProd = dotProd + dot(vec4<${F}>(${V.getByOffset("x_offset")}, ${V.getByOffset("x_offset + 1u")}, ${V.getByOffset("x_offset + 2u")}, ${V.getByOffset("x_offset + 3u")}), vec4<${F}>(${Q.getByOffset("w_offset")}, ${Q.getByOffset("w_offset + 1u")}, ${Q.getByOffset("w_offset + 2u")}, ${Q.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(te+=`
                  let xValue = ${n?V.getByOffset(`${V.indicesToOffset(`${V.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):V.get("batch","inputChannel","idyR","idyC")};
        `,c===1)te+=`
          let w_offset = ${Q.indicesToOffset(`${Q.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${Q.getByOffset(`w_offset / ${w}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let O=0;O<c;O++)te+=`
            let wValue${O} = ${Q.getByOffset(`${Q.indicesToOffset(`${Q.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${O}, wOutChannel)`)} / ${w}`)};
            dotProd = dotProd + xValue[${O}] * wValue${O};`;return te},N=()=>{if(y===0)return"";if(!f)throw new Error(`packInputAs4 ${f} is not true.`);let te="";if(c===1){te+="dotProd = dotProd";for(let O=0;O<y;O++)te+=`
            + ${V.getByOffset(`x_offset + ${O}`)} * ${Q.getByOffset(`w_offset + ${O}`)}`;te+=";"}else if(c===2){if(y!==2)throw new Error(`Invalid inputChannelsRemainder ${y}.`);te+=`
          let xValue = ${V.getByOffset("x_offset")};
          let wValue = ${Q.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return te},W=`
            let outputIndices = ${j.offsetToIndices(`global_idx * ${m}`)};
            let batch = ${j.indicesGet("outputIndices",0)};
            let d1 = ${j.indicesGet("outputIndices",re)};
            let r = ${j.indicesGet("outputIndices",ee)};
            let c = ${j.indicesGet("outputIndices",q)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${j.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${F}(dyRCorner) + ${F}(wR)) / ${F}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${F}(uniforms.Dy_shape[${ee}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${F}(dyCCorner) + ${F}(wC)) / ${F}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${F}(uniforms.Dy_shape[${q}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${f?`
                var x_offset = ${V.indicesToOffset(`${V.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${Q.indicesToOffset(`${Q.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${w};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${f?4:c}) {
                  ${ue()}
                  inputChannel = inputChannel + ${f?4:c};
                }
                ${N()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${a?` + bias[d1 / ${m}]`:""};
            ${j.setByOffset("global_idx","value")};
          `;return`
    ${P.registerUniforms(Y).declareVariables(...oe,j)}
      ${P.mainStart()}
      ${P.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${W}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${w}${m}${f}${y}`,inputDependencies:_},getRunData:()=>({dispatchGroup:{x:b[0],y:b[1],z:b[2]},outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],programUniforms:A}),getShaderSource:M}}}),ru,au,iu,Wa,cc,nu,La,su,fc,eg=U(()=>{"use strict";Jm(),zt(),ht(),ru=(e,t,r,a,i,n)=>(e-1)*t+r+(a-1)*i+1-n,au=(e,t,r,a,i)=>{let n=Math.floor(e/2);t==="SAME_UPPER"?(r[a]=n,r[i]=e-n):t==="SAME_LOWER"&&(r[a]=e-n,r[i]=n)},iu=(e,t,r,a,i,n,s,o,l,d)=>{let c=e.length-2,f=d.length===0;l.length<c&&l.push(...Array(c-l.length).fill(0));let h=e[0],y=t[o?3:1]*i;for(let m=0,w=e.length-c-(o?1:0);m<c;++m,++w){let k=e[w],b=f?k*s[m]:d[m],_=ru(k,s[m],n[m],t[w],r[m],b);au(_,a,n,m,m+c),f&&d.push(s[m]*(k-1)+l[m]+(t[w]-1)*r[m]+1-n[m]-n[m+c])}d.splice(0,0,h),d.splice(o?3:1,0,y)},Wa=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((f,h)=>f*h,1)===0){r.length=0;for(let f=2;f<t[1].dims.length;++f)r.push(t[1].dims[f])}let a=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(a?3:1,0,t[1].dims[1]);let i=e.pads.slice(),n=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims,l=e.dilations.slice();if(l.reduce((f,h)=>f+h,0)===0){let f=t[0].dims.length-2;l=new Array(f).fill(1)}let d=e.strides.slice();if(d.reduce((f,h)=>f+h,0)===0){let f=t[0].dims.length-2;d=new Array(f).fill(1)}iu(o,r,l,e.autoPad,e.group,i,d,a,s,n);let c=Object.assign({},e);return Object.assign(c,{kernelShape:r,pads:i,outputPadding:s,outputShape:n,dilations:l,strides:d}),c},cc=e=>{let t=Fi(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],i=e.dilations,n=e.group,s=e.kernelShape,o=e.pads,l=e.strides,d=e.wIsConst(),c=e.outputPadding,f=e.outputShape;return{autoPad:a,format:r,dilations:i,group:n,kernelShape:s,outputPadding:c,outputShape:f,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},nu=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[0];if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==i))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.reduce((s,o)=>s+o,0)>0&&t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.reduce((s,o)=>s+o,0)>0&&t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.reduce((s,o)=>s+o,0)>0&&t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.outputPadding.length!==n&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${n}D`);if(t.kernelShape.reduce((s,o)=>s+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},La=(e,t,r,a)=>{let i=e.kernelCustomData.wT??e.compute(Me(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let n=[t[0],i];t.length===3&&n.push(t[2]),e.compute(pc(n,r,a),{inputs:n})},su=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let n=t.dilations;(n.length===0||n[0]===0)&&(n=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),n=[1].concat(n),i=[1].concat(i);let l=t.outputPadding;l=[0].concat(l);let d=Wa({...t,pads:o,strides:s,dilations:n,kernelShape:i,outputPadding:l},a);La(e,a,d,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},fc=(e,t)=>{if(nu(e.inputs,t),e.inputs[0].dims.length===3)su(e,t);else{let r=Wa(t,e.inputs);La(e,e.inputs,r)}}}),ou,hc,mc,tg=U(()=>{"use strict";J(),ie(),be(),ne(),ou=(e,t,r,a)=>{let i=C.size(t),n=t.length,s=R("input",e,n),o=G("output",e,n),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=C.normalizeAxis(l,n),c=f=>{let h=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,y=H("uniforms.input_shape","uniforms.axis",n),m=a.reverse?h+(a.exclusive?" + 1":""):"0",w=a.reverse?y:h+(a.exclusive?"":" + 1");return`
                ${f.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,o)}
                ${f.mainStart()}
                  ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${m};
                  let last : i32 = ${w};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:a.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:d},...Z(t,t)]}),getShaderSource:c}},hc=(e,t)=>{let r=e.inputs[0].dims,a=e.inputs[0].dataType,i=e.inputs[1];e.compute(ou(a,r,i,t),{inputs:[0]})},mc=e=>{let t=e.exclusive===1,r=e.reverse===1;return ce({exclusive:t,reverse:r})}}),uu,lu,du,gc,yc,rg=U(()=>{"use strict";J(),ie(),be(),ne(),uu=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},lu=(e,t,r,a)=>{let i=[];i.push(`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let n=0;n<t;++n)i.push(r.indicesSet("a",e[n],`i[${n}]`));return i.push("return a;}"),i.join(`
`)},du=(e,t)=>{let r,a,i,n,s,o,l=t.format==="NHWC",d=t.blocksize,c=t.mode==="DCR";l?([r,a,i,n]=e.dims,s=c?[r,a,i,d,d,n/d**2]:[r,a,i,n/d**2,d,d],o=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,a,i,n]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=c?[r,d,d,n/d**2,a,i]:[r,n/d**2,d,d,a,i],o=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let f=e.reshape(s),h=f.dims.length,y=e.dataType,m=R("a",y,h),w=G("output",y,h),k=b=>`
  ${b.registerUniform("output_size","u32").declareVariables(m,w)}

  ${lu(o,h,m,w)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",m.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:b=>{let _=l?[r,a*d,i*d,n/d**2]:[r,n/d**2,a*d,i*d],S=C.size(_),v=f.dims,T=C.sortBasedOnPerm(v,o);return{outputs:[{dims:_,dataType:b[0].dataType}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:[{type:12,data:S},...Z(v,T)]}},getShaderSource:k}},gc=(e,t)=>{uu(e.inputs),e.compute(du(e.inputs[0],t))},yc=e=>ce({blocksize:e.blocksize,mode:e.mode,format:e.format})}),zr,Zt,Va,pu,cu,fu,hu,Ga,mu,_c,wc,ag=U(()=>{"use strict";J(),ie(),be(),ne(),zr="[a-zA-Z]|\\.\\.\\.",Zt="("+zr+")+",Va="^"+Zt+"$",pu="("+Zt+",)*"+Zt,cu="^"+pu+"$",fu=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},hu=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,a]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(cu)))throw new Error("Invalid LHS term");if(r.split(",").forEach((i,n)=>{let s=e[n].dims.slice();if(!i.match(RegExp(Va)))throw new Error("Invalid LHS term");let o=this.processTerm(i,!0,s,n);this.lhs.push(o)}),a==="")a+=[...this.symbolToInfo.entries()].filter(([i,n])=>n.count===1||i==="...").map(([i])=>i).join("");else if(!a.match(RegExp(Zt)))throw new Error("Invalid RHS");a.match(RegExp(zr,"g"))?.forEach(i=>{if(i==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let n=this.symbolToInfo.get(i);if(n===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(n.dimValue)}}),this.rhs=this.processTerm(a,!1,this.outputDims)}addSymbol(e,t,r){let a=this.symbolToInfo.get(e);if(a!==void 0){if(a.dimValue!==t&&a.count!==1)throw new Error("Dimension mismatch");a.count++,a.inputIndices.push(r)}else a={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,a)}processTerm(e,t,r,a=-1){let i=r.length,n=!1,s=[],o=0;if(!e.match(RegExp(Va))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(zr,"g")),d=new fu(a);return l?.forEach((c,f)=>{if(c==="..."){if(n)throw new Error("Only one ellipsis is allowed per input term");n=!0;let h=i-l.length+1;if(h<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(o,o+h),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let y=0;y<s.length;y++){let m=String.fromCharCode(48+y);d.addSymbol(m,f+y),this.addSymbol(m,r[o++],a)}}else d.addSymbol(c,f+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,r[o++],a)}),d}},Ga=e=>e+"_max",mu=(e,t,r,a)=>{let i=e.map(d=>d.length).map((d,c)=>R(`input${c}`,t,d)),n=C.size(a),s=G("output",t,a.length),o=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let c=[],f="var prod = 1.0;",h="var sum = 0.0;",y="sum += prod;",m=[],w=[],k=[],b=[],_=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((v,T)=>{if(r.rhs.symbolToIndices.has(T)){let I=r.rhs.symbolToIndices.get(T)?.[0];I!==void 0&&r.lhs.forEach((z,A)=>{if(v.inputIndices.includes(A)){let M=z.symbolToIndices.get(T);if(M===void 0)throw new Error("Invalid symbol error");M.forEach(P=>{c.push(`${i[A].indicesSet(`input${A}Indices`,P,s.indicesGet("outputIndices",I))}`)})}})}else r.lhs.forEach((I,z)=>{if(v.inputIndices.includes(z)){let A=I.symbolToIndices.get(T);if(A===void 0)throw new Error("Invalid symbol error");A.forEach(M=>{m.push(`${i[z].indicesSet(`input${z}Indices`,M,`${T}`)}`)}),b.push(`prod *= ${i[z].getByIndices(`input${z}Indices`)};`)}}),w.push(`for(var ${T}: u32 = 0; ${T} < uniforms.${Ga(T)}; ${T}++) {`),k.push("}")});let S=_?[...c,`let sum = ${i.map((v,T)=>v.getByIndices(`input${T}Indices`)).join(" * ")};`]:[...c,h,...w,...m,f,...b,y,...k];return`
            ${d.registerUniforms(o.map(v=>({name:`${Ga(v)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${i.map((v,T)=>`var input${T}Indices: ${i[T].type.indices};`).join(`
`)}
            ${S.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(f=>r.symbolToInfo.has(f)).map(f=>({type:12,data:r.symbolToInfo.get(f)?.dimValue||0}));d.push({type:12,data:n});let c=e.map((f,h)=>[...Z(f)]).reduce((f,h)=>f.concat(h),d);return c.push(...Z(a)),{outputs:[{dims:a,dataType:t}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:c}},getShaderSource:l}},_c=(e,t)=>{let r=new hu(e.inputs,t.equation),a=r.outputDims,i=e.inputs.map((n,s)=>n.dims);e.compute(mu(i,e.inputs[0].dataType,r,a))},wc=e=>{let t=e.equation.replace(/\s+/g,"");return ce({equation:t})}}),gu,Fa,yu,_u,bc,ig=U(()=>{"use strict";J(),ie(),ne(),gu=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=r.length<t.length?0:r.length-t.length,i=t.length<r.length?0:t.length-r.length;for(;a<r.length&&i<t.length;++a,++i)if(r[a]!==t[i]&&r[a]!==1&&t[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Fa=(e,t)=>{let r=e.length-t.length,a=[];for(let i=0;i<r;++i)a.push(e[i]);for(let i=0;i<t.length;++i)a.push(t[i]===1?e[i+r]:t[i]);return a},yu=(e,t)=>e.length>t.length?Fa(e,t):Fa(t,e),_u=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=yu(t,r),i=e[0].dataType,n=i===9||C.size(t)===1,s=i===9||t.length>0&&t[t.length-1]%4===0?4:1,o=n||a.length>0&&a[a.length-1]%4===0?4:1,l=Math.ceil(C.size(a)/o),d=f=>{let h=R("input",i,t.length,s),y=G("output",i,a.length,o),m;if(i===9){let w=(k,b,_="")=>`
          let outputIndices${b} = ${y.offsetToIndices(`outputOffset + ${b}u`)};
          let offset${b} = ${h.broadcastedIndicesToOffset(`outputIndices${b}`,y)};
          let index${b} = offset${b} / 4u;
          let component${b} = offset${b} % 4u;
          ${k}[${b}] = ${_}(${h.getByOffset(`index${b}`)}[component${b}]);
        `;m=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${w("data",0,"u32")}
        ${w("data",1,"u32")}
        ${w("data",2,"u32")}
        ${w("data",3,"u32")}
        ${y.setByOffset("global_idx","data")}
      }`}else m=`
        let outputIndices = ${y.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${h.broadcastedIndicesToOffset("outputIndices",y)};
        let data = ${y.type.value}(${h.getByOffset(`inputOffset / ${s}`)});
        ${y.setByOffset("global_idx","data")}
      }`;return`
    ${f.registerUniform("vec_size","u32").declareVariables(h,y)}
    ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${m}`},c=[{type:12,data:l},...Z(t,a)];return{name:"Expand",shaderCache:{hint:`${a.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c})}},bc=e=>{gu(e.inputs),e.compute(_u(e.inputs),{inputs:[0]})}}),wu,$c,ng=U(()=>{"use strict";J(),ie(),ne(),Gi(),wu=e=>{let t=e[0].dataType,r=C.size(e[0].dims),a=C.size(e[1].dims),i=a%4===0,n=s=>{let o=R("x",t,[1],4),l=R("bias",t,[1],4),d=G("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],f=y=>`
      let bias${y}_offset: u32 = (global_idx * 4 + ${y}) % uniforms.bias_size;
      let bias${y} = ${l.getByOffset(`bias${y}_offset / 4`)}[bias${y}_offset % 4];`,h=i?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${f(0)}${f(1)}${f(2)}${f(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(c).declareVariables(o,l,d)}

    ${bi(Te(t))}

    ${s.mainStart(Dt)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${h}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",$i("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:n,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:a}],dispatchGroup:{x:Math.ceil(r/Dt/4)}})}},$c=e=>{e.inputs.length<2||C.size(e.inputs[1].dims)===0?Wp(e):e.compute(wu(e.inputs))}}),bu,$u,vc,xc,sg=U(()=>{"use strict";J(),ie(),be(),ne(),bu=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},$u=(e,t)=>{let r=e[0].dims,a=e[1].dims,i=r.length,n=C.normalizeAxis(t.axis,i),s=r.slice(0);s.splice(n,1,...a);let o=r[n],l=e[0].dataType===9?4:1,d=Math.ceil(C.size(s)/l),c=[{type:12,data:d},{type:6,data:o},{type:12,data:n},...Z(e[0].dims,e[1].dims,s)],f=h=>{let y=R("data",e[0].dataType,e[0].dims.length,l),m=R("inputIndices",e[1].dataType,e[1].dims.length),w=G("output",e[0].dataType,s.length,l),k=_=>{let S=a.length,v=`var indicesIndices${_}  = ${m.type.indices}(0);`;for(let T=0;T<S;T++)v+=`${S>1?`indicesIndices${_}[${T}]`:`indicesIndices${_}`} = ${s.length>1?`outputIndices${_}[uniforms.axis + ${T}]`:`outputIndices${_}`};`;v+=`
          var idx${_} = ${m.getByIndices(`indicesIndices${_}`)};
          if (idx${_} < 0) {
            idx${_} = idx${_} + uniforms.axisDimLimit;
          }
          var dataIndices${_} : ${y.type.indices};
        `;for(let T=0,I=0;T<i;T++)T===n?(v+=`${i>1?`dataIndices${_}[${T}]`:`dataIndices${_}`} = u32(idx${_});`,I+=S):(v+=`${i>1?`dataIndices${_}[${T}]`:`dataIndices${_}`} = ${s.length>1?`outputIndices${_}[${I}]`:`outputIndices${_}`};`,I++);return v},b;if(e[0].dataType===9){let _=(S,v,T="")=>`
          let outputIndices${v} = ${w.offsetToIndices(`outputOffset + ${v}u`)};
          ${k(v)};
          let offset${v} = ${y.indicesToOffset(`dataIndices${v}`)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${S}[${v}] = ${T}(${y.getByOffset(`index${v}`)}[component${v}]);
        `;b=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${_("value",0,"u32")}
        ${_("value",1,"u32")}
        ${_("value",2,"u32")}
        ${_("value",3,"u32")}
        ${w.setByOffset("global_idx","value")}
      `}else b=`
      let outputIndices = ${w.offsetToIndices("global_idx")};
      ${k("")};
      let value = ${y.getByIndices("dataIndices")};
      ${w.setByOffset("global_idx","value")};
      `;return`
      ${h.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(y,m,w)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${b}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:f}},vc=e=>ce({axis:e.axis}),xc=(e,t)=>{let r=e.inputs;bu(r),e.compute($u(e.inputs,t))}}),vu,kc,Sc,og=U(()=>{"use strict";J(),ie(),ne(),vu=(e,t,r,a,i,n,s,o,l)=>{let d=[{type:12,data:n},{type:12,data:a},{type:12,data:i},{type:12,data:r},{type:12,data:s},{type:12,data:o},{type:12,data:l}],c=[n];d.push(...Z(t.dims,c));let f=h=>{let y=R("indices_data",t.dataType,t.dims.length),m=G("input_slice_offsets_data",12,1,1),w=[y,m],k=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${h.registerUniforms(k).declareVariables(...w)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${i.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:d}),getShaderSource:f},{inputs:[t],outputs:[-1]})[0]},kc=(e,t)=>{let r=e.inputs,a=r[0].dims,i=r[0].dataType,n=r[1].dims,s=n[n.length-1],o=C.sizeToDimension(n,n.length-1),l=C.sizeFromDimension(a,t.batchDims+s),d=C.sizeToDimension(a,t.batchDims),c=C.sizeFromDimension(a,t.batchDims),f=o/d,h=new Array(s),y=l;for(let v=0;v<s;++v)h[s-1-v]=y,y*=a[t.batchDims+s-1-v];let m=vu(e,r[1],h,t.batchDims,a,o,f,c,s),w=t.batchDims+s;if(w>a.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let k=n.slice(0,-1).concat(a.slice(w)),b=C.size(k),_=[{type:12,data:b},{type:12,data:l},...Z(r[0].dims,m.dims,k)],S=v=>{let T=R("data",r[0].dataType,r[0].dims.length),I=R("slice_offsets",12,m.dims.length),z=G("output",r[0].dataType,k.length);return`
          ${v.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(T,I,z)}
            ${v.mainStart()}
            ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:k,dataType:i}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:_}),getShaderSource:S},{inputs:[r[0],m]})},Sc=e=>({batchDims:e.batch_dims,cacheKey:""})}),xu,ku,Tc,Ic,ug=U(()=>{"use strict";J(),ie(),be(),ne(),xu=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=C.normalizeAxis(t.quantizeAxis,e[0].dims.length),a=t.blockSize,i=e[0],n=e[2],s=e.length===4?e[3]:void 0;if(n.dims.length!==i.dims.length||!i.dims.map((o,l)=>l===r?Math.ceil(o/a)===n.dims[l]:o===n.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==n.dims.length||!s.dims.map((o,l)=>o===n.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},ku=(e,t)=>{let r=e[0].dims,a=e[1].dims,i=r.length,n=C.normalizeAxis(t.gatherAxis,i),s=C.normalizeAxis(t.quantizeAxis,i),o=r.slice(0);o.splice(n,1,...a);let l=C.size(o),d=e[2].dataType,c=e[0].dataType===22,f=[{type:12,data:l},{type:12,data:s},{type:12,data:n},{type:12,data:t.blockSize},...Z(...e.map((y,m)=>y.dims),o)],h=y=>{let m=R("data",e[0].dataType,e[0].dims.length),w=R("inputIndices",e[1].dataType,e[1].dims.length),k=R("scales",e[2].dataType,e[2].dims.length),b=e.length>3?R("zeroPoint",e[3].dataType,e[3].dims.length):void 0,_=G("output",d,o.length),S=[m,w,k];b&&S.push(b);let v=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${y.registerUniforms(v).declareVariables(...S,_)}
        ${y.mainStart()}
        let output_indices = ${_.offsetToIndices("global_idx")};
        var indices_indices = ${w.type.indices}(0);
        ${a.length>1?`
          for (var i: u32 = 0; i < ${a.length}; i++) {
            let index = ${_.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${w.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${_.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${m.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${_.indicesGet("output_indices","i")};
          ${m.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${w.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[n]};
        }
        ${m.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${_.indicesGet("output_indices",`i + ${a.length} - 1`)};
          ${m.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${m.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${m.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${k.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${k.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${k.getByIndices("scale_indices")};
        ${b?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${b.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${b.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Te(d)}(quantized_data - zero_point) * scale;
        ${_.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((y,m)=>m!==1).map(y=>y.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(y,m)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f}),getShaderSource:h}},Tc=(e,t)=>{let r=e.inputs;xu(r,t),e.compute(ku(e.inputs,t))},Ic=e=>ce({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Su,Tu,Ec,zc,lg=U(()=>{"use strict";J(),ie(),be(),ne(),Su=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Tu=(e,t)=>{let r=e[0].dims,a=e[0].dataType,i=r.length,n=e[1].dims,s=e[1].dataType,o=C.normalizeAxis(t.axis,i),l=r[o],d=n.slice(0),c=C.size(d),f=R("input",a,i),h=R("indicesInput",s,n.length),y=G("output",a,d.length),m=[{type:12,data:c},{type:6,data:l},{type:12,data:o}];return m.push(...Z(r,n,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:m}),getShaderSource:w=>`
      ${w.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,h,y)}
      ${w.mainStart()}
      ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${y.offsetToIndices("global_idx")};

      var idx = ${h.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${f.type.indices}(outputIndices);
      ${f.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${f.getByIndices("inputIndices")};

      ${y.setByOffset("global_idx","value")};
  }`}},Ec=e=>ce({axis:e.axis}),zc=(e,t)=>{let r=e.inputs;Su(r),e.compute(Tu(e.inputs,t))}}),Iu,Eu,Cc,Ac,dg=U(()=>{"use strict";J(),ie(),ne(),Iu=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Eu=(e,t)=>{let r=e[0].dims.slice(),a=e[1].dims.slice(),[i,n,s]=Ed.getShapeOfGemmResult(r,t.transA,a,t.transB,e.length===3?e[2].dims:void 0),o=[i,n];if(!o)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(n/l),c=Math.ceil(i/l),f=!0,h=C.size(o),y=[{type:12,data:f?d:h},{type:12,data:i},{type:12,data:n},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],m=["type","type"];e.length===3&&(y.push(...Z(e[2].dims)),m.push("rank")),y.push(...Z(o));let w=b=>{let _="";t.transA&&t.transB?_="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?_="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?_="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(_="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let S=t.alpha===1?"":"value *= uniforms.alpha;",v=R("a",e[0].dataType,e[0].dims),T=R("b",e[1].dataType,e[1].dims),I=v.type.value,z=null,A=[v,T];e.length===3&&(z=R("c",e[2].dataType,e[2].dims.length),A.push(z));let M=G("output",e[0].dataType,o.length);A.push(M);let P=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${b.registerUniforms(P).declareVariables(...A)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${I}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${_}
    }

    ${S}
    ${z!=null?`let cOffset = ${z.broadcastedIndicesToOffset("vec2(m, n)",M)}; value += ${I}(uniforms.beta) * ${z.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},k=b=>{let _=R("a",e[0].dataType,e[0].dims),S=R("b",e[1].dataType,e[1].dims),v=null,T=[_,S];e.length===3&&(v=R("c",e[2].dataType,e[2].dims.length),T.push(v));let I=G("output",e[0].dataType,o.length);T.push(I);let z=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],A="",M="";t.transA&&t.transB?(M=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${_.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,A="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(M=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${_.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,A="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(M=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${_.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,A="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(M=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${_.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,A="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let P=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${b.registerUniforms(z).declareVariables(...T)}
  var<workgroup> tile_a: array<array<${_.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${S.type.storage}, ${l}>, ${l}>;
  ${b.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${I.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${M}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${A}
      }
      workgroupBarrier();
    }

    ${P}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${v!=null?`let cOffset = ${v.broadcastedIndicesToOffset("vec2(m, n)",I)}; value += ${I.type.value}(uniforms.beta) * ${v.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return f?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*c},programUniforms:y}),getShaderSource:k}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:y}),getShaderSource:w}},Cc=e=>{let t=e.transA,r=e.transB,a=e.alpha,i=e.beta;return{transA:t,transB:r,alpha:a,beta:i,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Ac=(e,t)=>{Iu(e.inputs),e.compute(Eu(e.inputs,t))}}),Xe,tt,_t,wt,zu,Cu,Au,Ou,Bu,Ru,Mu,Nu,Oc,Bc,pg=U(()=>{"use strict";J(),ie(),be(),ne(),[Xe,tt,_t,wt]=[0,1,2,3],zu=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Cu=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Au=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Ou=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Bu=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,Ru=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Xe}] = batch;
     indices[${tt}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${_t}] = u32(r);
            indices[${wt}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${_t}] = u32(clamp(r, 0, H - 1));
          indices[${wt}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${_t}] = gs_reflect(r, border[1], border[3]);
          indices[${wt}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Mu=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Xe}], indices[${tt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Xe}], indices[${tt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Xe}], indices[${tt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Xe}], indices[${tt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Xe}], indices[${tt}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Xe}], indices[${tt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Nu=(e,t)=>{let r=R("x",e[0].dataType,e[0].dims.length),a=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=R("grid",e[1].dataType,a.length,2),n=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(n=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Xe,tt,_t,wt]=[0,3,1,2]);let s=G("output",e[0].dataType,n.length),o=r.type.value,l=C.size(n),d=[{type:12,data:l},...Z(e[0].dims,a,n)],c=f=>`
  ${f.registerUniform("output_size","u32").declareVariables(r,i,s)}
  ${Cu}
  ${Au(o)}
  ${Ou(t)}
  ${Bu(t)}
  ${Ru(r,o,t)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${_t}]);
      let W_in = i32(uniforms.x_shape[${wt}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Xe}], indices[${_t}], indices[${wt}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Mu(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:f=>{let h=C.size(n);return{outputs:[{dims:n,dataType:f[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:d}},getShaderSource:c}},Oc=(e,t)=>{zu(e.inputs),e.compute(Nu(e.inputs,t))},Bc=e=>ce({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),ze,Du,Rc,Ha,Uu,ar,Mc,Nc=U(()=>{"use strict";J(),ie(),be(),qi(),Vi(),ne(),ht(),ze=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Du=(e,t)=>{let r=e[0],a=ze(e,1),i=ze(e,2),n=ze(e,3),s=ze(e,4),o=ze(e,5),l=ze(e,6),d=ze(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=r.dims[0],f=r.dims[1],h=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],y=f,m=0,w=0,k=Math.floor(h/t.numHeads);if(l&&d&&C.size(l.dims)&&C.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==k)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==c||d.dims[1]!==t.numHeads||d.dims[3]!==k)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=l.dims[2],w=l.dims[2]}else if(l&&C.size(l.dims)||d&&C.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b;if(a&&C.size(a.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(a.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');b=2,y=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==k)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');b=5,y=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==k)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');b=0,y=a.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}if(n&&C.size(n.dims)>0){if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(a&&a.dims.length===5&&a.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let _=m+y,S=0;if(s&&C.size(s.dims)>0){S=8;let z=s.dims;throw z.length===1?z[0]===c?S=1:z[0]===3*c+2&&(S=3):z.length===2&&z[0]===c&&z[1]===_&&(S=5),S===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let v=!1,T=h;if(i&&C.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(y!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=i.dims[2]}else{if(y!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');T=i.dims[1]*i.dims[3],v=!0}}let I=!1;if(s&&C.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&C.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==c||o.dims[1]!==t.numHeads||o.dims[2]!==f||o.dims[3]!==_)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:f,pastSequenceLength:m,kvSequenceLength:y,totalSequenceLength:_,maxSequenceLength:w,inputHiddenSize:0,hiddenSize:h,vHiddenSize:T,headSize:k,vHeadSize:Math.floor(T/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:S,scale:t.scale,broadcastResPosBias:I,passPastInKv:v,qkvFormat:b}},Rc=e=>ce({...e}),Ha=ce({perm:[0,2,1,3]}),Uu=(e,t,r,a,i,n,s)=>{let o=[a,i,n],l=C.size(o),d=[{type:12,data:l},{type:12,data:s},{type:12,data:n}],c=f=>{let h=G("qkv_with_bias",t.dataType,o),y=R("qkv",t.dataType,o),m=R("bias",r.dataType,o),w=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${f.registerUniforms(w).declareVariables(y,m,h)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:c},{inputs:[t,r],outputs:[-1]})[0]},ar=(e,t,r,a,i,n,s,o)=>{let l=n;if(s&&C.size(s.dims)>0){if(a===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=Uu(e,n,s,t,a,r*i,o),l=l.reshape([t,a,r,i]),r===1||a===1?l:e.compute(Me(l,Ha.perm),{inputs:[l],outputs:[-1]})[0]}else return n.dims.length===3&&(l=n.reshape([t,a,r,i])),r===1||a===1?l:e.compute(Me(l,Ha.perm),{inputs:[l],outputs:[-1]})[0]},Mc=(e,t)=>{let r=Du(e.inputs,t),a=e.inputs[0],i=ze(e.inputs,1),n=ze(e.inputs,2),s=ze(e.inputs,3),o=ze(e.inputs,4),l=ze(e.inputs,5),d=ze(e.inputs,6),c=ze(e.inputs,7);if(a.dims.length===5)throw new Error("Packed QKV is not implemented");if(i?.dims.length===5)throw new Error("Packed KV is not implemented");let f=i&&n&&i.dims.length===4&&n.dims.length===4,h=ar(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,a,s,0);if(f)return sr(e,h,i,n,o,void 0,d,c,l,r);if(!i||!n)throw new Error("key and value must be provided");let y=ar(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,i,s,r.hiddenSize),m=ar(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,n,s,2*r.hiddenSize);sr(e,h,y,m,o,void 0,d,c,l,r)}}),Pu,qu,Wu,Lu,Ti,Dc,Uc,Pc=U(()=>{"use strict";J(),ie(),be(),ne(),Pu=e=>{if(!e||e.length<1)throw new Error("too few inputs")},qu=(e,t)=>{let r=[],a=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),a=r.length),ce({numOutputs:a,axis:t.axis,splitSizes:r})},Wu=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${H("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Lu=e=>{let t=e.length,r=[];for(let a=0;a<t;++a){let i=e[a].setByIndices("indices","input[global_idx]");t===1?r.push(i):a===0?r.push(`if (output_number == ${a}u) { ${i} }`):a===t-1?r.push(`else { ${i} }`):r.push(`else if (output_number == ${a}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Ti=(e,t)=>{let r=e[0].dims,a=C.size(r),i=e[0].dataType,n=C.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),o=R("input",i,r.length),l=new Array(t.numOutputs),d=[],c=[],f=0,h=[{type:12,data:a}];for(let m=0;m<t.numOutputs;m++){f+=t.splitSizes[m],l[m]=f;let w=r.slice();w[n]=t.splitSizes[m],c.push(w),s[m]=G(`output${m}`,i,w.length),d.push({dims:c[m],dataType:e[0].dataType})}h.push({type:12,data:l},...Z(r,...c));let y=m=>`
  ${m.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(o,...s)}
  ${Wu(l.length)}
  ${Lu(s)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",n)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${H("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${o.indicesSet("indices",n,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(a/64)},programUniforms:h})}},Dc=(e,t)=>{Pu(e.inputs);let r=e.inputs.length===1?t:qu(e.inputs,t);e.compute(Ti(e.inputs,r),{inputs:[0]})},Uc=e=>{let t=e.axis,r=e.splitSizes,a=e.numOutputs<0?r.length:e.numOutputs;if(a!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return ce({axis:t,numOutputs:a,splitSizes:r})}}),Vu,Wr,qc,Wc=U(()=>{"use strict";J(),ie(),be(),ne(),Vu=(e,t)=>{let[r,a,i,n]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!C.areEqual(a.dims,[])&&!C.areEqual(a.dims,[1])&&a.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${a.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(!C.areEqual(i.dims,n.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],c=i.dims[0],f=C.sizeFromDimension(r.dims,1)/d,h=o===0?i.dims[1]*2:f/s;if(o>h)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(a.dims.length===2){if(l!==a.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${a.dims[0]}`);if(d!==a.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${a.dims[1]}`)}if(h/2!==i.dims[1]&&o/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`);if(d>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},Wr=(e,t)=>{let{interleaved:r,numHeads:a,rotaryEmbeddingDim:i,scale:n}=t,s=e[0].dims[0],o=C.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=o/l,c=e[2].dims[1],f=i===0?c*2:d/a,h=new Array(s,l,d/f,f-c),y=C.computeStrides(h),m=[{type:1,data:n},{type:12,data:h},{type:12,data:y},...e[0].dims.length===3?new Array({type:12,data:[o,d,f,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,f,l*f,1]}):[],...Z(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],w=k=>{let b=R("input",e[0].dataType,e[0].dims.length),_=R("position_ids",e[1].dataType,e[1].dims.length),S=R("cos_cache",e[2].dataType,e[2].dims.length),v=R("sin_cache",e[3].dataType,e[3].dims.length),T=G("output",e[0].dataType,e[0].dims.length);return k.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:h.length},{name:"global_strides",type:"u32",length:y.length},{name:"input_output_strides",type:"u32",length:y.length}]),`
        ${k.declareVariables(b,_,S,v,T)}

        ${k.mainStart(Dt)}
          let half_rotary_emb_dim = uniforms.${S.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${k.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${_.broadcastedIndicesToOffset("bsnh.xy",G("",_.type.tensor,2))};
            let position_id =
                u32(${_.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${b.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} -
                ${b.getByOffset("j")} * ${v.get("position_id","bsnh[3]")};
            ${T.setByOffset("i","re")}
            let im = ${b.getByOffset("i")} * ${v.get("position_id","bsnh[3]")} +
                ${b.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${T.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${T.setByOffset("k",b.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:ce({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(C.size(h)/Dt)},programUniforms:m})}},qc=(e,t)=>{Vu(e.inputs,t),e.compute(Wr(e.inputs,t))}}),Gu,Fu,ja,Hu,Lc,cg=U(()=>{"use strict";be(),J(),Vi(),Nc(),Pc(),ht(),Wc(),ne(),Gu=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],a=e[1],i=e[2],n=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,l=r.dims[0],d=r.dims[1],c=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],f=d,h=0,y=!a||a.dims.length===0,m=Math.floor(y?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);y&&(c=m*t.numHeads);let w=n&&n.dims.length!==0,k=s&&s.dims.length!==0;if(w&&n.dims.length===4&&n.dims[0]===l&&n.dims[1]!==t.kvNumHeads&&n.dims[2]===t.kvNumHeads&&n.dims[3]===m)throw new Error("BSNH pastKey/pastValue is not supported");if(w&&k){if(n.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');h=n.dims[2]}else if(w||k)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b=1;if(a&&a.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(r.dims[2]%a.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');f=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==m)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');f=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==m)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');f=a.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}let _=0,S=!1,v=t.kvNumHeads?m*t.kvNumHeads:c;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(f!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');v=i.dims[2]}else{if(f!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');v=i.dims[1]*i.dims[3],S=!0}}let T=e.length>4?e[5]:void 0;if(T&&T.dims.length!==1&&T.dims[0]!==l)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:l,sequenceLength:d,pastSequenceLength:h,kvSequenceLength:f,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:v,headSize:m,vHeadSize:Math.floor(v/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:_,scale:t.scale,broadcastResPosBias:!1,passPastInKv:S,qkvFormat:b}},Fu=ce({perm:[0,2,1,3]}),ja=(e,t,r)=>{let a=t,i=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(a=t.reshape([r.batchSize,r.kvSequenceLength,i,r.headSize]),a=e.compute(Me(a,Fu.perm),{inputs:[a],outputs:[-1]})[0]),a},Hu=(e,t,r,a)=>{let i=7,n=["type","type"],s=[e*t],o=e*t,l=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=c=>{let f=R("seq_lens",r.dataType,r.dims),h=R("total_seq_lens",a.dataType,a.dims),y=G("pos_ids",i,s),m=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${c.registerUniforms(m).declareVariables(f,h,y)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${h.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${f.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${y.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${y.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${y.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:n},getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:d}},Lc=(e,t)=>{let r=Gu(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let a=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,n=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,c=r.kvNumHeads?r.kvNumHeads:r.numHeads,f=ce({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,c*r.headSize,c*r.headSize]}),[h,y,m]=!i&&!n?e.compute(Ti([a],f),{inputs:[a],outputs:[-1,-1,-1]}):[a,i,n],w,k;if(t.doRotary){let v=e.compute(Hu(r.batchSize,r.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],T=e.inputs[7],I=e.inputs[8],z=ce({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),A=[h,v,T,I],M=[-1];w=e.compute(Wr(A,z),{inputs:A,outputs:M})[0],A.splice(0,1,y);let P=ce({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});k=e.compute(Wr(A,P),{inputs:A,outputs:M})[0]}let b=ar(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?w:h,void 0,0),_=ja(e,t.doRotary?k:y,r),S=ja(e,m,r);sr(e,b,_,S,void 0,void 0,s,o,void 0,r,l,d)}}),Ka,ju,Ku,Vc,fg=U(()=>{"use strict";J(),ie(),ht(),ne(),Ka=(e,t,r,a,i,n,s,o)=>{let l=we(n),d=l===1?"f32":`vec${l}f`,c=l===1?"vec2f":`mat2x${l}f`,f=i*s,h=64;f===1&&(h=256);let y=[i,s,n/l],m=[i,s,2],w=["rank","type","type"],k=[];k.push(...Z(y,m));let b=_=>{let S=R("x",t.dataType,3,l),v=R("scale",r.dataType,r.dims),T=R("bias",a.dataType,a.dims),I=G("output",1,3,2),z=[S,v,T,I];return`
  var<workgroup> workgroup_shared : array<${c}, ${h}>;
  const workgroup_size = ${h}u;
  ${_.declareVariables(...z)}
  ${_.mainStart(h)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${S.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${c}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${ft("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${ft("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${o};${h}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:f},programUniforms:k}),getShaderSource:b},{inputs:[t,r,a],outputs:[-1]})[0]},ju=(e,t,r)=>{let a=t[0].dims,i=a,n=2,s=a[0],o=a[1],l=C.sizeFromDimension(a,n),d=we(l),c=C.size(i)/d,f=Ka(e,t[0],t[1],t[2],s,l,o,r.epsilon),h=[s,o,l/d],y=[s,o],m=["type","none"],w=k=>{let b=R("x",t[0].dataType,h.length,d),_=R("scale_shift",1,y.length,2),S=G("output",t[0].dataType,h.length,d),v=[b,_,S];return`
  ${k.registerUniform("output_size","u32").declareVariables(...v)}
  ${k.mainStart()}
  ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${S.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${_.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${b.getByOffset("global_idx")} * ${S.type.value}(scale_shift.x) + ${S.type.value}(scale_shift.y);
      ${S.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...Z(h,y,h)]}),getShaderSource:w},{inputs:[t[0],f]})},Ku=(e,t,r)=>{let a=t[0].dims,i=a,n=a[0],s=a[a.length-1],o=C.sizeFromDimension(a,1)/s,l=we(s),d=C.size(i)/l,c=[{type:12,data:o},{type:12,data:Math.floor(s/l)}],f=["type","type"],h=!1,y=[0,a.length-1];for(let b=0;b<a.length-2;b++)h=h||a[b+1]!==1,y.push(b+1);h=h&&a[a.length-1]!==1;let m=h?e.compute(Me(e.inputs[0],y),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:a.length},(b,_)=>a[y[_]])),w=Ka(e,m,t[1],t[2],n,o,s,r.epsilon),k=b=>{let _=xe(t[0].dataType),S=l===1?"vec2f":`mat${l}x2f`,v=z=>{let A=z===0?"x":"y",M=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${_}(${M}(scale.${A}))`;case 2:return`vec2<${_}>(${M}(scale[0].${A}, scale[1].${A}))`;case 4:return`vec4<${_}>(${M}(scale[0].${A}, scale[1].${A}, scale[2].${A}, scale[3].${A}))`;default:throw new Error(`Not supported compoents ${l}`)}},T=R("input",t[0].dataType,t[0].dims,l),I=G("output",t[0].dataType,i,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${T.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${S}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${I.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${b.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${v(0)}, ${v(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:k},{inputs:[t[0],w]})},Vc=(e,t)=>{t.format==="NHWC"?Ku(e,e.inputs,t):ju(e,e.inputs,t)}}),Zu,Qu,Gc,hg=U(()=>{"use strict";J(),ie(),ne(),Zu=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Qu=(e,t,r)=>{let a=t.simplified,i=e[0].dims,n=e[1],s=!a&&e[2],o=i,l=C.normalizeAxis(t.axis,i.length),d=C.sizeToDimension(i,l),c=C.sizeFromDimension(i,l),f=C.size(n.dims),h=s?C.size(s.dims):0;if(f!==c||s&&h!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${f} and bias size of ${h}`);let y=[];for(let T=0;T<i.length;++T)T<l?y.push(i[T]):y.push(1);let m=we(c),w=["type","type"],k=[{type:12,data:d},{type:1,data:c},{type:12,data:Math.floor(c/m)},{type:1,data:t.epsilon}];s&&w.push("type");let b=r>1,_=r>2,S=T=>{let I=xe(e[0].dataType),z=[R("x",e[0].dataType,e[0].dims,m),R("scale",n.dataType,n.dims,m)];s&&z.push(R("bias",s.dataType,s.dims,m)),z.push(G("output",e[0].dataType,o,m)),b&&z.push(G("mean_data_output",1,y)),_&&z.push(G("inv_std_output",1,y));let A=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${T.registerUniforms(A).declareVariables(...z)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${yi("f32",m)};
    var mean_square_vector = ${yi("f32",m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Mt(I,m,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${ft("mean_vector",m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${ft("mean_square_vector",m)} / uniforms.norm_size ${a?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Mt(I,m,"x[j + offset]")};
      let f32scale = ${Mt(I,m,"scale[j]")};
      output[j + offset] = ${z[0].type.value}((f32input ${a?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Mt(I,m,"bias[j]")}`:""}
      );
    }

    ${b?"mean_data_output[global_idx] = mean":""};
    ${_?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},v=[{dims:o,dataType:e[0].dataType}];return b&&v.push({dims:y,dataType:1}),_&&v.push({dims:y,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${m};${r};${a}`,inputDependencies:w},getRunData:()=>({outputs:v,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:k}),getShaderSource:S}},Gc=(e,t)=>{Zu(e.inputs),e.compute(Qu(e.inputs,t,e.outputCount))}}),Xu,Fc,mg=U(()=>{"use strict";ie(),Ki(),Zi(),Xu=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Fc=e=>{Xu(e.inputs);let t=Nt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],a=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&a<8)e.compute(ji(e.inputs,{activation:""},t));else{let i=t[t.length-2],n=C.size(e.inputs[0].dims.slice(0,-2)),s=C.size(e.inputs[1].dims.slice(0,-2));if(n!==1&&i===1&&s===1){let o=e.inputs[0].reshape([1,n,a]),l=e.inputs[1].reshape([1,a,r]),d=[1,n,r],c=[o,l];e.compute(qr(c,{activation:""},t,d),{inputs:c})}else e.compute(qr(e.inputs,{activation:""},t))}}}),Yu,Ju,el,Hc,jc,gg=U(()=>{"use strict";J(),ie(),be(),ne(),Yu=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],a=r.dims.length;if(r.dims[a-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),n=t.blockSize/8*t.bits,s=e[1];if(!C.areEqual(s.dims,[t.n,i,n]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(C.size(o)!==t.n*i)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.bits>4?t.n*i:t.n*Math.floor((i+1)/2);if(C.size(l)!==d)throw new Error("zeroPoints input size error.")}},Ju=(e,t)=>{let r=e[0].dims,a=r.length,i=r[a-2],n=t.k,s=t.n,o=r.slice(0,a-2),l=C.size(o),d=e[1].dims[2]/4,c=e[0].dataType,f=we(t.k),h=we(d),y=we(s),m=o.concat([i,s]),w=i>1&&s/y%2===0?2:1,k=C.size(m)/y/w,b=64,_=[],S=[l,i,n/f],v=C.convertShape(e[1].dims).slice();v.splice(-1,1,d/h),_.push(...Z(S)),_.push(...Z(v)),_.push(...Z(e[2].dims)),e.length===4&&_.push(...Z(C.convertShape(e[3].dims)));let T=[l,i,s/y];_.push(...Z(T));let I=z=>{let A=S.length,M=R("a",e[0].dataType,A,f),P=R("b",12,v.length,h),Y=R("scales",e[2].dataType,e[2].dims.length),F=[M,P,Y],ee=e.length===4?R("zero_points",12,e[3].dims.length):void 0;ee&&F.push(ee);let q=T.length,re=G("output",e[0].dataType,q,y),Q=xe(e[0].dataType),V=(()=>{switch(f){case 1:return`array<${Q}, 8>`;case 2:return`mat4x2<${Q}>`;case 4:return`mat2x4<${Q}>`;default:throw new Error(`${f}-component is not supported.`)}})(),oe=()=>{let N=`
          // reuse a data
            var input_offset = ${M.indicesToOffset(`${M.type.indices}(batch, row, word_offset)`)};
            var a_data: ${V};
            for (var j: u32 = 0; j < ${8/f}; j++) {
              a_data[j] = ${M.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let W=0;W<y*w;W++)N+=`
            b_value = ${h===1?`b${W}_data`:`b${W}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${V}(${Array.from({length:4},(te,O)=>`${Q}(b_value_lower[${O}]), ${Q}(b_value_upper[${O}])`).join(", ")});
            b_dequantized_values = ${f===1?`${V}(${Array.from({length:8},(te,O)=>`(b_quantized_values[${O}] - ${ee?`zero_point${W}`:"zero_point"}) * scale${W}`).join(", ")});`:`(b_quantized_values - ${V}(${Array(8).fill(`${ee?`zero_point${W}`:"zero_point"}`).join(",")})) * scale${W};`};
            workgroup_shared[local_id.x * ${w} + ${Math.floor(W/y)}]${y>1?`[${W%y}]`:""} += ${Array.from({length:8/f},(te,O)=>`${f===1?`a_data[${O}] * b_dequantized_values[${O}]`:`dot(a_data[${O}], b_dequantized_values[${O}])`}`).join(" + ")};
          `;return N},j=()=>{let N=`
            var col_index = col * ${y};
            ${ee?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${Q}(8);`}
            `;for(let W=0;W<y*w;W++)N+=`
            let scale${W} = ${Y.getByOffset("col_index * nBlocksPerCol + block")};
            ${ee?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${ee.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${W} = ${Q}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return N},ue=()=>{let N=`col_index = col * ${y};`;for(let W=0;W<y*w;W++)N+=`
            let b${W}_data = ${P.getByIndices(`${P.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return N+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${V};
            var b_dequantized_values: ${V};`,N};return`
        var<workgroup> workgroup_shared: array<${re.type.value}, ${w*b}>;
        ${z.declareVariables(...F,re)}
        ${z.mainStart([b,1,1])}
          let output_indices = ${re.offsetToIndices(`(global_idx / ${b}) * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${b}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/f};
            ${j()}
            for (var word: u32 = 0; word < ${d}; word += ${h}) {
              ${ue()}
              for (var i: u32 = 0; i < ${h}; i++) {
                ${oe()}
                word_offset += ${8/f};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${w}) {
            var output_value: ${re.type.value} = ${re.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${b}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${w};
            }
            ${re.setByIndices(`${re.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${f};${h};${y};${w};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:c}],dispatchGroup:{x:k},programUniforms:_}),getShaderSource:I}},el=(e,t)=>{let r=e[0].dims,a=r.length,i=r[a-2],n=t.k,s=t.n,o=r.slice(0,a-2),l=C.size(o),d=e[1].dims[2]/4,c=e[0].dataType,f=we(t.k),h=we(d),y=o.concat([i,s]),m=128,w=s%8===0?8:s%4===0?4:1,k=m/w,b=k*h*8,_=b/f,S=b/t.blockSize,v=C.size(y)/w,T=[],I=[l,i,n/f],z=C.convertShape(e[1].dims).slice();z.splice(-1,1,d/h),T.push(...Z(I)),T.push(...Z(z)),T.push(...Z(e[2].dims)),e.length===4&&T.push(...Z(C.convertShape(e[3].dims)));let A=[l,i,s];T.push(...Z(A));let M=P=>{let Y=I.length,F=R("a",e[0].dataType,Y,f),ee=R("b",12,z.length,h),q=R("scales",e[2].dataType,e[2].dims.length),re=[F,ee,q],Q=e.length===4?R("zero_points",12,e[3].dims.length):void 0;Q&&re.push(Q);let V=A.length,oe=G("output",e[0].dataType,V),j=xe(e[0].dataType),ue=()=>{switch(f){case 1:return`
          let a_data0 = vec4<${j}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${j}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${j}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${j}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${f}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${F.type.value}, ${_}>;
        var<workgroup> inter_results: array<array<${oe.type.value}, ${k}>, ${w}>;
        ${P.declareVariables(...re,oe)}
        ${P.mainStart([k,w,1])}
          let output_indices = ${oe.offsetToIndices(`workgroup_index * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${S} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${_};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${_}; a_offset += ${m})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${F.getByIndices(`${F.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${F.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${S} + local_id.x;
            ${Q?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${Q.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${j}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${j}(8);`}
            let scale = ${q.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${ee.getByIndices(`${ee.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/f};
            for (var i: u32 = 0; i < ${h}; i++) {
              ${ue()}
              let b_value = ${h===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${j}>(${Array.from({length:4},(N,W)=>`${j}(b_value_lower[${W}]), ${j}(b_value_upper[${W}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${j}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(N,W)=>`${`dot(a_data${W}, b_dequantized_values[${W}])`}`).join(" + ")};
              word_offset += ${8/f};
            }
            workgroupBarrier();
          }

          if (local_idx < ${w}) {
            var output_value: ${oe.type.value} = ${oe.type.value}(0);
            for (var b = 0u; b < ${k}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${oe.setByIndices(`${oe.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${f};${h};${k};${w}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:c}],dispatchGroup:{x:v},programUniforms:T}),getShaderSource:M}},Hc=(e,t)=>{Yu(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(el(e.inputs,t)):e.compute(Ju(e.inputs,t))},jc=e=>ce(e)}),tl,rl,al,il,nl,sl,ol,ul,Kc,yg=U(()=>{"use strict";J(),ie(),ne(),tl=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},rl=(e,t,r)=>{let a="";for(let i=t-1;i>=0;--i)a+=`
            k = i32(${e.indicesGet("indices",i)}) - ${H("uniforms.pads",i,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${H("uniforms.x_shape",i,t)})) {
              break;
            }
            offset += k * i32(${H("uniforms.x_strides",i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${a}
            value = x[offset];
          }
      `},al=(e,t,r)=>{let a="";for(let i=t-1;i>=0;--i)a+=`
                k = i32(${e.indicesGet("indices",i)}) - ${H("uniforms.pads",i,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${H("uniforms.x_shape",i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${H("uniforms.x_shape",i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${H("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},il=(e,t,r)=>{let a="";for(let i=t-1;i>=0;--i)a+=`
                k = i32(${e.indicesGet("indices",i)}) - ${H("uniforms.pads",i,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${H("uniforms.x_shape",i,t)})) {
                  k = i32(${H("uniforms.x_shape",i,t)}) - 1;
                }
                offset += k * i32(${H("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},nl=(e,t,r)=>{let a="";for(let i=t-1;i>=0;--i)a+=`
                k = i32(${e.indicesGet("indices",i)}) - ${H("uniforms.pads",i,r)};
                if (k < 0)  {
                  k += i32(${H("uniforms.x_shape",i,t)}]);
                }
                if (k >= i32(${H("uniforms.x_shape",i,t)})) {
                  k -= i32(${H("uniforms.x_shape",i,t)});
                }
                offset += k * i32(${H("uniforms.x_strides",i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},sl=(e,t,r)=>{switch(r.mode){case 0:return rl(e,t,r.pads.length);case 1:return al(e,t,r.pads.length);case 2:return il(e,t,r.pads.length);case 3:return nl(e,t,r.pads.length);default:throw new Error("Invalid mode")}},ol=(e,t)=>{let r=C.padShape(e[0].dims.slice(),t.pads),a=e[0].dims,i=C.size(r),n=[{type:12,data:i},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&n.push({type:s?e[2].dataType:1,data:t.value}),n.push(...Z(e[0].dims,r));let o=["rank"],l=d=>{let c=G("output",e[0].dataType,r.length),f=R("x",e[0].dataType,a.length),h=f.type.value,y=sl(c,a.length,t),m=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&m.push({name:"constant_value",type:s?h:"f32"}),`
            ${d.registerUniforms(m).declareVariables(f,c)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${h}(0);
            ${y}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(C.size(r)/64)},programUniforms:n}),getShaderSource:l}},ul=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),a=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,n=new Int32Array(2*i).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let l=0;l<o.length;l++)n[Number(o[l])]=Number(r[l]),n[Number(o[l])+i]=Number(r[l+o.length])}else r.forEach((o,l)=>n[Number(l)]=Number(o));let s=[];return n.forEach(o=>s.push(o)),{mode:t.mode,value:a,pads:s}}else return t},Kc=(e,t)=>{tl(e.inputs);let r=ul(e.inputs,t);e.compute(ol(e.inputs,r),{inputs:[0]})}}),Qt,Za,Qa,Xa,Ya,ll,dl,Ja,ei,Zc,Qc,ti,Xc,Yc,ri,Jc,ef,tf,rf,_g=U(()=>{"use strict";je(),J(),ie(),ne(),Qt=e=>{if(he.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Za=(e,t,r)=>{let a=t.format==="NHWC",i=e.dims.slice();a&&i.splice(1,0,i.pop());let n=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),l=n?t.dilations.slice():[],d=t.pads.slice();Ur.adjustPoolAttributes(r,i,s,o,l,d);let c=Ur.computePoolOutputShape(r,i,o,l,s,d,t.autoPad),f=Object.assign({},t);n?Object.assign(f,{kernelShape:s,strides:o,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(f,{kernelShape:s,strides:o,pads:d,cacheKey:t.cacheKey});let h=c.slice();return h.push(h.splice(1,1)[0]),[f,a?h:c]},Qa=(e,t)=>{let r=t.format==="NHWC",a=C.size(e),i=C.size(t.kernelShape),n=[{type:12,data:a},{type:12,data:i}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],f=!!(d+c);n.push({type:12,data:o},{type:12,data:l},{type:12,data:d},{type:12,data:c}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let h=!1;if(t.kernelShape.length===2){let y=t.kernelShape[t.kernelShape.length-2],m=t.strides[t.strides.length-2],w=t.pads[t.pads.length/2-2],k=t.pads[t.pads.length-2];h=!!(w+k),n.push({type:12,data:y},{type:12,data:m},{type:12,data:w},{type:12,data:k}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[n,s,!0,f,h]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=C.computeStrides(t.kernelShape);n.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,c)=>d+c);return[n,s,!!l,!1,!1]}},Xa=(e,t,r,a,i,n,s,o,l,d,c,f)=>{let h=i.format==="NHWC",y=t.type.value,m=G("output",t.type.tensor,a);if(i.kernelShape.length<=2){let w="",k="",b="",_=r-(h?2:1);if(c?w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${_}] = indices[${_}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${_}] < 0 || xIndices[${_}]
                      >= uniforms.x_shape[${_}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`:w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${_}] = indices[${_}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`,i.kernelShape.length===2){let S=r-(h?3:2);f?k=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${S}] < 0 || xIndices[${S}] >= uniforms.x_shape[${S}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:k=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                `,b=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${m.offsetToIndices("global_idx")};
              var xIndices = ${m.offsetToIndices("global_idx")};

              var value = ${y}(${o});
              var pad = 0;
              ${k}
              ${w}
              ${b}
              ${s}

              output[global_idx] = value;
            }`}else{if(h)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let w=i.kernelShape.length,k=i.pads.length,b="";return d?b=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${n}
              }`:b=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${n}
            `,`
            ${e.registerUniforms(l).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${m.offsetToIndices("global_idx")};
              var xIndices = ${m.offsetToIndices("global_idx")};

              var offsets: array<u32, ${w}>;

              var value = ${y}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${w-1}u; j++) {
                  offsets[j] = offset / ${H("uniforms.kernelStrides","j",w)};
                  offset -= offsets[j] * ${H("uniforms.kernelStrides","j",w)};
                }
                offsets[${w-1}] = offset;

                isPad = false;
                for (var j = ${r-w}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${H("uniforms.strides",`j - ${r-w}u`,w)}
                    + offsets[j - ${r-w}u] - ${H("uniforms.pads","j - 2u",k)};
                  ${b}
              }
              ${s}

              output[global_idx] = value;
            }`}},Ya=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,ll=e=>`${Ya(e)};${e.countIncludePad}`,dl=e=>`${Ya(e)};${e.storageOrder};${e.dilations}`,Ja=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),ei=(e,t,r,a)=>{let[i,n]=Za(t,a,r),s=R("x",t.dataType,t.dims.length),o=s.type.value,l="value += x_val;",d="";i.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[c,f,h,y,m]=Qa(n,i);c.push(...Z(t.dims,n));let w=["rank"];return{name:e,shaderCache:{hint:`${a.cacheKey};${h};${y};${m}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(C.size(n)/64)},programUniforms:c}),getShaderSource:k=>Xa(k,s,t.dims.length,n.length,i,l,d,0,f,h,y,m)}},Zc=e=>{let t=e.count_include_pad!==0,r=Ja(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let a={countIncludePad:t,...r,cacheKey:""};return{...a,cacheKey:ll(a)}},Qc=(e,t)=>{Qt(e.inputs),e.compute(ei("AveragePool",e.inputs[0],!1,t))},ti={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Xc=e=>{let t=e.format;return{format:t,...ti,cacheKey:t}},Yc=(e,t)=>{Qt(e.inputs),e.compute(ei("GlobalAveragePool",e.inputs[0],!0,t))},ri=(e,t,r,a)=>{let[i,n]=Za(t,a,r),s=`
      value = max(x_val, value);
    `,o="",l=R("x",t.dataType,t.dims.length),d=["rank"],[c,f,h,y,m]=Qa(n,i);return c.push(...Z(t.dims,n)),{name:e,shaderCache:{hint:`${a.cacheKey};${h};${y};${m}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(C.size(n)/64)},programUniforms:c}),getShaderSource:w=>Xa(w,l,t.dims.length,n.length,i,s,o,t.dataType===10?-65504:-1e5,f,h,y,m)}},Jc=(e,t)=>{Qt(e.inputs),e.compute(ri("MaxPool",e.inputs[0],!1,t))},ef=e=>{let t=e.storage_order,r=e.dilations,a=Ja(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(a.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:t,dilations:r,...a,cacheKey:""};return{...i,cacheKey:dl(i)}},tf=e=>{let t=e.format;return{format:t,...ti,cacheKey:t}},rf=(e,t)=>{Qt(e.inputs),e.compute(ri("GlobalMaxPool",e.inputs[0],!0,t))}}),pl,cl,af,nf,wg=U(()=>{"use strict";J(),ie(),be(),ne(),pl=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,a)=>r===e[2].dims[a]).reduce((r,a)=>r&&a,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((i,n)=>n===t.axis||i===e[0].dims[n]).reduce((i,n)=>i&&n,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],a=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/a)||t.blockSize>Math.ceil(r/(a-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},cl=(e,t)=>{let r=C.normalizeAxis(t.axis,e[0].dims.length),a=e[0].dataType,i=a===3,n=e[0].dims,s=e[1].dataType,o=C.size(n),l=a===3||a===2,d=l?[Math.ceil(C.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,f=e.length>2?e[2]:void 0,h=f?l?[Math.ceil(C.size(f.dims)/4)]:f.dims:void 0,y=c.length===0||c.length===1&&c[0]===1,m=y===!1&&c.length===1,w=we(o),k=y&&(!l||w===4),b=k?w:1,_=k&&!l?w:1,S=R("input",l?12:a,d.length,_),v=R("scale",s,c.length),T=f?R("zero_point",l?12:a,h.length):void 0,I=G("output",s,n.length,b),z=[S,v];T&&z.push(T);let A=[d,c];f&&A.push(h);let M=[{type:12,data:o/b},{type:12,data:r},{type:12,data:t.blockSize},...Z(...A,n)],P=Y=>{let F=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${Y.registerUniforms(F).declareVariables(...z,I)}
      ${Y.mainStart()}
          ${Y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${I.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${S.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${b===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${S.getByOffset("global_idx")};`};

          // Set scale input
          ${y?`let scale_value= ${v.getByOffset("0")}`:m?`
            let scale_index = ${I.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${v.getByOffset("scale_index")};`:`
            var scale_indices: ${v.type.indices} = output_indices;
            let index = ${v.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${v.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${v.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${T?y?l?`
                let zero_point_input = ${T.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${T.getByOffset("0")}`:m?l?`
                let zero_point_index = ${I.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${T.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${I.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${T.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${v.indicesToOffset("scale_indices")};
                let zero_point_input = ${T.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${T.getByIndices("scale_indices")};`:`let zero_point_value = ${l?i?"i32":"u32":S.type.value}(0);`};
      // Compute and write output
      ${I.setByOffset("global_idx",`${I.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:T?["rank","rank","rank"]:["rank","rank"]},getShaderSource:P,getRunData:()=>({outputs:[{dims:n,dataType:s}],dispatchGroup:{x:Math.ceil(o/b/64),y:1,z:1},programUniforms:M})}},af=(e,t)=>{pl(e.inputs,t),e.compute(cl(e.inputs,t))},nf=e=>ce({axis:e.axis,blockSize:e.blockSize})}),fl,hl,sf,bg=U(()=>{"use strict";je(),J(),ne(),fl=(e,t,r)=>{let a=e===t,i=e<t&&r<0,n=e>t&&r>0;if(a||i||n)throw new Error("Range these inputs' contents are invalid.")},hl=(e,t,r,a)=>{let i=Math.abs(Math.ceil((t-e)/r)),n=[i],s=i,o=[{type:12,data:s},{type:a,data:e},{type:a,data:r},...Z(n)],l=d=>{let c=G("output",a,n.length),f=c.type.value,h=[{name:"outputSize",type:"u32"},{name:"start",type:f},{name:"delta",type:f}];return`
        ${d.registerUniforms(h).declareVariables(c)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${f}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${a}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},sf=e=>{let t=0,r=0,a=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],a=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],a=e.inputs[2].getFloat32Array()[0]),he.webgpu.validateInputContent&&fl(t,r,a),e.compute(hl(t,r,a,e.inputs[0].dataType),{inputs:[]})}}),ml,ai,ii,gl,of,uf,$g=U(()=>{"use strict";J(),ie(),be(),ne(),ml=(e,t,r,a)=>{if(e!=="none"&&a!=="i32"&&a!=="u32"&&a!=="f32")throw new Error(`Input ${a} is not supported with reduction ${e}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,n=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return a==="i32"||a==="u32"?`atomicAdd(&${t}, bitcast<${a}>(${r}));`:`
              ${i}bitcast<${a}>(oldValue) + (${r})${n}`;case"max":return a==="i32"||a==="u32"?`atomicMax(&${t}, bitcast<${a}>(${r}));`:`
                ${i}max(bitcast<f32>(oldValue), (${r}))${n}`;case"min":return a==="i32"||a==="u32"?`atomicMin(&${t}, bitcast<${a}>(${r}));`:`${i}min(bitcast<${a}>(oldValue), (${r}))${n}`;case"mul":return`${i}(bitcast<${a}>(oldValue) * (${r}))${n}`;default:throw new Error(`Reduction ${e} is not supported.`)}},ai=(e,t)=>`${e===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[${t?"i - indices_start":"i"}];
    let dim_value = uniforms.output_shape[${t?"i - indices_start":"i"} + uniforms.last_index_dimension];`}
    
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));`,ii=(e,t,r)=>`for (var i = 0u; i < uniforms.num_updates_elements; i++) {
        let value = updates[uniforms.num_updates_elements * ${r?"global_idx":"idx"} + i];
        ${ml(e.reduction,"output[data_offset + i]","value",t)}
      }`,gl=(e,t)=>{let r=e[0].dims,a=e[1].dims,i=r,n=1,s=Math.ceil(C.size(a)/n),o=a[a.length-1],l=C.sizeFromDimension(r,o),d=C.sizeFromDimension(a,0)/o,c=[{type:12,data:s},{type:12,data:o},{type:12,data:l},...Z(e[1].dims,e[2].dims,i)],f=h=>{let y=R("indices",e[1].dataType,e[1].dims.length),m=R("updates",e[2].dataType,e[2].dims.length,n),w=t.reduction!=="none"&&t.reduction!==""?Md("output",e[0].dataType,i.length):G("output",e[0].dataType,i.length,n);return`
      ${h.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(y,m,w)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var hasDuplicates = false;
  if (${t.reduction==="none"}) {
    for (var i = 0; i < ${d}; i = i + 1) {
      for (var j = i + 1; j < ${d}; j = j + 1) {
        var index_i = i32(indices[i].x);
        var index_j = i32(indices[j].x);
        if (index_i == index_j) {
          hasDuplicates = true;
          break;
        }
      }
      if (hasDuplicates) {
        break;
      }
    }
  }

  if (${t.reduction==="none"} && hasDuplicates) {
    if (global_idx != 0u) {
      return;
    }
    // Process each index-update pair individually when duplicates exist
    for (var idx = 0u; idx < ${d}u; idx++) {
      var data_offset = 0u;
      for (var i = 0u; i < uniforms.last_index_dimension; i++) {
        var index = i32(indices[idx * uniforms.last_index_dimension + i].x);
        ${ai(r.length,!1)}
      }
      ${ii(t,w.type.value,!1)}
    }
    return;
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  var indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${ai(r.length,!0)}
  }
  ${ii(t,w.type.value,!0)}
  }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}),getShaderSource:f}},of=e=>ce({reduction:e.reduction}),uf=(e,t)=>{e.compute(gl(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),yl,_l,wl,ni,bl,$l,vl,xl,kl,Sl,Tl,Il,si,El,zl,Cl,Al,Ol,lf,df,vg=U(()=>{"use strict";J(),ie(),be(),ne(),yl=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},_l=(e,t,r)=>{t.every(i=>i>=0&&i<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let a=new Array(r).fill(1);return t.forEach((i,n)=>a[i]=e[n]),a},wl=(e,t,r,a,i,n)=>{let[s,o,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(c=>n.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(c=>a.push(c)),a.length!==0&&a.length!==d&&r>=18&&a.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");yl(a,t),t.axes.length>0&&_l(a,t.axes,d).forEach((c,f)=>a[f]=c)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(c=>i.push(Number(c))),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof a<"u"&&typeof i<"u"&&a.length>0&&i.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},ni=(e,t,r,a)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${a}(big / (${r}));
  let fract = ${a}(big % (${r})) / ${a}(${r});
  return whole + fract;
`,bl=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${ni("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${ni("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",$l=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",vl=(e,t,r)=>{let a=new Array(r).fill(0).concat(new Array(r).fill(1)),i=e.length===0?a:e.slice();return t.length>0?(t.forEach((n,s)=>{a[n]=i[s],a[s+r]=i[t.length+s]}),a):i},xl=(e,t,r,a)=>{let i=[];if(r.length>0)if(a.length>0){if(e.forEach(n=>i.push(n)),Math.max(...a)>e.length)throw new Error("axes is out of bound");a.forEach((n,s)=>i[n]=r[s])}else r.forEach(n=>i.push(n));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");i=e.map((n,s)=>Math.round(n*t[s]))}return i},kl=(e,t,r)=>{let a=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(n=>t[n]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(n=>t[n]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return r.axes.length>0?(r.axes.forEach(n=>t[n]=a),r.axes.forEach(n=>i[n]=Math.round(e[n]*t[n]))):(t.fill(a,0,t.length),i.forEach((n,s)=>i[s]=Math.round(n*t[s]))),i},Sl=(e,t,r,a,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${H("uniforms.scales","i",a)};
        var roi_low = ${H("uniforms.roi","i",i)};
        var roi_hi = ${H("uniforms.roi",`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${H("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${H("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Tl=(e,t,r,a,i,n,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${a.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${H("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${H("uniforms.roi","i",n)};
          var roi_hi = ${H("uniforms.roi",`i + ${r.length}`,n)};
          var input_shape_i = ${H("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${H("uniforms.output_shape","i",a.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,Il=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${H("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,si=(e,t,r,a)=>e.rank>a?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",El=(e,t,r,a,i)=>{let[n,s,o,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${si(e,l,n,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${s}];
      var col:${d} = originalIndices[${o}];
      ${a?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${i};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${n}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},zl=(e,t,r,a,i,n,s,o,l,d)=>{let c=r.length===2,f=!0,[h,y]=c?[0,1]:f?[2,3]:[1,2],m=e.type.value,w=k=>{let b=k===h?"row":"col";return`
      fn ${b}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${m} {
        var output_index = ${t.indicesGet("output_indices",k)};
        var originalIdx: ${m} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[k]},
        ${a[k]}, ${r[k]}, ${n[k]}, ${n[k]} + ${r.length});
        var fractOriginalIdx: ${m} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[k]} - 1))) {
          return ${l};
        }
        var data: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${b}: ${m} = originalIdx + ${m}(i);
          if (${b} < 0 || ${b} >= ${r[k]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${l};`:`${b} = max(0, min(${b}, ${r[k]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",k,`u32(${b})`)};
          data[i + 1] = ${k===h?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${w(h)};
    ${w(y)};
  fn getCubicInterpolationCoefs(s: ${m}) -> array<${m}, 4> {
    var absS = abs(s);
    var coeffs: array<${m}, 4> = array<${m}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${m} = 1.0 - absS;
    var twoMinusAbsS: ${m} = 2.0 - absS;
    var onePlusAbsS: ${m} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${m}, 4>, coefs: array<${m}, 4>) -> ${m} {
    var coefsSum: ${m} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${m} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Cl=(e,t,r,a,i)=>{let[n,s,o,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${si(e,d,n,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${s}];
      var height:${c} = originalIndices[${o}];
      var width:${c} = originalIndices[${l}];
      ${a?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${i};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${n}])`:"0"};

      var x111: ${c} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${c} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${c} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${c} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${c} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${c} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${c} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${c} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${c} = abs(depth - ${c}(depth1));
      var dx2: ${c} = abs(${c}(depth2) - depth);
      var dy1: ${c} = abs(height - ${c}(height1));
      var dy2: ${c} = abs(${c}(height2) - height);
      var dz1: ${c} = abs(width - ${c}(width1));
      var dz2: ${c} = abs(${c}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Al=(e,t,r,a,i,n)=>{let s=e.dims,o=vl(n,t.axes,s.length),l=xl(s,a,i,t.axes),d=a.slice();a.length===0&&(d=s.map((_,S)=>_===0?1:l[S]/_),t.keepAspectRatioPolicy!=="stretch"&&(l=kl(s,d,t)));let c=G("output",e.dataType,l.length),f=R("input",e.dataType,s.length),h=C.size(l),y=s.length===l.length&&s.every((_,S)=>_===l[S]),m=t.coordinateTransformMode==="tf_crop_and_resize",w=t.extrapolationValue,k=f.type.value,b=_=>`
      ${y?"":`
      ${bl(t.coordinateTransformMode,k)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Il(f,s)};
              ${$l(t.nearestMode,r,k)};
              ${Tl(f,c,s,l,d.length,o.length,m)};
              `;case"linear":return`
              ${Sl(c,s,l,d.length,o.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${El(f,c,s,m,w)}`;if(s.length===3||s.length===5)return`${Cl(f,c,s,m,w)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${zl(f,c,s,l,d,o,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${_.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(f,c)}
      ${_.mainStart()}
        ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${y?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${f.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${f.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${i.length>0?i:""}|${o.length>0?o:""}|${y}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},{type:1,data:d},{type:1,data:o},...Z(s,l)]})}},Ol=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},lf=(e,t)=>{let r=[],a=[],i=[],n=Ol(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");wl(e.inputs,t,n,r,a,i),e.compute(Al(e.inputs[0],t,n,r,a,i),{inputs:[0]})},df=e=>{let t=e.antialias,r=e.axes,a=e.coordinateTransformMode,i=e.cubicCoeffA,n=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return ce({antialias:t,axes:r,coordinateTransformMode:a,cubicCoeffA:i,excludeOutside:n,extrapolationValue:s,keepAspectRatioPolicy:o,mode:l,nearestMode:d})}}),Bl,Rl,pf,xg=U(()=>{"use strict";J(),ie(),ne(),Bl=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],a=e[2];if(t.dataType!==r.dataType||t.dataType!==a.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=t.dims[t.dims.length-1],n=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==n)throw new Error("Skip must have the same sequence length as input");if(a.dims.length!==1)throw new Error("Gamma must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},Rl=(e,t,r,a)=>{let i=t.simplified,n=e[0].dims,s=C.size(n),o=n,l=s,d=n.slice(-1)[0],c=a?n.slice(0,-1).concat(1):[],f=!i&&e.length>3,h=e.length>4,y=a&&r>1,m=a&&r>2,w=r>3,k=64,b=we(d),_=[{type:12,data:l},{type:12,data:b},{type:12,data:d},{type:1,data:t.epsilon}],S=T=>{let I=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],z=[R("x",e[0].dataType,e[0].dims,b),R("skip",e[1].dataType,e[1].dims,b),R("gamma",e[2].dataType,e[2].dims,b)];f&&z.push(R("beta",e[3].dataType,e[3].dims,b)),h&&z.push(R("bias",e[4].dataType,e[4].dims,b)),z.push(G("output",e[0].dataType,o,b)),y&&z.push(G("mean_output",1,c)),m&&z.push(G("inv_std_output",1,c)),w&&z.push(G("input_skip_bias_sum",e[0].dataType,o,b));let A=xe(e[0].dataType),M=xe(1,b);return`

      ${T.registerUniforms(I).declareVariables(...z)}
      var<workgroup> sum_shared : array<${M}, ${k}>;
      var<workgroup> sum_squared_shared : array<${M}, ${k}>;

      ${T.mainStart([k,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${k};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${k};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${k-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${h?"bias[offset1d + i]":A+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${w?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Mt(A,b,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${k};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${ft("sum",b)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${ft("square_sum",b)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${y?"mean_output[global_idx] = mean;":""}
        ${m?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${A}(mean)`}) *
            ${A}(inv_std_dev) * gamma[offset1d + i]
            ${f?"+ beta[offset1d + i]":""};
        }
      }`},v=[{dims:o,dataType:e[0].dataType}];return r>1&&v.push({dims:c,dataType:1}),r>2&&v.push({dims:c,dataType:1}),r>3&&v.push({dims:n,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${b};${y};${m};${w}`,inputDependencies:e.map((T,I)=>"type")},getShaderSource:S,getRunData:()=>({outputs:v,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:_})}},pf=(e,t)=>{Bl(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Rl(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Ml,Xt,Nl,oi,Dl,Ul,cf,ff,kg=U(()=>{"use strict";J(),ie(),be(),ne(),Ml=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,a)=>{if(e[a+1].dataType!==6&&e[a+1].dataType!==7)throw new Error(`Input ${a} must be an array of int32 or int64`)})},Xt=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(a=>r.push(Number(a)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(a=>r.push(Number(a)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Nl=(e,t)=>{if(e.length>1){let r=Xt(e,1),a=Xt(e,2),i=Xt(e,3);return i.length===0&&(i=[...Array(e[0].dims.length).keys()]),ce({starts:r,ends:a,axes:i})}else return t},oi=(e,t,r,a,i)=>{let n=e;return e<0&&(n+=r[a[t]]),i[t]<0?Math.max(0,Math.min(n,r[a[t]]-1)):Math.max(0,Math.min(n,r[a[t]]))},Dl=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${H("uniforms.input_shape","i",r.length)};
            let steps_i = ${H("uniforms.steps","i",r.length)};
            let signs_i = ${H("uniforms.signs","i",r.length)};
            let starts_i = ${H("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Ul=(e,t)=>{let r=e[0].dims,a=C.size(r),i=t.axes.length>0?C.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],n=Xt(e,4);n.forEach(b=>b!==0||(()=>{throw new Error("step cannot be 0")})),n.length===0&&(n=Array(i.length).fill(1));let s=t.starts.map((b,_)=>oi(b,_,r,i,n)),o=t.ends.map((b,_)=>oi(b,_,r,i,n));if(i.length!==s.length||i.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==r.length)for(let b=0;b<r.length;++b)i.includes(b)||(s.splice(b,0,0),o.splice(b,0,r[b]),n.splice(b,0,1));let l=n.map(b=>Math.sign(b));n.forEach((b,_,S)=>{if(b<0){let v=(o[_]-s[_])/b,T=s[_],I=T+v*n[_];s[_]=I,o[_]=T,S[_]=-b}});let d=r.slice(0);i.forEach((b,_)=>{d[b]=Math.ceil((o[b]-s[b])/n[b])});let c={dims:d,dataType:e[0].dataType},f=G("output",e[0].dataType,d.length),h=R("input",e[0].dataType,e[0].dims.length),y=C.size(d),m=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:n.length}],w=[{type:12,data:y},{type:12,data:s},{type:6,data:l},{type:12,data:n},...Z(e[0].dims,d)],k=b=>`
      ${b.registerUniforms(m).declareVariables(h,f)}
        ${Dl(h,f,r)}
        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${f.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${f.setByOffset("global_idx",h.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${s.length}_${n.length}`,inputDependencies:["rank"]},getShaderSource:k,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:w})}},cf=(e,t)=>{Ml(e.inputs,t);let r=Nl(e.inputs,t);e.compute(Ul(e.inputs,r),{inputs:[0]})},ff=e=>{let t=e.starts,r=e.ends,a=e.axes;return ce({starts:t,ends:r,axes:a})}}),Pl,ql,hf,mf,Sg=U(()=>{"use strict";J(),ie(),be(),ht(),ne(),Pl=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},ql=(e,t)=>{let r=e.inputs[0],a=r.dims,i=C.size(a),n=a.length,s=C.normalizeAxis(t.axis,n),o=s<a.length-1,l,d=[];o?(d=Array.from({length:n},(z,A)=>A),d[s]=n-1,d[n-1]=s,l=e.compute(Me(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let c=l.dims,f=c[n-1],h=i/f,y=we(f),m=f/y,w=64;h===1&&(w=256);let k=(z,A)=>A===4?`max(max(${z}.x, ${z}.y), max(${z}.z, ${z}.w))`:A===2?`max(${z}.x, ${z}.y)`:A===3?`max(max(${z}.x, ${z}.y), ${z}.z)`:z,b=R("x",l.dataType,l.dims,y),_=G("result",l.dataType,l.dims,y),S=b.type.value,v=xe(l.dataType)==="f32"?`var threadMax = ${S}(-3.402823e+38f);`:`var threadMax = ${S}(-65504.0h);`,T=z=>`
      var<workgroup> rowMaxShared : ${S};
      var<workgroup> rowSumShared : ${S};
      var<workgroup> threadShared : array<${S}, ${w}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${S} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${S}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${z.registerUniform("packedCols","i32").declareVariables(b,_)}
      ${z.mainStart(w)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${w};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${v}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${S}(${k("threadShared[0]",y)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${S}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${S}(${ft("threadShared[0]",y)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,I=e.compute({name:"Softmax",shaderCache:{hint:`${y};${w}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:l.dataType}],dispatchGroup:{x:h},programUniforms:[{type:6,data:m}]}),getShaderSource:T},{inputs:[l],outputs:[o?-1:0]})[0];o&&e.compute(Me(I,d),{inputs:[I]})},hf=(e,t)=>{Pl(e.inputs),ql(e,t)},mf=e=>ce({axis:e.axis})}),ui,Wl,Ll,Vl,gf,Tg=U(()=>{"use strict";J(),ie(),ne(),ui=e=>Array.from(e.getBigInt64Array(),Number),Wl=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(ui(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Ll=(e,t)=>{let r=[];for(let a=0;a<e.length;++a)r.push(e[a]*t[a]);return r},Vl=(e,t)=>{let r=e[0].dims,a=t??ui(e[1]),i=Ll(r,a),n=C.size(i),s=e[0].dataType,o=R("input",s,r.length),l=G("output",s,i.length),d=c=>`
      const inputShape = ${o.indices(...r)};
      ${c.registerUniform("output_size","u32").declareVariables(o,l)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${a}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},...Z(e[0].dims,i)]}),getShaderSource:d}},gf=e=>{Wl(e.inputs),e.compute(Vl(e.inputs),{inputs:[0]})}}),Gl,Fl,yf,Ig=U(()=>{"use strict";J(),ie(),ne(),Gl=(e,t,r,a,i)=>{let n=G("output_data",i,r.length,4),s=R("a_data",t[1].dataType,t[1].dims.length,4),o=R("b_data",t[2].dataType,t[2].dims.length,4),l=R("c_data",t[0].dataType,t[0].dims.length,4),d,c=(f,h,y)=>`select(${h}, ${f}, ${y})`;if(!a)d=n.setByOffset("global_idx",c(s.getByOffset("global_idx"),o.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let f=(h,y,m="")=>{let w=`a_data[index_a${y}][component_a${y}]`,k=`b_data[index_b${y}][component_b${y}]`,b=`bool(c_data[index_c${y}] & (0xffu << (component_c${y} * 8)))`;return`
            let output_indices${y} = ${n.offsetToIndices(`global_idx * 4u + ${y}u`)};
            let offset_a${y} = ${s.broadcastedIndicesToOffset(`output_indices${y}`,n)};
            let offset_b${y} = ${o.broadcastedIndicesToOffset(`output_indices${y}`,n)};
            let offset_c${y} = ${l.broadcastedIndicesToOffset(`output_indices${y}`,n)};
            let index_a${y} = offset_a${y} / 4u;
            let index_b${y} = offset_b${y} / 4u;
            let index_c${y} = offset_c${y} / 4u;
            let component_a${y} = offset_a${y} % 4u;
            let component_b${y} = offset_b${y} % 4u;
            let component_c${y} = offset_c${y} % 4u;
            ${h}[${y}] = ${m}(${c(w,k,b)});
          `};i===9?d=`
            var data = vec4<u32>(0);
            ${f("data",0,"u32")}
            ${f("data",1,"u32")}
            ${f("data",2,"u32")}
            ${f("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${f("output_data[global_idx]",0)}
            ${f("output_data[global_idx]",1)}
            ${f("output_data[global_idx]",2)}
            ${f("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,s,o,n)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},Fl=e=>{let t=e[1].dims,r=e[2].dims,a=e[0].dims,i=e[1].dataType,n=!(C.areEqual(t,r)&&C.areEqual(r,a)),s=t,o=C.size(t);if(n){let d=Nt.calcShape(Nt.calcShape(t,r,!1),a,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,o=C.size(s)}let l=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>Gl(d,e,s,n,i),getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:l},...Z(a,t,r,s)]})}},yf=e=>{e.compute(Fl(e.inputs))}}),_f,Eg=U(()=>{"use strict";Lm(),Vi(),Vm(),Gm(),Fm(),Hm(),jm(),Ym(),eg(),tg(),rg(),ag(),ig(),ng(),sg(),og(),ug(),lg(),dg(),pg(),cg(),fg(),hg(),mg(),gg(),Nc(),yg(),_g(),wg(),bg(),$g(),Li(),vg(),Wc(),xg(),kg(),Sg(),Pc(),Tg(),ht(),Gi(),Ig(),_f=new Map([["Abs",[dp]],["Acos",[pp]],["Acosh",[cp]],["Add",[Hp]],["ArgMax",[sp,wi]],["ArgMin",[np,wi]],["Asin",[fp]],["Asinh",[hp]],["Atan",[mp]],["Atanh",[gp]],["Attention",[op]],["AveragePool",[Qc,Zc]],["BatchNormalization",[up]],["BiasAdd",[lp]],["BiasSplitGelu",[Fp]],["Cast",[_p,yp]],["Ceil",[bp]],["Clip",[wp]],["Concat",[rc,ac]],["Conv",[Si,ki]],["ConvTranspose",[fc,cc]],["Cos",[$p]],["Cosh",[vp]],["CumSum",[hc,mc]],["DepthToSpace",[gc,yc]],["DequantizeLinear",[af,nf]],["Div",[jp]],["Einsum",[_c,wc]],["Elu",[xp,rr]],["Equal",[Kp]],["Erf",[kp]],["Exp",[Sp]],["Expand",[bc]],["FastGelu",[$c]],["Floor",[Tp]],["FusedConv",[Si,ki]],["Gather",[xc,vc]],["GatherElements",[zc,Ec]],["GatherBlockQuantized",[Tc,Ic]],["GatherND",[kc,Sc]],["Gelu",[Ip]],["Gemm",[Ac,Cc]],["GlobalAveragePool",[Yc,Xc]],["GlobalMaxPool",[rf,tf]],["Greater",[Yp]],["GreaterOrEqual",[ec]],["GridSample",[Oc,Bc]],["GroupQueryAttention",[Lc]],["HardSigmoid",[Mp,Rp]],["InstanceNormalization",[Vc]],["LayerNormalization",[Gc]],["LeakyRelu",[Ep,rr]],["Less",[Jp]],["LessOrEqual",[tc]],["Log",[Vp]],["MatMul",[Fc]],["MatMulNBits",[Hc,jc]],["MaxPool",[Jc,ef]],["Mul",[Zp]],["MultiHeadAttention",[Mc,Rc]],["Neg",[Cp]],["Not",[zp]],["Pad",[Kc]],["Pow",[Qp]],["QuickGelu",[Gp,rr]],["Range",[sf]],["Reciprocal",[Ap]],["ReduceMin",[ep]],["ReduceMean",[Zd]],["ReduceMax",[Jd]],["ReduceSum",[rp]],["ReduceProd",[tp]],["ReduceL1",[Qd]],["ReduceL2",[Xd]],["ReduceLogSum",[ip]],["ReduceLogSumExp",[Yd]],["ReduceSumSquare",[ap]],["Relu",[Op]],["Resize",[lf,df]],["RotaryEmbedding",[qc]],["ScatterND",[uf,of]],["Sigmoid",[Bp]],["Sin",[Np]],["Sinh",[Dp]],["Slice",[cf,ff]],["SkipLayerNormalization",[pf]],["Split",[Dc,Uc]],["Sqrt",[Up]],["Softmax",[hf,mf]],["Sub",[Xp]],["Tan",[Pp]],["Tanh",[qp]],["ThresholdedRelu",[Lp,rr]],["Tile",[gf]],["Transpose",[Dd,Ud]],["Where",[yf]]])}),wf,zg=U(()=>{"use strict";je(),at(),ne(),wf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,a,i){Ye(e.programInfo.name);let n=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of r)o.push({binding:o.length,resource:{buffer:d.buffer}});i&&o.push({binding:o.length,resource:i});let l=n.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:a};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,l),s.dispatchWorkgroups(...a),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),He(e.programInfo.name)}dispose(){}build(e,t){Ye(e.name);let r=this.backend.device,a=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&a.push(`enable ${d.extension};`)});let i=Nd(t,this.backend.device.limits),n=e.getShaderSource(i),s=`${a.join(`
`)}
${i.additionalImplementations}
${n}`,o=r.createShaderModule({code:s,label:e.name});le("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let l=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return He(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,a=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&r<=i&&a<=i)return[t,r,a];let n=t*r*a,s=Math.ceil(Math.sqrt(n));if(s>i){if(s=Math.ceil(Math.cbrt(n)),s>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),bf={};Ut(bf,{WebGpuBackend:()=>$f});var Hl,jl,Kl,$f,Cg=U(()=>{"use strict";je(),J(),at(),Ad(),qm(),Eg(),zg(),Hl=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let a=0;a<e.length;++a){let i=e[a].dataType;switch(t[a]){case"none":{r.push("");break}case"type":{r.push(`${i}`);break}case"rank":{let n=e[a].dims.length;r.push(`${i};${n}`);break}case"dims":{let n=e[a].dims.join(",");r.push(`${i};${n}`);break}default:throw new Error(`unsupported input dependency: ${t[a]}`)}}return r.join("|")},jl=(e,t,r)=>{let a=e.name;return e.shaderCache?.hint&&(a+="["+e.shaderCache.hint+"]"),a+=":"+r+`:${Hl(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,a},Kl=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},$f=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],a={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},i=n=>t.features.has(n)&&r.push(n)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await t.requestDevice(a),this.adapterInfo=new Kl(t.info||await t.requestAdapterInfo()),this.gpuDataManager=Rd(this),this.programManager=new wf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Ui(e.logLevel,!!e.debug),this.device.onuncapturederror=n=>{n.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${n.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Ye(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let a=0;a<t.length/2;a++){let i=r[a],n=i.kernelId,s=this.kernels.get(n),o=s.kernelType,l=s.kernelName,d=i.programName,c=i.inputTensorViews,f=i.outputTensorViews,h=t[a*2],y=t[a*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=h);let m=Number(h-this.queryTimeBase),w=Number(y-this.queryTimeBase);if(!Number.isSafeInteger(m)||!Number.isSafeInteger(w))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:c.map(k=>({dims:k.dims,dataType:rt(k.dataType)})),outputsMetadata:f.map(k=>({dims:k.dims,dataType:rt(k.dataType)})),kernelId:n,kernelType:o,kernelName:l,programName:d,startTime:m,endTime:w});else{let k="";c.forEach((_,S)=>{k+=`input[${S}]: [${_.dims}] | ${rt(_.dataType)}, `});let b="";f.forEach((_,S)=>{b+=`output[${S}]: [${_.dims}] | ${rt(_.dataType)}, `}),console.log(`[profiling] kernel "${n}|${o}|${l}|${d}" ${k}${b}execution time: ${w-m} ns`)}Mr("GPU",`${d}::${h}::${y}`)}e.unmap(),this.pendingQueries.delete(e)}),He()}run(e,t,r,a,i,n){Ye(e.name);let s=[];for(let _=0;_<t.length;++_){let S=t[_].data;if(S===0)continue;let v=this.gpuDataManager.get(S);if(!v)throw new Error(`no GPU data for input: ${S}`);s.push(v)}let{outputs:o,dispatchGroup:l,programUniforms:d}=e.getRunData(t),c=r.length===0?o.map((_,S)=>S):r;if(c.length!==o.length)throw new Error(`Output size ${c.length} must be equal to ${o.length}.`);let f=[],h=[];for(let _=0;_<o.length;++_){if(!Number.isInteger(c[_])||c[_]<-3||c[_]>=n)throw new Error(`Invalid output index: ${c[_]}`);if(c[_]===-3)continue;let S=c[_]===-1,v=c[_]===-2,T=S||v?i(o[_].dataType,o[_].dims):a(c[_],o[_].dataType,o[_].dims);if(f.push(T),T.data===0)continue;let I=this.gpuDataManager.get(T.data);if(!I)throw new Error(`no GPU data for output: ${T.data}`);if(S&&this.temporaryData.push(I),v){let z=this.kernelPersistentData.get(this.currentKernelId);z||(z=[],this.kernelPersistentData.set(this.currentKernelId,z)),z.push(I)}h.push(I)}if(s.length!==t.length||h.length!==f.length){if(h.length===0)return He(e.name),f;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let y;if(d){let _=0,S=[];d.forEach(z=>{let A=typeof z.data=="number"?[z.data]:z.data;if(A.length===0)return;let M=z.type===10?2:4,P,Y;z.type===10?(Y=A.length>4?16:A.length>2?8:A.length*M,P=A.length>4?16:M*A.length):(Y=A.length<=2?A.length*M:16,P=16),_=Math.ceil(_/Y)*Y,S.push(_);let F=z.type===10?8:4;_+=A.length>4?Math.ceil(A.length/F)*P:A.length*M});let v=16;_=Math.ceil(_/v)*v;let T=new ArrayBuffer(_);d.forEach((z,A)=>{let M=S[A],P=typeof z.data=="number"?[z.data]:z.data;if(z.type===6)new Int32Array(T,M,P.length).set(P);else if(z.type===12)new Uint32Array(T,M,P.length).set(P);else if(z.type===10)new Uint16Array(T,M,P.length).set(P);else if(z.type===1)new Float32Array(T,M,P.length).set(P);else throw new Error(`Unsupported uniform type: ${rt(z.type)}`)});let I=this.gpuDataManager.create(_,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(I.buffer,0,T,0,_),this.gpuDataManager.release(I.id),y={offset:0,size:_,buffer:I.buffer}}let m=this.programManager.normalizeDispatchGroupSize(l),w=m[1]===1&&m[2]===1,k=jl(e,t,w),b=this.programManager.getArtifact(k);if(b||(b=this.programManager.build(e,m),this.programManager.setArtifact(k,b),le("info",()=>`[artifact] key: ${k}, programName: ${e.name}`)),d&&b.uniformVariablesInfo){if(d.length!==b.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${b.uniformVariablesInfo.length}, got ${d.length} in program "${b.programInfo.name}".`);for(let _=0;_<d.length;_++){let S=d[_],v=S.type,T=typeof S.data=="number"?1:S.data.length,[I,z]=b.uniformVariablesInfo[_];if(v!==I||T!==z)throw new Error(`Uniform variable ${_} mismatch: expect type ${I} with size ${z}, got type ${v} with size ${T} in program "${b.programInfo.name}".`)}}if(le("info",()=>`[ProgramManager] run "${e.name}" (key=${k}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let _={kernelId:this.currentKernelId,programName:b.programInfo.name,inputTensorViews:t,outputTensorViews:f};this.pendingKernels.push(_),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(_)}return this.programManager.run(b,s,h,m,y),He(e.name),f}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,a){let i=_f.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let n={kernelType:e,kernelName:a,kernelEntry:i[0],attributes:[i[1],r]};this.kernels.set(t,n)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let a=this.kernels.get(e);if(!a)throw new Error(`kernel not created: ${e}`);let i=a.kernelType,n=a.kernelName,s=a.kernelEntry,o=a.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${n}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),le("info",()=>`[WebGPU] Start to run kernel "[${i}] ${n}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${n}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${i}] ${n}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,a){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let n=i.get(t),s=this.gpuDataManager.registerExternalBuffer(r,a,n);return i.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let a=await gi(this,e,t);return Pi(a.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){le("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){le("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){le("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let a=0;a<r;a++){let i=this.getComputePassEncoder(),n=e[a];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(n.computePipeline),i.setBindGroup(0,n.bindGroup),i.dispatchWorkgroups(...n.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[a]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),vf={};Ut(vf,{init:()=>xf});var Cr,Zl,xf,Ag=U(()=>{"use strict";J(),at(),ie(),Pm(),Cr=class kf{constructor(t,r,a,i){this.module=t,this.dataType=r,this.data=a,this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=C.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=C.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=C.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=C.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(C.size(t)!==C.size(this.dims))throw new Error("Invalid new shape");return new kf(this.module,this.dataType,this.data,t)}},Zl=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let a=e.PTR_SIZE,i=r/e.PTR_SIZE,n=a===4?"i32":"i64";this.opKernelContext=Number(e.getValue(a*i++,n));let s=Number(e.getValue(a*i++,n));this.outputCount=Number(e.getValue(a*i++,n)),this.customDataOffset=Number(e.getValue(a*i++,"*")),this.customDataSize=Number(e.getValue(a*i++,n));let o=[];for(let l=0;l<s;l++){let d=Number(e.getValue(a*i++,n)),c=Number(e.getValue(a*i++,"*")),f=Number(e.getValue(a*i++,n)),h=[];for(let y=0;y<f;y++)h.push(Number(e.getValue(a*i++,n)));o.push(new Cr(e,d,c,h))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,a=t?.outputs??[],i=(s,o,l)=>new Cr(this.module,o,this.output(s,l),l),n=(s,o)=>{let l=kt(s,o);if(!l)throw new Error(`Unsupported data type: ${s}`);let d=l>0?this.backend.gpuDataManager.create(l).id:0;return new Cr(this.module,s,d,o)};return this.backend.run(e,r,a,i,n,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let a=this.module.PTR_SIZE,i=a===4?"i32":"i64",n=this.module.stackAlloc((1+t.length)*a);this.module.setValue(n,t.length,i);for(let s=0;s<t.length;s++)this.module.setValue(n+a*(s+1),t[s],i);return this.module._JsepOutput(this.opKernelContext,e,n)}catch(a){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${a}`)}finally{this.module.stackRestore(r)}}},xf=async(e,t,r,a)=>{let i=t.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let n=(Cg(),nr(bf)).WebGpuBackend,s=new n;await s.initialize(r,a),i("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,l,d,c=!1)=>{if(c)le("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(l)}, size=${Number(d)}`),s.memcpy(Number(o),Number(l));else{le("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let f=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));s.upload(Number(l),f)}},async(o,l,d)=>{le("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${l}, size=${d}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(o,l,d)=>s.createKernel(o,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),o=>s.releaseKernel(o),(o,l,d,c)=>{le("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${l}`);let f=new Zl(t,s,Number(l));return s.computeKernel(Number(o),f,c)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let n=new Bd(r);i("webnn",[n,()=>n.reserveTensorId(),s=>n.releaseTensorId(s),async(s,o,l,d,c)=>n.ensureTensor(s,o,l,d,c),(s,o)=>{n.uploadTensor(s,o)},async(s,o)=>n.downloadTensor(s,o)])}}}),Ql,Qi,Xi,pt,Xl,li,Lr,Yi,Ji,di,en,tn,rn,Sf=U(()=>{"use strict";Nm(),Dm(),J(),Et(),Ri(),Id(),Ql=(e,t)=>{ge()._OrtInit(e,t)!==0&&fe("Can't initialize onnxruntime.")},Qi=async e=>{Ql(e.wasm.numThreads,Dr(e.logLevel))},Xi=async(e,t)=>{ge().asyncInit?.();{let r=(Ag(),nr(vf)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let a=e.webgpu.adapter;if(a){if(typeof a.limits!="object"||typeof a.features!="object"||typeof a.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let n=e.webgpu.forceFallbackAdapter;if(n!==void 0&&typeof n!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${n}"`);if(a=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:n}),!a)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",ge(),e,a)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",ge(),e)}}},pt=new Map,Xl=e=>{let t=ge(),r=t.stackSave();try{let a=t.PTR_SIZE,i=t.stackAlloc(2*a);t._OrtGetInputOutputCount(e,i,i+a)!==0&&fe("Can't get session input/output count.");let n=a===4?"i32":"i64";return[Number(t.getValue(i,n)),Number(t.getValue(i+a,n))]}finally{t.stackRestore(r)}},li=(e,t)=>{let r=ge(),a=r.stackSave(),i=0;try{let n=r.PTR_SIZE,s=r.stackAlloc(2*n);r._OrtGetInputOutputMetadata(e,t,s,s+n)!==0&&fe("Can't get session input/output metadata.");let o=Number(r.getValue(s,"*"));i=Number(r.getValue(s+n,"*"));let l=r.HEAP32[i/4];if(l===0)return[o,0];let d=r.HEAPU32[i/4+1],c=[];for(let f=0;f<d;f++){let h=Number(r.getValue(i+8+f*n,"*"));c.push(h!==0?r.UTF8ToString(h):Number(r.getValue(i+8+(f+d)*n,"*")))}return[o,l,c]}finally{r.stackRestore(a),i!==0&&r._OrtFree(i)}},Lr=e=>{let t=ge(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Yi=async(e,t)=>{let r,a,i=ge();Array.isArray(e)?[r,a]=e:e.buffer===i.HEAPU8.buffer?[r,a]=[e.byteOffset,e.byteLength]:[r,a]=Lr(e);let n=0,s=0,o=0,l=[],d=[],c=[];try{if([s,l]=await Td(t),t?.externalData&&i.mountExternalData){let v=[];for(let T of t.externalData){let I=typeof T=="string"?T:T.path;v.push(Di(typeof T=="string"?T:T.data).then(z=>{i.mountExternalData(I,z)}))}await Promise.all(v)}for(let v of t?.executionProviders??[])if((typeof v=="string"?v:v.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof v!="string"){let T=v,I=T?.context,z=T?.gpuDevice,A=T?.deviceType,M=T?.powerPreference;I?i.currentContext=I:z?i.currentContext=await i.webnnCreateMLContext(z):i.currentContext=await i.webnnCreateMLContext({deviceType:A,powerPreference:M})}else i.currentContext=await i.webnnCreateMLContext();break}n=await i._OrtCreateSession(r,a,s),i.webgpuOnCreateSession?.(n),n===0&&fe("Can't create a session."),i.jsepOnCreateSession?.(),i.currentContext&&(i.webnnRegisterMLContext(n,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[f,h]=Xl(n),y=!!t?.enableGraphCapture,m=[],w=[],k=[],b=[],_=[];for(let v=0;v<f;v++){let[T,I,z]=li(n,v);T===0&&fe("Can't get an input name."),d.push(T);let A=i.UTF8ToString(T);m.push(A),k.push(I===0?{name:A,isTensor:!1}:{name:A,isTensor:!0,type:rt(I),shape:z})}for(let v=0;v<h;v++){let[T,I,z]=li(n,v+f);T===0&&fe("Can't get an output name."),c.push(T);let A=i.UTF8ToString(T);w.push(A),b.push(I===0?{name:A,isTensor:!1}:{name:A,isTensor:!0,type:rt(I),shape:z});{if(y&&t?.preferredOutputLocation===void 0){_.push("gpu-buffer");continue}let M=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[A]??"cpu",P=i.webnnIsGraphOutput;if(M==="cpu"&&P&&P(n,A)){_.push("ml-tensor-cpu-output");continue}if(M!=="cpu"&&M!=="cpu-pinned"&&M!=="gpu-buffer"&&M!=="ml-tensor")throw new Error(`Not supported preferred output location: ${M}.`);if(y&&M!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${M}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);_.push(M)}}let S=null;return _.some(v=>v==="gpu-buffer"||v==="ml-tensor"||v==="ml-tensor-cpu-output")&&(o=i._OrtCreateBinding(n),o===0&&fe("Can't create IO binding."),S={handle:o,outputPreferredLocations:_,outputPreferredLocationsEncoded:_.map(v=>v==="ml-tensor-cpu-output"?"ml-tensor":v).map(v=>hi(v))}),pt.set(n,[n,d,c,S,y,!1]),[n,m,w,k,b]}catch(f){throw d.forEach(h=>i._OrtFree(h)),c.forEach(h=>i._OrtFree(h)),o!==0&&i._OrtReleaseBinding(o)!==0&&fe("Can't release IO binding."),n!==0&&i._OrtReleaseSession(n)!==0&&fe("Can't release session."),f}finally{i._free(r),s!==0&&i._OrtReleaseSessionOptions(s)!==0&&fe("Can't release session options."),l.forEach(f=>i._free(f)),i.unmountExternalData?.()}},Ji=e=>{let t=ge(),r=pt.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[a,i,n,s,o]=r;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&fe("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&fe("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),i.forEach(l=>t._OrtFree(l)),n.forEach(l=>t._OrtFree(l)),t._OrtReleaseSession(a)!==0&&fe("Can't release session."),pt.delete(e)},di=async(e,t,r,a,i,n,s=!1)=>{if(!e){t.push(0);return}let o=ge(),l=o.PTR_SIZE,d=e[0],c=e[1],f=e[3],h=f,y,m;if(d==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${n} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let b=e[2].gpuBuffer;m=kt(xt(d),c);{let _=o.jsepRegisterBuffer;if(!_)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');y=_(a,n,b,m)}}else if(f==="ml-tensor"){let b=e[2].mlTensor;m=kt(xt(d),c);let _=o.webnnRegisterMLTensor;if(!_)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');y=_(a,b,xt(d),c)}else{let b=e[2];if(Array.isArray(b)){m=l*b.length,y=o._malloc(m),r.push(y);for(let _=0;_<b.length;_++){if(typeof b[_]!="string")throw new TypeError(`tensor data at index ${_} is not a string`);o.setValue(y+_*l,Fe(b[_],r),"*")}}else{let _=o.webnnIsGraphInput,S=o.webnnIsGraphOutput;if(d!=="string"&&_&&S){let v=o.UTF8ToString(i);if(_(a,v)||S(a,v)){let T=xt(d);m=kt(T,c),h="ml-tensor";let I=o.webnnCreateTemporaryTensor,z=o.webnnUploadTensor;if(!I||!z)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let A=await I(a,T,c);z(A,new Uint8Array(b.buffer,b.byteOffset,b.byteLength)),y=A}else m=b.byteLength,y=o._malloc(m),r.push(y),o.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,m),y)}else m=b.byteLength,y=o._malloc(m),r.push(y),o.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,m),y)}}let w=o.stackSave(),k=o.stackAlloc(4*c.length);try{c.forEach((_,S)=>o.setValue(k+S*l,_,l===4?"i32":"i64"));let b=o._OrtCreateTensor(xt(d),y,m,k,c.length,hi(h));b===0&&fe(`Can't create tensor for input/output. session=${a}, index=${n}.`),t.push(b)}finally{o.stackRestore(w)}},en=async(e,t,r,a,i,n)=>{let s=ge(),o=s.PTR_SIZE,l=pt.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],c=l[1],f=l[2],h=l[3],y=l[4],m=l[5],w=t.length,k=a.length,b=0,_=[],S=[],v=[],T=[],I=s.stackSave(),z=s.stackAlloc(w*o),A=s.stackAlloc(w*o),M=s.stackAlloc(k*o),P=s.stackAlloc(k*o);try{[b,_]=Sd(n);for(let q=0;q<w;q++)await di(r[q],S,T,e,c[t[q]],t[q],y);for(let q=0;q<k;q++)await di(i[q],v,T,e,f[a[q]],w+a[q],y);for(let q=0;q<w;q++)s.setValue(z+q*o,S[q],"*"),s.setValue(A+q*o,c[t[q]],"*");for(let q=0;q<k;q++)s.setValue(M+q*o,v[q],"*"),s.setValue(P+q*o,f[a[q]],"*");if(h&&!m){let{handle:q,outputPreferredLocations:re,outputPreferredLocationsEncoded:Q}=h;if(c.length!==w)throw new Error(`input count from feeds (${w}) is expected to be always equal to model's input count (${c.length}).`);for(let V=0;V<w;V++){let oe=t[V];await s._OrtBindInput(q,c[oe],S[V])!==0&&fe(`Can't bind input[${V}] for session=${e}.`)}for(let V=0;V<k;V++){let oe=a[V];i[V]?.[3]?s._OrtBindOutput(q,f[oe],v[V],0)!==0&&fe(`Can't bind pre-allocated output[${V}] for session=${e}.`):s._OrtBindOutput(q,f[oe],0,Q[oe])!==0&&fe(`Can't bind output[${V}] to ${re[V]} for session=${e}.`)}pt.set(e,[d,c,f,h,y,!0])}s.jsepOnRunStart?.(d),s.webnnOnRunStart?.(d);let Y;h?Y=await s._OrtRunWithBinding(d,h.handle,k,M,b):Y=await s._OrtRun(d,A,z,w,P,k,M,b),Y!==0&&fe("failed to call OrtRun().");let F=[],ee=[];for(let q=0;q<k;q++){let re=Number(s.getValue(M+q*o,"*"));if(re===v[q]){F.push(i[q]);continue}let Q=s.stackSave(),V=s.stackAlloc(4*o),oe=!1,j,ue=0;try{s._OrtGetTensorData(re,V,V+o,V+2*o,V+3*o)!==0&&fe(`Can't access output tensor data on index ${q}.`);let N=o===4?"i32":"i64",W=Number(s.getValue(V,N));ue=s.getValue(V+o,"*");let te=s.getValue(V+o*2,"*"),O=Number(s.getValue(V+o*3,N)),ae=[];for(let ve=0;ve<O;ve++)ae.push(Number(s.getValue(te+ve*o,N)));s._OrtFree(te)!==0&&fe("Can't free memory for tensor dims.");let Ie=ae.reduce((ve,_e)=>ve*_e,1);j=rt(W);let Ne=h?.outputPreferredLocations[a[q]];if(j==="string"){if(Ne==="gpu-buffer"||Ne==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ve=[];for(let _e=0;_e<Ie;_e++){let Ae=s.getValue(ue+_e*o,"*"),Ce=s.getValue(ue+(_e+1)*o,"*"),ur=_e===Ie-1?void 0:Ce-Ae;ve.push(s.UTF8ToString(Ae,ur))}F.push([j,ae,ve,"cpu"])}else if(Ne==="gpu-buffer"&&Ie>0){let ve=s.jsepGetBuffer;if(!ve)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let _e=ve(ue),Ae=kt(W,Ie);if(Ae===void 0||!Mi(j))throw new Error(`Unsupported data type: ${j}`);oe=!0,F.push([j,ae,{gpuBuffer:_e,download:s.jsepCreateDownloader(_e,Ae,j),dispose:()=>{s._OrtReleaseTensor(re)!==0&&fe("Can't release tensor.")}},"gpu-buffer"])}else if(Ne==="ml-tensor"&&Ie>0){let ve=s.webnnEnsureTensor,_e=s.webnnIsGraphInputOutputTypeSupported;if(!ve||!_e)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(kt(W,Ie)===void 0||!Ni(j))throw new Error(`Unsupported data type: ${j}`);if(!_e(e,j,!1))throw new Error(`preferredLocation "ml-tensor" for ${j} output is not supported by current WebNN Context.`);let Ae=await ve(e,ue,W,ae,!1);oe=!0,F.push([j,ae,{mlTensor:Ae,download:s.webnnCreateMLTensorDownloader(ue,j),dispose:()=>{s.webnnReleaseTensorId(ue),s._OrtReleaseTensor(re)}},"ml-tensor"])}else if(Ne==="ml-tensor-cpu-output"&&Ie>0){let ve=s.webnnCreateMLTensorDownloader(ue,j)(),_e=F.length;oe=!0,ee.push((async()=>{let Ae=[_e,await ve];return s.webnnReleaseTensorId(ue),s._OrtReleaseTensor(re),Ae})()),F.push([j,ae,[],"cpu"])}else{let ve=Gr(j),_e=new ve(Ie);new Uint8Array(_e.buffer,_e.byteOffset,_e.byteLength).set(s.HEAPU8.subarray(ue,ue+_e.byteLength)),F.push([j,ae,_e,"cpu"])}}finally{s.stackRestore(Q),j==="string"&&ue&&s._free(ue),oe||s._OrtReleaseTensor(re)}}h&&!y&&(s._OrtClearBoundOutputs(h.handle)!==0&&fe("Can't clear bound outputs."),pt.set(e,[d,c,f,h,y,!1]));for(let[q,re]of await Promise.all(ee))F[q][2]=re;return F}finally{s.webnnOnRunEnd?.(d),s.stackRestore(I),S.forEach(Y=>s._OrtReleaseTensor(Y)),v.forEach(Y=>s._OrtReleaseTensor(Y)),T.forEach(Y=>s._free(Y)),b!==0&&s._OrtReleaseRunOptions(b),_.forEach(Y=>s._free(Y))}},tn=e=>{let t=ge(),r=pt.get(e);if(!r)throw new Error("invalid session id");let a=r[0],i=t._OrtEndProfiling(a);i===0&&fe("Can't get an profile file name."),t._OrtFree(i)},rn=e=>{let t=[];for(let r of e){let a=r[2];!Array.isArray(a)&&"buffer"in a&&t.push(a.buffer)}return t}}),ct,Ue,Bt,Yt,Jt,Ar,pi,Or,bt,$t,Yl,Tf,If,Ef,zf,Cf,Af,Of,Bf=U(()=>{"use strict";je(),Sf(),Et(),Oi(),ct=()=>!!he.wasm.proxy&&typeof document<"u",Bt=!1,Yt=!1,Jt=!1,Or=new Map,bt=(e,t)=>{let r=Or.get(e);r?r.push(t):Or.set(e,[t])},$t=()=>{if(Bt||!Yt||Jt||!Ue)throw new Error("worker not ready")},Yl=e=>{switch(e.data.type){case"init-wasm":Bt=!1,e.data.err?(Jt=!0,pi[1](e.data.err)):(Yt=!0,pi[0]()),Ar&&(URL.revokeObjectURL(Ar),Ar=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Or.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},Tf=async()=>{if(!Yt){if(Bt)throw new Error("multiple calls to 'initWasm()' detected.");if(Jt)throw new Error("previous call to 'initWasm()' failed.");if(Bt=!0,ct())return new Promise((e,t)=>{Ue?.terminate(),xd().then(([r,a])=>{try{Ue=a,Ue.onerror=n=>t(n),Ue.onmessage=Yl,pi=[e,t];let i={type:"init-wasm",in:he};!i.in.wasm.wasmPaths&&(r||fi)&&(i.in.wasm.wasmPaths={wasm:new URL("ort-wasm-simd-threaded.jsep.wasm",import.meta.url).href}),Ue.postMessage(i),Ar=r}catch(i){t(i)}},t)});try{await Bi(he.wasm),await Qi(he),Yt=!0}catch(e){throw Jt=!0,e}finally{Bt=!1}}},If=async e=>{if(ct())return $t(),new Promise((t,r)=>{bt("init-ep",[t,r]);let a={type:"init-ep",in:{epName:e,env:he}};Ue.postMessage(a)});await Xi(he,e)},Ef=async e=>ct()?($t(),new Promise((t,r)=>{bt("copy-from",[t,r]);let a={type:"copy-from",in:{buffer:e}};Ue.postMessage(a,[e.buffer])})):Lr(e),zf=async(e,t)=>{if(ct()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return $t(),new Promise((r,a)=>{bt("create",[r,a]);let i={type:"create",in:{model:e,options:{...t}}},n=[];e instanceof Uint8Array&&n.push(e.buffer),Ue.postMessage(i,n)})}else return Yi(e,t)},Cf=async e=>{if(ct())return $t(),new Promise((t,r)=>{bt("release",[t,r]);let a={type:"release",in:e};Ue.postMessage(a)});Ji(e)},Af=async(e,t,r,a,i,n)=>{if(ct()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return $t(),new Promise((s,o)=>{bt("run",[s,o]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:a,options:n}};Ue.postMessage(d,rn(l))})}else return en(e,t,r,a,i,n)},Of=async e=>{if(ct())return $t(),new Promise((t,r)=>{bt("end-profiling",[t,r]);let a={type:"end-profiling",in:e};Ue.postMessage(a)});tn(e)}}),ci,Jl,Rf,Og=U(()=>{"use strict";je(),Bf(),J(),Ai(),Id(),ci=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Jl=e=>{switch(e[3]){case"cpu":return new Re(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Mi(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:a,dispose:i}=e[2];return Re.fromGpuBuffer(r,{dataType:t,dims:e[1],download:a,dispose:i})}case"ml-tensor":{let t=e[0];if(!Ni(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:a,dispose:i}=e[2];return Re.fromMLTensor(r,{dataType:t,dims:e[1],download:a,dispose:i})}default:throw new Error(`invalid data location: ${e[3]}`)}},Rf=class{async fetchModelAndCopyToWasmMemory(e){return Ef(await Di(e))}async loadModel(e,t){Ye();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await zf(r,t),He()}async dispose(){return Cf(this.sessionId)}async run(e,t,r){Ye();let a=[],i=[];Object.entries(e).forEach(f=>{let h=f[0],y=f[1],m=this.inputNames.indexOf(h);if(m===-1)throw new Error(`invalid input '${h}'`);a.push(y),i.push(m)});let n=[],s=[];Object.entries(t).forEach(f=>{let h=f[0],y=f[1],m=this.outputNames.indexOf(h);if(m===-1)throw new Error(`invalid output '${h}'`);n.push(y),s.push(m)});let o=a.map((f,h)=>ci(f,()=>`input "${this.inputNames[i[h]]}"`)),l=n.map((f,h)=>f?ci(f,()=>`output "${this.outputNames[s[h]]}"`):null),d=await Af(this.sessionId,i,o,s,l,r),c={};for(let f=0;f<d.length;f++)c[this.outputNames[s[f]]]=n[f]??Jl(d[f]);return He(),c}startProfiling(){}endProfiling(){Of(this.sessionId)}}}),Mf={};Ut(Mf,{OnnxruntimeWebAssemblyBackend:()=>Ei,initializeFlags:()=>Ii,wasmBackend:()=>Nf});var Ii,Ei,Nf,Bg=U(()=>{"use strict";je(),Bf(),Og(),Ii=()=>{(typeof he.wasm.initTimeout!="number"||he.wasm.initTimeout<0)&&(he.wasm.initTimeout=0);let e=he.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),he.wasm.simd=!1),typeof he.wasm.proxy!="boolean"&&(he.wasm.proxy=!1),typeof he.wasm.trace!="boolean"&&(he.wasm.trace=!1),typeof he.wasm.numThreads!="number"||!Number.isInteger(he.wasm.numThreads)||he.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)he.wasm.numThreads=1;else{let t=typeof navigator>"u"?_m("node:os").cpus().length:navigator.hardwareConcurrency;he.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Ei=class{async init(e){Ii(),await Tf(),await If(e)}async createInferenceSessionHandler(e,t){let r=new Rf;return await r.loadModel(e,t),r}},Nf=new Ei});je();je();je();var Rg="1.22.0";{let e=(Bg(),nr(Mf)).wasmBackend;Rt("webgpu",e,5),Rt("webnn",e,5),Rt("cpu",e,10),Rt("wasm",e,10)}Object.defineProperty(he.versions,"web",{value:Rg,enumerable:!0});function Uf(e,t=null){let r=e.length;if(r&r-1)throw new Error("FFT size must be power of 2");let a=new Float32Array(e),i=t?new Float32Array(t):new Float32Array(r),n=0;for(let s=0;s<r-1;s++){s<n&&([a[s],a[n]]=[a[n],a[s]],[i[s],i[n]]=[i[n],i[s]]);let o=r>>1;for(;o<=n;)n-=o,o>>=1;n+=o}for(let s=2;s<=r;s<<=1){let o=s>>1,l=-2*Math.PI/s;for(let d=0;d<r;d+=s){let c=1,f=0;for(let h=0;h<o;h++){let y=d+h,m=y+o,w=c*a[m]-f*i[m],k=c*i[m]+f*a[m];a[m]=a[y]-w,i[m]=i[y]-k,a[y]+=w,i[y]+=k;let b=c;c=b*Math.cos(l)-f*Math.sin(l),f=b*Math.sin(l)+f*Math.cos(l)}}}return{real:a,imag:i}}function Ng(e,t){let r=e.length,a=new Float32Array(r);for(let n=0;n<r;n++)a[n]=-t[n];let i=Uf(e,a);for(let n=0;n<r;n++)i.real[n]/=r,i.imag[n]=-i.imag[n]/r;return i}function Pf(e){let t=new Float32Array(e);for(let r=0;r<e;r++)t[r]=.5*(1-Math.cos(2*Math.PI*r/e));return t}function Dg(e,t,r){let a=e.length,i=a+t+r,n=new Float32Array(i);for(let s=0;s<a;s++)n[t+s]=e[s];for(let s=0;s<t;s++){let o=t-s;n[s]=n[o]}for(let s=0;s<r;s++){let o=t+a+s,l=t+a-2-s;n[o]=n[l]}return n}function qf(e,t,r="constant"){let a=e.shape[e.shape.length-1],[i,n]=t,s=e.data,o=e.shape,l=i,d=n;if(r==="reflect"){let k=Math.max(i,n);if(a<=k){let b=k-a+1,_=Math.min(n,b),S=b-_,v=[...o];v[v.length-1]=a+S+_;let T=v.reduce((M,P)=>M*P,1),I=new Float32Array(T),z=T/v[v.length-1],A=v[v.length-1];for(let M=0;M<z;M++)for(let P=0;P<a;P++)I[M*A+S+P]=s[M*a+P];s=I,o=v,l=i-S,d=n-_}}let c=o[o.length-1],f=[...o];f[f.length-1]=c+l+d;let h=f.reduce((k,b)=>k*b,1),y=new Float32Array(h),m=h/f[f.length-1],w=f[f.length-1];for(let k=0;k<m;k++){let b=k*c,_=k*w;if(r==="constant")for(let S=0;S<c;S++)y[_+l+S]=s[b+S];else if(r==="reflect"){let S=s.slice(b,b+c),v=Dg(S,l,d);for(let T=0;T<w;T++)y[_+T]=v[T]}}return{data:y,shape:f}}function Ug(e,t,r,a,i=!0,n=!0,s="reflect"){let[o,l]=e.shape,d=e.data,c=l;if(n){let k=Math.floor(t/2),b=qf(e,[k,k],s);d=b.data,c=b.shape[b.shape.length-1]}let f=Math.floor((c-t)/r)+1,h=Math.floor(t/2)+1,y=new Float32Array(o*h*f),m=new Float32Array(o*h*f),w=i?1/Math.sqrt(t):1;for(let k=0;k<o;k++)for(let b=0;b<f;b++){let _=b*r,S=new Float32Array(t);for(let I=0;I<t;I++){let z=k*c+_+I;S[I]=d[z]*a[I]*w}let{real:v,imag:T}=Uf(S);for(let I=0;I<h;I++){let z=k*h*f+I*f+b;y[z]=v[I],m[z]=T[I]}}return{real:{data:y,shape:[o,h,f]},imag:{data:m,shape:[o,h,f]}}}function Pg(e,t=512,r=null){r===null&&(r=Math.floor(t/4));let a=e.shape,i=a[a.length-1],n=e.data.length/i,s={data:e.data,shape:[n,i]},o=Pf(t),l=Ug(s,t,r,o,!0,!0,"reflect"),[d,c,f]=l.real.shape,h=[...a.slice(0,-1),c,f];return{real:{data:l.real.data,shape:h},imag:{data:l.imag.data,shape:h}}}function Wf(e){let r=e.shape[e.shape.length-1],a=Math.ceil(r/1024),i=Math.floor(1024/2)*3,n=i+a*1024-r,s=qf(e,[i,n],"reflect"),o=Pg(s,4096,1024),l=o.real.shape,d=l[l.length-2]-1,c=l[l.length-1],f=o.real.data.length/(l[l.length-2]*c),h=[...l];h[h.length-2]=d;let y=h.reduce((v,T)=>v*T,1),m=new Float32Array(y),w=new Float32Array(y);for(let v=0;v<f;v++)for(let T=0;T<d;T++)for(let I=0;I<c;I++){let z=v*l[l.length-2]*c+T*c+I,A=v*d*c+T*c+I;m[A]=o.real.data[z],w[A]=o.imag.data[z]}let k=[...h];k[k.length-1]=a;let b=k.reduce((v,T)=>v*T,1),_=new Float32Array(b),S=new Float32Array(b);for(let v=0;v<f;v++)for(let T=0;T<d;T++)for(let I=0;I<a;I++){let z=v*d*c+T*c+(2+I),A=v*d*a+T*a+I;_[A]=m[z],S[A]=w[z]}return{real:{data:_,shape:k},imag:{data:S,shape:k}}}function Lf(e){let[t,r,a,i]=e.real.shape,n=[t,r*2,a,i],s=t*r*2*a*i,o=new Float32Array(s);for(let l=0;l<t;l++)for(let d=0;d<r;d++)for(let c=0;c<a;c++)for(let f=0;f<i;f++){let h=l*r*a*i+d*a*i+c*i+f,y=l*(r*2)*a*i+d*2*a*i+c*i+f;o[y]=e.real.data[h];let m=l*(r*2)*a*i+(d*2+1)*a*i+c*i+f;o[m]=e.imag.data[h]}return{data:o,shape:n}}function qg(e,t,r,a,i=!0,n=null,s=!0){let[o,l,d]=e.real.shape;if(2*l-2!==t)throw new Error(`Expected freqs = nFft/2 + 1, got freqs=${l}, nFft=${t}`);let c;n!==null?c=n:c=t+(d-1)*r,s&&(c-=t);let f=new Float32Array(o*c),h=new Float32Array(o*c),y=i?Math.sqrt(t):1;for(let m=0;m<o;m++)for(let w=0;w<d;w++){let k=new Float32Array(t),b=new Float32Array(t);for(let v=0;v<l;v++){let T=m*l*d+v*d+w;k[v]=e.real.data[T],b[v]=e.imag.data[T]}for(let v=l;v<t;v++){let T=t-v;k[v]=k[T],b[v]=-b[T]}let _=Ng(k,b),S=w*r-(s?t/2:0);for(let v=0;v<t;v++){let T=S+v;if(T>=0&&T<c){let I=m*c+T;f[I]+=_.real[v]*a[v]*y,h[I]+=a[v]*a[v]}}}for(let m=0;m<f.length;m++)h[m]>1e-8&&(f[m]/=h[m]);return{data:f,shape:[o,c]}}function Wg(e,t=null,r=null){let a=e.real.shape,i=a[a.length-2],n=a[a.length-1],s=2*i-2;t===null&&(t=Math.floor(s/4));let o=e.real.data.length/(i*n),l={real:{data:e.real.data,shape:[o,i,n]},imag:{data:e.imag.data,shape:[o,i,n]}},d=Pf(s),c=qg(l,s,t,d,!0,r,!0),f=c.shape[1],h=[...a.slice(0,-2),f];return{data:c.data,shape:h}}function Df(e,t,r){let a=e.real.shape,i=a.length,[n,s]=t,[o,l]=r,d=a[i-2],c=a[i-1],f=d+n+s,h=c+o+l,y=[...a];y[i-2]=f,y[i-1]=h;let m=y.reduce((_,S)=>_*S,1),w=new Float32Array(m),k=new Float32Array(m),b=m/(f*h);for(let _=0;_<b;_++)for(let S=0;S<d;S++)for(let v=0;v<c;v++){let T=_*d*c+S*c+v,I=_*f*h+(S+n)*h+(v+o);w[I]=e.real.data[T],k[I]=e.imag.data[T]}return{real:{data:w,shape:y},imag:{data:k,shape:y}}}function Vf(e,t){let a=Df(e,[0,1],[0,0]);a=Df(a,[0,0],[2,2]);let i=Math.floor(1024/2)*3,n=1024*Math.ceil(t/1024)+2*i,s=Wg(a,1024,n),o=s.shape,l=o.length-1,d=o[l],c=[...o];c[l]=t;let f=c.reduce((m,w)=>m*w,1),h=new Float32Array(f),y=f/t;for(let m=0;m<y;m++)for(let w=0;w<t;w++){let k=m*d+i+w,b=m*t+w;h[b]=s.data[k]}return{data:h,shape:c}}function Gf(e){let t=e.length,r=e[0].length;if(t===1)return e[0];{let a=!0;for(let i=1;i<t;i++)if(e[i].buffer!==e[0].buffer||e[i].byteOffset!==e[i-1].byteOffset+e[i-1].length*4){a=!1;break}if(a)return new Float32Array(e[0].buffer,e[0].byteOffset,t*r);{let i=new Float32Array(t*r);for(let n=0;n<t;n++)i.set(e[n],n*r);return i}}}var an=class{tensor;offset;length;constructor(t,r=0,a=null){let i=t.shape[t.shape.length-1];if(r<0)throw new Error("offset must be >= 0");if(r>=i)throw new Error("offset must be < totalLength");a===null?a=i-r:a=Math.min(i-r,a),this.tensor=t,this.offset=r,this.length=a}padded(t){let r=t-this.length,a=this.tensor.shape[this.tensor.shape.length-1];if(r<0)throw new Error("targetLength must be >= length");let i=this.offset-Math.floor(r/2),n=i+t,s=Math.max(0,i),o=Math.min(a,n),l=s-i,d=n-o,c=[...this.tensor.shape],f=c.length-1;c[f]=t;let h=c.reduce((b,_)=>b*_,1),y=new Float32Array(h),m=o-s,w=c[f],k=h/w;for(let b=0;b<k;b++){let _=b*a+s,S=b*w+l;for(let v=0;v<m;v++)y[S+v]=this.tensor.data[_+v]}if(y.length!==h)throw new Error(`Output size mismatch: ${y.length} !== ${h}`);return{data:y,shape:c}}};function Lg(e,t){let r=e.shape[e.shape.length-1];if(r>=t)return e;let a=[...e.shape];a[a.length-1]=t;let i=a.reduce((o,l)=>o*l,1),n=new Float32Array(i),s=i/t;for(let o=0;o<s;o++){let l=o*r,d=o*t;for(let c=0;c<r;c++)n[d+c]=e.data[l+c]}return{data:n,shape:a}}function Vg(e){let[t,r,a,i,n]=e.shape,s=a/2,o=[t,r,s,i,n],l=o.reduce((f,h)=>f*h,1),d=new Float32Array(l),c=new Float32Array(l);for(let f=0;f<t;f++)for(let h=0;h<r;h++)for(let y=0;y<s;y++)for(let m=0;m<i;m++)for(let w=0;w<n;w++){let k=y*2,b=y*2+1,_=f*r*a*i*n+h*a*i*n+k*i*n+m*n+w,S=f*r*a*i*n+h*a*i*n+b*i*n+m*n+w,v=f*r*s*i*n+h*s*i*n+y*i*n+m*n+w;d[v]=e.data[_],c[v]=e.data[S]}return{real:{data:d,shape:o},imag:{data:c,shape:o}}}function Gg(e,t){if(e.shape.length!==t.shape.length||!e.shape.every((a,i)=>a===t.shape[i]))throw new Error("Tensor shapes must match for addition");let r=new Float32Array(e.data.length);for(let a=0;a<e.data.length;a++)r[a]=e.data[a]+t.data[a];return{data:r,shape:[...e.shape]}}function Fg(e,t){let r=e.shape,a=r[r.length-1];if(t>=a)return e;let i=[...r];i[i.length-1]=t;let n=i.reduce((l,d)=>l*d,1),s=new Float32Array(n),o=n/t;for(let l=0;l<o;l++)for(let d=0;d<t;d++){let c=l*a+d,f=l*t+d;s[f]=e.data[c]}return{data:s,shape:i}}function Hg(e,t){let r=e.shape[e.shape.length-1],i=r-t;if(i<0)throw new Error(`tensor must be larger than reference. Delta is ${i}.`);if(i===0)return e;let n=Math.floor(i/2),s=r-(i-Math.floor(i/2)),o=[...e.shape],l=s-n;o[o.length-1]=l;let d=o.reduce((h,y)=>h*y,1),c=new Float32Array(d),f=d/l;for(let h=0;h<f;h++)for(let y=0;y<l;y++){let m=h*r+n+y,w=h*l+y;c[w]=e.data[m]}return{data:c,shape:o}}async function jg(e,t){let r=t.length,a=e.validLength(r),i=t.padded(a),n=Math.floor(e.segment*e.samplerate),s=Lg(i,n),o=Wf(s),l=Lf(o),{outX:d,outXt:c}=await e.forward(i,l),f=Vg(d),h=Vf(f,n),y=Gg(c,h),m=Fg(y,a);return Hg(m,r)}async function Kg(e,t,r,a=.25){let[i,n,s]=t.shape,o=e.sources.length,l=new Float32Array(i*o*n*s),d=new Float32Array(s),c=Math.floor(e.samplerate*e.segment),f=Math.floor((1-a)*c),h=new Float32Array(c);for(let b=0;b<Math.floor(c/2)+1;b++)h[b]=b+1;for(let b=Math.floor(c/2)+1;b<c;b++)h[b]=c-b;let y=h.reduce((b,_)=>Math.max(b,_),-1/0);for(let b=0;b<c;b++)h[b]/=y;let m=Math.ceil(s/f);r?.(0,m);let w=0,k=0;for(;w<s;){let b=new an(t,w,c),_=await jg(e,b),S=_.shape[_.shape.length-1];for(let v=0;v<i;v++)for(let T=0;T<o;T++)for(let I=0;I<n;I++)for(let z=0;z<S;z++){let A=v*o*n*s+T*n*s+I*s+w+z,M=v*o*n*S+T*n*S+I*S+z;l[A]+=h[z]*_.data[M]}for(let v=0;v<S;v++)d[w+v]+=h[v];w+=f,k++,r?.(k,m)}for(let b=0;b<l.length;b++){let _=b%s;l[b]/=d[_]}return{data:l,shape:[i,o,n,s]}}async function Zg(e,t,r,a=.25){return await Kg(e,t,r,a)}async function Ff(e,t,r,a=.25){let{channelData:i,sampleRate:n}=t,s=i.length,o=i[0].length,d={data:Gf(t.channelData),shape:[1,s,o]},c=await Zg(e,d,r,a),[f,h,y,m]=c.shape,w={};for(let k=0;k<h;k++){let b=e.sources[k],_=[];for(let S=0;S<s;S++){let v=k*s*m+S*m,T=new Float32Array(c.data.buffer,v*4,m);_.push(T)}w[b]={channelData:_,sampleRate:n}}return w}var Qg="vocal-remover-v1",nn={wasm:["ort/ort-wasm.0.wasm","ort/ort-wasm.1.wasm"],graph:["model/htdemucs.graph.wasm"],weights:["model/w16.00.wasm","model/w16.01.wasm","model/w16.02.wasm","model/w16.03.wasm","model/w16.04.wasm","model/w16.05.wasm"]},Hf="",or=null,on="",mt=(e,t)=>self.postMessage(e,t||[]);async function Xg(e){let t=null;try{t=await caches.open(Qg)}catch{}if(t)try{let i=await t.match(e);if(i)return new Uint8Array(await i.arrayBuffer())}catch{}let r=await fetch(e);if(!r.ok)throw new Error(`Kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c ${e} (HTTP ${r.status})`);let a=new Uint8Array(await r.arrayBuffer());if(t)try{await t.put(e,new Response(a.slice()))}catch{}return a}async function sn(e,t){let r=[];for(let s of e){let o=await Xg(new URL(s,Hf).href);r.push(o),t(o.byteLength)}let a=r.reduce((s,o)=>s+o.byteLength,0),i=new Uint8Array(a),n=0;for(let s of r)i.set(s,n),n+=s.byteLength;return i}function Yg(e){let t=new Float32Array(65536);for(let i=0;i<65536;i++){let n=i&32768?-1:1,s=i>>10&31,o=i&1023;t[i]=s===0?n*o*2**-24:s===31?o?NaN:n*(1/0):n*(1+o/1024)*2**(s-15)}let r=new Uint16Array(e.buffer,e.byteOffset,e.byteLength/2),a=new Float32Array(r.length);for(let i=0;i<r.length;i++)a[i]=t[r[i]];return new Uint8Array(a.buffer)}async function Jg(){try{let e=await navigator.gpu?.requestAdapter();if(!e||e.isFallbackAdapter||e.info?.isFallbackAdapter)return!1;let t=e.info||{};return!/swiftshader|llvmpipe|software/i.test(`${t.vendor} ${t.architecture} ${t.description}`)}catch{return!1}}var e0=112197179;async function t0(e){let t=0,r=o=>{t+=o,mt({type:"load",done:t,total:e0})};he.wasm.wasmBinary=(await sn(nn.wasm,r)).buffer,he.wasm.numThreads=self.crossOriginIsolated?Math.min(4,navigator.hardwareConcurrency||1):1,he.wasm.proxy=!1;let a=await sn(nn.graph,r),i=Yg(await sn(nn.weights,r));mt({type:"status",text:"\u0110ang kh\u1EDFi t\u1EA1o m\xF4 h\xECnh\u2026"});let n=[];e&&await Jg()&&n.push("webgpu"),n.push("wasm");let s;for(let o of n)try{or=await Vr.create(a,{executionProviders:[o],externalData:[{path:"weights.bin",data:i}],graphOptimizationLevel:"all"}),on=o;break}catch(l){s=l}if(!or)throw s;mt({type:"ready",backend:on})}var r0={sources:["drums","bass","other","vocals"],audioChannels:2,samplerate:44100,segment:7.8,validLength(e){let t=Math.floor(this.segment*this.samplerate);if(t<e)throw new Error(`Segment ${e} > ${t}`);return t},async forward(e,t){let[r,a]=or.inputNames,i=await or.run({[r]:new Re("float32",e.data,e.shape),[a]:new Re("float32",t.data,t.shape)}),[n,s]=or.outputNames;return{outX:{data:i[n].data,shape:i[n].dims},outXt:{data:i[s].data,shape:i[s].dims}}}};async function a0(e,t){let r=performance.now(),a=await Ff(r0,{channelData:e,sampleRate:44100},(o,l)=>mt({type:"progress",step:o,total:l,elapsed:performance.now()-r}),t),i=e[0].length,n=a.vocals.channelData.map(o=>new Float32Array(o)),s=[0,1].map(o=>{let l=new Float32Array(i);for(let d of["drums","bass","other"]){let c=a[d].channelData[o];for(let f=0;f<i;f++)l[f]+=c[f]}return l});mt({type:"done",vocals:n,inst:s,seconds:(performance.now()-r)/1e3,backend:on},[...n.map(o=>o.buffer),...s.map(o=>o.buffer)])}self.addEventListener("unhandledrejection",e=>mt({type:"error",message:String(e.reason?.message||e.reason)}));self.addEventListener("error",e=>mt({type:"error",message:String(e.message)}));self.onmessage=async({data:e})=>{try{e.type==="init"?(Hf=e.base,await t0(e.preferGpu!==!1)):e.type==="run"&&await a0(e.channelData,e.overlap??.25)}catch(t){mt({type:"error",message:String(t?.message||t)})}};
/*! Bundled license information:

onnxruntime-web/dist/ort.webgpu.bundle.min.mjs:
  (*!
   * ONNX Runtime Web v1.22.0
   * Copyright (c) Microsoft Corporation. All rights reserved.
   * Licensed under the MIT License.
   *)

onnxruntime-web/dist/ort.webgpu.bundle.min.mjs:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)
*/
