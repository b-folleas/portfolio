function Y4(C,a){const e=Object.create(null),c=C.split(",");for(let r=0;r<c.length;r++)e[c[r]]=!0;return a?r=>!!e[r.toLowerCase()]:r=>!!e[r]}const Di="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ei=Y4(Di);function F8(C){return!!C||C===""}function X4(C){if(D(C)){const a={};for(let e=0;e<C.length;e++){const c=C[e],r=r2(c)?Oi(c):X4(c);if(r)for(const i in r)a[i]=r[i]}return a}else{if(r2(C))return C;if(e2(C))return C}}const Ui=/;(?![^(]*\))/g,_i=/:(.+)/;function Oi(C){const a={};return C.split(Ui).forEach(e=>{if(e){const c=e.split(_i);c.length>1&&(a[c[0].trim()]=c[1].trim())}}),a}function Q4(C){let a="";if(r2(C))a=C;else if(D(C))for(let e=0;e<C.length;e++){const c=Q4(C[e]);c&&(a+=c+" ")}else if(e2(C))for(const e in C)C[e]&&(a+=e+" ");return a.trim()}const ND=C=>r2(C)?C:C==null?"":D(C)||e2(C)&&(C.toString===U8||!_(C.toString))?JSON.stringify(C,R8,2):String(C),R8=(C,a)=>a&&a.__v_isRef?R8(C,a.value):x1(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[c,r])=>(e[`${c} =>`]=r,e),{})}:D8(a)?{[`Set(${a.size})`]:[...a.values()]}:e2(a)&&!D(a)&&!_8(a)?String(a):a,K={},g1=[],g2=()=>{},Ii=()=>!1,qi=/^on[^a-z]/,k3=C=>qi.test(C),J4=C=>C.startsWith("onUpdate:"),n2=Object.assign,Z4=(C,a)=>{const e=C.indexOf(a);e>-1&&C.splice(e,1)},Wi=Object.prototype.hasOwnProperty,q=(C,a)=>Wi.call(C,a),D=Array.isArray,x1=C=>y3(C)==="[object Map]",D8=C=>y3(C)==="[object Set]",_=C=>typeof C=="function",r2=C=>typeof C=="string",C6=C=>typeof C=="symbol",e2=C=>C!==null&&typeof C=="object",E8=C=>e2(C)&&_(C.then)&&_(C.catch),U8=Object.prototype.toString,y3=C=>U8.call(C),Gi=C=>y3(C).slice(8,-1),_8=C=>y3(C)==="[object Object]",a6=C=>r2(C)&&C!=="NaN"&&C[0]!=="-"&&""+parseInt(C,10)===C,t3=Y4(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),A3=C=>{const a=Object.create(null);return e=>a[e]||(a[e]=C(e))},ji=/-(\w)/g,A2=A3(C=>C.replace(ji,(a,e)=>e?e.toUpperCase():"")),Ki=/\B([A-Z])/g,k1=A3(C=>C.replace(Ki,"-$1").toLowerCase()),T3=A3(C=>C.charAt(0).toUpperCase()+C.slice(1)),t4=A3(C=>C?`on${T3(C)}`:""),z3=(C,a)=>!Object.is(C,a),l4=(C,a)=>{for(let e=0;e<C.length;e++)C[e](a)},u3=(C,a,e)=>{Object.defineProperty(C,a,{configurable:!0,enumerable:!1,value:e})},O8=C=>{const a=parseFloat(C);return isNaN(a)?C:a};let T5;const $i=()=>T5||(T5=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let F2;class Yi{constructor(a=!1){this.active=!0,this.effects=[],this.cleanups=[],!a&&F2&&(this.parent=F2,this.index=(F2.scopes||(F2.scopes=[])).push(this)-1)}run(a){if(this.active)try{return F2=this,a()}finally{F2=this.parent}}on(){F2=this}off(){F2=this.parent}stop(a){if(this.active){let e,c;for(e=0,c=this.effects.length;e<c;e++)this.effects[e].stop();for(e=0,c=this.cleanups.length;e<c;e++)this.cleanups[e]();if(this.scopes)for(e=0,c=this.scopes.length;e<c;e++)this.scopes[e].stop(!0);if(this.parent&&!a){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Xi(C,a=F2){a&&a.active&&a.effects.push(C)}const e6=C=>{const a=new Set(C);return a.w=0,a.n=0,a},I8=C=>(C.w&J2)>0,q8=C=>(C.n&J2)>0,Qi=({deps:C})=>{if(C.length)for(let a=0;a<C.length;a++)C[a].w|=J2},Ji=C=>{const{deps:a}=C;if(a.length){let e=0;for(let c=0;c<a.length;c++){const r=a[c];I8(r)&&!q8(r)?r.delete(C):a[e++]=r,r.w&=~J2,r.n&=~J2}a.length=e}},m4=new WeakMap;let R1=0,J2=1;const p4=30;let k2;const o1=Symbol(""),d4=Symbol("");class c6{constructor(a,e=null,c){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,Xi(this,c)}run(){if(!this.active)return this.fn();let a=k2,e=X2;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=k2,k2=this,X2=!0,J2=1<<++R1,R1<=p4?Qi(this):P5(this),this.fn()}finally{R1<=p4&&Ji(this),J2=1<<--R1,k2=this.parent,X2=e,this.parent=void 0}}stop(){this.active&&(P5(this),this.onStop&&this.onStop(),this.active=!1)}}function P5(C){const{deps:a}=C;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(C);a.length=0}}let X2=!0;const W8=[];function y1(){W8.push(X2),X2=!1}function A1(){const C=W8.pop();X2=C===void 0?!0:C}function V2(C,a,e){if(X2&&k2){let c=m4.get(C);c||m4.set(C,c=new Map);let r=c.get(e);r||c.set(e,r=e6()),G8(r)}}function G8(C,a){let e=!1;R1<=p4?q8(C)||(C.n|=J2,e=!I8(C)):e=!C.has(k2),e&&(C.add(k2),k2.deps.push(C))}function D2(C,a,e,c,r,i){const n=m4.get(C);if(!n)return;let f=[];if(a==="clear")f=[...n.values()];else if(e==="length"&&D(C))n.forEach((o,l)=>{(l==="length"||l>=c)&&f.push(o)});else switch(e!==void 0&&f.push(n.get(e)),a){case"add":D(C)?a6(e)&&f.push(n.get("length")):(f.push(n.get(o1)),x1(C)&&f.push(n.get(d4)));break;case"delete":D(C)||(f.push(n.get(o1)),x1(C)&&f.push(n.get(d4)));break;case"set":x1(C)&&f.push(n.get(o1));break}if(f.length===1)f[0]&&g4(f[0]);else{const o=[];for(const l of f)l&&o.push(...l);g4(e6(o))}}function g4(C,a){for(const e of D(C)?C:[...C])(e!==k2||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Zi=Y4("__proto__,__v_isRef,__isVue"),j8=new Set(Object.getOwnPropertyNames(Symbol).map(C=>Symbol[C]).filter(C6)),Cn=r6(),an=r6(!1,!0),en=r6(!0),B5=cn();function cn(){const C={};return["includes","indexOf","lastIndexOf"].forEach(a=>{C[a]=function(...e){const c=G(this);for(let i=0,n=this.length;i<n;i++)V2(c,"get",i+"");const r=c[a](...e);return r===-1||r===!1?c[a](...e.map(G)):r}}),["push","pop","shift","unshift","splice"].forEach(a=>{C[a]=function(...e){y1();const c=G(this)[a].apply(this,e);return A1(),c}}),C}function r6(C=!1,a=!1){return function(c,r,i){if(r==="__v_isReactive")return!C;if(r==="__v_isReadonly")return C;if(r==="__v_isShallow")return a;if(r==="__v_raw"&&i===(C?a?mn:Q8:a?X8:Y8).get(c))return c;const n=D(c);if(!C&&n&&q(B5,r))return Reflect.get(B5,r,i);const f=Reflect.get(c,r,i);return(C6(r)?j8.has(r):Zi(r))||(C||V2(c,"get",r),a)?f:o2(f)?!n||!a6(r)?f.value:f:e2(f)?C?J8(f):f6(f):f}}const rn=K8(),nn=K8(!0);function K8(C=!1){return function(e,c,r,i){let n=e[c];if(j1(n)&&o2(n)&&!o2(r))return!1;if(!C&&!j1(r)&&(Z8(r)||(r=G(r),n=G(n)),!D(e)&&o2(n)&&!o2(r)))return n.value=r,!0;const f=D(e)&&a6(c)?Number(c)<e.length:q(e,c),o=Reflect.set(e,c,r,i);return e===G(i)&&(f?z3(r,n)&&D2(e,"set",c,r):D2(e,"add",c,r)),o}}function fn(C,a){const e=q(C,a);C[a];const c=Reflect.deleteProperty(C,a);return c&&e&&D2(C,"delete",a,void 0),c}function on(C,a){const e=Reflect.has(C,a);return(!C6(a)||!j8.has(a))&&V2(C,"has",a),e}function tn(C){return V2(C,"iterate",D(C)?"length":o1),Reflect.ownKeys(C)}const $8={get:Cn,set:rn,deleteProperty:fn,has:on,ownKeys:tn},ln={get:en,set(C,a){return!0},deleteProperty(C,a){return!0}},sn=n2({},$8,{get:an,set:nn}),i6=C=>C,P3=C=>Reflect.getPrototypeOf(C);function c3(C,a,e=!1,c=!1){C=C.__v_raw;const r=G(C),i=G(a);a!==i&&!e&&V2(r,"get",a),!e&&V2(r,"get",i);const{has:n}=P3(r),f=c?i6:e?l6:t6;if(n.call(r,a))return f(C.get(a));if(n.call(r,i))return f(C.get(i));C!==r&&C.get(a)}function r3(C,a=!1){const e=this.__v_raw,c=G(e),r=G(C);return C!==r&&!a&&V2(c,"has",C),!a&&V2(c,"has",r),C===r?e.has(C):e.has(C)||e.has(r)}function i3(C,a=!1){return C=C.__v_raw,!a&&V2(G(C),"iterate",o1),Reflect.get(C,"size",C)}function F5(C){C=G(C);const a=G(this);return P3(a).has.call(a,C)||(a.add(C),D2(a,"add",C,C)),this}function R5(C,a){a=G(a);const e=G(this),{has:c,get:r}=P3(e);let i=c.call(e,C);i||(C=G(C),i=c.call(e,C));const n=r.call(e,C);return e.set(C,a),i?z3(a,n)&&D2(e,"set",C,a):D2(e,"add",C,a),this}function D5(C){const a=G(this),{has:e,get:c}=P3(a);let r=e.call(a,C);r||(C=G(C),r=e.call(a,C)),c&&c.call(a,C);const i=a.delete(C);return r&&D2(a,"delete",C,void 0),i}function E5(){const C=G(this),a=C.size!==0,e=C.clear();return a&&D2(C,"clear",void 0,void 0),e}function n3(C,a){return function(c,r){const i=this,n=i.__v_raw,f=G(n),o=a?i6:C?l6:t6;return!C&&V2(f,"iterate",o1),n.forEach((l,L)=>c.call(r,o(l),o(L),i))}}function f3(C,a,e){return function(...c){const r=this.__v_raw,i=G(r),n=x1(i),f=C==="entries"||C===Symbol.iterator&&n,o=C==="keys"&&n,l=r[C](...c),L=e?i6:a?l6:t6;return!a&&V2(i,"iterate",o?d4:o1),{next(){const{value:M,done:V}=l.next();return V?{value:M,done:V}:{value:f?[L(M[0]),L(M[1])]:L(M),done:V}},[Symbol.iterator](){return this}}}}function W2(C){return function(...a){return C==="delete"?!1:this}}function Ln(){const C={get(i){return c3(this,i)},get size(){return i3(this)},has:r3,add:F5,set:R5,delete:D5,clear:E5,forEach:n3(!1,!1)},a={get(i){return c3(this,i,!1,!0)},get size(){return i3(this)},has:r3,add:F5,set:R5,delete:D5,clear:E5,forEach:n3(!1,!0)},e={get(i){return c3(this,i,!0)},get size(){return i3(this,!0)},has(i){return r3.call(this,i,!0)},add:W2("add"),set:W2("set"),delete:W2("delete"),clear:W2("clear"),forEach:n3(!0,!1)},c={get(i){return c3(this,i,!0,!0)},get size(){return i3(this,!0)},has(i){return r3.call(this,i,!0)},add:W2("add"),set:W2("set"),delete:W2("delete"),clear:W2("clear"),forEach:n3(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{C[i]=f3(i,!1,!1),e[i]=f3(i,!0,!1),a[i]=f3(i,!1,!0),c[i]=f3(i,!0,!0)}),[C,e,a,c]}const[Mn,Hn,Vn,zn]=Ln();function n6(C,a){const e=a?C?zn:Vn:C?Hn:Mn;return(c,r,i)=>r==="__v_isReactive"?!C:r==="__v_isReadonly"?C:r==="__v_raw"?c:Reflect.get(q(e,r)&&r in c?e:c,r,i)}const un={get:n6(!1,!1)},vn={get:n6(!1,!0)},hn={get:n6(!0,!1)},Y8=new WeakMap,X8=new WeakMap,Q8=new WeakMap,mn=new WeakMap;function pn(C){switch(C){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dn(C){return C.__v_skip||!Object.isExtensible(C)?0:pn(Gi(C))}function f6(C){return j1(C)?C:o6(C,!1,$8,un,Y8)}function gn(C){return o6(C,!1,sn,vn,X8)}function J8(C){return o6(C,!0,ln,hn,Q8)}function o6(C,a,e,c,r){if(!e2(C)||C.__v_raw&&!(a&&C.__v_isReactive))return C;const i=r.get(C);if(i)return i;const n=dn(C);if(n===0)return C;const f=new Proxy(C,n===2?c:e);return r.set(C,f),f}function S1(C){return j1(C)?S1(C.__v_raw):!!(C&&C.__v_isReactive)}function j1(C){return!!(C&&C.__v_isReadonly)}function Z8(C){return!!(C&&C.__v_isShallow)}function C0(C){return S1(C)||j1(C)}function G(C){const a=C&&C.__v_raw;return a?G(a):C}function a0(C){return u3(C,"__v_skip",!0),C}const t6=C=>e2(C)?f6(C):C,l6=C=>e2(C)?J8(C):C;function xn(C){X2&&k2&&(C=G(C),G8(C.dep||(C.dep=e6())))}function Sn(C,a){C=G(C),C.dep&&g4(C.dep)}function o2(C){return!!(C&&C.__v_isRef===!0)}function bn(C){return o2(C)?C.value:C}const Nn={get:(C,a,e)=>bn(Reflect.get(C,a,e)),set:(C,a,e,c)=>{const r=C[a];return o2(r)&&!o2(e)?(r.value=e,!0):Reflect.set(C,a,e,c)}};function e0(C){return S1(C)?C:new Proxy(C,Nn)}class wn{constructor(a,e,c,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new c6(a,()=>{this._dirty||(this._dirty=!0,Sn(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=c}get value(){const a=G(this);return xn(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}function kn(C,a,e=!1){let c,r;const i=_(C);return i?(c=C,r=g2):(c=C.get,r=C.set),new wn(c,r,i||!r,e)}Promise.resolve();function Q2(C,a,e,c){let r;try{r=c?C(...c):C()}catch(i){B3(i,a,e)}return r}function h2(C,a,e,c){if(_(C)){const i=Q2(C,a,e,c);return i&&E8(i)&&i.catch(n=>{B3(n,a,e)}),i}const r=[];for(let i=0;i<C.length;i++)r.push(h2(C[i],a,e,c));return r}function B3(C,a,e,c=!0){const r=a?a.vnode:null;if(a){let i=a.parent;const n=a.proxy,f=e;for(;i;){const l=i.ec;if(l){for(let L=0;L<l.length;L++)if(l[L](C,n,f)===!1)return}i=i.parent}const o=a.appContext.config.errorHandler;if(o){Q2(o,null,10,[C,n,f]);return}}yn(C,e,r,c)}function yn(C,a,e,c=!0){console.error(C)}let v3=!1,x4=!1;const H2=[];let R2=0;const _1=[];let D1=null,v1=0;const O1=[];let $2=null,h1=0;const c0=Promise.resolve();let s6=null,S4=null;function An(C){const a=s6||c0;return C?a.then(this?C.bind(this):C):a}function Tn(C){let a=R2+1,e=H2.length;for(;a<e;){const c=a+e>>>1;K1(H2[c])<C?a=c+1:e=c}return a}function r0(C){(!H2.length||!H2.includes(C,v3&&C.allowRecurse?R2+1:R2))&&C!==S4&&(C.id==null?H2.push(C):H2.splice(Tn(C.id),0,C),i0())}function i0(){!v3&&!x4&&(x4=!0,s6=c0.then(o0))}function Pn(C){const a=H2.indexOf(C);a>R2&&H2.splice(a,1)}function n0(C,a,e,c){D(C)?e.push(...C):(!a||!a.includes(C,C.allowRecurse?c+1:c))&&e.push(C),i0()}function Bn(C){n0(C,D1,_1,v1)}function Fn(C){n0(C,$2,O1,h1)}function L6(C,a=null){if(_1.length){for(S4=a,D1=[...new Set(_1)],_1.length=0,v1=0;v1<D1.length;v1++)D1[v1]();D1=null,v1=0,S4=null,L6(C,a)}}function f0(C){if(O1.length){const a=[...new Set(O1)];if(O1.length=0,$2){$2.push(...a);return}for($2=a,$2.sort((e,c)=>K1(e)-K1(c)),h1=0;h1<$2.length;h1++)$2[h1]();$2=null,h1=0}}const K1=C=>C.id==null?1/0:C.id;function o0(C){x4=!1,v3=!0,L6(C),H2.sort((e,c)=>K1(e)-K1(c));const a=g2;try{for(R2=0;R2<H2.length;R2++){const e=H2[R2];e&&e.active!==!1&&Q2(e,null,14)}}finally{R2=0,H2.length=0,f0(),v3=!1,s6=null,(H2.length||_1.length||O1.length)&&o0(C)}}function Rn(C,a,...e){const c=C.vnode.props||K;let r=e;const i=a.startsWith("update:"),n=i&&a.slice(7);if(n&&n in c){const L=`${n==="modelValue"?"model":n}Modifiers`,{number:M,trim:V}=c[L]||K;V?r=e.map(g=>g.trim()):M&&(r=e.map(O8))}let f,o=c[f=t4(a)]||c[f=t4(A2(a))];!o&&i&&(o=c[f=t4(k1(a))]),o&&h2(o,C,6,r);const l=c[f+"Once"];if(l){if(!C.emitted)C.emitted={};else if(C.emitted[f])return;C.emitted[f]=!0,h2(l,C,6,r)}}function t0(C,a,e=!1){const c=a.emitsCache,r=c.get(C);if(r!==void 0)return r;const i=C.emits;let n={},f=!1;if(!_(C)){const o=l=>{const L=t0(l,a,!0);L&&(f=!0,n2(n,L))};!e&&a.mixins.length&&a.mixins.forEach(o),C.extends&&o(C.extends),C.mixins&&C.mixins.forEach(o)}return!i&&!f?(c.set(C,null),null):(D(i)?i.forEach(o=>n[o]=null):n2(n,i),c.set(C,n),n)}function M6(C,a){return!C||!k3(a)?!1:(a=a.slice(2).replace(/Once$/,""),q(C,a[0].toLowerCase()+a.slice(1))||q(C,k1(a))||q(C,a))}let p2=null,F3=null;function h3(C){const a=p2;return p2=C,F3=C&&C.type.__scopeId||null,a}function wD(C){F3=C}function kD(){F3=null}function Dn(C,a=p2,e){if(!a||C._n)return C;const c=(...r)=>{c._d&&Y5(-1);const i=h3(a),n=C(...r);return h3(i),c._d&&Y5(1),n};return c._n=!0,c._c=!0,c._d=!0,c}function s4(C){const{type:a,vnode:e,proxy:c,withProxy:r,props:i,propsOptions:[n],slots:f,attrs:o,emit:l,render:L,renderCache:M,data:V,setupState:g,ctx:w,inheritAttrs:F}=C;let k,h;const S=h3(C);try{if(e.shapeFlag&4){const E=r||c;k=w2(L.call(E,E,M,i,g,V,w)),h=o}else{const E=a;k=w2(E.length>1?E(i,{attrs:o,slots:f,emit:l}):E(i,null)),h=a.props?o:En(o)}}catch(E){I1.length=0,B3(E,C,1),k=L2(T2)}let B=k;if(h&&F!==!1){const E=Object.keys(h),{shapeFlag:O}=B;E.length&&O&7&&(n&&E.some(J4)&&(h=Un(h,n)),B=N1(B,h))}return e.dirs&&(B.dirs=B.dirs?B.dirs.concat(e.dirs):e.dirs),e.transition&&(B.transition=e.transition),k=B,h3(S),k}const En=C=>{let a;for(const e in C)(e==="class"||e==="style"||k3(e))&&((a||(a={}))[e]=C[e]);return a},Un=(C,a)=>{const e={};for(const c in C)(!J4(c)||!(c.slice(9)in a))&&(e[c]=C[c]);return e};function _n(C,a,e){const{props:c,children:r,component:i}=C,{props:n,children:f,patchFlag:o}=a,l=i.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&o>=0){if(o&1024)return!0;if(o&16)return c?U5(c,n,l):!!n;if(o&8){const L=a.dynamicProps;for(let M=0;M<L.length;M++){const V=L[M];if(n[V]!==c[V]&&!M6(l,V))return!0}}}else return(r||f)&&(!f||!f.$stable)?!0:c===n?!1:c?n?U5(c,n,l):!0:!!n;return!1}function U5(C,a,e){const c=Object.keys(a);if(c.length!==Object.keys(C).length)return!0;for(let r=0;r<c.length;r++){const i=c[r];if(a[i]!==C[i]&&!M6(e,i))return!0}return!1}function On({vnode:C,parent:a},e){for(;a&&a.subTree===C;)(C=a.vnode).el=e,a=a.parent}const In=C=>C.__isSuspense;function qn(C,a){a&&a.pendingBranch?D(C)?a.effects.push(...C):a.effects.push(C):Fn(C)}function Wn(C,a){if(c2){let e=c2.provides;const c=c2.parent&&c2.parent.provides;c===e&&(e=c2.provides=Object.create(c)),e[C]=a}}function L4(C,a,e=!1){const c=c2||p2;if(c){const r=c.parent==null?c.vnode.appContext&&c.vnode.appContext.provides:c.parent.provides;if(r&&C in r)return r[C];if(arguments.length>1)return e&&_(a)?a.call(c.proxy):a}}const _5={};function l3(C,a,e){return l0(C,a,e)}function l0(C,a,{immediate:e,deep:c,flush:r,onTrack:i,onTrigger:n}=K){const f=c2;let o,l=!1,L=!1;if(o2(C)?(o=()=>C.value,l=Z8(C)):S1(C)?(o=()=>C,c=!0):D(C)?(L=!0,l=C.some(S1),o=()=>C.map(h=>{if(o2(h))return h.value;if(S1(h))return m1(h);if(_(h))return Q2(h,f,2)})):_(C)?a?o=()=>Q2(C,f,2):o=()=>{if(!(f&&f.isUnmounted))return M&&M(),h2(C,f,3,[V])}:o=g2,a&&c){const h=o;o=()=>m1(h())}let M,V=h=>{M=k.onStop=()=>{Q2(h,f,4)}};if($1)return V=g2,a?e&&h2(a,f,3,[o(),L?[]:void 0,V]):o(),g2;let g=L?[]:_5;const w=()=>{if(!!k.active)if(a){const h=k.run();(c||l||(L?h.some((S,B)=>z3(S,g[B])):z3(h,g)))&&(M&&M(),h2(a,f,3,[h,g===_5?void 0:g,V]),g=h)}else k.run()};w.allowRecurse=!!a;let F;r==="sync"?F=w:r==="post"?F=()=>s2(w,f&&f.suspense):F=()=>{!f||f.isMounted?Bn(w):w()};const k=new c6(o,F);return a?e?w():g=k.run():r==="post"?s2(k.run.bind(k),f&&f.suspense):k.run(),()=>{k.stop(),f&&f.scope&&Z4(f.scope.effects,k)}}function Gn(C,a,e){const c=this.proxy,r=r2(C)?C.includes(".")?s0(c,C):()=>c[C]:C.bind(c,c);let i;_(a)?i=a:(i=a.handler,e=a);const n=c2;w1(this);const f=l0(r,i.bind(c),e);return n?w1(n):l1(),f}function s0(C,a){const e=a.split(".");return()=>{let c=C;for(let r=0;r<e.length&&c;r++)c=c[e[r]];return c}}function m1(C,a){if(!e2(C)||C.__v_skip||(a=a||new Set,a.has(C)))return C;if(a.add(C),o2(C))m1(C.value,a);else if(D(C))for(let e=0;e<C.length;e++)m1(C[e],a);else if(D8(C)||x1(C))C.forEach(e=>{m1(e,a)});else if(_8(C))for(const e in C)m1(C[e],a);return C}function jn(){const C={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return z0(()=>{C.isMounted=!0}),u0(()=>{C.isUnmounting=!0}),C}const u2=[Function,Array],Kn={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:u2,onEnter:u2,onAfterEnter:u2,onEnterCancelled:u2,onBeforeLeave:u2,onLeave:u2,onAfterLeave:u2,onLeaveCancelled:u2,onBeforeAppear:u2,onAppear:u2,onAfterAppear:u2,onAppearCancelled:u2},setup(C,{slots:a}){const e=Bf(),c=jn();let r;return()=>{const i=a.default&&H0(a.default(),!0);if(!i||!i.length)return;const n=G(C),{mode:f}=n,o=i[0];if(c.isLeaving)return M4(o);const l=O5(o);if(!l)return M4(o);const L=b4(l,n,c,e);N4(l,L);const M=e.subTree,V=M&&O5(M);let g=!1;const{getTransitionKey:w}=l.type;if(w){const F=w();r===void 0?r=F:F!==r&&(r=F,g=!0)}if(V&&V.type!==T2&&(!i1(l,V)||g)){const F=b4(V,n,c,e);if(N4(V,F),f==="out-in")return c.isLeaving=!0,F.afterLeave=()=>{c.isLeaving=!1,e.update()},M4(o);f==="in-out"&&l.type!==T2&&(F.delayLeave=(k,h,S)=>{const B=M0(c,V);B[String(V.key)]=V,k._leaveCb=()=>{h(),k._leaveCb=void 0,delete L.delayedLeave},L.delayedLeave=S})}return o}}},L0=Kn;function M0(C,a){const{leavingVNodes:e}=C;let c=e.get(a.type);return c||(c=Object.create(null),e.set(a.type,c)),c}function b4(C,a,e,c){const{appear:r,mode:i,persisted:n=!1,onBeforeEnter:f,onEnter:o,onAfterEnter:l,onEnterCancelled:L,onBeforeLeave:M,onLeave:V,onAfterLeave:g,onLeaveCancelled:w,onBeforeAppear:F,onAppear:k,onAfterAppear:h,onAppearCancelled:S}=a,B=String(C.key),E=M0(e,C),O=(U,$)=>{U&&h2(U,c,9,$)},C2={mode:i,persisted:n,beforeEnter(U){let $=f;if(!e.isMounted)if(r)$=F||f;else return;U._leaveCb&&U._leaveCb(!0);const W=E[B];W&&i1(C,W)&&W.el._leaveCb&&W.el._leaveCb(),O($,[U])},enter(U){let $=o,W=l,l2=L;if(!e.isMounted)if(r)$=k||o,W=h||l,l2=S||L;else return;let f2=!1;const P=U._enterCb=a2=>{f2||(f2=!0,a2?O(l2,[U]):O(W,[U]),C2.delayedLeave&&C2.delayedLeave(),U._enterCb=void 0)};$?($(U,P),$.length<=1&&P()):P()},leave(U,$){const W=String(C.key);if(U._enterCb&&U._enterCb(!0),e.isUnmounting)return $();O(M,[U]);let l2=!1;const f2=U._leaveCb=P=>{l2||(l2=!0,$(),P?O(w,[U]):O(g,[U]),U._leaveCb=void 0,E[W]===C&&delete E[W])};E[W]=C,V?(V(U,f2),V.length<=1&&f2()):f2()},clone(U){return b4(U,a,e,c)}};return C2}function M4(C){if(R3(C))return C=N1(C),C.children=null,C}function O5(C){return R3(C)?C.children?C.children[0]:void 0:C}function N4(C,a){C.shapeFlag&6&&C.component?N4(C.component.subTree,a):C.shapeFlag&128?(C.ssContent.transition=a.clone(C.ssContent),C.ssFallback.transition=a.clone(C.ssFallback)):C.transition=a}function H0(C,a=!1){let e=[],c=0;for(let r=0;r<C.length;r++){const i=C[r];i.type===N2?(i.patchFlag&128&&c++,e=e.concat(H0(i.children,a))):(a||i.type!==T2)&&e.push(i)}if(c>1)for(let r=0;r<e.length;r++)e[r].patchFlag=-2;return e}function H6(C){return _(C)?{setup:C,name:C.name}:C}const w4=C=>!!C.type.__asyncLoader,R3=C=>C.type.__isKeepAlive;function $n(C,a){V0(C,"a",a)}function Yn(C,a){V0(C,"da",a)}function V0(C,a,e=c2){const c=C.__wdc||(C.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return C()});if(D3(a,c,e),e){let r=e.parent;for(;r&&r.parent;)R3(r.parent.vnode)&&Xn(c,a,e,r),r=r.parent}}function Xn(C,a,e,c){const r=D3(a,C,c,!0);v0(()=>{Z4(c[a],r)},e)}function D3(C,a,e=c2,c=!1){if(e){const r=e[C]||(e[C]=[]),i=a.__weh||(a.__weh=(...n)=>{if(e.isUnmounted)return;y1(),w1(e);const f=h2(a,e,C,n);return l1(),A1(),f});return c?r.unshift(i):r.push(i),i}}const O2=C=>(a,e=c2)=>(!$1||C==="sp")&&D3(C,a,e),Qn=O2("bm"),z0=O2("m"),Jn=O2("bu"),Zn=O2("u"),u0=O2("bum"),v0=O2("um"),Cf=O2("sp"),af=O2("rtg"),ef=O2("rtc");function cf(C,a=c2){D3("ec",C,a)}let k4=!0;function rf(C){const a=m0(C),e=C.proxy,c=C.ctx;k4=!1,a.beforeCreate&&I5(a.beforeCreate,C,"bc");const{data:r,computed:i,methods:n,watch:f,provide:o,inject:l,created:L,beforeMount:M,mounted:V,beforeUpdate:g,updated:w,activated:F,deactivated:k,beforeDestroy:h,beforeUnmount:S,destroyed:B,unmounted:E,render:O,renderTracked:C2,renderTriggered:U,errorCaptured:$,serverPrefetch:W,expose:l2,inheritAttrs:f2,components:P,directives:a2,filters:x2}=a;if(l&&nf(l,c,null,C.appContext.config.unwrapInjectedRef),n)for(const Z in n){const Y=n[Z];_(Y)&&(c[Z]=Y.bind(e))}if(r){const Z=r.call(e,e);e2(Z)&&(C.data=f6(Z))}if(k4=!0,i)for(const Z in i){const Y=i[Z],P2=_(Y)?Y.bind(e,e):_(Y.get)?Y.get.bind(e,e):g2,n4=!_(Y)&&_(Y.set)?Y.set.bind(e):g2,P1=v2({get:P2,set:n4});Object.defineProperty(c,Z,{enumerable:!0,configurable:!0,get:()=>P1.value,set:H1=>P1.value=H1})}if(f)for(const Z in f)h0(f[Z],c,e,Z);if(o){const Z=_(o)?o.call(e):o;Reflect.ownKeys(Z).forEach(Y=>{Wn(Y,Z[Y])})}L&&I5(L,C,"c");function i2(Z,Y){D(Y)?Y.forEach(P2=>Z(P2.bind(e))):Y&&Z(Y.bind(e))}if(i2(Qn,M),i2(z0,V),i2(Jn,g),i2(Zn,w),i2($n,F),i2(Yn,k),i2(cf,$),i2(ef,C2),i2(af,U),i2(u0,S),i2(v0,E),i2(Cf,W),D(l2))if(l2.length){const Z=C.exposed||(C.exposed={});l2.forEach(Y=>{Object.defineProperty(Z,Y,{get:()=>e[Y],set:P2=>e[Y]=P2})})}else C.exposed||(C.exposed={});O&&C.render===g2&&(C.render=O),f2!=null&&(C.inheritAttrs=f2),P&&(C.components=P),a2&&(C.directives=a2)}function nf(C,a,e=g2,c=!1){D(C)&&(C=y4(C));for(const r in C){const i=C[r];let n;e2(i)?"default"in i?n=L4(i.from||r,i.default,!0):n=L4(i.from||r):n=L4(i),o2(n)&&c?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>n.value,set:f=>n.value=f}):a[r]=n}}function I5(C,a,e){h2(D(C)?C.map(c=>c.bind(a.proxy)):C.bind(a.proxy),a,e)}function h0(C,a,e,c){const r=c.includes(".")?s0(e,c):()=>e[c];if(r2(C)){const i=a[C];_(i)&&l3(r,i)}else if(_(C))l3(r,C.bind(e));else if(e2(C))if(D(C))C.forEach(i=>h0(i,a,e,c));else{const i=_(C.handler)?C.handler.bind(e):a[C.handler];_(i)&&l3(r,i,C)}}function m0(C){const a=C.type,{mixins:e,extends:c}=a,{mixins:r,optionsCache:i,config:{optionMergeStrategies:n}}=C.appContext,f=i.get(a);let o;return f?o=f:!r.length&&!e&&!c?o=a:(o={},r.length&&r.forEach(l=>m3(o,l,n,!0)),m3(o,a,n)),i.set(a,o),o}function m3(C,a,e,c=!1){const{mixins:r,extends:i}=a;i&&m3(C,i,e,!0),r&&r.forEach(n=>m3(C,n,e,!0));for(const n in a)if(!(c&&n==="expose")){const f=ff[n]||e&&e[n];C[n]=f?f(C[n],a[n]):a[n]}return C}const ff={data:q5,props:r1,emits:r1,methods:r1,computed:r1,beforeCreate:t2,created:t2,beforeMount:t2,mounted:t2,beforeUpdate:t2,updated:t2,beforeDestroy:t2,beforeUnmount:t2,destroyed:t2,unmounted:t2,activated:t2,deactivated:t2,errorCaptured:t2,serverPrefetch:t2,components:r1,directives:r1,watch:tf,provide:q5,inject:of};function q5(C,a){return a?C?function(){return n2(_(C)?C.call(this,this):C,_(a)?a.call(this,this):a)}:a:C}function of(C,a){return r1(y4(C),y4(a))}function y4(C){if(D(C)){const a={};for(let e=0;e<C.length;e++)a[C[e]]=C[e];return a}return C}function t2(C,a){return C?[...new Set([].concat(C,a))]:a}function r1(C,a){return C?n2(n2(Object.create(null),C),a):a}function tf(C,a){if(!C)return a;if(!a)return C;const e=n2(Object.create(null),C);for(const c in a)e[c]=t2(C[c],a[c]);return e}function lf(C,a,e,c=!1){const r={},i={};u3(i,E3,1),C.propsDefaults=Object.create(null),p0(C,a,r,i);for(const n in C.propsOptions[0])n in r||(r[n]=void 0);e?C.props=c?r:gn(r):C.type.props?C.props=r:C.props=i,C.attrs=i}function sf(C,a,e,c){const{props:r,attrs:i,vnode:{patchFlag:n}}=C,f=G(r),[o]=C.propsOptions;let l=!1;if((c||n>0)&&!(n&16)){if(n&8){const L=C.vnode.dynamicProps;for(let M=0;M<L.length;M++){let V=L[M];const g=a[V];if(o)if(q(i,V))g!==i[V]&&(i[V]=g,l=!0);else{const w=A2(V);r[w]=A4(o,f,w,g,C,!1)}else g!==i[V]&&(i[V]=g,l=!0)}}}else{p0(C,a,r,i)&&(l=!0);let L;for(const M in f)(!a||!q(a,M)&&((L=k1(M))===M||!q(a,L)))&&(o?e&&(e[M]!==void 0||e[L]!==void 0)&&(r[M]=A4(o,f,M,void 0,C,!0)):delete r[M]);if(i!==f)for(const M in i)(!a||!q(a,M)&&!0)&&(delete i[M],l=!0)}l&&D2(C,"set","$attrs")}function p0(C,a,e,c){const[r,i]=C.propsOptions;let n=!1,f;if(a)for(let o in a){if(t3(o))continue;const l=a[o];let L;r&&q(r,L=A2(o))?!i||!i.includes(L)?e[L]=l:(f||(f={}))[L]=l:M6(C.emitsOptions,o)||(!(o in c)||l!==c[o])&&(c[o]=l,n=!0)}if(i){const o=G(e),l=f||K;for(let L=0;L<i.length;L++){const M=i[L];e[M]=A4(r,o,M,l[M],C,!q(l,M))}}return n}function A4(C,a,e,c,r,i){const n=C[e];if(n!=null){const f=q(n,"default");if(f&&c===void 0){const o=n.default;if(n.type!==Function&&_(o)){const{propsDefaults:l}=r;e in l?c=l[e]:(w1(r),c=l[e]=o.call(null,a),l1())}else c=o}n[0]&&(i&&!f?c=!1:n[1]&&(c===""||c===k1(e))&&(c=!0))}return c}function d0(C,a,e=!1){const c=a.propsCache,r=c.get(C);if(r)return r;const i=C.props,n={},f=[];let o=!1;if(!_(C)){const L=M=>{o=!0;const[V,g]=d0(M,a,!0);n2(n,V),g&&f.push(...g)};!e&&a.mixins.length&&a.mixins.forEach(L),C.extends&&L(C.extends),C.mixins&&C.mixins.forEach(L)}if(!i&&!o)return c.set(C,g1),g1;if(D(i))for(let L=0;L<i.length;L++){const M=A2(i[L]);W5(M)&&(n[M]=K)}else if(i)for(const L in i){const M=A2(L);if(W5(M)){const V=i[L],g=n[M]=D(V)||_(V)?{type:V}:V;if(g){const w=K5(Boolean,g.type),F=K5(String,g.type);g[0]=w>-1,g[1]=F<0||w<F,(w>-1||q(g,"default"))&&f.push(M)}}}const l=[n,f];return c.set(C,l),l}function W5(C){return C[0]!=="$"}function G5(C){const a=C&&C.toString().match(/^\s*function (\w+)/);return a?a[1]:C===null?"null":""}function j5(C,a){return G5(C)===G5(a)}function K5(C,a){return D(a)?a.findIndex(e=>j5(e,C)):_(a)&&j5(a,C)?0:-1}const g0=C=>C[0]==="_"||C==="$stable",V6=C=>D(C)?C.map(w2):[w2(C)],Lf=(C,a,e)=>{const c=Dn((...r)=>V6(a(...r)),e);return c._c=!1,c},x0=(C,a,e)=>{const c=C._ctx;for(const r in C){if(g0(r))continue;const i=C[r];if(_(i))a[r]=Lf(r,i,c);else if(i!=null){const n=V6(i);a[r]=()=>n}}},S0=(C,a)=>{const e=V6(a);C.slots.default=()=>e},Mf=(C,a)=>{if(C.vnode.shapeFlag&32){const e=a._;e?(C.slots=G(a),u3(a,"_",e)):x0(a,C.slots={})}else C.slots={},a&&S0(C,a);u3(C.slots,E3,1)},Hf=(C,a,e)=>{const{vnode:c,slots:r}=C;let i=!0,n=K;if(c.shapeFlag&32){const f=a._;f?e&&f===1?i=!1:(n2(r,a),!e&&f===1&&delete r._):(i=!a.$stable,x0(a,r)),n=a}else a&&(S0(C,a),n={default:1});if(i)for(const f in r)!g0(f)&&!(f in n)&&delete r[f]};function a1(C,a,e,c){const r=C.dirs,i=a&&a.dirs;for(let n=0;n<r.length;n++){const f=r[n];i&&(f.oldValue=i[n].value);let o=f.dir[c];o&&(y1(),h2(o,e,8,[C.el,f,C,a]),A1())}}function b0(){return{app:null,config:{isNativeTag:Ii,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vf=0;function zf(C,a){return function(c,r=null){r!=null&&!e2(r)&&(r=null);const i=b0(),n=new Set;let f=!1;const o=i.app={_uid:Vf++,_component:c,_props:r,_container:null,_context:i,_instance:null,version:Of,get config(){return i.config},set config(l){},use(l,...L){return n.has(l)||(l&&_(l.install)?(n.add(l),l.install(o,...L)):_(l)&&(n.add(l),l(o,...L))),o},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),o},component(l,L){return L?(i.components[l]=L,o):i.components[l]},directive(l,L){return L?(i.directives[l]=L,o):i.directives[l]},mount(l,L,M){if(!f){const V=L2(c,r);return V.appContext=i,L&&a?a(V,l):C(V,l,M),f=!0,o._container=l,l.__vue_app__=o,v6(V.component)||V.component.proxy}},unmount(){f&&(C(null,o._container),delete o._container.__vue_app__)},provide(l,L){return i.provides[l]=L,o}};return o}}function T4(C,a,e,c,r=!1){if(D(C)){C.forEach((V,g)=>T4(V,a&&(D(a)?a[g]:a),e,c,r));return}if(w4(c)&&!r)return;const i=c.shapeFlag&4?v6(c.component)||c.component.proxy:c.el,n=r?null:i,{i:f,r:o}=C,l=a&&a.r,L=f.refs===K?f.refs={}:f.refs,M=f.setupState;if(l!=null&&l!==o&&(r2(l)?(L[l]=null,q(M,l)&&(M[l]=null)):o2(l)&&(l.value=null)),_(o))Q2(o,f,12,[n,L]);else{const V=r2(o),g=o2(o);if(V||g){const w=()=>{if(C.f){const F=V?L[o]:o.value;r?D(F)&&Z4(F,i):D(F)?F.includes(i)||F.push(i):V?L[o]=[i]:(o.value=[i],C.k&&(L[C.k]=o.value))}else V?(L[o]=n,q(M,o)&&(M[o]=n)):o2(o)&&(o.value=n,C.k&&(L[C.k]=n))};n?(w.id=-1,s2(w,e)):w()}}}const s2=qn;function uf(C){return vf(C)}function vf(C,a){const e=$i();e.__VUE__=!0;const{insert:c,remove:r,patchProp:i,createElement:n,createText:f,createComment:o,setText:l,setElementText:L,parentNode:M,nextSibling:V,setScopeId:g=g2,cloneNode:w,insertStaticContent:F}=C,k=(t,s,H,u=null,z=null,p=null,x=!1,m=null,d=!!s.dynamicChildren)=>{if(t===s)return;t&&!i1(t,s)&&(u=e3(t),q2(t,z,p,!0),t=null),s.patchFlag===-2&&(d=!1,s.dynamicChildren=null);const{type:v,ref:y,shapeFlag:N}=s;switch(v){case z6:h(t,s,H,u);break;case T2:S(t,s,H,u);break;case s3:t==null&&B(s,H,u,x);break;case N2:a2(t,s,H,u,z,p,x,m,d);break;default:N&1?C2(t,s,H,u,z,p,x,m,d):N&6?x2(t,s,H,u,z,p,x,m,d):(N&64||N&128)&&v.process(t,s,H,u,z,p,x,m,d,V1)}y!=null&&z&&T4(y,t&&t.ref,p,s||t,!s)},h=(t,s,H,u)=>{if(t==null)c(s.el=f(s.children),H,u);else{const z=s.el=t.el;s.children!==t.children&&l(z,s.children)}},S=(t,s,H,u)=>{t==null?c(s.el=o(s.children||""),H,u):s.el=t.el},B=(t,s,H,u)=>{[t.el,t.anchor]=F(t.children,s,H,u,t.el,t.anchor)},E=({el:t,anchor:s},H,u)=>{let z;for(;t&&t!==s;)z=V(t),c(t,H,u),t=z;c(s,H,u)},O=({el:t,anchor:s})=>{let H;for(;t&&t!==s;)H=V(t),r(t),t=H;r(s)},C2=(t,s,H,u,z,p,x,m,d)=>{x=x||s.type==="svg",t==null?U(s,H,u,z,p,x,m,d):l2(t,s,z,p,x,m,d)},U=(t,s,H,u,z,p,x,m)=>{let d,v;const{type:y,props:N,shapeFlag:A,transition:R,patchFlag:I,dirs:J}=t;if(t.el&&w!==void 0&&I===-1)d=t.el=w(t.el);else{if(d=t.el=n(t.type,p,N&&N.is,N),A&8?L(d,t.children):A&16&&W(t.children,d,null,u,z,p&&y!=="foreignObject",x,m),J&&a1(t,null,u,"created"),N){for(const X in N)X!=="value"&&!t3(X)&&i(d,X,null,N[X],p,t.children,u,z,B2);"value"in N&&i(d,"value",null,N.value),(v=N.onVnodeBeforeMount)&&b2(v,u,t)}$(d,t,t.scopeId,x,u)}J&&a1(t,null,u,"beforeMount");const j=(!z||z&&!z.pendingBranch)&&R&&!R.persisted;j&&R.beforeEnter(d),c(d,s,H),((v=N&&N.onVnodeMounted)||j||J)&&s2(()=>{v&&b2(v,u,t),j&&R.enter(d),J&&a1(t,null,u,"mounted")},z)},$=(t,s,H,u,z)=>{if(H&&g(t,H),u)for(let p=0;p<u.length;p++)g(t,u[p]);if(z){let p=z.subTree;if(s===p){const x=z.vnode;$(t,x,x.scopeId,x.slotScopeIds,z.parent)}}},W=(t,s,H,u,z,p,x,m,d=0)=>{for(let v=d;v<t.length;v++){const y=t[v]=m?Y2(t[v]):w2(t[v]);k(null,y,s,H,u,z,p,x,m)}},l2=(t,s,H,u,z,p,x)=>{const m=s.el=t.el;let{patchFlag:d,dynamicChildren:v,dirs:y}=s;d|=t.patchFlag&16;const N=t.props||K,A=s.props||K;let R;H&&e1(H,!1),(R=A.onVnodeBeforeUpdate)&&b2(R,H,s,t),y&&a1(s,t,H,"beforeUpdate"),H&&e1(H,!0);const I=z&&s.type!=="foreignObject";if(v?f2(t.dynamicChildren,v,m,H,u,I,p):x||P2(t,s,m,null,H,u,I,p,!1),d>0){if(d&16)P(m,s,N,A,H,u,z);else if(d&2&&N.class!==A.class&&i(m,"class",null,A.class,z),d&4&&i(m,"style",N.style,A.style,z),d&8){const J=s.dynamicProps;for(let j=0;j<J.length;j++){const X=J[j],m2=N[X],z1=A[X];(z1!==m2||X==="value")&&i(m,X,m2,z1,z,t.children,H,u,B2)}}d&1&&t.children!==s.children&&L(m,s.children)}else!x&&v==null&&P(m,s,N,A,H,u,z);((R=A.onVnodeUpdated)||y)&&s2(()=>{R&&b2(R,H,s,t),y&&a1(s,t,H,"updated")},u)},f2=(t,s,H,u,z,p,x)=>{for(let m=0;m<s.length;m++){const d=t[m],v=s[m],y=d.el&&(d.type===N2||!i1(d,v)||d.shapeFlag&70)?M(d.el):H;k(d,v,y,null,u,z,p,x,!0)}},P=(t,s,H,u,z,p,x)=>{if(H!==u){for(const m in u){if(t3(m))continue;const d=u[m],v=H[m];d!==v&&m!=="value"&&i(t,m,v,d,x,s.children,z,p,B2)}if(H!==K)for(const m in H)!t3(m)&&!(m in u)&&i(t,m,H[m],null,x,s.children,z,p,B2);"value"in u&&i(t,"value",H.value,u.value)}},a2=(t,s,H,u,z,p,x,m,d)=>{const v=s.el=t?t.el:f(""),y=s.anchor=t?t.anchor:f("");let{patchFlag:N,dynamicChildren:A,slotScopeIds:R}=s;R&&(m=m?m.concat(R):R),t==null?(c(v,H,u),c(y,H,u),W(s.children,H,y,z,p,x,m,d)):N>0&&N&64&&A&&t.dynamicChildren?(f2(t.dynamicChildren,A,H,z,p,x,m),(s.key!=null||z&&s===z.subTree)&&N0(t,s,!0)):P2(t,s,H,y,z,p,x,m,d)},x2=(t,s,H,u,z,p,x,m,d)=>{s.slotScopeIds=m,t==null?s.shapeFlag&512?z.ctx.activate(s,H,u,x,d):M1(s,H,u,z,p,x,d):i2(t,s,d)},M1=(t,s,H,u,z,p,x)=>{const m=t.component=Pf(t,u,z);if(R3(t)&&(m.ctx.renderer=V1),Ff(m),m.asyncDep){if(z&&z.registerDep(m,Z),!t.el){const d=m.subTree=L2(T2);S(null,d,s,H)}return}Z(m,t,s,H,z,p,x)},i2=(t,s,H)=>{const u=s.component=t.component;if(_n(t,s,H))if(u.asyncDep&&!u.asyncResolved){Y(u,s,H);return}else u.next=s,Pn(u.update),u.update();else s.component=t.component,s.el=t.el,u.vnode=s},Z=(t,s,H,u,z,p,x)=>{const m=()=>{if(t.isMounted){let{next:y,bu:N,u:A,parent:R,vnode:I}=t,J=y,j;e1(t,!1),y?(y.el=I.el,Y(t,y,x)):y=I,N&&l4(N),(j=y.props&&y.props.onVnodeBeforeUpdate)&&b2(j,R,y,I),e1(t,!0);const X=s4(t),m2=t.subTree;t.subTree=X,k(m2,X,M(m2.el),e3(m2),t,z,p),y.el=X.el,J===null&&On(t,X.el),A&&s2(A,z),(j=y.props&&y.props.onVnodeUpdated)&&s2(()=>b2(j,R,y,I),z)}else{let y;const{el:N,props:A}=s,{bm:R,m:I,parent:J}=t,j=w4(s);if(e1(t,!1),R&&l4(R),!j&&(y=A&&A.onVnodeBeforeMount)&&b2(y,J,s),e1(t,!0),N&&o4){const X=()=>{t.subTree=s4(t),o4(N,t.subTree,t,z,null)};j?s.type.__asyncLoader().then(()=>!t.isUnmounted&&X()):X()}else{const X=t.subTree=s4(t);k(null,X,H,u,t,z,p),s.el=X.el}if(I&&s2(I,z),!j&&(y=A&&A.onVnodeMounted)){const X=s;s2(()=>b2(y,J,X),z)}s.shapeFlag&256&&t.a&&s2(t.a,z),t.isMounted=!0,s=H=u=null}},d=t.effect=new c6(m,()=>r0(t.update),t.scope),v=t.update=d.run.bind(d);v.id=t.uid,e1(t,!0),v()},Y=(t,s,H)=>{s.component=t;const u=t.vnode.props;t.vnode=s,t.next=null,sf(t,s.props,u,H),Hf(t,s.children,H),y1(),L6(void 0,t.update),A1()},P2=(t,s,H,u,z,p,x,m,d=!1)=>{const v=t&&t.children,y=t?t.shapeFlag:0,N=s.children,{patchFlag:A,shapeFlag:R}=s;if(A>0){if(A&128){P1(v,N,H,u,z,p,x,m,d);return}else if(A&256){n4(v,N,H,u,z,p,x,m,d);return}}R&8?(y&16&&B2(v,z,p),N!==v&&L(H,N)):y&16?R&16?P1(v,N,H,u,z,p,x,m,d):B2(v,z,p,!0):(y&8&&L(H,""),R&16&&W(N,H,u,z,p,x,m,d))},n4=(t,s,H,u,z,p,x,m,d)=>{t=t||g1,s=s||g1;const v=t.length,y=s.length,N=Math.min(v,y);let A;for(A=0;A<N;A++){const R=s[A]=d?Y2(s[A]):w2(s[A]);k(t[A],R,H,null,z,p,x,m,d)}v>y?B2(t,z,p,!0,!1,N):W(s,H,u,z,p,x,m,d,N)},P1=(t,s,H,u,z,p,x,m,d)=>{let v=0;const y=s.length;let N=t.length-1,A=y-1;for(;v<=N&&v<=A;){const R=t[v],I=s[v]=d?Y2(s[v]):w2(s[v]);if(i1(R,I))k(R,I,H,null,z,p,x,m,d);else break;v++}for(;v<=N&&v<=A;){const R=t[N],I=s[A]=d?Y2(s[A]):w2(s[A]);if(i1(R,I))k(R,I,H,null,z,p,x,m,d);else break;N--,A--}if(v>N){if(v<=A){const R=A+1,I=R<y?s[R].el:u;for(;v<=A;)k(null,s[v]=d?Y2(s[v]):w2(s[v]),H,I,z,p,x,m,d),v++}}else if(v>A)for(;v<=N;)q2(t[v],z,p,!0),v++;else{const R=v,I=v,J=new Map;for(v=I;v<=A;v++){const M2=s[v]=d?Y2(s[v]):w2(s[v]);M2.key!=null&&J.set(M2.key,v)}let j,X=0;const m2=A-I+1;let z1=!1,k5=0;const B1=new Array(m2);for(v=0;v<m2;v++)B1[v]=0;for(v=R;v<=N;v++){const M2=t[v];if(X>=m2){q2(M2,z,p,!0);continue}let S2;if(M2.key!=null)S2=J.get(M2.key);else for(j=I;j<=A;j++)if(B1[j-I]===0&&i1(M2,s[j])){S2=j;break}S2===void 0?q2(M2,z,p,!0):(B1[S2-I]=v+1,S2>=k5?k5=S2:z1=!0,k(M2,s[S2],H,null,z,p,x,m,d),X++)}const y5=z1?hf(B1):g1;for(j=y5.length-1,v=m2-1;v>=0;v--){const M2=I+v,S2=s[M2],A5=M2+1<y?s[M2+1].el:u;B1[v]===0?k(null,S2,H,A5,z,p,x,m,d):z1&&(j<0||v!==y5[j]?H1(S2,H,A5,2):j--)}}},H1=(t,s,H,u,z=null)=>{const{el:p,type:x,transition:m,children:d,shapeFlag:v}=t;if(v&6){H1(t.component.subTree,s,H,u);return}if(v&128){t.suspense.move(s,H,u);return}if(v&64){x.move(t,s,H,V1);return}if(x===N2){c(p,s,H);for(let N=0;N<d.length;N++)H1(d[N],s,H,u);c(t.anchor,s,H);return}if(x===s3){E(t,s,H);return}if(u!==2&&v&1&&m)if(u===0)m.beforeEnter(p),c(p,s,H),s2(()=>m.enter(p),z);else{const{leave:N,delayLeave:A,afterLeave:R}=m,I=()=>c(p,s,H),J=()=>{N(p,()=>{I(),R&&R()})};A?A(p,I,J):J()}else c(p,s,H)},q2=(t,s,H,u=!1,z=!1)=>{const{type:p,props:x,ref:m,children:d,dynamicChildren:v,shapeFlag:y,patchFlag:N,dirs:A}=t;if(m!=null&&T4(m,null,H,t,!0),y&256){s.ctx.deactivate(t);return}const R=y&1&&A,I=!w4(t);let J;if(I&&(J=x&&x.onVnodeBeforeUnmount)&&b2(J,s,t),y&6)Ri(t.component,H,u);else{if(y&128){t.suspense.unmount(H,u);return}R&&a1(t,null,s,"beforeUnmount"),y&64?t.type.remove(t,s,H,z,V1,u):v&&(p!==N2||N>0&&N&64)?B2(v,s,H,!1,!0):(p===N2&&N&384||!z&&y&16)&&B2(d,s,H),u&&N5(t)}(I&&(J=x&&x.onVnodeUnmounted)||R)&&s2(()=>{J&&b2(J,s,t),R&&a1(t,null,s,"unmounted")},H)},N5=t=>{const{type:s,el:H,anchor:u,transition:z}=t;if(s===N2){Fi(H,u);return}if(s===s3){O(t);return}const p=()=>{r(H),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(t.shapeFlag&1&&z&&!z.persisted){const{leave:x,delayLeave:m}=z,d=()=>x(H,p);m?m(t.el,p,d):d()}else p()},Fi=(t,s)=>{let H;for(;t!==s;)H=V(t),r(t),t=H;r(s)},Ri=(t,s,H)=>{const{bum:u,scope:z,update:p,subTree:x,um:m}=t;u&&l4(u),z.stop(),p&&(p.active=!1,q2(x,t,s,H)),m&&s2(m,s),s2(()=>{t.isUnmounted=!0},s),s&&s.pendingBranch&&!s.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===s.pendingId&&(s.deps--,s.deps===0&&s.resolve())},B2=(t,s,H,u=!1,z=!1,p=0)=>{for(let x=p;x<t.length;x++)q2(t[x],s,H,u,z)},e3=t=>t.shapeFlag&6?e3(t.component.subTree):t.shapeFlag&128?t.suspense.next():V(t.anchor||t.el),w5=(t,s,H)=>{t==null?s._vnode&&q2(s._vnode,null,null,!0):k(s._vnode||null,t,s,null,null,null,H),f0(),s._vnode=t},V1={p:k,um:q2,m:H1,r:N5,mt:M1,mc:W,pc:P2,pbc:f2,n:e3,o:C};let f4,o4;return a&&([f4,o4]=a(V1)),{render:w5,hydrate:f4,createApp:zf(w5,f4)}}function e1({effect:C,update:a},e){C.allowRecurse=a.allowRecurse=e}function N0(C,a,e=!1){const c=C.children,r=a.children;if(D(c)&&D(r))for(let i=0;i<c.length;i++){const n=c[i];let f=r[i];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=r[i]=Y2(r[i]),f.el=n.el),e||N0(n,f))}}function hf(C){const a=C.slice(),e=[0];let c,r,i,n,f;const o=C.length;for(c=0;c<o;c++){const l=C[c];if(l!==0){if(r=e[e.length-1],C[r]<l){a[c]=r,e.push(c);continue}for(i=0,n=e.length-1;i<n;)f=i+n>>1,C[e[f]]<l?i=f+1:n=f;l<C[e[i]]&&(i>0&&(a[c]=e[i-1]),e[i]=c)}}for(i=e.length,n=e[i-1];i-- >0;)e[i]=n,n=a[n];return e}const mf=C=>C.__isTeleport,w0="components";function yD(C,a){return df(w0,C,!0,a)||C}const pf=Symbol();function df(C,a,e=!0,c=!1){const r=p2||c2;if(r){const i=r.type;if(C===w0){const f=Uf(i);if(f&&(f===a||f===A2(a)||f===T3(A2(a))))return i}const n=$5(r[C]||i[C],a)||$5(r.appContext[C],a);return!n&&c?i:n}}function $5(C,a){return C&&(C[a]||C[A2(a)]||C[T3(A2(a))])}const N2=Symbol(void 0),z6=Symbol(void 0),T2=Symbol(void 0),s3=Symbol(void 0),I1=[];let t1=null;function gf(C=!1){I1.push(t1=C?null:[])}function xf(){I1.pop(),t1=I1[I1.length-1]||null}let p3=1;function Y5(C){p3+=C}function k0(C){return C.dynamicChildren=p3>0?t1||g1:null,xf(),p3>0&&t1&&t1.push(C),C}function AD(C,a,e,c,r,i){return k0(A0(C,a,e,c,r,i,!0))}function Sf(C,a,e,c,r){return k0(L2(C,a,e,c,r,!0))}function P4(C){return C?C.__v_isVNode===!0:!1}function i1(C,a){return C.type===a.type&&C.key===a.key}const E3="__vInternal",y0=({key:C})=>C!=null?C:null,L3=({ref:C,ref_key:a,ref_for:e})=>C!=null?r2(C)||o2(C)||_(C)?{i:p2,r:C,k:a,f:!!e}:C:null;function A0(C,a=null,e=null,c=0,r=null,i=C===N2?0:1,n=!1,f=!1){const o={__v_isVNode:!0,__v_skip:!0,type:C,props:a,key:a&&y0(a),ref:a&&L3(a),scopeId:F3,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:c,dynamicProps:r,dynamicChildren:null,appContext:null};return f?(u6(o,e),i&128&&C.normalize(o)):e&&(o.shapeFlag|=r2(e)?8:16),p3>0&&!n&&t1&&(o.patchFlag>0||i&6)&&o.patchFlag!==32&&t1.push(o),o}const L2=bf;function bf(C,a=null,e=null,c=0,r=null,i=!1){if((!C||C===pf)&&(C=T2),P4(C)){const f=N1(C,a,!0);return e&&u6(f,e),f}if(_f(C)&&(C=C.__vccOpts),a){a=Nf(a);let{class:f,style:o}=a;f&&!r2(f)&&(a.class=Q4(f)),e2(o)&&(C0(o)&&!D(o)&&(o=n2({},o)),a.style=X4(o))}const n=r2(C)?1:In(C)?128:mf(C)?64:e2(C)?4:_(C)?2:0;return A0(C,a,e,c,r,n,i,!0)}function Nf(C){return C?C0(C)||E3 in C?n2({},C):C:null}function N1(C,a,e=!1){const{props:c,ref:r,patchFlag:i,children:n}=C,f=a?kf(c||{},a):c;return{__v_isVNode:!0,__v_skip:!0,type:C.type,props:f,key:f&&y0(f),ref:a&&a.ref?e&&r?D(r)?r.concat(L3(a)):[r,L3(a)]:L3(a):r,scopeId:C.scopeId,slotScopeIds:C.slotScopeIds,children:n,target:C.target,targetAnchor:C.targetAnchor,staticCount:C.staticCount,shapeFlag:C.shapeFlag,patchFlag:a&&C.type!==N2?i===-1?16:i|16:i,dynamicProps:C.dynamicProps,dynamicChildren:C.dynamicChildren,appContext:C.appContext,dirs:C.dirs,transition:C.transition,component:C.component,suspense:C.suspense,ssContent:C.ssContent&&N1(C.ssContent),ssFallback:C.ssFallback&&N1(C.ssFallback),el:C.el,anchor:C.anchor}}function wf(C=" ",a=0){return L2(z6,null,C,a)}function TD(C,a){const e=L2(s3,null,C);return e.staticCount=a,e}function PD(C="",a=!1){return a?(gf(),Sf(T2,null,C)):L2(T2,null,C)}function w2(C){return C==null||typeof C=="boolean"?L2(T2):D(C)?L2(N2,null,C.slice()):typeof C=="object"?Y2(C):L2(z6,null,String(C))}function Y2(C){return C.el===null||C.memo?C:N1(C)}function u6(C,a){let e=0;const{shapeFlag:c}=C;if(a==null)a=null;else if(D(a))e=16;else if(typeof a=="object")if(c&65){const r=a.default;r&&(r._c&&(r._d=!1),u6(C,r()),r._c&&(r._d=!0));return}else{e=32;const r=a._;!r&&!(E3 in a)?a._ctx=p2:r===3&&p2&&(p2.slots._===1?a._=1:(a._=2,C.patchFlag|=1024))}else _(a)?(a={default:a,_ctx:p2},e=32):(a=String(a),c&64?(e=16,a=[wf(a)]):e=8);C.children=a,C.shapeFlag|=e}function kf(...C){const a={};for(let e=0;e<C.length;e++){const c=C[e];for(const r in c)if(r==="class")a.class!==c.class&&(a.class=Q4([a.class,c.class]));else if(r==="style")a.style=X4([a.style,c.style]);else if(k3(r)){const i=a[r],n=c[r];n&&i!==n&&!(D(i)&&i.includes(n))&&(a[r]=i?[].concat(i,n):n)}else r!==""&&(a[r]=c[r])}return a}function b2(C,a,e,c=null){h2(C,a,7,[e,c])}function BD(C,a,e,c){let r;const i=e&&e[c];if(D(C)||r2(C)){r=new Array(C.length);for(let n=0,f=C.length;n<f;n++)r[n]=a(C[n],n,void 0,i&&i[n])}else if(typeof C=="number"){r=new Array(C);for(let n=0;n<C;n++)r[n]=a(n+1,n,void 0,i&&i[n])}else if(e2(C))if(C[Symbol.iterator])r=Array.from(C,(n,f)=>a(n,f,void 0,i&&i[f]));else{const n=Object.keys(C);r=new Array(n.length);for(let f=0,o=n.length;f<o;f++){const l=n[f];r[f]=a(C[l],l,f,i&&i[f])}}else r=[];return e&&(e[c]=r),r}const B4=C=>C?T0(C)?v6(C)||C.proxy:B4(C.parent):null,d3=n2(Object.create(null),{$:C=>C,$el:C=>C.vnode.el,$data:C=>C.data,$props:C=>C.props,$attrs:C=>C.attrs,$slots:C=>C.slots,$refs:C=>C.refs,$parent:C=>B4(C.parent),$root:C=>B4(C.root),$emit:C=>C.emit,$options:C=>m0(C),$forceUpdate:C=>()=>r0(C.update),$nextTick:C=>An.bind(C.proxy),$watch:C=>Gn.bind(C)}),yf={get({_:C},a){const{ctx:e,setupState:c,data:r,props:i,accessCache:n,type:f,appContext:o}=C;let l;if(a[0]!=="$"){const g=n[a];if(g!==void 0)switch(g){case 1:return c[a];case 2:return r[a];case 4:return e[a];case 3:return i[a]}else{if(c!==K&&q(c,a))return n[a]=1,c[a];if(r!==K&&q(r,a))return n[a]=2,r[a];if((l=C.propsOptions[0])&&q(l,a))return n[a]=3,i[a];if(e!==K&&q(e,a))return n[a]=4,e[a];k4&&(n[a]=0)}}const L=d3[a];let M,V;if(L)return a==="$attrs"&&V2(C,"get",a),L(C);if((M=f.__cssModules)&&(M=M[a]))return M;if(e!==K&&q(e,a))return n[a]=4,e[a];if(V=o.config.globalProperties,q(V,a))return V[a]},set({_:C},a,e){const{data:c,setupState:r,ctx:i}=C;return r!==K&&q(r,a)?(r[a]=e,!0):c!==K&&q(c,a)?(c[a]=e,!0):q(C.props,a)||a[0]==="$"&&a.slice(1)in C?!1:(i[a]=e,!0)},has({_:{data:C,setupState:a,accessCache:e,ctx:c,appContext:r,propsOptions:i}},n){let f;return!!e[n]||C!==K&&q(C,n)||a!==K&&q(a,n)||(f=i[0])&&q(f,n)||q(c,n)||q(d3,n)||q(r.config.globalProperties,n)},defineProperty(C,a,e){return e.get!=null?this.set(C,a,e.get(),null):e.value!=null&&this.set(C,a,e.value,null),Reflect.defineProperty(C,a,e)}},Af=b0();let Tf=0;function Pf(C,a,e){const c=C.type,r=(a?a.appContext:C.appContext)||Af,i={uid:Tf++,vnode:C,type:c,parent:a,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Yi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:d0(c,r),emitsOptions:t0(c,r),emit:null,emitted:null,propsDefaults:K,inheritAttrs:c.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=a?a.root:i,i.emit=Rn.bind(null,i),C.ce&&C.ce(i),i}let c2=null;const Bf=()=>c2||p2,w1=C=>{c2=C,C.scope.on()},l1=()=>{c2&&c2.scope.off(),c2=null};function T0(C){return C.vnode.shapeFlag&4}let $1=!1;function Ff(C,a=!1){$1=a;const{props:e,children:c}=C.vnode,r=T0(C);lf(C,e,r,a),Mf(C,c);const i=r?Rf(C,a):void 0;return $1=!1,i}function Rf(C,a){const e=C.type;C.accessCache=Object.create(null),C.proxy=a0(new Proxy(C.ctx,yf));const{setup:c}=e;if(c){const r=C.setupContext=c.length>1?Ef(C):null;w1(C),y1();const i=Q2(c,C,0,[C.props,r]);if(A1(),l1(),E8(i)){if(i.then(l1,l1),a)return i.then(n=>{X5(C,n,a)}).catch(n=>{B3(n,C,0)});C.asyncDep=i}else X5(C,i,a)}else P0(C,a)}function X5(C,a,e){_(a)?C.type.__ssrInlineRender?C.ssrRender=a:C.render=a:e2(a)&&(C.setupState=e0(a)),P0(C,e)}let Q5;function P0(C,a,e){const c=C.type;if(!C.render){if(!a&&Q5&&!c.render){const r=c.template;if(r){const{isCustomElement:i,compilerOptions:n}=C.appContext.config,{delimiters:f,compilerOptions:o}=c,l=n2(n2({isCustomElement:i,delimiters:f},n),o);c.render=Q5(r,l)}}C.render=c.render||g2}w1(C),y1(),rf(C),A1(),l1()}function Df(C){return new Proxy(C.attrs,{get(a,e){return V2(C,"get","$attrs"),a[e]}})}function Ef(C){const a=c=>{C.exposed=c||{}};let e;return{get attrs(){return e||(e=Df(C))},slots:C.slots,emit:C.emit,expose:a}}function v6(C){if(C.exposed)return C.exposeProxy||(C.exposeProxy=new Proxy(e0(a0(C.exposed)),{get(a,e){if(e in a)return a[e];if(e in d3)return d3[e](C)}}))}function Uf(C){return _(C)&&C.displayName||C.name}function _f(C){return _(C)&&"__vccOpts"in C}const v2=(C,a)=>kn(C,a,$1);function h6(C,a,e){const c=arguments.length;return c===2?e2(a)&&!D(a)?P4(a)?L2(C,null,[a]):L2(C,a):L2(C,null,a):(c>3?e=Array.prototype.slice.call(arguments,2):c===3&&P4(e)&&(e=[e]),L2(C,a,e))}const Of="3.2.31",If="http://www.w3.org/2000/svg",n1=typeof document!="undefined"?document:null,J5=n1&&n1.createElement("template"),qf={insert:(C,a,e)=>{a.insertBefore(C,e||null)},remove:C=>{const a=C.parentNode;a&&a.removeChild(C)},createElement:(C,a,e,c)=>{const r=a?n1.createElementNS(If,C):n1.createElement(C,e?{is:e}:void 0);return C==="select"&&c&&c.multiple!=null&&r.setAttribute("multiple",c.multiple),r},createText:C=>n1.createTextNode(C),createComment:C=>n1.createComment(C),setText:(C,a)=>{C.nodeValue=a},setElementText:(C,a)=>{C.textContent=a},parentNode:C=>C.parentNode,nextSibling:C=>C.nextSibling,querySelector:C=>n1.querySelector(C),setScopeId(C,a){C.setAttribute(a,"")},cloneNode(C){const a=C.cloneNode(!0);return"_value"in C&&(a._value=C._value),a},insertStaticContent(C,a,e,c,r,i){const n=e?e.previousSibling:a.lastChild;if(r&&(r===i||r.nextSibling))for(;a.insertBefore(r.cloneNode(!0),e),!(r===i||!(r=r.nextSibling)););else{J5.innerHTML=c?`<svg>${C}</svg>`:C;const f=J5.content;if(c){const o=f.firstChild;for(;o.firstChild;)f.appendChild(o.firstChild);f.removeChild(o)}a.insertBefore(f,e)}return[n?n.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}};function Wf(C,a,e){const c=C._vtc;c&&(a=(a?[a,...c]:[...c]).join(" ")),a==null?C.removeAttribute("class"):e?C.setAttribute("class",a):C.className=a}function Gf(C,a,e){const c=C.style,r=r2(e);if(e&&!r){for(const i in e)F4(c,i,e[i]);if(a&&!r2(a))for(const i in a)e[i]==null&&F4(c,i,"")}else{const i=c.display;r?a!==e&&(c.cssText=e):a&&C.removeAttribute("style"),"_vod"in C&&(c.display=i)}}const Z5=/\s*!important$/;function F4(C,a,e){if(D(e))e.forEach(c=>F4(C,a,c));else if(a.startsWith("--"))C.setProperty(a,e);else{const c=jf(C,a);Z5.test(e)?C.setProperty(k1(c),e.replace(Z5,""),"important"):C[c]=e}}const C8=["Webkit","Moz","ms"],H4={};function jf(C,a){const e=H4[a];if(e)return e;let c=A2(a);if(c!=="filter"&&c in C)return H4[a]=c;c=T3(c);for(let r=0;r<C8.length;r++){const i=C8[r]+c;if(i in C)return H4[a]=i}return a}const a8="http://www.w3.org/1999/xlink";function Kf(C,a,e,c,r){if(c&&a.startsWith("xlink:"))e==null?C.removeAttributeNS(a8,a.slice(6,a.length)):C.setAttributeNS(a8,a,e);else{const i=Ei(a);e==null||i&&!F8(e)?C.removeAttribute(a):C.setAttribute(a,i?"":e)}}function $f(C,a,e,c,r,i,n){if(a==="innerHTML"||a==="textContent"){c&&n(c,r,i),C[a]=e==null?"":e;return}if(a==="value"&&C.tagName!=="PROGRESS"&&!C.tagName.includes("-")){C._value=e;const f=e==null?"":e;(C.value!==f||C.tagName==="OPTION")&&(C.value=f),e==null&&C.removeAttribute(a);return}if(e===""||e==null){const f=typeof C[a];if(f==="boolean"){C[a]=F8(e);return}else if(e==null&&f==="string"){C[a]="",C.removeAttribute(a);return}else if(f==="number"){try{C[a]=0}catch{}C.removeAttribute(a);return}}try{C[a]=e}catch{}}let g3=Date.now,B0=!1;if(typeof window!="undefined"){g3()>document.createEvent("Event").timeStamp&&(g3=()=>performance.now());const C=navigator.userAgent.match(/firefox\/(\d+)/i);B0=!!(C&&Number(C[1])<=53)}let R4=0;const Yf=Promise.resolve(),Xf=()=>{R4=0},Qf=()=>R4||(Yf.then(Xf),R4=g3());function Jf(C,a,e,c){C.addEventListener(a,e,c)}function Zf(C,a,e,c){C.removeEventListener(a,e,c)}function Co(C,a,e,c,r=null){const i=C._vei||(C._vei={}),n=i[a];if(c&&n)n.value=c;else{const[f,o]=ao(a);if(c){const l=i[a]=eo(c,r);Jf(C,f,l,o)}else n&&(Zf(C,f,n,o),i[a]=void 0)}}const e8=/(?:Once|Passive|Capture)$/;function ao(C){let a;if(e8.test(C)){a={};let e;for(;e=C.match(e8);)C=C.slice(0,C.length-e[0].length),a[e[0].toLowerCase()]=!0}return[k1(C.slice(2)),a]}function eo(C,a){const e=c=>{const r=c.timeStamp||g3();(B0||r>=e.attached-1)&&h2(co(c,e.value),a,5,[c])};return e.value=C,e.attached=Qf(),e}function co(C,a){if(D(a)){const e=C.stopImmediatePropagation;return C.stopImmediatePropagation=()=>{e.call(C),C._stopped=!0},a.map(c=>r=>!r._stopped&&c&&c(r))}else return a}const c8=/^on[a-z]/,ro=(C,a,e,c,r=!1,i,n,f,o)=>{a==="class"?Wf(C,c,r):a==="style"?Gf(C,e,c):k3(a)?J4(a)||Co(C,a,e,c,n):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):io(C,a,c,r))?$f(C,a,c,i,n,f,o):(a==="true-value"?C._trueValue=c:a==="false-value"&&(C._falseValue=c),Kf(C,a,c,r))};function io(C,a,e,c){return c?!!(a==="innerHTML"||a==="textContent"||a in C&&c8.test(a)&&_(e)):a==="spellcheck"||a==="draggable"||a==="form"||a==="list"&&C.tagName==="INPUT"||a==="type"&&C.tagName==="TEXTAREA"||c8.test(a)&&r2(e)?!1:a in C}const G2="transition",F1="animation",F0=(C,{slots:a})=>h6(L0,no(C),a);F0.displayName="Transition";const R0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};F0.props=n2({},L0.props,R0);const c1=(C,a=[])=>{D(C)?C.forEach(e=>e(...a)):C&&C(...a)},r8=C=>C?D(C)?C.some(a=>a.length>1):C.length>1:!1;function no(C){const a={};for(const P in C)P in R0||(a[P]=C[P]);if(C.css===!1)return a;const{name:e="v",type:c,duration:r,enterFromClass:i=`${e}-enter-from`,enterActiveClass:n=`${e}-enter-active`,enterToClass:f=`${e}-enter-to`,appearFromClass:o=i,appearActiveClass:l=n,appearToClass:L=f,leaveFromClass:M=`${e}-leave-from`,leaveActiveClass:V=`${e}-leave-active`,leaveToClass:g=`${e}-leave-to`}=C,w=fo(r),F=w&&w[0],k=w&&w[1],{onBeforeEnter:h,onEnter:S,onEnterCancelled:B,onLeave:E,onLeaveCancelled:O,onBeforeAppear:C2=h,onAppear:U=S,onAppearCancelled:$=B}=a,W=(P,a2,x2)=>{u1(P,a2?L:f),u1(P,a2?l:n),x2&&x2()},l2=(P,a2)=>{u1(P,g),u1(P,V),a2&&a2()},f2=P=>(a2,x2)=>{const M1=P?U:S,i2=()=>W(a2,P,x2);c1(M1,[a2,i2]),i8(()=>{u1(a2,P?o:i),j2(a2,P?L:f),r8(M1)||n8(a2,c,F,i2)})};return n2(a,{onBeforeEnter(P){c1(h,[P]),j2(P,i),j2(P,n)},onBeforeAppear(P){c1(C2,[P]),j2(P,o),j2(P,l)},onEnter:f2(!1),onAppear:f2(!0),onLeave(P,a2){const x2=()=>l2(P,a2);j2(P,M),lo(),j2(P,V),i8(()=>{u1(P,M),j2(P,g),r8(E)||n8(P,c,k,x2)}),c1(E,[P,x2])},onEnterCancelled(P){W(P,!1),c1(B,[P])},onAppearCancelled(P){W(P,!0),c1($,[P])},onLeaveCancelled(P){l2(P),c1(O,[P])}})}function fo(C){if(C==null)return null;if(e2(C))return[V4(C.enter),V4(C.leave)];{const a=V4(C);return[a,a]}}function V4(C){return O8(C)}function j2(C,a){a.split(/\s+/).forEach(e=>e&&C.classList.add(e)),(C._vtc||(C._vtc=new Set)).add(a)}function u1(C,a){a.split(/\s+/).forEach(c=>c&&C.classList.remove(c));const{_vtc:e}=C;e&&(e.delete(a),e.size||(C._vtc=void 0))}function i8(C){requestAnimationFrame(()=>{requestAnimationFrame(C)})}let oo=0;function n8(C,a,e,c){const r=C._endId=++oo,i=()=>{r===C._endId&&c()};if(e)return setTimeout(i,e);const{type:n,timeout:f,propCount:o}=to(C,a);if(!n)return c();const l=n+"end";let L=0;const M=()=>{C.removeEventListener(l,V),i()},V=g=>{g.target===C&&++L>=o&&M()};setTimeout(()=>{L<o&&M()},f+1),C.addEventListener(l,V)}function to(C,a){const e=window.getComputedStyle(C),c=w=>(e[w]||"").split(", "),r=c(G2+"Delay"),i=c(G2+"Duration"),n=f8(r,i),f=c(F1+"Delay"),o=c(F1+"Duration"),l=f8(f,o);let L=null,M=0,V=0;a===G2?n>0&&(L=G2,M=n,V=i.length):a===F1?l>0&&(L=F1,M=l,V=o.length):(M=Math.max(n,l),L=M>0?n>l?G2:F1:null,V=L?L===G2?i.length:o.length:0);const g=L===G2&&/\b(transform|all)(,|$)/.test(e[G2+"Property"]);return{type:L,timeout:M,propCount:V,hasTransform:g}}function f8(C,a){for(;C.length<a.length;)C=C.concat(C);return Math.max(...a.map((e,c)=>o8(e)+o8(C[c])))}function o8(C){return Number(C.slice(0,-1).replace(",","."))*1e3}function lo(){return document.body.offsetHeight}const so=n2({patchProp:ro},qf);let t8;function Lo(){return t8||(t8=uf(so))}const FD=(...C)=>{const a=Lo().createApp(...C),{mount:e}=a;return a.mount=c=>{const r=Mo(c);if(!r)return;const i=a._component;!_(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const n=e(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),n},a};function Mo(C){return r2(C)?document.querySelector(C):C}/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function l8(C,a){var e=Object.keys(C);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(C);a&&(c=c.filter(function(r){return Object.getOwnPropertyDescriptor(C,r).enumerable})),e.push.apply(e,c)}return e}function b(C){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?l8(Object(e),!0).forEach(function(c){zo(C,c,e[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(C,Object.getOwnPropertyDescriptors(e)):l8(Object(e)).forEach(function(c){Object.defineProperty(C,c,Object.getOwnPropertyDescriptor(e,c))})}return C}function x3(C){return x3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},x3(C)}function Ho(C,a){if(!(C instanceof a))throw new TypeError("Cannot call a class as a function")}function s8(C,a){for(var e=0;e<a.length;e++){var c=a[e];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(C,c.key,c)}}function Vo(C,a,e){return a&&s8(C.prototype,a),e&&s8(C,e),Object.defineProperty(C,"prototype",{writable:!1}),C}function zo(C,a,e){return a in C?Object.defineProperty(C,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):C[a]=e,C}function m6(C,a){return vo(C)||mo(C,a)||D0(C,a)||go()}function U3(C){return uo(C)||ho(C)||D0(C)||po()}function uo(C){if(Array.isArray(C))return D4(C)}function vo(C){if(Array.isArray(C))return C}function ho(C){if(typeof Symbol!="undefined"&&C[Symbol.iterator]!=null||C["@@iterator"]!=null)return Array.from(C)}function mo(C,a){var e=C==null?null:typeof Symbol!="undefined"&&C[Symbol.iterator]||C["@@iterator"];if(e!=null){var c=[],r=!0,i=!1,n,f;try{for(e=e.call(C);!(r=(n=e.next()).done)&&(c.push(n.value),!(a&&c.length===a));r=!0);}catch(o){i=!0,f=o}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw f}}return c}}function D0(C,a){if(!!C){if(typeof C=="string")return D4(C,a);var e=Object.prototype.toString.call(C).slice(8,-1);if(e==="Object"&&C.constructor&&(e=C.constructor.name),e==="Map"||e==="Set")return Array.from(C);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return D4(C,a)}}function D4(C,a){(a==null||a>C.length)&&(a=C.length);for(var e=0,c=new Array(a);e<a;e++)c[e]=C[e];return c}function po(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function go(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var L8=function(){},p6={},E0={},U0=null,_0={mark:L8,measure:L8};try{typeof window!="undefined"&&(p6=window),typeof document!="undefined"&&(E0=document),typeof MutationObserver!="undefined"&&(U0=MutationObserver),typeof performance!="undefined"&&(_0=performance)}catch{}var xo=p6.navigator||{},M8=xo.userAgent,H8=M8===void 0?"":M8,Z2=p6,Q=E0,V8=U0,o3=_0;Z2.document;var I2=!!Q.documentElement&&!!Q.head&&typeof Q.addEventListener=="function"&&typeof Q.createElement=="function",O0=~H8.indexOf("MSIE")||~H8.indexOf("Trident/"),E2="___FONT_AWESOME___",E4=16,I0="fa",q0="svg-inline--fa",s1="data-fa-i2svg",U4="data-fa-pseudo-element",So="data-fa-pseudo-element-pending",d6="data-prefix",g6="data-icon",z8="fontawesome-i2svg",bo="async",No=["HTML","HEAD","STYLE","SCRIPT"],W0=function(){try{return!0}catch{return!1}}(),x6={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},S3={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},G0={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},wo={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},ko=/fa[srltdbk\-\ ]/,j0="fa-layers-text",yo=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Ao={"900":"fas","400":"far",normal:"far","300":"fal","100":"fat"},K0=[1,2,3,4,5,6,7,8,9,10],To=K0.concat([11,12,13,14,15,16,17,18,19,20]),Po=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],f1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Bo=[].concat(U3(Object.keys(S3)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",f1.GROUP,f1.SWAP_OPACITY,f1.PRIMARY,f1.SECONDARY]).concat(K0.map(function(C){return"".concat(C,"x")})).concat(To.map(function(C){return"w-".concat(C)})),$0=Z2.FontAwesomeConfig||{};function Fo(C){var a=Q.querySelector("script["+C+"]");if(a)return a.getAttribute(C)}function Ro(C){return C===""?!0:C==="false"?!1:C==="true"?!0:C}if(Q&&typeof Q.querySelector=="function"){var Do=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Do.forEach(function(C){var a=m6(C,2),e=a[0],c=a[1],r=Ro(Fo(e));r!=null&&($0[c]=r)})}var Eo={familyPrefix:I0,styleDefault:"solid",replacementClass:q0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},q1=b(b({},Eo),$0);q1.autoReplaceSvg||(q1.observeMutations=!1);var T={};Object.keys(q1).forEach(function(C){Object.defineProperty(T,C,{enumerable:!0,set:function(e){q1[C]=e,M3.forEach(function(c){return c(T)})},get:function(){return q1[C]}})});Z2.FontAwesomeConfig=T;var M3=[];function Uo(C){return M3.push(C),function(){M3.splice(M3.indexOf(C),1)}}var K2=E4,y2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function _o(C){if(!(!C||!I2)){var a=Q.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=C;for(var e=Q.head.childNodes,c=null,r=e.length-1;r>-1;r--){var i=e[r],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(c=i)}return Q.head.insertBefore(a,c),C}}var Oo="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Y1(){for(var C=12,a="";C-- >0;)a+=Oo[Math.random()*62|0];return a}function T1(C){for(var a=[],e=(C||[]).length>>>0;e--;)a[e]=C[e];return a}function S6(C){return C.classList?T1(C.classList):(C.getAttribute("class")||"").split(" ").filter(function(a){return a})}function Y0(C){return"".concat(C).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Io(C){return Object.keys(C||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(Y0(C[e]),'" ')},"").trim()}function _3(C){return Object.keys(C||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(C[e].trim(),";")},"")}function b6(C){return C.size!==y2.size||C.x!==y2.x||C.y!==y2.y||C.rotate!==y2.rotate||C.flipX||C.flipY}function qo(C){var a=C.transform,e=C.containerWidth,c=C.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),o={transform:"".concat(i," ").concat(n," ").concat(f)},l={transform:"translate(".concat(c/2*-1," -256)")};return{outer:r,inner:o,path:l}}function Wo(C){var a=C.transform,e=C.width,c=e===void 0?E4:e,r=C.height,i=r===void 0?E4:r,n=C.startCentered,f=n===void 0?!1:n,o="";return f&&O0?o+="translate(".concat(a.x/K2-c/2,"em, ").concat(a.y/K2-i/2,"em) "):f?o+="translate(calc(-50% + ".concat(a.x/K2,"em), calc(-50% + ").concat(a.y/K2,"em)) "):o+="translate(".concat(a.x/K2,"em, ").concat(a.y/K2,"em) "),o+="scale(".concat(a.size/K2*(a.flipX?-1:1),", ").concat(a.size/K2*(a.flipY?-1:1),") "),o+="rotate(".concat(a.rotate,"deg) "),o}var Go=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function X0(){var C=I0,a=q0,e=T.familyPrefix,c=T.replacementClass,r=Go;if(e!==C||c!==a){var i=new RegExp("\\.".concat(C,"\\-"),"g"),n=new RegExp("\\--".concat(C,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(f,".".concat(c))}return r}var u8=!1;function z4(){T.autoAddCss&&!u8&&(_o(X0()),u8=!0)}var jo={mixout:function(){return{dom:{css:X0,insertCss:z4}}},hooks:function(){return{beforeDOMElementCreation:function(){z4()},beforeI2svg:function(){z4()}}}},U2=Z2||{};U2[E2]||(U2[E2]={});U2[E2].styles||(U2[E2].styles={});U2[E2].hooks||(U2[E2].hooks={});U2[E2].shims||(U2[E2].shims=[]);var d2=U2[E2],Q0=[],Ko=function C(){Q.removeEventListener("DOMContentLoaded",C),b3=1,Q0.map(function(a){return a()})},b3=!1;I2&&(b3=(Q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Q.readyState),b3||Q.addEventListener("DOMContentLoaded",Ko));function $o(C){!I2||(b3?setTimeout(C,0):Q0.push(C))}function X1(C){var a=C.tag,e=C.attributes,c=e===void 0?{}:e,r=C.children,i=r===void 0?[]:r;return typeof C=="string"?Y0(C):"<".concat(a," ").concat(Io(c),">").concat(i.map(X1).join(""),"</").concat(a,">")}function v8(C,a,e){if(C&&C[a]&&C[a][e])return{prefix:a,iconName:e,icon:C[a][e]}}var Yo=function(a,e){return function(c,r,i,n){return a.call(e,c,r,i,n)}},u4=function(a,e,c,r){var i=Object.keys(a),n=i.length,f=r!==void 0?Yo(e,r):e,o,l,L;for(c===void 0?(o=1,L=a[i[0]]):(o=0,L=c);o<n;o++)l=i[o],L=f(L,a[l],l,a);return L};function Xo(C){for(var a=[],e=0,c=C.length;e<c;){var r=C.charCodeAt(e++);if(r>=55296&&r<=56319&&e<c){var i=C.charCodeAt(e++);(i&64512)==56320?a.push(((r&1023)<<10)+(i&1023)+65536):(a.push(r),e--)}else a.push(r)}return a}function _4(C){var a=Xo(C);return a.length===1?a[0].toString(16):null}function Qo(C,a){var e=C.length,c=C.charCodeAt(a),r;return c>=55296&&c<=56319&&e>a+1&&(r=C.charCodeAt(a+1),r>=56320&&r<=57343)?(c-55296)*1024+r-56320+65536:c}function h8(C){return Object.keys(C).reduce(function(a,e){var c=C[e],r=!!c.icon;return r?a[c.iconName]=c.icon:a[e]=c,a},{})}function O4(C,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},c=e.skipHooks,r=c===void 0?!1:c,i=h8(a);typeof d2.hooks.addPack=="function"&&!r?d2.hooks.addPack(C,h8(a)):d2.styles[C]=b(b({},d2.styles[C]||{}),i),C==="fas"&&O4("fa",a)}var W1=d2.styles,Jo=d2.shims,Zo=Object.values(G0),N6=null,J0={},Z0={},C7={},a7={},e7={},Ct=Object.keys(x6);function at(C){return~Bo.indexOf(C)}function et(C,a){var e=a.split("-"),c=e[0],r=e.slice(1).join("-");return c===C&&r!==""&&!at(r)?r:null}var c7=function(){var a=function(i){return u4(W1,function(n,f,o){return n[o]=u4(f,i,{}),n},{})};J0=a(function(r,i,n){if(i[3]&&(r[i[3]]=n),i[2]){var f=i[2].filter(function(o){return typeof o=="number"});f.forEach(function(o){r[o.toString(16)]=n})}return r}),Z0=a(function(r,i,n){if(r[n]=n,i[2]){var f=i[2].filter(function(o){return typeof o=="string"});f.forEach(function(o){r[o]=n})}return r}),e7=a(function(r,i,n){var f=i[2];return r[n]=n,f.forEach(function(o){r[o]=n}),r});var e="far"in W1||T.autoFetchSvg,c=u4(Jo,function(r,i){var n=i[0],f=i[1],o=i[2];return f==="far"&&!e&&(f="fas"),typeof n=="string"&&(r.names[n]={prefix:f,iconName:o}),typeof n=="number"&&(r.unicodes[n.toString(16)]={prefix:f,iconName:o}),r},{names:{},unicodes:{}});C7=c.names,a7=c.unicodes,N6=O3(T.styleDefault)};Uo(function(C){N6=O3(C.styleDefault)});c7();function w6(C,a){return(J0[C]||{})[a]}function ct(C,a){return(Z0[C]||{})[a]}function p1(C,a){return(e7[C]||{})[a]}function r7(C){return C7[C]||{prefix:null,iconName:null}}function rt(C){var a=a7[C],e=w6("fas",C);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function C1(){return N6}var k6=function(){return{prefix:null,iconName:null,rest:[]}};function O3(C){var a=x6[C],e=S3[C]||S3[a],c=C in d2.styles?C:null;return e||c||null}function I3(C){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.skipLookups,c=e===void 0?!1:e,r=null,i=C.reduce(function(n,f){var o=et(T.familyPrefix,f);if(W1[f]?(f=Zo.includes(f)?wo[f]:f,r=f,n.prefix=f):Ct.indexOf(f)>-1?(r=f,n.prefix=O3(f)):o?n.iconName=o:f!==T.replacementClass&&n.rest.push(f),!c&&n.prefix&&n.iconName){var l=r==="fa"?r7(n.iconName):{},L=p1(n.prefix,n.iconName);l.prefix&&(r=null),n.iconName=l.iconName||L||n.iconName,n.prefix=l.prefix||n.prefix,n.prefix==="far"&&!W1.far&&W1.fas&&!T.autoFetchSvg&&(n.prefix="fas")}return n},k6());return(i.prefix==="fa"||r==="fa")&&(i.prefix=C1()||"fas"),i}var it=function(){function C(){Ho(this,C),this.definitions={}}return Vo(C,[{key:"add",value:function(){for(var e=this,c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];var n=r.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){e.definitions[f]=b(b({},e.definitions[f]||{}),n[f]),O4(f,n[f]);var o=G0[f];o&&O4(o,n[f]),c7()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,c){var r=c.prefix&&c.iconName&&c.icon?{0:c}:c;return Object.keys(r).map(function(i){var n=r[i],f=n.prefix,o=n.iconName,l=n.icon,L=l[2];e[f]||(e[f]={}),L.length>0&&L.forEach(function(M){typeof M=="string"&&(e[f][M]=l)}),e[f][o]=l}),e}}]),C}(),m8=[],d1={},b1={},nt=Object.keys(b1);function ft(C,a){var e=a.mixoutsTo;return m8=C,d1={},Object.keys(b1).forEach(function(c){nt.indexOf(c)===-1&&delete b1[c]}),m8.forEach(function(c){var r=c.mixout?c.mixout():{};if(Object.keys(r).forEach(function(n){typeof r[n]=="function"&&(e[n]=r[n]),x3(r[n])==="object"&&Object.keys(r[n]).forEach(function(f){e[n]||(e[n]={}),e[n][f]=r[n][f]})}),c.hooks){var i=c.hooks();Object.keys(i).forEach(function(n){d1[n]||(d1[n]=[]),d1[n].push(i[n])})}c.provides&&c.provides(b1)}),e}function I4(C,a){for(var e=arguments.length,c=new Array(e>2?e-2:0),r=2;r<e;r++)c[r-2]=arguments[r];var i=d1[C]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(c))}),a}function L1(C){for(var a=arguments.length,e=new Array(a>1?a-1:0),c=1;c<a;c++)e[c-1]=arguments[c];var r=d1[C]||[];r.forEach(function(i){i.apply(null,e)})}function _2(){var C=arguments[0],a=Array.prototype.slice.call(arguments,1);return b1[C]?b1[C].apply(null,a):void 0}function q4(C){C.prefix==="fa"&&(C.prefix="fas");var a=C.iconName,e=C.prefix||C1();if(!!a)return a=p1(e,a)||a,v8(i7.definitions,e,a)||v8(d2.styles,e,a)}var i7=new it,ot=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,L1("noAuto")},tt={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return I2?(L1("beforeI2svg",a),_2("pseudoElements2svg",a),_2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,$o(function(){st({autoReplaceSvgRoot:e}),L1("watch",a)})}},lt={icon:function(a){if(a===null)return null;if(x3(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:p1(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],c=O3(a[0]);return{prefix:c,iconName:p1(c,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(T.familyPrefix,"-"))>-1||a.match(ko))){var r=I3(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||C1(),iconName:p1(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=C1();return{prefix:i,iconName:p1(i,a)||a}}}},z2={noAuto:ot,config:T,dom:tt,parse:lt,library:i7,findIconDefinition:q4,toHtml:X1},st=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,c=e===void 0?Q:e;(Object.keys(d2.styles).length>0||T.autoFetchSvg)&&I2&&T.autoReplaceSvg&&z2.dom.i2svg({node:c})};function q3(C,a){return Object.defineProperty(C,"abstract",{get:a}),Object.defineProperty(C,"html",{get:function(){return C.abstract.map(function(c){return X1(c)})}}),Object.defineProperty(C,"node",{get:function(){if(!!I2){var c=Q.createElement("div");return c.innerHTML=C.html,c.children}}}),C}function Lt(C){var a=C.children,e=C.main,c=C.mask,r=C.attributes,i=C.styles,n=C.transform;if(b6(n)&&e.found&&!c.found){var f=e.width,o=e.height,l={x:f/o/2,y:.5};r.style=_3(b(b({},i),{},{"transform-origin":"".concat(l.x+n.x/16,"em ").concat(l.y+n.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function Mt(C){var a=C.prefix,e=C.iconName,c=C.children,r=C.attributes,i=C.symbol,n=i===!0?"".concat(a,"-").concat(T.familyPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:b(b({},r),{},{id:n}),children:c}]}]}function y6(C){var a=C.icons,e=a.main,c=a.mask,r=C.prefix,i=C.iconName,n=C.transform,f=C.symbol,o=C.title,l=C.maskId,L=C.titleId,M=C.extra,V=C.watchable,g=V===void 0?!1:V,w=c.found?c:e,F=w.width,k=w.height,h=r==="fak",S=[T.replacementClass,i?"".concat(T.familyPrefix,"-").concat(i):""].filter(function(W){return M.classes.indexOf(W)===-1}).filter(function(W){return W!==""||!!W}).concat(M.classes).join(" "),B={children:[],attributes:b(b({},M.attributes),{},{"data-prefix":r,"data-icon":i,class:S,role:M.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(F," ").concat(k)})},E=h&&!~M.classes.indexOf("fa-fw")?{width:"".concat(F/k*16*.0625,"em")}:{};g&&(B.attributes[s1]=""),o&&(B.children.push({tag:"title",attributes:{id:B.attributes["aria-labelledby"]||"title-".concat(L||Y1())},children:[o]}),delete B.attributes.title);var O=b(b({},B),{},{prefix:r,iconName:i,main:e,mask:c,maskId:l,transform:n,symbol:f,styles:b(b({},E),M.styles)}),C2=c.found&&e.found?_2("generateAbstractMask",O)||{children:[],attributes:{}}:_2("generateAbstractIcon",O)||{children:[],attributes:{}},U=C2.children,$=C2.attributes;return O.children=U,O.attributes=$,f?Mt(O):Lt(O)}function p8(C){var a=C.content,e=C.width,c=C.height,r=C.transform,i=C.title,n=C.extra,f=C.watchable,o=f===void 0?!1:f,l=b(b(b({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});o&&(l[s1]="");var L=b({},n.styles);b6(r)&&(L.transform=Wo({transform:r,startCentered:!0,width:e,height:c}),L["-webkit-transform"]=L.transform);var M=_3(L);M.length>0&&(l.style=M);var V=[];return V.push({tag:"span",attributes:l,children:[a]}),i&&V.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),V}function Ht(C){var a=C.content,e=C.title,c=C.extra,r=b(b(b({},c.attributes),e?{title:e}:{}),{},{class:c.classes.join(" ")}),i=_3(c.styles);i.length>0&&(r.style=i);var n=[];return n.push({tag:"span",attributes:r,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var v4=d2.styles;function W4(C){var a=C[0],e=C[1],c=C.slice(4),r=m6(c,1),i=r[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(T.familyPrefix,"-").concat(f1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.familyPrefix,"-").concat(f1.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.familyPrefix,"-").concat(f1.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:n}}var Vt={found:!1,width:512,height:512};function zt(C,a){!W0&&!T.showMissingIcons&&C&&console.error('Icon with name "'.concat(C,'" and prefix "').concat(a,'" is missing.'))}function G4(C,a){var e=a;return a==="fa"&&T.styleDefault!==null&&(a=C1()),new Promise(function(c,r){if(_2("missingIconAbstract"),e==="fa"){var i=r7(C)||{};C=i.iconName||C,a=i.prefix||a}if(C&&a&&v4[a]&&v4[a][C]){var n=v4[a][C];return c(W4(n))}zt(C,a),c(b(b({},Vt),{},{icon:T.showMissingIcons&&C?_2("missingIconAbstract")||{}:{}}))})}var d8=function(){},j4=T.measurePerformance&&o3&&o3.mark&&o3.measure?o3:{mark:d8,measure:d8},E1='FA "6.1.1"',ut=function(a){return j4.mark("".concat(E1," ").concat(a," begins")),function(){return n7(a)}},n7=function(a){j4.mark("".concat(E1," ").concat(a," ends")),j4.measure("".concat(E1," ").concat(a),"".concat(E1," ").concat(a," begins"),"".concat(E1," ").concat(a," ends"))},A6={begin:ut,end:n7},H3=function(){};function g8(C){var a=C.getAttribute?C.getAttribute(s1):null;return typeof a=="string"}function vt(C){var a=C.getAttribute?C.getAttribute(d6):null,e=C.getAttribute?C.getAttribute(g6):null;return a&&e}function ht(C){return C&&C.classList&&C.classList.contains&&C.classList.contains(T.replacementClass)}function mt(){if(T.autoReplaceSvg===!0)return V3.replace;var C=V3[T.autoReplaceSvg];return C||V3.replace}function pt(C){return Q.createElementNS("http://www.w3.org/2000/svg",C)}function dt(C){return Q.createElement(C)}function f7(C){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,c=e===void 0?C.tag==="svg"?pt:dt:e;if(typeof C=="string")return Q.createTextNode(C);var r=c(C.tag);Object.keys(C.attributes||[]).forEach(function(n){r.setAttribute(n,C.attributes[n])});var i=C.children||[];return i.forEach(function(n){r.appendChild(f7(n,{ceFn:c}))}),r}function gt(C){var a=" ".concat(C.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var V3={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(r){e.parentNode.insertBefore(f7(r),e)}),e.getAttribute(s1)===null&&T.keepOriginalSource){var c=Q.createComment(gt(e));e.parentNode.replaceChild(c,e)}else e.remove()},nest:function(a){var e=a[0],c=a[1];if(~S6(e).indexOf(T.replacementClass))return V3.replace(a);var r=new RegExp("".concat(T.familyPrefix,"-.*"));if(delete c[0].attributes.id,c[0].attributes.class){var i=c[0].attributes.class.split(" ").reduce(function(f,o){return o===T.replacementClass||o.match(r)?f.toSvg.push(o):f.toNode.push(o),f},{toNode:[],toSvg:[]});c[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var n=c.map(function(f){return X1(f)}).join(`
`);e.setAttribute(s1,""),e.innerHTML=n}};function x8(C){C()}function o7(C,a){var e=typeof a=="function"?a:H3;if(C.length===0)e();else{var c=x8;T.mutateApproach===bo&&(c=Z2.requestAnimationFrame||x8),c(function(){var r=mt(),i=A6.begin("mutate");C.map(r),i(),e()})}}var T6=!1;function t7(){T6=!0}function K4(){T6=!1}var N3=null;function S8(C){if(!!V8&&!!T.observeMutations){var a=C.treeCallback,e=a===void 0?H3:a,c=C.nodeCallback,r=c===void 0?H3:c,i=C.pseudoElementsCallback,n=i===void 0?H3:i,f=C.observeMutationsRoot,o=f===void 0?Q:f;N3=new V8(function(l){if(!T6){var L=C1();T1(l).forEach(function(M){if(M.type==="childList"&&M.addedNodes.length>0&&!g8(M.addedNodes[0])&&(T.searchPseudoElements&&n(M.target),e(M.target)),M.type==="attributes"&&M.target.parentNode&&T.searchPseudoElements&&n(M.target.parentNode),M.type==="attributes"&&g8(M.target)&&~Po.indexOf(M.attributeName))if(M.attributeName==="class"&&vt(M.target)){var V=I3(S6(M.target)),g=V.prefix,w=V.iconName;M.target.setAttribute(d6,g||L),w&&M.target.setAttribute(g6,w)}else ht(M.target)&&r(M.target)})}}),I2&&N3.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function xt(){!N3||N3.disconnect()}function St(C){var a=C.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(c,r){var i=r.split(":"),n=i[0],f=i.slice(1);return n&&f.length>0&&(c[n]=f.join(":").trim()),c},{})),e}function bt(C){var a=C.getAttribute("data-prefix"),e=C.getAttribute("data-icon"),c=C.innerText!==void 0?C.innerText.trim():"",r=I3(S6(C));return r.prefix||(r.prefix=C1()),a&&e&&(r.prefix=a,r.iconName=e),r.iconName&&r.prefix||r.prefix&&c.length>0&&(r.iconName=ct(r.prefix,C.innerText)||w6(r.prefix,_4(C.innerText))),r}function Nt(C){var a=T1(C.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=C.getAttribute("title"),c=C.getAttribute("data-fa-title-id");return T.autoA11y&&(e?a["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(c||Y1()):(a["aria-hidden"]="true",a.focusable="false")),a}function wt(){return{iconName:null,title:null,titleId:null,prefix:null,transform:y2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function b8(C){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=bt(C),c=e.iconName,r=e.prefix,i=e.rest,n=Nt(C),f=I4("parseNodeAttributes",{},C),o=a.styleParser?St(C):[];return b({iconName:c,title:C.getAttribute("title"),titleId:C.getAttribute("data-fa-title-id"),prefix:r,transform:y2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:o,attributes:n}},f)}var kt=d2.styles;function l7(C){var a=T.autoReplaceSvg==="nest"?b8(C,{styleParser:!1}):b8(C);return~a.extra.classes.indexOf(j0)?_2("generateLayersText",C,a):_2("generateSvgReplacementMutation",C,a)}function N8(C){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!I2)return Promise.resolve();var e=Q.documentElement.classList,c=function(M){return e.add("".concat(z8,"-").concat(M))},r=function(M){return e.remove("".concat(z8,"-").concat(M))},i=T.autoFetchSvg?Object.keys(x6):Object.keys(kt),n=[".".concat(j0,":not([").concat(s1,"])")].concat(i.map(function(L){return".".concat(L,":not([").concat(s1,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=T1(C.querySelectorAll(n))}catch{}if(f.length>0)c("pending"),r("complete");else return Promise.resolve();var o=A6.begin("onTree"),l=f.reduce(function(L,M){try{var V=l7(M);V&&L.push(V)}catch(g){W0||g.name==="MissingIcon"&&console.error(g)}return L},[]);return new Promise(function(L,M){Promise.all(l).then(function(V){o7(V,function(){c("active"),c("complete"),r("pending"),typeof a=="function"&&a(),o(),L()})}).catch(function(V){o(),M(V)})})}function yt(C){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;l7(C).then(function(e){e&&o7([e],a)})}function At(C){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=(a||{}).icon?a:q4(a||{}),r=e.mask;return r&&(r=(r||{}).icon?r:q4(r||{})),C(c,b(b({},e),{},{mask:r}))}}var Tt=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=e.transform,r=c===void 0?y2:c,i=e.symbol,n=i===void 0?!1:i,f=e.mask,o=f===void 0?null:f,l=e.maskId,L=l===void 0?null:l,M=e.title,V=M===void 0?null:M,g=e.titleId,w=g===void 0?null:g,F=e.classes,k=F===void 0?[]:F,h=e.attributes,S=h===void 0?{}:h,B=e.styles,E=B===void 0?{}:B;if(!!a){var O=a.prefix,C2=a.iconName,U=a.icon;return q3(b({type:"icon"},a),function(){return L1("beforeDOMElementCreation",{iconDefinition:a,params:e}),T.autoA11y&&(V?S["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(w||Y1()):(S["aria-hidden"]="true",S.focusable="false")),y6({icons:{main:W4(U),mask:o?W4(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:C2,transform:b(b({},y2),r),symbol:n,title:V,maskId:L,titleId:w,extra:{attributes:S,styles:E,classes:k}})})}},Pt={mixout:function(){return{icon:At(Tt)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=N8,e.nodeCallback=yt,e}}},provides:function(a){a.i2svg=function(e){var c=e.node,r=c===void 0?Q:c,i=e.callback,n=i===void 0?function(){}:i;return N8(r,n)},a.generateSvgReplacementMutation=function(e,c){var r=c.iconName,i=c.title,n=c.titleId,f=c.prefix,o=c.transform,l=c.symbol,L=c.mask,M=c.maskId,V=c.extra;return new Promise(function(g,w){Promise.all([G4(r,f),L.iconName?G4(L.iconName,L.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(F){var k=m6(F,2),h=k[0],S=k[1];g([e,y6({icons:{main:h,mask:S},prefix:f,iconName:r,transform:o,symbol:l,maskId:M,title:i,titleId:n,extra:V,watchable:!0})])}).catch(w)})},a.generateAbstractIcon=function(e){var c=e.children,r=e.attributes,i=e.main,n=e.transform,f=e.styles,o=_3(f);o.length>0&&(r.style=o);var l;return b6(n)&&(l=_2("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),c.push(l||i.icon),{children:c,attributes:r}}}},Bt={mixout:function(){return{layer:function(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=c.classes,i=r===void 0?[]:r;return q3({type:"layer"},function(){L1("beforeDOMElementCreation",{assembler:e,params:c});var n=[];return e(function(f){Array.isArray(f)?f.map(function(o){n=n.concat(o.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(T.familyPrefix,"-layers")].concat(U3(i)).join(" ")},children:n}]})}}}},Ft={mixout:function(){return{counter:function(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=c.title,i=r===void 0?null:r,n=c.classes,f=n===void 0?[]:n,o=c.attributes,l=o===void 0?{}:o,L=c.styles,M=L===void 0?{}:L;return q3({type:"counter",content:e},function(){return L1("beforeDOMElementCreation",{content:e,params:c}),Ht({content:e.toString(),title:i,extra:{attributes:l,styles:M,classes:["".concat(T.familyPrefix,"-layers-counter")].concat(U3(f))}})})}}}},Rt={mixout:function(){return{text:function(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=c.transform,i=r===void 0?y2:r,n=c.title,f=n===void 0?null:n,o=c.classes,l=o===void 0?[]:o,L=c.attributes,M=L===void 0?{}:L,V=c.styles,g=V===void 0?{}:V;return q3({type:"text",content:e},function(){return L1("beforeDOMElementCreation",{content:e,params:c}),p8({content:e,transform:b(b({},y2),i),title:f,extra:{attributes:M,styles:g,classes:["".concat(T.familyPrefix,"-layers-text")].concat(U3(l))}})})}}},provides:function(a){a.generateLayersText=function(e,c){var r=c.title,i=c.transform,n=c.extra,f=null,o=null;if(O0){var l=parseInt(getComputedStyle(e).fontSize,10),L=e.getBoundingClientRect();f=L.width/l,o=L.height/l}return T.autoA11y&&!r&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,p8({content:e.innerHTML,width:f,height:o,transform:i,title:r,extra:n,watchable:!0})])}}},Dt=new RegExp('"',"ug"),w8=[1105920,1112319];function Et(C){var a=C.replace(Dt,""),e=Qo(a,0),c=e>=w8[0]&&e<=w8[1],r=a.length===2?a[0]===a[1]:!1;return{value:_4(r?a[0]:a),isSecondary:c||r}}function k8(C,a){var e="".concat(So).concat(a.replace(":","-"));return new Promise(function(c,r){if(C.getAttribute(e)!==null)return c();var i=T1(C.children),n=i.filter(function(C2){return C2.getAttribute(U4)===a})[0],f=Z2.getComputedStyle(C,a),o=f.getPropertyValue("font-family").match(yo),l=f.getPropertyValue("font-weight"),L=f.getPropertyValue("content");if(n&&!o)return C.removeChild(n),c();if(o&&L!=="none"&&L!==""){var M=f.getPropertyValue("content"),V=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?S3[o[2].toLowerCase()]:Ao[l],g=Et(M),w=g.value,F=g.isSecondary,k=o[0].startsWith("FontAwesome"),h=w6(V,w),S=h;if(k){var B=rt(w);B.iconName&&B.prefix&&(h=B.iconName,V=B.prefix)}if(h&&!F&&(!n||n.getAttribute(d6)!==V||n.getAttribute(g6)!==S)){C.setAttribute(e,S),n&&C.removeChild(n);var E=wt(),O=E.extra;O.attributes[U4]=a,G4(h,V).then(function(C2){var U=y6(b(b({},E),{},{icons:{main:C2,mask:k6()},prefix:V,iconName:S,extra:O,watchable:!0})),$=Q.createElement("svg");a==="::before"?C.insertBefore($,C.firstChild):C.appendChild($),$.outerHTML=U.map(function(W){return X1(W)}).join(`
`),C.removeAttribute(e),c()}).catch(r)}else c()}else c()})}function Ut(C){return Promise.all([k8(C,"::before"),k8(C,"::after")])}function _t(C){return C.parentNode!==document.head&&!~No.indexOf(C.tagName.toUpperCase())&&!C.getAttribute(U4)&&(!C.parentNode||C.parentNode.tagName!=="svg")}function y8(C){if(!!I2)return new Promise(function(a,e){var c=T1(C.querySelectorAll("*")).filter(_t).map(Ut),r=A6.begin("searchPseudoElements");t7(),Promise.all(c).then(function(){r(),K4(),a()}).catch(function(){r(),K4(),e()})})}var Ot={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=y8,e}}},provides:function(a){a.pseudoElements2svg=function(e){var c=e.node,r=c===void 0?Q:c;T.searchPseudoElements&&y8(r)}}},A8=!1,It={mixout:function(){return{dom:{unwatch:function(){t7(),A8=!0}}}},hooks:function(){return{bootstrap:function(){S8(I4("mutationObserverCallbacks",{}))},noAuto:function(){xt()},watch:function(e){var c=e.observeMutationsRoot;A8?K4():S8(I4("mutationObserverCallbacks",{observeMutationsRoot:c}))}}}},T8=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(c,r){var i=r.toLowerCase().split("-"),n=i[0],f=i.slice(1).join("-");if(n&&f==="h")return c.flipX=!0,c;if(n&&f==="v")return c.flipY=!0,c;if(f=parseFloat(f),isNaN(f))return c;switch(n){case"grow":c.size=c.size+f;break;case"shrink":c.size=c.size-f;break;case"left":c.x=c.x-f;break;case"right":c.x=c.x+f;break;case"up":c.y=c.y-f;break;case"down":c.y=c.y+f;break;case"rotate":c.rotate=c.rotate+f;break}return c},e)},qt={mixout:function(){return{parse:{transform:function(e){return T8(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,c){var r=c.getAttribute("data-fa-transform");return r&&(e.transform=T8(r)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var c=e.main,r=e.transform,i=e.containerWidth,n=e.iconWidth,f={transform:"translate(".concat(i/2," 256)")},o="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),L="rotate(".concat(r.rotate," 0 0)"),M={transform:"".concat(o," ").concat(l," ").concat(L)},V={transform:"translate(".concat(n/2*-1," -256)")},g={outer:f,inner:M,path:V};return{tag:"g",attributes:b({},g.outer),children:[{tag:"g",attributes:b({},g.inner),children:[{tag:c.icon.tag,children:c.icon.children,attributes:b(b({},c.icon.attributes),g.path)}]}]}}}},h4={x:0,y:0,width:"100%",height:"100%"};function P8(C){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return C.attributes&&(C.attributes.fill||a)&&(C.attributes.fill="black"),C}function Wt(C){return C.tag==="g"?C.children:[C]}var Gt={hooks:function(){return{parseNodeAttributes:function(e,c){var r=c.getAttribute("data-fa-mask"),i=r?I3(r.split(" ").map(function(n){return n.trim()})):k6();return i.prefix||(i.prefix=C1()),e.mask=i,e.maskId=c.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var c=e.children,r=e.attributes,i=e.main,n=e.mask,f=e.maskId,o=e.transform,l=i.width,L=i.icon,M=n.width,V=n.icon,g=qo({transform:o,containerWidth:M,iconWidth:l}),w={tag:"rect",attributes:b(b({},h4),{},{fill:"white"})},F=L.children?{children:L.children.map(P8)}:{},k={tag:"g",attributes:b({},g.inner),children:[P8(b({tag:L.tag,attributes:b(b({},L.attributes),g.path)},F))]},h={tag:"g",attributes:b({},g.outer),children:[k]},S="mask-".concat(f||Y1()),B="clip-".concat(f||Y1()),E={tag:"mask",attributes:b(b({},h4),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,h]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:B},children:Wt(V)},E]};return c.push(O,{tag:"rect",attributes:b({fill:"currentColor","clip-path":"url(#".concat(B,")"),mask:"url(#".concat(S,")")},h4)}),{children:c,attributes:r}}}},jt={provides:function(a){var e=!1;Z2.matchMedia&&(e=Z2.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var c=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};c.push({tag:"path",attributes:b(b({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=b(b({},i),{},{attributeName:"opacity"}),f={tag:"circle",attributes:b(b({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||f.children.push({tag:"animate",attributes:b(b({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:b(b({},n),{},{values:"1;0;1;1;0;1;"})}),c.push(f),c.push({tag:"path",attributes:b(b({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:b(b({},n),{},{values:"1;0;0;0;0;1;"})}]}),e||c.push({tag:"path",attributes:b(b({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:b(b({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:c}}}},Kt={hooks:function(){return{parseNodeAttributes:function(e,c){var r=c.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},$t=[jo,Pt,Bt,Ft,Rt,Ot,It,qt,Gt,jt,Kt];ft($t,{mixoutsTo:z2});z2.noAuto;var s7=z2.config,RD=z2.library,DD=z2.dom,L7=z2.parse;z2.findIconDefinition;z2.toHtml;var Yt=z2.icon;z2.layer;var Xt=z2.text;z2.counter;var Qt=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Jt(C,a){return a={exports:{}},C(a,a.exports),a.exports}var Zt=Jt(function(C){(function(a){var e=function(h,S,B){if(!l(S)||M(S)||V(S)||g(S)||o(S))return S;var E,O=0,C2=0;if(L(S))for(E=[],C2=S.length;O<C2;O++)E.push(e(h,S[O],B));else{E={};for(var U in S)Object.prototype.hasOwnProperty.call(S,U)&&(E[h(U,B)]=e(h,S[U],B))}return E},c=function(h,S){S=S||{};var B=S.separator||"_",E=S.split||/(?=[A-Z])/;return h.split(E).join(B)},r=function(h){return w(h)?h:(h=h.replace(/[\-_\s]+(.)?/g,function(S,B){return B?B.toUpperCase():""}),h.substr(0,1).toLowerCase()+h.substr(1))},i=function(h){var S=r(h);return S.substr(0,1).toUpperCase()+S.substr(1)},n=function(h,S){return c(h,S).toLowerCase()},f=Object.prototype.toString,o=function(h){return typeof h=="function"},l=function(h){return h===Object(h)},L=function(h){return f.call(h)=="[object Array]"},M=function(h){return f.call(h)=="[object Date]"},V=function(h){return f.call(h)=="[object RegExp]"},g=function(h){return f.call(h)=="[object Boolean]"},w=function(h){return h=h-0,h===h},F=function(h,S){var B=S&&"process"in S?S.process:S;return typeof B!="function"?h:function(E,O){return B(E,h,O)}},k={camelize:r,decamelize:n,pascalize:i,depascalize:n,camelizeKeys:function(h,S){return e(F(r,S),h)},decamelizeKeys:function(h,S){return e(F(n,S),h,S)},pascalizeKeys:function(h,S){return e(F(i,S),h)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};C.exports?C.exports=k:a.humps=k})(Qt)}),Cl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},U1=function(C,a,e){return a in C?Object.defineProperty(C,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):C[a]=e,C},w3=Object.assign||function(C){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&(C[c]=e[c])}return C},al=function(C,a){var e={};for(var c in C)a.indexOf(c)>=0||!Object.prototype.hasOwnProperty.call(C,c)||(e[c]=C[c]);return e},$4=function(C){if(Array.isArray(C)){for(var a=0,e=Array(C.length);a<C.length;a++)e[a]=C[a];return e}else return Array.from(C)};function el(C){return C.split(";").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,e){var c=e.indexOf(":"),r=Zt.camelize(e.slice(0,c)),i=e.slice(c+1).trim();return a[r]=i,a},{})}function cl(C){return C.split(/\s+/).reduce(function(a,e){return a[e]=!0,a},{})}function P6(C){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof C=="string")return C;var c=(C.children||[]).map(function(o){return P6(o)}),r=Object.keys(C.attributes||{}).reduce(function(o,l){var L=C.attributes[l];switch(l){case"class":o.class=cl(L);break;case"style":o.style=el(L);break;default:o.attrs[l]=L}return o},{attrs:{},class:{},style:{}});e.class;var i=e.style,n=i===void 0?{}:i,f=al(e,["class","style"]);return h6(C.tag,w3({},a,{class:r.class,style:w3({},r.style,n)},r.attrs,f),c)}var M7=!1;try{M7=!0}catch{}function rl(){if(!M7&&console&&typeof console.error=="function"){var C;(C=console).error.apply(C,arguments)}}function G1(C,a){return Array.isArray(a)&&a.length>0||!Array.isArray(a)&&a?U1({},C,a):{}}function il(C){var a,e=(a={"fa-spin":C.spin,"fa-pulse":C.pulse,"fa-fw":C.fixedWidth,"fa-border":C.border,"fa-li":C.listItem,"fa-inverse":C.inverse,"fa-flip-horizontal":C.flip==="horizontal"||C.flip==="both","fa-flip-vertical":C.flip==="vertical"||C.flip==="both"},U1(a,"fa-"+C.size,C.size!==null),U1(a,"fa-rotate-"+C.rotation,C.rotation!==null),U1(a,"fa-pull-"+C.pull,C.pull!==null),U1(a,"fa-swap-opacity",C.swapOpacity),a);return Object.keys(e).map(function(c){return e[c]?c:null}).filter(function(c){return c})}function B8(C){if(C===null)return null;if((typeof C=="undefined"?"undefined":Cl(C))==="object"&&C.prefix&&C.iconName)return C;if(Array.isArray(C)&&C.length===2)return{prefix:C[0],iconName:C[1]};if(typeof C=="string")return{prefix:"fas",iconName:C}}var ED=H6({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(a){return["horizontal","vertical","both"].indexOf(a)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(a){return["right","left"].indexOf(a)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(a){return[90,180,270].indexOf(Number.parseInt(a,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(a){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(a)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(a,e){var c=e.attrs,r=v2(function(){return B8(a.icon)}),i=v2(function(){return G1("classes",il(a))}),n=v2(function(){return G1("transform",typeof a.transform=="string"?L7.transform(a.transform):a.transform)}),f=v2(function(){return G1("mask",B8(a.mask))}),o=v2(function(){return Yt(r.value,w3({},i.value,n.value,f.value,{symbol:a.symbol,title:a.title}))});l3(o,function(L){if(!L)return rl("Could not find one or more icon(s)",r.value,f.value)},{immediate:!0});var l=v2(function(){return o.value?P6(o.value.abstract[0],{},c):null});return function(){return l.value}}});H6({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(a,e){var c=e.slots,r=s7.familyPrefix,i=v2(function(){return[r+"-layers"].concat($4(a.fixedWidth?[r+"-fw"]:[]))});return function(){return h6("div",{class:i.value},c.default?c.default():[])}}});H6({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(a){return["bottom-left","bottom-right","top-left","top-right"].indexOf(a)>-1}}},setup:function(a,e){var c=e.attrs,r=s7.familyPrefix,i=v2(function(){return G1("classes",[].concat($4(a.counter?[r+"-layers-counter"]:[]),$4(a.position?[r+"-layers-"+a.position]:[])))}),n=v2(function(){return G1("transform",typeof a.transform=="string"?L7.transform(a.transform):a.transform)}),f=v2(function(){var l=Xt(a.value.toString(),w3({},n.value,i.value)),L=l.abstract;return a.counter&&(L[0].attributes.class=L[0].attributes.class.replace("fa-layers-text","")),L[0]}),o=v2(function(){return P6(f.value,{},c)});return function(){return o.value}}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.