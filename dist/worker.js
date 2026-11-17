var yt=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var Ba=Object.defineProperty,$m=Object.getOwnPropertyDescriptor,vm=Object.getOwnPropertyNames,xm=Object.prototype.hasOwnProperty,km=(e=>typeof yt<"u"?yt:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof yt<"u"?yt:t)[r]}):e)(function(e){if(typeof yt<"u")return yt.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),P=(e,t)=>()=>(e&&(t=e(e=0)),t),Ut=(e,t)=>{for(var r in t)Ba(e,r,{get:t[r],enumerable:!0})},Sm=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of vm(t))!xm.call(e,a)&&a!==r&&Ba(e,a,{get:()=>t[a],enumerable:!(i=$m(t,a))||i.enumerable});return e},sr=e=>Sm(Ba({},"__esModule",{value:!0}),e),Gt,ct,Nt,Ss,ad,nd=P(()=>{"use strict";Gt=new Map,ct=[],Nt=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=Gt.get(e);if(i===void 0)Gt.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let a=ct.indexOf(e);a!==-1&&ct.splice(a,1);for(let n=0;n<ct.length;n++)if(Gt.get(ct[n]).priority<=r){ct.splice(n,0,e);return}ct.push(e)}return}throw new TypeError("not a valid backend")},Ss=async e=>{let t=Gt.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},ad=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),i=r.length===0?ct:r,a,n=[],s=new Set;for(let l of i){let d=await Ss(l);typeof d=="string"?n.push({name:l,err:d}):(a||(a=d),a===d&&s.add(l))}if(!a)throw new Error(`no available backend found. ERR: ${n.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of n)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let u=t.filter(l=>s.has(typeof l=="string"?l:l.name));return[a,new Proxy(e,{get:(l,d)=>d==="executionProviders"?u:Reflect.get(l,d)})]}}),Tm=P(()=>{"use strict";nd()}),sd,Im=P(()=>{"use strict";sd="1.22.0"}),_i,qe,od=P(()=>{"use strict";Im(),_i="warning",qe={wasm:{},webgl:{},webgpu:{},versions:{common:sd},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);_i=e}},get logLevel(){return _i}},Object.defineProperty(qe,"logLevel",{enumerable:!0})}),fe,Em=P(()=>{"use strict";od(),fe=qe}),ud,ld,zm=P(()=>{"use strict";ud=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let a,n;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[3]):(a=e.dims[3],n=e.dims[2]);let s=t?.format!==void 0?t.format:"RGB",u=t?.norm,l,d;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],0],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?d=[0,0,0,0]:typeof u.bias=="number"?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(d[3]=u.bias[3]));let c=n*a,f=0,h=c,_=c*2,g=-1;s==="RGBA"?(f=0,h=c,_=c*2,g=c*3):s==="RGB"?(f=0,h=c,_=c*2):s==="RBG"&&(f=0,_=c,h=c*2);for(let w=0;w<n;w++)for(let x=0;x<a;x++){let $=(e.data[f++]-d[0])*l[0],b=(e.data[h++]-d[1])*l[1],S=(e.data[_++]-d[2])*l[2],k=g===-1?255:(e.data[g++]-d[3])*l[3];i.fillStyle="rgba("+$+","+b+","+S+","+k+")",i.fillRect(x,w,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},ld=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let a,n,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[1],s=e.dims[3]):(a=e.dims[3],n=e.dims[2],s=e.dims[1]);let u=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t?.norm,d,c;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?c=[0,0,0,0]:typeof l.bias=="number"?c=[l.bias,l.bias,l.bias,l.bias]:(c=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(c[3]=l.bias[3]));let f=n*a;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let h=4,_=0,g=1,w=2,x=3,$=0,b=f,S=f*2,k=-1;u==="RGBA"?($=0,b=f,S=f*2,k=f*3):u==="RGB"?($=0,b=f,S=f*2):u==="RBG"&&($=0,S=f,b=f*2),i=r.createImageData(a,n);for(let I=0;I<n*a;_+=h,g+=h,w+=h,x+=h,I++)i.data[_]=(e.data[$++]-c[0])*d[0],i.data[g]=(e.data[b++]-c[1])*d[1],i.data[w]=(e.data[S++]-c[2])*d[2],i.data[x]=k===-1?255:(e.data[k++]-c[3])*d[3]}else throw new Error("Can not access image data");return i}}),xr,dd,pd,cd,fd,hd,Cm=P(()=>{"use strict";Ra(),xr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,a=t.norm??{mean:255,bias:0},n,s;typeof a.mean=="number"?n=[a.mean,a.mean,a.mean,a.mean]:n=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?s=[a.bias,a.bias,a.bias,a.bias]:s=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let u=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*i,c=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),f=4,h=0,_=1,g=2,w=3,x=0,$=d,b=d*2,S=-1;u==="RGB"&&(f=3,h=0,_=1,g=2,w=-1),l==="RGBA"?S=d*3:l==="RBG"?(x=0,b=d,$=d*2):l==="BGR"&&(b=0,$=d,x=d*2);for(let k=0;k<d;k++,h+=f,g+=f,_+=f,w+=f)c[x++]=(e[h]+s[0])/n[0],c[$++]=(e[_]+s[1])/n[1],c[b++]=(e[g]+s[2])/n[2],S!==-1&&w!==-1&&(c[S++]=(e[w]+s[3])/n[3]);return l==="RGBA"?new Re("float32",c,[1,4,r,i]):new Re("float32",c,[1,3,r,i])},dd=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,n=typeof e=="string",s,u=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(r){let c=l();c.width=e.width,c.height=e.height;let f=d(c);if(f!=null){let h=e.height,_=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(h=t.resizedHeight,_=t.resizedWidth),t!==void 0){if(u=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=h,u.width=_}else u.tensorFormat="RGBA",u.height=h,u.width=_;f.drawImage(e,0,0),s=f.getImageData(0,0,_,h).data}else throw new Error("Can not access image data")}else if(i){let c,f;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,f=t.resizedWidth):(c=e.height,f=e.width),t!==void 0&&(u=t),u.format="RGBA",u.height=c,u.width=f,t!==void 0){let h=l();h.width=f,h.height=c;let _=d(h);if(_!=null)_.putImageData(e,0,0),s=_.getImageData(0,0,f,c).data;else throw new Error("Can not access image data")}else s=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=l();c.width=e.width,c.height=e.height;let f=d(c);if(f!=null){let h=e.height,_=e.width;return f.drawImage(e,0,0,_,h),s=f.getImageData(0,0,_,h).data,u.height=h,u.width=_,xr(s,u)}else throw new Error("Can not access image data")}else{if(n)return new Promise((c,f)=>{let h=l(),_=d(h);if(!e||!_)return f();let g=new Image;g.crossOrigin="Anonymous",g.src=e,g.onload=()=>{h.width=g.width,h.height=g.height,_.drawImage(g,0,0,h.width,h.height);let w=_.getImageData(0,0,h.width,h.height);u.height=h.height,u.width=h.width,c(xr(w.data,u))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return xr(s,u);throw new Error("Input data provided is not supported - aborted tensor creation")},pd=(e,t)=>{let{width:r,height:i,download:a,dispose:n}=t,s=[1,i,r,4];return new Re({location:"texture",type:"float32",texture:e,dims:s,download:a,dispose:n})},cd=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new Re({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:a,dispose:n})},fd=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new Re({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:a,dispose:n})},hd=(e,t,r)=>new Re({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),xt,tr,yi,md,Om=P(()=>{"use strict";xt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),tr=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),yi=!1,md=()=>{if(!yi){yi=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(xt.set("int64",BigInt64Array),tr.set(BigInt64Array,"int64")),t&&(xt.set("uint64",BigUint64Array),tr.set(BigUint64Array,"uint64")),i?(xt.set("float16",r),tr.set(r,"float16")):xt.set("float16",Uint16Array)}}}),gd,_d,Am=P(()=>{"use strict";Ra(),gd=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},_d=(e,t)=>{switch(e.location){case"cpu":return new Re(e.type,e.data,t);case"cpu-pinned":return new Re({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Re({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Re({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Re({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Re,Ra=P(()=>{"use strict";zm(),Cm(),Om(),Am(),Re=class{constructor(e,t,r){md();let i,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,a=e.dims,e.location){case"cpu-pinned":{let s=xt.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,u;if(typeof e=="string")if(i=e,u=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let l=xt.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?s=l.from(t,BigInt):s=l.from(t)}else if(t instanceof l)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${l}`)}else if(u=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")i="string",s=e;else if(l==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let l=tr.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=l,s=e}if(u===void 0)u=[s.length];else if(!Array.isArray(u))throw new TypeError("A tensor's dims must be a number array");a=u,this.cpuData=s,this.dataLocation="cpu"}let n=gd(a);if(this.cpuData&&n!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(n/2)===this.cpuData.length))throw new Error(`Tensor's size(${n}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=a,this.size=n}static async fromImage(e,t){return dd(e,t)}static fromTexture(e,t){return pd(e,t)}static fromGpuBuffer(e,t){return cd(e,t)}static fromMLTensor(e,t){return fd(e,t)}static fromPinnedBuffer(e,t,r){return hd(e,t,r)}toDataURL(e){return ud(this,e)}toImageData(e){return ld(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return _d(this,e)}}}),Ne,yd=P(()=>{"use strict";Ra(),Ne=Re}),Pr,bi,Je,je,bd=P(()=>{"use strict";od(),Pr=(e,t)=>{(typeof qe.trace>"u"?!qe.wasm.trace:!qe.trace)||console.timeStamp(`${e}::ORT::${t}`)},bi=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],i=!1;for(let a=0;a<r.length;a++){if(i&&!r[a].includes("TRACE_FUNC")){let n=`FUNC_${e}::${r[a].trim().split(" ")[1]}`;t&&(n+=`::${t}`),Pr("CPU",n);return}r[a].includes("TRACE_FUNC")&&(i=!0)}},Je=e=>{(typeof qe.trace>"u"?!qe.wasm.trace:!qe.trace)||bi("BEGIN",e)},je=e=>{(typeof qe.trace>"u"?!qe.wasm.trace:!qe.trace)||bi("END",e)}}),wd,Bm=P(()=>{"use strict";nd(),yd(),bd(),wd=class $d{constructor(t){this.handler=t}async run(t,r,i){Je();let a={},n={};if(typeof t!="object"||t===null||t instanceof Ne||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Ne)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);a[d]=null}if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,c=Object.getOwnPropertyNames(r);for(let f of this.outputNames)if(c.indexOf(f)!==-1){let h=r[f];(h===null||h instanceof Ne)&&(d=!0,s=!1,a[f]=h)}if(d){if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else n=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)a[d]=null;let u=await this.handler.run(t,a,n),l={};for(let d in u)if(Object.hasOwnProperty.call(u,d)){let c=u[d];c instanceof Ne?l[d]=c:l[d]=new Ne(c.type,c.data,c.dims)}return je(),l}async release(){return this.handler.dispose()}static async create(t,r,i,a){Je();let n,s={};if(typeof t=="string"){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,f=0,h=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteOffset' must be an integer.");if(f<0||f>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(h=t.byteLength-f,typeof i=="number"){if(h=i,!Number.isSafeInteger(h))throw new RangeError("'byteLength' must be an integer.");if(h<=0||f+h>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-f}].`);if(typeof a=="object"&&a!==null)s=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");n=new Uint8Array(c,f,h)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[u,l]=await ad(s),d=await u.createInferenceSessionHandler(n,l);return je(),new $d(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Fr,Rm=P(()=>{"use strict";Bm(),Fr=wd}),Nm=P(()=>{"use strict"}),Mm=P(()=>{"use strict"}),Dm=P(()=>{"use strict"}),Pm=P(()=>{"use strict"}),Um={};Ut(Um,{InferenceSession:()=>Fr,TRACE:()=>Pr,TRACE_FUNC_BEGIN:()=>Je,TRACE_FUNC_END:()=>je,Tensor:()=>Ne,env:()=>fe,registerBackend:()=>Nt});var Ke=P(()=>{"use strict";Tm(),Em(),Rm(),yd(),Nm(),Mm(),bd(),Dm(),Pm()}),Na=P(()=>{"use strict"}),vd={};Ut(vd,{default:()=>xd});var wi,$i,xd,qm=P(()=>{"use strict";zf(),zt(),Ma(),wi="ort-wasm-proxy-worker",$i=globalThis.self?.name===wi,$i&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":Da(r.wasm).then(()=>{en(r).then(()=>{postMessage({type:t})},i=>{postMessage({type:t,err:i})})},i=>{postMessage({type:t,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;tn(a,i).then(()=>{postMessage({type:t})},n=>{postMessage({type:t,err:n})});break}case"copy-from":{let{buffer:i}=r,a=Hr(i);postMessage({type:t,out:a});break}case"create":{let{model:i,options:a}=r;rn(i,a).then(n=>{postMessage({type:t,out:n})},n=>{postMessage({type:t,err:n})});break}case"release":an(r),postMessage({type:t});break;case"run":{let{sessionId:i,inputIndices:a,inputs:n,outputIndices:s,options:u}=r;nn(i,a,n,s,new Array(s.length).fill(null),u).then(l=>{l.some(d=>d[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:l},on([...n,...l]))},l=>{postMessage({type:t,err:l})});break}case"end-profiling":sn(r),postMessage({type:t});break;default:}}catch(i){postMessage({type:t,err:i})}}),xd=$i?null:e=>new Worker(e??Be,{type:"module",name:wi})}),kd={};Ut(kd,{default:()=>Sd});var vi,xi,Sd,Ts,Wm=P(()=>{"use strict";xi=(vi=import.meta.url,async function(e={}){var t,r,i=e,a=new Promise((o,p)=>{t=o,r=p}),n=typeof window=="object",s=typeof WorkerGlobalScope<"u",u=s&&self.name?.startsWith("em-pthread");i.mountExternalData=(o,p)=>{o.startsWith("./")&&(o=o.substring(2)),(i.Fb||(i.Fb=new Map)).set(o,p)},i.unmountExternalData=()=>{delete i.Fb};var l=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,qc:!0}).buffer.constructor;let d=o=>async(...p)=>{try{if(i.Gb)throw Error("Session already started");let m=i.Gb={ec:p[0],errors:[]},y=await o(...p);if(i.Gb!==m)throw Error("Session mismatch");i.Kb?.flush();let v=m.errors;if(0<v.length){let z=await Promise.all(v);if(z=z.filter(B=>B),0<z.length)throw Error(z.join(`
`))}return y}finally{i.Gb=null}};i.jsepInit=(o,p)=>{if(o==="webgpu"){[i.Kb,i.Vb,i.Zb,i.Lb,i.Yb,i.kb,i.$b,i.bc,i.Wb,i.Xb,i.ac]=p;let m=i.Kb;i.jsepRegisterBuffer=(y,v,z,B)=>m.registerBuffer(y,v,z,B),i.jsepGetBuffer=y=>m.getBuffer(y),i.jsepCreateDownloader=(y,v,z)=>m.createDownloader(y,v,z),i.jsepOnCreateSession=y=>{m.onCreateSession(y)},i.jsepOnReleaseSession=y=>{m.onReleaseSession(y)},i.jsepOnRunStart=y=>m.onRunStart(y),i.cc=(y,v)=>{m.upload(y,v)}}else if(o==="webnn"){let m=p[0];[i.oc,i.Ob,i.webnnEnsureTensor,i.Pb,i.webnnDownloadTensor]=p.slice(1),i.webnnReleaseTensorId=i.Ob,i.webnnUploadTensor=i.Pb,i.webnnOnRunStart=y=>m.onRunStart(y),i.webnnOnRunEnd=m.onRunEnd.bind(m),i.webnnRegisterMLContext=(y,v)=>{m.registerMLContext(y,v)},i.webnnOnReleaseSession=y=>{m.onReleaseSession(y)},i.webnnCreateMLTensorDownloader=(y,v)=>m.createMLTensorDownloader(y,v),i.webnnRegisterMLTensor=(y,v,z,B)=>m.registerMLTensor(y,v,z,B),i.webnnCreateMLContext=y=>m.createMLContext(y),i.webnnRegisterMLConstant=(y,v,z,B,D,L)=>m.registerMLConstant(y,v,z,B,D,i.Fb,L),i.webnnRegisterGraphInput=m.registerGraphInput.bind(m),i.webnnIsGraphInput=m.isGraphInput.bind(m),i.webnnRegisterGraphOutput=m.registerGraphOutput.bind(m),i.webnnIsGraphOutput=m.isGraphOutput.bind(m),i.webnnCreateTemporaryTensor=m.createTemporaryTensor.bind(m),i.webnnIsGraphInputOutputTypeSupported=m.isGraphInputOutputTypeSupported.bind(m)}};let c=()=>{let o=(p,m,y)=>(...v)=>{let z=Qe,B=m?.();v=p(...v);let D=m?.();return B!==D&&(p=D,y(B),m=y=null),Qe!=z?new Promise((L,Z)=>{li={resolve:L,reject:Z}}):v};(()=>{for(let p of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])i[p]=o(i[p],()=>i[p],m=>i[p]=m)})(),d!==void 0&&(i._OrtRun=d(i._OrtRun),i._OrtRunWithBinding=d(i._OrtRunWithBinding)),c=void 0};i.asyncInit=()=>{c?.()};var f,h,_=Object.assign({},i),g=(o,p)=>{throw p},w="";(n||s)&&(s?w=self.location.href:typeof document<"u"&&document.currentScript&&(w=document.currentScript.src),vi&&(w=vi),w=w.startsWith("blob:")?"":w.slice(0,w.replace(/[?#].*/,"").lastIndexOf("/")+1),s&&(h=o=>{var p=new XMLHttpRequest;return p.open("GET",o,!1),p.responseType="arraybuffer",p.send(null),new Uint8Array(p.response)}),f=async o=>{if(F(o))return new Promise((m,y)=>{var v=new XMLHttpRequest;v.open("GET",o,!0),v.responseType="arraybuffer",v.onload=()=>{v.status==200||v.status==0&&v.response?m(v.response):y(v.status)},v.onerror=y,v.send(null)});var p=await fetch(o,{credentials:"same-origin"});if(p.ok)return p.arrayBuffer();throw Error(p.status+" : "+p.url)});var x=console.log.bind(console),$=console.error.bind(console),b=x,S=$;Object.assign(i,_),_=null;var k,I,E,T,C,N,q,V,G,Y,U,ee,X,H=i.wasmBinary,re=!1,F=o=>o.startsWith("file://");function ue(){return k.buffer!=T.buffer&&Oe(),T}function M(){return k.buffer!=T.buffer&&Oe(),C}function W(){return k.buffer!=T.buffer&&Oe(),N}function ie(){return k.buffer!=T.buffer&&Oe(),q}function A(){return k.buffer!=T.buffer&&Oe(),V}function ae(){return k.buffer!=T.buffer&&Oe(),G}function Ee(){return k.buffer!=T.buffer&&Oe(),Y}function De(){return k.buffer!=T.buffer&&Oe(),X}if(u){let o=function(p){try{var m=p.data,y=m.Cb;if(y==="load"){let v=[];self.onmessage=z=>v.push(z),self.startWorker=()=>{postMessage({Cb:"loaded"});for(let z of v)o(z);self.onmessage=o};for(let z of m.Sb)i[z]&&!i[z].proxy||(i[z]=(...B)=>{postMessage({Cb:"callHandler",Rb:z,args:B})},z=="print"&&(b=i[z]),z=="printErr"&&(S=i[z]));k=m.lc,Oe(),ye(m.mc)}else if(y==="run"){th(m.Bb),fi(m.Bb,0,0,1,0,0),bn(),oi(m.Bb),Ae||(fs(),Ae=!0);try{rh(m.hc,m.Ib)}catch(v){if(v!="unwind")throw v}}else m.target!=="setimmediate"&&(y==="checkMailbox"?Ae&&cr():y&&(S(`worker: received unknown command ${y}`),S(m)))}catch(v){throw hs(),v}};var xe=o,ye,Ae=!1;S=function(...p){p=p.join(" "),console.error(p)},self.alert=function(...p){postMessage({Cb:"alert",text:p.join(" "),jc:wr()})},self.onunhandledrejection=p=>{throw p.reason||p},self.onmessage=o}function Oe(){var o=k.buffer;i.HEAP8=T=new Int8Array(o),i.HEAP16=N=new Int16Array(o),i.HEAPU8=C=new Uint8Array(o),i.HEAPU16=q=new Uint16Array(o),i.HEAP32=V=new Int32Array(o),i.HEAPU32=G=new Uint32Array(o),i.HEAPF32=Y=new Float32Array(o),i.HEAPF64=X=new Float64Array(o),i.HEAP64=U=new BigInt64Array(o),i.HEAPU64=ee=new BigUint64Array(o)}function pr(){u?startWorker(i):J.Da()}u||(k=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),Oe());var Zr,qt=0,Wt=null;function cn(){if(--qt==0&&Wt){var o=Wt;Wt=null,o()}}function st(o){throw S(o="Aborted("+o+")"),re=!0,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),r(o),o}function fn(){return{a:{L:eh,Aa:Jf,b:ah,$:xn,A:Tn,pa:In,X:zn,Z:Cn,qa:On,na:An,ga:Bn,ma:Rn,J:Nn,Y:Mn,V:Dn,oa:Pn,W:Un,va:nh,E:oh,Q:uh,O:dh,D:ch,v:fh,r:hh,P:mh,z:vh,R:xh,ja:kh,T:Sh,aa:Th,M:Ih,F:Eh,ia:oi,sa:zh,t:Ch,Ca:Oh,w:Rh,o:Nh,m:Dh,c:ai,Ba:Ph,n:Uh,j:Lh,u:Vh,p:Gh,f:Hh,s:Fh,l:jh,e:Kh,k:Zh,h:Qh,g:Xh,d:Yh,da:Jh,ea:em,fa:tm,ba:Jn,ca:es,N:ts,xa:im,ua:sm,i:om,C:um,G:lm,ta:am,x:dm,ra:pm,U:cm,q:rm,y:fm,K:hm,S:mm,za:gm,ya:_m,ka:ns,la:ss,_:ei,B:os,I:us,ha:ls,H:ds,a:k,wa:Jr}}}var Qr={840156:(o,p,m,y,v)=>{if(i===void 0||!i.Fb)return 1;if((o=ve(Number(o>>>0))).startsWith("./")&&(o=o.substring(2)),!(o=i.Fb.get(o)))return 2;if(p=Number(p>>>0),m=Number(m>>>0),y=Number(y>>>0),p+m>o.byteLength)return 3;try{let z=o.subarray(p,p+m);switch(v){case 0:M().set(z,y>>>0);break;case 1:i.nc?i.nc(y,z):i.cc(y,z);break;default:return 4}return 0}catch{return 4}},840980:(o,p,m)=>{i.Pb(o,M().subarray(p>>>0,p+m>>>0))},841044:()=>i.oc(),841086:o=>{i.Ob(o)},841123:()=>{i.Wb()},841154:()=>{i.Xb()},841183:()=>{i.ac()},841208:o=>i.Vb(o),841241:o=>i.Zb(o),841273:(o,p,m)=>{i.Lb(Number(o),Number(p),Number(m),!0)},841336:(o,p,m)=>{i.Lb(Number(o),Number(p),Number(m))},841393:()=>typeof wasmOffsetConverter<"u",841450:o=>{i.kb("Abs",o,void 0)},841501:o=>{i.kb("Neg",o,void 0)},841552:o=>{i.kb("Floor",o,void 0)},841605:o=>{i.kb("Ceil",o,void 0)},841657:o=>{i.kb("Reciprocal",o,void 0)},841715:o=>{i.kb("Sqrt",o,void 0)},841767:o=>{i.kb("Exp",o,void 0)},841818:o=>{i.kb("Erf",o,void 0)},841869:o=>{i.kb("Sigmoid",o,void 0)},841924:(o,p,m)=>{i.kb("HardSigmoid",o,{alpha:p,beta:m})},842003:o=>{i.kb("Log",o,void 0)},842054:o=>{i.kb("Sin",o,void 0)},842105:o=>{i.kb("Cos",o,void 0)},842156:o=>{i.kb("Tan",o,void 0)},842207:o=>{i.kb("Asin",o,void 0)},842259:o=>{i.kb("Acos",o,void 0)},842311:o=>{i.kb("Atan",o,void 0)},842363:o=>{i.kb("Sinh",o,void 0)},842415:o=>{i.kb("Cosh",o,void 0)},842467:o=>{i.kb("Asinh",o,void 0)},842520:o=>{i.kb("Acosh",o,void 0)},842573:o=>{i.kb("Atanh",o,void 0)},842626:o=>{i.kb("Tanh",o,void 0)},842678:o=>{i.kb("Not",o,void 0)},842729:(o,p,m)=>{i.kb("Clip",o,{min:p,max:m})},842798:o=>{i.kb("Clip",o,void 0)},842850:(o,p)=>{i.kb("Elu",o,{alpha:p})},842908:o=>{i.kb("Gelu",o,void 0)},842960:o=>{i.kb("Relu",o,void 0)},843012:(o,p)=>{i.kb("LeakyRelu",o,{alpha:p})},843076:(o,p)=>{i.kb("ThresholdedRelu",o,{alpha:p})},843146:(o,p)=>{i.kb("Cast",o,{to:p})},843204:o=>{i.kb("Add",o,void 0)},843255:o=>{i.kb("Sub",o,void 0)},843306:o=>{i.kb("Mul",o,void 0)},843357:o=>{i.kb("Div",o,void 0)},843408:o=>{i.kb("Pow",o,void 0)},843459:o=>{i.kb("Equal",o,void 0)},843512:o=>{i.kb("Greater",o,void 0)},843567:o=>{i.kb("GreaterOrEqual",o,void 0)},843629:o=>{i.kb("Less",o,void 0)},843681:o=>{i.kb("LessOrEqual",o,void 0)},843740:(o,p,m,y,v)=>{i.kb("ReduceMean",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:y?Array.from(A().subarray(Number(y)>>>0,Number(v)>>>0)):[]})},843915:(o,p,m,y,v)=>{i.kb("ReduceMax",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:y?Array.from(A().subarray(Number(y)>>>0,Number(v)>>>0)):[]})},844089:(o,p,m,y,v)=>{i.kb("ReduceMin",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:y?Array.from(A().subarray(Number(y)>>>0,Number(v)>>>0)):[]})},844263:(o,p,m,y,v)=>{i.kb("ReduceProd",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:y?Array.from(A().subarray(Number(y)>>>0,Number(v)>>>0)):[]})},844438:(o,p,m,y,v)=>{i.kb("ReduceSum",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:y?Array.from(A().subarray(Number(y)>>>0,Number(v)>>>0)):[]})},844612:(o,p,m,y,v)=>{i.kb("ReduceL1",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:y?Array.from(A().subarray(Number(y)>>>0,Number(v)>>>0)):[]})},844785:(o,p,m,y,v)=>{i.kb("ReduceL2",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:y?Array.from(A().subarray(Number(y)>>>0,Number(v)>>>0)):[]})},844958:(o,p,m,y,v)=>{i.kb("ReduceLogSum",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:y?Array.from(A().subarray(Number(y)>>>0,Number(v)>>>0)):[]})},845135:(o,p,m,y,v)=>{i.kb("ReduceSumSquare",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:y?Array.from(A().subarray(Number(y)>>>0,Number(v)>>>0)):[]})},845315:(o,p,m,y,v)=>{i.kb("ReduceLogSumExp",o,{keepDims:!!p,noopWithEmptyAxes:!!m,axes:y?Array.from(A().subarray(Number(y)>>>0,Number(v)>>>0)):[]})},845495:o=>{i.kb("Where",o,void 0)},845548:(o,p,m)=>{i.kb("Transpose",o,{perm:p?Array.from(A().subarray(Number(p)>>>0,Number(m)>>>0)):[]})},845672:(o,p,m,y)=>{i.kb("DepthToSpace",o,{blocksize:p,mode:ve(m),format:y?"NHWC":"NCHW"})},845805:(o,p,m,y)=>{i.kb("DepthToSpace",o,{blocksize:p,mode:ve(m),format:y?"NHWC":"NCHW"})},845938:(o,p,m,y,v,z,B,D,L,Z,oe,de,me,Te,Bt)=>{i.kb("ConvTranspose",o,{format:L?"NHWC":"NCHW",autoPad:p,dilations:[m],group:y,kernelShape:[v],pads:[z,B],strides:[D],wIsConst:()=>!!ue()[Z>>>0],outputPadding:oe?Array.from(A().subarray(Number(oe)>>>0,Number(de)>>>0)):[],outputShape:me?Array.from(A().subarray(Number(me)>>>0,Number(Te)>>>0)):[],activation:ve(Bt)})},846371:(o,p,m,y,v,z,B,D,L,Z,oe,de,me,Te)=>{i.kb("ConvTranspose",o,{format:D?"NHWC":"NCHW",autoPad:p,dilations:Array.from(A().subarray(Number(m)>>>0,2+(Number(m)>>>0)>>>0)),group:y,kernelShape:Array.from(A().subarray(Number(v)>>>0,2+(Number(v)>>>0)>>>0)),pads:Array.from(A().subarray(Number(z)>>>0,4+(Number(z)>>>0)>>>0)),strides:Array.from(A().subarray(Number(B)>>>0,2+(Number(B)>>>0)>>>0)),wIsConst:()=>!!ue()[L>>>0],outputPadding:Z?Array.from(A().subarray(Number(Z)>>>0,Number(oe)>>>0)):[],outputShape:de?Array.from(A().subarray(Number(de)>>>0,Number(me)>>>0)):[],activation:ve(Te)})},847032:(o,p,m,y,v,z,B,D,L,Z,oe,de,me,Te,Bt)=>{i.kb("ConvTranspose",o,{format:L?"NHWC":"NCHW",autoPad:p,dilations:[m],group:y,kernelShape:[v],pads:[z,B],strides:[D],wIsConst:()=>!!ue()[Z>>>0],outputPadding:oe?Array.from(A().subarray(Number(oe)>>>0,Number(de)>>>0)):[],outputShape:me?Array.from(A().subarray(Number(me)>>>0,Number(Te)>>>0)):[],activation:ve(Bt)})},847465:(o,p,m,y,v,z,B,D,L,Z,oe,de,me,Te)=>{i.kb("ConvTranspose",o,{format:D?"NHWC":"NCHW",autoPad:p,dilations:Array.from(A().subarray(Number(m)>>>0,2+(Number(m)>>>0)>>>0)),group:y,kernelShape:Array.from(A().subarray(Number(v)>>>0,2+(Number(v)>>>0)>>>0)),pads:Array.from(A().subarray(Number(z)>>>0,4+(Number(z)>>>0)>>>0)),strides:Array.from(A().subarray(Number(B)>>>0,2+(Number(B)>>>0)>>>0)),wIsConst:()=>!!ue()[L>>>0],outputPadding:Z?Array.from(A().subarray(Number(Z)>>>0,Number(oe)>>>0)):[],outputShape:de?Array.from(A().subarray(Number(de)>>>0,Number(me)>>>0)):[],activation:ve(Te)})},848126:(o,p)=>{i.kb("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},848217:(o,p,m,y,v,z,B,D,L,Z,oe,de,me,Te)=>{i.kb("AveragePool",o,{format:Te?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:y,storage_order:v,dilations:z?Array.from(A().subarray(Number(z)>>>0,Number(B)>>>0)):[],kernel_shape:D?Array.from(A().subarray(Number(D)>>>0,Number(L)>>>0)):[],pads:Z?Array.from(A().subarray(Number(Z)>>>0,Number(oe)>>>0)):[],strides:de?Array.from(A().subarray(Number(de)>>>0,Number(me)>>>0)):[]})},848696:(o,p)=>{i.kb("GlobalAveragePool",o,{format:p?"NHWC":"NCHW"})},848787:(o,p,m,y,v,z,B,D,L,Z,oe,de,me,Te)=>{i.kb("AveragePool",o,{format:Te?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:y,storage_order:v,dilations:z?Array.from(A().subarray(Number(z)>>>0,Number(B)>>>0)):[],kernel_shape:D?Array.from(A().subarray(Number(D)>>>0,Number(L)>>>0)):[],pads:Z?Array.from(A().subarray(Number(Z)>>>0,Number(oe)>>>0)):[],strides:de?Array.from(A().subarray(Number(de)>>>0,Number(me)>>>0)):[]})},849266:(o,p)=>{i.kb("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},849353:(o,p,m,y,v,z,B,D,L,Z,oe,de,me,Te)=>{i.kb("MaxPool",o,{format:Te?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:y,storage_order:v,dilations:z?Array.from(A().subarray(Number(z)>>>0,Number(B)>>>0)):[],kernel_shape:D?Array.from(A().subarray(Number(D)>>>0,Number(L)>>>0)):[],pads:Z?Array.from(A().subarray(Number(Z)>>>0,Number(oe)>>>0)):[],strides:de?Array.from(A().subarray(Number(de)>>>0,Number(me)>>>0)):[]})},849828:(o,p)=>{i.kb("GlobalMaxPool",o,{format:p?"NHWC":"NCHW"})},849915:(o,p,m,y,v,z,B,D,L,Z,oe,de,me,Te)=>{i.kb("MaxPool",o,{format:Te?"NHWC":"NCHW",auto_pad:p,ceil_mode:m,count_include_pad:y,storage_order:v,dilations:z?Array.from(A().subarray(Number(z)>>>0,Number(B)>>>0)):[],kernel_shape:D?Array.from(A().subarray(Number(D)>>>0,Number(L)>>>0)):[],pads:Z?Array.from(A().subarray(Number(Z)>>>0,Number(oe)>>>0)):[],strides:de?Array.from(A().subarray(Number(de)>>>0,Number(me)>>>0)):[]})},850390:(o,p,m,y,v)=>{i.kb("Gemm",o,{alpha:p,beta:m,transA:y,transB:v})},850494:o=>{i.kb("MatMul",o,void 0)},850548:(o,p,m,y)=>{i.kb("ArgMax",o,{keepDims:!!p,selectLastIndex:!!m,axis:y})},850656:(o,p,m,y)=>{i.kb("ArgMin",o,{keepDims:!!p,selectLastIndex:!!m,axis:y})},850764:(o,p)=>{i.kb("Softmax",o,{axis:p})},850827:(o,p)=>{i.kb("Concat",o,{axis:p})},850887:(o,p,m,y,v)=>{i.kb("Split",o,{axis:p,numOutputs:m,splitSizes:y?Array.from(A().subarray(Number(y)>>>0,Number(v)>>>0)):[]})},851043:o=>{i.kb("Expand",o,void 0)},851097:(o,p)=>{i.kb("Gather",o,{axis:Number(p)})},851168:(o,p)=>{i.kb("GatherElements",o,{axis:Number(p)})},851247:(o,p)=>{i.kb("GatherND",o,{batch_dims:Number(p)})},851326:(o,p,m,y,v,z,B,D,L,Z,oe)=>{i.kb("Resize",o,{antialias:p,axes:m?Array.from(A().subarray(Number(m)>>>0,Number(y)>>>0)):[],coordinateTransformMode:ve(v),cubicCoeffA:z,excludeOutside:B,extrapolationValue:D,keepAspectRatioPolicy:ve(L),mode:ve(Z),nearestMode:ve(oe)})},851688:(o,p,m,y,v,z,B)=>{i.kb("Slice",o,{starts:p?Array.from(A().subarray(Number(p)>>>0,Number(m)>>>0)):[],ends:y?Array.from(A().subarray(Number(y)>>>0,Number(v)>>>0)):[],axes:z?Array.from(A().subarray(Number(z)>>>0,Number(B)>>>0)):[]})},851952:o=>{i.kb("Tile",o,void 0)},852004:(o,p,m)=>{i.kb("InstanceNormalization",o,{epsilon:p,format:m?"NHWC":"NCHW"})},852118:(o,p,m)=>{i.kb("InstanceNormalization",o,{epsilon:p,format:m?"NHWC":"NCHW"})},852232:o=>{i.kb("Range",o,void 0)},852285:(o,p)=>{i.kb("Einsum",o,{equation:ve(p)})},852366:(o,p,m,y,v)=>{i.kb("Pad",o,{mode:p,value:m,pads:y?Array.from(A().subarray(Number(y)>>>0,Number(v)>>>0)):[]})},852509:(o,p,m,y,v,z)=>{i.kb("BatchNormalization",o,{epsilon:p,momentum:m,spatial:!!v,trainingMode:!!y,format:z?"NHWC":"NCHW"})},852678:(o,p,m,y,v,z)=>{i.kb("BatchNormalization",o,{epsilon:p,momentum:m,spatial:!!v,trainingMode:!!y,format:z?"NHWC":"NCHW"})},852847:(o,p,m)=>{i.kb("CumSum",o,{exclusive:Number(p),reverse:Number(m)})},852944:(o,p,m)=>{i.kb("DequantizeLinear",o,{axis:p,blockSize:m})},853034:(o,p,m,y,v)=>{i.kb("GridSample",o,{align_corners:p,mode:ve(m),padding_mode:ve(y),format:v?"NHWC":"NCHW"})},853204:(o,p,m,y,v)=>{i.kb("GridSample",o,{align_corners:p,mode:ve(m),padding_mode:ve(y),format:v?"NHWC":"NCHW"})},853374:(o,p)=>{i.kb("ScatterND",o,{reduction:ve(p)})},853459:(o,p,m,y,v,z,B,D,L)=>{i.kb("Attention",o,{numHeads:p,isUnidirectional:m,maskFilterValue:y,scale:v,doRotary:z,qkvHiddenSizes:B?Array.from(A().subarray(Number(D)>>>0,Number(D)+B>>>0)):[],pastPresentShareBuffer:!!L})},853731:o=>{i.kb("BiasAdd",o,void 0)},853786:o=>{i.kb("BiasSplitGelu",o,void 0)},853847:o=>{i.kb("FastGelu",o,void 0)},853903:(o,p,m,y,v,z,B,D,L,Z,oe,de,me,Te,Bt,wm)=>{i.kb("Conv",o,{format:de?"NHWC":"NCHW",auto_pad:p,dilations:m?Array.from(A().subarray(Number(m)>>>0,Number(y)>>>0)):[],group:v,kernel_shape:z?Array.from(A().subarray(Number(z)>>>0,Number(B)>>>0)):[],pads:D?Array.from(A().subarray(Number(D)>>>0,Number(L)>>>0)):[],strides:Z?Array.from(A().subarray(Number(Z)>>>0,Number(oe)>>>0)):[],w_is_const:()=>!!ue()[Number(me)>>>0],activation:ve(Te),activation_params:Bt?Array.from(Ee().subarray(Number(Bt)>>>0,Number(wm)>>>0)):[]})},854487:o=>{i.kb("Gelu",o,void 0)},854539:(o,p,m,y,v,z,B,D,L)=>{i.kb("GroupQueryAttention",o,{numHeads:p,kvNumHeads:m,scale:y,softcap:v,doRotary:z,rotaryInterleaved:B,smoothSoftmax:D,localWindowSize:L})},854756:(o,p,m,y)=>{i.kb("LayerNormalization",o,{axis:p,epsilon:m,simplified:!!y})},854867:(o,p,m,y)=>{i.kb("LayerNormalization",o,{axis:p,epsilon:m,simplified:!!y})},854978:(o,p,m,y,v,z)=>{i.kb("MatMulNBits",o,{k:p,n:m,accuracyLevel:y,bits:v,blockSize:z})},855105:(o,p,m,y,v,z)=>{i.kb("MultiHeadAttention",o,{numHeads:p,isUnidirectional:m,maskFilterValue:y,scale:v,doRotary:z})},855264:(o,p)=>{i.kb("QuickGelu",o,{alpha:p})},855328:(o,p,m,y,v)=>{i.kb("RotaryEmbedding",o,{interleaved:!!p,numHeads:m,rotaryEmbeddingDim:y,scale:v})},855467:(o,p,m)=>{i.kb("SkipLayerNormalization",o,{epsilon:p,simplified:!!m})},855569:(o,p,m)=>{i.kb("SkipLayerNormalization",o,{epsilon:p,simplified:!!m})},855671:(o,p,m,y)=>{i.kb("GatherBlockQuantized",o,{gatherAxis:p,quantizeAxis:m,blockSize:y})},855792:o=>{i.$b(o)},855826:(o,p)=>i.bc(Number(o),Number(p),i.Gb.ec,i.Gb.errors)};function Jf(o,p,m){return jn(async()=>{await i.Yb(Number(o),Number(p),Number(m))})}function eh(){return typeof wasmOffsetConverter<"u"}class Xr{name="ExitStatus";constructor(p){this.message=`Program terminated with exit(${p})`,this.status=p}}var hn=o=>{o.terminate(),o.onmessage=()=>{}},Yr=[],mn=o=>{ut.length==0&&($n(),wn(ut[0]));var p=ut.pop();if(!p)return 6;Lt.push(p),_t[o.Bb]=p,p.Bb=o.Bb;var m={Cb:"run",hc:o.fc,Ib:o.Ib,Bb:o.Bb};return p.postMessage(m,o.Nb),0},ot=0,_e=(o,p,...m)=>{for(var y=2*m.length,v=gi(),z=mi(8*y),B=z>>>3,D=0;D<m.length;D++){var L=m[D];typeof L=="bigint"?(U[B+2*D]=1n,U[B+2*D+1]=L):(U[B+2*D]=0n,De()[B+2*D+1>>>0]=L)}return o=ms(o,0,y,z,p),vr(v),o};function Jr(o){if(u)return _e(0,1,o);if(E=o,!(0<ot)){for(var p of Lt)hn(p);for(p of ut)hn(p);ut=[],Lt=[],_t={},re=!0}g(0,new Xr(o))}function gn(o){if(u)return _e(1,0,o);ei(o)}var ei=o=>{if(E=o,u)throw gn(o),"unwind";Jr(o)},ut=[],Lt=[],_n=[],_t={},yn=o=>{var p=o.Bb;delete _t[p],ut.push(o),Lt.splice(Lt.indexOf(o),1),o.Bb=0,gs(p)};function bn(){_n.forEach(o=>o())}var wn=o=>new Promise(p=>{o.onmessage=v=>{var z=(v=v.data).Cb;if(v.Hb&&v.Hb!=wr()){var B=_t[v.Hb];B?B.postMessage(v,v.Nb):S(`Internal error! Worker sent a message "${z}" to target pthread ${v.Hb}, but that thread no longer exists!`)}else z==="checkMailbox"?cr():z==="spawnThread"?mn(v):z==="cleanupThread"?yn(_t[v.ic]):z==="loaded"?(o.loaded=!0,p(o)):z==="alert"?alert(`Thread ${v.jc}: ${v.text}`):v.target==="setimmediate"?o.postMessage(v):z==="callHandler"?i[v.Rb](...v.args):z&&S(`worker sent an unknown command ${z}`)},o.onerror=v=>{throw S(`worker sent an error! ${v.filename}:${v.lineno}: ${v.message}`),v};var m,y=[];for(m of[])i.propertyIsEnumerable(m)&&y.push(m);o.postMessage({Cb:"load",Sb:y,lc:k,mc:I})});function $n(){var o=new Worker((()=>{let p=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new p("ort.webgpu.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});ut.push(o)}var th=o=>{Oe();var p=ae()[o+52>>>2>>>0];o=ae()[o+56>>>2>>>0],bs(p,p-o),vr(p)},rh=(o,p)=>{ot=0,o=ws(o,p),0<ot?E=o:hi(o)};class ih{constructor(p){this.Jb=p-24}}function ah(o,p,m){var y=new ih(o>>>=0);throw p>>>=0,m>>>=0,ae()[y.Jb+16>>>2>>>0]=0,ae()[y.Jb+4>>>2>>>0]=p,ae()[y.Jb+8>>>2>>>0]=m,o}function vn(o,p,m,y){return u?_e(2,1,o,p,m,y):xn(o,p,m,y)}function xn(o,p,m,y){if(o>>>=0,m>>>=0,y>>>=0,l===void 0)return 6;var v=[];return u&&v.length===0?vn(o,p>>>=0,m,y):(o={fc:m,Bb:o,Ib:y,Nb:v},u?(o.Cb="spawnThread",postMessage(o,v),0):mn(o))}var kn=typeof TextDecoder<"u"?new TextDecoder:void 0,Sn=(o,p=0,m=NaN)=>{var y=(p>>>=0)+m;for(m=p;o[m]&&!(m>=y);)++m;if(16<m-p&&o.buffer&&kn)return kn.decode(o.buffer instanceof ArrayBuffer?o.subarray(p,m):o.slice(p,m));for(y="";p<m;){var v=o[p++];if(128&v){var z=63&o[p++];if((224&v)==192)y+=String.fromCharCode((31&v)<<6|z);else{var B=63&o[p++];65536>(v=(240&v)==224?(15&v)<<12|z<<6|B:(7&v)<<18|z<<12|B<<6|63&o[p++])?y+=String.fromCharCode(v):(v-=65536,y+=String.fromCharCode(55296|v>>10,56320|1023&v))}}else y+=String.fromCharCode(v)}return y},ve=(o,p)=>(o>>>=0)?Sn(M(),o,p):"";function Tn(o,p,m){return u?_e(3,1,o,p,m):0}function In(o,p){if(u)return _e(4,1,o,p)}var En=o=>{for(var p=0,m=0;m<o.length;++m){var y=o.charCodeAt(m);127>=y?p++:2047>=y?p+=2:55296<=y&&57343>=y?(p+=4,++m):p+=3}return p},Ot=(o,p,m)=>{var y=M();if(p>>>=0,0<m){var v=p;m=p+m-1;for(var z=0;z<o.length;++z){var B=o.charCodeAt(z);if(55296<=B&&57343>=B&&(B=65536+((1023&B)<<10)|1023&o.charCodeAt(++z)),127>=B){if(p>=m)break;y[p++>>>0]=B}else{if(2047>=B){if(p+1>=m)break;y[p++>>>0]=192|B>>6}else{if(65535>=B){if(p+2>=m)break;y[p++>>>0]=224|B>>12}else{if(p+3>=m)break;y[p++>>>0]=240|B>>18,y[p++>>>0]=128|B>>12&63}y[p++>>>0]=128|B>>6&63}y[p++>>>0]=128|63&B}}y[p>>>0]=0,o=p-v}else o=0;return o};function zn(o,p){if(u)return _e(5,1,o,p)}function Cn(o,p,m){if(u)return _e(6,1,o,p,m)}function On(o,p,m){return u?_e(7,1,o,p,m):0}function An(o,p){if(u)return _e(8,1,o,p)}function Bn(o,p,m){if(u)return _e(9,1,o,p,m)}function Rn(o,p,m,y){if(u)return _e(10,1,o,p,m,y)}function Nn(o,p,m,y){if(u)return _e(11,1,o,p,m,y)}function Mn(o,p,m,y){if(u)return _e(12,1,o,p,m,y)}function Dn(o){if(u)return _e(13,1,o)}function Pn(o,p){if(u)return _e(14,1,o,p)}function Un(o,p,m){if(u)return _e(15,1,o,p,m)}var qn,lt,nh=()=>st(""),Ze=o=>{for(var p="";M()[o>>>0];)p+=qn[M()[o++>>>0]];return p},ti={},ri={},sh={};function et(o,p,m={}){return function(y,v,z={}){var B=v.name;if(!y)throw new lt(`type "${B}" must have a positive integer typeid pointer`);if(ri.hasOwnProperty(y)){if(z.Tb)return;throw new lt(`Cannot register type '${B}' twice`)}ri[y]=v,delete sh[y],ti.hasOwnProperty(y)&&(v=ti[y],delete ti[y],v.forEach(D=>D()))}(o,p,m)}var Wn=(o,p,m)=>{switch(p){case 1:return m?y=>ue()[y>>>0]:y=>M()[y>>>0];case 2:return m?y=>W()[y>>>1>>>0]:y=>ie()[y>>>1>>>0];case 4:return m?y=>A()[y>>>2>>>0]:y=>ae()[y>>>2>>>0];case 8:return m?y=>U[y>>>3]:y=>ee[y>>>3];default:throw new TypeError(`invalid integer width (${p}): ${o}`)}};function oh(o,p,m){m>>>=0,et(o>>>=0,{name:p=Ze(p>>>0),fromWireType:y=>y,toWireType:function(y,v){if(typeof v!="bigint"&&typeof v!="number")throw v=v===null?"null":(y=typeof v)=="object"||y==="array"||y==="function"?v.toString():""+v,new TypeError(`Cannot convert "${v}" to ${this.name}`);return typeof v=="number"&&(v=BigInt(v)),v},Db:dt,readValueFromPointer:Wn(p,m,p.indexOf("u")==-1),Eb:null})}var dt=8;function uh(o,p,m,y){et(o>>>=0,{name:p=Ze(p>>>0),fromWireType:function(v){return!!v},toWireType:function(v,z){return z?m:y},Db:dt,readValueFromPointer:function(v){return this.fromWireType(M()[v>>>0])},Eb:null})}var ii=[],tt=[];function ai(o){9<(o>>>=0)&&--tt[o+1]==0&&(tt[o]=void 0,ii.push(o))}var ze=o=>{if(!o)throw new lt("Cannot use deleted val. handle = "+o);return tt[o]},Pe=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let p=ii.pop()||tt.length;return tt[p]=o,tt[p+1]=1,p}};function ni(o){return this.fromWireType(ae()[o>>>2>>>0])}var lh={name:"emscripten::val",fromWireType:o=>{var p=ze(o);return ai(o),p},toWireType:(o,p)=>Pe(p),Db:dt,readValueFromPointer:ni,Eb:null};function dh(o){return et(o>>>0,lh)}var ph=(o,p)=>{switch(p){case 4:return function(m){return this.fromWireType(Ee()[m>>>2>>>0])};case 8:return function(m){return this.fromWireType(De()[m>>>3>>>0])};default:throw new TypeError(`invalid float width (${p}): ${o}`)}};function ch(o,p,m){m>>>=0,et(o>>>=0,{name:p=Ze(p>>>0),fromWireType:y=>y,toWireType:(y,v)=>v,Db:dt,readValueFromPointer:ph(p,m),Eb:null})}function fh(o,p,m,y,v){if(o>>>=0,m>>>=0,p=Ze(p>>>0),v===-1&&(v=4294967295),v=D=>D,y===0){var z=32-8*m;v=D=>D<<z>>>z}var B=p.includes("unsigned")?function(D,L){return L>>>0}:function(D,L){return L};et(o,{name:p,fromWireType:v,toWireType:B,Db:dt,readValueFromPointer:Wn(p,m,y!==0),Eb:null})}function hh(o,p,m){function y(z){var B=ae()[z>>>2>>>0];return z=ae()[z+4>>>2>>>0],new v(ue().buffer,z,B)}var v=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][p];et(o>>>=0,{name:m=Ze(m>>>0),fromWireType:y,Db:dt,readValueFromPointer:y},{Tb:!0})}function mh(o,p){et(o>>>=0,{name:p=Ze(p>>>0),fromWireType:function(m){for(var y,v=ae()[m>>>2>>>0],z=m+4,B=z,D=0;D<=v;++D){var L=z+D;D!=v&&M()[L>>>0]!=0||(B=ve(B,L-B),y===void 0?y=B:(y+="\0",y+=B),B=L+1)}return Xe(m),y},toWireType:function(m,y){y instanceof ArrayBuffer&&(y=new Uint8Array(y));var v=typeof y=="string";if(!(v||y instanceof Uint8Array||y instanceof Uint8ClampedArray||y instanceof Int8Array))throw new lt("Cannot pass non-string to std::string");var z=v?En(y):y.length,B=$r(4+z+1),D=B+4;if(ae()[B>>>2>>>0]=z,v)Ot(y,D,z+1);else if(v)for(v=0;v<z;++v){var L=y.charCodeAt(v);if(255<L)throw Xe(B),new lt("String has UTF-16 code units that do not fit in 8 bits");M()[D+v>>>0]=L}else for(v=0;v<z;++v)M()[D+v>>>0]=y[v];return m!==null&&m.push(Xe,B),B},Db:dt,readValueFromPointer:ni,Eb(m){Xe(m)}})}var Ln=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,gh=(o,p)=>{for(var m=o>>1,y=m+p/2;!(m>=y)&&ie()[m>>>0];)++m;if(32<(m<<=1)-o&&Ln)return Ln.decode(M().slice(o,m));for(m="",y=0;!(y>=p/2);++y){var v=W()[o+2*y>>>1>>>0];if(v==0)break;m+=String.fromCharCode(v)}return m},_h=(o,p,m)=>{if(m??=2147483647,2>m)return 0;var y=p;m=(m-=2)<2*o.length?m/2:o.length;for(var v=0;v<m;++v){var z=o.charCodeAt(v);W()[p>>>1>>>0]=z,p+=2}return W()[p>>>1>>>0]=0,p-y},yh=o=>2*o.length,bh=(o,p)=>{for(var m=0,y="";!(m>=p/4);){var v=A()[o+4*m>>>2>>>0];if(v==0)break;++m,65536<=v?(v-=65536,y+=String.fromCharCode(55296|v>>10,56320|1023&v)):y+=String.fromCharCode(v)}return y},wh=(o,p,m)=>{if(p>>>=0,m??=2147483647,4>m)return 0;var y=p;m=y+m-4;for(var v=0;v<o.length;++v){var z=o.charCodeAt(v);if(55296<=z&&57343>=z&&(z=65536+((1023&z)<<10)|1023&o.charCodeAt(++v)),A()[p>>>2>>>0]=z,(p+=4)+4>m)break}return A()[p>>>2>>>0]=0,p-y},$h=o=>{for(var p=0,m=0;m<o.length;++m){var y=o.charCodeAt(m);55296<=y&&57343>=y&&++m,p+=4}return p};function vh(o,p,m){if(o>>>=0,p>>>=0,m=Ze(m>>>=0),p===2)var y=gh,v=_h,z=yh,B=D=>ie()[D>>>1>>>0];else p===4&&(y=bh,v=wh,z=$h,B=D=>ae()[D>>>2>>>0]);et(o,{name:m,fromWireType:D=>{for(var L,Z=ae()[D>>>2>>>0],oe=D+4,de=0;de<=Z;++de){var me=D+4+de*p;de!=Z&&B(me)!=0||(oe=y(oe,me-oe),L===void 0?L=oe:(L+="\0",L+=oe),oe=me+p)}return Xe(D),L},toWireType:(D,L)=>{if(typeof L!="string")throw new lt(`Cannot pass non-string to C++ string type ${m}`);var Z=z(L),oe=$r(4+Z+p);return ae()[oe>>>2>>>0]=Z/p,v(L,oe+4,Z+p),D!==null&&D.push(Xe,oe),oe},Db:dt,readValueFromPointer:ni,Eb(D){Xe(D)}})}function xh(o,p){et(o>>>=0,{Ub:!0,name:p=Ze(p>>>0),Db:0,fromWireType:()=>{},toWireType:()=>{}})}function kh(o){fi(o>>>0,!s,1,!n,131072,!1),bn()}var si=o=>{if(!re)try{if(o(),!(0<ot))try{u?hi(E):ei(E)}catch(p){p instanceof Xr||p=="unwind"||g(0,p)}}catch(p){p instanceof Xr||p=="unwind"||g(0,p)}};function oi(o){o>>>=0,typeof Atomics.kc=="function"&&(Atomics.kc(A(),o>>>2,o).value.then(cr),o+=128,Atomics.store(A(),o>>>2,1))}var cr=()=>{var o=wr();o&&(oi(o),si(ys))};function Sh(o,p){(o>>>=0)==p>>>0?setTimeout(cr):u?postMessage({Hb:o,Cb:"checkMailbox"}):(o=_t[o])&&o.postMessage({Cb:"checkMailbox"})}var ui=[];function Th(o,p,m,y,v){for(p>>>=0,y/=2,ui.length=y,m=v>>>0>>>3,v=0;v<y;v++)ui[v]=U[m+2*v]?U[m+2*v+1]:De()[m+2*v+1>>>0];return(p?Qr[p]:bm[o])(...ui)}var Ih=()=>{ot=0};function Eh(o){o>>>=0,u?postMessage({Cb:"cleanupThread",ic:o}):yn(_t[o])}function zh(o){}var fr=(o,p)=>{var m=ri[o];if(m===void 0)throw o=cs(o),m=Ze(o),Xe(o),new lt(`${p} has unknown type ${m}`);return m},Vn=(o,p,m)=>{var y=[];return o=o.toWireType(y,m),y.length&&(ae()[p>>>2>>>0]=Pe(y)),o};function Ch(o,p,m){return p>>>=0,m>>>=0,o=ze(o>>>0),p=fr(p,"emval::as"),Vn(p,m,o)}function Oh(o,p){return p>>>=0,o=ze(o>>>0),(p=fr(p,"emval::as")).toWireType(null,o)}var hr=o=>{try{o()}catch(p){st(p)}},pt=0,Qe=null,Gn=0,mr=[],Hn={},Fn={},Ah=0,li=null,Bh=[];function jn(o){return function(p){if(!re){if(pt===0){var m=!1,y=!1;p((v=0)=>{if(!re&&(Gn=v,m=!0,y)){pt=2,hr(()=>xs(Qe)),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.resume(),v=!1;try{var z=function(){var L=A()[Qe+8>>>2>>>0];return L=J[Fn[L]],--ot,L()}()}catch(L){z=L,v=!0}var B=!1;if(!Qe){var D=li;D&&(li=null,(v?D.reject:D.resolve)(z),B=!0)}if(v&&!B)throw z}}),y=!0,m||(pt=1,Qe=function(){var v=$r(65548),z=v+12;ae()[v>>>2>>>0]=z,ae()[v+4>>>2>>>0]=z+65536,z=mr[0];var B=Hn[z];return B===void 0&&(B=Ah++,Hn[z]=B,Fn[B]=z),z=B,A()[v+8>>>2>>>0]=z,v}(),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.pause(),hr(()=>$s(Qe)))}else pt===2?(pt=0,hr(ks),Xe(Qe),Qe=null,Bh.forEach(si)):st(`invalid state: ${pt}`);return Gn}}(p=>{o().then(p)})}function Rh(o){return o>>>=0,jn(async()=>{var p=await ze(o);return Pe(p)})}var gr=[];function Nh(o,p,m,y){return m>>>=0,y>>>=0,(o=gr[o>>>0])(null,p=ze(p>>>0),m,y)}var Mh={},_r=o=>{var p=Mh[o];return p===void 0?Ze(o):p};function Dh(o,p,m,y,v){return m>>>=0,y>>>=0,v>>>=0,(o=gr[o>>>0])(p=ze(p>>>0),p[m=_r(m)],y,v)}function Ph(o,p){return p>>>=0,(o=ze(o>>>0))==ze(p)}var Kn=()=>typeof globalThis=="object"?globalThis:Function("return this")();function Uh(o){return(o>>>=0)==0?Pe(Kn()):(o=_r(o),Pe(Kn()[o]))}var qh=o=>{var p=gr.length;return gr.push(o),p},Wh=(o,p)=>{for(var m=Array(o),y=0;y<o;++y)m[y]=fr(ae()[p+4*y>>>2>>>0],"parameter "+y);return m},Zn=(o,p)=>Object.defineProperty(p,"name",{value:o});function Lh(o,p,m){var y=(p=Wh(o,p>>>0)).shift();o--;var v=`return function (obj, func, destructorsRef, args) {
`,z=0,B=[];m===0&&B.push("obj");for(var D=["retType"],L=[y],Z=0;Z<o;++Z)B.push("arg"+Z),D.push("argType"+Z),L.push(p[Z]),v+=`  var arg${Z} = argType${Z}.readValueFromPointer(args${z?"+"+z:""});
`,z+=p[Z].Db;return v+=`  var rv = ${m===1?"new func":"func.call"}(${B.join(", ")});
`,y.Ub||(D.push("emval_returnValue"),L.push(Vn),v+=`  return emval_returnValue(retType, destructorsRef, rv);
`),D.push(v+`};
`),o=function(oe){var de=Function;if(!(de instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof de} which is not a function`);var me=Zn(de.name||"unknownFunctionName",function(){});return me.prototype=de.prototype,me=new me,(oe=de.apply(me,oe))instanceof Object?oe:me}(D)(...L),m=`methodCaller<(${p.map(oe=>oe.name).join(", ")}) => ${y.name}>`,qh(Zn(m,o))}function Vh(o){return o=_r(o>>>0),Pe(i[o])}function Gh(o,p){return p>>>=0,o=ze(o>>>0),p=ze(p),Pe(o[p])}function Hh(o){9<(o>>>=0)&&(tt[o+1]+=1)}function Fh(){return Pe([])}function jh(o){o=ze(o>>>0);for(var p=Array(o.length),m=0;m<o.length;m++)p[m]=o[m];return Pe(p)}function Kh(o){return Pe(_r(o>>>0))}function Zh(){return Pe({})}function Qh(o){for(var p=ze(o>>>=0);p.length;){var m=p.pop();p.pop()(m)}ai(o)}function Xh(o,p,m){p>>>=0,m>>>=0,o=ze(o>>>0),p=ze(p),m=ze(m),o[p]=m}function Yh(o,p){return p>>>=0,o=(o=fr(o>>>0,"_emval_take_value")).readValueFromPointer(p),Pe(o)}function Jh(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),A()[p>>>2>>>0]=o.getUTCSeconds(),A()[p+4>>>2>>>0]=o.getUTCMinutes(),A()[p+8>>>2>>>0]=o.getUTCHours(),A()[p+12>>>2>>>0]=o.getUTCDate(),A()[p+16>>>2>>>0]=o.getUTCMonth(),A()[p+20>>>2>>>0]=o.getUTCFullYear()-1900,A()[p+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,A()[p+28>>>2>>>0]=o}var Qn=o=>o%4==0&&(o%100!=0||o%400==0),Xn=[0,31,60,91,121,152,182,213,244,274,305,335],Yn=[0,31,59,90,120,151,181,212,243,273,304,334];function em(o,p){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),p>>>=0,o=new Date(1e3*o),A()[p>>>2>>>0]=o.getSeconds(),A()[p+4>>>2>>>0]=o.getMinutes(),A()[p+8>>>2>>>0]=o.getHours(),A()[p+12>>>2>>>0]=o.getDate(),A()[p+16>>>2>>>0]=o.getMonth(),A()[p+20>>>2>>>0]=o.getFullYear()-1900,A()[p+24>>>2>>>0]=o.getDay();var m=(Qn(o.getFullYear())?Xn:Yn)[o.getMonth()]+o.getDate()-1|0;A()[p+28>>>2>>>0]=m,A()[p+36>>>2>>>0]=-60*o.getTimezoneOffset(),m=new Date(o.getFullYear(),6,1).getTimezoneOffset();var y=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(m!=y&&o.getTimezoneOffset()==Math.min(y,m)),A()[p+32>>>2>>>0]=o}function tm(o){o>>>=0;var p=new Date(A()[o+20>>>2>>>0]+1900,A()[o+16>>>2>>>0],A()[o+12>>>2>>>0],A()[o+8>>>2>>>0],A()[o+4>>>2>>>0],A()[o>>>2>>>0],0),m=A()[o+32>>>2>>>0],y=p.getTimezoneOffset(),v=new Date(p.getFullYear(),6,1).getTimezoneOffset(),z=new Date(p.getFullYear(),0,1).getTimezoneOffset(),B=Math.min(z,v);return 0>m?A()[o+32>>>2>>>0]=+(v!=z&&B==y):0<m!=(B==y)&&(v=Math.max(z,v),p.setTime(p.getTime()+6e4*((0<m?B:v)-y))),A()[o+24>>>2>>>0]=p.getDay(),m=(Qn(p.getFullYear())?Xn:Yn)[p.getMonth()]+p.getDate()-1|0,A()[o+28>>>2>>>0]=m,A()[o>>>2>>>0]=p.getSeconds(),A()[o+4>>>2>>>0]=p.getMinutes(),A()[o+8>>>2>>>0]=p.getHours(),A()[o+12>>>2>>>0]=p.getDate(),A()[o+16>>>2>>>0]=p.getMonth(),A()[o+20>>>2>>>0]=p.getYear(),o=p.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function Jn(o,p,m,y,v,z,B){return u?_e(16,1,o,p,m,y,v,z,B):-52}function es(o,p,m,y,v,z){if(u)return _e(17,1,o,p,m,y,v,z)}var Vt={},rm=()=>performance.timeOrigin+performance.now();function ts(o,p){if(u)return _e(18,1,o,p);if(Vt[o]&&(clearTimeout(Vt[o].id),delete Vt[o]),!p)return 0;var m=setTimeout(()=>{delete Vt[o],si(()=>_s(o,performance.timeOrigin+performance.now()))},p);return Vt[o]={id:m,rc:p},0}function im(o,p,m,y){o>>>=0,p>>>=0,m>>>=0,y>>>=0;var v=new Date().getFullYear(),z=new Date(v,0,1).getTimezoneOffset();v=new Date(v,6,1).getTimezoneOffset();var B=Math.max(z,v);ae()[o>>>2>>>0]=60*B,A()[p>>>2>>>0]=+(z!=v),o=(p=D=>{var L=Math.abs(D);return`UTC${0<=D?"-":"+"}${String(Math.floor(L/60)).padStart(2,"0")}${String(L%60).padStart(2,"0")}`})(z),p=p(v),v<z?(Ot(o,m,17),Ot(p,y,17)):(Ot(o,y,17),Ot(p,m,17))}var am=()=>Date.now(),nm=1;function sm(o,p,m){if(!(0<=o&&3>=o))return 28;if(o===0)o=Date.now();else{if(!nm)return 52;o=performance.timeOrigin+performance.now()}return U[m>>>0>>>3]=BigInt(Math.round(1e6*o)),0}var di=[],rs=(o,p)=>{di.length=0;for(var m;m=M()[o++>>>0];){var y=m!=105;p+=(y&=m!=112)&&p%8?4:0,di.push(m==112?ae()[p>>>2>>>0]:m==106?U[p>>>3]:m==105?A()[p>>>2>>>0]:De()[p>>>3>>>0]),p+=y?8:4}return di};function om(o,p,m){return o>>>=0,p=rs(p>>>0,m>>>0),Qr[o](...p)}function um(o,p,m){return o>>>=0,p=rs(p>>>0,m>>>0),Qr[o](...p)}var lm=()=>{};function dm(o,p){return S(ve(o>>>0,p>>>0))}var pm=()=>{throw ot+=1,"unwind"};function cm(){return 4294901760}var fm=()=>navigator.hardwareConcurrency;function hm(){return st("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function mm(o){o>>>=0;var p=M().length;if(o<=p||4294901760<o)return!1;for(var m=1;4>=m;m*=2){var y=p*(1+.2/m);y=Math.min(y,o+100663296);e:{y=(Math.min(4294901760,65536*Math.ceil(Math.max(o,y)/65536))-k.buffer.byteLength+65535)/65536|0;try{k.grow(y),Oe();var v=1;break e}catch{}v=void 0}if(v)return!0}return!1}var yr=()=>(st("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),At={},is=o=>{o.forEach(p=>{var m=yr();m&&(At[m]=p)})};function gm(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),is(o),At.Mb=yr(),At.dc=o,At.Mb}function _m(o,p,m){if(o>>>=0,p>>>=0,At.Mb==o)var y=At.dc;else(y=Error().stack.toString().split(`
`))[0]=="Error"&&y.shift(),is(y);for(var v=3;y[v]&&yr()!=o;)++v;for(o=0;o<m&&y[o+v];++o)A()[p+4*o>>>2>>>0]=yr();return o}var pi,ci={},as=()=>{if(!pi){var o,p={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(o in ci)ci[o]===void 0?delete p[o]:p[o]=ci[o];var m=[];for(o in p)m.push(`${o}=${p[o]}`);pi=m}return pi};function ns(o,p){if(u)return _e(19,1,o,p);o>>>=0,p>>>=0;var m=0;return as().forEach((y,v)=>{var z=p+m;for(v=ae()[o+4*v>>>2>>>0]=z,z=0;z<y.length;++z)ue()[v++>>>0]=y.charCodeAt(z);ue()[v>>>0]=0,m+=y.length+1}),0}function ss(o,p){if(u)return _e(20,1,o,p);o>>>=0,p>>>=0;var m=as();ae()[o>>>2>>>0]=m.length;var y=0;return m.forEach(v=>y+=v.length+1),ae()[p>>>2>>>0]=y,0}function os(o){return u?_e(21,1,o):52}function us(o,p,m,y){return u?_e(22,1,o,p,m,y):52}function ls(o,p,m,y){return u?_e(23,1,o,p,m,y):70}var ym=[null,[],[]];function ds(o,p,m,y){if(u)return _e(24,1,o,p,m,y);p>>>=0,m>>>=0,y>>>=0;for(var v=0,z=0;z<m;z++){var B=ae()[p>>>2>>>0],D=ae()[p+4>>>2>>>0];p+=8;for(var L=0;L<D;L++){var Z=M()[B+L>>>0],oe=ym[o];Z===0||Z===10?((o===1?b:S)(Sn(oe)),oe.length=0):oe.push(Z)}v+=D}return ae()[y>>>2>>>0]=v,0}u||function(){for(var o=i.numThreads-1;o--;)$n();Yr.unshift(()=>{qt++,function(p){u?p():Promise.all(ut.map(wn)).then(p)}(()=>cn())})}();for(var ps=Array(256),br=0;256>br;++br)ps[br]=String.fromCharCode(br);qn=ps,lt=i.BindingError=class extends Error{constructor(o){super(o),this.name="BindingError"}},i.InternalError=class extends Error{constructor(o){super(o),this.name="InternalError"}},tt.push(0,1,void 0,1,null,1,!0,1,!1,1),i.count_emval_handles=()=>tt.length/2-5-ii.length;var J,bm=[Jr,gn,vn,Tn,In,zn,Cn,On,An,Bn,Rn,Nn,Mn,Dn,Pn,Un,Jn,es,ts,ns,ss,os,us,ls,ds];(async function(){function o(y,v){return J=y.exports,J=function(){var z=J,B={};for(let[D,L]of Object.entries(z))B[D]=typeof L=="function"?(...Z)=>{mr.push(D);try{return L(...Z)}finally{re||(mr.pop(),Qe&&pt===1&&mr.length===0&&(pt=0,ot+=1,hr(vs),typeof Fibers<"u"&&Fibers.sc()))}}:L;return B}(),J=function(){var z=J,B=L=>Z=>L(Z)>>>0,D=L=>()=>L()>>>0;return(z=Object.assign({},z)).Ea=B(z.Ea),z.gb=D(z.gb),z.ib=B(z.ib),z.ub=B(z.ub),z.vb=D(z.vb),z.__cxa_get_exception_ptr=B(z.__cxa_get_exception_ptr),z}(),_n.push(J.jb),I=v,cn(),J}qt++;var p=fn();if(i.instantiateWasm)return new Promise(y=>{i.instantiateWasm(p,(v,z)=>{o(v,z),y(v.exports)})});if(u)return new Promise(y=>{ye=v=>{var z=new WebAssembly.Instance(v,fn());y(o(z,v))}});Zr??=i.locateFile?i.locateFile?i.locateFile("ort-wasm-simd-threaded.jsep.wasm",w):w+"ort-wasm-simd-threaded.jsep.wasm":new URL("ort-wasm-simd-threaded.jsep.wasm",import.meta.url).href;try{var m=await async function(y){var v=Zr;if(!H&&typeof WebAssembly.instantiateStreaming=="function"&&!F(v))try{var z=fetch(v,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(z,y)}catch(B){S(`wasm streaming compile failed: ${B}`),S("falling back to ArrayBuffer instantiation")}return async function(B,D){try{var L=await async function(Z){if(!H)try{var oe=await f(Z);return new Uint8Array(oe)}catch{}if(Z==Zr&&H)Z=new Uint8Array(H);else{if(!h)throw"both async and sync fetching of the wasm failed";Z=h(Z)}return Z}(B);return await WebAssembly.instantiate(L,D)}catch(Z){S(`failed to asynchronously prepare wasm: ${Z}`),st(Z)}}(v,y)}(p);return o(m.instance,m.module)}catch(y){return r(y),Promise.reject(y)}})();var cs=o=>(cs=J.Ea)(o),fs=()=>(fs=J.Fa)();i._OrtInit=(o,p)=>(i._OrtInit=J.Ga)(o,p),i._OrtGetLastError=(o,p)=>(i._OrtGetLastError=J.Ha)(o,p),i._OrtCreateSessionOptions=(o,p,m,y,v,z,B,D,L,Z)=>(i._OrtCreateSessionOptions=J.Ia)(o,p,m,y,v,z,B,D,L,Z),i._OrtAppendExecutionProvider=(o,p,m,y,v)=>(i._OrtAppendExecutionProvider=J.Ja)(o,p,m,y,v),i._OrtAddFreeDimensionOverride=(o,p,m)=>(i._OrtAddFreeDimensionOverride=J.Ka)(o,p,m),i._OrtAddSessionConfigEntry=(o,p,m)=>(i._OrtAddSessionConfigEntry=J.La)(o,p,m),i._OrtReleaseSessionOptions=o=>(i._OrtReleaseSessionOptions=J.Ma)(o),i._OrtCreateSession=(o,p,m)=>(i._OrtCreateSession=J.Na)(o,p,m),i._OrtReleaseSession=o=>(i._OrtReleaseSession=J.Oa)(o),i._OrtGetInputOutputCount=(o,p,m)=>(i._OrtGetInputOutputCount=J.Pa)(o,p,m),i._OrtGetInputOutputMetadata=(o,p,m,y)=>(i._OrtGetInputOutputMetadata=J.Qa)(o,p,m,y),i._OrtFree=o=>(i._OrtFree=J.Ra)(o),i._OrtCreateTensor=(o,p,m,y,v,z)=>(i._OrtCreateTensor=J.Sa)(o,p,m,y,v,z),i._OrtGetTensorData=(o,p,m,y,v)=>(i._OrtGetTensorData=J.Ta)(o,p,m,y,v),i._OrtReleaseTensor=o=>(i._OrtReleaseTensor=J.Ua)(o),i._OrtCreateRunOptions=(o,p,m,y)=>(i._OrtCreateRunOptions=J.Va)(o,p,m,y),i._OrtAddRunConfigEntry=(o,p,m)=>(i._OrtAddRunConfigEntry=J.Wa)(o,p,m),i._OrtReleaseRunOptions=o=>(i._OrtReleaseRunOptions=J.Xa)(o),i._OrtCreateBinding=o=>(i._OrtCreateBinding=J.Ya)(o),i._OrtBindInput=(o,p,m)=>(i._OrtBindInput=J.Za)(o,p,m),i._OrtBindOutput=(o,p,m,y)=>(i._OrtBindOutput=J._a)(o,p,m,y),i._OrtClearBoundOutputs=o=>(i._OrtClearBoundOutputs=J.$a)(o),i._OrtReleaseBinding=o=>(i._OrtReleaseBinding=J.ab)(o),i._OrtRunWithBinding=(o,p,m,y,v)=>(i._OrtRunWithBinding=J.bb)(o,p,m,y,v),i._OrtRun=(o,p,m,y,v,z,B,D)=>(i._OrtRun=J.cb)(o,p,m,y,v,z,B,D),i._OrtEndProfiling=o=>(i._OrtEndProfiling=J.db)(o),i._JsepOutput=(o,p,m)=>(i._JsepOutput=J.eb)(o,p,m),i._JsepGetNodeName=o=>(i._JsepGetNodeName=J.fb)(o);var wr=()=>(wr=J.gb)(),Xe=i._free=o=>(Xe=i._free=J.hb)(o),$r=i._malloc=o=>($r=i._malloc=J.ib)(o),fi=(o,p,m,y,v,z)=>(fi=J.lb)(o,p,m,y,v,z),hs=()=>(hs=J.mb)(),ms=(o,p,m,y,v)=>(ms=J.nb)(o,p,m,y,v),gs=o=>(gs=J.ob)(o),hi=o=>(hi=J.pb)(o),_s=(o,p)=>(_s=J.qb)(o,p),ys=()=>(ys=J.rb)(),bs=(o,p)=>(bs=J.sb)(o,p),vr=o=>(vr=J.tb)(o),mi=o=>(mi=J.ub)(o),gi=()=>(gi=J.vb)(),ws=i.dynCall_ii=(o,p)=>(ws=i.dynCall_ii=J.wb)(o,p),$s=o=>($s=J.xb)(o),vs=()=>(vs=J.yb)(),xs=o=>(xs=J.zb)(o),ks=()=>(ks=J.Ab)();return i.stackSave=()=>gi(),i.stackRestore=o=>vr(o),i.stackAlloc=o=>mi(o),i.setValue=function(o,p,m="i8"){switch(m.endsWith("*")&&(m="*"),m){case"i1":case"i8":ue()[o>>>0]=p;break;case"i16":W()[o>>>1>>>0]=p;break;case"i32":A()[o>>>2>>>0]=p;break;case"i64":U[o>>>3]=BigInt(p);break;case"float":Ee()[o>>>2>>>0]=p;break;case"double":De()[o>>>3>>>0]=p;break;case"*":ae()[o>>>2>>>0]=p;break;default:st(`invalid type for setValue: ${m}`)}},i.getValue=function(o,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":case"i8":return ue()[o>>>0];case"i16":return W()[o>>>1>>>0];case"i32":return A()[o>>>2>>>0];case"i64":return U[o>>>3];case"float":return Ee()[o>>>2>>>0];case"double":return De()[o>>>3>>>0];case"*":return ae()[o>>>2>>>0];default:st(`invalid type for getValue: ${p}`)}},i.UTF8ToString=ve,i.stringToUTF8=Ot,i.lengthBytesUTF8=En,function o(){if(0<qt)Wt=o;else if(u)t(i),pr();else{for(;0<Yr.length;)Yr.shift()(i);0<qt?Wt=o:(i.calledRun=!0,re||(pr(),t(i)))}}(),i.PTR_SIZE=4,a}),Sd=xi,Ts=globalThis.self?.name?.startsWith("em-pthread"),Ts&&xi()}),ki,_a,Is,Be,Td,kr,Es,zs,Si,Cs,Ti,Id,Ii,Ed,Ma=P(()=>{"use strict";Na(),ki=typeof location>"u"?void 0:location.origin,_a=import.meta.url>"file:"&&import.meta.url<"file;",Is=()=>{if(_a){let e=URL;return new URL(new e("ort.webgpu.bundle.min.mjs",import.meta.url).href,ki).href}return import.meta.url},Be=Is(),Td=()=>{if(Be&&!Be.startsWith("blob:"))return Be.substring(0,Be.lastIndexOf("/")+1)},kr=(e,t)=>{try{let r=t??Be;return(r?new URL(e,r):new URL(e)).origin===ki}catch{return!1}},Es=(e,t)=>{let r=t??Be;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},zs=(e,t)=>`${t??"./"}${e}`,Si=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Cs=async e=>(await import(e)).default,Ti=(qm(),sr(vd)).default,Id=async()=>{if(!Be)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(kr(Be))return[void 0,Ti()];let e=await Si(Be);return[e,Ti(e)]},Ii=(Wm(),sr(kd)).default,Ed=async(e,t,r)=>{if(!e&&!t&&Ii&&Be&&kr(Be))return[void 0,Ii];{let i="ort-wasm-simd-threaded.jsep.mjs",a=e??Es(i,t),n=r&&a&&!kr(a,t),s=n?await Si(a):a??zs(i,t);return[n?s:void 0,await Cs(s)]}}}),Ei,Sr,Ht,zi,Os,As,Bs,Da,ge,zt=P(()=>{"use strict";Ma(),Sr=!1,Ht=!1,zi=!1,Os=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},As=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Bs=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Da=async e=>{if(Sr)return Promise.resolve();if(Ht)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(zi)throw new Error("previous call to 'initializeWebAssembly()' failed.");Ht=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Bs())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!As())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=Os();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let a=e.wasmPaths,n=typeof a=="string"?a:void 0,s=a?.mjs,u=s?.href??s,l=a?.wasm,d=l?.href??l,c=e.wasmBinary,[f,h]=await Ed(u,n,r>1),_=!1,g=[];if(t>0&&g.push(new Promise(w=>{setTimeout(()=>{_=!0,w()},t)})),g.push(new Promise((w,x)=>{let $={numThreads:r};if(c)$.wasmBinary=c;else if(d||n)$.locateFile=b=>d??n+b;else if(u&&u.indexOf("blob:")!==0)$.locateFile=b=>new URL(b,u).href;else if(f){let b=Td();b&&($.locateFile=S=>b+S)}h($).then(b=>{Ht=!1,Sr=!0,Ei=b,w(),f&&URL.revokeObjectURL(f)},b=>{Ht=!1,zi=!0,x(b)})})),await Promise.race(g),_)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},ge=()=>{if(Sr&&Ei)return Ei;throw new Error("WebAssembly is not initialized yet.")}}),Fe,Ur,he,Pa=P(()=>{"use strict";zt(),Fe=(e,t)=>{let r=ge(),i=r.lengthBytesUTF8(e)+1,a=r._malloc(i);return r.stringToUTF8(e,a,i),t.push(a),a},Ur=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([a,n])=>{let s=t?t+a:a;if(typeof n=="object")Ur(n,s+".",r,i);else if(typeof n=="string"||typeof n=="number")i(s,n.toString());else if(typeof n=="boolean")i(s,n?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof n}`)})},he=e=>{let t=ge(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetLastError(a,a+i);let n=Number(t.getValue(a,i===4?"i32":"i64")),s=t.getValue(a+i,"*"),u=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${n}, ERROR_MESSAGE: ${u}`)}finally{t.stackRestore(r)}}}),zd,Lm=P(()=>{"use strict";zt(),Pa(),zd=e=>{let t=ge(),r=0,i=[],a=e||{};try{if(e?.logSeverityLevel===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(a.terminate=!1);let n=0;return e?.tag!==void 0&&(n=Fe(e.tag,i)),r=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,n),r===0&&he("Can't create run options."),e?.extra!==void 0&&Ur(e.extra,"",new WeakSet,(s,u)=>{let l=Fe(s,i),d=Fe(u,i);t._OrtAddRunConfigEntry(r,l,d)!==0&&he(`Can't set a run config entry: ${s} - ${u}.`)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(s=>t._free(s)),n}}}),Rs,Ns,Ms,Ft,Ds,Cd,Vm=P(()=>{"use strict";zt(),Pa(),Rs=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Ns=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Ms=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Ft=(e,t,r,i)=>{let a=Fe(t,i),n=Fe(r,i);ge()._OrtAddSessionConfigEntry(e,a,n)!==0&&he(`Can't set a session config entry: ${t} - ${r}.`)},Ds=async(e,t,r)=>{for(let i of t){let a=typeof i=="string"?i:i.name,n=[];switch(a){case"webnn":if(a="WEBNN",typeof i!="string"){let c=i?.deviceType;c&&Ft(e,"deviceType",c,r)}break;case"webgpu":if(a="JS",typeof i!="string"){let c=i;if(c?.preferredLayout){if(c.preferredLayout!=="NCHW"&&c.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${c.preferredLayout}`);Ft(e,"preferredLayout",c.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let s=Fe(a,r),u=n.length,l=0,d=0;if(u>0){l=ge()._malloc(u*ge().PTR_SIZE),r.push(l),d=ge()._malloc(u*ge().PTR_SIZE),r.push(d);for(let c=0;c<u;c++)ge().setValue(l+c*ge().PTR_SIZE,n[c][0],"*"),ge().setValue(d+c*ge().PTR_SIZE,n[c][1],"*")}await ge()._OrtAppendExecutionProvider(e,s,l,d,u)!==0&&he(`Can't append execution provider: ${a}.`)}},Cd=async e=>{let t=ge(),r=0,i=[],a=e||{};Ms(a);try{let n=Rs(a.graphOptimizationLevel??"all"),s=Ns(a.executionMode??"sequential"),u=typeof a.logId=="string"?Fe(a.logId,i):0,l=a.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log serverity level is not valid: ${l}`);let d=a.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let c=typeof a.optimizedModelFilePath=="string"?Fe(a.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(n,!!a.enableCpuMemArena,!!a.enableMemPattern,s,!!a.enableProfiling,0,u,l,d,c),r===0&&he("Can't create session options."),a.executionProviders&&await Ds(r,a.executionProviders,i),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);Ft(r,"enableGraphCapture",a.enableGraphCapture.toString(),i)}if(a.freeDimensionOverrides)for(let[f,h]of Object.entries(a.freeDimensionOverrides)){if(typeof f!="string")throw new Error(`free dimension override name must be a string: ${f}`);if(typeof h!="number"||!Number.isInteger(h)||h<0)throw new Error(`free dimension override value must be a non-negative integer: ${h}`);let _=Fe(f,i);t._OrtAddFreeDimensionOverride(r,_,h)!==0&&he(`Can't set a free dimension override: ${f} - ${h}.`)}return a.extra!==void 0&&Ur(a.extra,"",new WeakSet,(f,h)=>{Ft(r,f,h,i)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&he("Can't release session options."),i.forEach(s=>t._free(s)),n}}}),kt,it,St,jr,qr,Ua,qa,ya,te=P(()=>{"use strict";kt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},it=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},St=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((a,n)=>a*n,1);return r>0?Math.ceil(i*r):void 0},jr=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},qr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Ua=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",qa=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ya=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Wa,Od=P(()=>{"use strict";Na(),Wa=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),n;try{n=new ArrayBuffer(i)}catch(u){if(u instanceof RangeError){let l=Math.ceil(i/65536);n=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw u}let s=0;for(;;){let{done:u,value:l}=await a.read();if(u)break;let d=l.byteLength;new Uint8Array(n,s,d).set(l),s+=d}return new Uint8Array(n,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Ps,Us,qs,Ws,La,Ls,le,at=P(()=>{"use strict";te(),Ps=["V","I","W","E","F"],Us=(e,t)=>{console.log(`[${Ps[e]},${new Date().toISOString()}]${t}`)},La=(e,t)=>{qs=e,Ws=t},Ls=(e,t)=>{let r=qr(e),i=qr(qs);r>=i&&Us(r,typeof t=="function"?t():t)},le=(...e)=>{Ws&&Ls(...e)}}),Vs,Dt,O,Wr,Ad,Bd,Rd,ne=P(()=>{"use strict";Vs=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Dt=class{static calcShape(e,t,r=!1){let i=e.length,a=t.length;if(i===0)return t;if(a===0)return e;let n=Math.max(e.length,t.length),s=new Array(n);if(r){if(i<2||a<2)return;let u=Vs.calcMatMulShape([e[i-2],e[i-1]],[t[a-2],t[a-1]]);if(u===void 0)return;[s[n-2],s[n-1]]=u}for(let u=r?3:1;u<=n;u++){let l=i-u<0?1:e[i-u],d=a-u<0?1:t[a-u];if(l!==d&&l>1&&d>1)return;let c=Math.max(l,d);if(l&&d)s[n-u]=Math.max(l,d);else{if(c>1)return;s[n-u]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let a=1;a<=r;a++)if(e[r-a]!==1&&e[r-a]!==t[i-a])return!1;return!0}},O=class Mr{static size(t){return Mr.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let a=new Array(i),n=i-1;for(;n>=0;){if(t[n]%r===0){a[n]=t[n]/r;break}if(r%t[n]!==0)throw new Error("cannot convert shape");a[n]=1,r/=t[n],n--}for(n--;n>=0;n--)a[n]=t[n];return a}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Mr.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Mr.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let a=1;for(let n=r;n<i;n++){if(t[n]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[n])}return a}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let a=r-3;a>=0;--a)i[a]=i[a+1]*t[a+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((a,n)=>a+r[n]+r[n+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,a)=>i===r[a])}},Wr=class rr{static adjustPoolAttributes(t,r,i,a,n,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let u=0;u<r.length-2;u++)u>=i.length?i.push(r[u+2]):i[u]=r[u+2];for(let u=0;u<i.length;u++)if(u<a.length){if(a[u]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let u=0;u<i.length;u++)if(u<n.length){if(n[u]<0)throw new Error("dilations should be greater than or equal to 1")}else n.push(1);for(let u=0;u<i.length*2;u++)if(u<s.length){if(s[u]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let u=0;u<i.length;u++){if(i[u]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[u]>=i[u]||s[u+i.length]>=i[u])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,a,n,s,u){if(u){if(n.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)rr.adjustPadAndReturnShape(t[l+(s?1:2)],r[l],i[l],a[l],n,l,l+t.length-2,u)}}static computePoolOutputShape(t,r,i,a,n,s,u){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return rr.computeShapeHelper(t,r,l,i,a,n,s,u),l}static computeConvOutputShape(t,r,i,a,n,s,u){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return rr.computeShapeHelper(!1,t,l,i,a,n,s,u),l}static computeShapeHelper(t,r,i,a,n,s,u,l){if(t)for(let d=0;d<r.length-2;d++)i.push(1);else for(let d=0;d<r.length-2;d++)i.push(rr.adjustPadAndReturnShape(r[d+2],a[d],n[d],s[d],u,d,d+r.length-2,l))}static adjustPadAndReturnShape(t,r,i,a,n,s,u,l){let d=i*(a-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return n[s]=0,n[u]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+r-1)/r-1)*r+a-t;return n[s]=Math.floor(l==="SAME_LOWER"?(c+1)/2:c/2),n[u]=c-n[s],Math.floor((t+c-a)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+n[s]+n[u]-d)/r+1)}},Ad=class{static getShapeOfGemmResult(e,t,r,i,a){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let n,s,u;t?(n=e[1],s=e[0]):(n=e[0],s=e[1]);let l=-1;if(i?(u=r[0],l=1):(u=r[1],l=0),r[l]!==s)throw new Error("dimension mismatch");if(n<=0||u<=0||s<=0)throw new Error("invalid shape specified");if(a&&!Dt.isValidBroadcast(a,[n,u]))throw new Error("gemm: invalid bias shape for broadcast");return[n,u,s]}},Bd=-34028234663852886e22,Rd=34028234663852886e22}),Va,Nd=P(()=>{"use strict";te(),Va=(e,t)=>new(jr(t))(e)}),Ci,ba,Oi,Gs,Ai,Hs,Bi,Ri,Ni,Fs,Md,Gm=P(()=>{"use strict";te(),at(),Ci=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),ba=(e,t)=>{if(t==="int32")return e;let r=Ci.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let a=e.byteLength/i,n=new(jr(t))(e.buffer,e.byteOffset,a);switch(t){case"int64":case"uint64":{let s=new Int32Array(a);for(let u=0;u<a;u++){let l=n[u];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[u]=Number(l)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&n.some(u=>u>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(n,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Oi=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let a=BigInt64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"uint64":{if(i.some(n=>n<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let a=BigUint64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"int8":{if(i.some(n=>n<-128||n>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let a=Int8Array.from(i,Number);return new Uint8Array(a.buffer)}case"uint8":{if(i.some(a=>a<0||a>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(n=>n<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let a=Uint32Array.from(i,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Gs=1,Ai=()=>Gs++,Hs=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Bi=(e,t)=>{let r=Ci.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,a)=>i*a)*r/8):0},Ri=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:a,shape:n,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=a,this.tensorShape=n,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Bi(this.dataType,this.tensorShape)}destroy(){le("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=Oi(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return r.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,a)=>i===r[a])}setIsDataConverted(e){this.isDataConverted=e}},Ni=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let a=this.tensorManager.getMLContext(e),n;if(!a.opSupportLimits().input.dataTypes.includes(t)){if(n=Hs.get(t),!n||!a.opSupportLimits().input.dataTypes.includes(n))throw new Error(`WebNN backend does not support data type: ${t}`);le("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${n}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(a,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==Bi(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,s,!0,!0,n),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=ba(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else le("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?Oi(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Fs=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=Ai();return this.tensorTrackersById.set(e,new Ni(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,a){le("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${a}}`);let n=this.tensorTrackersById.get(t);if(!n)throw new Error("Tensor not found.");return n.ensureTensor(e,r,i,a)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){le("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let a=this.getMLContext(e),n=Ai(),s=new Ri({sessionId:e,context:a,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(n,new Ni(this,s)),this.externalTensors.add(s),n}async getCachedTensor(e,t,r,i,a,n,s){let u=this.getMLContext(e);for(let[d,c]of this.freeTensors.entries())if(c.canReuseTensor(u,t,r)){le("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let f=this.freeTensors.splice(d,1)[0];return f.sessionId=e,f}le("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let l=await u.createTensor({dataType:s??t,shape:r,dimensions:r,usage:i,writable:a,readable:n});return new Ri({sessionId:e,context:u,tensor:l,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Md=(...e)=>new Fs(...e)}),jt,js,Dd,Hm=P(()=>{"use strict";te(),zt(),Nd(),Gm(),at(),jt=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),js=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((a,n)=>a===i[n]&&e[a]===t[a])},Dd=class{constructor(e){this.tensorManager=Md(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,La(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){le("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){le("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)le("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>js(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(a=>a.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){le("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,a){let n=jt.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,n,i,a)}async createTemporaryTensor(e,t,r){le("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=jt.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,a,i,r,!1);let n=this.temporarySessionTensorIds.get(e);return n?n.push(a):this.temporarySessionTensorIds.set(e,[a]),a}uploadTensor(e,t){if(!ge().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");le("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Va(r,t)}}registerMLTensor(e,t,r,i){let a=jt.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);let n=this.tensorManager.registerTensor(e,t,a,i);return le("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${a}, dimensions: ${i}} -> {tensorId: ${n}}`),n}registerMLConstant(e,t,r,i,a,n,s=!1){if(!n)throw new Error("External mounted files are not available.");let u=e;e.startsWith("./")&&(u=e.substring(2));let l=n.get(u);if(!l)throw new Error(`File with name ${u} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+r).buffer,c;switch(a.dataType){case"float32":c=new Float32Array(d);break;case"float16":c=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(d):new Uint16Array(d);break;case"int32":c=new Int32Array(d);break;case"uint32":c=new Uint32Array(d);break;case"int64":if(s){let f=ba(new Uint8Array(d),"int64");c=new Int32Array(f.buffer),a.dataType="int32"}else c=new BigInt64Array(d);break;case"uint64":c=new BigUint64Array(d);break;case"int8":c=new Int8Array(d);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${a.dataType} in creating WebNN Constant from external data.`)}return le("verbose",()=>`[WebNN] registerMLConstant {dataType: ${a.dataType}, shape: ${a.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),i.constant(a,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=this.mlContextBySessionId.get(e),a=jt.get(kt(t));return typeof a>"u"?!1:r?!!i?.opSupportLimits().input.dataTypes.includes(a):!!i?.opSupportLimits().output.dataTypes.includes(a)}flush(){}}}),Ga=P(()=>{"use strict"}),Mi,Tr,Ir,Ks,Zs,Di,wa,Qs,Pd,Fm=P(()=>{"use strict";at(),Ga(),Mi=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Tr=[],Ir=e=>Math.ceil(Number(e)/16)*16,Ks=e=>{for(let t=0;t<Tr.length;t++){let r=Tr[t];if(e<=r)return r}return Math.ceil(e/16)*16},Zs=1,Di=()=>Zs++,wa=async(e,t,r,i)=>{let a=Ir(r),n=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,n,0,a),e.flush(),await n.mapAsync(GPUMapMode.READ);let u=n.getMappedRange();if(i){let l=i();return l.set(new Uint8Array(u,0,r)),l}else return new Uint8Array(u.slice(0,r))}finally{n.destroy()}},Qs=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Mi)Tr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,a=t.byteLength,n=Ir(a),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==a)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${a}`);let u=this.backend.device.createBuffer({mappedAtCreation:!0,size:n,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=u.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,i,a)),u.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(u,0,s.gpuData.buffer,0,n),this.backend.device.queue.submit([d.finish()]),u.destroy(),le("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=Ir(r.originalSize),n=this.backend.getCommandEncoder();this.backend.endComputePass(),n.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,a)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return le("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=Di();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),le("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),le("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Ks(e),i,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,n=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||n){let u=(a?this.freeBuffers:this.freeUniformBuffers).get(r);u?u.length>0?i=u.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:Di(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),le("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return le("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await wa(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Mi.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(le("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Pd=(...e)=>new Qs(...e)}),Xs,ce,we=P(()=>{"use strict";Xs=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},ce=e=>new Xs(e)}),Pt,Er,ke,Ie,Q,be,$a,Mt,mt,K,Kt,R,j,Ud,Ha,Ys,qd,se=P(()=>{"use strict";te(),ne(),Pt=64,Er=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},ke=(e,t=1)=>{let r=Er(e,t);return typeof r=="string"?r:r[0]},Ie=(e,t=1)=>{let r=Er(e,t);return typeof r=="string"?r:r[1]},Q=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:O.computeStrides(r)})}),t},be=e=>e%4===0?4:e%2===0?2:1,$a=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Mt=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,mt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,K=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,Kt=(e,t,r,i,a)=>{let n=typeof r=="number",s=n?r:r.length,u=[...new Array(s).keys()],l=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=Er(t,a),c=typeof d=="string"?d:d[1],f=typeof d=="string"?d:d[0],h={indices:l,value:c,storage:f,tensor:t},_=M=>typeof M=="string"?M:`${M}u`,g={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},w=n?"uniforms.":"",x=`${w}${e}_shape`,$=`${w}${e}_strides`,b="";for(let M=0;M<s-1;M++)b+=`
    let dim${M} = current / ${K($,M,s)};
    let rest${M} = current % ${K($,M,s)};
    indices[${M}] = dim${M};
    current = rest${M};
    `;b+=`indices[${s-1}] = current;`;let S=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${h.indices} {
    var indices: ${h.indices};
    var current = offset;
    ${b}
    return indices;
  }`,k=M=>(g.offsetToIndices=!0,s<2?M:`o2i_${e}(${M})`),I=[];if(s>=2)for(let M=s-1;M>=0;M--)I.push(`${K($,M,s)} * (indices[${M}])`);let E=s<2?"":`
  fn i2o_${e}(indices: ${h.indices}) -> u32 {
    return ${I.join("+")};
  }`,T=M=>(g.indicesToOffset=!0,s<2?M:`i2o_${e}(${M})`),C=(...M)=>s===0?"0u":`${h.indices}(${M.map(_).join(",")})`,N=(M,W)=>s<2?`${M}`:`${K(M,W,s)}`,q=(M,W,ie)=>s<2?`${M}=${ie};`:`${K(M,W,s)}=${ie};`,V={},G=(M,W)=>{g.broadcastedIndicesToOffset=!0;let ie=`${W.name}broadcastedIndicesTo${e}Offset`;if(ie in V)return`${ie}(${M})`;let A=[];for(let ae=s-1;ae>=0;ae--){let Ee=W.indicesGet("outputIndices",ae+W.rank-s);A.push(`${N($,ae)} * (${Ee} % ${N(x,ae)})`)}return V[ie]=`fn ${ie}(outputIndices: ${W.type.indices}) -> u32 {
             return ${A.length>0?A.join("+"):"0u"};
           }`,`${ie}(${M})`},Y=(M,W)=>(()=>{if(h.storage===h.value)return`${e}[${M}]=${W};`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`${e}[${M}]=vec2<u32>(u32(${W}), select(0u, 0xFFFFFFFFu, ${W} < 0));`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`${e}[${M}]=vec2<u32>(u32(${W}), 0u);`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`${e}[${M}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${W}));`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),U=M=>(()=>{if(h.storage===h.value)return`${e}[${M}]`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`i32(${e}[${M}].x)`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`u32(${e}[${M}].x)`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${M}] & 0xFFu), bool(${e}[${M}] & 0xFF00u), bool(${e}[${M}] & 0xFF0000u), bool(${e}[${M}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),ee=s<2?"":`
  fn get_${e}ByIndices(indices: ${h.indices}) -> ${c} {
    return ${U(`i2o_${e}(indices)`)};
  }`,X=s<2?"":(()=>{let M=u.map(ie=>`d${ie}: u32`).join(", "),W=u.map(ie=>`d${ie}`).join(", ");return`
  fn get_${e}(${M}) -> ${c} {
    return get_${e}ByIndices(${C(W)});
  }`})(),H=(...M)=>{if(M.length!==s)throw new Error(`indices length must be ${s}`);let W=M.map(_).join(",");return s===0?U("0u"):s===1?U(W[0]):(g.get=!0,g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}(${W})`)},re=M=>s<2?U(M):(g.getByIndices=!0,g.indicesToOffset=!0,`get_${e}ByIndices(${M})`),F=s<2?"":`
  fn set_${e}ByIndices(indices: ${h.indices}, value: ${c}) {
    ${Y(`i2o_${e}(indices)`,"value")}
  }`,ue=s<2?"":(()=>{let M=u.map(ie=>`d${ie}: u32`).join(", "),W=u.map(ie=>`d${ie}`).join(", ");return`
  fn set_${e}(${M}, value: ${c}) {
    set_${e}ByIndices(${C(W)}, value);
  }`})();return{impl:()=>{let M=[],W=!1;return g.offsetToIndices&&(M.push(S),W=!0),g.indicesToOffset&&(M.push(E),W=!0),g.broadcastedIndicesToOffset&&(Object.values(V).forEach(ie=>M.push(ie)),W=!0),g.set&&(M.push(ue),W=!0),g.setByIndices&&(M.push(F),W=!0),g.get&&(M.push(X),W=!0),g.getByIndices&&(M.push(ee),W=!0),!n&&W&&M.unshift(`const ${x} = ${h.indices}(${r.join(",")});`,`const ${$} = ${h.indices}(${O.computeStrides(r).join(",")});`),M.join(`
`)},type:h,offsetToIndices:k,indicesToOffset:T,broadcastedIndicesToOffset:G,indices:C,indicesGet:N,indicesSet:q,set:(...M)=>{if(M.length!==s+1)throw new Error(`indices length must be ${s}`);let W=M[s];if(typeof W!="string")throw new Error("value must be string");let ie=M.slice(0,s).map(_).join(",");return s===0?Y("0u",W):s===1?Y(ie[0],W):(g.set=!0,g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}(${ie}, ${W})`)},setByOffset:Y,setByIndices:(M,W)=>s<2?Y(M,W):(g.setByIndices=!0,g.indicesToOffset=!0,`set_${e}ByIndices(${M}, ${W});`),get:H,getByOffset:U,getByIndices:re,usage:i,name:e,strides:$,shape:x,rank:s}},R=(e,t,r,i=1)=>Kt(e,t,r,"input",i),j=(e,t,r,i=1)=>Kt(e,t,r,"output",i),Ud=(e,t,r)=>Kt(e,t,r,"atomicOutput",1),Ha=(e,t,r,i=1)=>Kt(e,t,r,"internal",i),Ys=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Pt){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,n=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=a?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${n}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let a=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${a}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},qd=(e,t)=>new Ys(e,t)}),Js,Pi,eo,to,ro,io,Me,Wd,Ld,gt=P(()=>{"use strict";te(),ne(),we(),se(),Js=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Pi=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),eo=(e,t)=>O.sortBasedOnPerm(e,Pi(e.length,t)),to=(e,t,r,i)=>{let a=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let n=0;n<t;++n)a+=`a[${e[n]}]=i[${n}];`;return a+="return a;}"},ro=(e,t)=>{let r=[],i=[];for(let a=0;a<e.length;++a)e[a]!==1&&r.push(e[a]),e[t[a]]!==1&&i.push(t[a]);return{newShape:r,newPerm:i}},io=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},Me=(e,t)=>{let r=e.dataType,i=e.dims.length,a=Pi(i,t),n=eo(e.dims,a),s=e.dims,u=n,l=i<2||io(a,e.dims),d;if(l)return d=g=>{let w=R("input",r,s,4),x=j("output",r,u,4);return`
  ${g.registerUniform("output_size","u32").declareVariables(w,x)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let g=O.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64/4)},programUniforms:[{type:12,data:Math.ceil(g/4)}]}},getShaderSource:d};let{newShape:c,newPerm:f}=ro(e.dims,a),h=O.areEqual(f,[2,3,1]),_=O.areEqual(f,[3,1,2]);if(c.length===2||h||_){s=h?[c[0],c[1]*c[2]]:_?[c[0]*c[1],c[2]]:c,u=[s[1],s[0]];let g=16;return d=w=>{let x=R("a",r,s.length),$=j("output",r,u.length);return`
  ${w.registerUniform("output_size","u32").declareVariables(x,$)}
  var<workgroup> tile : array<array<${$.type.value}, ${g+1}>, ${g}>;
  ${w.mainStart([g,g,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${g} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${g}u + local_id.x;
    let input_row = workgroup_id_x * ${g}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${x.getByIndices(`${x.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${g}u + local_id.x;
    let output_row = workgroup_id_y * ${g}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${$.setByIndices(`${$.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=O.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(u[1]/g),y:Math.ceil(u[0]/g)},programUniforms:[{type:12,data:w},...Q(s,u)]}},getShaderSource:d}}return d=g=>{let w=R("a",r,s.length),x=j("output",r,u.length);return`
  ${g.registerUniform("output_size","u32").declareVariables(w,x)}

  ${to(a,i,w,x)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${x.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${x.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let g=O.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...Q(s,u)]}},getShaderSource:d}},Wd=(e,t)=>{Js(e.inputs,t.perm),e.compute(Me(e.inputs[0],t.perm))},Ld=e=>ce({perm:e.perm})}),ao,no,so,oo,uo,lo,po,co,fo,ho,We,Vd,Gd,Hd,Fd,jd,Kd,Zd,Qd,Xd,Yd,jm=P(()=>{"use strict";te(),ne(),se(),Fa(),gt(),ao={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},no={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},so={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},oo={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},uo=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},lo=(e,t)=>{let r=[],i=e.length;for(let n=0;n<i;n++)t.indexOf(n)===-1&&r.push(e[n]);let a=t.map(n=>e[n]);return[r,a]},po=(e,t)=>{let r=e.length+t.length,i=[],a=0;for(let n=0;n<r;n++)t.indexOf(n)===-1?i.push(e[a++]):i.push(1);return i},co=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},fo=(e,t)=>{let r=[];if(!co(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},ho=(e,t,r,i,a,n,s)=>{let u=r[0].dims,l=O.size(n),d=O.size(s),c=R("_A",r[0].dataType,u),f=j("output",a,n),h=64;l===1&&(h=256);let _=`
          var<workgroup> aBestValues : array<f32, ${h}>;
       `,g=w=>`
        ${w.registerUniform("reduceSize","u32").declareVariables(c,f)}
        ${_}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${w.mainStart(h)}

          let outputIndex = global_idx / ${h};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${so[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${h}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${ao[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${h}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${no[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${f.setByOffset("outputIndex",`${i==="mean"?`${f.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${f.type.storage}(${oo[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${h}`,inputDependencies:["type"]},getShaderSource:g,getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},We=(e,t,r,i)=>{let a=e.inputs.length===1?r:va(e.inputs,r),n=a.axes;n.length===0&&!a.noopWithEmptyAxes&&(n=e.inputs[0].dims.map((_,g)=>g));let s=O.normalizeAxes(n,e.inputs[0].dims.length),u=s,l=e.inputs[0],d=fo(u,e.inputs[0].dims.length);d.length>0&&(l=e.compute(Me(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],u=uo(u.length,l.dims.length));let[c,f]=lo(l.dims,u),h=c;a.keepDims&&(h=po(c,s)),e.compute(ho(t,a.cacheKey,[l],i,e.inputs[0].dataType,h,f),{inputs:[l]})},Vd=(e,t)=>{We(e,"ReduceMeanShared",t,"mean")},Gd=(e,t)=>{We(e,"ReduceL1Shared",t,"l1")},Hd=(e,t)=>{We(e,"ReduceL2Shared",t,"l2")},Fd=(e,t)=>{We(e,"ReduceLogSumExpShared",t,"logSumExp")},jd=(e,t)=>{We(e,"ReduceMaxShared",t,"max")},Kd=(e,t)=>{We(e,"ReduceMinShared",t,"min")},Zd=(e,t)=>{We(e,"ReduceProdShared",t,"prod")},Qd=(e,t)=>{We(e,"ReduceSumShared",t,"sum")},Xd=(e,t)=>{We(e,"ReduceSumSquareShared",t,"sumSquare")},Yd=(e,t)=>{We(e,"ReduceLogSumShared",t,"logSum")}}),Le,mo,Lr,va,Ve,go,_o,yo,bo,wo,$o,vo,xo,ko,So,Ge,Jd,ep,tp,rp,ip,ap,np,sp,op,up,Fa=P(()=>{"use strict";te(),ne(),we(),se(),jm(),Le=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},mo=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Lr=(e,t,r,i,a,n,s=!1,u=!1)=>{let l=[],d=r[0].dims,c=d.length,f=O.normalizeAxes(a,c),h=!u&&f.length===0;d.forEach((w,x)=>{h||f.indexOf(x)>=0?s&&l.push(1):l.push(w)});let _=l.length,g=O.size(l);return{name:e,shaderCache:t,getShaderSource:w=>{let x=[],$=R("_A",r[0].dataType,c),b=j("output",n,_),S=i($,b,f),k=S[2];for(let I=0,E=0;I<c;I++)h||f.indexOf(I)>=0?(s&&E++,k=`for(var j${I}: u32 = 0; j${I} < ${d[I]}; j${I}++) {
                  ${S[2].includes("last_index")?`let last_index = j${I};`:""}
                  ${$.indicesSet("input_indices",I,`j${I}`)}
                  ${k}
                }`):(x.push(`${$.indicesSet("input_indices",I,b.indicesGet("output_indices",E))};`),E++);return`

        ${w.registerUniform("output_size","u32").declareVariables($,b)}

        ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${$.type.indices};
          let output_indices = ${b.offsetToIndices("global_idx")};

          ${x.join(`
`)}
          ${S[0]}       // init ops for reduce max/min
          ${S[1]}
          ${k}
          ${S[3]}
          ${S.length===4?b.setByOffset("global_idx","value"):S.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:n}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...Q(d,l)]})}},va=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),ce({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Ve=(e,t,r,i)=>{let a=e.inputs,n=a.length===1?r:va(a,r);e.compute(Lr(t,{hint:n.cacheKey,inputDependencies:["rank"]},[a[0]],n.noopWithEmptyAxes&&n.axes.length===0?mo:i,n.axes,a[0].dataType,n.keepDims,n.noopWithEmptyAxes),{inputs:[0]})},go=(e,t)=>{Le(e.inputs),Ve(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},_o=(e,t)=>{Le(e.inputs),Ve(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},yo=(e,t)=>{Le(e.inputs),Ve(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},bo=(e,t)=>{Le(e.inputs),Ve(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},wo=(e,t)=>{Le(e.inputs),Ve(e,"ReduceMax",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(r.indicesSet("input_indices",s,0));return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},$o=(e,t)=>{Le(e.inputs),Ve(e,"ReduceMean",t,(r,i,a)=>{let n=1;for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&(n*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${n});`]})},vo=(e,t)=>{Le(e.inputs),Ve(e,"ReduceMin",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(`input_indices[${s}] = 0;`);return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},xo=(e,t)=>{Le(e.inputs),Ve(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},ko=(e,t)=>{Le(e.inputs),Ve(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},So=(e,t)=>{Le(e.inputs),Ve(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Ge=(e,t,r)=>{if(t.length===0)return r;let i=1,a=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?i*=e[n]:a*=e[n];return a<32&&i>1024},Jd=(e,t)=>{Ge(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?$o(e,t):Vd(e,t)},ep=(e,t)=>{Ge(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?_o(e,t):Gd(e,t)},tp=(e,t)=>{Ge(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?yo(e,t):Hd(e,t)},rp=(e,t)=>{Ge(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?bo(e,t):Fd(e,t)},ip=(e,t)=>{Ge(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?wo(e,t):jd(e,t)},ap=(e,t)=>{Ge(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?vo(e,t):Kd(e,t)},np=(e,t)=>{Ge(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?xo(e,t):Zd(e,t)},sp=(e,t)=>{Ge(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ko(e,t):Qd(e,t)},op=(e,t)=>{Ge(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?So(e,t):Xd(e,t)},up=(e,t)=>{Ge(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?go(e,t):Yd(e,t)}}),Ui,lp,dp,xa,Km=P(()=>{"use strict";te(),we(),Fa(),Ui=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},lp=(e,t)=>{Ui(e.inputs);let r=(i,a,n)=>{let s=[];for(let u=0;u<i.rank;u++)(n.indexOf(u)>=0||n.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(Lr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},dp=(e,t)=>{Ui(e.inputs);let r=(i,a,n)=>{let s=[];for(let u=0;u<i.rank;u++)(n.indexOf(u)>=0||n.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(Lr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},xa=e=>ce(e)}),To,zr,Io,Eo,zo,or,Co,pp,ja=P(()=>{"use strict";te(),ne(),Ga(),se(),To=(e,t)=>{let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4],u=e[5];if(s&&u)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],c=r.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let f=a.dims[0]/3,h=f,_=h;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let S of t.qkvHiddenSizes)if(S%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");f=t.qkvHiddenSizes[0],h=t.qkvHiddenSizes[1],_=t.qkvHiddenSizes[2]}let g=d;if(f!==h)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==f+h+_)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let w=0;if(s){if(h!==_)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==h/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(w=s.dims[3])}let x=g+w,$=-1,b=0;if(n)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(u){if(u.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==l||u.dims[1]!==t.numHeads||u.dims[2]!==d||u.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:w,kvSequenceLength:g,totalSequenceLength:x,maxSequenceLength:$,inputHiddenSize:c,hiddenSize:f,vHiddenSize:_,headSize:Math.floor(f/t.numHeads),vHeadSize:Math.floor(_/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},zr=(e,t,r)=>t&&e?`
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
    `,Io=(e,t,r,i,a,n,s,u)=>{let l=be(s?1:n),d=64,c=n/l;c<d&&(d=32);let f=Math.ceil(n/l/d),h=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:c},{type:12,data:f}],_=ke(e.dataType,l),g=Ie(1,l),w=["type"];s&&w.push("type"),u&&w.push("type");let x=$=>{let b=j("x",e.dataType,e.dims,l),S=[b],k=s?R("seq_lens",s.dataType,s.dims):void 0;k&&S.push(k);let I=u?R("total_sequence_length_input",u.dataType,u.dims):void 0;I&&S.push(I);let E=Ie(e.dataType),T=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${$.registerUniforms(T).declareVariables(...S)}
  ${$.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${zr(k,I,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${g}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${g}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${g}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${g}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${b.type.value}(${E}(1.0) / ${E}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${g}(x[offset + i]);
        x[offset + i] = ${b.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${b.type.value}(${E}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${_};${l}`,inputDependencies:w},getShaderSource:x,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:a,z:t*r},programUniforms:h})}},Eo=(e,t,r,i,a,n,s,u,l)=>{let d=s+n.kvSequenceLength,c=[n.batchSize,n.numHeads,n.sequenceLength,d],f=e>1&&i,h=n.kvNumHeads?n.kvNumHeads:n.numHeads,_=f?[n.batchSize,h,d,n.headSize]:void 0,g=n.nReps?n.nReps:1,w=n.scale===0?1/Math.sqrt(n.headSize):n.scale,x=be(n.headSize),$=n.headSize/x,b=12,S={x:Math.ceil(d/b),y:Math.ceil(n.sequenceLength/b),z:n.batchSize*n.numHeads},k=[{type:12,data:n.sequenceLength},{type:12,data:$},{type:12,data:d},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:1,data:w},{type:12,data:s},{type:12,data:n.kvSequenceLength},{type:12,data:g}],I=f&&i&&O.size(i.dims)>0,E=["type","type"];I&&E.push("type"),a&&E.push("type"),u&&E.push("type"),l&&E.push("type");let T=[{dims:c,dataType:t.dataType,gpuDataType:0}];f&&T.push({dims:_,dataType:t.dataType,gpuDataType:0});let C=N=>{let q=R("q",t.dataType,t.dims,x),V=R("key",r.dataType,r.dims,x),G=[q,V];if(I){let F=R("past_key",i.dataType,i.dims,x);G.push(F)}a&&G.push(R("attention_bias",a.dataType,a.dims));let Y=u?R("seq_lens",u.dataType,u.dims):void 0;Y&&G.push(Y);let U=l?R("total_sequence_length_input",l.dataType,l.dims):void 0;U&&G.push(U);let ee=j("output",t.dataType,c),X=[ee];f&&X.push(j("present_key",t.dataType,_,x));let H=Ie(1,x),re=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;

  var<workgroup> tileQ: array<${q.type.storage}, ${b*b}>;
  var<workgroup> tileK: array<${q.type.storage}, ${b*b}>;
  ${N.registerUniforms(re).declareVariables(...G,...X)}
  ${N.mainStart([b,b,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${g===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${g===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${zr(Y,U,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${I&&f?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${f?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${H}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${I&&f?`
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
          value += ${H}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(x){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${x}`)}})()};
        output[outputIdx] = ${ee.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${x};${a!==void 0};${i!==void 0};${e}`,inputDependencies:E},getRunData:()=>({outputs:T,dispatchGroup:S,programUniforms:k}),getShaderSource:C}},zo=(e,t,r,i,a,n,s=void 0,u=void 0)=>{let l=n+a.kvSequenceLength,d=a.nReps?a.nReps:1,c=a.vHiddenSize*d,f=e>1&&i,h=a.kvNumHeads?a.kvNumHeads:a.numHeads,_=f?[a.batchSize,h,l,a.headSize]:void 0,g=[a.batchSize,a.sequenceLength,c],w=12,x={x:Math.ceil(a.vHeadSize/w),y:Math.ceil(a.sequenceLength/w),z:a.batchSize*a.numHeads},$=[{type:12,data:a.sequenceLength},{type:12,data:l},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:c},{type:12,data:n},{type:12,data:a.kvSequenceLength},{type:12,data:d}],b=f&&i&&O.size(i.dims)>0,S=["type","type"];b&&S.push("type"),s&&S.push("type"),u&&S.push("type");let k=[{dims:g,dataType:t.dataType,gpuDataType:0}];f&&k.push({dims:_,dataType:t.dataType,gpuDataType:0});let I=E=>{let T=R("probs",t.dataType,t.dims),C=R("v",r.dataType,r.dims),N=[T,C];b&&N.push(R("past_value",i.dataType,i.dims));let q=s?R("seq_lens",s.dataType,s.dims):void 0;s&&N.push(q);let V=u?R("total_sequence_length_input",u.dataType,u.dims):void 0;u&&N.push(V);let G=[j("output",t.dataType,g)];f&&G.push(j("present_value",t.dataType,_));let Y=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;
  var<workgroup> tileQ: array<${T.type.value}, ${w*w}>;
  var<workgroup> tileV: array<${T.type.value}, ${w*w}>;
  ${E.registerUniforms(Y).declareVariables(...N,...G)}
  ${E.mainStart([w,w,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${zr(q,V,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${b&&f?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${f?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${T.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${b&&f?`
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:S},getRunData:()=>({outputs:k,dispatchGroup:x,programUniforms:$}),getShaderSource:I}},or=(e,t,r,i,a,n,s,u,l,d,c=void 0,f=void 0)=>{let h=Math.min(e.outputCount,1+(s?1:0)+(u?1:0)),_=h>1?d.pastSequenceLength:0,g=_+d.kvSequenceLength,w=l&&O.size(l.dims)>0?l:void 0,x=[t,r];h>1&&s&&O.size(s.dims)>0&&x.push(s),w&&x.push(w),c&&x.push(c),f&&x.push(f);let $=e.compute(Eo(h,t,r,s,w,d,_,c,f),{inputs:x,outputs:h>1?[-1,1]:[-1]})[0];e.compute(Io($,d.batchSize,d.numHeads,_,d.sequenceLength,g,c,f),{inputs:c&&f?[$,c,f]:[$],outputs:[]});let b=[$,i];h>1&&u&&O.size(u.dims)>0&&b.push(u),c&&b.push(c),f&&b.push(f),e.compute(zo(h,$,i,u,d,_,c,f),{inputs:b,outputs:h>1?[0,2]:[0]})},Co=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,a=t.inputHiddenSize,n=t.headSize,s=12,u={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:i},{type:12,data:a},{type:12,data:n},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=f=>{let h=j("output_q",l[0].dataType,r),_=j("output_k",l[0].dataType,r),g=j("output_v",l[0].dataType,r),w=R("input",l[0].dataType,l[0].dims),x=R("weight",l[1].dataType,l[1].dims),$=R("bias",l[2].dataType,l[2].dims),b=w.type.storage,S=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${b}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${b}, ${s*s}>;
  var<workgroup> tileWeightK: array<${b}, ${s*s}>;
  var<workgroup> tileWeightV: array<${b}, ${s*s}>;
  ${f.registerUniforms(S).declareVariables(w,x,$,h,_,g)}
  ${f.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${b}(0);
    var valueK = ${b}(0);
    var valueV = ${b}(0);
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:u,programUniforms:d}),getShaderSource:c},{inputs:l,outputs:[-1,-1,-1]})},pp=(e,t)=>{let r=To(e.inputs,t),[i,a,n]=Co(e,r);return or(e,i,a,n,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Oo,Ao,Bo,cp,Zm=P(()=>{"use strict";Ke(),te(),ne(),we(),se(),Oo=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,a,n)=>{let s=a.length;if(s!==i.length)throw new Error(`${n}: num dimensions != ${s}`);a.forEach((u,l)=>{if(u!==i[l])throw new Error(`${n}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Ao=(e,t)=>{let{epsilon:r,spatial:i,format:a}=t,n=e[0].dims,s=i?be(n[n.length-1]):1,u=a==="NHWC"&&n.length>1?s:1,l=O.size(n)/s,d=i,c=d?n.length:n,f=R("x",e[0].dataType,e[0].dims,s),h=R("scale",e[1].dataType,e[1].dims,u),_=R("bias",e[2].dataType,e[2].dims,u),g=R("inputMean",e[3].dataType,e[3].dims,u),w=R("inputVar",e[4].dataType,e[4].dims,u),x=j("y",e[0].dataType,c,s),$=()=>{let S="";if(i)S=`let cOffset = ${n.length===1?"0u":a==="NHWC"?`outputIndices[${n.length-1}] / ${s}`:"outputIndices[1]"};`;else if(a==="NCHW")S=`
            ${x.indicesSet("outputIndices","0","0")}
            let cOffset = ${x.indicesToOffset("outputIndices")};`;else{S=`var cIndices = ${h.type.indices}(0);
                       cIndices[0] = outputIndices[${n.length-1}];`;for(let k=1;k<h.rank;k++)S+=`cIndices[${k}] = outputIndices[${k}];`;S+=`let cOffset = ${h.indicesToOffset("cIndices")};`}return S},b=S=>`
  const epsilon = ${r};
  ${S.registerUniform("outputSize","u32").declareVariables(f,h,_,g,w,x)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${x.offsetToIndices(`global_idx * ${s}`)};
    ${$()}
    let scale = ${h.getByOffset("cOffset")};
    let bias = ${_.getByOffset("cOffset")};
    let inputMean = ${g.getByOffset("cOffset")};
    let inputVar = ${w.getByOffset("cOffset")};
    let x = ${f.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${x.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...Q(n)]:[{type:12,data:l}]})}},Bo=e=>ce(e),cp=(e,t)=>{let{inputs:r,outputCount:i}=e,a=Bo({...t,outputCount:i});if(fe.webgpu.validateInputContent&&Oo(r,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Ao(r,a))}}),Ro,No,fp,Qm=P(()=>{"use strict";ne(),se(),Ro=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},No=e=>{let t=e[0].dims,r=e[0].dims[2],i=O.size(t)/4,a=e[0].dataType,n=R("input",a,t,4),s=R("bias",a,[r],4),u=R("residual",a,t,4),l=j("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(n,s,u,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${n.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${u.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},fp=e=>{Ro(e.inputs),e.compute(No(e.inputs))}}),Mo,pe,hp,mp,gp,_p,yp,bp,wp,$p,vp,Do,xp,kp,Sp,Tp,ir,Ip,Dr,Ep,zp,Cp,Op,Ap,Bp,Rp,Np,Mp,Dp,Pp,Up,qp,Wp,Lp,Vp,qi,Gp,ka,Sa,Hp,Fp,jp,Po,Uo,Kp,Ka=P(()=>{"use strict";te(),ne(),we(),se(),Mo=(e,t,r,i,a,n,s)=>{let u=Math.ceil(t/4),l="";typeof a=="string"?l=`${a}(a)`:l=a("a");let d=R("inputData",r,[u],4),c=j("outputData",i,[u],4),f=[{name:"vec_size",type:"u32"}];return s&&f.push(...s),`
      ${e.registerUniforms(f).declareVariables(d,c)}

  ${n??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",l)}
  }`},pe=(e,t,r,i,a,n=e.dataType,s,u)=>{let l=[{type:12,data:Math.ceil(O.size(e.dims)/4)}];return s&&l.push(...s),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:d=>Mo(d,O.size(e.dims),e.dataType,n,r,i,u),getRunData:d=>({outputs:[{dims:e.dims,dataType:n}],dispatchGroup:{x:Math.ceil(O.size(d[0].dims)/64/4)},programUniforms:l})}},hp=e=>{e.compute(pe(e.inputs[0],"Abs","abs"))},mp=e=>{e.compute(pe(e.inputs[0],"Acos","acos"))},gp=e=>{e.compute(pe(e.inputs[0],"Acosh","acosh"))},_p=e=>{e.compute(pe(e.inputs[0],"Asin","asin"))},yp=e=>{e.compute(pe(e.inputs[0],"Asinh","asinh"))},bp=e=>{e.compute(pe(e.inputs[0],"Atan","atan"))},wp=e=>{e.compute(pe(e.inputs[0],"Atanh","atanh"))},$p=e=>ce(e),vp=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(pe(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Do=e=>{let t,r,i=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return ce({min:t,max:r})},xp=(e,t)=>{let r=t||Do(e.inputs),i=Ie(e.inputs[0].dataType);e.compute(pe(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},kp=e=>{e.compute(pe(e.inputs[0],"Ceil","ceil"))},Sp=e=>{e.compute(pe(e.inputs[0],"Cos","cos"))},Tp=e=>{e.compute(pe(e.inputs[0],"Cosh","cosh"))},ir=e=>ce(e),Ip=(e,t)=>{let r=Ie(e.inputs[0].dataType);e.compute(pe(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Dr=(e="f32")=>`
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
}`,Ep=e=>{let t=Ie(e.inputs[0].dataType);e.compute(pe(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Dr(t)))},zp=e=>{e.compute(pe(e.inputs[0],"Exp","exp"))},Cp=e=>{e.compute(pe(e.inputs[0],"Floor","floor"))},Op=e=>{let t=Ie(e.inputs[0].dataType);e.compute(pe(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Dr(t)))},Ap=(e,t)=>{let r=Ie(e.inputs[0].dataType);e.compute(pe(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Bp=e=>{e.compute(pe(e.inputs[0],"Not",t=>`!${t}`))},Rp=e=>{e.compute(pe(e.inputs[0],"Neg",t=>`-${t}`))},Np=e=>{e.compute(pe(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Mp=e=>{let t=Ie(e.inputs[0].dataType);e.compute(pe(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Dp=e=>{e.compute(pe(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Pp=e=>ce(e),Up=(e,t)=>{let r=Ie(e.inputs[0].dataType);e.compute(pe(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},qp=e=>{e.compute(pe(e.inputs[0],"Sin","sin"))},Wp=e=>{e.compute(pe(e.inputs[0],"Sinh","sinh"))},Lp=e=>{e.compute(pe(e.inputs[0],"Sqrt","sqrt"))},Vp=e=>{e.compute(pe(e.inputs[0],"Tan","tan"))},qi=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Gp=e=>{e.compute(pe(e.inputs[0],"Tanh",qi))},ka=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${qi("v")};
}
`,Sa=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Hp=e=>{let t=Ie(e.inputs[0].dataType);e.compute(pe(e.inputs[0],"FastGelu",Sa,ka(t),void 0,e.inputs[0].dataType))},Fp=(e,t)=>{let r=Ie(e.inputs[0].dataType);return e.compute(pe(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},jp=e=>{e.compute(pe(e.inputs[0],"Log","log"))},Po=(e,t)=>`
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
`,Uo=e=>`quick_gelu_impl(${e})`,Kp=(e,t)=>{let r=Ie(e.inputs[0].dataType);e.compute(pe(e.inputs[0],"QuickGelu",Uo,Po(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),qo,Wo,Zp,Xm=P(()=>{"use strict";ne(),se(),Ka(),qo=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Wo=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=R("input",e[0].dataType,e[0].dims,4),i=R("bias",e[0].dataType,[e[0].dims[2]],4),a=j("output",e[0].dataType,t,4),n=O.size(t)/4,s=ke(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:u=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${u.declareVariables(r,i,a)}

  ${Dr(s)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Zp=e=>{qo(e.inputs),e.compute(Wo(e.inputs))}}),Lo,Vo,He,Qp,Xp,Yp,Jp,ec,tc,rc,ic,ac,nc,Ym=P(()=>{"use strict";te(),ne(),se(),Lo=(e,t,r,i,a,n,s,u,l,d,c,f)=>{let h,_;typeof u=="string"?h=_=(b,S)=>`${u}((${b}),(${S}))`:typeof u=="function"?h=_=u:(h=u.scalar,_=u.vector);let g=j("outputData",c,i.length,4),w=R("aData",l,t.length,4),x=R("bData",d,r.length,4),$;if(a)if(n){let b=O.size(t)===1,S=O.size(r)===1,k=t.length>0&&t[t.length-1]%4===0,I=r.length>0&&r[r.length-1]%4===0;b||S?$=g.setByOffset("global_idx",_(b?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"),S?`${x.type.value}(${x.getByOffset("0")}.x)`:x.getByOffset("global_idx"))):$=`
            let outputIndices = ${g.offsetToIndices("global_idx * 4u")};
            let offsetA = ${w.broadcastedIndicesToOffset("outputIndices",g)};
            let offsetB = ${x.broadcastedIndicesToOffset("outputIndices",g)};
            ${g.setByOffset("global_idx",_(s||k?w.getByOffset("offsetA / 4u"):`${w.type.value}(${w.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||I?x.getByOffset("offsetB / 4u"):`${x.type.value}(${x.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else $=g.setByOffset("global_idx",_(w.getByOffset("global_idx"),x.getByOffset("global_idx")));else{if(!n)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let b=(S,k,I="")=>{let E=`aData[indexA${k}][componentA${k}]`,T=`bData[indexB${k}][componentB${k}]`;return`
            let outputIndices${k} = ${g.offsetToIndices(`global_idx * 4u + ${k}u`)};
            let offsetA${k} = ${w.broadcastedIndicesToOffset(`outputIndices${k}`,g)};
            let offsetB${k} = ${x.broadcastedIndicesToOffset(`outputIndices${k}`,g)};
            let indexA${k} = offsetA${k} / 4u;
            let indexB${k} = offsetB${k} / 4u;
            let componentA${k} = offsetA${k} % 4u;
            let componentB${k} = offsetB${k} % 4u;
            ${S}[${k}] = ${I}(${h(E,T)});
          `};c===9?$=`
            var data = vec4<u32>(0);
            ${b("data",0,"u32")}
            ${b("data",1,"u32")}
            ${b("data",2,"u32")}
            ${b("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:$=`
            ${b("outputData[global_idx]",0)}
            ${b("outputData[global_idx]",1)}
            ${b("outputData[global_idx]",2)}
            ${b("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(w,x,g)}

        ${f??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${$}
      }`},Vo=(e,t,r,i,a,n,s=r.dataType)=>{let u=r.dims.map(w=>Number(w)??1),l=i.dims.map(w=>Number(w)??1),d=!O.areEqual(u,l),c=u,f=O.size(u),h=!1,_=!1,g=[d];if(d){let w=Dt.calcShape(u,l,!1);if(!w)throw new Error("Can't perform binary op on the given tensors");c=w.slice(),f=O.size(c);let x=O.size(u)===1,$=O.size(l)===1,b=u.length>0&&u[u.length-1]%4===0,S=l.length>0&&l[l.length-1]%4===0;g.push(x),g.push($),g.push(b),g.push(S);let k=1;for(let I=1;I<c.length;I++){let E=u[u.length-I],T=l[l.length-I];if(E===T)k*=E;else break}k%4===0?(_=!0,h=!0):(x||$||b||S)&&(h=!0)}else h=!0;return g.push(h),{name:e,shaderCache:{hint:t+g.map(w=>w.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:w=>Lo(w,u,l,c,h,d,_,a,r.dataType,i.dataType,s,n),getRunData:()=>({outputs:[{dims:c,dataType:s}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(O.size(c)/4)},...Q(u,l,c)]})}},He=(e,t,r,i,a,n)=>{e.compute(Vo(t,a??"",e.inputs[0],e.inputs[1],r,i,n))},Qp=e=>{He(e,"Add",(t,r)=>`${t}+${r}`)},Xp=e=>{He(e,"Div",(t,r)=>`${t}/${r}`)},Yp=e=>{He(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Jp=e=>{He(e,"Mul",(t,r)=>`${t}*${r}`)},ec=e=>{let t=R("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;He(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
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
      `)},tc=e=>{He(e,"Sub",(t,r)=>`${t}-${r}`)},rc=e=>{He(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},ic=e=>{He(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},ac=e=>{He(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},nc=e=>{He(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Go,Ho,Fo,jo,sc,oc,Jm=P(()=>{"use strict";te(),ne(),we(),se(),Go=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],a=i.dataType,n=i.dims.length;e.forEach((s,u)=>{if(u!==r){if(s.dataType!==a)throw new Error("input tensors should be one type");if(s.dims.length!==n)throw new Error("input tensors should have the same shape");s.dims.forEach((l,d)=>{if(d!==t&&l!==i.dims[d])throw new Error("non concat dimensions must match")})}})},Ho=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Fo=(e,t)=>{let r=e.length,i=[];for(let a=0;a<r;++a){let n=t.setByOffset("global_idx",e[a].getByIndices("indices"));r===1?i.push(n):a===0?i.push(`if (inputIndex == ${a}u) { ${n} }`):a===r-1?i.push(`else { ${n} }`):i.push(`else if (inputIndex == ${a}) { ${n} }`)}return i.join(`
`)},jo=(e,t,r,i)=>{let a=O.size(r),n=new Array(e.length),s=new Array(e.length),u=0,l=[],d=[],c=[{type:12,data:a}];for(let w=0;w<e.length;++w)u+=e[w].dims[t],n[w]=u,d.push(e[w].dims.length),s[w]=R(`input${w}`,i,d[w]),l.push("rank"),c.push({type:12,data:n[w]});for(let w=0;w<e.length;++w)c.push(...Q(e[w].dims));c.push(...Q(r));let f=j("output",i,r.length),h=f.indicesGet("indices",t),_=Array.from(Array(n.length).keys()).map(w=>`uniforms.sizeInConcatAxis${w}`).join(","),g=w=>`

  ${(()=>{w.registerUniform("outputSize","u32");for(let x=0;x<e.length;x++)w.registerUniform(`sizeInConcatAxis${x}`,"u32");return w.declareVariables(...s,f)})()}

  ${Ho(n.length,_)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${f.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${h});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${n.length}u>(${_});
      ${h} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Fo(s,f)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}),getShaderSource:g}},sc=(e,t)=>{let r=e.inputs,i=r[0].dims,a=O.normalizeAxis(t.axis,i.length);Go(r,a);let n=i.slice();n[a]=r.reduce((u,l)=>u+(l.dims.length>a?l.dims[a]:0),0);let s=r.filter(u=>O.size(u.dims)>0);e.compute(jo(s,a,n,r[0].dataType),{inputs:s})},oc=e=>ce({axis:e.axis})}),Tt,It,Et,Za,Ct=P(()=>{"use strict";te(),ne(),Tt=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},It=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Et=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Za=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,i]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=e?.activation_params||[Bd,Rd];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Se,uc,Qa=P(()=>{"use strict";Se=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},uc=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),lc,eg=P(()=>{"use strict";lc=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),nr,Xa,Ya=P(()=>{"use strict";te(),ne(),se(),Ct(),nr=(e,t,r,i,a)=>{let n=i-r;return`
      ${Array.from({length:r}).map((s,u)=>`
      if (${K(t.shape,u,t.rank)} != 1) {
        ${t.indicesSet(e,u,K(a,u+n,i))}
      } else {
        ${t.indicesSet(e,u,0)}
      }`).join("")}
`},Xa=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,u=e[1].dims,l=s[s.length-2],d=u[u.length-1],c=s[s.length-1],f=be(d),h=be(c),_=be(l),g=O.size(r)/f/_,w=e.length>2,x=i?i.slice(0,-2):r.slice(0,-2),$=[O.size(x),l,d],b=[{type:12,data:g},{type:12,data:l},{type:12,data:d},{type:12,data:c}];It(t,b),b.push(...Q(x,s,u)),w&&b.push(...Q(e[2].dims)),b.push(...Q($));let S=k=>{let I=Ha("batch_dims",e[0].dataType,x.length),E=R("a",e[0].dataType,s.length,h),T=R("b",e[1].dataType,u.length,f),C=j("output",e[0].dataType,$.length,f),N=ke(C.type.tensor),q=Tt(t,C.type.value,N),V=[E,T],G="";if(w){let ee=a?f:1;V.push(R("bias",e[2].dataType,e[2].dims.length,ee)),G=`${a?`value += bias[col / ${ee}];`:`value += ${C.type.value}(bias[row + i]);`}`}let Y=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Et(t,Y);let U=()=>{let ee=`var a_data: ${E.type.value};`;for(let X=0;X<h;X++)ee+=`
              let b_data${X} = b[(b_offset + (k + ${X}) * uniforms.N + col) / ${f}];`;for(let X=0;X<_;X++){ee+=`a_data = a[(a_offset + (row + ${X}) * uniforms.K + k) / ${h}];`;for(let H=0;H<h;H++)ee+=`
            values[${X}] = fma(${T.type.value}(a_data${h===1?"":`[${H}]`}), b_data${H}, values[${X}]);
`}return ee};return`
  ${k.registerUniforms(Y).registerInternalVariables(I).declareVariables(...V,C)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${f})) * ${f};
    var index1 = global_idx / (uniforms.N / ${f});
    let stride1 = uniforms.M / ${_};
    let row = (index1 % stride1) * ${_};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${I.offsetToIndices("batch")};`}

    var a_indices: ${E.type.indices};
    ${nr("a_indices",E,E.rank-2,I.rank,"batch_indices")}
    ${E.indicesSet("a_indices",E.rank-2,0)}
    ${E.indicesSet("a_indices",E.rank-1,0)}
    let a_offset = ${E.indicesToOffset("a_indices")};

    var b_indices: ${T.type.indices};
    ${nr("b_indices",T,T.rank-2,I.rank,"batch_indices")}
    ${T.indicesSet("b_indices",T.rank-2,0)}
    ${T.indicesSet("b_indices",T.rank-1,0)}
    let b_offset = ${T.indicesToOffset("b_indices")};
    var values: array<${C.type.value}, ${_}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${h}) {
      ${U()}
    }
    for (var i = 0u; i < ${_}u; i++) {
      var value = values[i];
      ${G}
      ${q}
      let cur_indices = ${C.type.indices}(batch, row + i, col);
      let offset = ${C.indicesToOffset("cur_indices")};
      ${C.setByOffset(`offset / ${f}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${f};${h};${_};${a}`,inputDependencies:w?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:b}),getShaderSource:S}}}),Ko,Zo,Ta,Wi,Qo,Ia,Xo,Vr,Ja=P(()=>{"use strict";te(),ne(),se(),Ct(),Ya(),Qa(),Ko=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Zo=(e,t)=>e?`
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
        }`,Ta=(e,t,r="f32",i,a=!1,n=32,s=!1,u=32)=>{let l=t[1]*e[1],d=t[0]*e[0],c=a?l:n,f=a?n:l,h=c/t[0],_=n/t[1];if(!((a&&h===4&&e[1]===4||!a&&(h===3||h===4))&&c%t[0]===0&&n%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${h} and workPerThread[1] ${e[1]} must be 4.
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
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${s?`${Math.ceil(u/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${_};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Ko(a,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${h===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Zo(a,h)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Wi=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Qo=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Ia=(e,t,r="f32",i,a=!1,n=32,s=!1,u=32,l=!1)=>{let d=e[1]*t[1],c=e[0]*t[0],f=a?d:n,h=a?n:d;if(!(h%t[1]===0&&f%t[0]===0&&n%t[1]===0))throw new Error(`tileAHight ${h} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}, tileInner ${n} must be divisible by workgroupSize[1]${t[1]}`);let _=h/t[1],g=f/t[0],w=n/t[1],x=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${h}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          ${Wi(a,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${n}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
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
          let ACached = ${a?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
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

let tileRowA = i32(localId.y) * ${_};
let tileColA = i32(localId.x) * ${g};
let tileRowB = i32(localId.y) * ${w};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${g}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Wi(a,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${w}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
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
      ${Qo(a)}
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
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(u/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${x}
  }
`},Xo=(e,t,r,i,a=!1)=>{let[n,s,u,l]=i,d=ke(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${Se(e,d)} {
      var value = ${Se(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${nr("aIndices",s,s.rank-2,n.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${Se(e,d)} {
      var value = ${Se(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${u.type.indices};
        ${nr("bIndices",u,u.rank-2,n.rank,"batchIndices")}
        ${u.indicesSet("bIndices",u.rank-2,"u32(row)")}
        ${u.indicesSet("bIndices",u.rank-1,"u32(colIn)")}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Se(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${a?"bias[colIn]":`${Se(e,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Vr=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,u=e[1].dims,l=s.slice(0,-2),d=u.slice(0,-2),c=i?i.slice(0,-2):r.slice(0,-2),f=O.size(c),h=s[s.length-2],_=s[s.length-1],g=u[u.length-1],w=_%4===0&&g%4===0,x=h<=8?[4,1,1]:[4,4,1],$=[8,8,1],b=[Math.ceil(g/$[0]/x[0]),Math.ceil(h/$[1]/x[1]),Math.ceil(f/$[2]/x[2])],S=w?4:1,k=[...l,h,_/S],I=k.length,E=[...d,_,g/S],T=E.length,C=[f,h,g/S],N=[{type:6,data:h},{type:6,data:g},{type:6,data:_}];It(t,N),N.push(...Q(c,k,E));let q=["rank","rank"],V=e.length>2;V&&(N.push(...Q(e[2].dims)),q.push("rank")),N.push(...Q(C));let G=Y=>{let U=c.length,ee=Ha("batchDims",e[0].dataType,U,1),X=ke(e[0].dataType),H=R("a",e[0].dataType,I,S),re=R("b",e[1].dataType,T,S),F=j("result",e[0].dataType,C.length,S),ue=[H,re];if(V){let ae=a?S:1;ue.push(R("bias",e[2].dataType,e[2].dims.length,ae))}let M=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Et(t,M);let W=ke(F.type.tensor),ie=Tt(t,F.type.value,W),A=Xo(S,V,ie,[ee,H,re,F],a);return`
  ${Y.registerUniforms(M).registerInternalVariables(ee).declareVariables(...ue,F)}
  ${A}
  ${w?Ta(x,$,X,ee):Ia(x,$,X,ee)}
                   `};return{name:"MatMul",shaderCache:{hint:`${x};${t.activation};${w};${a}`,inputDependencies:q},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:N}),getShaderSource:G}}}),Yo,dc,tg=P(()=>{"use strict";te(),at(),se(),Ct(),Qa(),eg(),Ja(),Yo=(e,t,r,i,a=!1,n,s=4,u=4,l=4,d="f32")=>{let c=N=>{switch(N){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${N} is not supported.`)}},f=N=>{switch(N){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${N} is not supported.`)}},h=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,_=e?`
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
    `,g=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",w=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",x=e?"row":"col",$=e?"col":"row",b=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${x} / outWidth;
    let outCol = ${x} % outWidth;

    let WRow = ${$} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${$} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${$} % inChannels;
    var resData = ${Se(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${g} && xCol >= 0 && xCol < ${w}) {
      ${h}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(s)}
    }
    return resData;`,S=e?t&&i?`
    let col = colIn * ${s};
    ${b}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${b}
    }
    return ${Se(s,d)}(0.0);`:i&&r?`
    let col = colIn * ${s};
    ${b}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${b}
    }
    return ${Se(s,d)}(0.0);`,k=e?i&&r?f(u):`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${f(u)}
    }
    return ${Se(u,d)}(0.0);`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${f(u)}
    }
    return ${Se(u,d)}(0.0);`,I=Se(l,d),E=Se(e?s:u,d),T=Se(e?u:s,d),C=Tt(n,I,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${E} {
      ${e?S:k}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${T} {
      ${e?k:S}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${I}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${_}
      ${uc(a)}
      ${C}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},dc=(e,t,r,i,a,n,s,u,l)=>{let d=t.format==="NHWC",c=d?e[0].dims[3]:e[0].dims[1],f=r[0],h=d?r[2]:r[3],_=d?r[1]:r[2],g=d?r[3]:r[1],w=d&&(c%4===0||c%3===0)&&g%4===0,x=d?g:h*_,$=d?h*_:g,b=[8,8,1],S=i<=8?[4,1,1]:[4,4,1],k=[Math.ceil(x/b[0]/S[0]),Math.ceil($/b[1]/S[1]),Math.ceil(f/b[2]/S[2])];le("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${k}`);let I=w?d&&c%4!==0?3:4:1,E=b[1]*S[1],T=b[0]*S[0],C=Math.max(b[0]*I,b[1]),N=i%E===0,q=a%T===0,V=n%C===0,G=w?[I,4,4]:[1,1,1],Y=[{type:6,data:i},{type:6,data:a},{type:6,data:n},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];It(t,Y),Y.push(...Q(e[0].dims,e[1].dims));let U=["rank","rank"];s&&(Y.push(...Q(e[2].dims)),U.push("rank")),Y.push(...Q(r));let ee=X=>{let H=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Et(t,H);let re=w?4:1,F=ke(e[0].dataType),ue=`
      fn setOutputAtIndex(flatIndex : i32, value : ${w?`vec4<${F}>`:F}) {
        result[flatIndex] = ${w?`vec4<${F}>`:F}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${w?`vec4<${F}>`:F}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${w?"/ 4":""}, value);
      }`,M=R("x",e[0].dataType,e[0].dims.length,I===3?1:I),W=R("w",e[1].dataType,e[1].dims.length,re),ie=[M,W],A=j("result",e[0].dataType,r.length,re);if(s){let ae=R("bias",e[2].dataType,e[2].dims.length,re);ie.push(ae),ue+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${w?`vec4<${F}>`:F} {
          return bias[coords.${d?"w":"y"}${w?"/ 4":""}];
        }`}return`
        ${lc("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${X.registerUniforms(H).declareVariables(...ie,A)}
        ${ue}
        ${Yo(d,N,q,V,s,t,G[0],G[1],G[2],F)}
        ${w?Ta(S,b,F,void 0,!d,C):Ia(S,b,F,void 0,!d,C,!1,void 0,u)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${I};${w};${N};${q};${V};${E};${T};${C}`,inputDependencies:U},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:Y}),getShaderSource:ee}}}),Jo,Li,Zt,eu,Vi,tu,pc,cc,rg=P(()=>{"use strict";te(),at(),ne(),se(),Ct(),Qa(),Jo=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Li=e=>typeof e=="number"?[e,e,e]:e,Zt=(e,t)=>t<=1?e:e+(e-1)*(t-1),eu=(e,t,r,i=1)=>{let a=Zt(t,i);return Math.floor((e[0]*(r-1)-r+a)/2)},Vi=(e,t,r,i,a)=>{a==null&&(a=eu(e,t[0],i[0]));let n=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*a>=t[s]&&(n[s]=Math.trunc((e[s]-t[s]+2*a)/i[s]+1));return n},tu=(e,t,r,i,a,n,s,u,l,d)=>{let c,f,h,_;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let g=Vi([t,r,i,1],[u,l,d],1,[a,n,s],e);f=g[0],h=g[1],_=g[2]}else if(Array.isArray(e)){if(!e.every((w,x,$)=>w===$[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let g=Vi([t,r,i,1],[u,l,d],1,[a,n,s],e[0]);f=g[0],h=g[1],_=g[2]}else if(e==="SAME_UPPER"){f=Math.ceil(t/a),h=Math.ceil(r/n),_=Math.ceil(i/s);let g=(f-1)*a+u-t,w=(h-1)*n+l-r,x=(_-1)*s+d-i,$=Math.floor(g/2),b=g-$,S=Math.floor(w/2),k=w-S,I=Math.floor(x/2),E=x-I;c={top:S,bottom:k,left:I,right:E,front:$,back:b}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:f,outHeight:h,outWidth:_}},pc=(e,t,r,i,a,n=!1,s="channelsLast")=>{let u,l,d,c,f;if(s==="channelsLast")[u,l,d,c,f]=e;else if(s==="channelsFirst")[u,f,l,d,c]=e;else throw new Error(`Unknown dataFormat ${s}`);let[h,,_,g,w]=t,[x,$,b]=Li(r),[S,k,I]=Li(i),E=Zt(_,S),T=Zt(g,k),C=Zt(w,I),{padInfo:N,outDepth:q,outHeight:V,outWidth:G}=tu(a,l,d,c,x,$,b,E,T,C),Y=n?h*f:h,U=[0,0,0,0,0];return s==="channelsFirst"?U=[u,Y,q,V,G]:s==="channelsLast"&&(U=[u,q,V,G,Y]),{batchSize:u,dataFormat:s,inDepth:l,inHeight:d,inWidth:c,inChannels:f,outDepth:q,outHeight:V,outWidth:G,outChannels:Y,padInfo:N,strideDepth:x,strideHeight:$,strideWidth:b,filterDepth:_,filterHeight:g,filterWidth:w,effectiveFilterDepth:E,effectiveFilterHeight:T,effectiveFilterWidth:C,dilationDepth:S,dilationHeight:k,dilationWidth:I,inShape:e,outShape:U,filterShape:t}},cc=(e,t,r,i,a,n)=>{let s=n==="channelsLast",u=s?e[0].dims[3]:e[0].dims[1],l=!1,d=[64,1,1],c={x:r.map((b,S)=>S)},f=[Math.ceil(Jo(c.x.map(b=>r[b]))/d[0]),1,1];le("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${f}`);let h=l?s&&u%4!==0?3:4:1,_=O.size(r),g=[{type:12,data:_},{type:12,data:i},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];It(t,g),g.push(...Q(e[0].dims,e[1].dims));let w=["rank","rank"],x=e.length===3;x&&(g.push(...Q(e[2].dims)),w.push("rank")),g.push(...Q(r));let $=b=>{let S=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Et(t,S);let k=l?4:1,I=ke(e[0].dataType),E=R("x",e[0].dataType,e[0].dims.length,h===3?1:h),T=R("W",e[1].dataType,e[1].dims.length,k),C=[E,T],N=j("result",e[0].dataType,r.length,k),q="";if(x){let Y=R("bias",e[2].dataType,e[2].dims.length,k);C.push(Y),q+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${l?`vec4<${I}>`:I} {
          return bias[${s?K("coords",4,5):K("coords",1,5)}${l?"/ 4":""}];
        }`}let V=Se(h,I),G=Tt(t,V,I);return`
            ${q}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
          ${b.registerUniforms(S).declareVariables(...C,N)}
          ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${N.offsetToIndices("global_idx")};
              let batch = ${K("coords",0,E.rank)};
              let d2 = ${s?K("coords",E.rank-1,E.rank):K("coords",1,E.rank)};
              let xFRCCorner = vec3<u32>(${s?K("coords",1,E.rank):K("coords",2,E.rank)},
              ${s?K("coords",2,E.rank):K("coords",3,E.rank)},
              ${s?K("coords",3,E.rank):K("coords",4,E.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?K("uniforms.x_shape",1,E.rank):K("uniforms.x_shape",2,E.rank)};
              let xShapeZ = ${s?K("uniforms.x_shape",2,E.rank):K("uniforms.x_shape",3,E.rank)};
              let xShapeW = ${s?K("uniforms.x_shape",3,E.rank):K("uniforms.x_shape",4,E.rank)};
              let xShapeU = ${s?K("uniforms.x_shape",4,E.rank):K("uniforms.x_shape",1,E.rank)};
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
              ${x?"value = value + getBiasByOutputCoords(coords)":""};
              ${G}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${h};${x}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:f[0],y:f[1],z:f[2]},programUniforms:g}),getShaderSource:$}}}),fc,hc,ig=P(()=>{"use strict";te(),ne(),se(),Ct(),fc=(e,t,r,i)=>{let a=e.length>2,n=a?"value += b[output_channel];":"",s=e[0].dims,u=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],c=d/t.group,f=l&&c>=4?be(d):1,h=O.size(r)/f,_=[{type:12,data:h},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];It(t,_),_.push(...Q(s,[u[0],u[1],u[2],u[3]/f]));let g=a?["rank","rank","rank"]:["rank","rank"];_.push(...Q([r[0],r[1],r[2],r[3]/f]));let w=x=>{let $=j("output",e[0].dataType,r.length,f),b=ke($.type.tensor),S=Tt(t,$.type.value,b),k=R("x",e[0].dataType,s.length),I=R("w",e[1].dataType,u.length,f),E=[k,I];a&&E.push(R("b",e[2].dataType,e[2].dims,f));let T=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Et(t,T);let C=l?`
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
            let xVal = ${k.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${I.get("wHeight","wWidth","wInChannel","output_channel")};
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

            let xVal = ${k.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${I.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${x.registerUniforms(T).declareVariables(...E,$)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${$.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${f} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${$.type.value} = ${$.type.value}(0);
    ${C}
    ${n}
    ${S}
    ${$.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${f}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:_}),getShaderSource:w}},hc=(e,t,r,i)=>{let a=e.length>2,n=be(r[3]),s=be(r[2]),u=O.size(r)/n/s,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/n],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/n],c=[r[0],r[1],r[2],r[3]/n],f=[{type:12,data:u},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];It(t,f),f.push(...Q(l,d,c));let h=(s-1)*t.strides[1]+d[1],_=g=>{let w=j("output",e[0].dataType,c.length,n),x=ke(w.type.tensor),$=Tt(t,w.type.value,x),b=R("x",e[0].dataType,l.length,n),S=R("w",e[1].dataType,d.length,n),k=[b,S];a&&k.push(R("b",e[2].dataType,e[2].dims,n));let I=a?"value += b[output_channel];":"",E=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Et(t,E),`
  ${g.registerUniforms(E).declareVariables(...k,w)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${b.type.value}, ${h}>;
    var values: array<${w.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${h}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${b.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${b.type.value}(0);
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
      ${I}
      ${$}
      ${w.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${n};${s};${h};${d[0]};${d[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:f}),getShaderSource:_}}}),ru,Cr,iu,Or,Ea,Gi,au,nu,za,ag=P(()=>{"use strict";ne(),tg(),rg(),Ja(),ig(),Ct(),Ya(),gt(),ru=(e,t,r,i,a,n)=>{let s=e[0],u=e.slice(n?1:2,n?3:4),l=u.length,d=t[0],c=t.slice(2).map((h,_)=>h+(h-1)*(r[_]-1)),f=u.map((h,_)=>h+i[_]+i[_+l]).map((h,_)=>Math.floor((h-c[_]+a[_])/a[_]));return f.splice(0,0,s),f.splice(n?3:1,0,d),f},Cr=[2,3,1,0],iu=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Or=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let n=2;n<t[1].dims.length;++n)r[n-2]===0&&(r[n-2]=t[1].dims[n]);let i=e.pads.slice();Wr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:r,pads:i}),a},Ea=e=>{let t=Za(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,n=e.group,s=e.kernel_shape,u=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Gi=(e,t,r,i)=>{let a=r.format==="NHWC",n=ru(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,a);if(r.group!==1){let E=[t[0]];if(a){let T=e.kernelCustomData.wT??e.compute(Me(t[1],Cr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=T),E.push(T)}else E.push(t[1]);t.length===3&&E.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(hc(E,r,n,i),{inputs:E}):e.compute(fc(E,r,n,i),{inputs:E});return}let s=t.length===3,u=t[0].dims[a?1:2],l=t[0].dims[a?2:3],d=t[0].dims[a?3:1],c=t[1].dims[2],f=t[1].dims[3],h=n[a?1:2],_=n[a?2:3],g=n[a?3:1],w=a&&c===u&&f===l&&r.pads[0]===0&&r.pads[1]===0;if(w||c===1&&f===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let E=n[0],T,C,N,q=[];if(a){let Y=e.kernelCustomData.wT??e.compute(Me(t[1],Cr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=Y),w){let U=u*l*d;T=t[0].reshape([1,E,U]),C=Y.reshape([1,U,g]),N=[1,E,g]}else T=t[0].reshape([E,u*l,d]),C=Y.reshape([1,d,g]),N=[E,h*_,g];q.push(T),q.push(C)}else T=t[0].reshape([E,d,u*l]),C=t[1].reshape([1,g,d]),N=[E,g,h*_],q.push(C),q.push(T);s&&q.push(t[2]);let V=N[2],G=q[0].dims[q[0].dims.length-1];V<8&&G<8?e.compute(Xa(q,r,n,N,a,i),{inputs:q}):e.compute(Vr(q,r,n,N,a,i),{inputs:q});return}let x=!0,$=e.kernelCustomData.wT??e.compute(Me(t[1],Cr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=$);let b=[t[0],$];s&&b.push(t[2]);let S=a?h*_:g,k=a?g:h*_,I=c*f*d;e.compute(dc(b,r,n,S,k,I,s,x,i),{inputs:b})},au=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],n=[1].concat(t.strides),s=[1].concat(t.dilations),u=[1].concat(t.kernelShape),l=Or({...t,pads:a,strides:n,dilations:s,kernelShape:u},i);Gi(e,i,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},nu=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",a=Or(r,t),n=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=pc(t[0].dims,t[1].dims,r.strides,r.dilations,n,!1,i);e.compute(cc(t,a,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},za=(e,t)=>{if(iu(e.inputs,t),e.inputs[0].dims.length===3)au(e,t);else if(e.inputs[0].dims.length===5)nu(e,e.inputs,t);else{let r=Or(t,e.inputs);Gi(e,e.inputs,r)}}}),mc,ng=P(()=>{"use strict";te(),at(),ne(),se(),mc=(e,t,r)=>{let i=e.length>2,a=t.outputShape,n=t.format==="NHWC",s=t.group,u=e[1].dims,l=u[2]/s,d=u[3],c=n?be(l):1,f=n&&d===1&&l>=4,h=f?Math.floor(l/4)*4:Math.floor(l/c)*c,_=l-h,g=n?be(d):1,w=n?d===1?c:g:1,x=O.size(a)/g,$=[Math.ceil(x/64),1,1];le("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${$}`);let b=["rank","rank"],S=[t.strides[0],t.strides[1]],k=[t.kernelShape[n?1:2],t.kernelShape[n?2:3]],I=[t.dilations[0],t.dilations[1]],E=[k[0]+(t.dilations[0]<=1?0:(t.kernelShape[n?1:2]-1)*(t.dilations[0]-1)),k[1]+(t.dilations[1]<=1?0:(t.kernelShape[n?2:3]-1)*(t.dilations[1]-1))],T=[E[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),E[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],C=[{type:12,data:x},{type:12,data:S},{type:12,data:k},{type:12,data:I},{type:12,data:E},{type:6,data:T},{type:12,data:h},{type:12,data:l},{type:12,data:d},...Q(e[0].dims,e[1].dims)];i&&(C.push(...Q(e[2].dims)),b.push("rank")),C.push(...Q(a));let N=q=>{let V=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:S.length},{name:"filter_dims",type:"u32",length:k.length},{name:"dilations",type:"u32",length:k.length},{name:"effective_filter_dims",type:"u32",length:E.length},{name:"pads",type:"i32",length:T.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],G=ke(e[0].dataType),Y=n?1:2,U=n?2:3,ee=n?3:1,X=R("W",e[1].dataType,e[1].dims.length,w),H=R("Dy",e[0].dataType,e[0].dims.length,c),re=[H,X];i&&re.push(R("bias",e[2].dataType,[a[ee]].length,g));let F=j("result",e[0].dataType,a.length,g),ue=()=>{let ie="";if(f)c===4?ie+=`
        let xValue = ${H.getByOffset("x_offset")};
        let wValue = ${X.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?ie+=`
          dotProd = dotProd + dot(vec4<${G}>(${H.getByOffset("x_offset")}, ${H.getByOffset("x_offset + 1u")}), vec4<${G}>(${X.getByOffset("w_offset")}, ${X.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(ie+=`
          dotProd = dotProd + dot(vec4<${G}>(${H.getByOffset("x_offset")}, ${H.getByOffset("x_offset + 1u")}, ${H.getByOffset("x_offset + 2u")}, ${H.getByOffset("x_offset + 3u")}), vec4<${G}>(${X.getByOffset("w_offset")}, ${X.getByOffset("w_offset + 1u")}, ${X.getByOffset("w_offset + 2u")}, ${X.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(ie+=`
                  let xValue = ${n?H.getByOffset(`${H.indicesToOffset(`${H.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):H.get("batch","inputChannel","idyR","idyC")};
        `,c===1)ie+=`
          let w_offset = ${X.indicesToOffset(`${X.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${X.getByOffset(`w_offset / ${w}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let A=0;A<c;A++)ie+=`
            let wValue${A} = ${X.getByOffset(`${X.indicesToOffset(`${X.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${A}, wOutChannel)`)} / ${w}`)};
            dotProd = dotProd + xValue[${A}] * wValue${A};`;return ie},M=()=>{if(_===0)return"";if(!f)throw new Error(`packInputAs4 ${f} is not true.`);let ie="";if(c===1){ie+="dotProd = dotProd";for(let A=0;A<_;A++)ie+=`
            + ${H.getByOffset(`x_offset + ${A}`)} * ${X.getByOffset(`w_offset + ${A}`)}`;ie+=";"}else if(c===2){if(_!==2)throw new Error(`Invalid inputChannelsRemainder ${_}.`);ie+=`
          let xValue = ${H.getByOffset("x_offset")};
          let wValue = ${X.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return ie},W=`
            let outputIndices = ${F.offsetToIndices(`global_idx * ${g}`)};
            let batch = ${F.indicesGet("outputIndices",0)};
            let d1 = ${F.indicesGet("outputIndices",ee)};
            let r = ${F.indicesGet("outputIndices",Y)};
            let c = ${F.indicesGet("outputIndices",U)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${F.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${G}(dyRCorner) + ${G}(wR)) / ${G}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${G}(uniforms.Dy_shape[${Y}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${G}(dyCCorner) + ${G}(wC)) / ${G}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${G}(uniforms.Dy_shape[${U}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${f?`
                var x_offset = ${H.indicesToOffset(`${H.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${X.indicesToOffset(`${X.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${w};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${f?4:c}) {
                  ${ue()}
                  inputChannel = inputChannel + ${f?4:c};
                }
                ${M()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${g}]`:""};
            ${F.setByOffset("global_idx","value")};
          `;return`
    ${q.registerUniforms(V).declareVariables(...re,F)}
      ${q.mainStart()}
      ${q.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${W}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${w}${g}${f}${_}`,inputDependencies:b},getRunData:()=>({dispatchGroup:{x:$[0],y:$[1],z:$[2]},outputs:[{dims:r?r(a):a,dataType:e[0].dataType}],programUniforms:C}),getShaderSource:N}}}),su,ou,uu,Hi,gc,lu,Fi,du,_c,sg=P(()=>{"use strict";ng(),Ct(),gt(),su=(e,t,r,i,a,n)=>(e-1)*t+r+(i-1)*a+1-n,ou=(e,t,r,i,a)=>{let n=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=n,r[a]=e-n):t==="SAME_LOWER"&&(r[i]=e-n,r[a]=n)},uu=(e,t,r,i,a,n,s,u,l,d)=>{let c=e.length-2,f=d.length===0;l.length<c&&l.push(...Array(c-l.length).fill(0));let h=e[0],_=t[u?3:1]*a;for(let g=0,w=e.length-c-(u?1:0);g<c;++g,++w){let x=e[w],$=f?x*s[g]:d[g],b=su(x,s[g],n[g],t[w],r[g],$);ou(b,i,n,g,g+c),f&&d.push(s[g]*(x-1)+l[g]+(t[w]-1)*r[g]+1-n[g]-n[g+c])}d.splice(0,0,h),d.splice(u?3:1,0,_)},Hi=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((f,h)=>f*h,1)===0){r.length=0;for(let f=2;f<t[1].dims.length;++f)r.push(t[1].dims[f])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let a=e.pads.slice(),n=e.outputShape.slice(),s=e.outputPadding.slice(),u=t[0].dims,l=e.dilations.slice();if(l.reduce((f,h)=>f+h,0)===0){let f=t[0].dims.length-2;l=new Array(f).fill(1)}let d=e.strides.slice();if(d.reduce((f,h)=>f+h,0)===0){let f=t[0].dims.length-2;d=new Array(f).fill(1)}uu(u,r,l,e.autoPad,e.group,a,d,i,s,n);let c=Object.assign({},e);return Object.assign(c,{kernelShape:r,pads:a,outputPadding:s,outputShape:n,dilations:l,strides:d}),c},gc=e=>{let t=Za(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,n=e.group,s=e.kernelShape,u=e.pads,l=e.strides,d=e.wIsConst(),c=e.outputPadding,f=e.outputShape;return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,outputPadding:c,outputShape:f,pads:u,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},lu=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.reduce((s,u)=>s+u,0)>0&&t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.reduce((s,u)=>s+u,0)>0&&t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.reduce((s,u)=>s+u,0)>0&&t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.outputPadding.length!==n&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${n}D`);if(t.kernelShape.reduce((s,u)=>s+u,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Fi=(e,t,r,i)=>{let a=e.kernelCustomData.wT??e.compute(Me(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=a);let n=[t[0],a];t.length===3&&n.push(t[2]),e.compute(mc(n,r,i),{inputs:n})},du=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let n=t.dilations;(n.length===0||n[0]===0)&&(n=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let u=t.pads;u.length===0&&(u=[0,0]),u=[0,u[0],0,u[1]],s=[1].concat(s),n=[1].concat(n),a=[1].concat(a);let l=t.outputPadding;l=[0].concat(l);let d=Hi({...t,pads:u,strides:s,dilations:n,kernelShape:a,outputPadding:l},i);Fi(e,i,d,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},_c=(e,t)=>{if(lu(e.inputs,t),e.inputs[0].dims.length===3)du(e,t);else{let r=Hi(t,e.inputs);Fi(e,e.inputs,r)}}}),pu,yc,bc,og=P(()=>{"use strict";te(),ne(),we(),se(),pu=(e,t,r,i)=>{let a=O.size(t),n=t.length,s=R("input",e,n),u=j("output",e,n),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=O.normalizeAxis(l,n),c=f=>{let h=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,_=K("uniforms.input_shape","uniforms.axis",n),g=i.reverse?h+(i.exclusive?" + 1":""):"0",w=i.reverse?_:h+(i.exclusive?"":" + 1");return`
                ${f.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,u)}
                ${f.mainStart()}
                  ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${u.offsetToIndices("global_idx")};
                  var sum = ${u.type.value}(0);
                  let first : i32 = ${g};
                  let last : i32 = ${w};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${u.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:d},...Q(t,t)]}),getShaderSource:c}},yc=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,a=e.inputs[1];e.compute(pu(i,r,a,t),{inputs:[0]})},bc=e=>{let t=e.exclusive===1,r=e.reverse===1;return ce({exclusive:t,reverse:r})}}),cu,fu,hu,wc,$c,ug=P(()=>{"use strict";te(),ne(),we(),se(),cu=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},fu=(e,t,r,i)=>{let a=[];a.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let n=0;n<t;++n)a.push(r.indicesSet("a",e[n],`i[${n}]`));return a.push("return a;}"),a.join(`
`)},hu=(e,t)=>{let r,i,a,n,s,u,l=t.format==="NHWC",d=t.blocksize,c=t.mode==="DCR";l?([r,i,a,n]=e.dims,s=c?[r,i,a,d,d,n/d**2]:[r,i,a,n/d**2,d,d],u=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,a,n]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=c?[r,d,d,n/d**2,i,a]:[r,n/d**2,d,d,i,a],u=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let f=e.reshape(s),h=f.dims.length,_=e.dataType,g=R("a",_,h),w=j("output",_,h),x=$=>`
  ${$.registerUniform("output_size","u32").declareVariables(g,w)}

  ${fu(u,h,g,w)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",g.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:$=>{let b=l?[r,i*d,a*d,n/d**2]:[r,n/d**2,i*d,a*d],S=O.size(b),k=f.dims,I=O.sortBasedOnPerm(k,u);return{outputs:[{dims:b,dataType:$[0].dataType}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:[{type:12,data:S},...Q(k,I)]}},getShaderSource:x}},wc=(e,t)=>{cu(e.inputs),e.compute(hu(e.inputs[0],t))},$c=e=>ce({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Ar,Qt,ji,mu,gu,_u,yu,Ki,bu,vc,xc,lg=P(()=>{"use strict";te(),ne(),we(),se(),Ar="[a-zA-Z]|\\.\\.\\.",Qt="("+Ar+")+",ji="^"+Qt+"$",mu="("+Qt+",)*"+Qt,gu="^"+mu+"$",_u=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},yu=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(gu)))throw new Error("Invalid LHS term");if(r.split(",").forEach((a,n)=>{let s=e[n].dims.slice();if(!a.match(RegExp(ji)))throw new Error("Invalid LHS term");let u=this.processTerm(a,!0,s,n);this.lhs.push(u)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([a,n])=>n.count===1||a==="...").map(([a])=>a).join("");else if(!i.match(RegExp(Qt)))throw new Error("Invalid RHS");i.match(RegExp(Ar,"g"))?.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let n=this.symbolToInfo.get(a);if(n===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(n.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let a=r.length,n=!1,s=[],u=0;if(!e.match(RegExp(ji))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(Ar,"g")),d=new _u(i);return l?.forEach((c,f)=>{if(c==="..."){if(n)throw new Error("Only one ellipsis is allowed per input term");n=!0;let h=a-l.length+1;if(h<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(u,u+h),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let _=0;_<s.length;_++){let g=String.fromCharCode(48+_);d.addSymbol(g,f+_),this.addSymbol(g,r[u++],i)}}else d.addSymbol(c,f+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,r[u++],i)}),d}},Ki=e=>e+"_max",bu=(e,t,r,i)=>{let a=e.map(d=>d.length).map((d,c)=>R(`input${c}`,t,d)),n=O.size(i),s=j("output",t,i.length),u=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let c=[],f="var prod = 1.0;",h="var sum = 0.0;",_="sum += prod;",g=[],w=[],x=[],$=[],b=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((k,I)=>{if(r.rhs.symbolToIndices.has(I)){let E=r.rhs.symbolToIndices.get(I)?.[0];E!==void 0&&r.lhs.forEach((T,C)=>{if(k.inputIndices.includes(C)){let N=T.symbolToIndices.get(I);if(N===void 0)throw new Error("Invalid symbol error");N.forEach(q=>{c.push(`${a[C].indicesSet(`input${C}Indices`,q,s.indicesGet("outputIndices",E))}`)})}})}else r.lhs.forEach((E,T)=>{if(k.inputIndices.includes(T)){let C=E.symbolToIndices.get(I);if(C===void 0)throw new Error("Invalid symbol error");C.forEach(N=>{g.push(`${a[T].indicesSet(`input${T}Indices`,N,`${I}`)}`)}),$.push(`prod *= ${a[T].getByIndices(`input${T}Indices`)};`)}}),w.push(`for(var ${I}: u32 = 0; ${I} < uniforms.${Ki(I)}; ${I}++) {`),x.push("}")});let S=b?[...c,`let sum = ${a.map((k,I)=>k.getByIndices(`input${I}Indices`)).join(" * ")};`]:[...c,h,...w,...g,f,...$,_,...x];return`
            ${d.registerUniforms(u.map(k=>({name:`${Ki(k)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${a.map((k,I)=>`var input${I}Indices: ${a[I].type.indices};`).join(`
`)}
            ${S.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=u.filter(f=>r.symbolToInfo.has(f)).map(f=>({type:12,data:r.symbolToInfo.get(f)?.dimValue||0}));d.push({type:12,data:n});let c=e.map((f,h)=>[...Q(f)]).reduce((f,h)=>f.concat(h),d);return c.push(...Q(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:c}},getShaderSource:l}},vc=(e,t)=>{let r=new yu(e.inputs,t.equation),i=r.outputDims,a=e.inputs.map((n,s)=>n.dims);e.compute(bu(a,e.inputs[0].dataType,r,i))},xc=e=>{let t=e.equation.replace(/\s+/g,"");return ce({equation:t})}}),wu,Zi,$u,vu,kc,dg=P(()=>{"use strict";te(),ne(),se(),wu=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,a=t.length<r.length?0:t.length-r.length;for(;i<r.length&&a<t.length;++i,++a)if(r[i]!==t[a]&&r[i]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Zi=(e,t)=>{let r=e.length-t.length,i=[];for(let a=0;a<r;++a)i.push(e[a]);for(let a=0;a<t.length;++a)i.push(t[a]===1?e[a+r]:t[a]);return i},$u=(e,t)=>e.length>t.length?Zi(e,t):Zi(t,e),vu=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=$u(t,r),a=e[0].dataType,n=a===9||O.size(t)===1,s=a===9||t.length>0&&t[t.length-1]%4===0?4:1,u=n||i.length>0&&i[i.length-1]%4===0?4:1,l=Math.ceil(O.size(i)/u),d=f=>{let h=R("input",a,t.length,s),_=j("output",a,i.length,u),g;if(a===9){let w=(x,$,b="")=>`
          let outputIndices${$} = ${_.offsetToIndices(`outputOffset + ${$}u`)};
          let offset${$} = ${h.broadcastedIndicesToOffset(`outputIndices${$}`,_)};
          let index${$} = offset${$} / 4u;
          let component${$} = offset${$} % 4u;
          ${x}[${$}] = ${b}(${h.getByOffset(`index${$}`)}[component${$}]);
        `;g=`
        let outputOffset = global_idx * ${u};
        var data = vec4<u32>(0);
        ${w("data",0,"u32")}
        ${w("data",1,"u32")}
        ${w("data",2,"u32")}
        ${w("data",3,"u32")}
        ${_.setByOffset("global_idx","data")}
      }`}else g=`
        let outputIndices = ${_.offsetToIndices(`global_idx * ${u}`)};
        let inputOffset = ${h.broadcastedIndicesToOffset("outputIndices",_)};
        let data = ${_.type.value}(${h.getByOffset(`inputOffset / ${s}`)});
        ${_.setByOffset("global_idx","data")}
      }`;return`
    ${f.registerUniform("vec_size","u32").declareVariables(h,_)}
    ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${g}`},c=[{type:12,data:l},...Q(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${s}${u}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c})}},kc=e=>{wu(e.inputs),e.compute(vu(e.inputs),{inputs:[0]})}}),xu,Sc,pg=P(()=>{"use strict";te(),ne(),se(),Ka(),xu=e=>{let t=e[0].dataType,r=O.size(e[0].dims),i=O.size(e[1].dims),a=i%4===0,n=s=>{let u=R("x",t,[1],4),l=R("bias",t,[1],4),d=j("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],f=_=>`
      let bias${_}_offset: u32 = (global_idx * 4 + ${_}) % uniforms.bias_size;
      let bias${_} = ${l.getByOffset(`bias${_}_offset / 4`)}[bias${_}_offset % 4];`,h=a?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${f(0)}${f(1)}${f(2)}${f(3)}
      let bias = ${u.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(c).declareVariables(u,l,d)}

    ${ka(Ie(t))}

    ${s.mainStart(Pt)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${u.getByOffset("global_idx")};
      ${h}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",Sa("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:n,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/Pt/4)}})}},Sc=e=>{e.inputs.length<2||O.size(e.inputs[1].dims)===0?Hp(e):e.compute(xu(e.inputs))}}),ku,Su,Tc,Ic,cg=P(()=>{"use strict";te(),ne(),we(),se(),ku=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Su=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=O.normalizeAxis(t.axis,a),s=r.slice(0);s.splice(n,1,...i);let u=r[n],l=e[0].dataType===9?4:1,d=Math.ceil(O.size(s)/l),c=[{type:12,data:d},{type:6,data:u},{type:12,data:n},...Q(e[0].dims,e[1].dims,s)],f=h=>{let _=R("data",e[0].dataType,e[0].dims.length,l),g=R("inputIndices",e[1].dataType,e[1].dims.length),w=j("output",e[0].dataType,s.length,l),x=b=>{let S=i.length,k=`var indicesIndices${b}  = ${g.type.indices}(0);`;for(let I=0;I<S;I++)k+=`${S>1?`indicesIndices${b}[${I}]`:`indicesIndices${b}`} = ${s.length>1?`outputIndices${b}[uniforms.axis + ${I}]`:`outputIndices${b}`};`;k+=`
          var idx${b} = ${g.getByIndices(`indicesIndices${b}`)};
          if (idx${b} < 0) {
            idx${b} = idx${b} + uniforms.axisDimLimit;
          }
          var dataIndices${b} : ${_.type.indices};
        `;for(let I=0,E=0;I<a;I++)I===n?(k+=`${a>1?`dataIndices${b}[${I}]`:`dataIndices${b}`} = u32(idx${b});`,E+=S):(k+=`${a>1?`dataIndices${b}[${I}]`:`dataIndices${b}`} = ${s.length>1?`outputIndices${b}[${E}]`:`outputIndices${b}`};`,E++);return k},$;if(e[0].dataType===9){let b=(S,k,I="")=>`
          let outputIndices${k} = ${w.offsetToIndices(`outputOffset + ${k}u`)};
          ${x(k)};
          let offset${k} = ${_.indicesToOffset(`dataIndices${k}`)};
          let index${k} = offset${k} / 4u;
          let component${k} = offset${k} % 4u;
          ${S}[${k}] = ${I}(${_.getByOffset(`index${k}`)}[component${k}]);
        `;$=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${b("value",0,"u32")}
        ${b("value",1,"u32")}
        ${b("value",2,"u32")}
        ${b("value",3,"u32")}
        ${w.setByOffset("global_idx","value")}
      `}else $=`
      let outputIndices = ${w.offsetToIndices("global_idx")};
      ${x("")};
      let value = ${_.getByIndices("dataIndices")};
      ${w.setByOffset("global_idx","value")};
      `;return`
      ${h.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(_,g,w)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${$}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:f}},Tc=e=>ce({axis:e.axis}),Ic=(e,t)=>{let r=e.inputs;ku(r),e.compute(Su(e.inputs,t))}}),Tu,Ec,zc,fg=P(()=>{"use strict";te(),ne(),se(),Tu=(e,t,r,i,a,n,s,u,l)=>{let d=[{type:12,data:n},{type:12,data:i},{type:12,data:a},{type:12,data:r},{type:12,data:s},{type:12,data:u},{type:12,data:l}],c=[n];d.push(...Q(t.dims,c));let f=h=>{let _=R("indices_data",t.dataType,t.dims.length),g=j("input_slice_offsets_data",12,1,1),w=[_,g],x=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:a.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${h.registerUniforms(x).declareVariables(...w)}
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
        ${a.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${a.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:d}),getShaderSource:f},{inputs:[t],outputs:[-1]})[0]},Ec=(e,t)=>{let r=e.inputs,i=r[0].dims,a=r[0].dataType,n=r[1].dims,s=n[n.length-1],u=O.sizeToDimension(n,n.length-1),l=O.sizeFromDimension(i,t.batchDims+s),d=O.sizeToDimension(i,t.batchDims),c=O.sizeFromDimension(i,t.batchDims),f=u/d,h=new Array(s),_=l;for(let k=0;k<s;++k)h[s-1-k]=_,_*=i[t.batchDims+s-1-k];let g=Tu(e,r[1],h,t.batchDims,i,u,f,c,s),w=t.batchDims+s;if(w>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let x=n.slice(0,-1).concat(i.slice(w)),$=O.size(x),b=[{type:12,data:$},{type:12,data:l},...Q(r[0].dims,g.dims,x)],S=k=>{let I=R("data",r[0].dataType,r[0].dims.length),E=R("slice_offsets",12,g.dims.length),T=j("output",r[0].dataType,x.length);return`
          ${k.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(I,E,T)}
            ${k.mainStart()}
            ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:x,dataType:a}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:b}),getShaderSource:S},{inputs:[r[0],g]})},zc=e=>({batchDims:e.batch_dims,cacheKey:""})}),Iu,Eu,Cc,Oc,hg=P(()=>{"use strict";te(),ne(),we(),se(),Iu=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=O.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,a=e[0],n=e[2],s=e.length===4?e[3]:void 0;if(n.dims.length!==a.dims.length||!a.dims.map((u,l)=>l===r?Math.ceil(u/i)===n.dims[l]:u===n.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==n.dims.length||!s.dims.map((u,l)=>u===n.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Eu=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=O.normalizeAxis(t.gatherAxis,a),s=O.normalizeAxis(t.quantizeAxis,a),u=r.slice(0);u.splice(n,1,...i);let l=O.size(u),d=e[2].dataType,c=e[0].dataType===22,f=[{type:12,data:l},{type:12,data:s},{type:12,data:n},{type:12,data:t.blockSize},...Q(...e.map((_,g)=>_.dims),u)],h=_=>{let g=R("data",e[0].dataType,e[0].dims.length),w=R("inputIndices",e[1].dataType,e[1].dims.length),x=R("scales",e[2].dataType,e[2].dims.length),$=e.length>3?R("zeroPoint",e[3].dataType,e[3].dims.length):void 0,b=j("output",d,u.length),S=[g,w,x];$&&S.push($);let k=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${_.registerUniforms(k).declareVariables(...S,b)}
        ${_.mainStart()}
        let output_indices = ${b.offsetToIndices("global_idx")};
        var indices_indices = ${w.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${b.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${w.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${b.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${g.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${b.indicesGet("output_indices","i")};
          ${g.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${w.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[n]};
        }
        ${g.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${u.length}; i++) {
          let index = ${b.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${g.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${g.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${g.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${x.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${x.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${x.getByIndices("scale_indices")};
        ${$?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${$.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${$.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Ie(d)}(quantized_data - zero_point) * scale;
        ${b.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((_,g)=>g!==1).map(_=>_.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(_,g)=>"rank")},getRunData:()=>({outputs:[{dims:u,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f}),getShaderSource:h}},Cc=(e,t)=>{let r=e.inputs;Iu(r,t),e.compute(Eu(e.inputs,t))},Oc=e=>ce({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),zu,Cu,Ac,Bc,mg=P(()=>{"use strict";te(),ne(),we(),se(),zu=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Cu=(e,t)=>{let r=e[0].dims,i=e[0].dataType,a=r.length,n=e[1].dims,s=e[1].dataType,u=O.normalizeAxis(t.axis,a),l=r[u],d=n.slice(0),c=O.size(d),f=R("input",i,a),h=R("indicesInput",s,n.length),_=j("output",i,d.length),g=[{type:12,data:c},{type:6,data:l},{type:12,data:u}];return g.push(...Q(r,n,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:g}),getShaderSource:w=>`
      ${w.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,h,_)}
      ${w.mainStart()}
      ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${_.offsetToIndices("global_idx")};

      var idx = ${h.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${f.type.indices}(outputIndices);
      ${f.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${f.getByIndices("inputIndices")};

      ${_.setByOffset("global_idx","value")};
  }`}},Ac=e=>ce({axis:e.axis}),Bc=(e,t)=>{let r=e.inputs;zu(r),e.compute(Cu(e.inputs,t))}}),Ou,Au,Rc,Nc,gg=P(()=>{"use strict";te(),ne(),se(),Ou=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Au=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[a,n,s]=Ad.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),u=[a,n];if(!u)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(n/l),c=Math.ceil(a/l),f=!0,h=O.size(u),_=[{type:12,data:f?d:h},{type:12,data:a},{type:12,data:n},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],g=["type","type"];e.length===3&&(_.push(...Q(e[2].dims)),g.push("rank")),_.push(...Q(u));let w=$=>{let b="";t.transA&&t.transB?b="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?b="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?b="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(b="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let S=t.alpha===1?"":"value *= uniforms.alpha;",k=R("a",e[0].dataType,e[0].dims),I=R("b",e[1].dataType,e[1].dims),E=k.type.value,T=null,C=[k,I];e.length===3&&(T=R("c",e[2].dataType,e[2].dims.length),C.push(T));let N=j("output",e[0].dataType,u.length);C.push(N);let q=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${$.registerUniforms(q).declareVariables(...C)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${E}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${b}
    }

    ${S}
    ${T!=null?`let cOffset = ${T.broadcastedIndicesToOffset("vec2(m, n)",N)}; value += ${E}(uniforms.beta) * ${T.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},x=$=>{let b=R("a",e[0].dataType,e[0].dims),S=R("b",e[1].dataType,e[1].dims),k=null,I=[b,S];e.length===3&&(k=R("c",e[2].dataType,e[2].dims.length),I.push(k));let E=j("output",e[0].dataType,u.length);I.push(E);let T=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],C="",N="";t.transA&&t.transB?(N=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,C="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(N=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,C="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(N=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,C="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(N=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,C="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let q=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${$.registerUniforms(T).declareVariables(...I)}
  var<workgroup> tile_a: array<array<${b.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${S.type.storage}, ${l}>, ${l}>;
  ${$.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${E.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${N}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${C}
      }
      workgroupBarrier();
    }

    ${q}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",E)}; value += ${E.type.value}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return f?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:d*c},programUniforms:_}),getShaderSource:x}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:_}),getShaderSource:w}},Rc=e=>{let t=e.transA,r=e.transB,i=e.alpha,a=e.beta;return{transA:t,transB:r,alpha:i,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Nc=(e,t)=>{Ou(e.inputs),e.compute(Au(e.inputs,t))}}),Ye,rt,bt,wt,Bu,Ru,Nu,Mu,Du,Pu,Uu,qu,Mc,Dc,_g=P(()=>{"use strict";te(),ne(),we(),se(),[Ye,rt,bt,wt]=[0,1,2,3],Bu=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Ru=`
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
`,Nu=e=>`
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
`,Mu=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Du=e=>`
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
`,Pu=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Ye}] = batch;
     indices[${rt}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${bt}] = u32(r);
            indices[${wt}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${bt}] = u32(clamp(r, 0, H - 1));
          indices[${wt}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${bt}] = gs_reflect(r, border[1], border[3]);
          indices[${wt}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Uu=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Ye}], indices[${rt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Ye}], indices[${rt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Ye}], indices[${rt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Ye}], indices[${rt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Ye}], indices[${rt}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Ye}], indices[${rt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,qu=(e,t)=>{let r=R("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],a=R("grid",e[1].dataType,i.length,2),n=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(n=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Ye,rt,bt,wt]=[0,3,1,2]);let s=j("output",e[0].dataType,n.length),u=r.type.value,l=O.size(n),d=[{type:12,data:l},...Q(e[0].dims,i,n)],c=f=>`
  ${f.registerUniform("output_size","u32").declareVariables(r,a,s)}
  ${Ru}
  ${Nu(u)}
  ${Mu(t)}
  ${Du(t)}
  ${Pu(r,u,t)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${bt}]);
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
      var grid_indices = vec3<u32>(indices[${Ye}], indices[${bt}], indices[${wt}]);
      let nxy = ${a.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Uu(s,u,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:f=>{let h=O.size(n);return{outputs:[{dims:n,dataType:f[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:d}},getShaderSource:c}},Mc=(e,t)=>{Bu(e.inputs),e.compute(qu(e.inputs,t))},Dc=e=>ce({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Ce,Wu,Pc,Qi,Lu,ar,Uc,qc=P(()=>{"use strict";te(),ne(),we(),Ga(),ja(),se(),gt(),Ce=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Wu=(e,t)=>{let r=e[0],i=Ce(e,1),a=Ce(e,2),n=Ce(e,3),s=Ce(e,4),u=Ce(e,5),l=Ce(e,6),d=Ce(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=r.dims[0],f=r.dims[1],h=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],_=f,g=0,w=0,x=Math.floor(h/t.numHeads);if(l&&d&&O.size(l.dims)&&O.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==x)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==c||d.dims[1]!==t.numHeads||d.dims[3]!==x)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=l.dims[2],w=l.dims[2]}else if(l&&O.size(l.dims)||d&&O.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $;if(i&&O.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');$=2,_=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==x)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');$=5,_=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==x)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');$=0,_=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}if(n&&O.size(n.dims)>0){if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let b=g+_,S=0;if(s&&O.size(s.dims)>0){S=8;let T=s.dims;throw T.length===1?T[0]===c?S=1:T[0]===3*c+2&&(S=3):T.length===2&&T[0]===c&&T[1]===b&&(S=5),S===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let k=!1,I=h;if(a&&O.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(_!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=a.dims[2]}else{if(_!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');I=a.dims[1]*a.dims[3],k=!0}}let E=!1;if(s&&O.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(u&&O.size(u.dims)>0){if(u.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==t.numHeads||u.dims[2]!==f||u.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:f,pastSequenceLength:g,kvSequenceLength:_,totalSequenceLength:b,maxSequenceLength:w,inputHiddenSize:0,hiddenSize:h,vHiddenSize:I,headSize:x,vHeadSize:Math.floor(I/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:S,scale:t.scale,broadcastResPosBias:E,passPastInKv:k,qkvFormat:$}},Pc=e=>ce({...e}),Qi=ce({perm:[0,2,1,3]}),Lu=(e,t,r,i,a,n,s)=>{let u=[i,a,n],l=O.size(u),d=[{type:12,data:l},{type:12,data:s},{type:12,data:n}],c=f=>{let h=j("qkv_with_bias",t.dataType,u),_=R("qkv",t.dataType,u),g=R("bias",r.dataType,u),w=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${f.registerUniforms(w).declareVariables(_,g,h)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:u,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:c},{inputs:[t,r],outputs:[-1]})[0]},ar=(e,t,r,i,a,n,s,u)=>{let l=n;if(s&&O.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=Lu(e,n,s,t,i,r*a,u),l=l.reshape([t,i,r,a]),r===1||i===1?l:e.compute(Me(l,Qi.perm),{inputs:[l],outputs:[-1]})[0]}else return n.dims.length===3&&(l=n.reshape([t,i,r,a])),r===1||i===1?l:e.compute(Me(l,Qi.perm),{inputs:[l],outputs:[-1]})[0]},Uc=(e,t)=>{let r=Wu(e.inputs,t),i=e.inputs[0],a=Ce(e.inputs,1),n=Ce(e.inputs,2),s=Ce(e.inputs,3),u=Ce(e.inputs,4),l=Ce(e.inputs,5),d=Ce(e.inputs,6),c=Ce(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if(a?.dims.length===5)throw new Error("Packed KV is not implemented");let f=a&&n&&a.dims.length===4&&n.dims.length===4,h=ar(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(f)return or(e,h,a,n,u,void 0,d,c,l,r);if(!a||!n)throw new Error("key and value must be provided");let _=ar(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,a,s,r.hiddenSize),g=ar(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,n,s,2*r.hiddenSize);or(e,h,_,g,u,void 0,d,c,l,r)}}),Vu,Gu,Hu,Fu,Ca,Wc,Lc,Vc=P(()=>{"use strict";te(),ne(),we(),se(),Vu=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Gu=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),i=r.length),ce({numOutputs:i,axis:t.axis,splitSizes:r})},Hu=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${K("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Fu=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let a=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(a):i===0?r.push(`if (output_number == ${i}u) { ${a} }`):i===t-1?r.push(`else { ${a} }`):r.push(`else if (output_number == ${i}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Ca=(e,t)=>{let r=e[0].dims,i=O.size(r),a=e[0].dataType,n=O.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),u=R("input",a,r.length),l=new Array(t.numOutputs),d=[],c=[],f=0,h=[{type:12,data:i}];for(let g=0;g<t.numOutputs;g++){f+=t.splitSizes[g],l[g]=f;let w=r.slice();w[n]=t.splitSizes[g],c.push(w),s[g]=j(`output${g}`,a,w.length),d.push({dims:c[g],dataType:e[0].dataType})}h.push({type:12,data:l},...Q(r,...c));let _=g=>`
  ${g.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(u,...s)}
  ${Hu(l.length)}
  ${Fu(s)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",n)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${K("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${u.indicesSet("indices",n,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:h})}},Wc=(e,t)=>{Vu(e.inputs);let r=e.inputs.length===1?t:Gu(e.inputs,t);e.compute(Ca(e.inputs,r),{inputs:[0]})},Lc=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return ce({axis:t,numOutputs:i,splitSizes:r})}}),ju,Gr,Gc,Hc=P(()=>{"use strict";te(),ne(),we(),se(),ju=(e,t)=>{let[r,i,a,n]=e,{numHeads:s,rotaryEmbeddingDim:u}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!O.areEqual(i.dims,[])&&!O.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(!O.areEqual(a.dims,n.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],c=a.dims[0],f=O.sizeFromDimension(r.dims,1)/d,h=u===0?a.dims[1]*2:f/s;if(u>h)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(l!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(d!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(h/2!==a.dims[1]&&u/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`);if(d>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},Gr=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:a,scale:n}=t,s=e[0].dims[0],u=O.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=u/l,c=e[2].dims[1],f=a===0?c*2:d/i,h=new Array(s,l,d/f,f-c),_=O.computeStrides(h),g=[{type:1,data:n},{type:12,data:h},{type:12,data:_},...e[0].dims.length===3?new Array({type:12,data:[u,d,f,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[u,f,l*f,1]}):[],...Q(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],w=x=>{let $=R("input",e[0].dataType,e[0].dims.length),b=R("position_ids",e[1].dataType,e[1].dims.length),S=R("cos_cache",e[2].dataType,e[2].dims.length),k=R("sin_cache",e[3].dataType,e[3].dims.length),I=j("output",e[0].dataType,e[0].dims.length);return x.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:h.length},{name:"global_strides",type:"u32",length:_.length},{name:"input_output_strides",type:"u32",length:_.length}]),`
        ${x.declareVariables($,b,S,k,I)}

        ${x.mainStart(Pt)}
          let half_rotary_emb_dim = uniforms.${S.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${b.broadcastedIndicesToOffset("bsnh.xy",j("",b.type.tensor,2))};
            let position_id =
                u32(${b.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${$.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} -
                ${$.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${I.setByOffset("i","re")}
            let im = ${$.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} +
                ${$.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${I.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${I.setByOffset("k",$.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:ce({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(h)/Pt)},programUniforms:g})}},Gc=(e,t)=>{ju(e.inputs,t),e.compute(Gr(e.inputs,t))}}),Ku,Zu,Xi,Qu,Fc,yg=P(()=>{"use strict";we(),te(),ja(),qc(),Vc(),gt(),Hc(),se(),Ku=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let u=!1,l=r.dims[0],d=r.dims[1],c=r.dims.length===3?u?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],f=d,h=0,_=!i||i.dims.length===0,g=Math.floor(_?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);_&&(c=g*t.numHeads);let w=n&&n.dims.length!==0,x=s&&s.dims.length!==0;if(w&&n.dims.length===4&&n.dims[0]===l&&n.dims[1]!==t.kvNumHeads&&n.dims[2]===t.kvNumHeads&&n.dims[3]===g)throw new Error("BSNH pastKey/pastValue is not supported");if(w&&x){if(n.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');h=n.dims[2]}else if(w||x)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');f=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==g)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');f=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==g)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');f=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}let b=0,S=!1,k=t.kvNumHeads?g*t.kvNumHeads:c;if(a&&a.dims.length>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(f!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=a.dims[2]}else{if(f!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');k=a.dims[1]*a.dims[3],S=!0}}let I=e.length>4?e[5]:void 0;if(I&&I.dims.length!==1&&I.dims[0]!==l)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:l,sequenceLength:d,pastSequenceLength:h,kvSequenceLength:f,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:k,headSize:g,vHeadSize:Math.floor(k/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:S,qkvFormat:$}},Zu=ce({perm:[0,2,1,3]}),Xi=(e,t,r)=>{let i=t,a=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,a,r.headSize]),i=e.compute(Me(i,Zu.perm),{inputs:[i],outputs:[-1]})[0]),i},Qu=(e,t,r,i)=>{let a=7,n=["type","type"],s=[e*t],u=e*t,l=[{type:12,data:u},{type:12,data:t},{type:12,data:e}],d=c=>{let f=R("seq_lens",r.dataType,r.dims),h=R("total_seq_lens",i.dataType,i.dims),_=j("pos_ids",a,s),g=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${c.registerUniforms(g).declareVariables(f,h,_)}
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
      ${_.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${_.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${_.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:n},getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:d}},Fc=(e,t)=>{let r=Ku(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],a=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,n=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,u=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,c=r.kvNumHeads?r.kvNumHeads:r.numHeads,f=ce({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,c*r.headSize,c*r.headSize]}),[h,_,g]=!a&&!n?e.compute(Ca([i],f),{inputs:[i],outputs:[-1,-1,-1]}):[i,a,n],w,x;if(t.doRotary){let k=e.compute(Qu(r.batchSize,r.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],I=e.inputs[7],E=e.inputs[8],T=ce({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),C=[h,k,I,E],N=[-1];w=e.compute(Gr(C,T),{inputs:C,outputs:N})[0],C.splice(0,1,_);let q=ce({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});x=e.compute(Gr(C,q),{inputs:C,outputs:N})[0]}let $=ar(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?w:h,void 0,0),b=Xi(e,t.doRotary?x:_,r),S=Xi(e,g,r);or(e,$,b,S,void 0,void 0,s,u,void 0,r,l,d)}}),Yi,Xu,Yu,jc,bg=P(()=>{"use strict";te(),ne(),gt(),se(),Yi=(e,t,r,i,a,n,s,u)=>{let l=be(n),d=l===1?"f32":`vec${l}f`,c=l===1?"vec2f":`mat2x${l}f`,f=a*s,h=64;f===1&&(h=256);let _=[a,s,n/l],g=[a,s,2],w=["rank","type","type"],x=[];x.push(...Q(_,g));let $=b=>{let S=R("x",t.dataType,3,l),k=R("scale",r.dataType,r.dims),I=R("bias",i.dataType,i.dims),E=j("output",1,3,2),T=[S,k,I,E];return`
  var<workgroup> workgroup_shared : array<${c}, ${h}>;
  const workgroup_size = ${h}u;
  ${b.declareVariables(...T)}
  ${b.mainStart(h)}
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
      let sum_final = ${mt("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${mt("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${u}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${u};${h}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:g,dataType:1}],dispatchGroup:{x:f},programUniforms:x}),getShaderSource:$},{inputs:[t,r,i],outputs:[-1]})[0]},Xu=(e,t,r)=>{let i=t[0].dims,a=i,n=2,s=i[0],u=i[1],l=O.sizeFromDimension(i,n),d=be(l),c=O.size(a)/d,f=Yi(e,t[0],t[1],t[2],s,l,u,r.epsilon),h=[s,u,l/d],_=[s,u],g=["type","none"],w=x=>{let $=R("x",t[0].dataType,h.length,d),b=R("scale_shift",1,_.length,2),S=j("output",t[0].dataType,h.length,d),k=[$,b,S];return`
  ${x.registerUniform("output_size","u32").declareVariables(...k)}
  ${x.mainStart()}
  ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${S.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${b.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${$.getByOffset("global_idx")} * ${S.type.value}(scale_shift.x) + ${S.type.value}(scale_shift.y);
      ${S.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...Q(h,_,h)]}),getShaderSource:w},{inputs:[t[0],f]})},Yu=(e,t,r)=>{let i=t[0].dims,a=i,n=i[0],s=i[i.length-1],u=O.sizeFromDimension(i,1)/s,l=be(s),d=O.size(a)/l,c=[{type:12,data:u},{type:12,data:Math.floor(s/l)}],f=["type","type"],h=!1,_=[0,i.length-1];for(let $=0;$<i.length-2;$++)h=h||i[$+1]!==1,_.push($+1);h=h&&i[i.length-1]!==1;let g=h?e.compute(Me(e.inputs[0],_),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},($,b)=>i[_[b]])),w=Yi(e,g,t[1],t[2],n,u,s,r.epsilon),x=$=>{let b=ke(t[0].dataType),S=l===1?"vec2f":`mat${l}x2f`,k=T=>{let C=T===0?"x":"y",N=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${b}(${N}(scale.${C}))`;case 2:return`vec2<${b}>(${N}(scale[0].${C}, scale[1].${C}))`;case 4:return`vec4<${b}>(${N}(scale[0].${C}, scale[1].${C}, scale[2].${C}, scale[3].${C}))`;default:throw new Error(`Not supported compoents ${l}`)}},I=R("input",t[0].dataType,t[0].dims,l),E=j("output",t[0].dataType,a,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${I.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${S}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${E.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${$.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${k(0)}, ${k(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:x},{inputs:[t[0],w]})},jc=(e,t)=>{t.format==="NHWC"?Yu(e,e.inputs,t):Xu(e,e.inputs,t)}}),Ju,el,Kc,wg=P(()=>{"use strict";te(),ne(),se(),Ju=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},el=(e,t,r)=>{let i=t.simplified,a=e[0].dims,n=e[1],s=!i&&e[2],u=a,l=O.normalizeAxis(t.axis,a.length),d=O.sizeToDimension(a,l),c=O.sizeFromDimension(a,l),f=O.size(n.dims),h=s?O.size(s.dims):0;if(f!==c||s&&h!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${f} and bias size of ${h}`);let _=[];for(let I=0;I<a.length;++I)I<l?_.push(a[I]):_.push(1);let g=be(c),w=["type","type"],x=[{type:12,data:d},{type:1,data:c},{type:12,data:Math.floor(c/g)},{type:1,data:t.epsilon}];s&&w.push("type");let $=r>1,b=r>2,S=I=>{let E=ke(e[0].dataType),T=[R("x",e[0].dataType,e[0].dims,g),R("scale",n.dataType,n.dims,g)];s&&T.push(R("bias",s.dataType,s.dims,g)),T.push(j("output",e[0].dataType,u,g)),$&&T.push(j("mean_data_output",1,_)),b&&T.push(j("inv_std_output",1,_));let C=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${I.registerUniforms(C).declareVariables(...T)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${$a("f32",g)};
    var mean_square_vector = ${$a("f32",g)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Mt(E,g,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${mt("mean_vector",g)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${mt("mean_square_vector",g)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Mt(E,g,"x[j + offset]")};
      let f32scale = ${Mt(E,g,"scale[j]")};
      output[j + offset] = ${T[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Mt(E,g,"bias[j]")}`:""}
      );
    }

    ${$?"mean_data_output[global_idx] = mean":""};
    ${b?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},k=[{dims:u,dataType:e[0].dataType}];return $&&k.push({dims:_,dataType:1}),b&&k.push({dims:_,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${g};${r};${i}`,inputDependencies:w},getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:x}),getShaderSource:S}},Kc=(e,t)=>{Ju(e.inputs),e.compute(el(e.inputs,t,e.outputCount))}}),tl,Zc,$g=P(()=>{"use strict";ne(),Ya(),Ja(),tl=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Zc=e=>{tl(e.inputs);let t=Dt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(Xa(e.inputs,{activation:""},t));else{let a=t[t.length-2],n=O.size(e.inputs[0].dims.slice(0,-2)),s=O.size(e.inputs[1].dims.slice(0,-2));if(n!==1&&a===1&&s===1){let u=e.inputs[0].reshape([1,n,i]),l=e.inputs[1].reshape([1,i,r]),d=[1,n,r],c=[u,l];e.compute(Vr(c,{activation:""},t,d),{inputs:c})}else e.compute(Vr(e.inputs,{activation:""},t))}}}),rl,il,al,Qc,Xc,vg=P(()=>{"use strict";te(),ne(),we(),se(),rl=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),n=t.blockSize/8*t.bits,s=e[1];if(!O.areEqual(s.dims,[t.n,a,n]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let u=e[2].dims;if(O.size(u)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.bits>4?t.n*a:t.n*Math.floor((a+1)/2);if(O.size(l)!==d)throw new Error("zeroPoints input size error.")}},il=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,u=r.slice(0,i-2),l=O.size(u),d=e[1].dims[2]/4,c=e[0].dataType,f=be(t.k),h=be(d),_=be(s),g=u.concat([a,s]),w=a>1&&s/_%2===0?2:1,x=O.size(g)/_/w,$=64,b=[],S=[l,a,n/f],k=O.convertShape(e[1].dims).slice();k.splice(-1,1,d/h),b.push(...Q(S)),b.push(...Q(k)),b.push(...Q(e[2].dims)),e.length===4&&b.push(...Q(O.convertShape(e[3].dims)));let I=[l,a,s/_];b.push(...Q(I));let E=T=>{let C=S.length,N=R("a",e[0].dataType,C,f),q=R("b",12,k.length,h),V=R("scales",e[2].dataType,e[2].dims.length),G=[N,q,V],Y=e.length===4?R("zero_points",12,e[3].dims.length):void 0;Y&&G.push(Y);let U=I.length,ee=j("output",e[0].dataType,U,_),X=ke(e[0].dataType),H=(()=>{switch(f){case 1:return`array<${X}, 8>`;case 2:return`mat4x2<${X}>`;case 4:return`mat2x4<${X}>`;default:throw new Error(`${f}-component is not supported.`)}})(),re=()=>{let M=`
          // reuse a data
            var input_offset = ${N.indicesToOffset(`${N.type.indices}(batch, row, word_offset)`)};
            var a_data: ${H};
            for (var j: u32 = 0; j < ${8/f}; j++) {
              a_data[j] = ${N.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let W=0;W<_*w;W++)M+=`
            b_value = ${h===1?`b${W}_data`:`b${W}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${H}(${Array.from({length:4},(ie,A)=>`${X}(b_value_lower[${A}]), ${X}(b_value_upper[${A}])`).join(", ")});
            b_dequantized_values = ${f===1?`${H}(${Array.from({length:8},(ie,A)=>`(b_quantized_values[${A}] - ${Y?`zero_point${W}`:"zero_point"}) * scale${W}`).join(", ")});`:`(b_quantized_values - ${H}(${Array(8).fill(`${Y?`zero_point${W}`:"zero_point"}`).join(",")})) * scale${W};`};
            workgroup_shared[local_id.x * ${w} + ${Math.floor(W/_)}]${_>1?`[${W%_}]`:""} += ${Array.from({length:8/f},(ie,A)=>`${f===1?`a_data[${A}] * b_dequantized_values[${A}]`:`dot(a_data[${A}], b_dequantized_values[${A}])`}`).join(" + ")};
          `;return M},F=()=>{let M=`
            var col_index = col * ${_};
            ${Y?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${X}(8);`}
            `;for(let W=0;W<_*w;W++)M+=`
            let scale${W} = ${V.getByOffset("col_index * nBlocksPerCol + block")};
            ${Y?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${Y.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${W} = ${X}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return M},ue=()=>{let M=`col_index = col * ${_};`;for(let W=0;W<_*w;W++)M+=`
            let b${W}_data = ${q.getByIndices(`${q.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return M+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${H};
            var b_dequantized_values: ${H};`,M};return`
        var<workgroup> workgroup_shared: array<${ee.type.value}, ${w*$}>;
        ${T.declareVariables(...G,ee)}
        ${T.mainStart([$,1,1])}
          let output_indices = ${ee.offsetToIndices(`(global_idx / ${$}) * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${$}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/f};
            ${F()}
            for (var word: u32 = 0; word < ${d}; word += ${h}) {
              ${ue()}
              for (var i: u32 = 0; i < ${h}; i++) {
                ${re()}
                word_offset += ${8/f};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${w}) {
            var output_value: ${ee.type.value} = ${ee.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${$}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${w};
            }
            ${ee.setByIndices(`${ee.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${f};${h};${_};${w};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:g,dataType:c}],dispatchGroup:{x},programUniforms:b}),getShaderSource:E}},al=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,u=r.slice(0,i-2),l=O.size(u),d=e[1].dims[2]/4,c=e[0].dataType,f=be(t.k),h=be(d),_=u.concat([a,s]),g=128,w=s%8===0?8:s%4===0?4:1,x=g/w,$=x*h*8,b=$/f,S=$/t.blockSize,k=O.size(_)/w,I=[],E=[l,a,n/f],T=O.convertShape(e[1].dims).slice();T.splice(-1,1,d/h),I.push(...Q(E)),I.push(...Q(T)),I.push(...Q(e[2].dims)),e.length===4&&I.push(...Q(O.convertShape(e[3].dims)));let C=[l,a,s];I.push(...Q(C));let N=q=>{let V=E.length,G=R("a",e[0].dataType,V,f),Y=R("b",12,T.length,h),U=R("scales",e[2].dataType,e[2].dims.length),ee=[G,Y,U],X=e.length===4?R("zero_points",12,e[3].dims.length):void 0;X&&ee.push(X);let H=C.length,re=j("output",e[0].dataType,H),F=ke(e[0].dataType),ue=()=>{switch(f){case 1:return`
          let a_data0 = vec4<${F}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${F}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${F}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${F}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${f}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${G.type.value}, ${b}>;
        var<workgroup> inter_results: array<array<${re.type.value}, ${x}>, ${w}>;
        ${q.declareVariables(...ee,re)}
        ${q.mainStart([x,w,1])}
          let output_indices = ${re.offsetToIndices(`workgroup_index * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${S} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${b};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${b}; a_offset += ${g})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${G.getByIndices(`${G.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${G.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${S} + local_id.x;
            ${X?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${X.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${F}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${F}(8);`}
            let scale = ${U.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${Y.getByIndices(`${Y.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/f};
            for (var i: u32 = 0; i < ${h}; i++) {
              ${ue()}
              let b_value = ${h===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${F}>(${Array.from({length:4},(M,W)=>`${F}(b_value_lower[${W}]), ${F}(b_value_upper[${W}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${F}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(M,W)=>`${`dot(a_data${W}, b_dequantized_values[${W}])`}`).join(" + ")};
              word_offset += ${8/f};
            }
            workgroupBarrier();
          }

          if (local_idx < ${w}) {
            var output_value: ${re.type.value} = ${re.type.value}(0);
            for (var b = 0u; b < ${x}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${re.setByIndices(`${re.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${f};${h};${x};${w}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:c}],dispatchGroup:{x:k},programUniforms:I}),getShaderSource:N}},Qc=(e,t)=>{rl(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(al(e.inputs,t)):e.compute(il(e.inputs,t))},Xc=e=>ce(e)}),nl,sl,ol,ul,ll,dl,pl,cl,Yc,xg=P(()=>{"use strict";te(),ne(),se(),nl=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},sl=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
            k = i32(${e.indicesGet("indices",a)}) - ${K("uniforms.pads",a,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${K("uniforms.x_shape",a,t)})) {
              break;
            }
            offset += k * i32(${K("uniforms.x_strides",a,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},ol=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${K("uniforms.pads",a,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${K("uniforms.x_shape",a,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${K("uniforms.x_shape",a,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${K("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},ul=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${K("uniforms.pads",a,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${K("uniforms.x_shape",a,t)})) {
                  k = i32(${K("uniforms.x_shape",a,t)}) - 1;
                }
                offset += k * i32(${K("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},ll=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${K("uniforms.pads",a,r)};
                if (k < 0)  {
                  k += i32(${K("uniforms.x_shape",a,t)}]);
                }
                if (k >= i32(${K("uniforms.x_shape",a,t)})) {
                  k -= i32(${K("uniforms.x_shape",a,t)});
                }
                offset += k * i32(${K("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},dl=(e,t,r)=>{switch(r.mode){case 0:return sl(e,t,r.pads.length);case 1:return ol(e,t,r.pads.length);case 2:return ul(e,t,r.pads.length);case 3:return ll(e,t,r.pads.length);default:throw new Error("Invalid mode")}},pl=(e,t)=>{let r=O.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,a=O.size(r),n=[{type:12,data:a},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&n.push({type:s?e[2].dataType:1,data:t.value}),n.push(...Q(e[0].dims,r));let u=["rank"],l=d=>{let c=j("output",e[0].dataType,r.length),f=R("x",e[0].dataType,i.length),h=f.type.value,_=dl(c,i.length,t),g=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&g.push({name:"constant_value",type:s?h:"f32"}),`
            ${d.registerUniforms(g).declareVariables(f,c)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${h}(0);
            ${_}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(r)/64)},programUniforms:n}),getShaderSource:l}},cl=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,n=new Int32Array(2*a).fill(0);if(e.length>=4){let u=e[3].getBigInt64Array();for(let l=0;l<u.length;l++)n[Number(u[l])]=Number(r[l]),n[Number(u[l])+a]=Number(r[l+u.length])}else r.forEach((u,l)=>n[Number(l)]=Number(u));let s=[];return n.forEach(u=>s.push(u)),{mode:t.mode,value:i,pads:s}}else return t},Yc=(e,t)=>{nl(e.inputs);let r=cl(e.inputs,t);e.compute(pl(e.inputs,r),{inputs:[0]})}}),Xt,Ji,ea,ta,ra,fl,hl,ia,aa,Jc,ef,na,tf,rf,sa,af,nf,sf,of,kg=P(()=>{"use strict";Ke(),te(),ne(),se(),Xt=e=>{if(fe.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Ji=(e,t,r)=>{let i=t.format==="NHWC",a=e.dims.slice();i&&a.splice(1,0,a.pop());let n=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),u=t.strides.slice(),l=n?t.dilations.slice():[],d=t.pads.slice();Wr.adjustPoolAttributes(r,a,s,u,l,d);let c=Wr.computePoolOutputShape(r,a,u,l,s,d,t.autoPad),f=Object.assign({},t);n?Object.assign(f,{kernelShape:s,strides:u,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(f,{kernelShape:s,strides:u,pads:d,cacheKey:t.cacheKey});let h=c.slice();return h.push(h.splice(1,1)[0]),[f,i?h:c]},ea=(e,t)=>{let r=t.format==="NHWC",i=O.size(e),a=O.size(t.kernelShape),n=[{type:12,data:i},{type:12,data:a}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let u=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],f=!!(d+c);n.push({type:12,data:u},{type:12,data:l},{type:12,data:d},{type:12,data:c}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let h=!1;if(t.kernelShape.length===2){let _=t.kernelShape[t.kernelShape.length-2],g=t.strides[t.strides.length-2],w=t.pads[t.pads.length/2-2],x=t.pads[t.pads.length-2];h=!!(w+x),n.push({type:12,data:_},{type:12,data:g},{type:12,data:w},{type:12,data:x}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[n,s,!0,f,h]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let u=O.computeStrides(t.kernelShape);n.push({type:12,data:u},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:u.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,c)=>d+c);return[n,s,!!l,!1,!1]}},ta=(e,t,r,i,a,n,s,u,l,d,c,f)=>{let h=a.format==="NHWC",_=t.type.value,g=j("output",t.type.tensor,i);if(a.kernelShape.length<=2){let w="",x="",$="",b=r-(h?2:1);if(c?w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${b}] < 0 || xIndices[${b}]
                      >= uniforms.x_shape[${b}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`:w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`,a.kernelShape.length===2){let S=r-(h?3:2);f?x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${S}] < 0 || xIndices[${S}] >= uniforms.x_shape[${S}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                `,$=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,g)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${g.offsetToIndices("global_idx")};
              var xIndices = ${g.offsetToIndices("global_idx")};

              var value = ${_}(${u});
              var pad = 0;
              ${x}
              ${w}
              ${$}
              ${s}

              output[global_idx] = value;
            }`}else{if(h)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let w=a.kernelShape.length,x=a.pads.length,$="";return d?$=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${n}
              }`:$=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${n}
            `,`
            ${e.registerUniforms(l).declareVariables(t,g)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${g.offsetToIndices("global_idx")};
              var xIndices = ${g.offsetToIndices("global_idx")};

              var offsets: array<u32, ${w}>;

              var value = ${_}(${u});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${w-1}u; j++) {
                  offsets[j] = offset / ${K("uniforms.kernelStrides","j",w)};
                  offset -= offsets[j] * ${K("uniforms.kernelStrides","j",w)};
                }
                offsets[${w-1}] = offset;

                isPad = false;
                for (var j = ${r-w}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${K("uniforms.strides",`j - ${r-w}u`,w)}
                    + offsets[j - ${r-w}u] - ${K("uniforms.pads","j - 2u",x)};
                  ${$}
              }
              ${s}

              output[global_idx] = value;
            }`}},ra=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,fl=e=>`${ra(e)};${e.countIncludePad}`,hl=e=>`${ra(e)};${e.storageOrder};${e.dilations}`,ia=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),aa=(e,t,r,i)=>{let[a,n]=Ji(t,i,r),s=R("x",t.dataType,t.dims.length),u=s.type.value,l="value += x_val;",d="";a.countIncludePad?d+=`value /= ${u}(uniforms.kernelSize);`:d+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[c,f,h,_,g]=ea(n,a);c.push(...Q(t.dims,n));let w=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${h};${_};${g}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(n)/64)},programUniforms:c}),getShaderSource:x=>ta(x,s,t.dims.length,n.length,a,l,d,0,f,h,_,g)}},Jc=e=>{let t=e.count_include_pad!==0,r=ia(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:fl(i)}},ef=(e,t)=>{Xt(e.inputs),e.compute(aa("AveragePool",e.inputs[0],!1,t))},na={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},tf=e=>{let t=e.format;return{format:t,...na,cacheKey:t}},rf=(e,t)=>{Xt(e.inputs),e.compute(aa("GlobalAveragePool",e.inputs[0],!0,t))},sa=(e,t,r,i)=>{let[a,n]=Ji(t,i,r),s=`
      value = max(x_val, value);
    `,u="",l=R("x",t.dataType,t.dims.length),d=["rank"],[c,f,h,_,g]=ea(n,a);return c.push(...Q(t.dims,n)),{name:e,shaderCache:{hint:`${i.cacheKey};${h};${_};${g}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(n)/64)},programUniforms:c}),getShaderSource:w=>ta(w,l,t.dims.length,n.length,a,s,u,t.dataType===10?-65504:-1e5,f,h,_,g)}},af=(e,t)=>{Xt(e.inputs),e.compute(sa("MaxPool",e.inputs[0],!1,t))},nf=e=>{let t=e.storage_order,r=e.dilations,i=ia(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let a={storageOrder:t,dilations:r,...i,cacheKey:""};return{...a,cacheKey:hl(a)}},sf=e=>{let t=e.format;return{format:t,...na,cacheKey:t}},of=(e,t)=>{Xt(e.inputs),e.compute(sa("GlobalMaxPool",e.inputs[0],!0,t))}}),ml,gl,uf,lf,Sg=P(()=>{"use strict";te(),ne(),we(),se(),ml=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,n)=>n===t.axis||a===e[0].dims[n]).reduce((a,n)=>a&&n,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},gl=(e,t)=>{let r=O.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,a=i===3,n=e[0].dims,s=e[1].dataType,u=O.size(n),l=i===3||i===2,d=l?[Math.ceil(O.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,f=e.length>2?e[2]:void 0,h=f?l?[Math.ceil(O.size(f.dims)/4)]:f.dims:void 0,_=c.length===0||c.length===1&&c[0]===1,g=_===!1&&c.length===1,w=be(u),x=_&&(!l||w===4),$=x?w:1,b=x&&!l?w:1,S=R("input",l?12:i,d.length,b),k=R("scale",s,c.length),I=f?R("zero_point",l?12:i,h.length):void 0,E=j("output",s,n.length,$),T=[S,k];I&&T.push(I);let C=[d,c];f&&C.push(h);let N=[{type:12,data:u/$},{type:12,data:r},{type:12,data:t.blockSize},...Q(...C,n)],q=V=>{let G=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${V.registerUniforms(G).declareVariables(...T,E)}
      ${V.mainStart()}
          ${V.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${E.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${S.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${$===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${S.getByOffset("global_idx")};`};

          // Set scale input
          ${_?`let scale_value= ${k.getByOffset("0")}`:g?`
            let scale_index = ${E.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${k.getByOffset("scale_index")};`:`
            var scale_indices: ${k.type.indices} = output_indices;
            let index = ${k.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${k.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${k.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${I?_?l?`
                let zero_point_input = ${I.getByOffset("0")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${I.getByOffset("0")}`:g?l?`
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${I.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${I.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${k.indicesToOffset("scale_indices")};
                let zero_point_input = ${I.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${I.getByIndices("scale_indices")};`:`let zero_point_value = ${l?a?"i32":"u32":S.type.value}(0);`};
      // Compute and write output
      ${E.setByOffset("global_idx",`${E.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:I?["rank","rank","rank"]:["rank","rank"]},getShaderSource:q,getRunData:()=>({outputs:[{dims:n,dataType:s}],dispatchGroup:{x:Math.ceil(u/$/64),y:1,z:1},programUniforms:N})}},uf=(e,t)=>{ml(e.inputs,t),e.compute(gl(e.inputs,t))},lf=e=>ce({axis:e.axis,blockSize:e.blockSize})}),_l,yl,df,Tg=P(()=>{"use strict";Ke(),te(),se(),_l=(e,t,r)=>{let i=e===t,a=e<t&&r<0,n=e>t&&r>0;if(i||a||n)throw new Error("Range these inputs' contents are invalid.")},yl=(e,t,r,i)=>{let a=Math.abs(Math.ceil((t-e)/r)),n=[a],s=a,u=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...Q(n)],l=d=>{let c=j("output",i,n.length),f=c.type.value,h=[{name:"outputSize",type:"u32"},{name:"start",type:f},{name:"delta",type:f}];return`
        ${d.registerUniforms(h).declareVariables(c)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${f}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:n,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u})}},df=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),fe.webgpu.validateInputContent&&_l(t,r,i),e.compute(yl(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),bl,oa,ua,wl,pf,cf,Ig=P(()=>{"use strict";te(),ne(),we(),se(),bl=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let a=`{
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
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${a}bitcast<${i}>(oldValue) + (${r})${n}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${a}max(bitcast<f32>(oldValue), (${r}))${n}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${a}min(bitcast<${i}>(oldValue), (${r}))${n}`;case"mul":return`${a}(bitcast<${i}>(oldValue) * (${r}))${n}`;default:throw new Error(`Reduction ${e} is not supported.`)}},oa=(e,t)=>`${e===1?`
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
    data_offset += u32((u32(index) * element_count_dim));`,ua=(e,t,r)=>`for (var i = 0u; i < uniforms.num_updates_elements; i++) {
        let value = updates[uniforms.num_updates_elements * ${r?"global_idx":"idx"} + i];
        ${bl(e.reduction,"output[data_offset + i]","value",t)}
      }`,wl=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r,n=1,s=Math.ceil(O.size(i)/n),u=i[i.length-1],l=O.sizeFromDimension(r,u),d=O.sizeFromDimension(i,0)/u,c=[{type:12,data:s},{type:12,data:u},{type:12,data:l},...Q(e[1].dims,e[2].dims,a)],f=h=>{let _=R("indices",e[1].dataType,e[1].dims.length),g=R("updates",e[2].dataType,e[2].dims.length,n),w=t.reduction!=="none"&&t.reduction!==""?Ud("output",e[0].dataType,a.length):j("output",e[0].dataType,a.length,n);return`
      ${h.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(_,g,w)}
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
        ${oa(r.length,!1)}
      }
      ${ua(t,w.type.value,!1)}
    }
    return;
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  var indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${oa(r.length,!0)}
  }
  ${ua(t,w.type.value,!0)}
  }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}),getShaderSource:f}},pf=e=>ce({reduction:e.reduction}),cf=(e,t)=>{e.compute(wl(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),$l,vl,xl,la,kl,Sl,Tl,Il,El,zl,Cl,Ol,da,Al,Bl,Rl,Nl,Ml,ff,hf,Eg=P(()=>{"use strict";te(),ne(),we(),se(),$l=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},vl=(e,t,r)=>{t.every(a=>a>=0&&a<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((a,n)=>i[a]=e[n]),i},xl=(e,t,r,i,a,n)=>{let[s,u,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(c=>n.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0){if(e[u].getFloat32Array().forEach(c=>i.push(c)),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");$l(i,t),t.axes.length>0&&vl(i,t.axes,d).forEach((c,f)=>i[f]=c)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(c=>a.push(Number(c))),a.length!==0&&a.length!==d&&r>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof a<"u"&&i.length>0&&a.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},la=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,kl=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${la("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${la("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Sl=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Tl=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),a=e.length===0?i:e.slice();return t.length>0?(t.forEach((n,s)=>{i[n]=a[s],i[s+r]=a[t.length+s]}),i):a},Il=(e,t,r,i)=>{let a=[];if(r.length>0)if(i.length>0){if(e.forEach(n=>a.push(n)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((n,s)=>a[n]=r[s])}else r.forEach(n=>a.push(n));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((n,s)=>Math.round(n*t[s]))}return a},El=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(n=>t[n]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(n=>t[n]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return r.axes.length>0?(r.axes.forEach(n=>t[n]=i),r.axes.forEach(n=>a[n]=Math.round(e[n]*t[n]))):(t.fill(i,0,t.length),a.forEach((n,s)=>a[s]=Math.round(n*t[s]))),a},zl=(e,t,r,i,a)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${K("uniforms.scales","i",i)};
        var roi_low = ${K("uniforms.roi","i",a)};
        var roi_hi = ${K("uniforms.roi",`i + ${t.length}`,a)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${K("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${K("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Cl=(e,t,r,i,a,n,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${K("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${K("uniforms.roi","i",n)};
          var roi_hi = ${K("uniforms.roi",`i + ${r.length}`,n)};
          var input_shape_i = ${K("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${K("uniforms.output_shape","i",i.length)};
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
    }`,Ol=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${K("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,da=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Al=(e,t,r,i,a)=>{let[n,s,u,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(col, ${r[u]} - 1))`)};
      ${da(e,l,n,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${s}];
      var col:${d} = originalIndices[${u}];
      ${i?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[u]} - 1)) {
        return ${a};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[u]} - 1));
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
    }`},Bl=(e,t,r,i,a,n,s,u,l,d)=>{let c=r.length===2,f=!0,[h,_]=c?[0,1]:f?[2,3]:[1,2],g=e.type.value,w=x=>{let $=x===h?"row":"col";return`
      fn ${$}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${g} {
        var output_index = ${t.indicesGet("output_indices",x)};
        var originalIdx: ${g} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[x]},
        ${i[x]}, ${r[x]}, ${n[x]}, ${n[x]} + ${r.length});
        var fractOriginalIdx: ${g} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${u} && (originalIdx < 0 || originalIdx > (${r[x]} - 1))) {
          return ${l};
        }
        var data: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${$}: ${g} = originalIdx + ${g}(i);
          if (${$} < 0 || ${$} >= ${r[x]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:u?`return ${l};`:`${$} = max(0, min(${$}, ${r[x]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",x,`u32(${$})`)};
          data[i + 1] = ${x===h?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${w(h)};
    ${w(_)};
  fn getCubicInterpolationCoefs(s: ${g}) -> array<${g}, 4> {
    var absS = abs(s);
    var coeffs: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${g} = 1.0 - absS;
    var twoMinusAbsS: ${g} = 2.0 - absS;
    var onePlusAbsS: ${g} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${g}, 4>, coefs: array<${g}, 4>) -> ${g} {
    var coefsSum: ${g} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${g} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Rl=(e,t,r,i,a)=>{let[n,s,u,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(height, ${r[u]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${da(e,d,n,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${s}];
      var height:${c} = originalIndices[${u}];
      var width:${c} = originalIndices[${l}];
      ${i?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[u]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${a};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[u]} - 1));
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
    }`},Nl=(e,t,r,i,a,n)=>{let s=e.dims,u=Tl(n,t.axes,s.length),l=Il(s,i,a,t.axes),d=i.slice();i.length===0&&(d=s.map((b,S)=>b===0?1:l[S]/b),t.keepAspectRatioPolicy!=="stretch"&&(l=El(s,d,t)));let c=j("output",e.dataType,l.length),f=R("input",e.dataType,s.length),h=O.size(l),_=s.length===l.length&&s.every((b,S)=>b===l[S]),g=t.coordinateTransformMode==="tf_crop_and_resize",w=t.extrapolationValue,x=f.type.value,$=b=>`
      ${_?"":`
      ${kl(t.coordinateTransformMode,x)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Ol(f,s)};
              ${Sl(t.nearestMode,r,x)};
              ${Cl(f,c,s,l,d.length,u.length,g)};
              `;case"linear":return`
              ${zl(c,s,l,d.length,u.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${Al(f,c,s,g,w)}`;if(s.length===3||s.length===5)return`${Rl(f,c,s,g,w)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${Bl(f,c,s,l,d,u,t.cubicCoeffA,g,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${b.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",u.length).declareVariables(f,c)}
      ${b.mainStart()}
        ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${_?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${f.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${f.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${a.length>0?a:""}|${u.length>0?u:""}|${_}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},{type:1,data:d},{type:1,data:u},...Q(s,l)]})}},Ml=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},ff=(e,t)=>{let r=[],i=[],a=[],n=Ml(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");xl(e.inputs,t,n,r,i,a),e.compute(Nl(e.inputs[0],t,n,r,i,a),{inputs:[0]})},hf=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,a=e.cubicCoeffA,n=e.excludeOutside!==0,s=e.extrapolationValue,u=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return ce({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:a,excludeOutside:n,extrapolationValue:s,keepAspectRatioPolicy:u,mode:l,nearestMode:d})}}),Dl,Pl,mf,zg=P(()=>{"use strict";te(),ne(),se(),Dl=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],n=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==n)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},Pl=(e,t,r,i)=>{let a=t.simplified,n=e[0].dims,s=O.size(n),u=n,l=s,d=n.slice(-1)[0],c=i?n.slice(0,-1).concat(1):[],f=!a&&e.length>3,h=e.length>4,_=i&&r>1,g=i&&r>2,w=r>3,x=64,$=be(d),b=[{type:12,data:l},{type:12,data:$},{type:12,data:d},{type:1,data:t.epsilon}],S=I=>{let E=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],T=[R("x",e[0].dataType,e[0].dims,$),R("skip",e[1].dataType,e[1].dims,$),R("gamma",e[2].dataType,e[2].dims,$)];f&&T.push(R("beta",e[3].dataType,e[3].dims,$)),h&&T.push(R("bias",e[4].dataType,e[4].dims,$)),T.push(j("output",e[0].dataType,u,$)),_&&T.push(j("mean_output",1,c)),g&&T.push(j("inv_std_output",1,c)),w&&T.push(j("input_skip_bias_sum",e[0].dataType,u,$));let C=ke(e[0].dataType),N=ke(1,$);return`

      ${I.registerUniforms(E).declareVariables(...T)}
      var<workgroup> sum_shared : array<${N}, ${x}>;
      var<workgroup> sum_squared_shared : array<${N}, ${x}>;

      ${I.mainStart([x,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${x};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${x};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${x-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${h?"bias[offset1d + i]":C+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${w?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Mt(C,$,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${x};
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
        let mean = ${mt("sum",$)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${mt("square_sum",$)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${_?"mean_output[global_idx] = mean;":""}
        ${g?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${C}(mean)`}) *
            ${C}(inv_std_dev) * gamma[offset1d + i]
            ${f?"+ beta[offset1d + i]":""};
        }
      }`},k=[{dims:u,dataType:e[0].dataType}];return r>1&&k.push({dims:c,dataType:1}),r>2&&k.push({dims:c,dataType:1}),r>3&&k.push({dims:n,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${$};${_};${g};${w}`,inputDependencies:e.map((I,E)=>"type")},getShaderSource:S,getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:b})}},mf=(e,t)=>{Dl(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Pl(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Ul,Yt,ql,pa,Wl,Ll,gf,_f,Cg=P(()=>{"use strict";te(),ne(),we(),se(),Ul=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},Yt=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},ql=(e,t)=>{if(e.length>1){let r=Yt(e,1),i=Yt(e,2),a=Yt(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),ce({starts:r,ends:i,axes:a})}else return t},pa=(e,t,r,i,a)=>{let n=e;return e<0&&(n+=r[i[t]]),a[t]<0?Math.max(0,Math.min(n,r[i[t]]-1)):Math.max(0,Math.min(n,r[i[t]]))},Wl=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${K("uniforms.input_shape","i",r.length)};
            let steps_i = ${K("uniforms.steps","i",r.length)};
            let signs_i = ${K("uniforms.signs","i",r.length)};
            let starts_i = ${K("uniforms.starts","i",r.length)};
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
      }`,Ll=(e,t)=>{let r=e[0].dims,i=O.size(r),a=t.axes.length>0?O.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],n=Yt(e,4);n.forEach($=>$!==0||(()=>{throw new Error("step cannot be 0")})),n.length===0&&(n=Array(a.length).fill(1));let s=t.starts.map(($,b)=>pa($,b,r,a,n)),u=t.ends.map(($,b)=>pa($,b,r,a,n));if(a.length!==s.length||a.length!==u.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==r.length)for(let $=0;$<r.length;++$)a.includes($)||(s.splice($,0,0),u.splice($,0,r[$]),n.splice($,0,1));let l=n.map($=>Math.sign($));n.forEach(($,b,S)=>{if($<0){let k=(u[b]-s[b])/$,I=s[b],E=I+k*n[b];s[b]=E,u[b]=I,S[b]=-$}});let d=r.slice(0);a.forEach(($,b)=>{d[$]=Math.ceil((u[$]-s[$])/n[$])});let c={dims:d,dataType:e[0].dataType},f=j("output",e[0].dataType,d.length),h=R("input",e[0].dataType,e[0].dims.length),_=O.size(d),g=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:n.length}],w=[{type:12,data:_},{type:12,data:s},{type:6,data:l},{type:12,data:n},...Q(e[0].dims,d)],x=$=>`
      ${$.registerUniforms(g).declareVariables(h,f)}
        ${Wl(h,f,r)}
        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${f.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${f.setByOffset("global_idx",h.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${s.length}_${n.length}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:w})}},gf=(e,t)=>{Ul(e.inputs,t);let r=ql(e.inputs,t);e.compute(Ll(e.inputs,r),{inputs:[0]})},_f=e=>{let t=e.starts,r=e.ends,i=e.axes;return ce({starts:t,ends:r,axes:i})}}),Vl,Gl,yf,bf,Og=P(()=>{"use strict";te(),ne(),we(),gt(),se(),Vl=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Gl=(e,t)=>{let r=e.inputs[0],i=r.dims,a=O.size(i),n=i.length,s=O.normalizeAxis(t.axis,n),u=s<i.length-1,l,d=[];u?(d=Array.from({length:n},(T,C)=>C),d[s]=n-1,d[n-1]=s,l=e.compute(Me(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let c=l.dims,f=c[n-1],h=a/f,_=be(f),g=f/_,w=64;h===1&&(w=256);let x=(T,C)=>C===4?`max(max(${T}.x, ${T}.y), max(${T}.z, ${T}.w))`:C===2?`max(${T}.x, ${T}.y)`:C===3?`max(max(${T}.x, ${T}.y), ${T}.z)`:T,$=R("x",l.dataType,l.dims,_),b=j("result",l.dataType,l.dims,_),S=$.type.value,k=ke(l.dataType)==="f32"?`var threadMax = ${S}(-3.402823e+38f);`:`var threadMax = ${S}(-65504.0h);`,I=T=>`
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
      ${T.registerUniform("packedCols","i32").declareVariables($,b)}
      ${T.mainStart(w)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${w};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${k}
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
          rowMaxShared = ${S}(${x("threadShared[0]",_)});
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
          rowSumShared = ${S}(${mt("threadShared[0]",_)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,E=e.compute({name:"Softmax",shaderCache:{hint:`${_};${w}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:l.dataType}],dispatchGroup:{x:h},programUniforms:[{type:6,data:g}]}),getShaderSource:I},{inputs:[l],outputs:[u?-1:0]})[0];u&&e.compute(Me(E,d),{inputs:[E]})},yf=(e,t)=>{Vl(e.inputs),Gl(e,t)},bf=e=>ce({axis:e.axis})}),ca,Hl,Fl,jl,wf,Ag=P(()=>{"use strict";te(),ne(),se(),ca=e=>Array.from(e.getBigInt64Array(),Number),Hl=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(ca(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Fl=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},jl=(e,t)=>{let r=e[0].dims,i=t??ca(e[1]),a=Fl(r,i),n=O.size(a),s=e[0].dataType,u=R("input",s,r.length),l=j("output",s,a.length),d=c=>`
      const inputShape = ${u.indices(...r)};
      ${c.registerUniform("output_size","u32").declareVariables(u,l)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${u.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${u.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${u.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",u.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},...Q(e[0].dims,a)]}),getShaderSource:d}},wf=e=>{Hl(e.inputs),e.compute(jl(e.inputs),{inputs:[0]})}}),Kl,Zl,$f,Bg=P(()=>{"use strict";te(),ne(),se(),Kl=(e,t,r,i,a)=>{let n=j("output_data",a,r.length,4),s=R("a_data",t[1].dataType,t[1].dims.length,4),u=R("b_data",t[2].dataType,t[2].dims.length,4),l=R("c_data",t[0].dataType,t[0].dims.length,4),d,c=(f,h,_)=>`select(${h}, ${f}, ${_})`;if(!i)d=n.setByOffset("global_idx",c(s.getByOffset("global_idx"),u.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let f=(h,_,g="")=>{let w=`a_data[index_a${_}][component_a${_}]`,x=`b_data[index_b${_}][component_b${_}]`,$=`bool(c_data[index_c${_}] & (0xffu << (component_c${_} * 8)))`;return`
            let output_indices${_} = ${n.offsetToIndices(`global_idx * 4u + ${_}u`)};
            let offset_a${_} = ${s.broadcastedIndicesToOffset(`output_indices${_}`,n)};
            let offset_b${_} = ${u.broadcastedIndicesToOffset(`output_indices${_}`,n)};
            let offset_c${_} = ${l.broadcastedIndicesToOffset(`output_indices${_}`,n)};
            let index_a${_} = offset_a${_} / 4u;
            let index_b${_} = offset_b${_} / 4u;
            let index_c${_} = offset_c${_} / 4u;
            let component_a${_} = offset_a${_} % 4u;
            let component_b${_} = offset_b${_} % 4u;
            let component_c${_} = offset_c${_} % 4u;
            ${h}[${_}] = ${g}(${c(w,x,$)});
          `};a===9?d=`
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
        ${e.registerUniform("vec_size","u32").declareVariables(l,s,u,n)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},Zl=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,a=e[1].dataType,n=!(O.areEqual(t,r)&&O.areEqual(r,i)),s=t,u=O.size(t);if(n){let d=Dt.calcShape(Dt.calcShape(t,r,!1),i,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,u=O.size(s)}let l=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>Kl(d,e,s,n,a),getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:l},...Q(i,t,r,s)]})}},$f=e=>{e.compute(Zl(e.inputs))}}),vf,Rg=P(()=>{"use strict";Km(),ja(),Zm(),Qm(),Xm(),Ym(),Jm(),ag(),sg(),og(),ug(),lg(),dg(),pg(),cg(),fg(),hg(),mg(),gg(),_g(),yg(),bg(),wg(),$g(),vg(),qc(),xg(),kg(),Sg(),Tg(),Ig(),Fa(),Eg(),Hc(),zg(),Cg(),Og(),Vc(),Ag(),gt(),Ka(),Bg(),vf=new Map([["Abs",[hp]],["Acos",[mp]],["Acosh",[gp]],["Add",[Qp]],["ArgMax",[dp,xa]],["ArgMin",[lp,xa]],["Asin",[_p]],["Asinh",[yp]],["Atan",[bp]],["Atanh",[wp]],["Attention",[pp]],["AveragePool",[ef,Jc]],["BatchNormalization",[cp]],["BiasAdd",[fp]],["BiasSplitGelu",[Zp]],["Cast",[vp,$p]],["Ceil",[kp]],["Clip",[xp]],["Concat",[sc,oc]],["Conv",[za,Ea]],["ConvTranspose",[_c,gc]],["Cos",[Sp]],["Cosh",[Tp]],["CumSum",[yc,bc]],["DepthToSpace",[wc,$c]],["DequantizeLinear",[uf,lf]],["Div",[Xp]],["Einsum",[vc,xc]],["Elu",[Ip,ir]],["Equal",[Yp]],["Erf",[Ep]],["Exp",[zp]],["Expand",[kc]],["FastGelu",[Sc]],["Floor",[Cp]],["FusedConv",[za,Ea]],["Gather",[Ic,Tc]],["GatherElements",[Bc,Ac]],["GatherBlockQuantized",[Cc,Oc]],["GatherND",[Ec,zc]],["Gelu",[Op]],["Gemm",[Nc,Rc]],["GlobalAveragePool",[rf,tf]],["GlobalMaxPool",[of,sf]],["Greater",[rc]],["GreaterOrEqual",[ac]],["GridSample",[Mc,Dc]],["GroupQueryAttention",[Fc]],["HardSigmoid",[Up,Pp]],["InstanceNormalization",[jc]],["LayerNormalization",[Kc]],["LeakyRelu",[Ap,ir]],["Less",[ic]],["LessOrEqual",[nc]],["Log",[jp]],["MatMul",[Zc]],["MatMulNBits",[Qc,Xc]],["MaxPool",[af,nf]],["Mul",[Jp]],["MultiHeadAttention",[Uc,Pc]],["Neg",[Rp]],["Not",[Bp]],["Pad",[Yc]],["Pow",[ec]],["QuickGelu",[Kp,ir]],["Range",[df]],["Reciprocal",[Np]],["ReduceMin",[ap]],["ReduceMean",[Jd]],["ReduceMax",[ip]],["ReduceSum",[sp]],["ReduceProd",[np]],["ReduceL1",[ep]],["ReduceL2",[tp]],["ReduceLogSum",[up]],["ReduceLogSumExp",[rp]],["ReduceSumSquare",[op]],["Relu",[Mp]],["Resize",[ff,hf]],["RotaryEmbedding",[Gc]],["ScatterND",[cf,pf]],["Sigmoid",[Dp]],["Sin",[qp]],["Sinh",[Wp]],["Slice",[gf,_f]],["SkipLayerNormalization",[mf]],["Split",[Wc,Lc]],["Sqrt",[Lp]],["Softmax",[yf,bf]],["Sub",[tc]],["Tan",[Vp]],["Tanh",[Gp]],["ThresholdedRelu",[Fp,ir]],["Tile",[wf]],["Transpose",[Wd,Ld]],["Where",[$f]]])}),xf,Ng=P(()=>{"use strict";Ke(),at(),se(),xf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,a){Je(e.programInfo.name);let n=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let u=[];for(let d of t)u.push({binding:u.length,resource:{buffer:d.buffer}});for(let d of r)u.push({binding:u.length,resource:{buffer:d.buffer}});a&&u.push({binding:u.length,resource:a});let l=n.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:u,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,l),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),je(e.programInfo.name)}dispose(){}build(e,t){Je(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&i.push(`enable ${d.extension};`)});let a=qd(t,this.backend.device.limits),n=e.getShaderSource(a),s=`${i.join(`
`)}
${a.additionalImplementations}
${n}`,u=r.createShaderModule({code:s,label:e.name});le("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let l=r.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:e.name});return je(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&r<=a&&i<=a)return[t,r,i];let n=t*r*i,s=Math.ceil(Math.sqrt(n));if(s>a){if(s=Math.ceil(Math.cbrt(n)),s>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),kf={};Ut(kf,{WebGpuBackend:()=>Sf});var Ql,Xl,Yl,Sf,Mg=P(()=>{"use strict";Ke(),te(),at(),Nd(),Fm(),Rg(),Ng(),Ql=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let a=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${a}`);break}case"rank":{let n=e[i].dims.length;r.push(`${a};${n}`);break}case"dims":{let n=e[i].dims.join(",");r.push(`${a};${n}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},Xl=(e,t,r)=>{let i=e.name;return e.shaderCache?.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${Ql(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,i},Yl=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Sf=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},a=n=>t.features.has(n)&&r.push(n)&&!0;a("chromium-experimental-timestamp-query-inside-passes")||a("timestamp-query"),a("shader-f16"),a("subgroups"),this.device=await t.requestDevice(i),this.adapterInfo=new Yl(t.info||await t.requestAdapterInfo()),this.gpuDataManager=Pd(this),this.programManager=new xf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,La(e.logLevel,!!e.debug),this.device.onuncapturederror=n=>{n.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${n.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Je(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=r[i],n=a.kernelId,s=this.kernels.get(n),u=s.kernelType,l=s.kernelName,d=a.programName,c=a.inputTensorViews,f=a.outputTensorViews,h=t[i*2],_=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=h);let g=Number(h-this.queryTimeBase),w=Number(_-this.queryTimeBase);if(!Number.isSafeInteger(g)||!Number.isSafeInteger(w))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:c.map(x=>({dims:x.dims,dataType:it(x.dataType)})),outputsMetadata:f.map(x=>({dims:x.dims,dataType:it(x.dataType)})),kernelId:n,kernelType:u,kernelName:l,programName:d,startTime:g,endTime:w});else{let x="";c.forEach((b,S)=>{x+=`input[${S}]: [${b.dims}] | ${it(b.dataType)}, `});let $="";f.forEach((b,S)=>{$+=`output[${S}]: [${b.dims}] | ${it(b.dataType)}, `}),console.log(`[profiling] kernel "${n}|${u}|${l}|${d}" ${x}${$}execution time: ${w-g} ns`)}Pr("GPU",`${d}::${h}::${_}`)}e.unmap(),this.pendingQueries.delete(e)}),je()}run(e,t,r,i,a,n){Je(e.name);let s=[];for(let b=0;b<t.length;++b){let S=t[b].data;if(S===0)continue;let k=this.gpuDataManager.get(S);if(!k)throw new Error(`no GPU data for input: ${S}`);s.push(k)}let{outputs:u,dispatchGroup:l,programUniforms:d}=e.getRunData(t),c=r.length===0?u.map((b,S)=>S):r;if(c.length!==u.length)throw new Error(`Output size ${c.length} must be equal to ${u.length}.`);let f=[],h=[];for(let b=0;b<u.length;++b){if(!Number.isInteger(c[b])||c[b]<-3||c[b]>=n)throw new Error(`Invalid output index: ${c[b]}`);if(c[b]===-3)continue;let S=c[b]===-1,k=c[b]===-2,I=S||k?a(u[b].dataType,u[b].dims):i(c[b],u[b].dataType,u[b].dims);if(f.push(I),I.data===0)continue;let E=this.gpuDataManager.get(I.data);if(!E)throw new Error(`no GPU data for output: ${I.data}`);if(S&&this.temporaryData.push(E),k){let T=this.kernelPersistentData.get(this.currentKernelId);T||(T=[],this.kernelPersistentData.set(this.currentKernelId,T)),T.push(E)}h.push(E)}if(s.length!==t.length||h.length!==f.length){if(h.length===0)return je(e.name),f;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let _;if(d){let b=0,S=[];d.forEach(T=>{let C=typeof T.data=="number"?[T.data]:T.data;if(C.length===0)return;let N=T.type===10?2:4,q,V;T.type===10?(V=C.length>4?16:C.length>2?8:C.length*N,q=C.length>4?16:N*C.length):(V=C.length<=2?C.length*N:16,q=16),b=Math.ceil(b/V)*V,S.push(b);let G=T.type===10?8:4;b+=C.length>4?Math.ceil(C.length/G)*q:C.length*N});let k=16;b=Math.ceil(b/k)*k;let I=new ArrayBuffer(b);d.forEach((T,C)=>{let N=S[C],q=typeof T.data=="number"?[T.data]:T.data;if(T.type===6)new Int32Array(I,N,q.length).set(q);else if(T.type===12)new Uint32Array(I,N,q.length).set(q);else if(T.type===10)new Uint16Array(I,N,q.length).set(q);else if(T.type===1)new Float32Array(I,N,q.length).set(q);else throw new Error(`Unsupported uniform type: ${it(T.type)}`)});let E=this.gpuDataManager.create(b,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(E.buffer,0,I,0,b),this.gpuDataManager.release(E.id),_={offset:0,size:b,buffer:E.buffer}}let g=this.programManager.normalizeDispatchGroupSize(l),w=g[1]===1&&g[2]===1,x=Xl(e,t,w),$=this.programManager.getArtifact(x);if($||($=this.programManager.build(e,g),this.programManager.setArtifact(x,$),le("info",()=>`[artifact] key: ${x}, programName: ${e.name}`)),d&&$.uniformVariablesInfo){if(d.length!==$.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${$.uniformVariablesInfo.length}, got ${d.length} in program "${$.programInfo.name}".`);for(let b=0;b<d.length;b++){let S=d[b],k=S.type,I=typeof S.data=="number"?1:S.data.length,[E,T]=$.uniformVariablesInfo[b];if(k!==E||I!==T)throw new Error(`Uniform variable ${b} mismatch: expect type ${E} with size ${T}, got type ${k} with size ${I} in program "${$.programInfo.name}".`)}}if(le("info",()=>`[ProgramManager] run "${e.name}" (key=${x}) with ${g[0]}x${g[1]}x${g[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let b={kernelId:this.currentKernelId,programName:$.programInfo.name,inputTensorViews:t,outputTensorViews:f};this.pendingKernels.push(b),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(b)}return this.programManager.run($,s,h,g,_),je(e.name),f}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let a=vf.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let n={kernelType:e,kernelName:i,kernelEntry:a[0],attributes:[a[1],r]};this.kernels.set(t,n)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let a=i.kernelType,n=i.kernelName,s=i.kernelEntry,u=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${n}" is not allowed to be called recursively`);this.currentKernelId=e,u[0]&&(u[1]=u[0](u[1]),u[0]=void 0),le("info",()=>`[WebGPU] Start to run kernel "[${a}] ${n}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),s(t,u[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${n}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${a}] ${n}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let n=a.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,n);return a.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await wa(this,e,t);return Va(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){le("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){le("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){le("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let a=this.getComputePassEncoder(),n=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(n.computePipeline),a.setBindGroup(0,n.bindGroup),a.dispatchWorkgroups(...n.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Tf={};Ut(Tf,{init:()=>If});var Br,Jl,If,Dg=P(()=>{"use strict";te(),at(),ne(),Hm(),Br=class Ef{constructor(t,r,i,a){this.module=t,this.dataType=r,this.data=i,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(O.size(t)!==O.size(this.dims))throw new Error("Invalid new shape");return new Ef(this.module,this.dataType,this.data,t)}},Jl=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,a=r/e.PTR_SIZE,n=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*a++,n));let s=Number(e.getValue(i*a++,n));this.outputCount=Number(e.getValue(i*a++,n)),this.customDataOffset=Number(e.getValue(i*a++,"*")),this.customDataSize=Number(e.getValue(i*a++,n));let u=[];for(let l=0;l<s;l++){let d=Number(e.getValue(i*a++,n)),c=Number(e.getValue(i*a++,"*")),f=Number(e.getValue(i*a++,n)),h=[];for(let _=0;_<f;_++)h.push(Number(e.getValue(i*a++,n)));u.push(new Br(e,d,c,h))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,i=t?.outputs??[],a=(s,u,l)=>new Br(this.module,u,this.output(s,l),l),n=(s,u)=>{let l=St(s,u);if(!l)throw new Error(`Unsupported data type: ${s}`);let d=l>0?this.backend.gpuDataManager.create(l).id:0;return new Br(this.module,s,d,u)};return this.backend.run(e,r,i,a,n,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,a=i===4?"i32":"i64",n=this.module.stackAlloc((1+t.length)*i);this.module.setValue(n,t.length,a);for(let s=0;s<t.length;s++)this.module.setValue(n+i*(s+1),t[s],a);return this.module._JsepOutput(this.opKernelContext,e,n)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},If=async(e,t,r,i)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let n=(Mg(),sr(kf)).WebGpuBackend,s=new n;await s.initialize(r,i),a("webgpu",[s,u=>s.alloc(Number(u)),u=>s.free(u),(u,l,d,c=!1)=>{if(c)le("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(u)}, dst=${Number(l)}, size=${Number(d)}`),s.memcpy(Number(u),Number(l));else{le("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(u)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let f=t.HEAPU8.subarray(Number(u>>>0),Number(u>>>0)+Number(d));s.upload(Number(l),f)}},async(u,l,d)=>{le("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${u}, dataOffset=${l}, size=${d}`),await s.download(Number(u),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(u,l,d)=>s.createKernel(u,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),u=>s.releaseKernel(u),(u,l,d,c)=>{le("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${u}, contextDataOffset=${l}`);let f=new Jl(t,s,Number(l));return s.computeKernel(Number(u),f,c)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let n=new Dd(r);a("webnn",[n,()=>n.reserveTensorId(),s=>n.releaseTensorId(s),async(s,u,l,d,c)=>n.ensureTensor(s,u,l,d,c),(s,u)=>{n.uploadTensor(s,u)},async(s,u)=>n.downloadTensor(s,u)])}}}),ed,en,tn,ft,td,fa,Hr,rn,an,ha,nn,sn,on,zf=P(()=>{"use strict";Lm(),Vm(),te(),zt(),Pa(),Od(),ed=(e,t)=>{ge()._OrtInit(e,t)!==0&&he("Can't initialize onnxruntime.")},en=async e=>{ed(e.wasm.numThreads,qr(e.logLevel))},tn=async(e,t)=>{ge().asyncInit?.();{let r=(Dg(),sr(Tf)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let i=e.webgpu.adapter;if(i){if(typeof i.limits!="object"||typeof i.features!="object"||typeof i.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let n=e.webgpu.forceFallbackAdapter;if(n!==void 0&&typeof n!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${n}"`);if(i=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:n}),!i)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",ge(),e,i)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",ge(),e)}}},ft=new Map,td=e=>{let t=ge(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,a,a+i)!==0&&he("Can't get session input/output count.");let n=i===4?"i32":"i64";return[Number(t.getValue(a,n)),Number(t.getValue(a+i,n))]}finally{t.stackRestore(r)}},fa=(e,t)=>{let r=ge(),i=r.stackSave(),a=0;try{let n=r.PTR_SIZE,s=r.stackAlloc(2*n);r._OrtGetInputOutputMetadata(e,t,s,s+n)!==0&&he("Can't get session input/output metadata.");let u=Number(r.getValue(s,"*"));a=Number(r.getValue(s+n,"*"));let l=r.HEAP32[a/4];if(l===0)return[u,0];let d=r.HEAPU32[a/4+1],c=[];for(let f=0;f<d;f++){let h=Number(r.getValue(a+8+f*n,"*"));c.push(h!==0?r.UTF8ToString(h):Number(r.getValue(a+8+(f+d)*n,"*")))}return[u,l,c]}finally{r.stackRestore(i),a!==0&&r._OrtFree(a)}},Hr=e=>{let t=ge(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},rn=async(e,t)=>{let r,i,a=ge();Array.isArray(e)?[r,i]=e:e.buffer===a.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=Hr(e);let n=0,s=0,u=0,l=[],d=[],c=[];try{if([s,l]=await Cd(t),t?.externalData&&a.mountExternalData){let k=[];for(let I of t.externalData){let E=typeof I=="string"?I:I.path;k.push(Wa(typeof I=="string"?I:I.data).then(T=>{a.mountExternalData(E,T)}))}await Promise.all(k)}for(let k of t?.executionProviders??[])if((typeof k=="string"?k:k.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,typeof k!="string"){let I=k,E=I?.context,T=I?.gpuDevice,C=I?.deviceType,N=I?.powerPreference;E?a.currentContext=E:T?a.currentContext=await a.webnnCreateMLContext(T):a.currentContext=await a.webnnCreateMLContext({deviceType:C,powerPreference:N})}else a.currentContext=await a.webnnCreateMLContext();break}n=await a._OrtCreateSession(r,i,s),a.webgpuOnCreateSession?.(n),n===0&&he("Can't create a session."),a.jsepOnCreateSession?.(),a.currentContext&&(a.webnnRegisterMLContext(n,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[f,h]=td(n),_=!!t?.enableGraphCapture,g=[],w=[],x=[],$=[],b=[];for(let k=0;k<f;k++){let[I,E,T]=fa(n,k);I===0&&he("Can't get an input name."),d.push(I);let C=a.UTF8ToString(I);g.push(C),x.push(E===0?{name:C,isTensor:!1}:{name:C,isTensor:!0,type:it(E),shape:T})}for(let k=0;k<h;k++){let[I,E,T]=fa(n,k+f);I===0&&he("Can't get an output name."),c.push(I);let C=a.UTF8ToString(I);w.push(C),$.push(E===0?{name:C,isTensor:!1}:{name:C,isTensor:!0,type:it(E),shape:T});{if(_&&t?.preferredOutputLocation===void 0){b.push("gpu-buffer");continue}let N=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[C]??"cpu",q=a.webnnIsGraphOutput;if(N==="cpu"&&q&&q(n,C)){b.push("ml-tensor-cpu-output");continue}if(N!=="cpu"&&N!=="cpu-pinned"&&N!=="gpu-buffer"&&N!=="ml-tensor")throw new Error(`Not supported preferred output location: ${N}.`);if(_&&N!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${N}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);b.push(N)}}let S=null;return b.some(k=>k==="gpu-buffer"||k==="ml-tensor"||k==="ml-tensor-cpu-output")&&(u=a._OrtCreateBinding(n),u===0&&he("Can't create IO binding."),S={handle:u,outputPreferredLocations:b,outputPreferredLocationsEncoded:b.map(k=>k==="ml-tensor-cpu-output"?"ml-tensor":k).map(k=>ya(k))}),ft.set(n,[n,d,c,S,_,!1]),[n,g,w,x,$]}catch(f){throw d.forEach(h=>a._OrtFree(h)),c.forEach(h=>a._OrtFree(h)),u!==0&&a._OrtReleaseBinding(u)!==0&&he("Can't release IO binding."),n!==0&&a._OrtReleaseSession(n)!==0&&he("Can't release session."),f}finally{a._free(r),s!==0&&a._OrtReleaseSessionOptions(s)!==0&&he("Can't release session options."),l.forEach(f=>a._free(f)),a.unmountExternalData?.()}},an=e=>{let t=ge(),r=ft.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,a,n,s,u]=r;s&&(u&&t._OrtClearBoundOutputs(s.handle)!==0&&he("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&he("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),a.forEach(l=>t._OrtFree(l)),n.forEach(l=>t._OrtFree(l)),t._OrtReleaseSession(i)!==0&&he("Can't release session."),ft.delete(e)},ha=async(e,t,r,i,a,n,s=!1)=>{if(!e){t.push(0);return}let u=ge(),l=u.PTR_SIZE,d=e[0],c=e[1],f=e[3],h=f,_,g;if(d==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${n} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let $=e[2].gpuBuffer;g=St(kt(d),c);{let b=u.jsepRegisterBuffer;if(!b)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');_=b(i,n,$,g)}}else if(f==="ml-tensor"){let $=e[2].mlTensor;g=St(kt(d),c);let b=u.webnnRegisterMLTensor;if(!b)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');_=b(i,$,kt(d),c)}else{let $=e[2];if(Array.isArray($)){g=l*$.length,_=u._malloc(g),r.push(_);for(let b=0;b<$.length;b++){if(typeof $[b]!="string")throw new TypeError(`tensor data at index ${b} is not a string`);u.setValue(_+b*l,Fe($[b],r),"*")}}else{let b=u.webnnIsGraphInput,S=u.webnnIsGraphOutput;if(d!=="string"&&b&&S){let k=u.UTF8ToString(a);if(b(i,k)||S(i,k)){let I=kt(d);g=St(I,c),h="ml-tensor";let E=u.webnnCreateTemporaryTensor,T=u.webnnUploadTensor;if(!E||!T)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let C=await E(i,I,c);T(C,new Uint8Array($.buffer,$.byteOffset,$.byteLength)),_=C}else g=$.byteLength,_=u._malloc(g),r.push(_),u.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,g),_)}else g=$.byteLength,_=u._malloc(g),r.push(_),u.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,g),_)}}let w=u.stackSave(),x=u.stackAlloc(4*c.length);try{c.forEach((b,S)=>u.setValue(x+S*l,b,l===4?"i32":"i64"));let $=u._OrtCreateTensor(kt(d),_,g,x,c.length,ya(h));$===0&&he(`Can't create tensor for input/output. session=${i}, index=${n}.`),t.push($)}finally{u.stackRestore(w)}},nn=async(e,t,r,i,a,n)=>{let s=ge(),u=s.PTR_SIZE,l=ft.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],c=l[1],f=l[2],h=l[3],_=l[4],g=l[5],w=t.length,x=i.length,$=0,b=[],S=[],k=[],I=[],E=s.stackSave(),T=s.stackAlloc(w*u),C=s.stackAlloc(w*u),N=s.stackAlloc(x*u),q=s.stackAlloc(x*u);try{[$,b]=zd(n);for(let U=0;U<w;U++)await ha(r[U],S,I,e,c[t[U]],t[U],_);for(let U=0;U<x;U++)await ha(a[U],k,I,e,f[i[U]],w+i[U],_);for(let U=0;U<w;U++)s.setValue(T+U*u,S[U],"*"),s.setValue(C+U*u,c[t[U]],"*");for(let U=0;U<x;U++)s.setValue(N+U*u,k[U],"*"),s.setValue(q+U*u,f[i[U]],"*");if(h&&!g){let{handle:U,outputPreferredLocations:ee,outputPreferredLocationsEncoded:X}=h;if(c.length!==w)throw new Error(`input count from feeds (${w}) is expected to be always equal to model's input count (${c.length}).`);for(let H=0;H<w;H++){let re=t[H];await s._OrtBindInput(U,c[re],S[H])!==0&&he(`Can't bind input[${H}] for session=${e}.`)}for(let H=0;H<x;H++){let re=i[H];a[H]?.[3]?s._OrtBindOutput(U,f[re],k[H],0)!==0&&he(`Can't bind pre-allocated output[${H}] for session=${e}.`):s._OrtBindOutput(U,f[re],0,X[re])!==0&&he(`Can't bind output[${H}] to ${ee[H]} for session=${e}.`)}ft.set(e,[d,c,f,h,_,!0])}s.jsepOnRunStart?.(d),s.webnnOnRunStart?.(d);let V;h?V=await s._OrtRunWithBinding(d,h.handle,x,N,$):V=await s._OrtRun(d,C,T,w,q,x,N,$),V!==0&&he("failed to call OrtRun().");let G=[],Y=[];for(let U=0;U<x;U++){let ee=Number(s.getValue(N+U*u,"*"));if(ee===k[U]){G.push(a[U]);continue}let X=s.stackSave(),H=s.stackAlloc(4*u),re=!1,F,ue=0;try{s._OrtGetTensorData(ee,H,H+u,H+2*u,H+3*u)!==0&&he(`Can't access output tensor data on index ${U}.`);let M=u===4?"i32":"i64",W=Number(s.getValue(H,M));ue=s.getValue(H+u,"*");let ie=s.getValue(H+u*2,"*"),A=Number(s.getValue(H+u*3,M)),ae=[];for(let xe=0;xe<A;xe++)ae.push(Number(s.getValue(ie+xe*u,M)));s._OrtFree(ie)!==0&&he("Can't free memory for tensor dims.");let Ee=ae.reduce((xe,ye)=>xe*ye,1);F=it(W);let De=h?.outputPreferredLocations[i[U]];if(F==="string"){if(De==="gpu-buffer"||De==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let xe=[];for(let ye=0;ye<Ee;ye++){let Ae=s.getValue(ue+ye*u,"*"),Oe=s.getValue(ue+(ye+1)*u,"*"),pr=ye===Ee-1?void 0:Oe-Ae;xe.push(s.UTF8ToString(Ae,pr))}G.push([F,ae,xe,"cpu"])}else if(De==="gpu-buffer"&&Ee>0){let xe=s.jsepGetBuffer;if(!xe)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ye=xe(ue),Ae=St(W,Ee);if(Ae===void 0||!Ua(F))throw new Error(`Unsupported data type: ${F}`);re=!0,G.push([F,ae,{gpuBuffer:ye,download:s.jsepCreateDownloader(ye,Ae,F),dispose:()=>{s._OrtReleaseTensor(ee)!==0&&he("Can't release tensor.")}},"gpu-buffer"])}else if(De==="ml-tensor"&&Ee>0){let xe=s.webnnEnsureTensor,ye=s.webnnIsGraphInputOutputTypeSupported;if(!xe||!ye)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(St(W,Ee)===void 0||!qa(F))throw new Error(`Unsupported data type: ${F}`);if(!ye(e,F,!1))throw new Error(`preferredLocation "ml-tensor" for ${F} output is not supported by current WebNN Context.`);let Ae=await xe(e,ue,W,ae,!1);re=!0,G.push([F,ae,{mlTensor:Ae,download:s.webnnCreateMLTensorDownloader(ue,F),dispose:()=>{s.webnnReleaseTensorId(ue),s._OrtReleaseTensor(ee)}},"ml-tensor"])}else if(De==="ml-tensor-cpu-output"&&Ee>0){let xe=s.webnnCreateMLTensorDownloader(ue,F)(),ye=G.length;re=!0,Y.push((async()=>{let Ae=[ye,await xe];return s.webnnReleaseTensorId(ue),s._OrtReleaseTensor(ee),Ae})()),G.push([F,ae,[],"cpu"])}else{let xe=jr(F),ye=new xe(Ee);new Uint8Array(ye.buffer,ye.byteOffset,ye.byteLength).set(s.HEAPU8.subarray(ue,ue+ye.byteLength)),G.push([F,ae,ye,"cpu"])}}finally{s.stackRestore(X),F==="string"&&ue&&s._free(ue),re||s._OrtReleaseTensor(ee)}}h&&!_&&(s._OrtClearBoundOutputs(h.handle)!==0&&he("Can't clear bound outputs."),ft.set(e,[d,c,f,h,_,!1]));for(let[U,ee]of await Promise.all(Y))G[U][2]=ee;return G}finally{s.webnnOnRunEnd?.(d),s.stackRestore(E),S.forEach(V=>s._OrtReleaseTensor(V)),k.forEach(V=>s._OrtReleaseTensor(V)),I.forEach(V=>s._free(V)),$!==0&&s._OrtReleaseRunOptions($),b.forEach(V=>s._free(V))}},sn=e=>{let t=ge(),r=ft.get(e);if(!r)throw new Error("invalid session id");let i=r[0],a=t._OrtEndProfiling(i);a===0&&he("Can't get an profile file name."),t._OrtFree(a)},on=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),ht,Ue,Rt,Jt,er,Rr,ma,Nr,$t,vt,rd,Cf,Of,Af,Bf,Rf,Nf,Mf,Df=P(()=>{"use strict";Ke(),zf(),zt(),Ma(),ht=()=>!!fe.wasm.proxy&&typeof document<"u",Rt=!1,Jt=!1,er=!1,Nr=new Map,$t=(e,t)=>{let r=Nr.get(e);r?r.push(t):Nr.set(e,[t])},vt=()=>{if(Rt||!Jt||er||!Ue)throw new Error("worker not ready")},rd=e=>{switch(e.data.type){case"init-wasm":Rt=!1,e.data.err?(er=!0,ma[1](e.data.err)):(Jt=!0,ma[0]()),Rr&&(URL.revokeObjectURL(Rr),Rr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Nr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},Cf=async()=>{if(!Jt){if(Rt)throw new Error("multiple calls to 'initWasm()' detected.");if(er)throw new Error("previous call to 'initWasm()' failed.");if(Rt=!0,ht())return new Promise((e,t)=>{Ue?.terminate(),Id().then(([r,i])=>{try{Ue=i,Ue.onerror=n=>t(n),Ue.onmessage=rd,ma=[e,t];let a={type:"init-wasm",in:fe};!a.in.wasm.wasmPaths&&(r||_a)&&(a.in.wasm.wasmPaths={wasm:new URL("ort-wasm-simd-threaded.jsep.wasm",import.meta.url).href}),Ue.postMessage(a),Rr=r}catch(a){t(a)}},t)});try{await Da(fe.wasm),await en(fe),Jt=!0}catch(e){throw er=!0,e}finally{Rt=!1}}},Of=async e=>{if(ht())return vt(),new Promise((t,r)=>{$t("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:fe}};Ue.postMessage(i)});await tn(fe,e)},Af=async e=>ht()?(vt(),new Promise((t,r)=>{$t("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};Ue.postMessage(i,[e.buffer])})):Hr(e),Bf=async(e,t)=>{if(ht()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return vt(),new Promise((r,i)=>{$t("create",[r,i]);let a={type:"create",in:{model:e,options:{...t}}},n=[];e instanceof Uint8Array&&n.push(e.buffer),Ue.postMessage(a,n)})}else return rn(e,t)},Rf=async e=>{if(ht())return vt(),new Promise((t,r)=>{$t("release",[t,r]);let i={type:"release",in:e};Ue.postMessage(i)});an(e)},Nf=async(e,t,r,i,a,n)=>{if(ht()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return vt(),new Promise((s,u)=>{$t("run",[s,u]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:i,options:n}};Ue.postMessage(d,on(l))})}else return nn(e,t,r,i,a,n)},Mf=async e=>{if(ht())return vt(),new Promise((t,r)=>{$t("end-profiling",[t,r]);let i={type:"end-profiling",in:e};Ue.postMessage(i)});sn(e)}}),ga,id,Pf,Pg=P(()=>{"use strict";Ke(),Df(),te(),Na(),Od(),ga=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},id=e=>{switch(e[3]){case"cpu":return new Ne(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Ua(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:a}=e[2];return Ne.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:a})}case"ml-tensor":{let t=e[0];if(!qa(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:a}=e[2];return Ne.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},Pf=class{async fetchModelAndCopyToWasmMemory(e){return Af(await Wa(e))}async loadModel(e,t){Je();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Bf(r,t),je()}async dispose(){return Rf(this.sessionId)}async run(e,t,r){Je();let i=[],a=[];Object.entries(e).forEach(f=>{let h=f[0],_=f[1],g=this.inputNames.indexOf(h);if(g===-1)throw new Error(`invalid input '${h}'`);i.push(_),a.push(g)});let n=[],s=[];Object.entries(t).forEach(f=>{let h=f[0],_=f[1],g=this.outputNames.indexOf(h);if(g===-1)throw new Error(`invalid output '${h}'`);n.push(_),s.push(g)});let u=i.map((f,h)=>ga(f,()=>`input "${this.inputNames[a[h]]}"`)),l=n.map((f,h)=>f?ga(f,()=>`output "${this.outputNames[s[h]]}"`):null),d=await Nf(this.sessionId,a,u,s,l,r),c={};for(let f=0;f<d.length;f++)c[this.outputNames[s[f]]]=n[f]??id(d[f]);return je(),c}startProfiling(){}endProfiling(){Mf(this.sessionId)}}}),Uf={};Ut(Uf,{OnnxruntimeWebAssemblyBackend:()=>Aa,initializeFlags:()=>Oa,wasmBackend:()=>qf});var Oa,Aa,qf,Ug=P(()=>{"use strict";Ke(),Df(),Pg(),Oa=()=>{(typeof fe.wasm.initTimeout!="number"||fe.wasm.initTimeout<0)&&(fe.wasm.initTimeout=0);let e=fe.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),fe.wasm.simd=!1),typeof fe.wasm.proxy!="boolean"&&(fe.wasm.proxy=!1),typeof fe.wasm.trace!="boolean"&&(fe.wasm.trace=!1),typeof fe.wasm.numThreads!="number"||!Number.isInteger(fe.wasm.numThreads)||fe.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)fe.wasm.numThreads=1;else{let t=typeof navigator>"u"?km("node:os").cpus().length:navigator.hardwareConcurrency;fe.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Aa=class{async init(e){Oa(),await Cf(),await Of(e)}async createInferenceSessionHandler(e,t){let r=new Pf;return await r.loadModel(e,t),r}},qf=new Aa});Ke();Ke();Ke();var qg="1.22.0";{let e=(Ug(),sr(Uf)).wasmBackend;Nt("webgpu",e,5),Nt("webnn",e,5),Nt("cpu",e,10),Nt("wasm",e,10)}Object.defineProperty(fe.versions,"web",{value:qg,enumerable:!0});var Wf=1/Math.sqrt(4096),Lf=new Uint16Array(4096);for(let e=0;e<4096;e++){let t=0;for(let r=0,i=e;r<12;r++,i>>=1)t=t<<1|i&1;Lf[e]=t}var Vf=new Float64Array(4096/2),Gf=new Float64Array(4096/2);for(let e=0;e<4096/2;e++)Vf[e]=Math.cos(2*Math.PI*e/4096),Gf[e]=Math.sin(2*Math.PI*e/4096);var ur=new Float64Array(4096);for(let e=0;e<4096;e++)ur[e]=.5*(1-Math.cos(2*Math.PI*e/4096));function Hf(e,t,r){for(let i=0;i<4096;i++){let a=Lf[i];if(i<a){let n=e[i];e[i]=e[a],e[a]=n,n=t[i],t[i]=t[a],t[a]=n}}for(let i=2;i<=4096;i<<=1){let a=i>>1,n=4096/i;for(let s=0,u=0;u<a;u++,s+=n){let l=Vf[s],d=r*Gf[s];for(let c=u;c<4096;c+=i){let f=c+a,h=e[f],_=t[f],g=l*h-d*_,w=l*_+d*h;e[f]=e[c]-g,t[f]=t[c]-w,e[c]+=g,t[c]+=w}}}}var Lg=(e,t)=>e<0?-e:e>=t?2*(t-1)-e:e;function Ff(e,t,r){let i=Math.ceil(r/1024),a=new Float32Array(t*2*2048*i),n=new Float64Array(4096),s=new Float64Array(4096),u=(l,d,c,f,h)=>{a[(2*l*2048+c)*i+d]=f,a[((2*l+1)*2048+c)*i+d]=h};for(let l=0;l<t;l+=2){let d=l+1<t?l+1:-1,c=l*r,f=d*r;for(let h=0;h<i;h++){let _=h*1024-1536;for(let g=0;g<4096;g++){let w=Lg(_+g,r),x=ur[g]*Wf;n[g]=e[c+w]*x,s[g]=d>=0?e[f+w]*x:0}Hf(n,s,-1);for(let g=0;g<2048;g++){let w=4096-g&4095,x=n[g],$=s[g],b=n[w],S=s[w];u(l,h,g,(x+b)/2,($-S)/2),d>=0&&u(d,h,g,($+S)/2,(b-x)/2)}}}return a}function jf(e,t,r,i){let a=new Float32Array(t*i),n=new Float64Array(4096),s=new Float64Array(4096),u=3584,l=new Float64Array(i),d=r+4;for(let h=0;h<d;h++){let _=h*1024-u;for(let g=Math.max(0,-_);g<4096&&_+g<i;g++)l[_+g]+=ur[g]*ur[g]}let c=Wf,f=2048*r;for(let h=0;h<t;h+=2){let _=h+1<t?h+1:-1,g=2*h*f,w=g+f,x=2*_*f,$=x+f;for(let b=0;b<r;b++){n[0]=e[g+b],s[0]=_>=0?e[x+b]:0,n[2048]=0,s[2048]=0;for(let E=1;E<2048;E++){let T=E*r+b,C=e[g+T],N=e[w+T],q=_>=0?e[x+T]:0,V=_>=0?e[$+T]:0;n[E]=C-V,s[E]=N+q,n[4096-E]=C+V,s[4096-E]=q-N}Hf(n,s,1);let S=(b+2)*1024-u,k=h*i,I=_*i;for(let E=Math.max(0,-S);E<4096&&S+E<i;E++){let T=ur[E]*c;a[k+S+E]+=n[E]*T,_>=0&&(a[I+S+E]+=s[E]*T)}}}for(let h=0;h<t;h++){let _=h*i;for(let g=0;g<i;g++)l[g]>1e-11&&(a[_+g]/=l[g])}return a}var Vg=44100,$e=Math.floor(7.8*Vg),Gg=["drums","bass","other","vocals"],Kf=2,un=Gg.length*Kf,Hg=Math.ceil($e/1024);function Zf(e){return Ff(e,Kf,$e)}function Qf(e,t,r){let i=jf(e,un,Hg,$e),a=Math.floor(($e-r)/2),n=new Float32Array(un*r);for(let s=0;s<un;s++){let u=s*$e+a,l=s*r;for(let d=0;d<r;d++)n[l+d]=i[u+d]+t[u+d]}return n}var Fg="vocal-remover-v1",ln={wasm:["ort/ort-wasm.0.wasm","ort/ort-wasm.1.wasm"],graph:["model/htdemucs.graph.wasm"],weights:["model/w16.00.wasm","model/w16.01.wasm","model/w16.02.wasm","model/w16.03.wasm","model/w16.04.wasm","model/w16.05.wasm"]},Yf="",lr=null,dr="",Kr="",nt=(e,t)=>self.postMessage(e,t||[]);async function jg(e){let t=null;try{t=await caches.open(Fg)}catch{}if(t)try{let a=await t.match(e);if(a)return new Uint8Array(await a.arrayBuffer())}catch{}let r=await fetch(e);if(!r.ok)throw new Error(`Kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c ${e} (HTTP ${r.status})`);let i=new Uint8Array(await r.arrayBuffer());if(t)try{await t.put(e,new Response(i.slice()))}catch{}return i}async function dn(e,t){let r=[];for(let s of e){let u=await jg(new URL(s,Yf).href);r.push(u),t(u.byteLength)}let i=r.reduce((s,u)=>s+u.byteLength,0),a=new Uint8Array(i),n=0;for(let s of r)a.set(s,n),n+=s.byteLength;return a}function Kg(e){let t=new Float32Array(65536);for(let a=0;a<65536;a++){let n=a&32768?-1:1,s=a>>10&31,u=a&1023;t[a]=s===0?n*u*2**-24:s===31?u?NaN:n*(1/0):n*(1+u/1024)*2**(s-15)}let r=new Uint16Array(e.buffer,e.byteOffset,e.byteLength/2),i=new Float32Array(r.length);for(let a=0;a<r.length;a++)i[a]=t[r[a]];return new Uint8Array(i.buffer)}async function Zg(e){try{let t=await navigator.gpu?.requestAdapter({powerPreference:"high-performance"});if(!t||!e&&(t.isFallbackAdapter||t.info?.isFallbackAdapter))return null;let r=t.info||{},i=`${r.vendor||""} ${r.architecture||""} ${r.description||""}`;return!e&&/swiftshader|llvmpipe|software/i.test(i)?null:(Kr=(r.description||`${r.vendor||""} ${r.architecture||""}`).trim(),t)}catch{return null}}var Qg=112197179;async function Xg(e,t){let r=0,i=d=>{r+=d,nt({type:"load",done:r,total:Qg})};fe.wasm.wasmBinary=(await dn(ln.wasm,i)).buffer,fe.wasm.numThreads=self.crossOriginIsolated?Math.min(4,navigator.hardwareConcurrency||1):1,fe.wasm.proxy=!1;let a=await dn(ln.graph,i),n=Kg(await dn(ln.weights,i));nt({type:"status",text:"\u0110ang kh\u1EDFi t\u1EA1o m\xF4 h\xECnh\u2026"});let s=[],u=e?await Zg(t):null;u&&(fe.webgpu.adapter=u,fe.webgpu.powerPreference="high-performance",s.push("webgpu")),s.push("wasm");let l;for(let d of s)try{lr=await Fr.create(a,{executionProviders:[d],externalData:[{path:"weights.bin",data:n}],graphOptimizationLevel:"all"}),dr=d;break}catch(c){l=c}if(!lr)throw l;nt({type:"ready",backend:dr,gpu:dr==="webgpu"?Kr:""})}var pn=class e{static async create(){let t=Math.max(1,Math.min(3,(navigator.hardwareConcurrency||2)-1)),r=[];try{for(let a=0;a<t;a++)r.push(new Worker(new URL("./dsp-worker.js",import.meta.url),{type:"module"}));let i=new e(r);return await Promise.race([Promise.all(r.map((a,n)=>i.run({kind:"ping"},[],n))),new Promise((a,n)=>setTimeout(()=>n(new Error("timeout")),1e4))]),i}catch(i){return console.warn("DSP workers unavailable, running inline:",i),r.forEach(a=>a.terminate()),new e([])}}constructor(t){this.workers=t,this.busy=t.map(()=>0),this.pending=new Map,this.nextId=1,t.forEach(r=>{r.onmessage=({data:i})=>{let a=this.pending.get(i.id);a&&(this.pending.delete(i.id),this.busy[a.w]--,i.error?a.reject(new Error(i.error)):a.resolve(i.out))},r.onerror=i=>{i.preventDefault?.();let a=new Error(i.message||"L\u1ED7i b\u1ED9 x\u1EED l\xFD t\xEDn hi\u1EC7u");for(let n of this.pending.values())n.reject(a);this.pending.clear()}})}get size(){return this.workers.length||1}run(t,r,i){if(!this.workers.length)return new Promise(s=>setTimeout(s,0)).then(()=>t.kind==="prep"?Zf(t.inp):Qf(t.outX,t.outXt,t.len));let a=i??this.busy.indexOf(Math.min(...this.busy)),n=this.nextId++;return this.busy[a]++,new Promise((s,u)=>{this.pending.set(n,{resolve:s,reject:u,w:a}),this.workers[a].postMessage({...t,id:n},r)})}close(){this.workers.forEach(t=>t.terminate())}},Xf=e=>e.byteOffset===0&&e.buffer.byteLength===e.byteLength?e:e.slice();async function Yg(e,t){let[r,i]=lr.inputNames,a=await lr.run({[r]:new Ne("float32",e,[1,2,$e]),[i]:new Ne("float32",t,[1,4,2048,t.length/(4*2048)])}),[n,s]=lr.outputNames;return{outX:Xf(a[n].data),outXt:Xf(a[s].data)}}async function Jg(e,t){let r=performance.now(),i=e[0].length,a=Math.floor((1-t)*$e),n=[];for(let T=0;T<i;T+=a)n.push(T);let s=n.length;nt({type:"progress",step:0,total:s,elapsed:0});let u=new Float32Array($e);for(let T=0;T<$e;T++)u[T]=T<=$e/2?T+1:$e-T;let l=Math.max(...u.subarray(Math.floor($e/2)-1,Math.floor($e/2)+2));for(let T=0;T<$e;T++)u[T]/=l;let d=[new Float32Array(i),new Float32Array(i)],c=[new Float32Array(i),new Float32Array(i)],f=new Float32Array(i),h=await pn.create(),_=new Map,g=new Map,w=new Set,x=0,$=0,b=T=>{let C=n[T],N=Math.min($e,i-C),q=C-Math.floor(($e-N)/2),V=new Float32Array(2*$e),G=Math.max(0,q),Y=Math.min(i,q+$e);for(let U=0;U<2;U++)V.set(e[U].subarray(G,Y),U*$e+G-q);return V},S=T=>{if(T>=s||_.has(T))return;let C=b(T);_.set(T,C);let N=C.slice();g.set(T,h.run({kind:"prep",inp:N},[N.buffer]))},k=(T,C)=>{let N=n[T],q=Math.min($e,i-N);for(let V=0;V<2;V++){let G=d[V],Y=c[V],U=(3*2+V)*q,ee=V*q,X=(2+V)*q,H=(4+V)*q;for(let re=0;re<q;re++){let F=u[re];G[N+re]+=F*C[U+re],Y[N+re]+=F*(C[ee+re]+C[X+re]+C[H+re])}}for(let V=0;V<q;V++)f[N+V]+=u[V];$++,nt({type:"progress",step:$,total:s,elapsed:performance.now()-r})},I=h.size+1;try{for(let T=0;T<s;T++){for(let ee=T;ee<=T+I;ee++)S(ee);let C=await g.get(T),N=_.get(T);g.delete(T),_.delete(T);let q=performance.now(),{outX:V,outXt:G}=await Yg(N,C);for(x+=performance.now()-q;w.size>h.size;)await Promise.race(w);let Y=Math.min($e,i-n[T]),U=h.run({kind:"post",outX:V,outXt:G,len:Y},[V.buffer,G.buffer]).then(ee=>k(T,ee));w.add(U),U.then(()=>w.delete(U),()=>w.delete(U))}await Promise.all(w)}finally{h.close()}for(let T=0;T<2;T++)for(let C=0;C<i;C++)d[T][C]/=f[C],c[T][C]/=f[C];let E=(performance.now()-r)/1e3;console.log(`[vocal-remover] ${s} \u0111o\u1EA1n, t\u1ED5ng ${E.toFixed(1)} s, m\xF4 h\xECnh ${(x/1e3).toFixed(1)} s (${(x/s).toFixed(0)} ms/\u0111o\u1EA1n), ${dr} ${Kr}, ${h.workers.length} DSP worker`),nt({type:"done",vocals:d,inst:c,seconds:E,modelSeconds:x/1e3,chunks:s,backend:dr,gpu:Kr},[...d.map(T=>T.buffer),...c.map(T=>T.buffer)])}self.addEventListener("unhandledrejection",e=>nt({type:"error",message:String(e.reason?.message||e.reason)}));self.addEventListener("error",e=>nt({type:"error",message:String(e.message)}));self.onmessage=async({data:e})=>{try{e.type==="init"?(Yf=e.base,await Xg(e.preferGpu!==!1,!!e.allowSoftwareGpu)):e.type==="run"&&await Jg(e.channelData,e.overlap??.25)}catch(t){nt({type:"error",message:String(t?.message||t)})}};
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
