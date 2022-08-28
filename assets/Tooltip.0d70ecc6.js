var zl=Object.defineProperty,Gl=Object.defineProperties;var Wl=Object.getOwnPropertyDescriptors;var lo=Object.getOwnPropertySymbols;var Ql=Object.prototype.hasOwnProperty,Xl=Object.prototype.propertyIsEnumerable;var ho=(e,t,n)=>t in e?zl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,fo=(e,t)=>{for(var n in t||(t={}))Ql.call(t,n)&&ho(e,n,t[n]);if(lo)for(var n of lo(t))Xl.call(t,n)&&ho(e,n,t[n]);return e},po=(e,t)=>Gl(e,Wl(t));import{r as Yl,C as Jl,d as ke,a as Zl,j as _n,e as th}from"./index.e753a64b.js";const vv=()=>{const e=Yl.exports.useContext(Jl);if(!e)throw new Error("useColumnsContext must be used within a ColumnsContextProvider");return e};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},eh=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},nh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,u=s+2<e.length,c=u?e[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;u||(p=64,o||(f=64)),r.push(n[l],n[h],n[f],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(za(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):eh(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const c=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw Error();const f=i<<2|a>>4;if(r.push(f),c!==64){const p=a<<4&240|c>>2;if(r.push(p),h!==64){const m=c<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},rh=function(e){const t=za(e);return nh.encodeByteArray(t,!0)},Ga=function(e){return rh(e).replace(/\./g,"")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ih(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(hr())}function oh(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function ah(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uh(){return hr().indexOf("Electron/")>=0}function ch(){const e=hr();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function lh(){return hr().indexOf("MSAppHost/")>=0}function hh(){return typeof indexedDB=="object"}function fh(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh="FirebaseError";class fr extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=dh,Object.setPrototypeOf(this,fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wa.prototype.create)}}class Wa{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?ph(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new fr(s,a,r)}}function ph(e,t){return e.replace(gh,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const gh=/\{\$([^}]+)}/g;function ms(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(go(i)&&go(o)){if(!ms(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function go(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(e){return e&&e._delegate?e._delegate:e}class $e{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new sh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(vh(t))try{this.getOrInitializeService({instanceIdentifier:Ht})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Ht){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ht){return this.instances.has(t)}getOptions(t=Ht){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yh(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ht){return this.component?this.component.multipleInstances?t:Ht:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yh(e){return e===Ht?void 0:e}function vh(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new mh(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var k;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(k||(k={}));const Eh={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},bh=k.INFO,Th={[k.DEBUG]:"log",[k.VERBOSE]:"log",[k.INFO]:"info",[k.WARN]:"warn",[k.ERROR]:"error"},Sh=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Th[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Qa{constructor(t){this.name=t,this._logLevel=bh,this._logHandler=Sh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in k))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Eh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,k.DEBUG,...t),this._logHandler(this,k.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,k.VERBOSE,...t),this._logHandler(this,k.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,k.INFO,...t),this._logHandler(this,k.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,k.WARN,...t),this._logHandler(this,k.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,k.ERROR,...t),this._logHandler(this,k.ERROR,...t)}}const Ih=(e,t)=>t.some(n=>e instanceof n);let mo,yo;function Ch(){return mo||(mo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ah(){return yo||(yo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xa=new WeakMap,ys=new WeakMap,Ya=new WeakMap,Wr=new WeakMap,Zs=new WeakMap;function _h(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Nt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Xa.set(n,e)}).catch(()=>{}),Zs.set(t,e),t}function Dh(e){if(ys.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});ys.set(e,t)}let vs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ys.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ya.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Oh(e){vs=e(vs)}function Nh(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Qr(this),t,...n);return Ya.set(r,t.sort?t.sort():[t]),Nt(r)}:Ah().includes(e)?function(...t){return e.apply(Qr(this),t),Nt(Xa.get(this))}:function(...t){return Nt(e.apply(Qr(this),t))}}function kh(e){return typeof e=="function"?Nh(e):(e instanceof IDBTransaction&&Dh(e),Ih(e,Ch())?new Proxy(e,vs):e)}function Nt(e){if(e instanceof IDBRequest)return _h(e);if(Wr.has(e))return Wr.get(e);const t=kh(e);return t!==e&&(Wr.set(e,t),Zs.set(t,e)),t}const Qr=e=>Zs.get(e);function xh(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Nt(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Nt(o.result),u.oldVersion,u.newVersion,Nt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Lh=["get","getKey","getAll","getAllKeys","count"],Rh=["put","add","delete","clear"],Xr=new Map;function vo(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Xr.get(t))return Xr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Rh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Lh.includes(n)))return;const i=async function(o,...a){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&u.done]))[0]};return Xr.set(t,i),i}Oh(e=>po(fo({},e),{get:(t,n,r)=>vo(t,n)||e.get(t,n,r),has:(t,n)=>!!vo(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ph(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ph(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ws="@firebase/app",wo="0.7.26";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new Qa("@firebase/app"),Fh="@firebase/app-compat",Vh="@firebase/analytics-compat",Bh="@firebase/analytics",Uh="@firebase/app-check-compat",jh="@firebase/app-check",$h="@firebase/auth",qh="@firebase/auth-compat",Hh="@firebase/database",Kh="@firebase/database-compat",zh="@firebase/functions",Gh="@firebase/functions-compat",Wh="@firebase/installations",Qh="@firebase/installations-compat",Xh="@firebase/messaging",Yh="@firebase/messaging-compat",Jh="@firebase/performance",Zh="@firebase/performance-compat",tf="@firebase/remote-config",ef="@firebase/remote-config-compat",nf="@firebase/storage",rf="@firebase/storage-compat",sf="@firebase/firestore",of="@firebase/firestore-compat",af="firebase",uf="9.8.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja="[DEFAULT]",cf={[ws]:"fire-core",[Fh]:"fire-core-compat",[Bh]:"fire-analytics",[Vh]:"fire-analytics-compat",[jh]:"fire-app-check",[Uh]:"fire-app-check-compat",[$h]:"fire-auth",[qh]:"fire-auth-compat",[Hh]:"fire-rtdb",[Kh]:"fire-rtdb-compat",[zh]:"fire-fn",[Gh]:"fire-fn-compat",[Wh]:"fire-iid",[Qh]:"fire-iid-compat",[Xh]:"fire-fcm",[Yh]:"fire-fcm-compat",[Jh]:"fire-perf",[Zh]:"fire-perf-compat",[tf]:"fire-rc",[ef]:"fire-rc-compat",[nf]:"fire-gcs",[rf]:"fire-gcs-compat",[sf]:"fire-fst",[of]:"fire-fst-compat","fire-js":"fire-js",[af]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new Map,Es=new Map;function lf(e,t){try{e.container.addComponent(t)}catch(n){ti.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function qn(e){const t=e.name;if(Es.has(t))return ti.debug(`There were multiple attempts to register component ${t}.`),!1;Es.set(t,e);for(const n of $n.values())lf(n,e);return!0}function hf(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Qt=new Wa("app","Firebase",ff);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $e("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Qt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf=uf;function gf(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:Ja,automaticDataCollectionEnabled:!1},t),r=n.name;if(typeof r!="string"||!r)throw Qt.create("bad-app-name",{appName:String(r)});const s=$n.get(r);if(s){if(ms(e,s.options)&&ms(n,s.config))return s;throw Qt.create("duplicate-app",{appName:r})}const i=new wh(r);for(const a of Es.values())i.addComponent(a);const o=new df(e,n,i);return $n.set(r,o),o}function mf(e=Ja){const t=$n.get(e);if(!t)throw Qt.create("no-app",{appName:e});return t}function ue(e,t,n){var r;let s=(r=cf[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ti.warn(a.join(" "));return}qn(new $e(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf="firebase-heartbeat-database",vf=1,qe="firebase-heartbeat-store";let Yr=null;function Za(){return Yr||(Yr=xh(yf,vf,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(qe)}}}).catch(e=>{throw Qt.create("storage-open",{originalErrorMessage:e.message})})),Yr}async function wf(e){var t;try{return(await Za()).transaction(qe).objectStore(qe).get(tu(e))}catch(n){throw Qt.create("storage-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message})}}async function Eo(e,t){var n;try{const s=(await Za()).transaction(qe,"readwrite");return await s.objectStore(qe).put(t,tu(e)),s.done}catch(r){throw Qt.create("storage-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message})}}function tu(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef=1024,bf=30*24*60*60*1e3;class Tf{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new If(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=bo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=bf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=bo(),{heartbeatsToSend:n,unsentEntries:r}=Sf(this._heartbeatsCache.heartbeats),s=Ga(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function bo(){return new Date().toISOString().substring(0,10)}function Sf(e,t=Ef){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),To(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),To(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class If{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hh()?fh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await wf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Eo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Eo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function To(e){return Ga(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(e){qn(new $e("platform-logger",t=>new Mh(t),"PRIVATE")),qn(new $e("heartbeat",t=>new Tf(t),"PRIVATE")),ue(ws,wo,e),ue(ws,wo,"esm2017"),ue("fire-js","")}Cf("");var Af=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},y,ei=ei||{},S=Af||self;function Hn(){}function bs(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function sn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function _f(e){return Object.prototype.hasOwnProperty.call(e,Jr)&&e[Jr]||(e[Jr]=++Df)}var Jr="closure_uid_"+(1e9*Math.random()>>>0),Df=0;function Of(e,t,n){return e.call.apply(e.bind,arguments)}function Nf(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function X(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?X=Of:X=Nf,X.apply(null,arguments)}function Dn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function Z(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function Ft(){this.s=this.s,this.o=this.o}var kf=0;Ft.prototype.s=!1;Ft.prototype.na=function(){!this.s&&(this.s=!0,this.M(),kf!=0)&&_f(this)};Ft.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const eu=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},nu=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,s=typeof e=="string"?e.split(""):e;for(let i=0;i<r;i++)i in s&&t.call(n,s[i],i,e)};function xf(e){t:{var t=Sd;const n=e.length,r=typeof e=="string"?e.split(""):e;for(let s=0;s<n;s++)if(s in r&&t.call(void 0,r[s],s,e)){t=s;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function So(e){return Array.prototype.concat.apply([],arguments)}function ni(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Kn(e){return/^[\s\xa0]*$/.test(e)}var Io=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function rt(e,t){return e.indexOf(t)!=-1}function Zr(e,t){return e<t?-1:e>t?1:0}var st;t:{var Co=S.navigator;if(Co){var Ao=Co.userAgent;if(Ao){st=Ao;break t}}st=""}function ri(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function ru(e){const t={};for(const n in e)t[n]=e[n];return t}var _o="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function su(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<_o.length;i++)n=_o[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function si(e){return si[" "](e),e}si[" "]=Hn;function Lf(e){var t=Pf;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Rf=rt(st,"Opera"),fe=rt(st,"Trident")||rt(st,"MSIE"),iu=rt(st,"Edge"),Ts=iu||fe,ou=rt(st,"Gecko")&&!(rt(st.toLowerCase(),"webkit")&&!rt(st,"Edge"))&&!(rt(st,"Trident")||rt(st,"MSIE"))&&!rt(st,"Edge"),Mf=rt(st.toLowerCase(),"webkit")&&!rt(st,"Edge");function au(){var e=S.document;return e?e.documentMode:void 0}var zn;t:{var ts="",es=function(){var e=st;if(ou)return/rv:([^\);]+)(\)|;)/.exec(e);if(iu)return/Edge\/([\d\.]+)/.exec(e);if(fe)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Mf)return/WebKit\/(\S+)/.exec(e);if(Rf)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(es&&(ts=es?es[1]:""),fe){var ns=au();if(ns!=null&&ns>parseFloat(ts)){zn=String(ns);break t}}zn=ts}var Pf={};function Ff(){return Lf(function(){let e=0;const t=Io(String(zn)).split("."),n=Io("9").split("."),r=Math.max(t.length,n.length);for(let o=0;e==0&&o<r;o++){var s=t[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;e=Zr(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Zr(s[2].length==0,i[2].length==0)||Zr(s[2],i[2]),s=s[3],i=i[3]}while(e==0)}return 0<=e})}var Ss;if(S.document&&fe){var Do=au();Ss=Do||parseInt(zn,10)||void 0}else Ss=void 0;var Vf=Ss,Bf=function(){if(!S.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{S.addEventListener("test",Hn,t),S.removeEventListener("test",Hn,t)}catch{}return e}();function et(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};function He(e,t){if(et.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(ou){t:{try{si(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Uf[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&He.Z.h.call(this)}}Z(He,et);var Uf={2:"touch",3:"pen",4:"mouse"};He.prototype.h=function(){He.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var on="closure_listenable_"+(1e6*Math.random()|0),jf=0;function $f(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=s,this.key=++jf,this.ca=this.fa=!1}function dr(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function pr(e){this.src=e,this.g={},this.h=0}pr.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Cs(e,t,r,s);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new $f(t,this.src,i,!!r,s),t.fa=n,e.push(t)),t};function Is(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=eu(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(dr(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Cs(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.ca&&i.listener==t&&i.capture==!!n&&i.ia==r)return s}return-1}var ii="closure_lm_"+(1e6*Math.random()|0),rs={};function uu(e,t,n,r,s){if(r&&r.once)return lu(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)uu(e,t[i],n,r,s);return null}return n=ui(n),e&&e[on]?e.N(t,n,sn(r)?!!r.capture:!!r,s):cu(e,t,n,!1,r,s)}function cu(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=sn(s)?!!s.capture:!!s,a=ai(e);if(a||(e[ii]=a=new pr(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=qf(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Bf||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(fu(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function qf(){function e(n){return t.call(e.src,e.listener,n)}var t=Hf;return e}function lu(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)lu(e,t[i],n,r,s);return null}return n=ui(n),e&&e[on]?e.O(t,n,sn(r)?!!r.capture:!!r,s):cu(e,t,n,!0,r,s)}function hu(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)hu(e,t[i],n,r,s);else r=sn(r)?!!r.capture:!!r,n=ui(n),e&&e[on]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Cs(i,n,r,s),-1<n&&(dr(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=ai(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Cs(t,n,r,s)),(n=-1<e?t[e]:null)&&oi(n))}function oi(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[on])Is(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(fu(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ai(t))?(Is(n,e),n.h==0&&(n.src=null,t[ii]=null)):dr(e)}}}function fu(e){return e in rs?rs[e]:rs[e]="on"+e}function Hf(e,t){if(e.ca)e=!0;else{t=new He(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&oi(e),e=n.call(r,t)}return e}function ai(e){return e=e[ii],e instanceof pr?e:null}var ss="__closure_events_fn_"+(1e9*Math.random()>>>0);function ui(e){return typeof e=="function"?e:(e[ss]||(e[ss]=function(t){return e.handleEvent(t)}),e[ss])}function G(){Ft.call(this),this.i=new pr(this),this.P=this,this.I=null}Z(G,Ft);G.prototype[on]=!0;G.prototype.removeEventListener=function(e,t,n,r){hu(this,e,t,n,r)};function Y(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,typeof t=="string")t=new et(t,e);else if(t instanceof et)t.target=t.target||e;else{var s=t;t=new et(r,e),su(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=On(o,r,!0,t)&&s}if(o=t.g=e,s=On(o,r,!0,t)&&s,s=On(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=On(o,r,!1,t)&&s}G.prototype.M=function(){if(G.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)dr(n[r]);delete e.g[t],e.h--}}this.I=null};G.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};G.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function On(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&Is(e.i,o),s=a.call(u,r)!==!1&&s}}return s&&!r.defaultPrevented}var ci=S.JSON.stringify;function Kf(){var e=pu;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class zf{constructor(){this.h=this.g=null}add(t,n){const r=du.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var du=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Gf,e=>e.reset());class Gf{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Wf(e){S.setTimeout(()=>{throw e},0)}function li(e,t){As||Qf(),_s||(As(),_s=!0),pu.add(e,t)}var As;function Qf(){var e=S.Promise.resolve(void 0);As=function(){e.then(Xf)}}var _s=!1,pu=new zf;function Xf(){for(var e;e=Kf();){try{e.h.call(e.g)}catch(n){Wf(n)}var t=du;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}_s=!1}function gr(e,t){G.call(this),this.h=e||1,this.g=t||S,this.j=X(this.kb,this),this.l=Date.now()}Z(gr,G);y=gr.prototype;y.da=!1;y.S=null;y.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Y(this,"tick"),this.da&&(hi(this),this.start()))}};y.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function hi(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}y.M=function(){gr.Z.M.call(this),hi(this),delete this.g};function fi(e,t,n){if(typeof e=="function")n&&(e=X(e,n));else if(e&&typeof e.handleEvent=="function")e=X(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:S.setTimeout(e,t||0)}function gu(e){e.g=fi(()=>{e.g=null,e.i&&(e.i=!1,gu(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Yf extends Ft{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:gu(this)}M(){super.M(),this.g&&(S.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ke(e){Ft.call(this),this.h=e,this.g={}}Z(Ke,Ft);var Oo=[];function mu(e,t,n,r){Array.isArray(n)||(n&&(Oo[0]=n.toString()),n=Oo);for(var s=0;s<n.length;s++){var i=uu(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function yu(e){ri(e.g,function(t,n){this.g.hasOwnProperty(n)&&oi(t)},e),e.g={}}Ke.prototype.M=function(){Ke.Z.M.call(this),yu(this)};Ke.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function mr(){this.g=!0}mr.prototype.Aa=function(){this.g=!1};function Jf(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+c+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function Zf(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function oe(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+ed(e,n)+(r?" "+r:"")})}function td(e,t){e.info(function(){return"TIMEOUT: "+t})}mr.prototype.info=function(){};function ed(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return ci(n)}catch{return t}}var ee={},No=null;function yr(){return No=No||new G}ee.Ma="serverreachability";function vu(e){et.call(this,ee.Ma,e)}Z(vu,et);function ze(e){const t=yr();Y(t,new vu(t))}ee.STAT_EVENT="statevent";function wu(e,t){et.call(this,ee.STAT_EVENT,e),this.stat=t}Z(wu,et);function it(e){const t=yr();Y(t,new wu(t,e))}ee.Na="timingevent";function Eu(e,t){et.call(this,ee.Na,e),this.size=t}Z(Eu,et);function an(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return S.setTimeout(function(){e()},t)}var vr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},bu={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function di(){}di.prototype.h=null;function ko(e){return e.h||(e.h=e.i())}function Tu(){}var un={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function pi(){et.call(this,"d")}Z(pi,et);function gi(){et.call(this,"c")}Z(gi,et);var Ds;function wr(){}Z(wr,di);wr.prototype.g=function(){return new XMLHttpRequest};wr.prototype.i=function(){return{}};Ds=new wr;function cn(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new Ke(this),this.P=nd,e=Ts?125:void 0,this.W=new gr(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Su}function Su(){this.i=null,this.g="",this.h=!1}var nd=45e3,Os={},Gn={};y=cn.prototype;y.setTimeout=function(e){this.P=e};function Ns(e,t,n){e.K=1,e.v=br(At(t)),e.s=n,e.U=!0,Iu(e,null)}function Iu(e,t){e.F=Date.now(),ln(e),e.A=At(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),ku(n.h,"t",r),e.C=0,n=e.l.H,e.h=new Su,e.g=Yu(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Yf(X(e.Ia,e,e.g),e.O)),mu(e.V,e.g,"readystatechange",e.gb),t=e.H?ru(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ze(),Jf(e.j,e.u,e.A,e.m,e.X,e.s)}y.gb=function(e){e=e.target;const t=this.L;t&&bt(e)==3?t.l():this.Ia(e)};y.Ia=function(e){try{if(e==this.g)t:{const l=bt(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||Ts||this.g&&(this.h.h||this.g.ga()||Mo(this.g)))){this.I||l!=4||t==7||(t==8||0>=h?ze(3):ze(2)),Er(this);var n=this.g.ba();this.N=n;e:if(Cu(this)){var r=Mo(this.g);e="";var s=r.length,i=bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Kt(this),Me(this);var o="";break e}this.h.i=new S.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Zf(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Kn(a)){var c=a;break e}}c=null}if(n=c)oe(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ks(this,n);else{this.i=!1,this.o=3,it(12),Kt(this),Me(this);break t}}this.U?(Au(this,l,o),Ts&&this.i&&l==3&&(mu(this.V,this.W,"tick",this.fb),this.W.start())):(oe(this.j,this.m,o,null),ks(this,o)),l==4&&Kt(this),this.i&&!this.I&&(l==4?Gu(this.l,this):(this.i=!1,ln(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,it(12)):(this.o=0,it(13)),Kt(this),Me(this)}}}catch{}finally{}};function Cu(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function Au(e,t,n){let r=!0,s;for(;!e.I&&e.C<n.length;)if(s=rd(e,n),s==Gn){t==4&&(e.o=4,it(14),r=!1),oe(e.j,e.m,null,"[Incomplete Response]");break}else if(s==Os){e.o=4,it(15),oe(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else oe(e.j,e.m,s,null),ks(e,s);Cu(e)&&s!=Gn&&s!=Os&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,it(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ii(t),t.L=!0,it(11))):(oe(e.j,e.m,n,"[Invalid Chunked Response]"),Kt(e),Me(e))}y.fb=function(){if(this.g){var e=bt(this.g),t=this.g.ga();this.C<t.length&&(Er(this),Au(this,e,t),this.i&&e!=4&&ln(this))}};function rd(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Gn:(n=Number(t.substring(n,r)),isNaN(n)?Os:(r+=1,r+n>t.length?Gn:(t=t.substr(r,n),e.C=r+n,t)))}y.cancel=function(){this.I=!0,Kt(this)};function ln(e){e.Y=Date.now()+e.P,_u(e,e.P)}function _u(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=an(X(e.eb,e),t)}function Er(e){e.B&&(S.clearTimeout(e.B),e.B=null)}y.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(td(this.j,this.A),this.K!=2&&(ze(),it(17)),Kt(this),this.o=2,Me(this)):_u(this,this.Y-e)};function Me(e){e.l.G==0||e.I||Gu(e.l,e)}function Kt(e){Er(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,hi(e.W),yu(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function ks(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||xs(n.i,e))){if(n.I=e.N,!e.J&&xs(n.i,e)&&n.G==3){try{var r=n.Ca.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Yn(n),Ir(n);else break t;Si(n),it(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=an(X(n.ab,n),6e3));if(1>=Ru(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else zt(n,11)}else if((e.J||n.g==e)&&Yn(n),!Kn(t))for(s=n.Ca.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const l=c[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const h=c[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=e.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=r.i;!i.g&&(rt(m,"spdy")||rt(m,"quic")||rt(m,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(vi(i,i.h),i.h=null))}if(r.D){const w=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.sa=w,F(r.F,r.D,w))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=e;if(r.oa=Xu(r,r.H?r.la:null,r.W),o.J){Mu(r.i,o);var a=o,u=r.K;u&&a.setTimeout(u),a.B&&(Er(a),ln(a)),r.g=o}else Ku(r);0<n.l.length&&Cr(n)}else c[0]!="stop"&&c[0]!="close"||zt(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?zt(n,7):Ti(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}ze(4)}catch{}}function sd(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(bs(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function mi(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(bs(e)||typeof e=="string")nu(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(bs(e)||typeof e=="string"){n=[];for(var r=e.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,e)n[r++]=s;r=sd(e),s=r.length;for(var i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}}function be(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof be)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}y=be.prototype;y.R=function(){yi(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};y.T=function(){return yi(this),this.g.concat()};function yi(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Xt(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var s={};for(n=t=0;t<e.g.length;)r=e.g[t],Xt(s,r)||(e.g[n++]=r,s[r]=1),t++;e.g.length=n}}y.get=function(e,t){return Xt(this.h,e)?this.h[e]:t};y.set=function(e,t){Xt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};y.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);e.call(t,i,s,this)}};function Xt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Du=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function id(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Yt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Yt){this.g=t!==void 0?t:e.g,Wn(this,e.j),this.s=e.s,Qn(this,e.i),Xn(this,e.m),this.l=e.l,t=e.h;var n=new Ge;n.i=t.i,t.g&&(n.g=new be(t.g),n.h=t.h),xo(this,n),this.o=e.o}else e&&(n=String(e).match(Du))?(this.g=!!t,Wn(this,n[1]||"",!0),this.s=Pe(n[2]||""),Qn(this,n[3]||"",!0),Xn(this,n[4]),this.l=Pe(n[5]||"",!0),xo(this,n[6]||"",!0),this.o=Pe(n[7]||"")):(this.g=!!t,this.h=new Ge(null,this.g))}Yt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(xe(t,Lo,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(xe(t,Lo,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(xe(n,n.charAt(0)=="/"?ld:cd,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",xe(n,fd)),e.join("")};function At(e){return new Yt(e)}function Wn(e,t,n){e.j=n?Pe(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Qn(e,t,n){e.i=n?Pe(t,!0):t}function Xn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function xo(e,t,n){t instanceof Ge?(e.h=t,dd(e.h,e.g)):(n||(t=xe(t,hd)),e.h=new Ge(t,e.g))}function F(e,t,n){e.h.set(t,n)}function br(e){return F(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function od(e){return e instanceof Yt?At(e):new Yt(e,void 0)}function ad(e,t,n,r){var s=new Yt(null,void 0);return e&&Wn(s,e),t&&Qn(s,t),n&&Xn(s,n),r&&(s.l=r),s}function Pe(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function xe(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,ud),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ud(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Lo=/[#\/\?@]/g,cd=/[#\?:]/g,ld=/[#\?]/g,hd=/[#\?@]/g,fd=/#/g;function Ge(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Vt(e){e.g||(e.g=new be,e.h=0,e.i&&id(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}y=Ge.prototype;y.add=function(e,t){Vt(this),this.i=null,e=Te(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Ou(e,t){Vt(e),t=Te(e,t),Xt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Xt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&yi(e)))}function Nu(e,t){return Vt(e),t=Te(e,t),Xt(e.g.h,t)}y.forEach=function(e,t){Vt(this),this.g.forEach(function(n,r){nu(n,function(s){e.call(t,s,r,this)},this)},this)};y.T=function(){Vt(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var s=e[r],i=0;i<s.length;i++)n.push(t[r]);return n};y.R=function(e){Vt(this);var t=[];if(typeof e=="string")Nu(this,e)&&(t=So(t,this.g.get(Te(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=So(t,e[n])}return t};y.set=function(e,t){return Vt(this),this.i=null,e=Te(this,e),Nu(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};y.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function ku(e,t,n){Ou(e,t),0<n.length&&(e.i=null,e.g.set(Te(e,t),ni(n)),e.h+=n.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),e.push(o)}}return this.i=e.join("&")};function Te(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function dd(e,t){t&&!e.j&&(Vt(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Ou(this,r),ku(this,s,n))},e)),e.j=t}var pd=class{constructor(e,t){this.h=e,this.g=t}};function xu(e){this.l=e||gd,S.PerformanceNavigationTiming?(e=S.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(S.g&&S.g.Ea&&S.g.Ea()&&S.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var gd=10;function Lu(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Ru(e){return e.h?1:e.g?e.g.size:0}function xs(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function vi(e,t){e.g?e.g.add(t):e.h=t}function Mu(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}xu.prototype.cancel=function(){if(this.i=Pu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Pu(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return ni(e.i)}function wi(){}wi.prototype.stringify=function(e){return S.JSON.stringify(e,void 0)};wi.prototype.parse=function(e){return S.JSON.parse(e,void 0)};function md(){this.g=new wi}function yd(e,t,n){const r=n||"";try{mi(e,function(s,i){let o=s;sn(s)&&(o=ci(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function vd(e,t){const n=new mr;if(S.Image){const r=new Image;r.onload=Dn(Nn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Dn(Nn,n,r,"TestLoadImage: error",!1,t),r.onabort=Dn(Nn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Dn(Nn,n,r,"TestLoadImage: timeout",!1,t),S.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Nn(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function hn(e){this.l=e.$b||null,this.j=e.ib||!1}Z(hn,di);hn.prototype.g=function(){return new Tr(this.l,this.j)};hn.prototype.i=function(e){return function(){return e}}({});function Tr(e,t){G.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ei,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Z(Tr,G);var Ei=0;y=Tr.prototype;y.open=function(e,t){if(this.readyState!=Ei)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,We(this)};y.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||S).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fn(this)),this.readyState=Ei};y.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,We(this)),this.g&&(this.readyState=3,We(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof S.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Fu(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function Fu(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}y.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?fn(this):We(this),this.readyState==3&&Fu(this)}};y.Ua=function(e){this.g&&(this.response=this.responseText=e,fn(this))};y.Ta=function(e){this.g&&(this.response=e,fn(this))};y.ha=function(){this.g&&fn(this)};function fn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,We(e)}y.setRequestHeader=function(e,t){this.v.append(e,t)};y.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function We(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Tr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var wd=S.JSON.parse;function $(e){G.call(this),this.headers=new be,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Vu,this.K=this.L=!1}Z($,G);var Vu="",Ed=/^https?$/i,bd=["POST","PUT"];y=$.prototype;y.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ds.g(),this.C=this.u?ko(this.u):ko(Ds),this.g.onreadystatechange=X(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){Ro(this,i);return}e=n||"";const s=new be(this.headers);r&&mi(r,function(i,o){s.set(o,i)}),r=xf(s.T()),n=S.FormData&&e instanceof S.FormData,!(0<=eu(bd,t))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ju(this),0<this.B&&((this.K=Td(this.g))?(this.g.timeout=this.B,this.g.ontimeout=X(this.pa,this)):this.A=fi(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Ro(this,i)}};function Td(e){return fe&&Ff()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function Sd(e){return e.toLowerCase()=="content-type"}y.pa=function(){typeof ei!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Y(this,"timeout"),this.abort(8))};function Ro(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Bu(e),Sr(e)}function Bu(e){e.D||(e.D=!0,Y(e,"complete"),Y(e,"error"))}y.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Y(this,"complete"),Y(this,"abort"),Sr(this))};y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Sr(this,!0)),$.Z.M.call(this)};y.Fa=function(){this.s||(this.F||this.v||this.l?Uu(this):this.cb())};y.cb=function(){Uu(this)};function Uu(e){if(e.h&&typeof ei!="undefined"&&(!e.C[1]||bt(e)!=4||e.ba()!=2)){if(e.v&&bt(e)==4)fi(e.Fa,0,e);else if(Y(e,"readystatechange"),bt(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=a===0){var s=String(e.H).match(Du)[1]||null;if(!s&&S.self&&S.self.location){var i=S.self.location.protocol;s=i.substr(0,i.length-1)}r=!Ed.test(s?s.toLowerCase():"")}n=r}if(n)Y(e,"complete"),Y(e,"success");else{e.m=6;try{var o=2<bt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",Bu(e)}}finally{Sr(e)}}}}function Sr(e,t){if(e.g){ju(e);const n=e.g,r=e.C[0]?Hn:null;e.g=null,e.C=null,t||Y(e,"ready");try{n.onreadystatechange=r}catch{}}}function ju(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(S.clearTimeout(e.A),e.A=null)}function bt(e){return e.g?e.g.readyState:0}y.ba=function(){try{return 2<bt(this)?this.g.status:-1}catch{return-1}};y.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),wd(t)}};function Mo(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Vu:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}y.Da=function(){return this.m};y.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Id(e){let t="";return ri(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function bi(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Id(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):F(e,t,n))}function De(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function $u(e){this.za=0,this.l=[],this.h=new mr,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=De("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=De("baseRetryDelayMs",5e3,e),this.$a=De("retryDelaySeedMs",1e4,e),this.Ya=De("forwardChannelMaxRetries",2,e),this.ra=De("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new xu(e&&e.concurrentRequestLimit),this.Ca=new md,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}y=$u.prototype;y.ma=8;y.G=1;function Ti(e){if(qu(e),e.G==3){var t=e.V++,n=At(e.F);F(n,"SID",e.J),F(n,"RID",t),F(n,"TYPE","terminate"),dn(e,n),t=new cn(e,e.h,t,void 0),t.K=2,t.v=br(At(n)),n=!1,S.navigator&&S.navigator.sendBeacon&&(n=S.navigator.sendBeacon(t.v.toString(),"")),!n&&S.Image&&(new Image().src=t.v,n=!0),n||(t.g=Yu(t.l,null),t.g.ea(t.v)),t.F=Date.now(),ln(t)}Qu(e)}y.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function Ir(e){e.g&&(Ii(e),e.g.cancel(),e.g=null)}function qu(e){Ir(e),e.u&&(S.clearTimeout(e.u),e.u=null),Yn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&S.clearTimeout(e.m),e.m=null)}function is(e,t){e.l.push(new pd(e.Za++,t)),e.G==3&&Cr(e)}function Cr(e){Lu(e.i)||e.m||(e.m=!0,li(e.Ha,e),e.C=0)}function Cd(e,t){return Ru(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=an(X(e.Ha,e,t),Wu(e,e.C)),e.C++,!0)}y.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const s=new cn(this,this.h,e,void 0);let i=this.s;if(this.P&&(i?(i=ru(i),su(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Hu(this,s,t),n=At(this.F),F(n,"RID",e),F(n,"CVER",22),this.D&&F(n,"X-HTTP-Session-Id",this.D),dn(this,n),this.o&&i&&bi(n,this.o,i),vi(this.i,s),this.Ra&&F(n,"TYPE","init"),this.ja?(F(n,"$req",t),F(n,"SID","null"),s.$=!0,Ns(s,n,null)):Ns(s,n,t),this.G=2}}else this.G==3&&(e?Po(this,e):this.l.length==0||Lu(this.i)||Po(this))};function Po(e,t){var n;t?n=t.m:n=e.V++;const r=At(e.F);F(r,"SID",e.J),F(r,"RID",n),F(r,"AID",e.U),dn(e,r),e.o&&e.s&&bi(r,e.o,e.s),n=new cn(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Hu(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),vi(e.i,n),Ns(n,r,t)}function dn(e,t){e.j&&mi({},function(n,r){F(t,r,n)})}function Hu(e,t,n){n=Math.min(e.l.length,n);var r=e.j?X(e.j.Oa,e.j,e):null;t:{var s=e.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let u=0;u<n;u++){let c=s[u].h;const l=s[u].g;if(c-=i,0>c)i=Math.max(0,s[u].h-100),a=!1;else try{yd(l,o,"req"+c+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,r}function Ku(e){e.g||e.u||(e.Y=1,li(e.Ga,e),e.A=0)}function Si(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=an(X(e.Ga,e),Wu(e,e.A)),e.A++,!0)}y.Ga=function(){if(this.u=null,zu(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=an(X(this.bb,this),e)}};y.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,it(10),Ir(this),zu(this))};function Ii(e){e.B!=null&&(S.clearTimeout(e.B),e.B=null)}function zu(e){e.g=new cn(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=At(e.oa);F(t,"RID","rpc"),F(t,"SID",e.J),F(t,"CI",e.N?"0":"1"),F(t,"AID",e.U),dn(e,t),F(t,"TYPE","xmlhttp"),e.o&&e.s&&bi(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=br(At(t)),n.s=null,n.U=!0,Iu(n,e)}y.ab=function(){this.v!=null&&(this.v=null,Ir(this),Si(this),it(19))};function Yn(e){e.v!=null&&(S.clearTimeout(e.v),e.v=null)}function Gu(e,t){var n=null;if(e.g==t){Yn(e),Ii(e),e.g=null;var r=2}else if(xs(e.i,t))n=t.D,Mu(e.i,t),r=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var s=e.C;r=yr(),Y(r,new Eu(r,n)),Cr(e)}else Ku(e);else if(s=t.o,s==3||s==0&&0<e.I||!(r==1&&Cd(e,t)||r==2&&Si(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:zt(e,5);break;case 4:zt(e,10);break;case 3:zt(e,6);break;default:zt(e,2)}}}function Wu(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function zt(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var r=X(e.jb,e);n||(n=new Yt("//www.google.com/images/cleardot.gif"),S.location&&S.location.protocol=="http"||Wn(n,"https"),br(n)),vd(n.toString(),r)}else it(2);e.G=0,e.j&&e.j.va(t),Qu(e),qu(e)}y.jb=function(e){e?(this.h.info("Successfully pinged google.com"),it(2)):(this.h.info("Failed to ping google.com"),it(1))};function Qu(e){e.G=0,e.I=-1,e.j&&((Pu(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,ni(e.l),e.l.length=0),e.j.ua())}function Xu(e,t,n){let r=od(n);if(r.i!="")t&&Qn(r,t+"."+r.i),Xn(r,r.m);else{const s=S.location;r=ad(s.protocol,t?t+"."+s.hostname:s.hostname,+s.port,n)}return e.aa&&ri(e.aa,function(s,i){F(r,i,s)}),t=e.D,n=e.sa,t&&n&&F(r,t,n),F(r,"VER",e.ma),dn(e,r),r}function Yu(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new $(new hn({ib:!0})):new $(e.qa),t.L=e.H,t}function Ju(){}y=Ju.prototype;y.xa=function(){};y.wa=function(){};y.va=function(){};y.ua=function(){};y.Oa=function(){};function Jn(){if(fe&&!(10<=Number(Vf)))throw Error("Environmental error: no available transport.")}Jn.prototype.g=function(e,t){return new dt(e,t)};function dt(e,t){G.call(this),this.g=new $u(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!Kn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Kn(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Se(this)}Z(dt,G);dt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),li(X(e.hb,e,t))),it(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Xu(e,null,e.W),Cr(e)};dt.prototype.close=function(){Ti(this.g)};dt.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,is(this.g,t)}else this.v?(t={},t.__data__=ci(e),is(this.g,t)):is(this.g,e)};dt.prototype.M=function(){this.g.j=null,delete this.j,Ti(this.g),delete this.g,dt.Z.M.call(this)};function Zu(e){pi.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Z(Zu,pi);function tc(){gi.call(this),this.status=1}Z(tc,gi);function Se(e){this.g=e}Z(Se,Ju);Se.prototype.xa=function(){Y(this.g,"a")};Se.prototype.wa=function(e){Y(this.g,new Zu(e))};Se.prototype.va=function(e){Y(this.g,new tc)};Se.prototype.ua=function(){Y(this.g,"b")};Jn.prototype.createWebChannel=Jn.prototype.g;dt.prototype.send=dt.prototype.u;dt.prototype.open=dt.prototype.m;dt.prototype.close=dt.prototype.close;vr.NO_ERROR=0;vr.TIMEOUT=8;vr.HTTP_ERROR=6;bu.COMPLETE="complete";Tu.EventType=un;un.OPEN="a";un.CLOSE="b";un.ERROR="c";un.MESSAGE="d";G.prototype.listen=G.prototype.N;$.prototype.listenOnce=$.prototype.O;$.prototype.getLastError=$.prototype.La;$.prototype.getLastErrorCode=$.prototype.Da;$.prototype.getStatus=$.prototype.ba;$.prototype.getResponseJson=$.prototype.Qa;$.prototype.getResponseText=$.prototype.ga;$.prototype.send=$.prototype.ea;var Ad=function(){return new Jn},_d=function(){return yr()},os=vr,Dd=bu,Od=ee,Fo={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Nd=hn,kn=Tu,kd=$;const Vo="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ie="9.8.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new Qa("@firebase/firestore");function Bo(){return Jt.logLevel}function v(e,...t){if(Jt.logLevel<=k.DEBUG){const n=t.map(Ci);Jt.debug(`Firestore (${Ie}): ${e}`,...n)}}function Lt(e,...t){if(Jt.logLevel<=k.ERROR){const n=t.map(Ci);Jt.error(`Firestore (${Ie}): ${e}`,...n)}}function Uo(e,...t){if(Jt.logLevel<=k.WARN){const n=t.map(Ci);Jt.warn(`Firestore (${Ie}): ${e}`,...n)}}function Ci(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e="Unexpected state"){const t=`FIRESTORE (${Ie}) INTERNAL ASSERTION FAILED: `+e;throw Lt(t),new Error(t)}function P(e,t){e||I()}function C(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends fr{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ld{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class Rd{constructor(t){this.t=t,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new St;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new St,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},a=u=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new St)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(P(typeof r.accessToken=="string"),new xd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return P(t===null||typeof t=="string"),new ct(t)}}class Md{constructor(t,n,r){this.type="FirstParty",this.user=ct.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=t.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class Pd{constructor(t,n,r){this.h=t,this.l=n,this.m=r}getToken(){return Promise.resolve(new Md(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Fd{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vd{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const r=i=>{i.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?s(i):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(P(typeof n.token=="string"),this.p=n.token,new Fd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Bd(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function x(e,t){return e<t?-1:e>t?1:0}function de(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new b(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new b(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new b(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new b(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return q.fromMillis(Date.now())}static fromDate(t){return q.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new q(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?x(this.nanoseconds,t.nanoseconds):x(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t){this.timestamp=t}static fromTimestamp(t){return new A(t)}static min(){return new A(new q(0,0))}static max(){return new A(new q(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t,n,r){n===void 0?n=0:n>t.length&&I(),r===void 0?r=t.length-n:r>t.length-n&&I(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Qe.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Qe?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class V extends Qe{construct(t,n,r){return new V(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new b(d.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new V(n)}static emptyPath(){return new V([])}}const Ud=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends Qe{construct(t,n,r){return new tt(t,n,r)}static isValidIdentifier(t){return Ud.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new b(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new b(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new b(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new b(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new tt(n)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t){this.path=t}static fromPath(t){return new T(V.fromString(t))}static fromName(t){return new T(V.fromString(t).popFirst(5))}static empty(){return new T(V.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&V.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return V.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new T(new V(t.slice()))}}function jd(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=A.fromTimestamp(r===1e9?new q(n+1,0):new q(n,r));return new Rt(s,T.empty(),t)}function $d(e){return new Rt(e.readTime,e.key,-1)}class Rt{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Rt(A.min(),T.empty(),-1)}static max(){return new Rt(A.max(),T.empty(),-1)}}function qd(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=T.comparator(e.documentKey,t.documentKey),n!==0?n:x(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Kd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(e){if(e.code!==d.FAILED_PRECONDITION||e.message!==Hd)throw e;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new g((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):g.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):g.reject(n)}static resolve(t){return new g((n,r)=>{n(t)})}static reject(t){return new g((n,r)=>{r(t)})}static waitFor(t){return new g((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(t){let n=g.resolve(!1);for(const r of t)n=n.next(s=>s?g.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new g((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;n(t[c]).next(l=>{o[c]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(t,n){return new g((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function gn(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.it(r),this.rt=r=>n.writeSequenceNumber(r))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ne(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function nc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ai.ot=-1;class K{constructor(t,n){this.comparator=t,this.root=n||W.EMPTY}insert(t,n){return new K(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,W.BLACK,null,null))}remove(t){return new K(this.comparator,this.root.remove(t,this.comparator).copy(null,null,W.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new xn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new xn(this.root,t,this.comparator,!1)}getReverseIterator(){return new xn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new xn(this.root,t,this.comparator,!0)}}class xn{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class W{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r!=null?r:W.RED,this.left=s!=null?s:W.EMPTY,this.right=i!=null?i:W.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new W(t!=null?t:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return W.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return W.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,W.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,W.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}W.EMPTY=null,W.RED=!0,W.BLACK=!1;W.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,r,s){return this}insert(e,t,n){return new W(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t){this.comparator=t,this.data=new K(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new $o(this.data.getIterator())}getIteratorFrom(t){return new $o(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof H)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new H(this.comparator);return n.data=t,n}}class $o{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.fields=t,t.sort(tt.comparator)}static empty(){return new gt([])}unionWith(t){let n=new H(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new gt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return de(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new J(n)}static fromUint8Array(t){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(t);return new J(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return x(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}J.EMPTY_BYTE_STRING=new J("");const zd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mt(e){if(P(!!e),typeof e=="string"){let t=0;const n=zd.exec(e);if(P(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:j(e.seconds),nanos:j(e.nanos)}}function j(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function pe(e){return typeof e=="string"?J.fromBase64String(e):J.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function sc(e){const t=e.mapValue.fields.__previous_value__;return rc(t)?sc(t):t}function Xe(e){const t=Mt(e.mapValue.fields.__local_write_time__.timestampValue);return new q(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(t,n,r,s,i,o,a,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class ge{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ge("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ge&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(e){return e==null}function Zn(e){return e===0&&1/e==-1/0}function Wd(e){return typeof e=="number"&&Number.isInteger(e)&&!Zn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Zt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?rc(e)?4:Qd(e)?9007199254740991:10:I()}function wt(e,t){if(e===t)return!0;const n=Zt(e);if(n!==Zt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Xe(e).isEqual(Xe(t));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Mt(r.timestampValue),o=Mt(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,s){return pe(r.bytesValue).isEqual(pe(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,s){return j(r.geoPointValue.latitude)===j(s.geoPointValue.latitude)&&j(r.geoPointValue.longitude)===j(s.geoPointValue.longitude)}(e,t);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return j(r.integerValue)===j(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=j(r.doubleValue),o=j(s.doubleValue);return i===o?Zn(i)===Zn(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return de(e.arrayValue.values||[],t.arrayValue.values||[],wt);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(jo(i)!==jo(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!wt(i[a],o[a])))return!1;return!0}(e,t);default:return I()}}function Ye(e,t){return(e.values||[]).find(n=>wt(n,t))!==void 0}function me(e,t){if(e===t)return 0;const n=Zt(e),r=Zt(t);if(n!==r)return x(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return x(e.booleanValue,t.booleanValue);case 2:return function(s,i){const o=j(s.integerValue||s.doubleValue),a=j(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return qo(e.timestampValue,t.timestampValue);case 4:return qo(Xe(e),Xe(t));case 5:return x(e.stringValue,t.stringValue);case 6:return function(s,i){const o=pe(s),a=pe(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=x(o[u],a[u]);if(c!==0)return c}return x(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,i){const o=x(j(s.latitude),j(i.latitude));return o!==0?o:x(j(s.longitude),j(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=me(o[u],a[u]);if(c)return c}return x(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,i){if(s===Ln.mapValue&&i===Ln.mapValue)return 0;if(s===Ln.mapValue)return 1;if(i===Ln.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),u=i.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let l=0;l<a.length&&l<c.length;++l){const h=x(a[l],c[l]);if(h!==0)return h;const f=me(o[a[l]],u[c[l]]);if(f!==0)return f}return x(a.length,c.length)}(e.mapValue,t.mapValue);default:throw I()}}function qo(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return x(e,t);const n=Mt(e),r=Mt(t),s=x(n.seconds,r.seconds);return s!==0?s:x(n.nanos,r.nanos)}function ce(e){return Ls(e)}function Ls(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(r){const s=Mt(r);return`time(${s.seconds},${s.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?pe(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,T.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Ls(o);return s+"]"}(e.arrayValue):"mapValue"in e?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Ls(r.fields[a])}`;return i+"}"}(e.mapValue):I();var t,n}function Rs(e){return!!e&&"integerValue"in e}function _i(e){return!!e&&"arrayValue"in e}function Ho(e){return!!e&&"nullValue"in e}function Ko(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Fn(e){return!!e&&"mapValue"in e}function Fe(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ne(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Fe(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Fe(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Qd(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.value=t}static empty(){return new lt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Fn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Fe(n)}setAll(t){let n=tt.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Fe(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());Fn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return wt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];Fn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){ne(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new lt(Fe(this.value))}}function ic(e){const t=[];return ne(e.fields,(n,r)=>{const s=new tt([n]);if(Fn(r)){const i=ic(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new gt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t,n,r,s,i,o){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(t){return new Q(t,0,A.min(),A.min(),lt.empty(),0)}static newFoundDocument(t,n,r){return new Q(t,1,n,A.min(),r,0)}static newNoDocument(t,n){return new Q(t,2,n,A.min(),lt.empty(),0)}static newUnknownDocument(t,n){return new Q(t,3,n,A.min(),lt.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=lt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=A.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Q&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Q(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ut=null}}function zo(e,t=null,n=[],r=[],s=null,i=null,o=null){return new Xd(e,t,n,r,s,i,o)}function Di(e){const t=C(e);if(t.ut===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+ce(s.value);var s}).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ar(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>ce(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>ce(r)).join(",")),t.ut=n}return t.ut}function Yd(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${ce(r.value)}`;var r}).join(", ")}]`),Ar(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>ce(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>ce(n)).join(",")),`Target(${t})`}function Oi(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let s=0;s<e.orderBy.length;s++)if(!ip(e.orderBy[s],t.orderBy[s]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let s=0;s<e.filters.length;s++)if(n=e.filters[s],r=t.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!wt(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Wo(e.startAt,t.startAt)&&Wo(e.endAt,t.endAt)}function Ms(e){return T.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class ht extends class{}{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.ct(t,n,r):new Jd(t,n,r):n==="array-contains"?new ep(t,r):n==="in"?new np(t,r):n==="not-in"?new rp(t,r):n==="array-contains-any"?new sp(t,r):new ht(t,n,r)}static ct(t,n,r){return n==="in"?new Zd(t,r):new tp(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.at(me(n,this.value)):n!==null&&Zt(this.value)===Zt(n)&&this.at(me(n,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Jd extends ht{constructor(t,n,r){super(t,n,r),this.key=T.fromName(r.referenceValue)}matches(t){const n=T.comparator(t.key,this.key);return this.at(n)}}class Zd extends ht{constructor(t,n){super(t,"in",n),this.keys=oc("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class tp extends ht{constructor(t,n){super(t,"not-in",n),this.keys=oc("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function oc(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>T.fromName(r.referenceValue))}class ep extends ht{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return _i(n)&&Ye(n.arrayValue,this.value)}}class np extends ht{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ye(this.value.arrayValue,n)}}class rp extends ht{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ye(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ye(this.value.arrayValue,n)}}class sp extends ht{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!_i(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ye(this.value.arrayValue,r))}}class tr{constructor(t,n){this.position=t,this.inclusive=n}}class le{constructor(t,n="asc"){this.field=t,this.dir=n}}function ip(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Go(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=T.comparator(T.fromName(o.referenceValue),n.key):r=me(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wo(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!wt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.lt=null,this.ft=null,this.startAt,this.endAt}}function op(e,t,n,r,s,i,o,a){return new mn(e,t,n,r,s,i,o,a)}function _r(e){return new mn(e)}function ap(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function ac(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function uc(e){for(const t of e.filters)if(t.ht())return t.field;return null}function up(e){return e.collectionGroup!==null}function Je(e){const t=C(e);if(t.lt===null){t.lt=[];const n=uc(t),r=ac(t);if(n!==null&&r===null)n.isKeyField()||t.lt.push(new le(n)),t.lt.push(new le(tt.keyField(),"asc"));else{let s=!1;for(const i of t.explicitOrderBy)t.lt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.lt.push(new le(tt.keyField(),i))}}}return t.lt}function te(e){const t=C(e);if(!t.ft)if(t.limitType==="F")t.ft=zo(t.path,t.collectionGroup,Je(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of Je(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new le(i.field,o))}const r=t.endAt?new tr(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new tr(t.startAt.position,t.startAt.inclusive):null;t.ft=zo(t.path,t.collectionGroup,n,t.filters,t.limit,r,s)}return t.ft}function cp(e,t,n){return new mn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Dr(e,t){return Oi(te(e),te(t))&&e.limitType===t.limitType}function cc(e){return`${Di(te(e))}|lt:${e.limitType}`}function Ps(e){return`Query(target=${Yd(te(e))}; limitType=${e.limitType})`}function Ni(e,t){return t.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):T.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(e,t)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(e,t)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(e,t)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=Go(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,Je(n),r)||n.endAt&&!function(s,i,o){const a=Go(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,Je(n),r))}(e,t)}function lp(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function lc(e){return(t,n)=>{let r=!1;for(const s of Je(e)){const i=hp(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function hp(e,t,n){const r=e.field.isKeyField()?T.comparator(t.key,n.key):function(s,i,o){const a=i.data.field(s),u=o.data.field(s);return a!==null&&u!==null?me(a,u):I()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(e,t){if(e.dt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zn(t)?"-0":t}}function fc(e){return{integerValue:""+e}}function fp(e,t){return Wd(t)?fc(t):hc(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this._=void 0}}function dp(e,t,n){return e instanceof Ze?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,t):e instanceof ye?pc(e,t):e instanceof tn?gc(e,t):function(r,s){const i=dc(r,s),o=Qo(i)+Qo(r._t);return Rs(i)&&Rs(r._t)?fc(o):hc(r.wt,o)}(e,t)}function pp(e,t,n){return e instanceof ye?pc(e,t):e instanceof tn?gc(e,t):n}function dc(e,t){return e instanceof er?Rs(n=t)||function(r){return!!r&&"doubleValue"in r}(n)?t:{integerValue:0}:null;var n}class Ze extends Or{}class ye extends Or{constructor(t){super(),this.elements=t}}function pc(e,t){const n=mc(t);for(const r of e.elements)n.some(s=>wt(s,r))||n.push(r);return{arrayValue:{values:n}}}class tn extends Or{constructor(t){super(),this.elements=t}}function gc(e,t){let n=mc(t);for(const r of e.elements)n=n.filter(s=>!wt(s,r));return{arrayValue:{values:n}}}class er extends Or{constructor(t,n){super(),this.wt=t,this._t=n}}function Qo(e){return j(e.integerValue||e.doubleValue)}function mc(e){return _i(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t,n){this.field=t,this.transform=n}}function gp(e,t){return e.field.isEqual(t.field)&&function(n,r){return n instanceof ye&&r instanceof ye||n instanceof tn&&r instanceof tn?de(n.elements,r.elements,wt):n instanceof er&&r instanceof er?wt(n._t,r._t):n instanceof Ze&&r instanceof Ze}(e.transform,t.transform)}class mp{constructor(t,n){this.version=t,this.transformResults=n}}class mt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new mt}static exists(t){return new mt(void 0,t)}static updateTime(t){return new mt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Vn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Nr{}function vc(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new ki(e.key,mt.none()):new yn(e.key,e.data,mt.none());{const n=e.data,r=lt.empty();let s=new H(tt.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Bt(e.key,r,new gt(s.toArray()),mt.none())}}function yp(e,t,n){e instanceof yn?function(r,s,i){const o=r.value.clone(),a=Yo(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Bt?function(r,s,i){if(!Vn(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=Yo(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(wc(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function Ve(e,t,n,r){return e instanceof yn?function(s,i,o,a){if(!Vn(s.precondition,i))return o;const u=s.value.clone(),c=Jo(s.fieldTransforms,a,i);return u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof Bt?function(s,i,o,a){if(!Vn(s.precondition,i))return o;const u=Jo(s.fieldTransforms,a,i),c=i.data;return c.setAll(wc(s)),c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(l=>l.field))}(e,t,n,r):function(s,i,o){return Vn(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function vp(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=dc(r.transform,s||null);i!=null&&(n===null&&(n=lt.empty()),n.set(r.field,i))}return n||null}function Xo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&de(n,r,(s,i)=>gp(s,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class yn extends Nr{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Bt extends Nr{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function wc(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Yo(e,t,n){const r=new Map;P(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,pp(o,a,n[s]))}return r}function Jo(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,dp(i,o,t))}return r}class ki extends Nr{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wp extends Nr{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U,O;function bp(e){switch(e){default:return I();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function Ec(e){if(e===void 0)return Lt("GRPC error has no .code"),d.UNKNOWN;switch(e){case U.OK:return d.OK;case U.CANCELLED:return d.CANCELLED;case U.UNKNOWN:return d.UNKNOWN;case U.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case U.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case U.INTERNAL:return d.INTERNAL;case U.UNAVAILABLE:return d.UNAVAILABLE;case U.UNAUTHENTICATED:return d.UNAUTHENTICATED;case U.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case U.NOT_FOUND:return d.NOT_FOUND;case U.ALREADY_EXISTS:return d.ALREADY_EXISTS;case U.PERMISSION_DENIED:return d.PERMISSION_DENIED;case U.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case U.ABORTED:return d.ABORTED;case U.OUT_OF_RANGE:return d.OUT_OF_RANGE;case U.UNIMPLEMENTED:return d.UNIMPLEMENTED;case U.DATA_LOSS:return d.DATA_LOSS;default:return I()}}(O=U||(U={}))[O.OK=0]="OK",O[O.CANCELLED=1]="CANCELLED",O[O.UNKNOWN=2]="UNKNOWN",O[O.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",O[O.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",O[O.NOT_FOUND=5]="NOT_FOUND",O[O.ALREADY_EXISTS=6]="ALREADY_EXISTS",O[O.PERMISSION_DENIED=7]="PERMISSION_DENIED",O[O.UNAUTHENTICATED=16]="UNAUTHENTICATED",O[O.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",O[O.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",O[O.ABORTED=10]="ABORTED",O[O.OUT_OF_RANGE=11]="OUT_OF_RANGE",O[O.UNIMPLEMENTED=12]="UNIMPLEMENTED",O[O.INTERNAL=13]="INTERNAL",O[O.UNAVAILABLE=14]="UNAVAILABLE",O[O.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ne(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return nc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp=new K(T.comparator);function _t(){return Tp}const bc=new K(T.comparator);function Le(...e){let t=bc;for(const n of e)t=t.insert(n.key,n);return t}function Tc(e){let t=bc;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Gt(){return Be()}function Sc(){return Be()}function Be(){return new Ce(e=>e.toString(),(e,t)=>e.isEqual(t))}const Sp=new K(T.comparator),Ip=new H(T.comparator);function D(...e){let t=Ip;for(const n of e)t=t.add(n);return t}const Cp=new H(x);function Ic(){return Cp}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n){const r=new Map;return r.set(t,vn.createSynthesizedTargetChangeForCurrentChange(t,n)),new kr(A.min(),r,Ic(),_t(),D())}}class vn{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n){return new vn(J.EMPTY_BYTE_STRING,n,D(),D(),D())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(t,n,r,s){this.gt=t,this.removedTargetIds=n,this.key=r,this.yt=s}}class Cc{constructor(t,n){this.targetId=t,this.It=n}}class Ac{constructor(t,n,r=J.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Zo{constructor(){this.Tt=0,this.Et=ea(),this.At=J.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(t){t.approximateByteSize()>0&&(this.bt=!0,this.At=t)}St(){let t=D(),n=D(),r=D();return this.Et.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:I()}}),new vn(this.At,this.Rt,t,n,r)}Dt(){this.bt=!1,this.Et=ea()}Ct(t,n){this.bt=!0,this.Et=this.Et.insert(t,n)}xt(t){this.bt=!0,this.Et=this.Et.remove(t)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class Ap{constructor(t){this.Mt=t,this.Ft=new Map,this.$t=_t(),this.Bt=ta(),this.Lt=new H(x)}Ut(t){for(const n of t.gt)t.yt&&t.yt.isFoundDocument()?this.qt(n,t.yt):this.Kt(n,t.key,t.yt);for(const n of t.removedTargetIds)this.Kt(n,t.key,t.yt)}Gt(t){this.forEachTarget(t,n=>{const r=this.Qt(n);switch(t.state){case 0:this.jt(n)&&r.Vt(t.resumeToken);break;case 1:r.kt(),r.Pt||r.Dt(),r.Vt(t.resumeToken);break;case 2:r.kt(),r.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(r.Ot(),r.Vt(t.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),r.Vt(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Ft.forEach((r,s)=>{this.jt(s)&&n(s)})}zt(t){const n=t.targetId,r=t.It.count,s=this.Ht(n);if(s){const i=s.target;if(Ms(i))if(r===0){const o=new T(i.path);this.Kt(n,o,Q.newNoDocument(o,A.min()))}else P(r===1);else this.Jt(n)!==r&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(t){const n=new Map;this.Ft.forEach((i,o)=>{const a=this.Ht(o);if(a){if(i.current&&Ms(a.target)){const u=new T(a.target.path);this.$t.get(u)!==null||this.Xt(o,u)||this.Kt(o,u,Q.newNoDocument(u,t))}i.vt&&(n.set(o,i.St()),i.Dt())}});let r=D();this.Bt.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Ht(u);return!c||c.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.$t.forEach((i,o)=>o.setReadTime(t));const s=new kr(t,n,this.Lt,this.$t,r);return this.$t=_t(),this.Bt=ta(),this.Lt=new H(x),s}qt(t,n){if(!this.jt(t))return;const r=this.Xt(t,n.key)?2:0;this.Qt(t).Ct(n.key,r),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(t))}Kt(t,n,r){if(!this.jt(t))return;const s=this.Qt(t);this.Xt(t,n)?s.Ct(n,1):s.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(t)),r&&(this.$t=this.$t.insert(n,r))}removeTarget(t){this.Ft.delete(t)}Jt(t){const n=this.Qt(t).St();return this.Mt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Nt(t){this.Qt(t).Nt()}Qt(t){let n=this.Ft.get(t);return n||(n=new Zo,this.Ft.set(t,n)),n}Zt(t){let n=this.Bt.get(t);return n||(n=new H(x),this.Bt=this.Bt.insert(t,n)),n}jt(t){const n=this.Ht(t)!==null;return n||v("WatchChangeAggregator","Detected inactive target",t),n}Ht(t){const n=this.Ft.get(t);return n&&n.Pt?null:this.Mt.te(t)}Wt(t){this.Ft.set(t,new Zo),this.Mt.getRemoteKeysForTarget(t).forEach(n=>{this.Kt(t,n,null)})}Xt(t,n){return this.Mt.getRemoteKeysForTarget(t).has(n)}}function ta(){return new K(T.comparator)}function ea(){return new K(T.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Dp=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Op{constructor(t,n){this.databaseId=t,this.dt=n}}function nr(e,t){return e.dt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function _c(e,t){return e.dt?t.toBase64():t.toUint8Array()}function Np(e,t){return nr(e,t.toTimestamp())}function It(e){return P(!!e),A.fromTimestamp(function(t){const n=Mt(t);return new q(n.seconds,n.nanos)}(e))}function xi(e,t){return function(n){return new V(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Dc(e){const t=V.fromString(e);return P(kc(t)),t}function Fs(e,t){return xi(e.databaseId,t.path)}function as(e,t){const n=Dc(t);if(n.get(1)!==e.databaseId.projectId)throw new b(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new b(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new T(Oc(n))}function Vs(e,t){return xi(e.databaseId,t)}function kp(e){const t=Dc(e);return t.length===4?V.emptyPath():Oc(t)}function Bs(e){return new V(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Oc(e){return P(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function na(e,t,n){return{name:Fs(e,t),fields:n.value.mapValue.fields}}function xp(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(u,c){return u.dt?(P(c===void 0||typeof c=="string"),J.fromBase64String(c||"")):(P(c===void 0||c instanceof Uint8Array),J.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?d.UNKNOWN:Ec(u.code);return new b(c,u.message||"")}(o);n=new Ac(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=as(e,r.document.name),i=It(r.document.updateTime),o=new lt({mapValue:{fields:r.document.fields}}),a=Q.newFoundDocument(s,i,o),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Bn(u,c,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=as(e,r.document),i=r.readTime?It(r.readTime):A.min(),o=Q.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Bn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=as(e,r.document),i=r.removedTargetIds||[];n=new Bn([],i,s,null)}else{if(!("filter"in t))return I();{t.filter;const r=t.filter;r.targetId;const s=r.count||0,i=new Ep(s),o=r.targetId;n=new Cc(o,i)}}return n}function Lp(e,t){let n;if(t instanceof yn)n={update:na(e,t.key,t.value)};else if(t instanceof ki)n={delete:Fs(e,t.key)};else if(t instanceof Bt)n={update:na(e,t.key,t.data),updateMask:qp(t.fieldMask)};else{if(!(t instanceof wp))return I();n={verify:Fs(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Ze)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ye)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof tn)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof er)return{fieldPath:i.field.canonicalString(),increment:o._t};throw I()}(0,r))),t.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:Np(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:I()}(e,t.precondition)),n}function Rp(e,t){return e&&e.length>0?(P(t!==void 0),e.map(n=>function(r,s){let i=r.updateTime?It(r.updateTime):It(s);return i.isEqual(A.min())&&(i=It(s)),new mp(i,r.transformResults||[])}(n,t))):[]}function Mp(e,t){return{documents:[Vs(e,t.path)]}}function Pp(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=Vs(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Vs(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(u){if(u.length===0)return;const c=u.map(l=>function(h){if(h.op==="=="){if(Ko(h.value))return{unaryFilter:{field:se(h.field),op:"IS_NAN"}};if(Ho(h.value))return{unaryFilter:{field:se(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Ko(h.value))return{unaryFilter:{field:se(h.field),op:"IS_NOT_NAN"}};if(Ho(h.value))return{unaryFilter:{field:se(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:se(h.field),op:Up(h.op),value:h.value}}}(l));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(t.filters);s&&(n.structuredQuery.where=s);const i=function(u){if(u.length!==0)return u.map(c=>function(l){return{field:se(l.field),direction:Bp(l.dir)}}(c))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(u,c){return u.dt||Ar(c)?c:{value:c}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function Fp(e){let t=kp(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){P(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:t=t.child(l.collectionId)}let i=[];n.where&&(i=Nc(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new le(ae(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Ar(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(l){const h=!!l.before,f=l.values||[];return new tr(f,h)}(n.startAt));let c=null;return n.endAt&&(c=function(l){const h=!l.before,f=l.values||[];return new tr(f,h)}(n.endAt)),op(t,s,o,i,a,"F",u,c)}function Vp(e,t){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function Nc(e){return e?e.unaryFilter!==void 0?[$p(e)]:e.fieldFilter!==void 0?[jp(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>Nc(t)).reduce((t,n)=>t.concat(n)):I():[]}function Bp(e){return _p[e]}function Up(e){return Dp[e]}function se(e){return{fieldPath:e.canonicalString()}}function ae(e){return tt.fromServerFormat(e.fieldPath)}function jp(e){return ht.create(ae(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(e.fieldFilter.op),e.fieldFilter.value)}function $p(e){switch(e.unaryFilter.op){case"IS_NAN":const t=ae(e.unaryFilter.field);return ht.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=ae(e.unaryFilter.field);return ht.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ae(e.unaryFilter.field);return ht.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ae(e.unaryFilter.field);return ht.create(s,"!=",{nullValue:"NULL_VALUE"});default:return I()}}function qp(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function kc(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&yp(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Ve(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Ve(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Sc();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const u=vc(o,a);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(A.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),D())}isEqual(t){return this.batchId===t.batchId&&de(this.mutations,t.mutations,(n,r)=>Xo(n,r))&&de(this.baseMutations,t.baseMutations,(n,r)=>Xo(n,r))}}class Li{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){P(t.mutations.length===r.length);let s=Sp;const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Li(t,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t,n,r,s,i=A.min(),o=A.min(),a=J.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new Wt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(t){this.ne=t}}function Gp(e){const t=Fp({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?cp(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(){this.ze=new Qp}addToCollectionParentIndex(t,n){return this.ze.add(n),g.resolve()}getCollectionParents(t,n){return g.resolve(this.ze.getEntries(n))}addFieldIndex(t,n){return g.resolve()}deleteFieldIndex(t,n){return g.resolve()}getDocumentsMatchingTarget(t,n){return g.resolve(null)}getIndexType(t,n){return g.resolve(0)}getFieldIndexes(t,n){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,n){return g.resolve(Rt.min())}getMinOffsetFromCollectionGroup(t,n){return g.resolve(Rt.min())}updateCollectionGroup(t,n,r){return g.resolve()}updateIndexEntries(t,n){return g.resolve()}}class Qp{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new H(V.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new H(V.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new ve(0)}static Rn(){return new ve(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(){this.changes=new Ce(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Q.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?g.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.getBaseDocument(t,n,r))).next(s=>(r!==null&&Ve(r.mutation,s,gt.empty(),q.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,D()).next(()=>r))}getLocalViewOfDocuments(t,n,r=D()){const s=Gt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=Le();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Gt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,D()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=_t();const o=Be(),a=Be();return n.forEach((u,c)=>{const l=r.get(c.key);s.has(c.key)&&(l===void 0||l.mutation instanceof Bt)?i=i.insert(c.key,c):l!==void 0&&(o.set(c.key,l.mutation.getFieldMask()),Ve(l.mutation,c,l.mutation.getFieldMask(),q.now()))}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((c,l)=>o.set(c,l)),n.forEach((c,l)=>{var h;return a.set(c,new Yp(l,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Be();let s=new K((o,a)=>o-a),i=D();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let l=r.get(u)||gt.empty();l=a.applyToLocalView(c,l),r.set(u,l);const h=(s.get(a.batchId)||D()).add(u);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,h=Sc();l.forEach(f=>{if(!i.has(f)){const p=vc(n.get(f),r.get(f));p!==null&&h.set(f,p),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return g.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(s){return T.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):up(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):g.resolve(Gt());let a=-1,u=i;return o.next(c=>g.forEach(c,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?g.resolve():this.getBaseDocument(t,l,h).next(f=>{u=u.insert(l,f)}))).next(()=>this.populateOverlays(t,c,i)).next(()=>this.computeViews(t,u,c,D())).next(l=>({batchId:a,changes:Tc(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new T(n)).next(r=>{let s=Le();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const s=n.collectionGroup;let i=Le();return this.indexManager.getCollectionParents(t,s).next(o=>g.forEach(o,a=>{const u=function(c,l){return new mn(l,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(t,u,r).next(c=>{c.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,r){let s;return this.remoteDocumentCache.getAllFromCollection(t,n.path,r).next(i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId))).next(i=>{i.forEach((a,u)=>{const c=u.getKey();s.get(c)===null&&(s=s.insert(c,Q.newInvalidDocument(c)))});let o=Le();return s.forEach((a,u)=>{const c=i.get(a);c!==void 0&&Ve(c.mutation,u,gt.empty(),q.now()),Ni(n,u)&&(o=o.insert(a,u))}),o})}getBaseDocument(t,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(t,n):g.resolve(Q.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,n){return g.resolve(this.Jn.get(n))}saveBundleMetadata(t,n){var r;return this.Jn.set(n.id,{id:(r=n).id,version:r.version,createTime:It(r.createTime)}),g.resolve()}getNamedQuery(t,n){return g.resolve(this.Yn.get(n))}saveNamedQuery(t,n){return this.Yn.set(n.name,function(r){return{name:r.name,query:Gp(r.bundledQuery),readTime:It(r.readTime)}}(n)),g.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(){this.overlays=new K(T.comparator),this.Xn=new Map}getOverlay(t,n){return g.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Gt();return g.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.ie(t,n,i)}),g.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.Xn.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Xn.delete(r)),g.resolve()}getOverlaysForCollection(t,n,r){const s=Gt(),i=n.length+1,o=new T(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return g.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new K((c,l)=>c-l);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let l=i.get(c.largestBatchId);l===null&&(l=Gt(),i=i.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=Gt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,l)=>a.set(c,l)),!(a.size()>=s)););return g.resolve(a)}ie(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Xn.get(s.largestBatchId).delete(r.key);this.Xn.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Kp(n,r));let i=this.Xn.get(n);i===void 0&&(i=D(),this.Xn.set(n,i)),this.Xn.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){this.Zn=new H(z.ts),this.es=new H(z.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,n){const r=new z(t,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.rs(new z(t,n))}os(t,n){t.forEach(r=>this.removeReference(r,n))}us(t){const n=new T(new V([])),r=new z(n,t),s=new z(n,t+1),i=[];return this.es.forEachInRange([r,s],o=>{this.rs(o),i.push(o.key)}),i}cs(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const n=new T(new V([])),r=new z(n,t),s=new z(n,t+1);let i=D();return this.es.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new z(t,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class z{constructor(t,n){this.key=t,this.ls=n}static ts(t,n){return T.comparator(t.key,n.key)||x(t.ls,n.ls)}static ns(t,n){return x(t.ls,n.ls)||T.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new H(z.ts)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Hp(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.ds=this.ds.add(new z(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,n){return g.resolve(this._s(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.ws(r),i=s<0?0:s;return g.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new z(n,0),s=new z(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([r,s],o=>{const a=this._s(o.ls);i.push(a)}),g.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new H(x);return n.forEach(s=>{const i=new z(s,0),o=new z(s,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{r=r.add(a.ls)})}),g.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;T.isDocumentKey(i)||(i=i.child(""));const o=new z(new T(i),0);let a=new H(x);return this.ds.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(u.ls)),!0)},o),g.resolve(this.gs(a))}gs(t){const n=[];return t.forEach(r=>{const s=this._s(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){P(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ds;return g.forEach(n.mutations,s=>{const i=new z(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.ds=r})}In(t){}containsKey(t,n){const r=new z(n,0),s=this.ds.firstAfterOrEqual(r);return g.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}ys(t,n){return this.ws(t)}ws(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}_s(t){const n=this.ws(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(t){this.ps=t,this.docs=new K(T.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ps(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return g.resolve(r?r.document.mutableCopy():Q.newInvalidDocument(n))}getEntries(t,n){let r=_t();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Q.newInvalidDocument(s))}),g.resolve(r)}getAllFromCollection(t,n,r){let s=_t();const i=new T(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||qd($d(u),r)<=0||(s=s.insert(u.key,u.mutableCopy()))}return g.resolve(s)}getAllFromCollectionGroup(t,n,r,s){I()}Is(t,n){return g.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new rg(this)}getSize(t){return g.resolve(this.size)}}class rg extends Xp{constructor(t){super(),this.zn=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.zn.addEntry(t,s)):this.zn.removeEntry(r)}),g.waitFor(n)}getFromCache(t,n){return this.zn.getEntry(t,n)}getAllFromCache(t,n){return this.zn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(t){this.persistence=t,this.Ts=new Ce(n=>Di(n),Oi),this.lastRemoteSnapshotVersion=A.min(),this.highestTargetId=0,this.Es=0,this.As=new Ri,this.targetCount=0,this.Rs=ve.An()}forEachTarget(t,n){return this.Ts.forEach((r,s)=>n(s)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Es&&(this.Es=n),g.resolve()}vn(t){this.Ts.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Rs=new ve(n),this.highestTargetId=n),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,n){return this.vn(n),this.targetCount+=1,g.resolve()}updateTargetData(t,n){return this.vn(n),g.resolve()}removeTargetData(t,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),g.waitFor(i).next(()=>s)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,n){const r=this.Ts.get(n)||null;return g.resolve(r)}addMatchingKeys(t,n,r){return this.As.ss(n,r),g.resolve()}removeMatchingKeys(t,n,r){this.As.os(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),g.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.As.us(n),g.resolve()}getMatchingKeysForTargetId(t,n){const r=this.As.hs(n);return g.resolve(r)}containsKey(t,n){return g.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(t,n){this.bs={},this.overlays={},this.Ps=new Ai(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new sg(this),this.indexManager=new Wp,this.remoteDocumentCache=function(r){return new ng(r)}(r=>this.referenceDelegate.Ss(r)),this.wt=new zp(n),this.Ds=new Zp(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new tg,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.bs[t.toKey()];return r||(r=new eg(n,this.referenceDelegate),this.bs[t.toKey()]=r),r}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,n,r){v("MemoryPersistence","Starting transaction:",t);const s=new og(this.Ps.next());return this.referenceDelegate.Cs(),r(s).next(i=>this.referenceDelegate.xs(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ns(t,n){return g.or(Object.values(this.bs).map(r=>()=>r.containsKey(t,n)))}}class og extends Kd{constructor(t){super(),this.currentSequenceNumber=t}}class Mi{constructor(t){this.persistence=t,this.ks=new Ri,this.Os=null}static Ms(t){return new Mi(t)}get Fs(){if(this.Os)return this.Os;throw I()}addReference(t,n,r){return this.ks.addReference(r,n),this.Fs.delete(r.toString()),g.resolve()}removeReference(t,n,r){return this.ks.removeReference(r,n),this.Fs.add(r.toString()),g.resolve()}markPotentiallyOrphaned(t,n){return this.Fs.add(n.toString()),g.resolve()}removeTarget(t,n){this.ks.us(n.targetId).forEach(s=>this.Fs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Fs.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Cs(){this.Os=new Set}xs(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Fs,r=>{const s=T.fromPath(r);return this.$s(t,s).next(i=>{i||n.removeEntry(s,A.min())})}).next(()=>(this.Os=null,n.apply(t)))}updateLimboDocument(t,n){return this.$s(t,n).next(r=>{r?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(t){return 0}$s(t,n){return g.or([()=>g.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ns(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.Pi=r,this.vi=s}static Vi(t,n){let r=D(),s=D();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Pi(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(){this.Si=!1}initialize(t,n){this.Di=t,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(t,n,r,s){return this.Ci(t,n).next(i=>i||this.xi(t,n,s,r)).next(i=>i||this.Ni(t,n))}Ci(t,n){return g.resolve(null)}xi(t,n,r,s){return ap(n)||s.isEqual(A.min())?this.Ni(t,n):this.Di.getDocuments(t,r).next(i=>{const o=this.ki(n,i);return this.Oi(n,o,r,s)?this.Ni(t,n):(Bo()<=k.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ps(n)),this.Mi(t,o,n,jd(s,-1)))})}ki(t,n){let r=new H(lc(t));return n.forEach((s,i)=>{Ni(t,i)&&(r=r.add(i))}),r}Oi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ni(t,n){return Bo()<=k.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",Ps(n)),this.Di.getDocumentsMatchingQuery(t,n,Rt.min())}Mi(t,n,r,s){return this.Di.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(t,n,r,s){this.persistence=t,this.Fi=n,this.wt=s,this.$i=new K(x),this.Bi=new Ce(i=>Di(i),Oi),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(r)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Jp(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.$i))}}function cg(e,t,n,r){return new ug(e,t,n,r)}async function xc(e,t){const n=C(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.qi(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let u=D();for(const c of s){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of i){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ki:c,removedBatchIds:o,addedBatchIds:a}))})})}function lg(e,t){const n=C(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,u,c){const l=u.batch,h=l.keys();let f=g.resolve();return h.forEach(p=>{f=f.next(()=>c.getEntry(a,p)).next(m=>{const w=u.docVersions.get(p);P(w!==null),m.version.compareTo(w)<0&&(l.applyToRemoteDocument(m,u),m.isValidDocument()&&(m.setReadTime(u.commitVersion),c.addEntry(m)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=D();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function Lc(e){const t=C(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Vs.getLastRemoteSnapshotVersion(n))}function hg(e,t){const n=C(e),r=t.snapshotVersion;let s=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});s=n.$i;const a=[];t.targetChanges.forEach((l,h)=>{const f=s.get(h);if(!f)return;a.push(n.Vs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(i,l.addedDocuments,h)));let p=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.has(h)?p=p.withResumeToken(J.EMPTY_BYTE_STRING,A.min()).withLastLimboFreeSnapshotVersion(A.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,r)),s=s.insert(h,p),function(m,w,E){return m.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(f,p,l)&&a.push(n.Vs.updateTargetData(i,p))});let u=_t(),c=D();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(fg(i,o,t.documentUpdates).next(l=>{u=l.Gi,c=l.Qi})),!r.isEqual(A.min())){const l=n.Vs.getLastRemoteSnapshotVersion(i).next(h=>n.Vs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return g.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.$i=s,i))}function fg(e,t,n){let r=D(),s=D();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=_t();return n.forEach((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(A.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Gi:o,Qi:s}})}function dg(e,t){const n=C(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function pg(e,t){const n=C(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Vs.getTargetData(r,t).next(i=>i?(s=i,g.resolve(s)):n.Vs.allocateTargetId(r).next(o=>(s=new Wt(t,o,0,r.currentSequenceNumber),n.Vs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.$i.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.$i=n.$i.insert(r.targetId,r),n.Bi.set(t,r.targetId)),r})}async function Us(e,t,n){const r=C(e),s=r.$i.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!gn(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.$i=r.$i.remove(t),r.Bi.delete(s.target)}function ra(e,t,n){const r=C(e);let s=A.min(),i=D();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,c){const l=C(a),h=l.Bi.get(c);return h!==void 0?g.resolve(l.$i.get(h)):l.Vs.getTargetData(u,c)}(r,o,te(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>r.Fi.getDocumentsMatchingQuery(o,t,n?s:A.min(),n?i:D())).next(a=>(gg(r,lp(t),a),{documents:a,ji:i})))}function gg(e,t,n){let r=A.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.Li.set(t,r)}class sa{constructor(){this.activeTargetIds=Ic()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class mg{constructor(){this.Fr=new sa,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,n,r){this.$r[t]=n}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new sa,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{Br(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.so=n+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,n,r,s,i){const o=this.oo(t,n);v("RestConnection","Sending: ",o,r);const a={};return this.uo(a,s,i),this.co(t,o,a,r).then(u=>(v("RestConnection","Received: ",u),u),u=>{throw Uo("RestConnection",`${t} failed with error: `,u,"url: ",o,"request:",r),u})}ao(t,n,r,s,i){return this.ro(t,n,r,s,i)}uo(t,n,r){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ie,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>t[i]=s),r&&r.headers.forEach((s,i)=>t[i]=s)}oo(t,n){const r=vg[t];return`${this.so}/v1/${n}:${r}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,n,r,s){return new Promise((i,o)=>{const a=new kd;a.listenOnce(Dd.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case os.NO_ERROR:const c=a.getResponseJson();v("Connection","XHR received:",JSON.stringify(c)),i(c);break;case os.TIMEOUT:v("Connection",'RPC "'+t+'" timed out'),o(new b(d.DEADLINE_EXCEEDED,"Request time out"));break;case os.HTTP_ERROR:const l=a.getStatus();if(v("Connection",'RPC "'+t+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(p){const m=p.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(m)>=0?m:d.UNKNOWN}(h.status);o(new b(f,h.message))}else o(new b(d.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new b(d.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{v("Connection",'RPC "'+t+'" completed.')}});const u=JSON.stringify(s);a.send(n,"POST",u,r,15)})}ho(t,n,r){const s=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Ad(),o=_d(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Nd({})),this.uo(a.initMessageHeaders,n,r),ih()||ah()||uh()||ch()||lh()||oh()||(a.httpHeadersOverwriteParam="$httpHeaders");const u=s.join("");v("Connection","Creating WebChannel: "+u,a);const c=i.createWebChannel(u,a);let l=!1,h=!1;const f=new wg({jr:m=>{h?v("Connection","Not sending because WebChannel is closed:",m):(l||(v("Connection","Opening WebChannel transport."),c.open(),l=!0),v("Connection","WebChannel sending:",m),c.send(m))},Wr:()=>c.close()}),p=(m,w,E)=>{m.listen(w,L=>{try{E(L)}catch(M){setTimeout(()=>{throw M},0)}})};return p(c,kn.EventType.OPEN,()=>{h||v("Connection","WebChannel transport opened.")}),p(c,kn.EventType.CLOSE,()=>{h||(h=!0,v("Connection","WebChannel transport closed"),f.eo())}),p(c,kn.EventType.ERROR,m=>{h||(h=!0,Uo("Connection","WebChannel transport errored:",m),f.eo(new b(d.UNAVAILABLE,"The operation could not be completed")))}),p(c,kn.EventType.MESSAGE,m=>{var w;if(!h){const E=m.data[0];P(!!E);const L=E,M=L.error||((w=L[0])===null||w===void 0?void 0:w.error);if(M){v("Connection","WebChannel received error:",M);const N=M.status;let at=function(Ut){const jt=U[Ut];if(jt!==void 0)return Ec(jt)}(N),R=M.message;at===void 0&&(at=d.INTERNAL,R="Unknown error status: "+N+" with message "+M.message),h=!0,f.eo(new b(at,R)),c.close()}else v("Connection","WebChannel received:",E),f.no(E)}}),p(o,Od.STAT_EVENT,m=>{m.stat===Fo.PROXY?v("Connection","Detected buffering proxy"):m.stat===Fo.NOPROXY&&v("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.Zr()},0),f}}function us(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(e){return new Op(e,!0)}class Rc{constructor(t,n,r=1e3,s=1.5,i=6e4){this.js=t,this.timerId=n,this.lo=r,this.fo=s,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),s=Math.max(0,n-r);s>0&&v("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,s,()=>(this.yo=Date.now(),t())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t,n,r,s,i,o,a,u){this.js=t,this.Ao=r,this.Ro=s,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Rc(t,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,t!==4?this.So.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(Lt(n.toString()),Lt("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Po===n&&this.Uo(r,s)},r=>{t(()=>{const s=new b(d.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(s)})})}Uo(t,n){const r=this.Lo(this.Po);this.stream=this.Ko(t,n),this.stream.zr(()=>{r(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(s=>{r(()=>this.qo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(t){return v("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return n=>{this.js.enqueueAndForget(()=>this.Po===t?n():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bg extends Mc{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.wt=i}Ko(t,n){return this.bo.ho("Listen",t,n)}onMessage(t){this.So.reset();const n=xp(this.wt,t),r=function(s){if(!("targetChange"in s))return A.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?A.min():i.readTime?It(i.readTime):A.min()}(t);return this.listener.Go(n,r)}Qo(t){const n={};n.database=Bs(this.wt),n.addTarget=function(s,i){let o;const a=i.target;return o=Ms(a)?{documents:Mp(s,a)}:{query:Pp(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=_c(s,i.resumeToken):i.snapshotVersion.compareTo(A.min())>0&&(o.readTime=nr(s,i.snapshotVersion.toTimestamp())),o}(this.wt,t);const r=Vp(this.wt,t);r&&(n.labels=r),this.Mo(n)}jo(t){const n={};n.database=Bs(this.wt),n.removeTarget=t,this.Mo(n)}}class Tg extends Mc{constructor(t,n,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,n){return this.bo.ho("Write",t,n)}onMessage(t){if(P(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const n=Rp(t.writeResults,t.commitTime),r=It(t.commitTime);return this.listener.Jo(r,n)}return P(!t.writeResults||t.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=Bs(this.wt),this.Mo(t)}Ho(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>Lp(this.wt,r))};this.Mo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.bo=r,this.wt=s,this.Zo=!1}tu(){if(this.Zo)throw new b(d.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.bo.ro(t,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new b(d.UNKNOWN,s.toString())})}ao(t,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.bo.ao(t,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new b(d.UNKNOWN,s.toString())})}terminate(){this.Zo=!0}}class Ig{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(t){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,t==="Online"&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Lt(n),this.su=!1):v("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{r.enqueueAndForget(async()=>{re(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=C(a);u.lu.add(4),await wn(u),u._u.set("Unknown"),u.lu.delete(4),await Lr(u)}(this))})}),this._u=new Ig(r,s)}}async function Lr(e){if(re(e))for(const t of e.fu)await t(!0)}async function wn(e){for(const t of e.fu)await t(!1)}function Pc(e,t){const n=C(e);n.hu.has(t.targetId)||(n.hu.set(t.targetId,t),Bi(n)?Vi(n):Ae(n).Co()&&Fi(n,t))}function Fc(e,t){const n=C(e),r=Ae(n);n.hu.delete(t),r.Co()&&Vc(n,t),n.hu.size===0&&(r.Co()?r.ko():re(n)&&n._u.set("Unknown"))}function Fi(e,t){e.wu.Nt(t.targetId),Ae(e).Qo(t)}function Vc(e,t){e.wu.Nt(t),Ae(e).jo(t)}function Vi(e){e.wu=new Ap({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),te:t=>e.hu.get(t)||null}),Ae(e).start(),e._u.iu()}function Bi(e){return re(e)&&!Ae(e).Do()&&e.hu.size>0}function re(e){return C(e).lu.size===0}function Bc(e){e.wu=void 0}async function Ag(e){e.hu.forEach((t,n)=>{Fi(e,t)})}async function _g(e,t){Bc(e),Bi(e)?(e._u.uu(t),Vi(e)):e._u.set("Unknown")}async function Dg(e,t,n){if(e._u.set("Online"),t instanceof Ac&&t.state===2&&t.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.hu.delete(o),r.wu.removeTarget(o))}(e,t)}catch(r){v("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await rr(e,r)}else if(t instanceof Bn?e.wu.Ut(t):t instanceof Cc?e.wu.zt(t):e.wu.Gt(t),!n.isEqual(A.min()))try{const r=await Lc(e.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.wu.Yt(i);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.hu.get(u);c&&s.hu.set(u,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const u=s.hu.get(a);if(!u)return;s.hu.set(a,u.withResumeToken(J.EMPTY_BYTE_STRING,u.snapshotVersion)),Vc(s,a);const c=new Wt(u.target,a,1,u.sequenceNumber);Fi(s,c)}),s.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(r){v("RemoteStore","Failed to raise snapshot:",r),await rr(e,r)}}async function rr(e,t,n){if(!gn(t))throw t;e.lu.add(1),await wn(e),e._u.set("Offline"),n||(n=()=>Lc(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await n(),e.lu.delete(1),await Lr(e)})}function Uc(e,t){return t().catch(n=>rr(e,n,t))}async function Rr(e){const t=C(e),n=Pt(t);let r=t.au.length>0?t.au[t.au.length-1].batchId:-1;for(;Og(t);)try{const s=await dg(t.localStore,r);if(s===null){t.au.length===0&&n.ko();break}r=s.batchId,Ng(t,s)}catch(s){await rr(t,s)}jc(t)&&$c(t)}function Og(e){return re(e)&&e.au.length<10}function Ng(e,t){e.au.push(t);const n=Pt(e);n.Co()&&n.zo&&n.Ho(t.mutations)}function jc(e){return re(e)&&!Pt(e).Do()&&e.au.length>0}function $c(e){Pt(e).start()}async function kg(e){Pt(e).Xo()}async function xg(e){const t=Pt(e);for(const n of e.au)t.Ho(n.mutations)}async function Lg(e,t,n){const r=e.au.shift(),s=Li.from(r,t,n);await Uc(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Rr(e)}async function Rg(e,t){t&&Pt(e).zo&&await async function(n,r){if(s=r.code,bp(s)&&s!==d.ABORTED){const i=n.au.shift();Pt(n).No(),await Uc(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Rr(n)}var s}(e,t),jc(e)&&$c(e)}async function oa(e,t){const n=C(e);n.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const r=re(n);n.lu.add(3),await wn(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.lu.delete(3),await Lr(n)}async function Mg(e,t){const n=C(e);t?(n.lu.delete(2),await Lr(n)):t||(n.lu.add(2),await wn(n),n._u.set("Unknown"))}function Ae(e){return e.mu||(e.mu=function(t,n,r){const s=C(t);return s.tu(),new bg(n,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,r)}(e.datastore,e.asyncQueue,{zr:Ag.bind(null,e),Jr:_g.bind(null,e),Go:Dg.bind(null,e)}),e.fu.push(async t=>{t?(e.mu.No(),Bi(e)?Vi(e):e._u.set("Unknown")):(await e.mu.stop(),Bc(e))})),e.mu}function Pt(e){return e.gu||(e.gu=function(t,n,r){const s=C(t);return s.tu(),new Tg(n,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,r)}(e.datastore,e.asyncQueue,{zr:kg.bind(null,e),Jr:Rg.bind(null,e),Yo:xg.bind(null,e),Jo:Lg.bind(null,e)}),e.fu.push(async t=>{t?(e.gu.No(),await Rr(e)):(await e.gu.stop(),e.au.length>0&&(v("RemoteStore",`Stopping write stream with ${e.au.length} pending writes`),e.au=[]))})),e.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new St,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new Ui(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ji(e,t){if(Lt("AsyncQueue",`${t}: ${e}`),gn(e))return new b(d.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t){this.comparator=t?(n,r)=>t(n,r)||T.comparator(n.key,r.key):(n,r)=>T.comparator(n.key,r.key),this.keyedMap=Le(),this.sortedSet=new K(this.comparator)}static emptySet(t){return new he(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof he)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new he;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(){this.yu=new K(T.comparator)}track(t){const n=t.doc.key,r=this.yu.get(n);r?t.type!==0&&r.type===3?this.yu=this.yu.insert(n,t):t.type===3&&r.type!==1?this.yu=this.yu.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.yu=this.yu.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.yu=this.yu.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.yu=this.yu.remove(n):t.type===1&&r.type===2?this.yu=this.yu.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.yu=this.yu.insert(n,{type:2,doc:t.doc}):I():this.yu=this.yu.insert(n,t)}pu(){const t=[];return this.yu.inorderTraversal((n,r)=>{t.push(r)}),t}}class we{constructor(t,n,r,s,i,o,a,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(t,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new we(t,n,he.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Dr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(){this.Iu=void 0,this.listeners=[]}}class Fg{constructor(){this.queries=new Ce(t=>cc(t),Dr),this.onlineState="Unknown",this.Tu=new Set}}async function $i(e,t){const n=C(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Pg),s)try{i.Iu=await n.onListen(r)}catch(o){const a=ji(o,`Initialization of query '${Ps(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,i),i.listeners.push(t),t.Eu(n.onlineState),i.Iu&&t.Au(i.Iu)&&Hi(n)}async function qi(e,t){const n=C(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Vg(e,t){const n=C(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Au(s)&&(r=!0);o.Iu=s}}r&&Hi(n)}function Bg(e,t,n){const r=C(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function Hi(e){e.Tu.forEach(t=>{t.next()})}class Ki{constructor(t,n,r){this.query=t,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new we(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(t)&&(this.Ru.next(t),n=!0):this.Vu(t,this.onlineState)&&(this.Su(t),n=!0),this.Pu=t,n}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,t)&&(this.Su(this.Pu),n=!0),n}Vu(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.Du||!r)&&(!t.docs.isEmpty()||n==="Offline")}vu(t){if(t.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(t){t=we.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(t){this.key=t}}class Hc{constructor(t){this.key=t}}class Ug{constructor(t,n){this.query=t,this.Fu=n,this.$u=null,this.current=!1,this.Bu=D(),this.mutatedKeys=D(),this.Lu=lc(t),this.Uu=new he(this.Lu)}get qu(){return this.Fu}Ku(t,n){const r=n?n.Gu:new aa,s=n?n.Uu:this.Uu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((l,h)=>{const f=s.get(l),p=Ni(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),w=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;f&&p?f.data.isEqual(p.data)?m!==w&&(r.track({type:3,doc:p}),E=!0):this.Qu(f,p)||(r.track({type:2,doc:p}),E=!0,(u&&this.Lu(p,u)>0||c&&this.Lu(p,c)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),E=!0):f&&!p&&(r.track({type:1,doc:f}),E=!0,(u||c)&&(a=!0)),E&&(p?(o=o.add(p),i=w?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{Uu:o,Gu:r,Oi:a,mutatedKeys:i}}Qu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const s=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const i=t.Gu.pu();i.sort((c,l)=>function(h,f){const p=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return p(h)-p(f)}(c.type,l.type)||this.Lu(c.doc,l.doc)),this.ju(r);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,u=a!==this.$u;return this.$u=a,i.length!==0||u?{snapshot:new we(this.query,t.Uu,s,i,t.mutatedKeys,a===0,u,!1),zu:o}:{zu:o}}Eu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new aa,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=D(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const n=[];return t.forEach(r=>{this.Bu.has(r)||n.push(new Hc(r))}),this.Bu.forEach(r=>{t.has(r)||n.push(new qc(r))}),n}Ju(t){this.Fu=t.ji,this.Bu=D();const n=this.Ku(t.documents);return this.applyChanges(n,!0)}Yu(){return we.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class jg{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class $g{constructor(t){this.key=t,this.Xu=!1}}class qg{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new Ce(a=>cc(a),Dr),this.ec=new Map,this.nc=new Set,this.sc=new K(T.comparator),this.ic=new Map,this.rc=new Ri,this.oc={},this.uc=new Map,this.cc=ve.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function Hg(e,t){const n=tm(e);let r,s;const i=n.tc.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Yu();else{const o=await pg(n.localStore,te(t));n.isPrimaryClient&&Pc(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Kg(n,t,r,a==="current")}return s}async function Kg(e,t,n,r){e.hc=(l,h,f)=>async function(p,m,w,E){let L=m.view.Ku(w);L.Oi&&(L=await ra(p.localStore,m.query,!1).then(({documents:at})=>m.view.Ku(at,L)));const M=E&&E.targetChanges.get(m.targetId),N=m.view.applyChanges(L,p.isPrimaryClient,M);return ca(p,m.targetId,N.zu),N.snapshot}(e,l,h,f);const s=await ra(e.localStore,t,!0),i=new Ug(t,s.ji),o=i.Ku(s.documents),a=vn.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline"),u=i.applyChanges(o,e.isPrimaryClient,a);ca(e,n,u.zu);const c=new jg(t,n,i);return e.tc.set(t,c),e.ec.has(n)?e.ec.get(n).push(t):e.ec.set(n,[t]),u.snapshot}async function zg(e,t){const n=C(e),r=n.tc.get(t),s=n.ec.get(r.targetId);if(s.length>1)return n.ec.set(r.targetId,s.filter(i=>!Dr(i,t))),void n.tc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Us(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Fc(n.remoteStore,r.targetId),js(n,r.targetId)}).catch(pn)):(js(n,r.targetId),await Us(n.localStore,r.targetId,!0))}async function Gg(e,t,n){const r=em(e);try{const s=await function(i,o){const a=C(i),u=q.now(),c=o.reduce((f,p)=>f.add(p.key),D());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=_t(),m=D();return a.Ui.getEntries(f,c).next(w=>{p=w,p.forEach((E,L)=>{L.isValidDocument()||(m=m.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,p)).next(w=>{l=w;const E=[];for(const L of o){const M=vp(L,l.get(L.key).overlayedDocument);M!=null&&E.push(new Bt(L.key,M,ic(M.value.mapValue),mt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,u,E,o)}).next(w=>{h=w;const E=w.applyToLocalDocumentSet(l,m);return a.documentOverlayCache.saveOverlays(f,w.batchId,E)})}).then(()=>({batchId:h.batchId,changes:Tc(l)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let u=i.oc[i.currentUser.toKey()];u||(u=new K(x)),u=u.insert(o,a),i.oc[i.currentUser.toKey()]=u}(r,s.batchId,n),await En(r,s.changes),await Rr(r.remoteStore)}catch(s){const i=ji(s,"Failed to persist write");n.reject(i)}}async function Kc(e,t){const n=C(e);try{const r=await hg(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.ic.get(i);o&&(P(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Xu=!0:s.modifiedDocuments.size>0?P(o.Xu):s.removedDocuments.size>0&&(P(o.Xu),o.Xu=!1))}),await En(n,r,t)}catch(r){await pn(r)}}function ua(e,t,n){const r=C(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.tc.forEach((i,o)=>{const a=o.view.Eu(t);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=C(i);a.onlineState=o;let u=!1;a.queries.forEach((c,l)=>{for(const h of l.listeners)h.Eu(o)&&(u=!0)}),u&&Hi(a)}(r.eventManager,t),s.length&&r.Zu.Go(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Wg(e,t,n){const r=C(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.ic.get(t),i=s&&s.key;if(i){let o=new K(T.comparator);o=o.insert(i,Q.newNoDocument(i,A.min()));const a=D().add(i),u=new kr(A.min(),new Map,new H(x),o,a);await Kc(r,u),r.sc=r.sc.remove(i),r.ic.delete(t),zi(r)}else await Us(r.localStore,t,!1).then(()=>js(r,t,n)).catch(pn)}async function Qg(e,t){const n=C(e),r=t.batch.batchId;try{const s=await lg(n.localStore,t);Gc(n,r,null),zc(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await En(n,s)}catch(s){await pn(s)}}async function Xg(e,t,n){const r=C(e);try{const s=await function(i,o){const a=C(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return a.mutationQueue.lookupMutationBatch(u,o).next(l=>(P(l!==null),c=l.keys(),a.mutationQueue.removeMutationBatch(u,l))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>a.localDocuments.getDocuments(u,c))})}(r.localStore,t);Gc(r,t,n),zc(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await En(r,s)}catch(s){await pn(s)}}function zc(e,t){(e.uc.get(t)||[]).forEach(n=>{n.resolve()}),e.uc.delete(t)}function Gc(e,t,n){const r=C(e);let s=r.oc[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.oc[r.currentUser.toKey()]=s}}function js(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ec.get(t))e.tc.delete(r),n&&e.Zu.lc(r,n);e.ec.delete(t),e.isPrimaryClient&&e.rc.us(t).forEach(r=>{e.rc.containsKey(r)||Wc(e,r)})}function Wc(e,t){e.nc.delete(t.path.canonicalString());const n=e.sc.get(t);n!==null&&(Fc(e.remoteStore,n),e.sc=e.sc.remove(t),e.ic.delete(n),zi(e))}function ca(e,t,n){for(const r of n)r instanceof qc?(e.rc.addReference(r.key,t),Yg(e,r)):r instanceof Hc?(v("SyncEngine","Document no longer in limbo: "+r.key),e.rc.removeReference(r.key,t),e.rc.containsKey(r.key)||Wc(e,r.key)):I()}function Yg(e,t){const n=t.key,r=n.path.canonicalString();e.sc.get(n)||e.nc.has(r)||(v("SyncEngine","New document in limbo: "+n),e.nc.add(r),zi(e))}function zi(e){for(;e.nc.size>0&&e.sc.size<e.maxConcurrentLimboResolutions;){const t=e.nc.values().next().value;e.nc.delete(t);const n=new T(V.fromString(t)),r=e.cc.next();e.ic.set(r,new $g(n)),e.sc=e.sc.insert(n,r),Pc(e.remoteStore,new Wt(te(_r(n.path)),r,2,Ai.ot))}}async function En(e,t,n){const r=C(e),s=[],i=[],o=[];r.tc.isEmpty()||(r.tc.forEach((a,u)=>{o.push(r.hc(u,t,n).then(c=>{if(c){r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c.fromCache?"not-current":"current"),s.push(c);const l=Pi.Vi(u.targetId,c);i.push(l)}}))}),await Promise.all(o),r.Zu.Go(s),await async function(a,u){const c=C(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>g.forEach(u,h=>g.forEach(h.Pi,f=>c.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>g.forEach(h.vi,f=>c.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!gn(l))throw l;v("LocalStore","Failed to update sequence numbers: "+l)}for(const l of u){const h=l.targetId;if(!l.fromCache){const f=c.$i.get(h),p=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(p);c.$i=c.$i.insert(h,m)}}}(r.localStore,i))}async function Jg(e,t){const n=C(e);if(!n.currentUser.isEqual(t)){v("SyncEngine","User change. New user:",t.toKey());const r=await xc(n.localStore,t);n.currentUser=t,function(s,i){s.uc.forEach(o=>{o.forEach(a=>{a.reject(new b(d.CANCELLED,i))})}),s.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await En(n,r.Ki)}}function Zg(e,t){const n=C(e),r=n.ic.get(t);if(r&&r.Xu)return D().add(r.key);{let s=D();const i=n.ec.get(t);if(!i)return s;for(const o of i){const a=n.tc.get(o);s=s.unionWith(a.view.qu)}return s}}function tm(e){const t=C(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Kc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Wg.bind(null,t),t.Zu.Go=Vg.bind(null,t.eventManager),t.Zu.lc=Bg.bind(null,t.eventManager),t}function em(e){const t=C(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Qg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Xg.bind(null,t),t}class nm{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=xr(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,n){return null}gc(t,n){return null}wc(t){return cg(this.persistence,new ag,t.initialUser,this.wt)}_c(t){return new ig(Mi.Ms,this.wt)}dc(t){return new mg}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class rm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ua(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Jg.bind(null,this.syncEngine),await Mg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Fg}createDatastore(t){const n=xr(t.databaseInfo.databaseId),r=(s=t.databaseInfo,new Eg(s));var s;return function(i,o,a,u){return new Sg(i,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return n=this.localStore,r=this.datastore,s=t.asyncQueue,i=a=>ua(this.syncEngine,a,0),o=ia.V()?new ia:new yg,new Cg(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(t,n){return function(r,s,i,o,a,u,c){const l=new qg(r,s,i,o,a,u);return c&&(l.ac=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=C(t);v("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await wn(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ic(this.observer.next,t)}error(t){this.observer.error?this.Ic(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Tc(){this.muted=!0}Ic(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ct.UNAUTHENTICATED,this.clientId=ec.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{v("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(v("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new b(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new St;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=ji(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function im(e,t){e.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await xc(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function om(e,t){e.asyncQueue.verifyOperationInProgress();const n=await am(e);v("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(s=>oa(t.remoteStore,s)),e.setAppCheckTokenChangeListener((s,i)=>oa(t.remoteStore,i)),e.onlineComponents=t}async function am(e){return e.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await im(e,new nm)),e.offlineComponents}async function Qc(e){return e.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await om(e,new rm)),e.onlineComponents}function um(e){return Qc(e).then(t=>t.syncEngine)}async function sr(e){const t=await Qc(e),n=t.eventManager;return n.onListen=Hg.bind(null,t.syncEngine),n.onUnlisten=zg.bind(null,t.syncEngine),n}function cm(e,t,n={}){const r=new St;return e.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,u){const c=new Gi({next:h=>{i.enqueueAndForget(()=>qi(s,l));const f=h.docs.has(o);!f&&h.fromCache?u.reject(new b(d.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?u.reject(new b(d.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),l=new Ki(_r(o.path),c,{includeMetadataChanges:!0,Du:!0});return $i(s,l)}(await sr(e),e.asyncQueue,t,n,r)),r.promise}function lm(e,t,n={}){const r=new St;return e.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,u){const c=new Gi({next:h=>{i.enqueueAndForget(()=>qi(s,l)),h.fromCache&&a.source==="server"?u.reject(new b(d.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),l=new Ki(o,c,{includeMetadataChanges:!0,Du:!0});return $i(s,l)}(await sr(e),e.asyncQueue,t,n,r)),r.promise}const la=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(e,t,n){if(!n)throw new b(d.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function hm(e,t,n,r){if(t===!0&&r===!0)throw new b(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function ha(e){if(!T.isDocumentKey(e))throw new b(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function fa(e){if(T.isDocumentKey(e))throw new b(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Wi(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function ft(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new b(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wi(e);throw new b(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new b(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new b(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,hm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(t,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new da({}),this._settingsFrozen=!1,t instanceof ge?this._databaseId=t:(this._app=t,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new b(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ge(s.options.projectId)}(t))}get app(){if(!this._app)throw new b(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new b(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new da(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Ld;switch(n.type){case"gapi":const r=n.client;return P(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new Pd(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new b(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=la.get(t);n&&(v("ComponentProvider","Removing Datastore"),la.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ot(this.firestore,t,this._key)}}class _e{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new _e(this.firestore,t,this._query)}}class kt extends _e{constructor(t,n,r){super(t,n,_r(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ot(this.firestore,null,new T(t))}withConverter(t){return new kt(this.firestore,t,this._path)}}function wv(e,t,...n){if(e=Ct(e),Xc("collection","path",t),e instanceof Qi){const r=V.fromString(t,...n);return fa(r),new kt(e,null,r)}{if(!(e instanceof ot||e instanceof kt))throw new b(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(V.fromString(t,...n));return fa(r),new kt(e.firestore,null,r)}}function fm(e,t,...n){if(e=Ct(e),arguments.length===1&&(t=ec.I()),Xc("doc","path",t),e instanceof Qi){const r=V.fromString(t,...n);return ha(r),new ot(e,null,new T(r))}{if(!(e instanceof ot||e instanceof kt))throw new b(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(V.fromString(t,...n));return ha(r),new ot(e.firestore,e instanceof kt?e.converter:null,new T(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Rc(this,"async_queue_retry"),this.Kc=()=>{const n=us();n&&v("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const t=us();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const n=us();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new St;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Mc.push(t),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(t){if(!gn(t))throw t;v("AsyncQueue","Operation failed with retryable error: "+t)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(t){const n=this.Oc.then(()=>(this.Lc=!0,t().catch(r=>{this.Bc=r,this.Lc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw Lt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Lc=!1,r))));return this.Oc=n,n}enqueueAfterDelay(t,n,r){this.Gc(),this.qc.indexOf(t)>-1&&(n=0);const s=Ui.createAndSchedule(this,t,n,r,i=>this.Wc(i));return this.$c.push(s),s}Gc(){this.Bc&&I()}verifyOperationInProgress(){}async zc(){let t;do t=this.Oc,await t;while(t!==this.Oc)}Hc(t){for(const n of this.$c)if(n.timerId===t)return!0;return!1}Jc(t){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.zc()})}Yc(t){this.qc.push(t)}Wc(t){const n=this.$c.indexOf(t);this.$c.splice(n,1)}}function pa(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const r=t;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1}(e,["next","error","complete"])}class Dt extends Qi{constructor(t,n,r){super(t,n,r),this.type="firestore",this._queue=new dm,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Yc(this),this._firestoreClient.terminate()}}function pm(e=mf()){return hf(e,"firestore").getImmediate()}function Mr(e){return e._firestoreClient||Yc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Yc(e){var t;const n=e._freezeSettings(),r=function(s,i,o,a){return new Gd(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new sm(e._authCredentials,e._appCheckCredentials,e._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new b(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ee(J.fromBase64String(t))}catch(n){throw new b(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ee(J.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new b(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new b(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return x(this._lat,t._lat)||x(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm=/^__.*__$/;class mm{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Bt(t,this.data,this.fieldMask,n,this.fieldTransforms):new yn(t,this.data,n,this.fieldTransforms)}}class Jc{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new Bt(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Zc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class Fr{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.wt=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new Fr(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.ta({path:r,na:!1});return s.sa(t),s}ia(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.ta({path:r,na:!1});return s.Xc(),s}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return ir(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(t.length===0)throw this.oa("Document fields must not be empty");if(Zc(this.Zc)&&gm.test(t))throw this.oa('Document fields cannot begin and end with "__"')}}class ym{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.wt=r||xr(t)}aa(t,n,r,s=!1){return new Fr({Zc:t,methodName:n,ca:r,path:tt.emptyPath(),na:!1,ua:s},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function Yi(e){const t=e._freezeSettings(),n=xr(e._databaseId);return new ym(e._databaseId,!!t.ignoreUndefinedProperties,n)}function tl(e,t,n,r,s,i={}){const o=e.aa(i.merge||i.mergeFields?2:0,t,n,s);Zi("Data must be an object, but it was:",o,r);const a=el(r,o);let u,c;if(i.merge)u=new gt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=$s(t,h,n);if(!o.contains(f))throw new b(d.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);rl(l,f)||l.push(f)}u=new gt(l),c=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,c=o.fieldTransforms;return new mm(new lt(a),u,c)}class Vr extends bn{_toFieldTransform(t){if(t.Zc!==2)throw t.Zc===1?t.oa(`${this._methodName}() can only appear at the top level of your update data`):t.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Vr}}function vm(e,t,n){return new Fr({Zc:3,ca:t.settings.ca,methodName:e._methodName,na:n},t.databaseId,t.wt,t.ignoreUndefinedProperties)}class Ji extends bn{_toFieldTransform(t){return new yc(t.path,new Ze)}isEqual(t){return t instanceof Ji}}class wm extends bn{constructor(t,n){super(t),this.ha=n}_toFieldTransform(t){const n=vm(this,t,!0),r=this.ha.map(i=>Tn(i,n)),s=new ye(r);return new yc(t.path,s)}isEqual(t){return this===t}}function Em(e,t,n,r){const s=e.aa(1,t,n);Zi("Data must be an object, but it was:",s,r);const i=[],o=lt.empty();ne(r,(u,c)=>{const l=to(t,u,n);c=Ct(c);const h=s.ia(l);if(c instanceof Vr)i.push(l);else{const f=Tn(c,h);f!=null&&(i.push(l),o.set(l,f))}});const a=new gt(i);return new Jc(o,a,s.fieldTransforms)}function bm(e,t,n,r,s,i){const o=e.aa(1,t,n),a=[$s(t,r,n)],u=[s];if(i.length%2!=0)throw new b(d.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push($s(t,i[f])),u.push(i[f+1]);const c=[],l=lt.empty();for(let f=a.length-1;f>=0;--f)if(!rl(c,a[f])){const p=a[f];let m=u[f];m=Ct(m);const w=o.ia(p);if(m instanceof Vr)c.push(p);else{const E=Tn(m,w);E!=null&&(c.push(p),l.set(p,E))}}const h=new gt(c);return new Jc(l,h,o.fieldTransforms)}function Tn(e,t){if(nl(e=Ct(e)))return Zi("Unsupported field value:",t,e),el(e,t);if(e instanceof bn)return function(n,r){if(!Zc(r.Zc))throw r.oa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.oa(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.na&&t.Zc!==4)throw t.oa("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Tn(o,r.ra(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(e,t)}return function(n,r){if((n=Ct(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return fp(r.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=q.fromDate(n);return{timestampValue:nr(r.wt,s)}}if(n instanceof q){const s=new q(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:nr(r.wt,s)}}if(n instanceof Xi)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ee)return{bytesValue:_c(r.wt,n._byteString)};if(n instanceof ot){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:xi(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.oa(`Unsupported field value: ${Wi(n)}`)}(e,t)}function el(e,t){const n={};return nc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ne(e,(r,s)=>{const i=Tn(s,t.ea(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function nl(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof q||e instanceof Xi||e instanceof Ee||e instanceof ot||e instanceof bn)}function Zi(e,t,n){if(!nl(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Wi(n);throw r==="an object"?t.oa(e+" a custom object"):t.oa(e+" "+r)}}function $s(e,t,n){if((t=Ct(t))instanceof Pr)return t._internalPath;if(typeof t=="string")return to(e,t);throw ir("Field path arguments must be of type string or ",e,!1,void 0,n)}const Tm=new RegExp("[~\\*/\\[\\]]");function to(e,t,n){if(t.search(Tm)>=0)throw ir(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Pr(...t.split("."))._internalPath}catch{throw ir(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ir(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new b(d.INVALID_ARGUMENT,a+e+u)}function rl(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Sm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(eo("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Sm extends sl{data(){return super.data()}}function eo(e,t){return typeof t=="string"?to(e,t):t instanceof Pr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class il extends sl{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Un(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(eo("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Un extends il{data(t={}){return super.data(t)}}class ol{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new Re(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Un(this._firestore,this._userDataWriter,r.key,r,new Re(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new b(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Un(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Re(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Un(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Re(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,c=-1;return o.type!==0&&(u=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:Im(o.type),doc:a,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Im(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new b(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Cm{}function Ev(e,...t){for(const n of t)e=n._apply(e);return e}class Am extends Cm{constructor(t,n){super(),this.fa=t,this.wa=n,this.type="orderBy"}_apply(t){const n=function(r,s,i){if(r.startAt!==null)throw new b(d.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new b(d.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new le(s,i);return function(a,u){if(ac(a)===null){const c=uc(a);c!==null&&_m(a,c,u.field)}}(r,o),o}(t._query,this.fa,this.wa);return new _e(t.firestore,t.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new mn(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(t._query,n))}}function bv(e,t="asc"){const n=t,r=eo("orderBy",e);return new Am(r,n)}function _m(e,t,n){if(!n.isEqual(t))throw new b(d.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{convertValue(t,n="none"){switch(Zt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return j(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(pe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){const r={};return ne(t.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new Xi(j(t.latitude),j(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=sc(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Xe(t));default:return null}}convertTimestamp(t){const n=Mt(t);return new q(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=V.fromString(t);P(kc(r));const s=new ge(r.get(1),r.get(3)),i=new T(r.popFirst(5));return s.isEqual(n)||Lt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(e){e=ft(e,ot);const t=ft(e.firestore,Dt);return cm(Mr(t),e._key).then(n=>cl(t,e,n))}class no extends Dm{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ee(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function Sv(e){e=ft(e,_e);const t=ft(e.firestore,Dt),n=Mr(t),r=new no(t);return al(e._query),lm(n,e._query).then(s=>new ol(t,r,e,s))}function Iv(e,t,n){e=ft(e,ot);const r=ft(e.firestore,Dt),s=ul(e.converter,t,n);return Br(r,[tl(Yi(r),"setDoc",e._key,s,e.converter!==null,n).toMutation(e._key,mt.none())])}function Cv(e,t,n,...r){e=ft(e,ot);const s=ft(e.firestore,Dt),i=Yi(s);let o;return o=typeof(t=Ct(t))=="string"||t instanceof Pr?bm(i,"updateDoc",e._key,t,n,r):Em(i,"updateDoc",e._key,t),Br(s,[o.toMutation(e._key,mt.exists(!0))])}function Av(e){return Br(ft(e.firestore,Dt),[new ki(e._key,mt.none())])}function _v(e,t){const n=ft(e.firestore,Dt),r=fm(e),s=ul(e.converter,t);return Br(n,[tl(Yi(e.firestore),"addDoc",r._key,s,e.converter!==null,{}).toMutation(r._key,mt.exists(!1))]).then(()=>r)}function Dv(e,...t){var n,r,s;e=Ct(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||pa(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(pa(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let u,c,l;if(e instanceof ot)c=ft(e.firestore,Dt),l=_r(e._key.path),u={next:h=>{t[o]&&t[o](cl(c,e,h))},error:t[o+1],complete:t[o+2]};else{const h=ft(e,_e);c=ft(h.firestore,Dt),l=h._query;const f=new no(c);u={next:p=>{t[o]&&t[o](new ol(c,f,h,p))},error:t[o+1],complete:t[o+2]},al(e._query)}return function(h,f,p,m){const w=new Gi(m),E=new Ki(f,w,p);return h.asyncQueue.enqueueAndForget(async()=>$i(await sr(h),E)),()=>{w.Tc(),h.asyncQueue.enqueueAndForget(async()=>qi(await sr(h),E))}}(Mr(c),l,a,u)}function Br(e,t){return function(n,r){const s=new St;return n.asyncQueue.enqueueAndForget(async()=>Gg(await um(n),r,s)),s.promise}(Mr(e),t)}function cl(e,t,n){const r=n.docs.get(t._key),s=new no(e);return new il(e,s,t._key,r,new Re(n.hasPendingWrites,n.fromCache),t.converter)}function Om(){return new Ji("serverTimestamp")}function Ov(...e){return new wm("arrayUnion",e)}(function(e,t=!0){(function(n){Ie=n})(pf),qn(new $e("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new Dt(s,new Rd(n.getProvider("auth-internal")),new Vd(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:t},r),i._setSettings(r),i},"PUBLIC")),ue(Vo,"3.4.10",e),ue(Vo,"3.4.10","esm2017")})();var Nm="firebase",km="9.8.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ue(Nm,km,"app");const xm={apiKey:`${{}.FIREBASE_KEY}`,authDomain:"react-boards-b8dac.firebaseapp.com",projectId:"react-boards-b8dac",storageBucket:"react-boards-b8dac.appspot.com",messagingSenderId:"242908899081",appId:"1:242908899081:web:508e18ab30dcdf814cd5d8"},Lm=gf(xm),Nv=pm(Lm),kv=Om();var ll={exports:{}},Rm="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Mm=Rm,Pm=Mm;function hl(){}function fl(){}fl.resetWarningCache=hl;var Fm=function(){function e(r,s,i,o,a,u){if(u!==Pm){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:fl,resetWarningCache:hl};return n.PropTypes=n,n};ll.exports=Fm();var _=ll.exports,ga=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),Vm=new Uint8Array(16);function Bm(){if(!ga)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ga(Vm)}var dl=[];for(var Rn=0;Rn<256;++Rn)dl[Rn]=(Rn+256).toString(16).substr(1);function Um(e,t){var n=t||0,r=dl;return[r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]]].join("")}function jm(e,t,n){var r=t&&n||0;typeof e=="string"&&(t=e==="binary"?new Array(16):null,e=null),e=e||{};var s=e.random||(e.rng||Bm)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,t)for(var i=0;i<16;++i)t[r+i]=s[i];return t||Um(s)}function $m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ma(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ya(e,t,n){return t&&ma(e.prototype,t),n&&ma(e,n),e}function Ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function or(){return or=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},or.apply(this,arguments)}function va(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function pl(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?va(Object(n),!0).forEach(function(r){Ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):va(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function qm(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Hs(e,t)}function qs(e){return qs=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},qs(e)}function Hs(e,t){return Hs=Object.setPrototypeOf||function(r,s){return r.__proto__=s,r},Hs(e,t)}function Hm(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Km(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:Hm(e)}var pt={GLOBAL:{HIDE:"__react_tooltip_hide_event",REBUILD:"__react_tooltip_rebuild_event",SHOW:"__react_tooltip_show_event"}},cs=function(t,n){var r;typeof window.CustomEvent=="function"?r=new window.CustomEvent(t,{detail:n}):(r=document.createEvent("Event"),r.initEvent(t,!1,!0,n)),window.dispatchEvent(r)};function zm(e){e.hide=function(t){cs(pt.GLOBAL.HIDE,{target:t})},e.rebuild=function(){cs(pt.GLOBAL.REBUILD)},e.show=function(t){cs(pt.GLOBAL.SHOW,{target:t})},e.prototype.globalRebuild=function(){this.mount&&(this.unbindListener(),this.bindListener())},e.prototype.globalShow=function(t){if(this.mount){var n=t&&t.detail&&t.detail.target&&!0||!1;this.showTooltip({currentTarget:n&&t.detail.target},!0)}},e.prototype.globalHide=function(t){if(this.mount){var n=t&&t.detail&&t.detail.target&&!0||!1;this.hideTooltip({currentTarget:n&&t.detail.target},n)}}}function Gm(e){e.prototype.bindWindowEvents=function(t){window.removeEventListener(pt.GLOBAL.HIDE,this.globalHide),window.addEventListener(pt.GLOBAL.HIDE,this.globalHide,!1),window.removeEventListener(pt.GLOBAL.REBUILD,this.globalRebuild),window.addEventListener(pt.GLOBAL.REBUILD,this.globalRebuild,!1),window.removeEventListener(pt.GLOBAL.SHOW,this.globalShow),window.addEventListener(pt.GLOBAL.SHOW,this.globalShow,!1),t&&(window.removeEventListener("resize",this.onWindowResize),window.addEventListener("resize",this.onWindowResize,!1))},e.prototype.unbindWindowEvents=function(){window.removeEventListener(pt.GLOBAL.HIDE,this.globalHide),window.removeEventListener(pt.GLOBAL.REBUILD,this.globalRebuild),window.removeEventListener(pt.GLOBAL.SHOW,this.globalShow),window.removeEventListener("resize",this.onWindowResize)},e.prototype.onWindowResize=function(){!this.mount||this.hideTooltip()}}var gl=function(t,n){var r=this.state.show,s=this.props.id,i=this.isCapture(n.currentTarget),o=n.currentTarget.getAttribute("currentItem");i||n.stopPropagation(),r&&o==="true"?t||this.hideTooltip(n):(n.currentTarget.setAttribute("currentItem","true"),Wm(n.currentTarget,this.getTargetArray(s)),this.showTooltip(n))},Wm=function(t,n){for(var r=0;r<n.length;r++)t!==n[r]?n[r].setAttribute("currentItem","false"):n[r].setAttribute("currentItem","true")},ls={id:"9b69f92e-d3fe-498b-b1b4-c5e63a51b0cf",set:function(t,n,r){if(this.id in t){var s=t[this.id];s[n]=r}else Object.defineProperty(t,this.id,{configurable:!0,value:Ue({},n,r)})},get:function(t,n){var r=t[this.id];if(r!==void 0)return r[n]}};function Qm(e){e.prototype.isCustomEvent=function(t){var n=this.state.event;return n||!!t.getAttribute("data-event")},e.prototype.customBindListener=function(t){var n=this,r=this.state,s=r.event,i=r.eventOff,o=t.getAttribute("data-event")||s,a=t.getAttribute("data-event-off")||i;o.split(" ").forEach(function(u){t.removeEventListener(u,ls.get(t,u));var c=gl.bind(n,a);ls.set(t,u,c),t.addEventListener(u,c,!1)}),a&&a.split(" ").forEach(function(u){t.removeEventListener(u,n.hideTooltip),t.addEventListener(u,n.hideTooltip,!1)})},e.prototype.customUnbindListener=function(t){var n=this.state,r=n.event,s=n.eventOff,i=r||t.getAttribute("data-event"),o=s||t.getAttribute("data-event-off");t.removeEventListener(i,ls.get(t,r)),o&&t.removeEventListener(o,this.hideTooltip)}}function Xm(e){e.prototype.isCapture=function(t){return t&&t.getAttribute("data-iscapture")==="true"||this.props.isCapture||!1}}function Ym(e){e.prototype.getEffect=function(t){var n=t.getAttribute("data-effect");return n||this.props.effect||"float"}}var Jm=function(t){var n={};for(var r in t)typeof t[r]=="function"?n[r]=t[r].bind(t):n[r]=t[r];return n},Oe=function(t,n,r){var s=n.respectEffect,i=s===void 0?!1:s,o=n.customEvent,a=o===void 0?!1:o,u=this.props.id,c=r.target.getAttribute("data-tip")||null,l=r.target.getAttribute("data-for")||null,h=r.target;if(!(this.isCustomEvent(h)&&!a)){var f=u==null&&l==null||l===u;if(c!=null&&(!i||this.getEffect(h)==="float")&&f){var p=Jm(r);p.currentTarget=h,t(p)}}},wa=function(t,n){var r={};return t.forEach(function(s){var i=s.getAttribute(n);i&&i.split(" ").forEach(function(o){return r[o]=!0})}),r},Ea=function(){return document.getElementsByTagName("body")[0]};function Zm(e){e.prototype.isBodyMode=function(){return!!this.props.bodyMode},e.prototype.bindBodyListener=function(t){var n=this,r=this.state,s=r.event,i=r.eventOff,o=r.possibleCustomEvents,a=r.possibleCustomEventsOff,u=Ea(),c=wa(t,"data-event"),l=wa(t,"data-event-off");s!=null&&(c[s]=!0),i!=null&&(l[i]=!0),o.split(" ").forEach(function(w){return c[w]=!0}),a.split(" ").forEach(function(w){return l[w]=!0}),this.unbindBodyListener(u);var h=this.bodyModeListeners={};s==null&&(h.mouseover=Oe.bind(this,this.showTooltip,{}),h.mousemove=Oe.bind(this,this.updateTooltip,{respectEffect:!0}),h.mouseout=Oe.bind(this,this.hideTooltip,{}));for(var f in c)h[f]=Oe.bind(this,function(w){var E=w.currentTarget.getAttribute("data-event-off")||i;gl.call(n,E,w)},{customEvent:!0});for(var p in l)h[p]=Oe.bind(this,this.hideTooltip,{customEvent:!0});for(var m in h)u.addEventListener(m,h[m])},e.prototype.unbindBodyListener=function(t){t=t||Ea();var n=this.bodyModeListeners;for(var r in n)t.removeEventListener(r,n[r])}}var ty=function(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver};function ey(e){e.prototype.bindRemovalTracker=function(){var t=this,n=ty();if(n!=null){var r=new n(function(s){for(var i=0;i<s.length;i++)for(var o=s[i],a=0;a<o.removedNodes.length;a++){var u=o.removedNodes[a];if(u===t.state.currentTarget){t.hideTooltip();return}}});r.observe(window.document,{childList:!0,subtree:!0}),this.removalTracker=r}},e.prototype.unbindRemovalTracker=function(){this.removalTracker&&(this.removalTracker.disconnect(),this.removalTracker=null)}}function ba(e,t,n,r,s,i,o){for(var a=Ks(n),u=a.width,c=a.height,l=Ks(t),h=l.width,f=l.height,p=ny(e,t,i),m=p.mouseX,w=p.mouseY,E=ry(i,h,f,u,c),L=sy(o),M=L.extraOffsetX,N=L.extraOffsetY,at=window.innerWidth,R=window.innerHeight,Ut=iy(n),jt=Ut.parentTop,jr=Ut.parentLeft,An=function(B){var $t=E[B].l;return m+$t+M},$r=function(B){var $t=E[B].r;return m+$t+M},ao=function(B){var $t=E[B].t;return w+$t+N},Bl=function(B){var $t=E[B].b;return w+$t+N},Ul=function(B){return An(B)<0},jl=function(B){return $r(B)>at},$l=function(B){return ao(B)<0},ql=function(B){return Bl(B)>R},qr=function(B){return Ul(B)||jl(B)||$l(B)||ql(B)},uo=function(B){return!qr(B)},Hl=["top","bottom","left","right"],Hr=[],Kr=0;Kr<4;Kr++){var co=Hl[Kr];uo(co)&&Hr.push(co)}var zr=!1,Gr,Kl=s!==r;return uo(s)&&Kl?(zr=!0,Gr=s):Hr.length>0&&qr(s)&&qr(r)&&(zr=!0,Gr=Hr[0]),zr?{isNewState:!0,newState:{place:Gr}}:{isNewState:!1,position:{left:parseInt(An(r)-jr,10),top:parseInt(ao(r)-jt,10)}}}var Ks=function(t){var n=t.getBoundingClientRect(),r=n.height,s=n.width;return{height:parseInt(r,10),width:parseInt(s,10)}},ny=function(t,n,r){var s=n.getBoundingClientRect(),i=s.top,o=s.left,a=Ks(n),u=a.width,c=a.height;return r==="float"?{mouseX:t.clientX,mouseY:t.clientY}:{mouseX:o+u/2,mouseY:i+c/2}},ry=function(t,n,r,s,i){var o,a,u,c,l=3,h=2,f=12;return t==="float"?(o={l:-(s/2),r:s/2,t:-(i+l+h),b:-l},u={l:-(s/2),r:s/2,t:l+f,b:i+l+h+f},c={l:-(s+l+h),r:-l,t:-(i/2),b:i/2},a={l,r:s+l+h,t:-(i/2),b:i/2}):t==="solid"&&(o={l:-(s/2),r:s/2,t:-(r/2+i+h),b:-(r/2)},u={l:-(s/2),r:s/2,t:r/2,b:r/2+i+h},c={l:-(s+n/2+h),r:-(n/2),t:-(i/2),b:i/2},a={l:n/2,r:s+n/2+h,t:-(i/2),b:i/2}),{top:o,bottom:u,left:c,right:a}},sy=function(t){var n=0,r=0;Object.prototype.toString.apply(t)==="[object String]"&&(t=JSON.parse(t.toString().replace(/'/g,'"')));for(var s in t)s==="top"?r-=parseInt(t[s],10):s==="bottom"?r+=parseInt(t[s],10):s==="left"?n-=parseInt(t[s],10):s==="right"&&(n+=parseInt(t[s],10));return{extraOffsetX:n,extraOffsetY:r}},iy=function(t){for(var n=t;n;){var r=window.getComputedStyle(n);if(r.getPropertyValue("transform")!=="none"||r.getPropertyValue("will-change")==="transform")break;n=n.parentElement}var s=n&&n.getBoundingClientRect().top||0,i=n&&n.getBoundingClientRect().left||0;return{parentTop:s,parentLeft:i}};function Ta(e,t,n,r){if(t)return t;if(n!=null)return n;if(n===null)return null;var s=/<br\s*\/?>/;return!r||r==="false"||!s.test(e)?e:e.split(s).map(function(i,o){return ke.createElement("span",{key:o,className:"multi-line"},i)})}function Sa(e){var t={};return Object.keys(e).filter(function(n){return/(^aria-\w+$|^role$)/.test(n)}).forEach(function(n){t[n]=e[n]}),t}function hs(e){var t=e.length;return e.hasOwnProperty?Array.prototype.slice.call(e):new Array(t).fill().map(function(n){return e[n]})}function oy(){return"t"+jm()}var ay=`.__react_component_tooltip {
  border-radius: 3px;
  display: inline-block;
  font-size: 13px;
  left: -999em;
  opacity: 0;
  padding: 8px 21px;
  position: fixed;
  pointer-events: none;
  transition: opacity 0.3s ease-out;
  top: -999em;
  visibility: hidden;
  z-index: 999;
}
.__react_component_tooltip.allow_hover, .__react_component_tooltip.allow_click {
  pointer-events: auto;
}
.__react_component_tooltip::before, .__react_component_tooltip::after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
}
.__react_component_tooltip.show {
  opacity: 0.9;
  margin-top: 0;
  margin-left: 0;
  visibility: visible;
}
.__react_component_tooltip.place-top::before {
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  bottom: -8px;
  left: 50%;
  margin-left: -10px;
}
.__react_component_tooltip.place-bottom::before {
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  top: -8px;
  left: 50%;
  margin-left: -10px;
}
.__react_component_tooltip.place-left::before {
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  right: -8px;
  top: 50%;
  margin-top: -5px;
}
.__react_component_tooltip.place-right::before {
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  left: -8px;
  top: 50%;
  margin-top: -5px;
}
.__react_component_tooltip .multi-line {
  display: block;
  padding: 2px 0;
  text-align: center;
}`,Ia={dark:{text:"#fff",background:"#222",border:"transparent",arrow:"#222"},success:{text:"#fff",background:"#8DC572",border:"transparent",arrow:"#8DC572"},warning:{text:"#fff",background:"#F0AD4E",border:"transparent",arrow:"#F0AD4E"},error:{text:"#fff",background:"#BE6464",border:"transparent",arrow:"#BE6464"},info:{text:"#fff",background:"#337AB7",border:"transparent",arrow:"#337AB7"},light:{text:"#222",background:"#fff",border:"transparent",arrow:"#fff"}};function uy(e){return Ia[e]?pl({},Ia[e]):void 0}function cy(e,t,n,r){return ly(e,hy(t,n,r))}function ly(e,t){var n=t.text,r=t.background,s=t.border,i=t.arrow;return`
  	.`.concat(e,` {
	    color: `).concat(n,`;
	    background: `).concat(r,`;
	    border: 1px solid `).concat(s,`;
  	}

  	.`).concat(e,`.place-top {
        margin-top: -10px;
    }
    .`).concat(e,`.place-top::before {
        border-top: 8px solid `).concat(s,`;
    }
    .`).concat(e,`.place-top::after {
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        bottom: -6px;
        left: 50%;
        margin-left: -8px;
        border-top-color: `).concat(i,`;
        border-top-style: solid;
        border-top-width: 6px;
    }

    .`).concat(e,`.place-bottom {
        margin-top: 10px;
    }
    .`).concat(e,`.place-bottom::before {
        border-bottom: 8px solid `).concat(s,`;
    }
    .`).concat(e,`.place-bottom::after {
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        top: -6px;
        left: 50%;
        margin-left: -8px;
        border-bottom-color: `).concat(i,`;
        border-bottom-style: solid;
        border-bottom-width: 6px;
    }

    .`).concat(e,`.place-left {
        margin-left: -10px;
    }
    .`).concat(e,`.place-left::before {
        border-left: 8px solid `).concat(s,`;
    }
    .`).concat(e,`.place-left::after {
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        right: -6px;
        top: 50%;
        margin-top: -4px;
        border-left-color: `).concat(i,`;
        border-left-style: solid;
        border-left-width: 6px;
    }

    .`).concat(e,`.place-right {
        margin-left: 10px;
    }
    .`).concat(e,`.place-right::before {
        border-right: 8px solid `).concat(s,`;
    }
    .`).concat(e,`.place-right::after {
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        left: -6px;
        top: 50%;
        margin-top: -4px;
        border-right-color: `).concat(i,`;
        border-right-style: solid;
        border-right-width: 6px;
    }
  `)}function hy(e,t,n){var r=e.text,s=e.background,i=e.border,o=e.arrow?e.arrow:e.background,a=uy(t);return r&&(a.text=r),s&&(a.background=s),n&&(i?a.border=i:a.border=t==="light"?"black":"white"),o&&(a.arrow=o),a}var Ca=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function ml(e,t){return t={exports:{}},e(t,t.exports),t.exports}var Mn=function(e){return e&&e.Math==Math&&e},nt=Mn(typeof globalThis=="object"&&globalThis)||Mn(typeof window=="object"&&window)||Mn(typeof self=="object"&&self)||Mn(typeof Ca=="object"&&Ca)||function(){return this}()||Function("return this")(),Sn=function(e){try{return!!e()}catch{return!0}},In=!Sn(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),yl={}.propertyIsEnumerable,vl=Object.getOwnPropertyDescriptor,fy=vl&&!yl.call({1:2},1),dy=fy?function(t){var n=vl(this,t);return!!n&&n.enumerable}:yl,py={f:dy},wl=function(e,t){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:t}},gy={}.toString,El=function(e){return gy.call(e).slice(8,-1)},my="".split,bl=Sn(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return El(e)=="String"?my.call(e,""):Object(e)}:Object,Tl=function(e){if(e==null)throw TypeError("Can't call method on "+e);return e},ro=function(e){return bl(Tl(e))},Tt=function(e){return typeof e=="object"?e!==null:typeof e=="function"},Sl=function(e,t){if(!Tt(e))return e;var n,r;if(t&&typeof(n=e.toString)=="function"&&!Tt(r=n.call(e))||typeof(n=e.valueOf)=="function"&&!Tt(r=n.call(e))||!t&&typeof(n=e.toString)=="function"&&!Tt(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},Il=function(e){return Object(Tl(e))},yy={}.hasOwnProperty,yt=function(t,n){return yy.call(Il(t),n)},zs=nt.document,vy=Tt(zs)&&Tt(zs.createElement),Cl=function(e){return vy?zs.createElement(e):{}},Al=!In&&!Sn(function(){return Object.defineProperty(Cl("div"),"a",{get:function(){return 7}}).a!=7}),Aa=Object.getOwnPropertyDescriptor,wy=In?Aa:function(t,n){if(t=ro(t),n=Sl(n,!0),Al)try{return Aa(t,n)}catch{}if(yt(t,n))return wl(!py.f.call(t,n),t[n])},_l={f:wy},en=function(e){if(!Tt(e))throw TypeError(String(e)+" is not an object");return e},_a=Object.defineProperty,Ey=In?_a:function(t,n,r){if(en(t),n=Sl(n,!0),en(r),Al)try{return _a(t,n,r)}catch{}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t},Ur={f:Ey},nn=In?function(e,t,n){return Ur.f(e,t,wl(1,n))}:function(e,t,n){return e[t]=n,e},so=function(e,t){try{nn(nt,e,t)}catch{nt[e]=t}return t},Da="__core-js_shared__",by=nt[Da]||so(Da,{}),xt=by,Ty=Function.toString;typeof xt.inspectSource!="function"&&(xt.inspectSource=function(e){return Ty.call(e)});var Dl=xt.inspectSource,Oa=nt.WeakMap,Sy=typeof Oa=="function"&&/native code/.test(Dl(Oa)),Ol=ml(function(e){(e.exports=function(t,n){return xt[t]||(xt[t]=n!==void 0?n:{})})("versions",[]).push({version:"3.12.1",mode:"global",copyright:"\xA9 2021 Denis Pushkarev (zloirock.ru)"})}),Iy=0,Cy=Math.random(),Nl=function(e){return"Symbol("+String(e===void 0?"":e)+")_"+(++Iy+Cy).toString(36)},Na=Ol("keys"),kl=function(e){return Na[e]||(Na[e]=Nl(e))},io={},ka="Object already initialized",Ay=nt.WeakMap,ar,rn,ur,_y=function(e){return ur(e)?rn(e):ar(e,{})},Dy=function(e){return function(t){var n;if(!Tt(t)||(n=rn(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}};if(Sy||xt.state){var qt=xt.state||(xt.state=new Ay),Oy=qt.get,xa=qt.has,Ny=qt.set;ar=function(e,t){if(xa.call(qt,e))throw new TypeError(ka);return t.facade=e,Ny.call(qt,e,t),t},rn=function(e){return Oy.call(qt,e)||{}},ur=function(e){return xa.call(qt,e)}}else{var ie=kl("state");io[ie]=!0,ar=function(e,t){if(yt(e,ie))throw new TypeError(ka);return t.facade=e,nn(e,ie,t),t},rn=function(e){return yt(e,ie)?e[ie]:{}},ur=function(e){return yt(e,ie)}}var La={set:ar,get:rn,has:ur,enforce:_y,getterFor:Dy},ky=ml(function(e){var t=La.get,n=La.enforce,r=String(String).split("String");(e.exports=function(s,i,o,a){var u=a?!!a.unsafe:!1,c=a?!!a.enumerable:!1,l=a?!!a.noTargetGet:!1,h;if(typeof o=="function"&&(typeof i=="string"&&!yt(o,"name")&&nn(o,"name",i),h=n(o),h.source||(h.source=r.join(typeof i=="string"?i:""))),s===nt){c?s[i]=o:so(i,o);return}else u?!l&&s[i]&&(c=!0):delete s[i];c?s[i]=o:nn(s,i,o)})(Function.prototype,"toString",function(){return typeof this=="function"&&t(this).source||Dl(this)})}),fs=nt,Ra=function(e){return typeof e=="function"?e:void 0},oo=function(e,t){return arguments.length<2?Ra(fs[e])||Ra(nt[e]):fs[e]&&fs[e][t]||nt[e]&&nt[e][t]},xy=Math.ceil,Ly=Math.floor,xl=function(e){return isNaN(e=+e)?0:(e>0?Ly:xy)(e)},Ry=Math.min,Ll=function(e){return e>0?Ry(xl(e),9007199254740991):0},My=Math.max,Py=Math.min,Fy=function(e,t){var n=xl(e);return n<0?My(n+t,0):Py(n,t)},Ma=function(e){return function(t,n,r){var s=ro(t),i=Ll(s.length),o=Fy(r,i),a;if(e&&n!=n){for(;i>o;)if(a=s[o++],a!=a)return!0}else for(;i>o;o++)if((e||o in s)&&s[o]===n)return e||o||0;return!e&&-1}},Vy={includes:Ma(!0),indexOf:Ma(!1)},By=Vy.indexOf,Rl=function(e,t){var n=ro(e),r=0,s=[],i;for(i in n)!yt(io,i)&&yt(n,i)&&s.push(i);for(;t.length>r;)yt(n,i=t[r++])&&(~By(s,i)||s.push(i));return s},cr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Uy=cr.concat("length","prototype"),jy=Object.getOwnPropertyNames||function(t){return Rl(t,Uy)},$y={f:jy},qy=Object.getOwnPropertySymbols,Hy={f:qy},Ky=oo("Reflect","ownKeys")||function(t){var n=$y.f(en(t)),r=Hy.f;return r?n.concat(r(t)):n},zy=function(e,t){for(var n=Ky(t),r=Ur.f,s=_l.f,i=0;i<n.length;i++){var o=n[i];yt(e,o)||r(e,o,s(t,o))}},Gy=/#|\.prototype\./,Cn=function(e,t){var n=Qy[Wy(e)];return n==Yy?!0:n==Xy?!1:typeof t=="function"?Sn(t):!!t},Wy=Cn.normalize=function(e){return String(e).replace(Gy,".").toLowerCase()},Qy=Cn.data={},Xy=Cn.NATIVE="N",Yy=Cn.POLYFILL="P",Jy=Cn,Zy=_l.f,tv=function(e,t){var n=e.target,r=e.global,s=e.stat,i,o,a,u,c,l;if(r?o=nt:s?o=nt[n]||so(n,{}):o=(nt[n]||{}).prototype,o)for(a in t){if(c=t[a],e.noTargetGet?(l=Zy(o,a),u=l&&l.value):u=o[a],i=Jy(r?a:n+(s?".":"#")+a,e.forced),!i&&u!==void 0){if(typeof c==typeof u)continue;zy(c,u)}(e.sham||u&&u.sham)&&nn(c,"sham",!0),ky(o,a,c,e)}},ev=function(e){if(typeof e!="function")throw TypeError(String(e)+" is not a function");return e},nv=function(e,t,n){if(ev(e),t===void 0)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(r){return e.call(t,r)};case 2:return function(r,s){return e.call(t,r,s)};case 3:return function(r,s,i){return e.call(t,r,s,i)}}return function(){return e.apply(t,arguments)}},Pa=Array.isArray||function(t){return El(t)=="Array"},ds=oo("navigator","userAgent")||"",Fa=nt.process,Va=Fa&&Fa.versions,Ba=Va&&Va.v8,vt,lr;Ba?(vt=Ba.split("."),lr=vt[0]<4?1:vt[0]+vt[1]):ds&&(vt=ds.match(/Edge\/(\d+)/),(!vt||vt[1]>=74)&&(vt=ds.match(/Chrome\/(\d+)/),vt&&(lr=vt[1])));var Ua=lr&&+lr,Gs=!!Object.getOwnPropertySymbols&&!Sn(function(){return!String(Symbol())||!Symbol.sham&&Ua&&Ua<41}),rv=Gs&&!Symbol.sham&&typeof Symbol.iterator=="symbol",Ne=Ol("wks"),je=nt.Symbol,sv=rv?je:je&&je.withoutSetter||Nl,Ml=function(e){return(!yt(Ne,e)||!(Gs||typeof Ne[e]=="string"))&&(Gs&&yt(je,e)?Ne[e]=je[e]:Ne[e]=sv("Symbol."+e)),Ne[e]},iv=Ml("species"),ov=function(e,t){var n;return Pa(e)&&(n=e.constructor,typeof n=="function"&&(n===Array||Pa(n.prototype))?n=void 0:Tt(n)&&(n=n[iv],n===null&&(n=void 0))),new(n===void 0?Array:n)(t===0?0:t)},ja=[].push,Ot=function(e){var t=e==1,n=e==2,r=e==3,s=e==4,i=e==6,o=e==7,a=e==5||i;return function(u,c,l,h){for(var f=Il(u),p=bl(f),m=nv(c,l,3),w=Ll(p.length),E=0,L=h||ov,M=t?L(u,w):n||o?L(u,0):void 0,N,at;w>E;E++)if((a||E in p)&&(N=p[E],at=m(N,E,f),e))if(t)M[E]=at;else if(at)switch(e){case 3:return!0;case 5:return N;case 6:return E;case 2:ja.call(M,N)}else switch(e){case 4:return!1;case 7:ja.call(M,N)}return i?-1:r||s?s:M}},av={forEach:Ot(0),map:Ot(1),filter:Ot(2),some:Ot(3),every:Ot(4),find:Ot(5),findIndex:Ot(6),filterOut:Ot(7)},uv=Object.keys||function(t){return Rl(t,cr)},cv=In?Object.defineProperties:function(t,n){en(t);for(var r=uv(n),s=r.length,i=0,o;s>i;)Ur.f(t,o=r[i++],n[o]);return t},lv=oo("document","documentElement"),$a=">",qa="<",Ws="prototype",Qs="script",Pl=kl("IE_PROTO"),ps=function(){},Fl=function(e){return qa+Qs+$a+e+qa+"/"+Qs+$a},hv=function(e){e.write(Fl("")),e.close();var t=e.parentWindow.Object;return e=null,t},fv=function(){var e=Cl("iframe"),t="java"+Qs+":",n;return e.style.display="none",lv.appendChild(e),e.src=String(t),n=e.contentWindow.document,n.open(),n.write(Fl("document.F=Object")),n.close(),n.F},gs,jn=function(){try{gs=document.domain&&new ActiveXObject("htmlfile")}catch{}jn=gs?hv(gs):fv();for(var e=cr.length;e--;)delete jn[Ws][cr[e]];return jn()};io[Pl]=!0;var dv=Object.create||function(t,n){var r;return t!==null?(ps[Ws]=en(t),r=new ps,ps[Ws]=null,r[Pl]=t):r=jn(),n===void 0?r:cv(r,n)},Xs=Ml("unscopables"),Ys=Array.prototype;Ys[Xs]==null&&Ur.f(Ys,Xs,{configurable:!0,value:dv(null)});var pv=function(e){Ys[Xs][e]=!0},gv=av.find,Js="find",Vl=!0;Js in[]&&Array(1)[Js](function(){Vl=!1});tv({target:"Array",proto:!0,forced:Vl},{find:function(t){return gv(this,t,arguments.length>1?arguments[1]:void 0)}});pv(Js);var ut,Pn,Ha,Ka=zm(ut=Gm(ut=Qm(ut=Xm(ut=Ym(ut=Zm(ut=ey(ut=(Ha=Pn=function(e){qm(t,e),ya(t,null,[{key:"propTypes",get:function(){return{uuid:_.string,children:_.any,place:_.string,type:_.string,effect:_.string,offset:_.object,multiline:_.bool,border:_.bool,textColor:_.string,backgroundColor:_.string,borderColor:_.string,arrowColor:_.string,insecure:_.bool,class:_.string,className:_.string,id:_.string,html:_.bool,delayHide:_.number,delayUpdate:_.number,delayShow:_.number,event:_.string,eventOff:_.string,isCapture:_.bool,globalEventOff:_.string,getContent:_.any,afterShow:_.func,afterHide:_.func,overridePosition:_.func,disable:_.bool,scrollHide:_.bool,resizeHide:_.bool,wrapper:_.string,bodyMode:_.bool,possibleCustomEvents:_.string,possibleCustomEventsOff:_.string,clickable:_.bool}}}]);function t(n){var r;return $m(this,t),r=Km(this,qs(t).call(this,n)),r.state={uuid:n.uuid||oy(),place:n.place||"top",desiredPlace:n.place||"top",type:"dark",effect:"float",show:!1,border:!1,customColors:{},offset:{},extraClass:"",html:!1,delayHide:0,delayShow:0,event:n.event||null,eventOff:n.eventOff||null,currentEvent:null,currentTarget:null,ariaProps:Sa(n),isEmptyTip:!1,disable:!1,possibleCustomEvents:n.possibleCustomEvents||"",possibleCustomEventsOff:n.possibleCustomEventsOff||"",originTooltip:null,isMultiline:!1},r.bind(["showTooltip","updateTooltip","hideTooltip","hideTooltipOnScroll","getTooltipContent","globalRebuild","globalShow","globalHide","onWindowResize","mouseOnToolTip"]),r.mount=!0,r.delayShowLoop=null,r.delayHideLoop=null,r.delayReshow=null,r.intervalUpdateContent=null,r}return ya(t,[{key:"bind",value:function(r){var s=this;r.forEach(function(i){s[i]=s[i].bind(s)})}},{key:"componentDidMount",value:function(){var r=this.props;r.insecure;var s=r.resizeHide;this.bindListener(),this.bindWindowEvents(s),this.injectStyles()}},{key:"componentWillUnmount",value:function(){this.mount=!1,this.clearTimer(),this.unbindListener(),this.removeScrollListener(this.state.currentTarget),this.unbindWindowEvents()}},{key:"injectStyles",value:function(){var r=this.tooltipRef;if(!!r){for(var s=r.parentNode;s.parentNode;)s=s.parentNode;var i;switch(s.constructor.name){case"Document":case"HTMLDocument":case void 0:i=s.head;break;case"ShadowRoot":default:i=s;break}if(!i.querySelector("style[data-react-tooltip]")){var o=document.createElement("style");o.textContent=ay,o.setAttribute("data-react-tooltip","true"),i.appendChild(o)}}}},{key:"mouseOnToolTip",value:function(){var r=this.state.show;return r&&this.tooltipRef?(this.tooltipRef.matches||(this.tooltipRef.msMatchesSelector?this.tooltipRef.matches=this.tooltipRef.msMatchesSelector:this.tooltipRef.matches=this.tooltipRef.mozMatchesSelector),this.tooltipRef.matches(":hover")):!1}},{key:"getTargetArray",value:function(r){var s=[],i;if(!r)i="[data-tip]:not([data-for])";else{var o=r.replace(/\\/g,"\\\\").replace(/"/g,'\\"');i='[data-tip][data-for="'.concat(o,'"]')}return hs(document.getElementsByTagName("*")).filter(function(a){return a.shadowRoot}).forEach(function(a){s=s.concat(hs(a.shadowRoot.querySelectorAll(i)))}),s.concat(hs(document.querySelectorAll(i)))}},{key:"bindListener",value:function(){var r=this,s=this.props,i=s.id,o=s.globalEventOff,a=s.isCapture,u=this.getTargetArray(i);u.forEach(function(c){c.getAttribute("currentItem")===null&&c.setAttribute("currentItem","false"),r.unbindBasicListener(c),r.isCustomEvent(c)&&r.customUnbindListener(c)}),this.isBodyMode()?this.bindBodyListener(u):u.forEach(function(c){var l=r.isCapture(c),h=r.getEffect(c);if(r.isCustomEvent(c)){r.customBindListener(c);return}c.addEventListener("mouseenter",r.showTooltip,l),c.addEventListener("focus",r.showTooltip,l),h==="float"&&c.addEventListener("mousemove",r.updateTooltip,l),c.addEventListener("mouseleave",r.hideTooltip,l),c.addEventListener("blur",r.hideTooltip,l)}),o&&(window.removeEventListener(o,this.hideTooltip),window.addEventListener(o,this.hideTooltip,a)),this.bindRemovalTracker()}},{key:"unbindListener",value:function(){var r=this,s=this.props,i=s.id,o=s.globalEventOff;if(this.isBodyMode())this.unbindBodyListener();else{var a=this.getTargetArray(i);a.forEach(function(u){r.unbindBasicListener(u),r.isCustomEvent(u)&&r.customUnbindListener(u)})}o&&window.removeEventListener(o,this.hideTooltip),this.unbindRemovalTracker()}},{key:"unbindBasicListener",value:function(r){var s=this.isCapture(r);r.removeEventListener("mouseenter",this.showTooltip,s),r.removeEventListener("mousemove",this.updateTooltip,s),r.removeEventListener("mouseleave",this.hideTooltip,s)}},{key:"getTooltipContent",value:function(){var r=this.props,s=r.getContent,i=r.children,o;return s&&(Array.isArray(s)?o=s[0]&&s[0](this.state.originTooltip):o=s(this.state.originTooltip)),Ta(this.state.originTooltip,i,o,this.state.isMultiline)}},{key:"isEmptyTip",value:function(r){return typeof r=="string"&&r===""||r===null}},{key:"showTooltip",value:function(r,s){if(!!this.tooltipRef){if(s){var i=this.getTargetArray(this.props.id),o=i.some(function(jt){return jt===r.currentTarget});if(!o)return}var a=this.props,u=a.multiline,c=a.getContent,l=r.currentTarget.getAttribute("data-tip"),h=r.currentTarget.getAttribute("data-multiline")||u||!1,f=r instanceof window.FocusEvent||s,p=!0;r.currentTarget.getAttribute("data-scroll-hide")?p=r.currentTarget.getAttribute("data-scroll-hide")==="true":this.props.scrollHide!=null&&(p=this.props.scrollHide),r&&r.currentTarget&&r.currentTarget.setAttribute&&r.currentTarget.setAttribute("aria-describedby",this.state.uuid);var m=r.currentTarget.getAttribute("data-place")||this.props.place||"top",w=f&&"solid"||this.getEffect(r.currentTarget),E=r.currentTarget.getAttribute("data-offset")||this.props.offset||{},L=ba(r,r.currentTarget,this.tooltipRef,m,m,w,E);L.position&&this.props.overridePosition&&(L.position=this.props.overridePosition(L.position,r,r.currentTarget,this.tooltipRef,m,m,w,E));var M=L.isNewState?L.newState.place:m;this.clearTimer();var N=r.currentTarget,at=this.state.show?N.getAttribute("data-delay-update")||this.props.delayUpdate:0,R=this,Ut=function(){R.setState({originTooltip:l,isMultiline:h,desiredPlace:m,place:M,type:N.getAttribute("data-type")||R.props.type||"dark",customColors:{text:N.getAttribute("data-text-color")||R.props.textColor||null,background:N.getAttribute("data-background-color")||R.props.backgroundColor||null,border:N.getAttribute("data-border-color")||R.props.borderColor||null,arrow:N.getAttribute("data-arrow-color")||R.props.arrowColor||null},effect:w,offset:E,html:(N.getAttribute("data-html")?N.getAttribute("data-html")==="true":R.props.html)||!1,delayShow:N.getAttribute("data-delay-show")||R.props.delayShow||0,delayHide:N.getAttribute("data-delay-hide")||R.props.delayHide||0,delayUpdate:N.getAttribute("data-delay-update")||R.props.delayUpdate||0,border:(N.getAttribute("data-border")?N.getAttribute("data-border")==="true":R.props.border)||!1,extraClass:N.getAttribute("data-class")||R.props.class||R.props.className||"",disable:(N.getAttribute("data-tip-disable")?N.getAttribute("data-tip-disable")==="true":R.props.disable)||!1,currentTarget:N},function(){p&&R.addScrollListener(R.state.currentTarget),R.updateTooltip(r),c&&Array.isArray(c)&&(R.intervalUpdateContent=setInterval(function(){if(R.mount){var jr=R.props.getContent,An=Ta(l,"",jr[0](),h),$r=R.isEmptyTip(An);R.setState({isEmptyTip:$r}),R.updatePosition()}},c[1]))})};at?this.delayReshow=setTimeout(Ut,at):Ut()}}},{key:"updateTooltip",value:function(r){var s=this,i=this.state,o=i.delayShow,a=i.disable,u=this.props.afterShow,c=this.getTooltipContent(),l=r.currentTarget||r.target;if(!this.mouseOnToolTip()&&!(this.isEmptyTip(c)||a)){var h=this.state.show?0:parseInt(o,10),f=function(){if(Array.isArray(c)&&c.length>0||c){var m=!s.state.show;s.setState({currentEvent:r,currentTarget:l,show:!0},function(){s.updatePosition(),m&&u&&u(r)})}};clearTimeout(this.delayShowLoop),h?this.delayShowLoop=setTimeout(f,h):f()}}},{key:"listenForTooltipExit",value:function(){var r=this.state.show;r&&this.tooltipRef&&this.tooltipRef.addEventListener("mouseleave",this.hideTooltip)}},{key:"removeListenerForTooltipExit",value:function(){var r=this.state.show;r&&this.tooltipRef&&this.tooltipRef.removeEventListener("mouseleave",this.hideTooltip)}},{key:"hideTooltip",value:function(r,s){var i=this,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{isScroll:!1},a=this.state.disable,u=o.isScroll,c=u?0:this.state.delayHide,l=this.props.afterHide,h=this.getTooltipContent();if(!!this.mount&&!(this.isEmptyTip(h)||a)){if(s){var f=this.getTargetArray(this.props.id),p=f.some(function(w){return w===r.currentTarget});if(!p||!this.state.show)return}r&&r.currentTarget&&r.currentTarget.removeAttribute&&r.currentTarget.removeAttribute("aria-describedby");var m=function(){var E=i.state.show;if(i.mouseOnToolTip()){i.listenForTooltipExit();return}i.removeListenerForTooltipExit(),i.setState({show:!1},function(){i.removeScrollListener(i.state.currentTarget),E&&l&&l(r)})};this.clearTimer(),c?this.delayHideLoop=setTimeout(m,parseInt(c,10)):m()}}},{key:"hideTooltipOnScroll",value:function(r,s){this.hideTooltip(r,s,{isScroll:!0})}},{key:"addScrollListener",value:function(r){var s=this.isCapture(r);window.addEventListener("scroll",this.hideTooltipOnScroll,s)}},{key:"removeScrollListener",value:function(r){var s=this.isCapture(r);window.removeEventListener("scroll",this.hideTooltipOnScroll,s)}},{key:"updatePosition",value:function(){var r=this,s=this.state,i=s.currentEvent,o=s.currentTarget,a=s.place,u=s.desiredPlace,c=s.effect,l=s.offset,h=this.tooltipRef,f=ba(i,o,h,a,u,c,l);if(f.position&&this.props.overridePosition&&(f.position=this.props.overridePosition(f.position,i,o,h,a,u,c,l)),f.isNewState)return this.setState(f.newState,function(){r.updatePosition()});h.style.left=f.position.left+"px",h.style.top=f.position.top+"px"}},{key:"clearTimer",value:function(){clearTimeout(this.delayShowLoop),clearTimeout(this.delayHideLoop),clearTimeout(this.delayReshow),clearInterval(this.intervalUpdateContent)}},{key:"hasCustomColors",value:function(){var r=this;return Boolean(Object.keys(this.state.customColors).find(function(s){return s!=="border"&&r.state.customColors[s]})||this.state.border&&this.state.customColors.border)}},{key:"render",value:function(){var r=this,s=this.state,i=s.extraClass,o=s.html,a=s.ariaProps,u=s.disable,c=s.uuid,l=this.getTooltipContent(),h=this.isEmptyTip(l),f=cy(this.state.uuid,this.state.customColors,this.state.type,this.state.border),p="__react_component_tooltip"+" ".concat(this.state.uuid)+(this.state.show&&!u&&!h?" show":"")+(this.state.border?" border":"")+" place-".concat(this.state.place)+" type-".concat(this.hasCustomColors()?"custom":this.state.type)+(this.props.delayUpdate?" allow_hover":"")+(this.props.clickable?" allow_click":""),m=this.props.wrapper;t.supportedWrappers.indexOf(m)<0&&(m=t.defaultProps.wrapper);var w=[p,i].filter(Boolean).join(" ");if(o){var E="".concat(l,`
<style aria-hidden="true">`).concat(f,"</style>");return ke.createElement(m,or({className:"".concat(w),id:this.props.id||c,ref:function(M){return r.tooltipRef=M}},a,{"data-id":"tooltip",dangerouslySetInnerHTML:{__html:E}}))}else return ke.createElement(m,or({className:"".concat(w),id:this.props.id||c},a,{ref:function(M){return r.tooltipRef=M},"data-id":"tooltip"}),ke.createElement("style",{dangerouslySetInnerHTML:{__html:f},"aria-hidden":"true"}),l)}}],[{key:"getDerivedStateFromProps",value:function(r,s){var i=s.ariaProps,o=Sa(r),a=Object.keys(o).some(function(u){return o[u]!==i[u]});return a?pl({},s,{ariaProps:o}):null}}]),t}(ke.Component),Ue(Pn,"defaultProps",{insecure:!0,resizeHide:!0,wrapper:"div",clickable:!1}),Ue(Pn,"supportedWrappers",["div","span"]),Ue(Pn,"displayName","ReactTooltip"),Ha))||ut)||ut)||ut)||ut)||ut)||ut)||ut;const xv=({id:e,children:t})=>Zl("div",{className:"tooltip-container",children:[_n("button",{className:"tooltip-button","data-tip":!0,"data-for":e,"data-event":"click",onMouseDown:r=>{Ka.hide()},children:_n(th,{})}),_n(Ka,{id:e,place:"bottom",effect:"solid",clickable:!0,globalEventOff:"click",offset:{bottom:-5},className:"tooltip",arrowColor:"#fff",children:_n("div",{role:"tab",children:t})})]});export{fm as D,Dv as E,Av as I,bv as Q,_v as T,Ev as U,wv as V,xv as a,Ov as b,Nv as d,Tv as l,Cv as p,kv as t,vv as u,Sv as w,Iv as y};
