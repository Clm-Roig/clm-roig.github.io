var fl=Object.defineProperty;var ul=(e,t,n)=>t in e?fl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var $t=(e,t,n)=>(ul(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Ea(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const dl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ml=Ea(dl);function Oo(e){return!!e||e===""}function gr(e){if(B(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ge(r)?gl(r):gr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ge(e))return e;if(oe(e))return e}}const hl=/;(?![^(]*\))/g,pl=/:(.+)/;function gl(e){const t={};return e.split(hl).forEach(n=>{if(n){const r=n.split(pl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function vr(e){let t="";if(ge(e))t=e;else if(B(e))for(let n=0;n<e.length;n++){const r=vr(e[n]);r&&(t+=r+" ")}else if(oe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const qr=e=>ge(e)?e:e==null?"":B(e)||oe(e)&&(e.toString===Io||!H(e.toString))?JSON.stringify(e,Po,2):String(e),Po=(e,t)=>t&&t.__v_isRef?Po(e,t.value):Wt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:So(t)?{[`Set(${t.size})`]:[...t.values()]}:oe(t)&&!B(t)&&!Ro(t)?String(t):t,ne={},Kt=[],ze=()=>{},vl=()=>!1,bl=/^on[^a-z]/,br=e=>bl.test(e),Aa=e=>e.startsWith("onUpdate:"),we=Object.assign,Oa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},yl=Object.prototype.hasOwnProperty,Y=(e,t)=>yl.call(e,t),B=Array.isArray,Wt=e=>yr(e)==="[object Map]",So=e=>yr(e)==="[object Set]",H=e=>typeof e=="function",ge=e=>typeof e=="string",Pa=e=>typeof e=="symbol",oe=e=>e!==null&&typeof e=="object",Co=e=>oe(e)&&H(e.then)&&H(e.catch),Io=Object.prototype.toString,yr=e=>Io.call(e),_l=e=>yr(e).slice(8,-1),Ro=e=>yr(e)==="[object Object]",Sa=e=>ge(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Jn=Ea(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_r=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},xl=/-(\w)/g,Qe=_r(e=>e.replace(xl,(t,n)=>n?n.toUpperCase():"")),wl=/\B([A-Z])/g,tn=_r(e=>e.replace(wl,"-$1").toLowerCase()),xr=_r(e=>e.charAt(0).toUpperCase()+e.slice(1)),Fr=_r(e=>e?`on${xr(e)}`:""),xn=(e,t)=>!Object.is(e,t),Lr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ir=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},kl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let li;const El=()=>li||(li=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ye;class Al{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ye&&(this.parent=Ye,this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ye;try{return Ye=this,t()}finally{Ye=n}}}on(){Ye=this}off(){Ye=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function Ol(e,t=Ye){t&&t.active&&t.effects.push(e)}const Ca=e=>{const t=new Set(e);return t.w=0,t.n=0,t},To=e=>(e.w&vt)>0,No=e=>(e.n&vt)>0,Pl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=vt},Sl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];To(a)&&!No(a)?a.delete(e):t[n++]=a,a.w&=~vt,a.n&=~vt}t.length=n}},Vr=new WeakMap;let dn=0,vt=1;const Xr=30;let Le;const Rt=Symbol(""),Gr=Symbol("");class Ia{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ol(this,r)}run(){if(!this.active)return this.fn();let t=Le,n=mt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Le,Le=this,mt=!0,vt=1<<++dn,dn<=Xr?Pl(this):ci(this),this.fn()}finally{dn<=Xr&&Sl(this),vt=1<<--dn,Le=this.parent,mt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Le===this?this.deferStop=!0:this.active&&(ci(this),this.onStop&&this.onStop(),this.active=!1)}}function ci(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let mt=!0;const Mo=[];function nn(){Mo.push(mt),mt=!1}function rn(){const e=Mo.pop();mt=e===void 0?!0:e}function Ie(e,t,n){if(mt&&Le){let r=Vr.get(e);r||Vr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Ca()),Fo(a)}}function Fo(e,t){let n=!1;dn<=Xr?No(e)||(e.n|=vt,n=!To(e)):n=!e.has(Le),n&&(e.add(Le),Le.deps.push(e))}function tt(e,t,n,r,a,i){const o=Vr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&B(e))o.forEach((l,f)=>{(f==="length"||f>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":B(e)?Sa(n)&&s.push(o.get("length")):(s.push(o.get(Rt)),Wt(e)&&s.push(o.get(Gr)));break;case"delete":B(e)||(s.push(o.get(Rt)),Wt(e)&&s.push(o.get(Gr)));break;case"set":Wt(e)&&s.push(o.get(Rt));break}if(s.length===1)s[0]&&Qr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Qr(Ca(l))}}function Qr(e,t){const n=B(e)?e:[...e];for(const r of n)r.computed&&fi(r);for(const r of n)r.computed||fi(r)}function fi(e,t){(e!==Le||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Cl=Ea("__proto__,__v_isRef,__isVue"),Lo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Pa)),Il=Ra(),Rl=Ra(!1,!0),Tl=Ra(!0),ui=Nl();function Nl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=G(this);for(let i=0,o=this.length;i<o;i++)Ie(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(G)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){nn();const r=G(this)[t].apply(this,n);return rn(),r}}),e}function Ra(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Xl:Bo:t?zo:Do).get(r))return r;const o=B(r);if(!e&&o&&Y(ui,a))return Reflect.get(ui,a,i);const s=Reflect.get(r,a,i);return(Pa(a)?Lo.has(a):Cl(a))||(e||Ie(r,"get",a),t)?s:ye(s)?o&&Sa(a)?s:s.value:oe(s)?e?Ho(s):an(s):s}}const Ml=jo(),Fl=jo(!0);function jo(e=!1){return function(n,r,a,i){let o=n[r];if(Xt(o)&&ye(o)&&!ye(a))return!1;if(!e&&(!or(a)&&!Xt(a)&&(o=G(o),a=G(a)),!B(n)&&ye(o)&&!ye(a)))return o.value=a,!0;const s=B(n)&&Sa(r)?Number(r)<n.length:Y(n,r),l=Reflect.set(n,r,a,i);return n===G(i)&&(s?xn(a,o)&&tt(n,"set",r,a):tt(n,"add",r,a)),l}}function Ll(e,t){const n=Y(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&tt(e,"delete",t,void 0),r}function jl(e,t){const n=Reflect.has(e,t);return(!Pa(t)||!Lo.has(t))&&Ie(e,"has",t),n}function $l(e){return Ie(e,"iterate",B(e)?"length":Rt),Reflect.ownKeys(e)}const $o={get:Il,set:Ml,deleteProperty:Ll,has:jl,ownKeys:$l},Dl={get:Tl,set(e,t){return!0},deleteProperty(e,t){return!0}},zl=we({},$o,{get:Rl,set:Fl}),Ta=e=>e,wr=e=>Reflect.getPrototypeOf(e);function $n(e,t,n=!1,r=!1){e=e.__v_raw;const a=G(e),i=G(t);n||(t!==i&&Ie(a,"get",t),Ie(a,"get",i));const{has:o}=wr(a),s=r?Ta:n?Fa:wn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Dn(e,t=!1){const n=this.__v_raw,r=G(n),a=G(e);return t||(e!==a&&Ie(r,"has",e),Ie(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function zn(e,t=!1){return e=e.__v_raw,!t&&Ie(G(e),"iterate",Rt),Reflect.get(e,"size",e)}function di(e){e=G(e);const t=G(this);return wr(t).has.call(t,e)||(t.add(e),tt(t,"add",e,e)),this}function mi(e,t){t=G(t);const n=G(this),{has:r,get:a}=wr(n);let i=r.call(n,e);i||(e=G(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?xn(t,o)&&tt(n,"set",e,t):tt(n,"add",e,t),this}function hi(e){const t=G(this),{has:n,get:r}=wr(t);let a=n.call(t,e);a||(e=G(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&tt(t,"delete",e,void 0),i}function pi(){const e=G(this),t=e.size!==0,n=e.clear();return t&&tt(e,"clear",void 0,void 0),n}function Bn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=G(o),l=t?Ta:e?Fa:wn;return!e&&Ie(s,"iterate",Rt),o.forEach((f,c)=>r.call(a,l(f),l(c),i))}}function Hn(e,t,n){return function(...r){const a=this.__v_raw,i=G(a),o=Wt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),c=n?Ta:t?Fa:wn;return!t&&Ie(i,"iterate",l?Gr:Rt),{next(){const{value:d,done:h}=f.next();return h?{value:d,done:h}:{value:s?[c(d[0]),c(d[1])]:c(d),done:h}},[Symbol.iterator](){return this}}}}function lt(e){return function(...t){return e==="delete"?!1:this}}function Bl(){const e={get(i){return $n(this,i)},get size(){return zn(this)},has:Dn,add:di,set:mi,delete:hi,clear:pi,forEach:Bn(!1,!1)},t={get(i){return $n(this,i,!1,!0)},get size(){return zn(this)},has:Dn,add:di,set:mi,delete:hi,clear:pi,forEach:Bn(!1,!0)},n={get(i){return $n(this,i,!0)},get size(){return zn(this,!0)},has(i){return Dn.call(this,i,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:Bn(!0,!1)},r={get(i){return $n(this,i,!0,!0)},get size(){return zn(this,!0)},has(i){return Dn.call(this,i,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:Bn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Hn(i,!1,!1),n[i]=Hn(i,!0,!1),t[i]=Hn(i,!1,!0),r[i]=Hn(i,!0,!0)}),[e,n,t,r]}const[Hl,Ul,Kl,Wl]=Bl();function Na(e,t){const n=t?e?Wl:Kl:e?Ul:Hl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(Y(n,a)&&a in r?n:r,a,i)}const Yl={get:Na(!1,!1)},ql={get:Na(!1,!0)},Vl={get:Na(!0,!1)},Do=new WeakMap,zo=new WeakMap,Bo=new WeakMap,Xl=new WeakMap;function Gl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ql(e){return e.__v_skip||!Object.isExtensible(e)?0:Gl(_l(e))}function an(e){return Xt(e)?e:Ma(e,!1,$o,Yl,Do)}function Jl(e){return Ma(e,!1,zl,ql,zo)}function Ho(e){return Ma(e,!0,Dl,Vl,Bo)}function Ma(e,t,n,r,a){if(!oe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Ql(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Yt(e){return Xt(e)?Yt(e.__v_raw):!!(e&&e.__v_isReactive)}function Xt(e){return!!(e&&e.__v_isReadonly)}function or(e){return!!(e&&e.__v_isShallow)}function Uo(e){return Yt(e)||Xt(e)}function G(e){const t=e&&e.__v_raw;return t?G(t):e}function Ko(e){return ir(e,"__v_skip",!0),e}const wn=e=>oe(e)?an(e):e,Fa=e=>oe(e)?Ho(e):e;function Wo(e){mt&&Le&&(e=G(e),Fo(e.dep||(e.dep=Ca())))}function Yo(e,t){e=G(e),e.dep&&Qr(e.dep)}function ye(e){return!!(e&&e.__v_isRef===!0)}function Zl(e){return qo(e,!1)}function ec(e){return qo(e,!0)}function qo(e,t){return ye(e)?e:new tc(e,t)}class tc{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:G(t),this._value=n?t:wn(t)}get value(){return Wo(this),this._value}set value(t){const n=this.__v_isShallow||or(t)||Xt(t);t=n?t:G(t),xn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:wn(t),Yo(this))}}function ht(e){return ye(e)?e.value:e}const nc={get:(e,t,n)=>ht(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ye(a)&&!ye(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Vo(e){return Yt(e)?e:new Proxy(e,nc)}var Xo;class rc{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Xo]=!1,this._dirty=!0,this.effect=new Ia(t,()=>{this._dirty||(this._dirty=!0,Yo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=G(this);return Wo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Xo="__v_isReadonly";function ac(e,t,n=!1){let r,a;const i=H(e);return i?(r=e,a=ze):(r=e.get,a=e.set),new rc(r,a,i||!a,n)}function pt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){kr(i,t,n)}return a}function Be(e,t,n,r){if(H(e)){const i=pt(e,t,n,r);return i&&Co(i)&&i.catch(o=>{kr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Be(e[i],t,n,r));return a}function kr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){pt(l,null,10,[e,o,s]);return}}ic(e,n,a,r)}function ic(e,t,n,r=!0){console.error(e)}let kn=!1,Jr=!1;const be=[];let Ve=0;const qt=[];let et=null,Ot=0;const Go=Promise.resolve();let La=null;function Qo(e){const t=La||Go;return e?t.then(this?e.bind(this):e):t}function oc(e){let t=Ve+1,n=be.length;for(;t<n;){const r=t+n>>>1;En(be[r])<e?t=r+1:n=r}return t}function ja(e){(!be.length||!be.includes(e,kn&&e.allowRecurse?Ve+1:Ve))&&(e.id==null?be.push(e):be.splice(oc(e.id),0,e),Jo())}function Jo(){!kn&&!Jr&&(Jr=!0,La=Go.then(es))}function sc(e){const t=be.indexOf(e);t>Ve&&be.splice(t,1)}function lc(e){B(e)?qt.push(...e):(!et||!et.includes(e,e.allowRecurse?Ot+1:Ot))&&qt.push(e),Jo()}function gi(e,t=kn?Ve+1:0){for(;t<be.length;t++){const n=be[t];n&&n.pre&&(be.splice(t,1),t--,n())}}function Zo(e){if(qt.length){const t=[...new Set(qt)];if(qt.length=0,et){et.push(...t);return}for(et=t,et.sort((n,r)=>En(n)-En(r)),Ot=0;Ot<et.length;Ot++)et[Ot]();et=null,Ot=0}}const En=e=>e.id==null?1/0:e.id,cc=(e,t)=>{const n=En(e)-En(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function es(e){Jr=!1,kn=!0,be.sort(cc);const t=ze;try{for(Ve=0;Ve<be.length;Ve++){const n=be[Ve];n&&n.active!==!1&&pt(n,null,14)}}finally{Ve=0,be.length=0,Zo(),kn=!1,La=null,(be.length||qt.length)&&es()}}function fc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ne;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[c]||ne;h&&(a=n.map(g=>g.trim())),d&&(a=n.map(kl))}let s,l=r[s=Fr(t)]||r[s=Fr(Qe(t))];!l&&i&&(l=r[s=Fr(tn(t))]),l&&Be(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Be(f,e,6,a)}}function ts(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!H(e)){const l=f=>{const c=ts(f,t,!0);c&&(s=!0,we(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(oe(e)&&r.set(e,null),null):(B(i)?i.forEach(l=>o[l]=null):we(o,i),oe(e)&&r.set(e,o),o)}function Er(e,t){return!e||!br(t)?!1:(t=t.slice(2).replace(/Once$/,""),Y(e,t[0].toLowerCase()+t.slice(1))||Y(e,tn(t))||Y(e,t))}let Xe=null,Ar=null;function sr(e){const t=Xe;return Xe=e,Ar=e&&e.type.__scopeId||null,t}function uc(e){Ar=e}function dc(){Ar=null}function mc(e,t=Xe,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Oi(-1);const i=sr(t),o=e(...a);return sr(i),r._d&&Oi(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function jr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:c,renderCache:d,data:h,setupState:g,ctx:A,inheritAttrs:C}=e;let T,v;const w=sr(e);try{if(n.shapeFlag&4){const D=a||r;T=qe(c.call(D,D,d,i,g,h,A)),v=l}else{const D=t;T=qe(D.length>1?D(i,{attrs:l,slots:s,emit:f}):D(i,null)),v=t.props?l:hc(l)}}catch(D){pn.length=0,kr(D,e,1),T=me(An)}let F=T;if(v&&C!==!1){const D=Object.keys(v),{shapeFlag:W}=F;D.length&&W&7&&(o&&D.some(Aa)&&(v=pc(v,o)),F=Gt(F,v))}return n.dirs&&(F=Gt(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),T=F,sr(w),T}const hc=e=>{let t;for(const n in e)(n==="class"||n==="style"||br(n))&&((t||(t={}))[n]=e[n]);return t},pc=(e,t)=>{const n={};for(const r in e)(!Aa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function gc(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?vi(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const h=c[d];if(o[h]!==r[h]&&!Er(f,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?vi(r,o,f):!0:!!o;return!1}function vi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Er(n,i))return!0}return!1}function vc({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const bc=e=>e.__isSuspense;function yc(e,t){t&&t.pendingBranch?B(e)?t.effects.push(...e):t.effects.push(e):lc(e)}function Zn(e,t){if(ve){let n=ve.provides;const r=ve.parent&&ve.parent.provides;r===n&&(n=ve.provides=Object.create(r)),n[e]=t}}function gt(e,t,n=!1){const r=ve||Xe;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&H(t)?t.call(r.proxy):t}}const bi={};function hn(e,t,n){return ns(e,t,n)}function ns(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=ne){const s=ve;let l,f=!1,c=!1;if(ye(e)?(l=()=>e.value,f=or(e)):Yt(e)?(l=()=>e,r=!0):B(e)?(c=!0,f=e.some(v=>Yt(v)||or(v)),l=()=>e.map(v=>{if(ye(v))return v.value;if(Yt(v))return Bt(v);if(H(v))return pt(v,s,2)})):H(e)?t?l=()=>pt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),Be(e,s,3,[h])}:l=ze,t&&r){const v=l;l=()=>Bt(v())}let d,h=v=>{d=T.onStop=()=>{pt(v,s,4)}};if(Pn)return h=ze,t?n&&Be(t,s,3,[l(),c?[]:void 0,h]):l(),ze;let g=c?[]:bi;const A=()=>{if(!!T.active)if(t){const v=T.run();(r||f||(c?v.some((w,F)=>xn(w,g[F])):xn(v,g)))&&(d&&d(),Be(t,s,3,[v,g===bi?void 0:g,h]),g=v)}else T.run()};A.allowRecurse=!!t;let C;a==="sync"?C=A:a==="post"?C=()=>Ae(A,s&&s.suspense):(A.pre=!0,s&&(A.id=s.uid),C=()=>ja(A));const T=new Ia(l,C);return t?n?A():g=T.run():a==="post"?Ae(T.run.bind(T),s&&s.suspense):T.run(),()=>{T.stop(),s&&s.scope&&Oa(s.scope.effects,T)}}function _c(e,t,n){const r=this.proxy,a=ge(e)?e.includes(".")?rs(r,e):()=>r[e]:e.bind(r,r);let i;H(t)?i=t:(i=t.handler,n=t);const o=ve;Qt(this);const s=ns(a,i.bind(r),n);return o?Qt(o):Tt(),s}function rs(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Bt(e,t){if(!oe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ye(e))Bt(e.value,t);else if(B(e))for(let n=0;n<e.length;n++)Bt(e[n],t);else if(So(e)||Wt(e))e.forEach(n=>{Bt(n,t)});else if(Ro(e))for(const n in e)Bt(e[n],t);return e}function Je(e){return H(e)?{setup:e,name:e.name}:e}const er=e=>!!e.type.__asyncLoader,as=e=>e.type.__isKeepAlive;function xc(e,t){is(e,"a",t)}function wc(e,t){is(e,"da",t)}function is(e,t,n=ve){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Or(t,r,n),n){let a=n.parent;for(;a&&a.parent;)as(a.parent.vnode)&&kc(r,t,n,a),a=a.parent}}function kc(e,t,n,r){const a=Or(t,e,r,!0);os(()=>{Oa(r[t],a)},n)}function Or(e,t,n=ve,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;nn(),Qt(n);const s=Be(t,n,e,o);return Tt(),rn(),s});return r?a.unshift(i):a.push(i),i}}const it=e=>(t,n=ve)=>(!Pn||e==="sp")&&Or(e,(...r)=>t(...r),n),Ec=it("bm"),Ac=it("m"),Oc=it("bu"),Pc=it("u"),Sc=it("bum"),os=it("um"),Cc=it("sp"),Ic=it("rtg"),Rc=it("rtc");function Tc(e,t=ve){Or("ec",e,t)}function kt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(nn(),Be(l,n,8,[e.el,s,e,t]),rn())}}const ss="components";function Nc(e,t){return Fc(ss,e,!0,t)||e}const Mc=Symbol();function Fc(e,t,n=!0,r=!1){const a=Xe||ve;if(a){const i=a.type;if(e===ss){const s=df(i,!1);if(s&&(s===t||s===Qe(t)||s===xr(Qe(t))))return i}const o=yi(a[e]||i[e],t)||yi(a.appContext[e],t);return!o&&r?i:o}}function yi(e,t){return e&&(e[t]||e[Qe(t)]||e[xr(Qe(t))])}function Zr(e,t,n,r){let a;const i=n&&n[r];if(B(e)||ge(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(oe(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];a[s]=t(e[f],f,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const ea=e=>e?bs(e)?Ha(e)||e.proxy:ea(e.parent):null,lr=we(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ea(e.parent),$root:e=>ea(e.root),$emit:e=>e.emit,$options:e=>$a(e),$forceUpdate:e=>e.f||(e.f=()=>ja(e.update)),$nextTick:e=>e.n||(e.n=Qo.bind(e.proxy)),$watch:e=>_c.bind(e)}),Lc={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==ne&&Y(r,t))return o[t]=1,r[t];if(a!==ne&&Y(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&Y(f,t))return o[t]=3,i[t];if(n!==ne&&Y(n,t))return o[t]=4,n[t];ta&&(o[t]=0)}}const c=lr[t];let d,h;if(c)return t==="$attrs"&&Ie(e,"get",t),c(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==ne&&Y(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,Y(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==ne&&Y(a,t)?(a[t]=n,!0):r!==ne&&Y(r,t)?(r[t]=n,!0):Y(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==ne&&Y(e,o)||t!==ne&&Y(t,o)||(s=i[0])&&Y(s,o)||Y(r,o)||Y(lr,o)||Y(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Y(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let ta=!0;function jc(e){const t=$a(e),n=e.proxy,r=e.ctx;ta=!1,t.beforeCreate&&_i(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:c,beforeMount:d,mounted:h,beforeUpdate:g,updated:A,activated:C,deactivated:T,beforeDestroy:v,beforeUnmount:w,destroyed:F,unmounted:D,render:W,renderTracked:ie,renderTriggered:ce,errorCaptured:Pe,serverPrefetch:_e,expose:Te,inheritAttrs:st,components:Ue,directives:Ft,filters:xt}=t;if(f&&$c(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const ee in o){const J=o[ee];H(J)&&(r[ee]=J.bind(n))}if(a){const ee=a.call(n,n);oe(ee)&&(e.data=an(ee))}if(ta=!0,i)for(const ee in i){const J=i[ee],Ne=H(J)?J.bind(n,n):H(J.get)?J.get.bind(n,n):ze,wt=!H(J)&&H(J.set)?J.set.bind(n):ze,Me=le({get:Ne,set:wt});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>Me.value,set:ke=>Me.value=ke})}if(s)for(const ee in s)ls(s[ee],r,n,ee);if(l){const ee=H(l)?l.call(n):l;Reflect.ownKeys(ee).forEach(J=>{Zn(J,ee[J])})}c&&_i(c,e,"c");function ue(ee,J){B(J)?J.forEach(Ne=>ee(Ne.bind(n))):J&&ee(J.bind(n))}if(ue(Ec,d),ue(Ac,h),ue(Oc,g),ue(Pc,A),ue(xc,C),ue(wc,T),ue(Tc,Pe),ue(Rc,ie),ue(Ic,ce),ue(Sc,w),ue(os,D),ue(Cc,_e),B(Te))if(Te.length){const ee=e.exposed||(e.exposed={});Te.forEach(J=>{Object.defineProperty(ee,J,{get:()=>n[J],set:Ne=>n[J]=Ne})})}else e.exposed||(e.exposed={});W&&e.render===ze&&(e.render=W),st!=null&&(e.inheritAttrs=st),Ue&&(e.components=Ue),Ft&&(e.directives=Ft)}function $c(e,t,n=ze,r=!1){B(e)&&(e=na(e));for(const a in e){const i=e[a];let o;oe(i)?"default"in i?o=gt(i.from||a,i.default,!0):o=gt(i.from||a):o=gt(i),ye(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function _i(e,t,n){Be(B(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ls(e,t,n,r){const a=r.includes(".")?rs(n,r):()=>n[r];if(ge(e)){const i=t[e];H(i)&&hn(a,i)}else if(H(e))hn(a,e.bind(n));else if(oe(e))if(B(e))e.forEach(i=>ls(i,t,n,r));else{const i=H(e.handler)?e.handler.bind(n):t[e.handler];H(i)&&hn(a,i,e)}}function $a(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>cr(l,f,o,!0)),cr(l,t,o)),oe(t)&&i.set(t,l),l}function cr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&cr(e,i,n,!0),a&&a.forEach(o=>cr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Dc[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Dc={data:xi,props:At,emits:At,methods:At,computed:At,beforeCreate:xe,created:xe,beforeMount:xe,mounted:xe,beforeUpdate:xe,updated:xe,beforeDestroy:xe,beforeUnmount:xe,destroyed:xe,unmounted:xe,activated:xe,deactivated:xe,errorCaptured:xe,serverPrefetch:xe,components:At,directives:At,watch:Bc,provide:xi,inject:zc};function xi(e,t){return t?e?function(){return we(H(e)?e.call(this,this):e,H(t)?t.call(this,this):t)}:t:e}function zc(e,t){return At(na(e),na(t))}function na(e){if(B(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function xe(e,t){return e?[...new Set([].concat(e,t))]:t}function At(e,t){return e?we(we(Object.create(null),e),t):t}function Bc(e,t){if(!e)return t;if(!t)return e;const n=we(Object.create(null),e);for(const r in t)n[r]=xe(e[r],t[r]);return n}function Hc(e,t,n,r=!1){const a={},i={};ir(i,Pr,1),e.propsDefaults=Object.create(null),cs(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Jl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Uc(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=G(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let h=c[d];if(Er(e.emitsOptions,h))continue;const g=t[h];if(l)if(Y(i,h))g!==i[h]&&(i[h]=g,f=!0);else{const A=Qe(h);a[A]=ra(l,s,A,g,e,!1)}else g!==i[h]&&(i[h]=g,f=!0)}}}else{cs(e,t,a,i)&&(f=!0);let c;for(const d in s)(!t||!Y(t,d)&&((c=tn(d))===d||!Y(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(a[d]=ra(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!Y(t,d)&&!0)&&(delete i[d],f=!0)}f&&tt(e,"set","$attrs")}function cs(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Jn(l))continue;const f=t[l];let c;a&&Y(a,c=Qe(l))?!i||!i.includes(c)?n[c]=f:(s||(s={}))[c]=f:Er(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=G(n),f=s||ne;for(let c=0;c<i.length;c++){const d=i[c];n[d]=ra(a,l,d,f[d],e,!Y(f,d))}}return o}function ra(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=Y(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&H(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(Qt(a),r=f[n]=l.call(null,t),Tt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===tn(n))&&(r=!0))}return r}function fs(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!H(e)){const c=d=>{l=!0;const[h,g]=fs(d,t,!0);we(o,h),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return oe(e)&&r.set(e,Kt),Kt;if(B(i))for(let c=0;c<i.length;c++){const d=Qe(i[c]);wi(d)&&(o[d]=ne)}else if(i)for(const c in i){const d=Qe(c);if(wi(d)){const h=i[c],g=o[d]=B(h)||H(h)?{type:h}:h;if(g){const A=Ai(Boolean,g.type),C=Ai(String,g.type);g[0]=A>-1,g[1]=C<0||A<C,(A>-1||Y(g,"default"))&&s.push(d)}}}const f=[o,s];return oe(e)&&r.set(e,f),f}function wi(e){return e[0]!=="$"}function ki(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ei(e,t){return ki(e)===ki(t)}function Ai(e,t){return B(t)?t.findIndex(n=>Ei(n,e)):H(t)&&Ei(t,e)?0:-1}const us=e=>e[0]==="_"||e==="$stable",Da=e=>B(e)?e.map(qe):[qe(e)],Kc=(e,t,n)=>{if(t._n)return t;const r=mc((...a)=>Da(t(...a)),n);return r._c=!1,r},ds=(e,t,n)=>{const r=e._ctx;for(const a in e){if(us(a))continue;const i=e[a];if(H(i))t[a]=Kc(a,i,r);else if(i!=null){const o=Da(i);t[a]=()=>o}}},ms=(e,t)=>{const n=Da(t);e.slots.default=()=>n},Wc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=G(t),ir(t,"_",n)):ds(t,e.slots={})}else e.slots={},t&&ms(e,t);ir(e.slots,Pr,1)},Yc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=ne;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(we(a,t),!n&&s===1&&delete a._):(i=!t.$stable,ds(t,a)),o=t}else t&&(ms(e,t),o={default:1});if(i)for(const s in a)!us(s)&&!(s in o)&&delete a[s]};function hs(){return{app:null,config:{isNativeTag:vl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qc=0;function Vc(e,t){return function(r,a=null){H(r)||(r=Object.assign({},r)),a!=null&&!oe(a)&&(a=null);const i=hs(),o=new Set;let s=!1;const l=i.app={_uid:qc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:hf,get config(){return i.config},set config(f){},use(f,...c){return o.has(f)||(f&&H(f.install)?(o.add(f),f.install(l,...c)):H(f)&&(o.add(f),f(l,...c))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,c){return c?(i.components[f]=c,l):i.components[f]},directive(f,c){return c?(i.directives[f]=c,l):i.directives[f]},mount(f,c,d){if(!s){const h=me(r,a);return h.appContext=i,c&&t?t(h,f):e(h,f,d),s=!0,l._container=f,f.__vue_app__=l,Ha(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return i.provides[f]=c,l}};return l}}function aa(e,t,n,r,a=!1){if(B(e)){e.forEach((h,g)=>aa(h,t&&(B(t)?t[g]:t),n,r,a));return}if(er(r)&&!a)return;const i=r.shapeFlag&4?Ha(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,c=s.refs===ne?s.refs={}:s.refs,d=s.setupState;if(f!=null&&f!==l&&(ge(f)?(c[f]=null,Y(d,f)&&(d[f]=null)):ye(f)&&(f.value=null)),H(l))pt(l,s,12,[o,c]);else{const h=ge(l),g=ye(l);if(h||g){const A=()=>{if(e.f){const C=h?c[l]:l.value;a?B(C)&&Oa(C,i):B(C)?C.includes(i)||C.push(i):h?(c[l]=[i],Y(d,l)&&(d[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else h?(c[l]=o,Y(d,l)&&(d[l]=o)):g&&(l.value=o,e.k&&(c[e.k]=o))};o?(A.id=-1,Ae(A,n)):A()}}}const Ae=yc;function Xc(e){return Gc(e)}function Gc(e,t){const n=El();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:c,parentNode:d,nextSibling:h,setScopeId:g=ze,insertStaticContent:A}=e,C=(u,m,p,b=null,_=null,E=null,S=!1,k=null,O=!!m.dynamicChildren)=>{if(u===m)return;u&&!fn(u,m)&&(b=P(u),ke(u,_,E,!0),u=null),m.patchFlag===-2&&(O=!1,m.dynamicChildren=null);const{type:x,ref:j,shapeFlag:N}=m;switch(x){case za:T(u,m,p,b);break;case An:v(u,m,p,b);break;case $r:u==null&&w(m,p,b,S);break;case pe:Ue(u,m,p,b,_,E,S,k,O);break;default:N&1?W(u,m,p,b,_,E,S,k,O):N&6?Ft(u,m,p,b,_,E,S,k,O):(N&64||N&128)&&x.process(u,m,p,b,_,E,S,k,O,V)}j!=null&&_&&aa(j,u&&u.ref,E,m||u,!m)},T=(u,m,p,b)=>{if(u==null)r(m.el=s(m.children),p,b);else{const _=m.el=u.el;m.children!==u.children&&f(_,m.children)}},v=(u,m,p,b)=>{u==null?r(m.el=l(m.children||""),p,b):m.el=u.el},w=(u,m,p,b)=>{[u.el,u.anchor]=A(u.children,m,p,b,u.el,u.anchor)},F=({el:u,anchor:m},p,b)=>{let _;for(;u&&u!==m;)_=h(u),r(u,p,b),u=_;r(m,p,b)},D=({el:u,anchor:m})=>{let p;for(;u&&u!==m;)p=h(u),a(u),u=p;a(m)},W=(u,m,p,b,_,E,S,k,O)=>{S=S||m.type==="svg",u==null?ie(m,p,b,_,E,S,k,O):_e(u,m,_,E,S,k,O)},ie=(u,m,p,b,_,E,S,k)=>{let O,x;const{type:j,props:N,shapeFlag:$,transition:z,dirs:K}=u;if(O=u.el=o(u.type,E,N&&N.is,N),$&8?c(O,u.children):$&16&&Pe(u.children,O,null,b,_,E&&j!=="foreignObject",S,k),K&&kt(u,null,b,"created"),N){for(const Z in N)Z!=="value"&&!Jn(Z)&&i(O,Z,null,N[Z],E,u.children,b,_,I);"value"in N&&i(O,"value",null,N.value),(x=N.onVnodeBeforeMount)&&We(x,b,u)}ce(O,u,u.scopeId,S,b),K&&kt(u,null,b,"beforeMount");const te=(!_||_&&!_.pendingBranch)&&z&&!z.persisted;te&&z.beforeEnter(O),r(O,m,p),((x=N&&N.onVnodeMounted)||te||K)&&Ae(()=>{x&&We(x,b,u),te&&z.enter(O),K&&kt(u,null,b,"mounted")},_)},ce=(u,m,p,b,_)=>{if(p&&g(u,p),b)for(let E=0;E<b.length;E++)g(u,b[E]);if(_){let E=_.subTree;if(m===E){const S=_.vnode;ce(u,S,S.scopeId,S.slotScopeIds,_.parent)}}},Pe=(u,m,p,b,_,E,S,k,O=0)=>{for(let x=O;x<u.length;x++){const j=u[x]=k?ut(u[x]):qe(u[x]);C(null,j,m,p,b,_,E,S,k)}},_e=(u,m,p,b,_,E,S)=>{const k=m.el=u.el;let{patchFlag:O,dynamicChildren:x,dirs:j}=m;O|=u.patchFlag&16;const N=u.props||ne,$=m.props||ne;let z;p&&Et(p,!1),(z=$.onVnodeBeforeUpdate)&&We(z,p,m,u),j&&kt(m,u,p,"beforeUpdate"),p&&Et(p,!0);const K=_&&m.type!=="foreignObject";if(x?Te(u.dynamicChildren,x,k,p,b,K,E):S||J(u,m,k,null,p,b,K,E,!1),O>0){if(O&16)st(k,m,N,$,p,b,_);else if(O&2&&N.class!==$.class&&i(k,"class",null,$.class,_),O&4&&i(k,"style",N.style,$.style,_),O&8){const te=m.dynamicProps;for(let Z=0;Z<te.length;Z++){const de=te[Z],Fe=N[de],jt=$[de];(jt!==Fe||de==="value")&&i(k,de,Fe,jt,_,u.children,p,b,I)}}O&1&&u.children!==m.children&&c(k,m.children)}else!S&&x==null&&st(k,m,N,$,p,b,_);((z=$.onVnodeUpdated)||j)&&Ae(()=>{z&&We(z,p,m,u),j&&kt(m,u,p,"updated")},b)},Te=(u,m,p,b,_,E,S)=>{for(let k=0;k<m.length;k++){const O=u[k],x=m[k],j=O.el&&(O.type===pe||!fn(O,x)||O.shapeFlag&70)?d(O.el):p;C(O,x,j,null,b,_,E,S,!0)}},st=(u,m,p,b,_,E,S)=>{if(p!==b){if(p!==ne)for(const k in p)!Jn(k)&&!(k in b)&&i(u,k,p[k],null,S,m.children,_,E,I);for(const k in b){if(Jn(k))continue;const O=b[k],x=p[k];O!==x&&k!=="value"&&i(u,k,x,O,S,m.children,_,E,I)}"value"in b&&i(u,"value",p.value,b.value)}},Ue=(u,m,p,b,_,E,S,k,O)=>{const x=m.el=u?u.el:s(""),j=m.anchor=u?u.anchor:s("");let{patchFlag:N,dynamicChildren:$,slotScopeIds:z}=m;z&&(k=k?k.concat(z):z),u==null?(r(x,p,b),r(j,p,b),Pe(m.children,p,j,_,E,S,k,O)):N>0&&N&64&&$&&u.dynamicChildren?(Te(u.dynamicChildren,$,p,_,E,S,k),(m.key!=null||_&&m===_.subTree)&&ps(u,m,!0)):J(u,m,p,j,_,E,S,k,O)},Ft=(u,m,p,b,_,E,S,k,O)=>{m.slotScopeIds=k,u==null?m.shapeFlag&512?_.ctx.activate(m,p,b,S,O):xt(m,p,b,_,E,S,O):ln(u,m,O)},xt=(u,m,p,b,_,E,S)=>{const k=u.component=sf(u,b,_);if(as(u)&&(k.ctx.renderer=V),lf(k),k.asyncDep){if(_&&_.registerDep(k,ue),!u.el){const O=k.subTree=me(An);v(null,O,m,p)}return}ue(k,u,m,p,_,E,S)},ln=(u,m,p)=>{const b=m.component=u.component;if(gc(u,m,p))if(b.asyncDep&&!b.asyncResolved){ee(b,m,p);return}else b.next=m,sc(b.update),b.update();else m.el=u.el,b.vnode=m},ue=(u,m,p,b,_,E,S)=>{const k=()=>{if(u.isMounted){let{next:j,bu:N,u:$,parent:z,vnode:K}=u,te=j,Z;Et(u,!1),j?(j.el=K.el,ee(u,j,S)):j=K,N&&Lr(N),(Z=j.props&&j.props.onVnodeBeforeUpdate)&&We(Z,z,j,K),Et(u,!0);const de=jr(u),Fe=u.subTree;u.subTree=de,C(Fe,de,d(Fe.el),P(Fe),u,_,E),j.el=de.el,te===null&&vc(u,de.el),$&&Ae($,_),(Z=j.props&&j.props.onVnodeUpdated)&&Ae(()=>We(Z,z,j,K),_)}else{let j;const{el:N,props:$}=m,{bm:z,m:K,parent:te}=u,Z=er(m);if(Et(u,!1),z&&Lr(z),!Z&&(j=$&&$.onVnodeBeforeMount)&&We(j,te,m),Et(u,!0),N&&U){const de=()=>{u.subTree=jr(u),U(N,u.subTree,u,_,null)};Z?m.type.__asyncLoader().then(()=>!u.isUnmounted&&de()):de()}else{const de=u.subTree=jr(u);C(null,de,p,b,u,_,E),m.el=de.el}if(K&&Ae(K,_),!Z&&(j=$&&$.onVnodeMounted)){const de=m;Ae(()=>We(j,te,de),_)}(m.shapeFlag&256||te&&er(te.vnode)&&te.vnode.shapeFlag&256)&&u.a&&Ae(u.a,_),u.isMounted=!0,m=p=b=null}},O=u.effect=new Ia(k,()=>ja(x),u.scope),x=u.update=()=>O.run();x.id=u.uid,Et(u,!0),x()},ee=(u,m,p)=>{m.component=u;const b=u.vnode.props;u.vnode=m,u.next=null,Uc(u,m.props,b,p),Yc(u,m.children,p),nn(),gi(),rn()},J=(u,m,p,b,_,E,S,k,O=!1)=>{const x=u&&u.children,j=u?u.shapeFlag:0,N=m.children,{patchFlag:$,shapeFlag:z}=m;if($>0){if($&128){wt(x,N,p,b,_,E,S,k,O);return}else if($&256){Ne(x,N,p,b,_,E,S,k,O);return}}z&8?(j&16&&I(x,_,E),N!==x&&c(p,N)):j&16?z&16?wt(x,N,p,b,_,E,S,k,O):I(x,_,E,!0):(j&8&&c(p,""),z&16&&Pe(N,p,b,_,E,S,k,O))},Ne=(u,m,p,b,_,E,S,k,O)=>{u=u||Kt,m=m||Kt;const x=u.length,j=m.length,N=Math.min(x,j);let $;for($=0;$<N;$++){const z=m[$]=O?ut(m[$]):qe(m[$]);C(u[$],z,p,null,_,E,S,k,O)}x>j?I(u,_,E,!0,!1,N):Pe(m,p,b,_,E,S,k,O,N)},wt=(u,m,p,b,_,E,S,k,O)=>{let x=0;const j=m.length;let N=u.length-1,$=j-1;for(;x<=N&&x<=$;){const z=u[x],K=m[x]=O?ut(m[x]):qe(m[x]);if(fn(z,K))C(z,K,p,null,_,E,S,k,O);else break;x++}for(;x<=N&&x<=$;){const z=u[N],K=m[$]=O?ut(m[$]):qe(m[$]);if(fn(z,K))C(z,K,p,null,_,E,S,k,O);else break;N--,$--}if(x>N){if(x<=$){const z=$+1,K=z<j?m[z].el:b;for(;x<=$;)C(null,m[x]=O?ut(m[x]):qe(m[x]),p,K,_,E,S,k,O),x++}}else if(x>$)for(;x<=N;)ke(u[x],_,E,!0),x++;else{const z=x,K=x,te=new Map;for(x=K;x<=$;x++){const Se=m[x]=O?ut(m[x]):qe(m[x]);Se.key!=null&&te.set(Se.key,x)}let Z,de=0;const Fe=$-K+1;let jt=!1,ii=0;const cn=new Array(Fe);for(x=0;x<Fe;x++)cn[x]=0;for(x=z;x<=N;x++){const Se=u[x];if(de>=Fe){ke(Se,_,E,!0);continue}let Ke;if(Se.key!=null)Ke=te.get(Se.key);else for(Z=K;Z<=$;Z++)if(cn[Z-K]===0&&fn(Se,m[Z])){Ke=Z;break}Ke===void 0?ke(Se,_,E,!0):(cn[Ke-K]=x+1,Ke>=ii?ii=Ke:jt=!0,C(Se,m[Ke],p,null,_,E,S,k,O),de++)}const oi=jt?Qc(cn):Kt;for(Z=oi.length-1,x=Fe-1;x>=0;x--){const Se=K+x,Ke=m[Se],si=Se+1<j?m[Se+1].el:b;cn[x]===0?C(null,Ke,p,si,_,E,S,k,O):jt&&(Z<0||x!==oi[Z]?Me(Ke,p,si,2):Z--)}}},Me=(u,m,p,b,_=null)=>{const{el:E,type:S,transition:k,children:O,shapeFlag:x}=u;if(x&6){Me(u.component.subTree,m,p,b);return}if(x&128){u.suspense.move(m,p,b);return}if(x&64){S.move(u,m,p,V);return}if(S===pe){r(E,m,p);for(let N=0;N<O.length;N++)Me(O[N],m,p,b);r(u.anchor,m,p);return}if(S===$r){F(u,m,p);return}if(b!==2&&x&1&&k)if(b===0)k.beforeEnter(E),r(E,m,p),Ae(()=>k.enter(E),_);else{const{leave:N,delayLeave:$,afterLeave:z}=k,K=()=>r(E,m,p),te=()=>{N(E,()=>{K(),z&&z()})};$?$(E,K,te):te()}else r(E,m,p)},ke=(u,m,p,b=!1,_=!1)=>{const{type:E,props:S,ref:k,children:O,dynamicChildren:x,shapeFlag:j,patchFlag:N,dirs:$}=u;if(k!=null&&aa(k,null,p,u,!0),j&256){m.ctx.deactivate(u);return}const z=j&1&&$,K=!er(u);let te;if(K&&(te=S&&S.onVnodeBeforeUnmount)&&We(te,m,u),j&6)y(u.component,p,b);else{if(j&128){u.suspense.unmount(p,b);return}z&&kt(u,null,m,"beforeUnmount"),j&64?u.type.remove(u,m,p,_,V,b):x&&(E!==pe||N>0&&N&64)?I(x,m,p,!1,!0):(E===pe&&N&384||!_&&j&16)&&I(O,m,p),b&&Lt(u)}(K&&(te=S&&S.onVnodeUnmounted)||z)&&Ae(()=>{te&&We(te,m,u),z&&kt(u,null,m,"unmounted")},p)},Lt=u=>{const{type:m,el:p,anchor:b,transition:_}=u;if(m===pe){jn(p,b);return}if(m===$r){D(u);return}const E=()=>{a(p),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:S,delayLeave:k}=_,O=()=>S(p,E);k?k(u.el,E,O):O()}else E()},jn=(u,m)=>{let p;for(;u!==m;)p=h(u),a(u),u=p;a(m)},y=(u,m,p)=>{const{bum:b,scope:_,update:E,subTree:S,um:k}=u;b&&Lr(b),_.stop(),E&&(E.active=!1,ke(S,u,m,p)),k&&Ae(k,m),Ae(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},I=(u,m,p,b=!1,_=!1,E=0)=>{for(let S=E;S<u.length;S++)ke(u[S],m,p,b,_)},P=u=>u.shapeFlag&6?P(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el),L=(u,m,p)=>{u==null?m._vnode&&ke(m._vnode,null,null,!0):C(m._vnode||null,u,m,null,null,null,p),gi(),Zo(),m._vnode=u},V={p:C,um:ke,m:Me,r:Lt,mt:xt,mc:Pe,pc:J,pbc:Te,n:P,o:e};let se,U;return t&&([se,U]=t(V)),{render:L,hydrate:se,createApp:Vc(L,se)}}function Et({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ps(e,t,n=!1){const r=e.children,a=t.children;if(B(r)&&B(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=ut(a[i]),s.el=o.el),n||ps(o,s))}}function Qc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Jc=e=>e.__isTeleport,pe=Symbol(void 0),za=Symbol(void 0),An=Symbol(void 0),$r=Symbol(void 0),pn=[];let $e=null;function Oe(e=!1){pn.push($e=e?null:[])}function Zc(){pn.pop(),$e=pn[pn.length-1]||null}let On=1;function Oi(e){On+=e}function gs(e){return e.dynamicChildren=On>0?$e||Kt:null,Zc(),On>0&&$e&&$e.push(e),e}function Ce(e,t,n,r,a,i){return gs(q(e,t,n,r,a,i,!0))}function ef(e,t,n,r,a){return gs(me(e,t,n,r,a,!0))}function ia(e){return e?e.__v_isVNode===!0:!1}function fn(e,t){return e.type===t.type&&e.key===t.key}const Pr="__vInternal",vs=({key:e})=>e!=null?e:null,tr=({ref:e,ref_key:t,ref_for:n})=>e!=null?ge(e)||ye(e)||H(e)?{i:Xe,r:e,k:t,f:!!n}:e:null;function q(e,t=null,n=null,r=0,a=null,i=e===pe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&vs(t),ref:t&&tr(t),scopeId:Ar,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Ba(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ge(n)?8:16),On>0&&!o&&$e&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&$e.push(l),l}const me=tf;function tf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Mc)&&(e=An),ia(e)){const s=Gt(e,t,!0);return n&&Ba(s,n),On>0&&!i&&$e&&(s.shapeFlag&6?$e[$e.indexOf(e)]=s:$e.push(s)),s.patchFlag|=-2,s}if(mf(e)&&(e=e.__vccOpts),t){t=nf(t);let{class:s,style:l}=t;s&&!ge(s)&&(t.class=vr(s)),oe(l)&&(Uo(l)&&!B(l)&&(l=we({},l)),t.style=gr(l))}const o=ge(e)?1:bc(e)?128:Jc(e)?64:oe(e)?4:H(e)?2:0;return q(e,t,n,r,a,o,i,!0)}function nf(e){return e?Uo(e)||Pr in e?we({},e):e:null}function Gt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?rf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&vs(s),ref:t&&t.ref?n&&a?B(a)?a.concat(tr(t)):[a,tr(t)]:tr(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==pe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Gt(e.ssContent),ssFallback:e.ssFallback&&Gt(e.ssFallback),el:e.el,anchor:e.anchor}}function nr(e=" ",t=0){return me(za,null,e,t)}function qe(e){return e==null||typeof e=="boolean"?me(An):B(e)?me(pe,null,e.slice()):typeof e=="object"?ut(e):me(za,null,String(e))}function ut(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Gt(e)}function Ba(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(B(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Ba(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Pr in t)?t._ctx=Xe:a===3&&Xe&&(Xe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else H(t)?(t={default:t,_ctx:Xe},n=32):(t=String(t),r&64?(n=16,t=[nr(t)]):n=8);e.children=t,e.shapeFlag|=n}function rf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=vr([t.class,r.class]));else if(a==="style")t.style=gr([t.style,r.style]);else if(br(a)){const i=t[a],o=r[a];o&&i!==o&&!(B(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function We(e,t,n,r=null){Be(e,t,7,[n,r])}const af=hs();let of=0;function sf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||af,i={uid:of++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Al(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fs(r,a),emitsOptions:ts(r,a),emit:null,emitted:null,propsDefaults:ne,inheritAttrs:r.inheritAttrs,ctx:ne,data:ne,props:ne,attrs:ne,slots:ne,refs:ne,setupState:ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=fc.bind(null,i),e.ce&&e.ce(i),i}let ve=null;const Qt=e=>{ve=e,e.scope.on()},Tt=()=>{ve&&ve.scope.off(),ve=null};function bs(e){return e.vnode.shapeFlag&4}let Pn=!1;function lf(e,t=!1){Pn=t;const{props:n,children:r}=e.vnode,a=bs(e);Hc(e,n,a,t),Wc(e,r);const i=a?cf(e,t):void 0;return Pn=!1,i}function cf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ko(new Proxy(e.ctx,Lc));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?uf(e):null;Qt(e),nn();const i=pt(r,e,0,[e.props,a]);if(rn(),Tt(),Co(i)){if(i.then(Tt,Tt),t)return i.then(o=>{Pi(e,o,t)}).catch(o=>{kr(o,e,0)});e.asyncDep=i}else Pi(e,i,t)}else ys(e,t)}function Pi(e,t,n){H(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:oe(t)&&(e.setupState=Vo(t)),ys(e,n)}let Si;function ys(e,t,n){const r=e.type;if(!e.render){if(!t&&Si&&!r.render){const a=r.template||$a(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=we(we({isCustomElement:i,delimiters:s},o),l);r.render=Si(a,f)}}e.render=r.render||ze}Qt(e),nn(),jc(e),rn(),Tt()}function ff(e){return new Proxy(e.attrs,{get(t,n){return Ie(e,"get","$attrs"),t[n]}})}function uf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=ff(e))},slots:e.slots,emit:e.emit,expose:t}}function Ha(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Vo(Ko(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in lr)return lr[n](e)}}))}function df(e,t=!0){return H(e)?e.displayName||e.name:e.name||t&&e.__name}function mf(e){return H(e)&&"__vccOpts"in e}const le=(e,t)=>ac(e,t,Pn);function Sr(e,t,n){const r=arguments.length;return r===2?oe(t)&&!B(t)?ia(t)?me(e,null,[t]):me(e,t):me(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ia(n)&&(n=[n]),me(e,t,n))}const hf="3.2.40",pf="http://www.w3.org/2000/svg",Pt=typeof document<"u"?document:null,Ci=Pt&&Pt.createElement("template"),gf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?Pt.createElementNS(pf,e):Pt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Pt.createTextNode(e),createComment:e=>Pt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Pt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ci.innerHTML=r?`<svg>${e}</svg>`:e;const s=Ci.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function vf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function bf(e,t,n){const r=e.style,a=ge(n);if(n&&!a){for(const i in n)oa(r,i,n[i]);if(t&&!ge(t))for(const i in t)n[i]==null&&oa(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ii=/\s*!important$/;function oa(e,t,n){if(B(n))n.forEach(r=>oa(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=yf(e,t);Ii.test(n)?e.setProperty(tn(r),n.replace(Ii,""),"important"):e[r]=n}}const Ri=["Webkit","Moz","ms"],Dr={};function yf(e,t){const n=Dr[t];if(n)return n;let r=Qe(t);if(r!=="filter"&&r in e)return Dr[t]=r;r=xr(r);for(let a=0;a<Ri.length;a++){const i=Ri[a]+r;if(i in e)return Dr[t]=i}return t}const Ti="http://www.w3.org/1999/xlink";function _f(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ti,t.slice(6,t.length)):e.setAttributeNS(Ti,t,n);else{const i=ml(t);n==null||i&&!Oo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function xf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Oo(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[_s,wf]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let sa=0;const kf=Promise.resolve(),Ef=()=>{sa=0},Af=()=>sa||(kf.then(Ef),sa=_s());function Of(e,t,n,r){e.addEventListener(t,n,r)}function Pf(e,t,n,r){e.removeEventListener(t,n,r)}function Sf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Cf(t);if(r){const f=i[t]=If(r,a);Of(e,s,f,l)}else o&&(Pf(e,s,o,l),i[t]=void 0)}}const Ni=/(?:Once|Passive|Capture)$/;function Cf(e){let t;if(Ni.test(e)){t={};let r;for(;r=e.match(Ni);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):tn(e.slice(2)),t]}function If(e,t){const n=r=>{const a=r.timeStamp||_s();(wf||a>=n.attached-1)&&Be(Rf(r,n.value),t,5,[r])};return n.value=e,n.attached=Af(),n}function Rf(e,t){if(B(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Mi=/^on[a-z]/,Tf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?vf(e,r,a):t==="style"?bf(e,n,r):br(t)?Aa(t)||Sf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Nf(e,t,r,a))?xf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),_f(e,t,r,a))};function Nf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Mi.test(t)&&H(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Mi.test(t)&&ge(n)?!1:t in e}const Mf=we({patchProp:Tf},gf);let Fi;function Ff(){return Fi||(Fi=Xc(Mf))}const Lf=(...e)=>{const t=Ff().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=jf(r);if(!a)return;const i=t._component;!H(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function jf(e){return ge(e)?document.querySelector(e):e}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const zt=typeof window<"u";function $f(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Q=Object.assign;function zr(e,t){const n={};for(const r in t){const a=t[r];n[r]=He(a)?a.map(e):e(a)}return n}const gn=()=>{},He=Array.isArray,Df=/\/$/,zf=e=>e.replace(Df,"");function Br(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=Kf(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function Bf(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Li(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Hf(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Jt(t.matched[r],n.matched[a])&&xs(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Jt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function xs(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Uf(e[n],t[n]))return!1;return!0}function Uf(e,t){return He(e)?ji(e,t):He(t)?ji(t,e):e===t}function ji(e,t){return He(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Kf(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Sn;(function(e){e.pop="pop",e.push="push"})(Sn||(Sn={}));var vn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(vn||(vn={}));function Wf(e){if(!e)if(zt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),zf(e)}const Yf=/^[^#]+#/;function qf(e,t){return e.replace(Yf,"#")+t}function Vf(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Cr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Xf(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=Vf(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function $i(e,t){return(history.state?history.state.position-t:-1)+e}const la=new Map;function Gf(e,t){la.set(e,t)}function Qf(e){const t=la.get(e);return la.delete(e),t}let Jf=()=>location.protocol+"//"+location.host;function ws(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),Li(l,"")}return Li(n,e)+r+a}function Zf(e,t,n,r){let a=[],i=[],o=null;const s=({state:h})=>{const g=ws(e,location),A=n.value,C=t.value;let T=0;if(h){if(n.value=g,t.value=h,o&&o===A){o=null;return}T=C?h.position-C.position:0}else r(g);a.forEach(v=>{v(n.value,A,{delta:T,type:Sn.pop,direction:T?T>0?vn.forward:vn.back:vn.unknown})})};function l(){o=n.value}function f(h){a.push(h);const g=()=>{const A=a.indexOf(h);A>-1&&a.splice(A,1)};return i.push(g),g}function c(){const{history:h}=window;!h.state||h.replaceState(Q({},h.state,{scroll:Cr()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c),{pauseListeners:l,listen:f,destroy:d}}function Di(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Cr():null}}function eu(e){const{history:t,location:n}=window,r={value:ws(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,f,c){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:Jf()+e+l;try{t[c?"replaceState":"pushState"](f,"",h),a.value=f}catch(g){console.error(g),n[c?"replace":"assign"](h)}}function o(l,f){const c=Q({},t.state,Di(a.value.back,l,a.value.forward,!0),f,{position:a.value.position});i(l,c,!0),r.value=l}function s(l,f){const c=Q({},a.value,t.state,{forward:l,scroll:Cr()});i(c.current,c,!0);const d=Q({},Di(r.value,l,null),{position:c.position+1},f);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function tu(e){e=Wf(e);const t=eu(e),n=Zf(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=Q({location:"",base:e,go:r,createHref:qf.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function nu(e){return typeof e=="string"||e&&typeof e=="object"}function ks(e){return typeof e=="string"||typeof e=="symbol"}const ct={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Es=Symbol("");var zi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(zi||(zi={}));function Zt(e,t){return Q(new Error,{type:e,[Es]:!0},t)}function Ze(e,t){return e instanceof Error&&Es in e&&(t==null||!!(e.type&t))}const Bi="[^/]+?",ru={sensitive:!1,strict:!1,start:!0,end:!0},au=/[.+*?^${}()[\]/\\]/g;function iu(e,t){const n=Q({},ru,t),r=[];let a=n.start?"^":"";const i=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(a+="/");for(let d=0;d<f.length;d++){const h=f[d];let g=40+(n.sensitive?.25:0);if(h.type===0)d||(a+="/"),a+=h.value.replace(au,"\\$&"),g+=40;else if(h.type===1){const{value:A,repeatable:C,optional:T,regexp:v}=h;i.push({name:A,repeatable:C,optional:T});const w=v||Bi;if(w!==Bi){g+=10;try{new RegExp(`(${w})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${A}" (${w}): `+D.message)}}let F=C?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;d||(F=T&&f.length<2?`(?:/${F})`:"/"+F),T&&(F+="?"),a+=F,g+=20,T&&(g+=-8),C&&(g+=-20),w===".*"&&(g+=-50)}c.push(g)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(f){const c=f.match(o),d={};if(!c)return null;for(let h=1;h<c.length;h++){const g=c[h]||"",A=i[h-1];d[A.name]=g&&A.repeatable?g.split("/"):g}return d}function l(f){let c="",d=!1;for(const h of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const g of h)if(g.type===0)c+=g.value;else if(g.type===1){const{value:A,repeatable:C,optional:T}=g,v=A in f?f[A]:"";if(He(v)&&!C)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const w=He(v)?v.join("/"):v;if(!w)if(T)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);c+=w}}return c||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function ou(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function su(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=ou(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Hi(r))return 1;if(Hi(a))return-1}return a.length-r.length}function Hi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const lu={type:0,value:""},cu=/[a-zA-Z0-9_]/;function fu(e){if(!e)return[[]];if(e==="/")return[[lu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,f="",c="";function d(){!f||(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function h(){f+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(f&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:cu.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),d(),o(),a}function uu(e,t,n){const r=iu(fu(e.path),n),a=Q(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function du(e,t){const n=[],r=new Map;t=Wi({strict:!1,end:!0,sensitive:!1},t);function a(c){return r.get(c)}function i(c,d,h){const g=!h,A=mu(c);A.aliasOf=h&&h.record;const C=Wi(t,c),T=[A];if("alias"in c){const F=typeof c.alias=="string"?[c.alias]:c.alias;for(const D of F)T.push(Q({},A,{components:h?h.record.components:A.components,path:D,aliasOf:h?h.record:A}))}let v,w;for(const F of T){const{path:D}=F;if(d&&D[0]!=="/"){const W=d.record.path,ie=W[W.length-1]==="/"?"":"/";F.path=d.record.path+(D&&ie+D)}if(v=uu(F,d,C),h?h.alias.push(v):(w=w||v,w!==v&&w.alias.push(v),g&&c.name&&!Ki(v)&&o(c.name)),A.children){const W=A.children;for(let ie=0;ie<W.length;ie++)i(W[ie],v,h&&h.children[ie])}h=h||v,l(v)}return w?()=>{o(w)}:gn}function o(c){if(ks(c)){const d=r.get(c);d&&(r.delete(c),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(c);d>-1&&(n.splice(d,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let d=0;for(;d<n.length&&su(c,n[d])>=0&&(c.record.path!==n[d].record.path||!As(c,n[d]));)d++;n.splice(d,0,c),c.record.name&&!Ki(c)&&r.set(c.record.name,c)}function f(c,d){let h,g={},A,C;if("name"in c&&c.name){if(h=r.get(c.name),!h)throw Zt(1,{location:c});C=h.record.name,g=Q(Ui(d.params,h.keys.filter(w=>!w.optional).map(w=>w.name)),c.params&&Ui(c.params,h.keys.map(w=>w.name))),A=h.stringify(g)}else if("path"in c)A=c.path,h=n.find(w=>w.re.test(A)),h&&(g=h.parse(A),C=h.record.name);else{if(h=d.name?r.get(d.name):n.find(w=>w.re.test(d.path)),!h)throw Zt(1,{location:c,currentLocation:d});C=h.record.name,g=Q({},d.params,c.params),A=h.stringify(g)}const T=[];let v=h;for(;v;)T.unshift(v.record),v=v.parent;return{name:C,path:A,params:g,matched:T,meta:pu(T)}}return e.forEach(c=>i(c)),{addRoute:i,resolve:f,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Ui(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function mu(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:hu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function hu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Ki(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function pu(e){return e.reduce((t,n)=>Q(t,n.meta),{})}function Wi(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function As(e,t){return t.children.some(n=>n===e||As(e,n))}const Os=/#/g,gu=/&/g,vu=/\//g,bu=/=/g,yu=/\?/g,Ps=/\+/g,_u=/%5B/g,xu=/%5D/g,Ss=/%5E/g,wu=/%60/g,Cs=/%7B/g,ku=/%7C/g,Is=/%7D/g,Eu=/%20/g;function Ua(e){return encodeURI(""+e).replace(ku,"|").replace(_u,"[").replace(xu,"]")}function Au(e){return Ua(e).replace(Cs,"{").replace(Is,"}").replace(Ss,"^")}function ca(e){return Ua(e).replace(Ps,"%2B").replace(Eu,"+").replace(Os,"%23").replace(gu,"%26").replace(wu,"`").replace(Cs,"{").replace(Is,"}").replace(Ss,"^")}function Ou(e){return ca(e).replace(bu,"%3D")}function Pu(e){return Ua(e).replace(Os,"%23").replace(yu,"%3F")}function Su(e){return e==null?"":Pu(e).replace(vu,"%2F")}function fr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Cu(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Ps," "),o=i.indexOf("="),s=fr(o<0?i:i.slice(0,o)),l=o<0?null:fr(i.slice(o+1));if(s in t){let f=t[s];He(f)||(f=t[s]=[f]),f.push(l)}else t[s]=l}return t}function Yi(e){let t="";for(let n in e){const r=e[n];if(n=Ou(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(He(r)?r.map(i=>i&&ca(i)):[r&&ca(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Iu(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=He(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const Ru=Symbol(""),qi=Symbol(""),Ka=Symbol(""),Rs=Symbol(""),fa=Symbol("");function un(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function dt(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(Zt(4,{from:n,to:t})):d instanceof Error?s(d):nu(d)?s(Zt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},f=e.call(r&&r.instances[a],t,n,l);let c=Promise.resolve(f);e.length<3&&(c=c.then(l)),c.catch(d=>s(d))})}function Hr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Tu(s)){const f=(s.__vccOpts||s)[t];f&&a.push(dt(f,n,r,i,o))}else{let l=s();a.push(()=>l.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const c=$f(f)?f.default:f;i.components[o]=c;const h=(c.__vccOpts||c)[t];return h&&dt(h,n,r,i,o)()}))}}return a}function Tu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Vi(e){const t=gt(Ka),n=gt(Rs),r=le(()=>t.resolve(ht(e.to))),a=le(()=>{const{matched:l}=r.value,{length:f}=l,c=l[f-1],d=n.matched;if(!c||!d.length)return-1;const h=d.findIndex(Jt.bind(null,c));if(h>-1)return h;const g=Xi(l[f-2]);return f>1&&Xi(c)===g&&d[d.length-1].path!==g?d.findIndex(Jt.bind(null,l[f-2])):h}),i=le(()=>a.value>-1&&Lu(n.params,r.value.params)),o=le(()=>a.value>-1&&a.value===n.matched.length-1&&xs(n.params,r.value.params));function s(l={}){return Fu(l)?t[ht(e.replace)?"replace":"push"](ht(e.to)).catch(gn):Promise.resolve()}return{route:r,href:le(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Nu=Je({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Vi,setup(e,{slots:t}){const n=an(Vi(e)),{options:r}=gt(Ka),a=le(()=>({[Gi(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Gi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Sr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),Mu=Nu;function Fu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Lu(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!He(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Xi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Gi=(e,t,n)=>e!=null?e:t!=null?t:n,ju=Je({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=gt(fa),a=le(()=>e.route||r.value),i=gt(qi,0),o=le(()=>{let f=ht(i);const{matched:c}=a.value;let d;for(;(d=c[f])&&!d.components;)f++;return f}),s=le(()=>a.value.matched[o.value]);Zn(qi,le(()=>o.value+1)),Zn(Ru,s),Zn(fa,a);const l=Zl();return hn(()=>[l.value,s.value,e.name],([f,c,d],[h,g,A])=>{c&&(c.instances[d]=f,g&&g!==c&&f&&f===h&&(c.leaveGuards.size||(c.leaveGuards=g.leaveGuards),c.updateGuards.size||(c.updateGuards=g.updateGuards))),f&&c&&(!g||!Jt(c,g)||!h)&&(c.enterCallbacks[d]||[]).forEach(C=>C(f))},{flush:"post"}),()=>{const f=a.value,c=e.name,d=s.value,h=d&&d.components[c];if(!h)return Qi(n.default,{Component:h,route:f});const g=d.props[c],A=g?g===!0?f.params:typeof g=="function"?g(f):g:null,T=Sr(h,Q({},A,t,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return Qi(n.default,{Component:T,route:f})||T}}});function Qi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Ts=ju;function $u(e){const t=du(e.routes,e),n=e.parseQuery||Cu,r=e.stringifyQuery||Yi,a=e.history,i=un(),o=un(),s=un(),l=ec(ct);let f=ct;zt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=zr.bind(null,y=>""+y),d=zr.bind(null,Su),h=zr.bind(null,fr);function g(y,I){let P,L;return ks(y)?(P=t.getRecordMatcher(y),L=I):L=y,t.addRoute(L,P)}function A(y){const I=t.getRecordMatcher(y);I&&t.removeRoute(I)}function C(){return t.getRoutes().map(y=>y.record)}function T(y){return!!t.getRecordMatcher(y)}function v(y,I){if(I=Q({},I||l.value),typeof y=="string"){const u=Br(n,y,I.path),m=t.resolve({path:u.path},I),p=a.createHref(u.fullPath);return Q(u,m,{params:h(m.params),hash:fr(u.hash),redirectedFrom:void 0,href:p})}let P;if("path"in y)P=Q({},y,{path:Br(n,y.path,I.path).path});else{const u=Q({},y.params);for(const m in u)u[m]==null&&delete u[m];P=Q({},y,{params:d(y.params)}),I.params=d(I.params)}const L=t.resolve(P,I),V=y.hash||"";L.params=c(h(L.params));const se=Bf(r,Q({},y,{hash:Au(V),path:L.path})),U=a.createHref(se);return Q({fullPath:se,hash:V,query:r===Yi?Iu(y.query):y.query||{}},L,{redirectedFrom:void 0,href:U})}function w(y){return typeof y=="string"?Br(n,y,l.value.path):Q({},y)}function F(y,I){if(f!==y)return Zt(8,{from:I,to:y})}function D(y){return ce(y)}function W(y){return D(Q(w(y),{replace:!0}))}function ie(y){const I=y.matched[y.matched.length-1];if(I&&I.redirect){const{redirect:P}=I;let L=typeof P=="function"?P(y):P;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=w(L):{path:L},L.params={}),Q({query:y.query,hash:y.hash,params:"path"in L?{}:y.params},L)}}function ce(y,I){const P=f=v(y),L=l.value,V=y.state,se=y.force,U=y.replace===!0,u=ie(P);if(u)return ce(Q(w(u),{state:typeof u=="object"?Q({},V,u.state):V,force:se,replace:U}),I||P);const m=P;m.redirectedFrom=I;let p;return!se&&Hf(r,L,P)&&(p=Zt(16,{to:m,from:L}),wt(L,L,!0,!1)),(p?Promise.resolve(p):_e(m,L)).catch(b=>Ze(b)?Ze(b,2)?b:Ne(b):ee(b,m,L)).then(b=>{if(b){if(Ze(b,2))return ce(Q({replace:U},w(b.to),{state:typeof b.to=="object"?Q({},V,b.to.state):V,force:se}),I||m)}else b=st(m,L,!0,U,V);return Te(m,L,b),b})}function Pe(y,I){const P=F(y,I);return P?Promise.reject(P):Promise.resolve()}function _e(y,I){let P;const[L,V,se]=Du(y,I);P=Hr(L.reverse(),"beforeRouteLeave",y,I);for(const u of L)u.leaveGuards.forEach(m=>{P.push(dt(m,y,I))});const U=Pe.bind(null,y,I);return P.push(U),Dt(P).then(()=>{P=[];for(const u of i.list())P.push(dt(u,y,I));return P.push(U),Dt(P)}).then(()=>{P=Hr(V,"beforeRouteUpdate",y,I);for(const u of V)u.updateGuards.forEach(m=>{P.push(dt(m,y,I))});return P.push(U),Dt(P)}).then(()=>{P=[];for(const u of y.matched)if(u.beforeEnter&&!I.matched.includes(u))if(He(u.beforeEnter))for(const m of u.beforeEnter)P.push(dt(m,y,I));else P.push(dt(u.beforeEnter,y,I));return P.push(U),Dt(P)}).then(()=>(y.matched.forEach(u=>u.enterCallbacks={}),P=Hr(se,"beforeRouteEnter",y,I),P.push(U),Dt(P))).then(()=>{P=[];for(const u of o.list())P.push(dt(u,y,I));return P.push(U),Dt(P)}).catch(u=>Ze(u,8)?u:Promise.reject(u))}function Te(y,I,P){for(const L of s.list())L(y,I,P)}function st(y,I,P,L,V){const se=F(y,I);if(se)return se;const U=I===ct,u=zt?history.state:{};P&&(L||U?a.replace(y.fullPath,Q({scroll:U&&u&&u.scroll},V)):a.push(y.fullPath,V)),l.value=y,wt(y,I,P,U),Ne()}let Ue;function Ft(){Ue||(Ue=a.listen((y,I,P)=>{if(!jn.listening)return;const L=v(y),V=ie(L);if(V){ce(Q(V,{replace:!0}),L).catch(gn);return}f=L;const se=l.value;zt&&Gf($i(se.fullPath,P.delta),Cr()),_e(L,se).catch(U=>Ze(U,12)?U:Ze(U,2)?(ce(U.to,L).then(u=>{Ze(u,20)&&!P.delta&&P.type===Sn.pop&&a.go(-1,!1)}).catch(gn),Promise.reject()):(P.delta&&a.go(-P.delta,!1),ee(U,L,se))).then(U=>{U=U||st(L,se,!1),U&&(P.delta&&!Ze(U,8)?a.go(-P.delta,!1):P.type===Sn.pop&&Ze(U,20)&&a.go(-1,!1)),Te(L,se,U)}).catch(gn)}))}let xt=un(),ln=un(),ue;function ee(y,I,P){Ne(y);const L=ln.list();return L.length?L.forEach(V=>V(y,I,P)):console.error(y),Promise.reject(y)}function J(){return ue&&l.value!==ct?Promise.resolve():new Promise((y,I)=>{xt.add([y,I])})}function Ne(y){return ue||(ue=!y,Ft(),xt.list().forEach(([I,P])=>y?P(y):I()),xt.reset()),y}function wt(y,I,P,L){const{scrollBehavior:V}=e;if(!zt||!V)return Promise.resolve();const se=!P&&Qf($i(y.fullPath,0))||(L||!P)&&history.state&&history.state.scroll||null;return Qo().then(()=>V(y,I,se)).then(U=>U&&Xf(U)).catch(U=>ee(U,y,I))}const Me=y=>a.go(y);let ke;const Lt=new Set,jn={currentRoute:l,listening:!0,addRoute:g,removeRoute:A,hasRoute:T,getRoutes:C,resolve:v,options:e,push:D,replace:W,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:ln.add,isReady:J,install(y){const I=this;y.component("RouterLink",Mu),y.component("RouterView",Ts),y.config.globalProperties.$router=I,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>ht(l)}),zt&&!ke&&l.value===ct&&(ke=!0,D(a.location).catch(V=>{}));const P={};for(const V in ct)P[V]=le(()=>l.value[V]);y.provide(Ka,I),y.provide(Rs,an(P)),y.provide(fa,l);const L=y.unmount;Lt.add(y),y.unmount=function(){Lt.delete(y),Lt.size<1&&(f=ct,Ue&&Ue(),Ue=null,l.value=ct,ke=!1,ue=!1),L()}}};return jn}function Dt(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Du(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(f=>Jt(f,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(f=>Jt(f,l))||a.push(l))}return[n,r,a]}const zu=q("header",null,null,-1),Bu=Je({__name:"App",setup(e){return(t,n)=>(Oe(),Ce(pe,null,[zu,me(ht(Ts))],64))}}),St=class{constructor(t,n){this.name=t,this.color=n}};let X=St;$t(X,"FRONT_END",new St("Front-end","#5D1309")),$t(X,"TEST_CI",new St("Test / CI","#663F00")),$t(X,"BACK_END",new St("Back-end","#132053")),$t(X,"DBMS",new St("DBMS","#14524F")),$t(X,"MISC",new St("Misc","#333333"));const Hu=[{name:"React",level:4,category:X.FRONT_END},{name:"MUI",level:4,category:X.FRONT_END},{name:"CSS 3",level:3,category:X.FRONT_END},{name:"HTML 5",level:3,category:X.FRONT_END},{name:"Vue.js",level:1,category:X.FRONT_END},{name:"SCSS",level:1,category:X.FRONT_END},{name:"BEM",level:1,category:X.FRONT_END},{name:"Github Actions",level:3,category:X.TEST_CI},{name:"Jest",level:3,category:X.TEST_CI},{name:"TypeScript",level:3,category:X.MISC},{name:"Cypress",level:2,category:X.TEST_CI},{name:"Sails.js",level:3,category:X.BACK_END},{name:"Python",level:2,category:X.BACK_END},{name:"Node.js",level:2,category:X.BACK_END},{name:"Postgres",level:3,category:X.DBMS},{name:"SQL",level:2,category:X.DBMS},{name:"MongoDB",level:1,category:X.DBMS},{name:"Adobe Photoshop",level:1,category:X.MISC},{name:"Adobe Premiere",level:1,category:X.MISC},{name:"Docker",level:2,category:X.MISC},{name:"Git",level:3,category:X.MISC},{name:"Google Drive",level:3,category:X.MISC},{name:"Swagger",level:2,category:X.MISC}],Uu={class:"skill__h3"},Ku={class:"skill__level"},Wu=Je({__name:"SkillItem",props:{skill:null},setup(e){return(t,n)=>(Oe(),Ce("li",{class:vr(["skill","border-"+e.skill.level])},[q("h3",Uu,qr(e.skill.name),1),q("p",{class:"skill__category",style:gr({"text-decoration-color":e.skill.category.color})},qr(e.skill.category.name),5),q("div",Ku,[(Oe(!0),Ce(pe,null,Zr(e.skill.level,r=>(Oe(),Ce("span",{key:e.skill.level},"\u2605"))),128))])],2))}});const on=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Yu=on(Wu,[["__scopeId","data-v-8acae4ae"]]),qu={class:"wrapper"},Vu={class:"category__title"},Xu={class:"category__skill-list"},Gu=Je({__name:"SkillList",setup(e){const t=an({skills:[...Hu].sort((n,r)=>r.level-n.level)});return(n,r)=>(Oe(),Ce("div",qu,[(Oe(!0),Ce(pe,null,Zr(Object.values(ht(X)),a=>(Oe(),Ce("div",{key:a.name,class:"category"},[q("h3",Vu,qr(a.name),1),q("ul",Xu,[(Oe(!0),Ce(pe,null,Zr(t.skills.filter(i=>i.category.name===a.name),i=>(Oe(),ef(Yu,{key:i.name,skill:i},null,8,["skill"]))),128))])]))),128))]))}});const Qu=on(Gu,[["__scopeId","data-v-2ffd0106"]]),Ju=q("h2",null,"Skills",-1),Zu=Je({__name:"SkillsView",setup(e){return(t,n)=>(Oe(),Ce(pe,null,[Ju,me(Qu)],64))}}),ed={},td=q("h2",null,"Projects",-1),nd=q("div",{class:"placeholder-block"},"PLACEHOLDER BLOCK",-1);function rd(e,t){return Oe(),Ce(pe,null,[td,nd],64)}const ad=on(ed,[["render",rd]]),id={},od=q("h2",null,"Contact me",-1),sd=q("div",{class:"placeholder-block"},"PLACEHOLDER BLOCK",-1);function ld(e,t){return Oe(),Ce(pe,null,[od,sd],64)}const cd=on(id,[["render",ld]]),fd={},ud=q("h2",null,"About me",-1),dd=q("div",{class:"placeholder-block"},"PLACEHOLDER BLOCK",-1);function md(e,t){return Oe(),Ce(pe,null,[ud,dd],64)}const hd=on(fd,[["render",md]]),Ir=e=>(uc("data-v-1417b196"),e=e(),dc(),e),pd=Ir(()=>q("div",{class:"texture-bg"},null,-1)),gd=Ir(()=>q("div",{class:"side-bar side-bar--left"},[q("a",{class:"side-bar__a",href:"mailto:clm.roig@gmail.com"},"clm.roig@gmail.com")],-1)),vd={class:"side-bar side-bar--right"},bd={class:"side-bar__a",href:"https://github.com/clm-roig/",target:"_blank",rel:"noopener noreferrer"},yd={class:"side-bar__a",href:"https://www.linkedin.com/in/clm-roig/",target:"_blank",rel:"noopener noreferrer"},_d=Ir(()=>q("header",{class:"header"},[q("h1",{class:"header__h1"},"Cl\xE9ment Roig"),q("p",{class:"header__what-i-am"},"Web developer \xB7 Musician \xB7 Nature lover")],-1)),xd={id:"skills",class:"section--bg-dark"},wd={id:"projects"},kd={id:"about",class:"section--bg-dark"},Ed={id:"contact"},Ad=Ir(()=>q("footer",{class:"footer section--bg-dark"},[q("p",null,"Cl\xE9ment ROIG"),q("p",{class:"footer__caption"},[nr(" Website using "),q("a",{href:"https://vuejs.org/"},"Vue.js framework"),nr(" and "),q("a",{href:"https://sass-lang.com/"},"SASS (SCSS)"),nr(" only ")])],-1)),Od=Je({__name:"HomeView",setup(e){return(t,n)=>{const r=Nc("font-awesome-icon");return Oe(),Ce(pe,null,[pd,q("main",null,[gd,q("div",vd,[q("a",bd,[me(r,{class:"side-bar__icons",icon:["fa-brands","fa-github"]})]),q("a",yd,[me(r,{class:"side-bar__icons",icon:["fa-brands","fa-linkedin"]})])]),_d,q("section",xd,[me(Zu)]),q("section",wd,[me(ad)]),q("section",kd,[me(hd)]),q("section",Ed,[me(cd)])]),Ad],64)}}});const Pd=on(Od,[["__scopeId","data-v-1417b196"]]),Sd=$u({history:tu("/"),routes:[{path:"/",name:"home",component:Pd}]});function Ji(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ji(Object(n),!0).forEach(function(r){he(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ji(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ur(e){return ur=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ur(e)}function Cd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Zi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Id(e,t,n){return t&&Zi(e.prototype,t),n&&Zi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function he(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wa(e,t){return Td(e)||Md(e,t)||Ns(e,t)||Ld()}function Mn(e){return Rd(e)||Nd(e)||Ns(e)||Fd()}function Rd(e){if(Array.isArray(e))return ua(e)}function Td(e){if(Array.isArray(e))return e}function Nd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Md(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Ns(e,t){if(!!e){if(typeof e=="string")return ua(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ua(e,t)}}function ua(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Fd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ld(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var eo=function(){},Ya={},Ms={},Fs=null,Ls={mark:eo,measure:eo};try{typeof window<"u"&&(Ya=window),typeof document<"u"&&(Ms=document),typeof MutationObserver<"u"&&(Fs=MutationObserver),typeof performance<"u"&&(Ls=performance)}catch{}var jd=Ya.navigator||{},to=jd.userAgent,no=to===void 0?"":to,bt=Ya,ae=Ms,ro=Fs,Un=Ls;bt.document;var ot=!!ae.documentElement&&!!ae.head&&typeof ae.addEventListener=="function"&&typeof ae.createElement=="function",js=~no.indexOf("MSIE")||~no.indexOf("Trident/"),Kn,Wn,Yn,qn,Vn,nt="___FONT_AWESOME___",da=16,$s="fa",Ds="svg-inline--fa",Nt="data-fa-i2svg",ma="data-fa-pseudo-element",$d="data-fa-pseudo-element-pending",qa="data-prefix",Va="data-icon",ao="fontawesome-i2svg",Dd="async",zd=["HTML","HEAD","STYLE","SCRIPT"],zs=function(){try{return!0}catch{return!1}}(),re="classic",fe="sharp",Xa=[re,fe];function Fn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[re]}})}var Cn=Fn((Kn={},he(Kn,re,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),he(Kn,fe,{fa:"solid",fass:"solid","fa-solid":"solid"}),Kn)),In=Fn((Wn={},he(Wn,re,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),he(Wn,fe,{solid:"fass"}),Wn)),Rn=Fn((Yn={},he(Yn,re,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),he(Yn,fe,{fass:"fa-solid"}),Yn)),Bd=Fn((qn={},he(qn,re,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),he(qn,fe,{"fa-solid":"fass"}),qn)),Hd=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Bs="fa-layers-text",Ud=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Kd=Fn((Vn={},he(Vn,re,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),he(Vn,fe,{900:"fass"}),Vn)),Hs=[1,2,3,4,5,6,7,8,9,10],Wd=Hs.concat([11,12,13,14,15,16,17,18,19,20]),Yd=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ct={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Tn=new Set;Object.keys(In[re]).map(Tn.add.bind(Tn));Object.keys(In[fe]).map(Tn.add.bind(Tn));var qd=[].concat(Xa,Mn(Tn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ct.GROUP,Ct.SWAP_OPACITY,Ct.PRIMARY,Ct.SECONDARY]).concat(Hs.map(function(e){return"".concat(e,"x")})).concat(Wd.map(function(e){return"w-".concat(e)})),bn=bt.FontAwesomeConfig||{};function Vd(e){var t=ae.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Xd(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ae&&typeof ae.querySelector=="function"){var Gd=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Gd.forEach(function(e){var t=Wa(e,2),n=t[0],r=t[1],a=Xd(Vd(n));a!=null&&(bn[r]=a)})}var Us={styleDefault:"solid",familyDefault:"classic",cssPrefix:$s,replacementClass:Ds,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};bn.familyPrefix&&(bn.cssPrefix=bn.familyPrefix);var en=R(R({},Us),bn);en.autoReplaceSvg||(en.observeMutations=!1);var M={};Object.keys(Us).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){en[e]=n,yn.forEach(function(r){return r(M)})},get:function(){return en[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){en.cssPrefix=t,yn.forEach(function(n){return n(M)})},get:function(){return en.cssPrefix}});bt.FontAwesomeConfig=M;var yn=[];function Qd(e){return yn.push(e),function(){yn.splice(yn.indexOf(e),1)}}var ft=da,Ge={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Jd(e){if(!(!e||!ot)){var t=ae.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ae.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ae.head.insertBefore(t,r),e}}var Zd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Nn(){for(var e=12,t="";e-- >0;)t+=Zd[Math.random()*62|0];return t}function sn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ga(e){return e.classList?sn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ks(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function em(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ks(e[n]),'" ')},"").trim()}function Rr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Qa(e){return e.size!==Ge.size||e.x!==Ge.x||e.y!==Ge.y||e.rotate!==Ge.rotate||e.flipX||e.flipY}function tm(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function nm(e){var t=e.transform,n=e.width,r=n===void 0?da:n,a=e.height,i=a===void 0?da:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&js?l+="translate(".concat(t.x/ft-r/2,"em, ").concat(t.y/ft-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ft,"em), calc(-50% + ").concat(t.y/ft,"em)) "):l+="translate(".concat(t.x/ft,"em, ").concat(t.y/ft,"em) "),l+="scale(".concat(t.size/ft*(t.flipX?-1:1),", ").concat(t.size/ft*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var rm=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
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
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
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
}`;function Ws(){var e=$s,t=Ds,n=M.cssPrefix,r=M.replacementClass,a=rm;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var io=!1;function Ur(){M.autoAddCss&&!io&&(Jd(Ws()),io=!0)}var am={mixout:function(){return{dom:{css:Ws,insertCss:Ur}}},hooks:function(){return{beforeDOMElementCreation:function(){Ur()},beforeI2svg:function(){Ur()}}}},rt=bt||{};rt[nt]||(rt[nt]={});rt[nt].styles||(rt[nt].styles={});rt[nt].hooks||(rt[nt].hooks={});rt[nt].shims||(rt[nt].shims=[]);var De=rt[nt],Ys=[],im=function e(){ae.removeEventListener("DOMContentLoaded",e),dr=1,Ys.map(function(t){return t()})},dr=!1;ot&&(dr=(ae.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ae.readyState),dr||ae.addEventListener("DOMContentLoaded",im));function om(e){!ot||(dr?setTimeout(e,0):Ys.push(e))}function Ln(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Ks(e):"<".concat(t," ").concat(em(r),">").concat(i.map(Ln).join(""),"</").concat(t,">")}function oo(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var sm=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Kr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?sm(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function lm(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ha(e){var t=lm(e);return t.length===1?t[0].toString(16):null}function cm(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function so(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function pa(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=so(t);typeof De.hooks.addPack=="function"&&!a?De.hooks.addPack(e,so(t)):De.styles[e]=R(R({},De.styles[e]||{}),i),e==="fas"&&pa("fa",t)}var Xn,Gn,Qn,Ht=De.styles,fm=De.shims,um=(Xn={},he(Xn,re,Object.values(Rn[re])),he(Xn,fe,Object.values(Rn[fe])),Xn),Ja=null,qs={},Vs={},Xs={},Gs={},Qs={},dm=(Gn={},he(Gn,re,Object.keys(Cn[re])),he(Gn,fe,Object.keys(Cn[fe])),Gn);function mm(e){return~qd.indexOf(e)}function hm(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!mm(a)?a:null}var Js=function(){var t=function(i){return Kr(Ht,function(o,s,l){return o[l]=Kr(s,i,{}),o},{})};qs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Vs=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Qs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Ht||M.autoFetchSvg,r=Kr(fm,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Xs=r.names,Gs=r.unicodes,Ja=Tr(M.styleDefault,{family:M.familyDefault})};Qd(function(e){Ja=Tr(e.styleDefault,{family:M.familyDefault})});Js();function Za(e,t){return(qs[e]||{})[t]}function pm(e,t){return(Vs[e]||{})[t]}function It(e,t){return(Qs[e]||{})[t]}function Zs(e){return Xs[e]||{prefix:null,iconName:null}}function gm(e){var t=Gs[e],n=Za("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function yt(){return Ja}var ei=function(){return{prefix:null,iconName:null,rest:[]}};function Tr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?re:n,a=Cn[r][e],i=In[r][e]||In[r][a],o=e in De.styles?e:null;return i||o||null}var lo=(Qn={},he(Qn,re,Object.keys(Rn[re])),he(Qn,fe,Object.keys(Rn[fe])),Qn);function Nr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},he(t,re,"".concat(M.cssPrefix,"-").concat(re)),he(t,fe,"".concat(M.cssPrefix,"-").concat(fe)),t),o=null,s=re;(e.includes(i[re])||e.some(function(f){return lo[re].includes(f)}))&&(s=re),(e.includes(i[fe])||e.some(function(f){return lo[fe].includes(f)}))&&(s=fe);var l=e.reduce(function(f,c){var d=hm(M.cssPrefix,c);if(Ht[c]?(c=um[s].includes(c)?Bd[s][c]:c,o=c,f.prefix=c):dm[s].indexOf(c)>-1?(o=c,f.prefix=Tr(c,{family:s})):d?f.iconName=d:c!==M.replacementClass&&c!==i[re]&&c!==i[fe]&&f.rest.push(c),!a&&f.prefix&&f.iconName){var h=o==="fa"?Zs(f.iconName):{},g=It(f.prefix,f.iconName);h.prefix&&(o=null),f.iconName=h.iconName||g||f.iconName,f.prefix=h.prefix||f.prefix,f.prefix==="far"&&!Ht.far&&Ht.fas&&!M.autoFetchSvg&&(f.prefix="fas")}return f},ei());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===fe&&(Ht.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=It(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=yt()||"fas"),l}var vm=function(){function e(){Cd(this,e),this.definitions={}}return Id(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=R(R({},n.definitions[s]||{}),o[s]),pa(s,o[s]);var l=Rn[re][s];l&&pa(l,o[s]),Js()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=f)}),n[s][l]=f}),n}}]),e}(),co=[],Ut={},Vt={},bm=Object.keys(Vt);function ym(e,t){var n=t.mixoutsTo;return co=e,Ut={},Object.keys(Vt).forEach(function(r){bm.indexOf(r)===-1&&delete Vt[r]}),co.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),ur(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Ut[o]||(Ut[o]=[]),Ut[o].push(i[o])})}r.provides&&r.provides(Vt)}),n}function ga(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Ut[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Mt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Ut[e]||[];a.forEach(function(i){i.apply(null,n)})}function at(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Vt[e]?Vt[e].apply(null,t):void 0}function va(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||yt();if(!!t)return t=It(n,t)||t,oo(el.definitions,n,t)||oo(De.styles,n,t)}var el=new vm,_m=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,Mt("noAuto")},xm={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ot?(Mt("beforeI2svg",t),at("pseudoElements2svg",t),at("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,om(function(){km({autoReplaceSvgRoot:n}),Mt("watch",t)})}},wm={icon:function(t){if(t===null)return null;if(ur(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:It(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Tr(t[0]);return{prefix:r,iconName:It(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(Hd))){var a=Nr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||yt(),iconName:It(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=yt();return{prefix:i,iconName:It(i,t)||t}}}},Re={noAuto:_m,config:M,dom:xm,parse:wm,library:el,findIconDefinition:va,toHtml:Ln},km=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ae:n;(Object.keys(De.styles).length>0||M.autoFetchSvg)&&ot&&M.autoReplaceSvg&&Re.dom.i2svg({node:r})};function Mr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ln(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!ot){var r=ae.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Em(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Qa(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=Rr(R(R({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Am(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},a),{},{id:o}),children:r}]}]}function ti(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,d=e.extra,h=e.watchable,g=h===void 0?!1:h,A=r.found?r:n,C=A.width,T=A.height,v=a==="fak",w=[M.replacementClass,i?"".concat(M.cssPrefix,"-").concat(i):""].filter(function(_e){return d.classes.indexOf(_e)===-1}).filter(function(_e){return _e!==""||!!_e}).concat(d.classes).join(" "),F={children:[],attributes:R(R({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:w,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(T)})},D=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(C/T*16*.0625,"em")}:{};g&&(F.attributes[Nt]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(c||Nn())},children:[l]}),delete F.attributes.title);var W=R(R({},F),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:R(R({},D),d.styles)}),ie=r.found&&n.found?at("generateAbstractMask",W)||{children:[],attributes:{}}:at("generateAbstractIcon",W)||{children:[],attributes:{}},ce=ie.children,Pe=ie.attributes;return W.children=ce,W.attributes=Pe,s?Am(W):Em(W)}function fo(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=R(R(R({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[Nt]="");var c=R({},o.styles);Qa(a)&&(c.transform=nm({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Rr(c);d.length>0&&(f.style=d);var h=[];return h.push({tag:"span",attributes:f,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Om(e){var t=e.content,n=e.title,r=e.extra,a=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Rr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Wr=De.styles;function ba(e){var t=e[0],n=e[1],r=e.slice(4),a=Wa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(Ct.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Ct.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Ct.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Pm={found:!1,width:512,height:512};function Sm(e,t){!zs&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ya(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=yt()),new Promise(function(r,a){if(at("missingIconAbstract"),n==="fa"){var i=Zs(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Wr[t]&&Wr[t][e]){var o=Wr[t][e];return r(ba(o))}Sm(e,t),r(R(R({},Pm),{},{icon:M.showMissingIcons&&e?at("missingIconAbstract")||{}:{}}))})}var uo=function(){},_a=M.measurePerformance&&Un&&Un.mark&&Un.measure?Un:{mark:uo,measure:uo},mn='FA "6.2.0"',Cm=function(t){return _a.mark("".concat(mn," ").concat(t," begins")),function(){return tl(t)}},tl=function(t){_a.mark("".concat(mn," ").concat(t," ends")),_a.measure("".concat(mn," ").concat(t),"".concat(mn," ").concat(t," begins"),"".concat(mn," ").concat(t," ends"))},ni={begin:Cm,end:tl},rr=function(){};function mo(e){var t=e.getAttribute?e.getAttribute(Nt):null;return typeof t=="string"}function Im(e){var t=e.getAttribute?e.getAttribute(qa):null,n=e.getAttribute?e.getAttribute(Va):null;return t&&n}function Rm(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function Tm(){if(M.autoReplaceSvg===!0)return ar.replace;var e=ar[M.autoReplaceSvg];return e||ar.replace}function Nm(e){return ae.createElementNS("http://www.w3.org/2000/svg",e)}function Mm(e){return ae.createElement(e)}function nl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Nm:Mm:n;if(typeof e=="string")return ae.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(nl(o,{ceFn:r}))}),a}function Fm(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ar={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(nl(a),n)}),n.getAttribute(Nt)===null&&M.keepOriginalSource){var r=ae.createComment(Fm(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ga(n).indexOf(M.replacementClass))return ar.replace(t);var a=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===M.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Ln(s)}).join(`
`);n.setAttribute(Nt,""),n.innerHTML=o}};function ho(e){e()}function rl(e,t){var n=typeof t=="function"?t:rr;if(e.length===0)n();else{var r=ho;M.mutateApproach===Dd&&(r=bt.requestAnimationFrame||ho),r(function(){var a=Tm(),i=ni.begin("mutate");e.map(a),i(),n()})}}var ri=!1;function al(){ri=!0}function xa(){ri=!1}var mr=null;function po(e){if(!!ro&&!!M.observeMutations){var t=e.treeCallback,n=t===void 0?rr:t,r=e.nodeCallback,a=r===void 0?rr:r,i=e.pseudoElementsCallback,o=i===void 0?rr:i,s=e.observeMutationsRoot,l=s===void 0?ae:s;mr=new ro(function(f){if(!ri){var c=yt();sn(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!mo(d.addedNodes[0])&&(M.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&M.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&mo(d.target)&&~Yd.indexOf(d.attributeName))if(d.attributeName==="class"&&Im(d.target)){var h=Nr(Ga(d.target)),g=h.prefix,A=h.iconName;d.target.setAttribute(qa,g||c),A&&d.target.setAttribute(Va,A)}else Rm(d.target)&&a(d.target)})}}),ot&&mr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Lm(){!mr||mr.disconnect()}function jm(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function $m(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Nr(Ga(e));return a.prefix||(a.prefix=yt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=pm(a.prefix,e.innerText)||Za(a.prefix,ha(e.innerText))),!a.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Dm(e){var t=sn(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||Nn()):(t["aria-hidden"]="true",t.focusable="false")),t}function zm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ge,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function go(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=$m(e),r=n.iconName,a=n.prefix,i=n.rest,o=Dm(e),s=ga("parseNodeAttributes",{},e),l=t.styleParser?jm(e):[];return R({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ge,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Bm=De.styles;function il(e){var t=M.autoReplaceSvg==="nest"?go(e,{styleParser:!1}):go(e);return~t.extra.classes.indexOf(Bs)?at("generateLayersText",e,t):at("generateSvgReplacementMutation",e,t)}var _t=new Set;Xa.map(function(e){_t.add("fa-".concat(e))});Object.keys(Cn[re]).map(_t.add.bind(_t));Object.keys(Cn[fe]).map(_t.add.bind(_t));_t=Mn(_t);function vo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ot)return Promise.resolve();var n=ae.documentElement.classList,r=function(d){return n.add("".concat(ao,"-").concat(d))},a=function(d){return n.remove("".concat(ao,"-").concat(d))},i=M.autoFetchSvg?_t:Xa.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Bm));i.includes("fa")||i.push("fa");var o=[".".concat(Bs,":not([").concat(Nt,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Nt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=sn(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ni.begin("onTree"),f=s.reduce(function(c,d){try{var h=il(d);h&&c.push(h)}catch(g){zs||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(f).then(function(h){rl(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),d(h)})})}function Hm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;il(e).then(function(n){n&&rl([n],t)})}function Um(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:va(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:va(a||{})),e(r,R(R({},n),{},{mask:a}))}}var Km=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ge:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,d=n.title,h=d===void 0?null:d,g=n.titleId,A=g===void 0?null:g,C=n.classes,T=C===void 0?[]:C,v=n.attributes,w=v===void 0?{}:v,F=n.styles,D=F===void 0?{}:F;if(!!t){var W=t.prefix,ie=t.iconName,ce=t.icon;return Mr(R({type:"icon"},t),function(){return Mt("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(h?w["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(A||Nn()):(w["aria-hidden"]="true",w.focusable="false")),ti({icons:{main:ba(ce),mask:l?ba(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:ie,transform:R(R({},Ge),a),symbol:o,title:h,maskId:c,titleId:A,extra:{attributes:w,styles:D,classes:T}})})}},Wm={mixout:function(){return{icon:Um(Km)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=vo,n.nodeCallback=Hm,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ae:r,i=n.callback,o=i===void 0?function(){}:i;return vo(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,d=r.maskId,h=r.extra;return new Promise(function(g,A){Promise.all([ya(a,s),c.iconName?ya(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var T=Wa(C,2),v=T[0],w=T[1];g([n,ti({icons:{main:v,mask:w},prefix:s,iconName:a,transform:l,symbol:f,maskId:d,title:i,titleId:o,extra:h,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Rr(s);l.length>0&&(a.style=l);var f;return Qa(o)&&(f=at("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},Ym={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Mr({type:"layer"},function(){Mt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(Mn(i)).join(" ")},children:o}]})}}}},qm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Mr({type:"counter",content:n},function(){return Mt("beforeDOMElementCreation",{content:n,params:r}),Om({content:n.toString(),title:i,extra:{attributes:f,styles:d,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(Mn(s))}})})}}}},Vm={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ge:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,h=r.styles,g=h===void 0?{}:h;return Mr({type:"text",content:n},function(){return Mt("beforeDOMElementCreation",{content:n,params:r}),fo({content:n,transform:R(R({},Ge),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(M.cssPrefix,"-layers-text")].concat(Mn(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(js){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return M.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,fo({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Xm=new RegExp('"',"ug"),bo=[1105920,1112319];function Gm(e){var t=e.replace(Xm,""),n=cm(t,0),r=n>=bo[0]&&n<=bo[1],a=t.length===2?t[0]===t[1]:!1;return{value:ha(a?t[0]:t),isSecondary:r||a}}function yo(e,t){var n="".concat($d).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=sn(e.children),o=i.filter(function(ce){return ce.getAttribute(ma)===t})[0],s=bt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Ud),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?fe:re,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?In[h][l[2].toLowerCase()]:Kd[h][f],A=Gm(d),C=A.value,T=A.isSecondary,v=l[0].startsWith("FontAwesome"),w=Za(g,C),F=w;if(v){var D=gm(C);D.iconName&&D.prefix&&(w=D.iconName,g=D.prefix)}if(w&&!T&&(!o||o.getAttribute(qa)!==g||o.getAttribute(Va)!==F)){e.setAttribute(n,F),o&&e.removeChild(o);var W=zm(),ie=W.extra;ie.attributes[ma]=t,ya(w,g).then(function(ce){var Pe=ti(R(R({},W),{},{icons:{main:ce,mask:ei()},prefix:g,iconName:F,extra:ie,watchable:!0})),_e=ae.createElement("svg");t==="::before"?e.insertBefore(_e,e.firstChild):e.appendChild(_e),_e.outerHTML=Pe.map(function(Te){return Ln(Te)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Qm(e){return Promise.all([yo(e,"::before"),yo(e,"::after")])}function Jm(e){return e.parentNode!==document.head&&!~zd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ma)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function _o(e){if(!!ot)return new Promise(function(t,n){var r=sn(e.querySelectorAll("*")).filter(Jm).map(Qm),a=ni.begin("searchPseudoElements");al(),Promise.all(r).then(function(){a(),xa(),t()}).catch(function(){a(),xa(),n()})})}var Zm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=_o,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ae:r;M.searchPseudoElements&&_o(a)}}},xo=!1,eh={mixout:function(){return{dom:{unwatch:function(){al(),xo=!0}}}},hooks:function(){return{bootstrap:function(){po(ga("mutationObserverCallbacks",{}))},noAuto:function(){Lm()},watch:function(n){var r=n.observeMutationsRoot;xo?xa():po(ga("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},wo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},th={mixout:function(){return{parse:{transform:function(n){return wo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=wo(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:h};return{tag:"g",attributes:R({},g.outer),children:[{tag:"g",attributes:R({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),g.path)}]}]}}}},Yr={x:0,y:0,width:"100%",height:"100%"};function ko(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function nh(e){return e.tag==="g"?e.children:[e]}var rh={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Nr(a.split(" ").map(function(o){return o.trim()})):ei();return i.prefix||(i.prefix=yt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,d=o.width,h=o.icon,g=tm({transform:l,containerWidth:d,iconWidth:f}),A={tag:"rect",attributes:R(R({},Yr),{},{fill:"white"})},C=c.children?{children:c.children.map(ko)}:{},T={tag:"g",attributes:R({},g.inner),children:[ko(R({tag:c.tag,attributes:R(R({},c.attributes),g.path)},C))]},v={tag:"g",attributes:R({},g.outer),children:[T]},w="mask-".concat(s||Nn()),F="clip-".concat(s||Nn()),D={tag:"mask",attributes:R(R({},Yr),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,v]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:nh(h)},D]};return r.push(W,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(w,")")},Yr)}),{children:r,attributes:a}}}},ah={provides:function(t){var n=!1;bt.matchMedia&&(n=bt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=R(R({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:R(R({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:R(R({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:R(R({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},ih={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},oh=[am,Wm,Ym,qm,Vm,Zm,eh,th,rh,ah,ih];ym(oh,{mixoutsTo:Re});Re.noAuto;var ol=Re.config,sh=Re.library;Re.dom;var hr=Re.parse;Re.findIconDefinition;Re.toHtml;var lh=Re.icon;Re.layer;var ch=Re.text;Re.counter;function Eo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Eo(Object(n),!0).forEach(function(r){Ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Eo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pr(e){return pr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pr(e)}function Ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fh(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function uh(e,t){if(e==null)return{};var n=fh(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function wa(e){return dh(e)||mh(e)||hh(e)||ph()}function dh(e){if(Array.isArray(e))return ka(e)}function mh(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function hh(e,t){if(!!e){if(typeof e=="string")return ka(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ka(e,t)}}function ka(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ph(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},sl={exports:{}};(function(e){(function(t){var n=function(v,w,F){if(!f(w)||d(w)||h(w)||g(w)||l(w))return w;var D,W=0,ie=0;if(c(w))for(D=[],ie=w.length;W<ie;W++)D.push(n(v,w[W],F));else{D={};for(var ce in w)Object.prototype.hasOwnProperty.call(w,ce)&&(D[v(ce,F)]=n(v,w[ce],F))}return D},r=function(v,w){w=w||{};var F=w.separator||"_",D=w.split||/(?=[A-Z])/;return v.split(D).join(F)},a=function(v){return A(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(w,F){return F?F.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var w=a(v);return w.substr(0,1).toUpperCase()+w.substr(1)},o=function(v,w){return r(v,w).toLowerCase()},s=Object.prototype.toString,l=function(v){return typeof v=="function"},f=function(v){return v===Object(v)},c=function(v){return s.call(v)=="[object Array]"},d=function(v){return s.call(v)=="[object Date]"},h=function(v){return s.call(v)=="[object RegExp]"},g=function(v){return s.call(v)=="[object Boolean]"},A=function(v){return v=v-0,v===v},C=function(v,w){var F=w&&"process"in w?w.process:w;return typeof F!="function"?v:function(D,W){return F(D,v,W)}},T={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(v,w){return n(C(a,w),v)},decamelizeKeys:function(v,w){return n(C(o,w),v,w)},pascalizeKeys:function(v,w){return n(C(i,w),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=T:t.humps=T})(gh)})(sl);var vh=sl.exports,bh=["class","style"];function yh(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=vh.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function _h(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ai(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ai(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=_h(c);break;case"style":l.style=yh(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=uh(n,bh);return Sr(e.tag,je(je(je({},t),{},{class:a.class,style:je(je({},a.style),o)},a.attrs),s),r)}var ll=!1;try{ll=!0}catch{}function xh(){if(!ll&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function _n(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Ee({},e,t):{}}function wh(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Ee(t,"fa-".concat(e.size),e.size!==null),Ee(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),Ee(t,"fa-pull-".concat(e.pull),e.pull!==null),Ee(t,"fa-swap-opacity",e.swapOpacity),Ee(t,"fa-bounce",e.bounce),Ee(t,"fa-shake",e.shake),Ee(t,"fa-beat",e.beat),Ee(t,"fa-fade",e.fade),Ee(t,"fa-beat-fade",e.beatFade),Ee(t,"fa-flash",e.flash),Ee(t,"fa-spin-pulse",e.spinPulse),Ee(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ao(e){if(e&&pr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(hr.icon)return hr.icon(e);if(e===null)return null;if(pr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var kh=Je({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=le(function(){return Ao(t.icon)}),i=le(function(){return _n("classes",wh(t))}),o=le(function(){return _n("transform",typeof t.transform=="string"?hr.transform(t.transform):t.transform)}),s=le(function(){return _n("mask",Ao(t.mask))}),l=le(function(){return lh(a.value,je(je(je(je({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});hn(l,function(c){if(!c)return xh("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=le(function(){return l.value?ai(l.value.abstract[0],{},r):null});return function(){return f.value}}});Je({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=ol.familyPrefix,i=le(function(){return["".concat(a,"-layers")].concat(wa(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Sr("div",{class:i.value},r.default?r.default():[])}}});Je({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=ol.familyPrefix,i=le(function(){return _n("classes",[].concat(wa(t.counter?["".concat(a,"-layers-counter")]:[]),wa(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=le(function(){return _n("transform",typeof t.transform=="string"?hr.transform(t.transform):t.transform)}),s=le(function(){var f=ch(t.value.toString(),je(je({},o.value),i.value)),c=f.abstract;return t.counter&&(c[0].attributes.class=c[0].attributes.class.replace("fa-layers-text","")),c[0]}),l=le(function(){return ai(s.value,{},r)});return function(){return l.value}}});var Eh={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Ah={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};const cl=Lf(Bu).component("font-awesome-icon",kh);sh.add(Ah,Eh);cl.use(Sd);cl.mount("#app");
