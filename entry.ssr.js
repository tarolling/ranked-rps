import{j as p,b as xe,d as Ne,F as K,s as Ce,c as M,i as E,a as q,e as ze,u as H,f as he,g as J,_,h as Pe,k as Ae,l as T,m as De,n as Y,o as g,p as Fe,S as Ie,q as Le,r as ye,t as k,v as Re,w as be,x as Te,y as Oe,z as ue,A as Be,B as O}from"./q-Cp9WSM_R.js";/**
 * @license
 * @builder.io/qwik/server 1.8.0
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/QwikDev/qwik/blob/main/LICENSE
 */var He=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')}),Ke="<sync>";function Me(t,e){const n=e==null?void 0:e.mapper,r=t.symbolMapper?t.symbolMapper:(s,a,i)=>{var l;if(n){const c=$(s),u=n[c];if(!u){if(c===Ke)return[c,""];if((l=globalThis.__qwik_reg_symbols)==null?void 0:l.has(c))return[s,"_"];if(i)return[s,`${i}?qrl=${s}`];console.error("Cannot resolve symbol",s,"in",n,i)}return u}};return{isServer:!0,async importSymbol(s,a,i){var h;const l=$(i),c=(h=globalThis.__qwik_reg_symbols)==null?void 0:h.get(l);if(c)return c;let u=String(a);u.endsWith(".js")||(u+=".js");const m=He(u);if(!(i in m))throw new Error(`Q-ERROR: missing symbol '${i}' in module '${u}'.`);return m[i]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:s=>new Promise(a=>{setTimeout(()=>{a(s())})}),chunkForSymbol(s,a,i){return r(s,n,i)}}}async function Qe(t,e){const n=Me(t,e);Ce(n)}var $=t=>{const e=t.lastIndexOf("_");return e>-1?t.slice(e+1):t};function U(){if(typeof performance>"u")return()=>0;const t=performance.now();return()=>(performance.now()-t)/1e6}function qe(t){let e=t.base;return typeof t.base=="function"&&(e=t.base(t)),typeof e=="string"?(e.endsWith("/")||(e+="/"),e):"/build/"}var Ve='(()=>{var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,s=(e,s)=>{for(var a in s||(s={}))r.call(s,a)&&n(e,a,s[a]);if(t)for(var a of t(s))o.call(s,a)&&n(e,a,s[a]);return e};((e,t)=>{const r="__q_context__",o=window,n=new Set,a=new Set([e]),c="replace",i="forEach",l="target",f="getAttribute",p="isConnected",b="qvisible",u="_qwikjson_",y=(e,t)=>Array.from(e.querySelectorAll(t)),h=e=>{const t=[];return a.forEach((r=>t.push(...y(r,e)))),t},d=e=>{S(e),y(e,"[q\\\\:shadowroot]").forEach((e=>{const t=e.shadowRoot;t&&d(t)}))},m=e=>e&&"function"==typeof e.then,w=(e,t,r=t.type)=>{h("[on"+e+"\\\\:"+r+"]")[i]((o=>E(o,e,t,r)))},q=t=>{if(void 0===t[u]){let r=(t===e.documentElement?e.body:t).lastElementChild;for(;r;){if("SCRIPT"===r.tagName&&"qwik/json"===r[f]("type")){t[u]=JSON.parse(r.textContent[c](/\\\\x3C(\\/?script)/gi,"<$1"));break}r=r.previousElementSibling}}},v=(e,t)=>new CustomEvent(e,{detail:t}),E=async(t,o,n,a=n.type)=>{const i="on"+o+":"+a;t.hasAttribute("preventdefault:"+a)&&n.preventDefault();const l=t._qc_,b=l&&l.li.filter((e=>e[0]===i));if(b&&b.length>0){for(const e of b){const r=e[1].getFn([t,n],(()=>t[p]))(n,t),o=n.cancelBubble;m(r)&&await r,o&&n.stopPropagation()}return}const u=t[f](i);if(u){const o=t.closest("[q\\\\:container]"),a=o[f]("q:base"),i=o[f]("q:version")||"unknown",l=o[f]("q:manifest-hash")||"dev",b=new URL(a,e.baseURI);for(const f of u.split("\\n")){const u=new URL(f,b),y=u.href,h=u.hash[c](/^#?([^?[|]*).*$/,"$1")||"default",d=performance.now();let w,v,E;const _=f.startsWith("#"),A={qBase:a,qManifest:l,qVersion:i,href:y,symbol:h,element:t,reqTime:d};if(_){const t=o.getAttribute("q:instance");w=(e["qFuncs_"+t]||[])[Number.parseInt(h)],w||(v="sync",E=Error("sync handler error for symbol: "+h))}else{const e=u.href.split("#")[0];try{const t=import(e);q(o),w=(await t)[h],w||(v="no-symbol",E=Error(`${h} not in ${e}`))}catch(e){v||(v="async"),E=e}}if(!w){g("qerror",s({importError:v,error:E},A)),console.error(E);break}const k=e[r];if(t[p])try{e[r]=[t,n,u],_||g("qsymbol",s({},A));const o=w(n,t);m(o)&&await o}catch(e){g("qerror",s({error:e},A))}finally{e[r]=k}}}},g=(t,r)=>{e.dispatchEvent(v(t,r))},_=e=>e[c](/([A-Z])/g,(e=>"-"+e.toLowerCase())),A=async e=>{let t=_(e.type),r=e[l];for(w("-document",e,t);r&&r[f];){const o=E(r,"",e,t);let n=e.cancelBubble;m(o)&&await o,n=n||e.cancelBubble||r.hasAttribute("stoppropagation:"+e.type),r=e.bubbles&&!0!==n?r.parentElement:null}},k=e=>{w("-window",e,_(e.type))},C=()=>{var r;const s=e.readyState;if(!t&&("interactive"==s||"complete"==s)&&(a.forEach(d),t=1,g("qinit"),(null!=(r=o.requestIdleCallback)?r:o.setTimeout).bind(o)((()=>g("qidle"))),n.has(b))){const e=h("[on\\\\:"+b+"]"),t=new IntersectionObserver((e=>{for(const r of e)r.isIntersecting&&(t.unobserve(r[l]),E(r[l],"",v(b,r)))}));e[i]((e=>t.observe(e)))}},O=(e,t,r,o=!1)=>e.addEventListener(t,r,{capture:o,passive:!1}),S=(...e)=>{for(const t of e)"string"==typeof t?n.has(t)||(a.forEach((e=>O(e,t,A,!0))),O(o,t,k,!0),n.add(t)):a.has(t)||(n.forEach((e=>O(t,e,A,!0))),a.add(t))};if(!(r in e)){e[r]=0;const t=o.qwikevents;Array.isArray(t)&&S(...t),o.qwikevents={events:n,roots:a,push:S},O(e,"readystatechange",C),C()}})(document)})()',Ye=`(() => {
    var __defProp = Object.defineProperty;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: value
    }) : obj[key] = value;
    var __spreadValues = (a, b) => {
        for (var prop in b || (b = {})) {
            __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
        }
        if (__getOwnPropSymbols) {
            for (var prop of __getOwnPropSymbols(b)) {
                __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
            }
        }
        return a;
    };
    ((doc, hasInitialized) => {
        const Q_CONTEXT = "__q_context__";
        const win = window;
        const events =  new Set;
        const roots =  new Set([ doc ]);
        const nativeQuerySelectorAll = (root, selector) => Array.from(root.querySelectorAll(selector));
        const querySelectorAll = query => {
            const elements = [];
            roots.forEach((root => elements.push(...nativeQuerySelectorAll(root, query))));
            return elements;
        };
        const findShadowRoots = fragment => {
            processEventOrNode(fragment);
            nativeQuerySelectorAll(fragment, "[q\\\\:shadowroot]").forEach((parent => {
                const shadowRoot = parent.shadowRoot;
                shadowRoot && findShadowRoots(shadowRoot);
            }));
        };
        const isPromise = promise => promise && "function" == typeof promise.then;
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((el => dispatch(el, infix, ev, type)));
        };
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === script.getAttribute("type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/gi, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const relevantListeners = ctx && ctx.li.filter((li => li[0] === attrName));
            if (relevantListeners && relevantListeners.length > 0) {
                for (const listener of relevantListeners) {
                    const results = listener[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                    const cancelBubble = ev.cancelBubble;
                    isPromise(results) && await results;
                    cancelBubble && ev.stopPropagation();
                }
                return;
            }
            const attrValue = element.getAttribute(attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const qBase = container.getAttribute("q:base");
                const qVersion = container.getAttribute("q:version") || "unknown";
                const qManifest = container.getAttribute("q:manifest-hash") || "dev";
                const base = new URL(qBase, doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const href = url.href;
                    const symbol = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    let handler;
                    let importError;
                    let error;
                    const isSync = qrl.startsWith("#");
                    const eventData = {
                        qBase: qBase,
                        qManifest: qManifest,
                        qVersion: qVersion,
                        href: href,
                        symbol: symbol,
                        element: element,
                        reqTime: reqTime
                    };
                    if (isSync) {
                        const hash = container.getAttribute("q:instance");
                        handler = (doc["qFuncs_" + hash] || [])[Number.parseInt(symbol)];
                        if (!handler) {
                            importError = "sync";
                            error = new Error("sync handler error for symbol: " + symbol);
                        }
                    } else {
                        const uri = url.href.split("#")[0];
                        try {
                            const module = import(
                                                        uri);
                            resolveContainer(container);
                            handler = (await module)[symbol];
                            if (!handler) {
                                importError = "no-symbol";
                                error = new Error(\`\${symbol} not in \${uri}\`);
                            }
                        } catch (err) {
                            importError || (importError = "async");
                            error = err;
                        }
                    }
                    if (!handler) {
                        emitEvent("qerror", __spreadValues({
                            importError: importError,
                            error: error
                        }, eventData));
                        console.error(error);
                        break;
                    }
                    const previousCtx = doc[Q_CONTEXT];
                    if (element.isConnected) {
                        try {
                            doc[Q_CONTEXT] = [ element, ev, url ];
                            isSync || emitEvent("qsymbol", __spreadValues({}, eventData));
                            const results = handler(ev, element);
                            isPromise(results) && await results;
                        } catch (error2) {
                            emitEvent("qerror", __spreadValues({
                                error: error2
                            }, eventData));
                        } finally {
                            doc[Q_CONTEXT] = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                const results = dispatch(element, "", ev, type);
                let cancelBubble = ev.cancelBubble;
                isPromise(results) && await results;
                cancelBubble = cancelBubble || ev.cancelBubble || element.hasAttribute("stoppropagation:" + ev.type);
                element = ev.bubbles && !0 !== cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                roots.forEach(findShadowRoots);
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const processEventOrNode = (...eventNames) => {
            for (const eventNameOrNode of eventNames) {
                if ("string" == typeof eventNameOrNode) {
                    if (!events.has(eventNameOrNode)) {
                        roots.forEach((root => addEventListener(root, eventNameOrNode, processDocumentEvent, !0)));
                        addEventListener(win, eventNameOrNode, processWindowEvent, !0);
                        events.add(eventNameOrNode);
                    }
                } else if (!roots.has(eventNameOrNode)) {
                    events.forEach((eventName => addEventListener(eventNameOrNode, eventName, processDocumentEvent, !0)));
                    roots.add(eventNameOrNode);
                }
            }
        };
        if (!(Q_CONTEXT in doc)) {
            doc[Q_CONTEXT] = 0;
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && processEventOrNode(...qwikevents);
            win.qwikevents = {
                events: events,
                roots: roots,
                push: processEventOrNode
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})()`;function me(t={}){return t.debug?Ye:Ve}function Ue(t,e,n){if(!n)return[];const r=e.prefetchStrategy,o=qe(e);if(r!==null){if(!r||!r.symbolsToPrefetch||r.symbolsToPrefetch==="auto")return $e(t,n,o);if(typeof r.symbolsToPrefetch=="function")try{return r.symbolsToPrefetch({manifest:n.manifest})}catch(s){console.error("getPrefetchUrls, symbolsToPrefetch()",s)}}return[]}function $e(t,e,n){const r=[],o=t==null?void 0:t.qrls,{mapper:s,manifest:a}=e,i=new Map;if(Array.isArray(o))for(const l of o){const c=l.getHash(),u=s[c];u&&we(a,i,r,n,u[1])}return r}function we(t,e,n,r,o){const s=r+o;let a=e.get(s);if(!a){a={url:s,imports:[]},e.set(s,a);const i=t.bundles[o];if(i&&Array.isArray(i.imports))for(const l of i.imports)we(t,e,a.imports,r,l)}n.push(a)}function We(t){if(t!=null&&t.mapping!=null&&typeof t.mapping=="object"&&t.symbols!=null&&typeof t.symbols=="object"&&t.bundles!=null&&typeof t.bundles=="object")return t}function W(){let o=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return o+="w.postMessage(u.map(u=>new URL(u,origin)+''));",o+="w.onmessage=()=>{w.terminate()};",o}function Je(t,e){const n={bundles:Q(e).map(o=>o.split("/").pop())};return`(window.qwikPrefetchSW||(window.qwikPrefetchSW=[])).push(${JSON.stringify(["prefetch",t,...n.bundles])});`}function Q(t){const e=[],n=r=>{if(Array.isArray(r))for(const o of r)e.includes(o.url)||(e.push(o.url),n(o.imports))};return n(t),e}function Ge(t){const e=new Map;let n=0;const r=(i,l)=>{if(Array.isArray(i))for(const c of i){const u=e.get(c.url)||0;e.set(c.url,u+1),n++,l.has(c.url)||(l.add(c.url),r(c.imports,l))}},o=new Set;for(const i of t)o.clear(),r(i.imports,o);const s=n/e.size*2,a=Array.from(e.entries());return a.sort((i,l)=>l[1]-i[1]),a.slice(0,5).filter(i=>i[1]>s).map(i=>i[0])}function Xe(t,e,n,r){const o=st(e==null?void 0:e.implementation),s=[];return o.prefetchEvent==="always"&&Ze(t,s,n,r),o.linkInsert==="html-append"&&et(s,n,o),o.linkInsert==="js-append"?tt(s,n,o,r):o.workerFetchInsert==="always"&&nt(s,n,r),s.length>0?p(K,{children:s}):null}function Ze(t,e,n,r){const o=Ge(n);for(const s of o)e.push(p("link",{rel:"modulepreload",href:s,nonce:r}));e.push(p("script",{"q:type":"prefetch-bundles",dangerouslySetInnerHTML:Je(t,n)+"document.dispatchEvent(new CustomEvent('qprefetch', {detail:{links: [location.pathname]}}))",nonce:r}))}function et(t,e,n){const r=Q(e),o=n.linkRel||"prefetch";for(const s of r){const a={};a.href=s,a.rel=o,(o==="prefetch"||o==="preload")&&s.endsWith(".js")&&(a.as="script"),t.push(p("link",a))}}function tt(t,e,n,r){const o=n.linkRel||"prefetch";let s="";n.workerFetchInsert==="no-link-support"&&(s+="let supportsLinkRel = true;"),s+=`const u=${JSON.stringify(Q(e))};`,s+="u.map((u,i)=>{",s+="const l=document.createElement('link');",s+='l.setAttribute("href",u);',s+=`l.setAttribute("rel","${o}");`,n.workerFetchInsert==="no-link-support"&&(s+="if(i===0){",s+="try{",s+=`supportsLinkRel=l.relList.supports("${o}");`,s+="}catch(e){}",s+="}"),s+="document.body.appendChild(l);",s+="});",n.workerFetchInsert==="no-link-support"&&(s+="if(!supportsLinkRel){",s+=W(),s+="}"),n.workerFetchInsert==="always"&&(s+=W()),t.push(p("script",{type:"module","q:type":"link-js",dangerouslySetInnerHTML:s,nonce:r}))}function nt(t,e,n){let r=`const u=${JSON.stringify(Q(e))};`;r+=W(),t.push(p("script",{type:"module","q:type":"prefetch-worker",dangerouslySetInnerHTML:r,nonce:n}))}function st(t){return{...rt,...t}}var rt={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},ot="q:instance",it="<!DOCTYPE html>";async function at(t,e){var w,Z,ee;let n=e.stream,r=0,o=0,s=0,a=0,i="",l;const c=((w=e.streaming)==null?void 0:w.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},u=e.containerTagName??"html",m=e.containerAttributes??{},h=n,x=U(),v=qe(e),f=ct(e.manifest);function P(){i&&(h.write(i),i="",r=0,s++,s===1&&(a=x()))}function A(d){const y=d.length;r+=y,o+=y,i+=d}switch(c.strategy){case"disabled":n={write:A};break;case"direct":n=h;break;case"auto":let d=0,y=!1;const te=c.maximunChunk??0,V=c.maximunInitialChunk??0;n={write(z){z==="<!--qkssr-f-->"?y||(y=!0):z==="<!--qkssr-pu-->"?d++:z==="<!--qkssr-po-->"?d--:A(z),d===0&&(y||r>=(s===0?V:te))&&(y=!1,P())}};break}u==="html"?n.write(it):(n.write("<!--cq-->"),e.qwikLoader?(e.qwikLoader.include===void 0&&(e.qwikLoader.include="never"),e.qwikLoader.position===void 0&&(e.qwikLoader.position="bottom")):e.qwikLoader={include:"never"},e.qwikPrefetchServiceWorker||(e.qwikPrefetchServiceWorker={}),e.qwikPrefetchServiceWorker.include||(e.qwikPrefetchServiceWorker.include=!1),e.qwikPrefetchServiceWorker.position||(e.qwikPrefetchServiceWorker.position="top")),e.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await Qe(e,f);const D=f==null?void 0:f.manifest.injections,j=D?D.map(d=>p(d.tag,d.attributes??{})):[],N=((Z=e.qwikLoader)==null?void 0:Z.include)??"auto";if((((ee=e.qwikLoader)==null?void 0:ee.position)??"bottom")==="top"&&N!=="never"){const d=me({debug:e.debug});j.push(p("script",{id:"qwikloader",dangerouslySetInnerHTML:d})),j.push(p("script",{dangerouslySetInnerHTML:"window.qwikevents.push('click')"}))}const G=U(),I=[];let L=0,R=0;await xe(t,{stream:n,containerTagName:u,containerAttributes:m,serverData:e.serverData,base:v,beforeContent:j,beforeClose:async(d,y,te,V)=>{var re,oe,ie,ae,le;L=G();const z=U();l=await Ne(d,y,void 0,V);const S=[];if(e.prefetchStrategy!==null){const b=Ue(l,e,f),Ee=m["q:base"];if(b.length>0){const ce=Xe(Ee,e.prefetchStrategy,b,(re=e.serverData)==null?void 0:re.nonce);ce&&S.push(ce)}}const je=JSON.stringify(l.state,void 0,void 0);if(S.push(p("script",{type:"qwik/json",dangerouslySetInnerHTML:ut(je),nonce:(oe=e.serverData)==null?void 0:oe.nonce})),l.funcs.length>0){const b=m[ot];S.push(p("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:pt(b,l.funcs),nonce:(ie=e.serverData)==null?void 0:ie.nonce}))}const Se=!l||l.mode!=="static",ne=N==="always"||N==="auto"&&Se;if(ne){const b=me({debug:e.debug});S.push(p("script",{id:"qwikloader",dangerouslySetInnerHTML:b,nonce:(ae=e.serverData)==null?void 0:ae.nonce}))}const se=Array.from(y.$events$,b=>JSON.stringify(b));if(se.length>0){const b=(ne?"window.qwikevents":"(window.qwikevents||=[])")+`.push(${se.join(", ")})`;S.push(p("script",{dangerouslySetInnerHTML:b,nonce:(le=e.serverData)==null?void 0:le.nonce}))}return mt(I,d),R=z(),p(K,{children:S})},manifestHash:(f==null?void 0:f.manifest.manifestHash)||"dev"+lt()}),u!=="html"&&n.write("<!--/cq-->"),P();const C=l.resources.some(d=>d._cache!==1/0);return{prefetchResources:void 0,snapshotResult:l,flushes:s,manifest:f==null?void 0:f.manifest,size:o,isStatic:!C,timing:{render:L,snapshot:R,firstFlush:a},_symbols:I}}function lt(){return Math.random().toString(36).slice(2)}function ct(t){if(t){if("mapper"in t)return t;if(t=We(t),t){const e={};return Object.entries(t.mapping).forEach(([n,r])=>{e[$(n)]=[n,r]}),{mapper:e,manifest:t}}}}var ut=t=>t.replace(/<(\/?script)/gi,"\\x3C$1");function mt(t,e){var n;for(const r of e){const o=(n=r.$componentQrl$)==null?void 0:n.getSymbol();o&&!t.includes(o)&&t.push(o)}}var dt='document["qFuncs_HASH"]=';function pt(t,e){return dt.replace("HASH",t)+`[${e.join(`,
`)}]`}const ft={manifestHash:"z40b16",symbols:{s_02wMImzEAbk:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"QwikCityProvider_component_useTask",canonicalFilename:"s_02wmimzeabk",hash:"02wMImzEAbk",ctxKind:"function",ctxName:"useTask$",captures:!0,parent:"s_TxCFOy819ag",loc:[26901,35932]},s_5UvzvKGF7UA:{origin:"routes/index.tsx",displayName:"routes_component",canonicalFilename:"s_5uvzvkgf7ua",hash:"5UvzvKGF7UA",ctxKind:"function",ctxName:"component$",captures:!1,loc:[134,311]},s_8gdLBszqbaM:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"Link_component",canonicalFilename:"s_8gdlbszqbam",hash:"8gdLBszqbaM",ctxKind:"function",ctxName:"component$",captures:!1,loc:[37912,40546]},s_Ce7sEyT18z8:{origin:"root.tsx",displayName:"root_component",canonicalFilename:"s_ce7seyt18z8",hash:"Ce7sEyT18z8",ctxKind:"function",ctxName:"component$",captures:!1,loc:[316,949]},s_Nk9PlpjQm9Y:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"GetForm_component",canonicalFilename:"s_nk9plpjqm9y",hash:"Nk9PlpjQm9Y",ctxKind:"function",ctxName:"component$",captures:!1,loc:[53759,55508]},s_TxCFOy819ag:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"QwikCityProvider_component",canonicalFilename:"s_txcfoy819ag",hash:"TxCFOy819ag",ctxKind:"function",ctxName:"component$",captures:!1,loc:[23405,36219]},s_WmYC5H00wtI:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"QwikCityMockProvider_component",canonicalFilename:"s_wmyc5h00wti",hash:"WmYC5H00wtI",ctxKind:"function",ctxName:"component$",captures:!1,loc:[36499,37793]},s_e0ssiDXoeAM:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"RouterOutlet_component",canonicalFilename:"s_e0ssidxoeam",hash:"e0ssiDXoeAM",ctxKind:"function",ctxName:"component$",captures:!1,loc:[7739,8613]},s_rnAH7ua9uFQ:{origin:"routes/layout.tsx",displayName:"layout_component",canonicalFilename:"s_rnah7ua9ufq",hash:"rnAH7ua9uFQ",ctxKind:"function",ctxName:"component$",captures:!1,loc:[582,610]},s_wvjzQdMBlkY:{origin:"components/router-head/router-head.tsx",displayName:"RouterHead_component",canonicalFilename:"s_wvjzqdmblky",hash:"wvjzQdMBlkY",ctxKind:"function",ctxName:"component$",captures:!1,loc:[243,1201]},s_RPDJAz33WLA:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"QwikCityProvider_component_useStyles",canonicalFilename:"s_rpdjaz33wla",hash:"RPDJAz33WLA",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_TxCFOy819ag",loc:[23460,23494]},s_1RJPKHqF8AQ:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"spa_init_event",canonicalFilename:"s_1rjpkhqf8aq",hash:"1RJPKHqF8AQ",ctxKind:"function",ctxName:"event$",captures:!1,loc:[1385,6676]},s_A5bZC7WO00A:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"routeActionQrl_action_submit",canonicalFilename:"s_a5bzc7wo00a",hash:"A5bZC7WO00A",ctxKind:"function",ctxName:"submit",captures:!0,loc:[41606,43223]},s_SGytLJ8uq8I:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"serverQrl_rpc",canonicalFilename:"s_sgytlj8uq8i",hash:"SGytLJ8uq8I",ctxKind:"function",ctxName:"rpc",captures:!0,loc:[47794,50610]},s_uPHV2oGn4wc:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"Form_form_onSubmit",canonicalFilename:"s_uphv2ogn4wc",hash:"uPHV2oGn4wc",ctxKind:"function",ctxName:"_jsxS",captures:!0,loc:[52717,52846]},s_BUbtvTyvVRE:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"QwikCityMockProvider_component_goto",canonicalFilename:"s_bubtvtyvvre",hash:"BUbtvTyvVRE",ctxKind:"function",ctxName:"goto",captures:!1,parent:"s_WmYC5H00wtI",loc:[36914,36992]},s_KK5BfmKH4ZI:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"GetForm_component_form_onSubmit_1",canonicalFilename:"s_kk5bfmkh4zi",hash:"KK5BfmKH4ZI",ctxKind:"function",ctxName:"_jsxS",captures:!1,parent:"s_Nk9PlpjQm9Y",loc:[54853,55167]},s_Osdg8FnYTw4:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"Link_component_handlePrefetch",canonicalFilename:"s_osdg8fnytw4",hash:"Osdg8FnYTw4",ctxKind:"function",ctxName:"handlePrefetch",captures:!1,parent:"s_8gdLBszqbaM",loc:[38612,38923]},s_fX0bDjeJa0E:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"QwikCityProvider_component_goto",canonicalFilename:"s_fx0bdjeja0e",hash:"fX0bDjeJa0E",ctxKind:"function",ctxName:"goto",captures:!0,parent:"s_TxCFOy819ag",loc:[24795,26289]},s_p9MSze0ojs4:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"GetForm_component_form_onSubmit",canonicalFilename:"s_p9msze0ojs4",hash:"p9MSze0ojs4",ctxKind:"function",ctxName:"_jsxS",captures:!0,parent:"s_Nk9PlpjQm9Y",loc:[54350,54747]},s_pIf0khHUxfY:{origin:"../node_modules/@builder.io/qwik-city/lib/index.qwik.mjs",displayName:"Link_component_handleClick",canonicalFilename:"s_pif0khhuxfy",hash:"pIf0khHUxfY",ctxKind:"function",ctxName:"handleClick",captures:!0,parent:"s_8gdLBszqbaM",loc:[39344,39864]}},mapping:{s_02wMImzEAbk:"q-Cyzzkie2.js",s_5UvzvKGF7UA:"q-DNnNVRNc.js",s_8gdLBszqbaM:"q-R5FgLnit.js",s_Ce7sEyT18z8:"q-DzQnOiNC.js",s_Nk9PlpjQm9Y:"q-CxeCId9S.js",s_TxCFOy819ag:"q-Dv3baGtT.js",s_WmYC5H00wtI:"q-Bth3Pggs.js",s_e0ssiDXoeAM:"q-DFRGD2gU.js",s_rnAH7ua9uFQ:"q-Cazkjfd8.js",s_wvjzQdMBlkY:"q-BlO2_HtA.js",s_RPDJAz33WLA:"q-Ck2tWVPP.js",s_1RJPKHqF8AQ:"q-BGmpAaRo.js",s_A5bZC7WO00A:"q-C-zvSioH.js",s_SGytLJ8uq8I:"q-D_0-Wuch.js",s_uPHV2oGn4wc:"q-BhEKFq9l.js",s_BUbtvTyvVRE:"q-Dfz2cfKm.js",s_KK5BfmKH4ZI:"q-CRJNsO9k.js",s_Osdg8FnYTw4:"q-DG2w6Jrj.js",s_fX0bDjeJa0E:"q-DVFxDgM_.js",s_p9MSze0ojs4:"q-DwVN61YH.js",s_pIf0khHUxfY:"q-ymPUSL6L.js"},bundles:{"../service-worker.js":{size:2539,origins:["node_modules/@builder.io/qwik-city/lib/service-worker.mjs","src/routes/service-worker.ts"]},"q-au0BkaEJ.js":{size:269,imports:["q-BhEKFq9l.js","q-DwVN61YH.js"],dynamicImports:["q-DNnNVRNc.js"],origins:["src/routes/index.tsx"]},"q-BGmpAaRo.js":{size:2253,origins:["node_modules/@builder.io/qwik-city/lib/s_1rjpkhqf8aq.js"],symbols:["s_1RJPKHqF8AQ"]},"q-BhEKFq9l.js":{size:63918,origins:["@builder.io/qwik/build","node_modules/@builder.io/qwik-city/lib/s_uphv2ogn4wc.js","node_modules/@builder.io/qwik/dist/core.prod.mjs"],symbols:["s_uPHV2oGn4wc"]},"q-BlO2_HtA.js":{size:884,imports:["q-BhEKFq9l.js","q-DwVN61YH.js"],origins:["src/components/router-head/s_wvjzqdmblky.js"],symbols:["s_wvjzQdMBlkY"]},"q-Bth3Pggs.js":{size:112,imports:["q-BhEKFq9l.js","q-Dfz2cfKm.js","q-DwVN61YH.js"],symbols:["s_WmYC5H00wtI"]},"q-C-Kpqu9s.js":{size:171,imports:["q-BhEKFq9l.js","q-DwVN61YH.js"],dynamicImports:["q-DzQnOiNC.js"],origins:["src/global.css","src/root.tsx"]},"q-C-zvSioH.js":{size:766,imports:["q-BhEKFq9l.js"],origins:["node_modules/@builder.io/qwik-city/lib/s_a5bzc7wo00a.js"],symbols:["s_A5bZC7WO00A"]},"q-Cazkjfd8.js":{size:102,imports:["q-BhEKFq9l.js"],origins:["src/routes/s_rnah7ua9ufq.js"],symbols:["s_rnAH7ua9uFQ"]},"q-Ck2tWVPP.js":{size:5818,imports:["q-BhEKFq9l.js","q-DwVN61YH.js"],dynamicImports:["q-au0BkaEJ.js","q-CrHFP6eN.js","q-Cyzzkie2.js","q-DkurHy7l.js","q-DVFxDgM_.js"],origins:["@qwik-city-plan","node_modules/@builder.io/qwik-city/lib/s_02wmimzeabk.js","node_modules/@builder.io/qwik-city/lib/s_fx0bdjeja0e.js","node_modules/@builder.io/qwik-city/lib/s_rpdjaz33wla.js","node_modules/@builder.io/qwik-city/lib/s_txcfoy819ag.js"],symbols:["s_RPDJAz33WLA"]},"q-CrHFP6eN.js":{size:149,imports:["q-BhEKFq9l.js","q-DwVN61YH.js"],dynamicImports:["../service-worker.js"],origins:["@qwik-city-entries"]},"q-CRJNsO9k.js":{size:88,imports:["q-BhEKFq9l.js","q-DwVN61YH.js"],symbols:["s_KK5BfmKH4ZI"]},"q-CxeCId9S.js":{size:88,imports:["q-BhEKFq9l.js","q-DwVN61YH.js"],symbols:["s_Nk9PlpjQm9Y"]},"q-Cyzzkie2.js":{size:133,imports:["q-BhEKFq9l.js","q-Ck2tWVPP.js","q-DwVN61YH.js"],symbols:["s_02wMImzEAbk"]},"q-D_0-Wuch.js":{size:1186,imports:["q-BhEKFq9l.js","q-DwVN61YH.js"],origins:["node_modules/@builder.io/qwik-city/lib/s_sgytlj8uq8i.js"],symbols:["s_SGytLJ8uq8I"]},"q-DFRGD2gU.js":{size:600,imports:["q-BhEKFq9l.js","q-DwVN61YH.js"],origins:["node_modules/@builder.io/qwik-city/lib/s_e0ssidxoeam.js"],symbols:["s_e0ssiDXoeAM"]},"q-Dfz2cfKm.js":{size:783,imports:["q-BhEKFq9l.js","q-DwVN61YH.js"],origins:["node_modules/@builder.io/qwik-city/lib/s_bubtvtyvvre.js","node_modules/@builder.io/qwik-city/lib/s_wmyc5h00wti.js"],symbols:["s_BUbtvTyvVRE"]},"q-DG2w6Jrj.js":{size:1538,imports:["q-BhEKFq9l.js","q-DwVN61YH.js"],dynamicImports:["q-ymPUSL6L.js"],origins:["node_modules/@builder.io/qwik-city/lib/s_8gdlbszqbam.js","node_modules/@builder.io/qwik-city/lib/s_osdg8fnytw4.js","node_modules/@builder.io/qwik-city/lib/s_pif0khhuxfy.js"],symbols:["s_Osdg8FnYTw4"]},"q-DkurHy7l.js":{size:274,imports:["q-BhEKFq9l.js","q-DwVN61YH.js"],dynamicImports:["q-Cazkjfd8.js"],origins:["src/routes/layout.tsx"]},"q-DNnNVRNc.js":{size:270,imports:["q-BhEKFq9l.js"],origins:["src/routes/s_5uvzvkgf7ua.js"],symbols:["s_5UvzvKGF7UA"]},"q-Dv3baGtT.js":{size:112,imports:["q-BhEKFq9l.js","q-Ck2tWVPP.js","q-DwVN61YH.js"],symbols:["s_TxCFOy819ag"]},"q-DVFxDgM_.js":{size:107,imports:["q-BhEKFq9l.js","q-Ck2tWVPP.js","q-DwVN61YH.js"],symbols:["s_fX0bDjeJa0E"]},"q-DwVN61YH.js":{size:10099,imports:["q-BhEKFq9l.js"],dynamicImports:["q-BGmpAaRo.js","q-CRJNsO9k.js","q-DFRGD2gU.js","q-Dv3baGtT.js"],origins:["@qwik-city-sw-register","node_modules/@builder.io/qwik-city/lib/index.qwik.mjs","node_modules/@builder.io/qwik-city/lib/s_kk5bfmkh4zi.js","node_modules/@builder.io/qwik-city/lib/s_nk9plpjqm9y.js","node_modules/@builder.io/qwik-city/lib/s_p9msze0ojs4.js","node_modules/zod/lib/index.mjs"],symbols:["s_p9MSze0ojs4"]},"q-DzQnOiNC.js":{size:488,imports:["q-BhEKFq9l.js","q-DwVN61YH.js"],dynamicImports:["q-BlO2_HtA.js"],origins:["src/components/router-head/router-head.tsx","src/s_ce7seyt18z8.js"],symbols:["s_Ce7sEyT18z8"]},"q-R5FgLnit.js":{size:112,imports:["q-BhEKFq9l.js","q-DG2w6Jrj.js","q-DwVN61YH.js"],symbols:["s_8gdLBszqbaM"]},"q-ymPUSL6L.js":{size:112,imports:["q-BhEKFq9l.js","q-DG2w6Jrj.js","q-DwVN61YH.js"],symbols:["s_pIf0khHUxfY"]}},injections:[],version:"1",options:{target:"client",buildMode:"production",entryStrategy:{type:"smart"}},platform:{qwik:"1.8.0",vite:"",rollup:"4.21.0",env:"node",os:"linux",node:"20.16.0"}},ht='((i,r,a,o)=>{a=e=>{const t=document.querySelector("[q\\\\:base]");t&&r.active&&r.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;r?a(t):i.push(t)}),"serviceWorker"in navigator?navigator.serviceWorker.register("/service-worker.js").then(e=>{o=()=>{r=e,i.forEach(a),a({bundles:i})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&o()}):e.active&&o()}).catch(e=>console.error(e)):console.log("Service worker not supported in this browser.")})([])',yt=k("qc-s"),bt=k("qc-c"),_e=k("qc-ic"),ve=k("qc-h"),ge=k("qc-l"),qt=k("qc-n"),wt=k("qc-a"),_t=k("qc-ir"),de=Re(Te("s_1RJPKHqF8AQ")),vt=t=>{var e;{const[n,r]=Le().chunkForSymbol(de.getSymbol(),null,(e=de.dev)==null?void 0:e.file),o=[t,r,n].map(s=>JSON.stringify(s)).join(",");return`(${gt.toString()})(${o});`}},gt=async(t,e,n)=>{var r;if(!window._qcs&&history.scrollRestoration==="manual"){window._qcs=!0;const o=(r=history.state)==null?void 0:r._qCityScroll;o&&window.scrollTo(o.x,o.y);const s=document.currentScript;if(s){const a=s.closest("[q\\:container]");(await import(new URL(e,new URL(t,document.baseURI)).href))[n](a)}}},kt=()=>{const t=H("containerAttributes");if(!t)throw new Error("PrefetchServiceWorker component must be rendered on the server.");const e=vt(t["q:base"]);he();const n=H("nonce"),r=J(_e);if(r.value&&r.value.length>0){const o=r.value.length;let s=null;for(let a=o-1;a>=0;a--)r.value[a].default&&(s=_(r.value[a].default,{children:s},1,"zl_0"));return _(K,{children:[s,q("script",{dangerouslySetInnerHTML:e},{nonce:n},null,3,null)]},1,"zl_1")}return Pe},jt=M(E(kt,"s_e0ssiDXoeAM")),St=(t,e)=>new URL(t,e.href),Et=(t,e)=>t.origin===e.origin,pe=t=>t.endsWith("/")?t:t+"/",xt=({pathname:t},{pathname:e})=>{const n=Math.abs(t.length-e.length);return n===0?t===e:n===1&&pe(t)===pe(e)},Nt=(t,e)=>t.search===e.search,Ct=(t,e)=>Nt(t,e)&&xt(t,e),zt=t=>t&&typeof t.then=="function",Pt=(t,e,n,r)=>{const o=ke(),a={head:o,withLocale:i=>ue(r,i),resolveValue:i=>{const l=i.__id;if(i.__brand==="server_loader"&&!(l in t.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const c=t.loaders[l];if(zt(c))throw new Error("Loaders returning a promise can not be resolved for the head function.");return c},...e};for(let i=n.length-1;i>=0;i--){const l=n[i]&&n[i].head;l&&(typeof l=="function"?fe(o,ue(r,()=>l(a))):typeof l=="object"&&fe(o,l))}return a.head},fe=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),B(t.meta,e.meta),B(t.links,e.links),B(t.styles,e.styles),B(t.scripts,e.scripts),Object.assign(t.frontmatter,e.frontmatter)},B=(t,e)=>{if(Array.isArray(e))for(const n of e){if(typeof n.key=="string"){const r=t.findIndex(o=>o.key===n.key);if(r>-1){t[r]=n;continue}}t.push(n)}},ke=()=>({title:"",meta:[],links:[],styles:[],scripts:[],frontmatter:{}}),At=()=>J(ve),Dt=()=>J(ge),Ft=()=>ye(H("qwikcity")),It=":root{view-transition-name:none}",Lt=async(t,e)=>{const[n,r,o,s]=be(),{type:a="link",forceReload:i=t===void 0,replaceState:l=!1,scroll:c=!0}=typeof e=="object"?e:{forceReload:e};if(typeof t=="number")return;const u=o.value.dest,m=t===void 0?u:St(t,s.url);if(Et(m,u)&&!(!i&&Ct(m,u)))return o.value={type:a,dest:m,forceReload:i,replaceState:l,scroll:c},n.value=void 0,s.isNavigating=!0,new Promise(h=>{r.r=h})},Rt=({track:t})=>{const[e,n,r,o,s,a,i,l,c,u,m]=be();async function h(){const[v,f]=t(()=>[u.value,e.value]),P=Oe(""),A=m.url,D=f?"form":v.type;v.replaceState;let j,N,F=null;if(j=new URL(v.dest,m.url),F=s.loadedRoute,N=s.response,F){const[G,I,L,R]=F,C=L,X=C[C.length-1];m.prevUrl=A,m.url=j,m.params={...I},u.untrackedValue={type:D,dest:j};const w=Pt(N,m,C,P);n.headings=X.headings,n.menu=R,r.value=ye(C),o.links=w.links,o.meta=w.meta,o.styles=w.styles,o.scripts=w.scripts,o.title=w.title,o.frontmatter=w.frontmatter}}return h()},Tt=t=>{Ae(E(It,"s_RPDJAz33WLA"));const e=Ft();if(!(e!=null&&e.params))throw new Error("Missing Qwik City Env Data for help visit https://github.com/QwikDev/qwik/issues/6237");const n=H("url");if(!n)throw new Error("Missing Qwik URL Env Data");const r=new URL(n),o=T({url:r,params:e.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),s={},a=De(T(e.response.loaders,{deep:!1})),i=Y({type:"initial",dest:r,forceReload:!1,replaceState:!1,scroll:!0}),l=T(ke),c=T({headings:void 0,menu:void 0}),u=Y(),m=e.response.action,h=m?e.response.loaders[m]:void 0,x=Y(h?{id:m,data:e.response.formData,output:{result:h,status:e.response.status}}:void 0),v=E(Lt,"s_fX0bDjeJa0E",[x,s,i,o]);return g(bt,c),g(_e,u),g(ve,l),g(ge,o),g(qt,v),g(yt,a),g(wt,x),g(_t,i),Fe(E(Rt,"s_02wMImzEAbk",[x,c,u,l,e,v,a,s,t,i,o])),_(Ie,null,3,"qY_0")},Ot=M(E(Tt,"s_TxCFOy819ag")),Bt=t=>q("script",{nonce:ze(t,"nonce")},{dangerouslySetInnerHTML:ht},null,3,"1Z_0"),Ht=()=>{const t=At(),e=Dt();return _(K,{children:[q("title",null,null,t.title,1,null),q("link",null,{rel:"canonical",href:Be(n=>n.url.href,[e],"p0.url.href")},null,3,null),q("meta",null,{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,3,null),q("link",null,{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"},null,3,null),t.meta.map(n=>O("meta",{...n},null,0,n.key)),t.links.map(n=>O("link",{...n},null,0,n.key)),t.styles.map(n=>{var r;return O("style",{...n.props,...(r=n.props)!=null&&r.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:n.style}},null,0,n.key)}),t.scripts.map(n=>{var r;return O("script",{...n.props,...(r=n.props)!=null&&r.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:n.script}},null,0,n.key)})]},1,"hw_0")},Kt=M(E(Ht,"s_wvjzQdMBlkY")),Mt=()=>(he(),_(Ot,{children:[q("head",null,null,[q("meta",null,{charset:"utf-8"},null,3,null),q("link",null,{rel:"manifest",href:"/manifest.json"},null,3,"Ss_0"),_(Kt,null,3,"Ss_1")],1,null),q("body",null,{lang:"en"},[_(jt,null,3,"Ss_2"),_(Bt,null,3,"Ss_3")],1,null)]},1,"Ss_4")),Qt=M(E(Mt,"s_Ce7sEyT18z8"));function Yt(t){return at(_(Qt,null,3,"Ba_0"),{manifest:ft,...t,containerAttributes:{lang:"en-us",...t.containerAttributes},serverData:{...t.serverData}})}export{Yt as default};
