import{u as V,a as z}from"./Ripple.41599143.js";import{c as Q,a as H,b}from"./render.81200b05.js";import{i as l,h as v,u as I}from"./index.19e3d819.js";const P="0 0 24 24",L=e=>e,S=e=>`ionicons ${e}`,M={"mdi-":e=>`mdi ${e}`,"icon-":L,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":S,"ion-ios":S,"ion-logo":S,"iconfont ":L,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},q={o_:"-outlined",r_:"-round",s_:"-sharp"},D={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},T=new RegExp("^("+Object.keys(M).join("|")+")"),U=new RegExp("^("+Object.keys(q).join("|")+")"),_=new RegExp("^("+Object.keys(D).join("|")+")"),G=/^[Mm]\s?[-+]?\.?\d/,J=/^img:/,N=/^svguse:/,W=/^ion-/,X=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var ae=Q({name:"QIcon",props:{...V,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:r}){const{proxy:{$q:i}}=I(),n=z(e),c=l(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),u=l(()=>{let a,t=e.name;if(t==="none"||!t)return{none:!0};if(i.iconMapFn!==null){const s=i.iconMapFn(t);if(s!==void 0)if(s.icon!==void 0){if(t=s.icon,t==="none"||!t)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(G.test(t)===!0){const[s,h=P]=t.split("|");return{svg:!0,viewBox:h,nodes:s.split("&&").map(R=>{const[$,x,k]=R.split("@@");return v("path",{style:x,d:$,transform:k})})}}if(J.test(t)===!0)return{img:!0,src:t.substring(4)};if(N.test(t)===!0){const[s,h=P]=t.split("|");return{svguse:!0,src:s.substring(7),viewBox:h}}let y=" ";const g=t.match(T);if(g!==null)a=M[g[1]](t);else if(X.test(t)===!0)a=t;else if(W.test(t)===!0)a=`ionicons ion-${i.platform.is.ios===!0?"ios":"md"}${t.substring(3)}`;else if(_.test(t)===!0){a="notranslate material-symbols";const s=t.match(_);s!==null&&(t=t.substring(6),a+=D[s[1]]),y=t}else{a="notranslate material-icons";const s=t.match(U);s!==null&&(t=t.substring(2),a+=q[s[1]]),y=t}return{cls:a,content:y}});return()=>{const a={class:c.value,style:n.value,"aria-hidden":"true",role:"presentation"};return u.value.none===!0?v(e.tag,a,H(r.default)):u.value.img===!0?v("span",a,b(r.default,[v("img",{src:u.value.src})])):u.value.svg===!0?v("span",a,b(r.default,[v("svg",{viewBox:u.value.viewBox||"0 0 24 24"},u.value.nodes)])):u.value.svguse===!0?v("span",a,b(r.default,[v("svg",{viewBox:u.value.viewBox},[v("use",{"xlink:href":u.value.src})])])):(u.value.cls!==void 0&&(a.class+=" "+u.value.cls),v(e.tag,a,b(r.default,[u.value.content])))}}});function Y(e){return e.appContext.config.globalProperties.$router!==void 0}function oe(e){return e.isUnmounted===!0||e.isDeactivated===!0}function w(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function C(e,r){return(e.aliasOf||e)===(r.aliasOf||r)}function Z(e,r){for(const i in r){const n=r[i],c=e[i];if(typeof n=="string"){if(n!==c)return!1}else if(Array.isArray(c)===!1||c.length!==n.length||n.some((u,a)=>u!==c[a]))return!1}return!0}function j(e,r){return Array.isArray(r)===!0?e.length===r.length&&e.every((i,n)=>i===r[n]):e.length===1&&e[0]===r}function ee(e,r){return Array.isArray(e)===!0?j(e,r):Array.isArray(r)===!0?j(r,e):e===r}function te(e,r){if(Object.keys(e).length!==Object.keys(r).length)return!1;for(const i in e)if(ee(e[i],r[i])===!1)return!1;return!0}const ue={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function ie({fallbackTag:e,useDisableForRouterLinkProps:r=!0}={}){const i=I(),{props:n,proxy:c,emit:u}=i,a=Y(i),t=l(()=>n.disable!==!0&&n.href!==void 0),y=r===!0?l(()=>a===!0&&n.disable!==!0&&t.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):l(()=>a===!0&&t.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),g=l(()=>y.value===!0?E(n.to):null),s=l(()=>g.value!==null),h=l(()=>t.value===!0||s.value===!0),R=l(()=>n.type==="a"||h.value===!0?"a":n.tag||e||"div"),$=l(()=>t.value===!0?{href:n.href,target:n.target}:s.value===!0?{href:g.value.href,target:n.target}:{}),x=l(()=>{if(s.value===!1)return-1;const{matched:o}=g.value,{length:f}=o,d=o[f-1];if(d===void 0)return-1;const m=c.$route.matched;if(m.length===0)return-1;const p=m.findIndex(C.bind(null,d));if(p>-1)return p;const O=w(o[f-2]);return f>1&&w(d)===O&&m[m.length-1].path!==O?m.findIndex(C.bind(null,o[f-2])):p}),k=l(()=>s.value===!0&&x.value!==-1&&Z(c.$route.params,g.value.params)),A=l(()=>k.value===!0&&x.value===c.$route.matched.length-1&&te(c.$route.params,g.value.params)),F=l(()=>s.value===!0?A.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":k.value===!0?` ${n.activeClass}`:"":"");function E(o){try{return c.$router.resolve(o)}catch{}return null}function B(o,{returnRouterError:f,to:d=n.to,replace:m=n.replace}={}){if(n.disable===!0)return o.preventDefault(),Promise.resolve(!1);if(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey||o.button!==void 0&&o.button!==0||n.target==="_blank")return Promise.resolve(!1);o.preventDefault();const p=c.$router[m===!0?"replace":"push"](d);return f===!0?p:p.then(()=>{}).catch(()=>{})}function K(o){if(s.value===!0){const f=d=>B(o,d);u("click",o,f),o.defaultPrevented!==!0&&f()}else u("click",o)}return{hasRouterLink:s,hasHrefLink:t,hasLink:h,linkTag:R,resolvedLink:g,linkIsActive:k,linkIsExactActive:A,linkClass:F,linkAttrs:$,getLink:E,navigateToRouterLink:B,navigateOnClick:K}}export{ae as Q,ie as a,ue as u,oe as v};
