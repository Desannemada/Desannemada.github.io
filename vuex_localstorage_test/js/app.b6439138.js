(function(e){function t(t){for(var n,i,c=t[0],u=t[1],l=t[2],s=0,p=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==o[u]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={1:0},a=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{2:"81eaf95e",3:"83cd334d",4:"f0e7802c"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var l=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(s);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,r[1](l)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var f=l;a.push([0,0]),r()})({0:function(e,t,r){e.exports=r("2f39")},"2f39":function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"someGetter",(function(){return b}));var o={};r.r(o),r.d(o,"agreePrivacyPolicy",(function(){return w})),r.d(o,"initialiseStore",(function(){return P}));var a={};r.r(a),r.d(a,"someAction",(function(){return j}));r("e6cf"),r("5319"),r("7d6e"),r("e54f"),r("985d"),r("31cd");var i=r("2b0e"),c=r("1f91"),u=r("42d2"),l=r("b05d");i["a"].use(l["a"],{config:{},lang:c["a"],iconSet:u["a"]});var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"q-app"}},[r("router-view")],1)},f=[],p={name:"App",beforeCreate(){console.log("teste"),this.$store.commit("example/initialiseStore")}},d=p,v=r("2877"),h=Object(v["a"])(d,s,f,!1,null,null,null),m=h.exports,y=r("2f62"),g=function(){return{agreedToPrivacy:!1}};function b(){}function w(e,t){localStorage.setItem("agreedToPrivacy",t),e.agreedToPrivacy=t}function P(e){localStorage.getItem("agreedToPrivacy")&&(e.agreedToPrivacy=localStorage.getItem("agreedToPrivacy"))}function j(){}var O={namespaced:!0,getters:n,mutations:o,actions:a,state:g};i["a"].use(y["a"]);var x=function(){const e=new y["a"].Store({modules:{example:O},strict:!1});return e},S=r("8c4f");r("ddb0");const T=[{path:"/",component:()=>Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"8b24"))}]},{path:"*",component:()=>Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"e51e"))}];var _=T;i["a"].use(S["a"]);var k=function(){const e=new S["a"]({scrollBehavior:()=>({x:0,y:0}),routes:_,mode:"hash",base:""});return e},C=async function(){const e="function"===typeof x?await x({Vue:i["a"]}):x,t="function"===typeof k?await k({Vue:i["a"],store:e}):k;e.$router=t;const r={router:t,store:e,render:e=>e(m),el:"#q-app"};return{app:r,store:e,router:t}},E=r("bc3a"),M=r.n(E);i["a"].prototype.$axios=M.a;const $="";async function q(){const{app:e,store:t,router:r}=await C();let n=!1;const o=e=>{n=!0;const t=Object(e)===e?r.resolve(e).route.fullPath:e;window.location.href=t},a=window.location.href.replace(window.location.origin,""),c=[void 0];for(let l=0;!1===n&&l<c.length;l++)if("function"===typeof c[l])try{await c[l]({app:e,router:r,store:t,Vue:i["a"],ssrContext:null,redirect:o,urlPath:a,publicPath:$})}catch(u){return u&&u.url?void(window.location.href=u.url):void console.error("[Quasar] boot error:",u)}!0!==n&&new i["a"](e)}q()},"31cd":function(e,t,r){}});