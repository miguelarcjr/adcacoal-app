import{c as o,h as i,g as I,r as O,o as ue,w as ie,s as B,T as se,m as oe,d as Q,G as re,H as ce}from"./index.9f4a94b3.js";import{c as z}from"./create.913f1bae.js";import{h as W,a as C,u as de,b as ve,R as fe}from"./use-router-link.3adc6712.js";const P={xs:18,sm:24,md:32,lg:38,xl:46},H={size:String};function U(e,l=P){return o(()=>e.size!==void 0?{fontSize:e.size in l?`${l[e.size]}px`:e.size}:null)}const A="0 0 24 24",K=e=>e,M=e=>`ionicons ${e}`,V={"mdi-":e=>`mdi ${e}`,"icon-":K,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":M,"ion-ios":M,"ion-logo":M,"iconfont ":K,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},G={o_:"-outlined",r_:"-round",s_:"-sharp"},X={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},ge=new RegExp("^("+Object.keys(V).join("|")+")"),be=new RegExp("^("+Object.keys(G).join("|")+")"),F=new RegExp("^("+Object.keys(X).join("|")+")"),me=/^[Mm]\s?[-+]?\.?\d/,he=/^img:/,ye=/^svguse:/,ke=/^ion-/,xe=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var N=z({name:"QIcon",props:{...H,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:l}){const{proxy:{$q:v}}=I(),x=U(e),q=o(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),d=o(()=>{let c,a=e.name;if(a==="none"||!a)return{none:!0};if(v.iconMapFn!==null){const s=v.iconMapFn(a);if(s!==void 0)if(s.icon!==void 0){if(a=s.icon,a==="none"||!a)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(me.test(a)===!0){const[s,y=A]=a.split("|");return{svg:!0,viewBox:y,nodes:s.split("&&").map(n=>{const[w,g,k]=n.split("@@");return i("path",{style:g,d:w,transform:k})})}}if(he.test(a)===!0)return{img:!0,src:a.substring(4)};if(ye.test(a)===!0){const[s,y=A]=a.split("|");return{svguse:!0,src:s.substring(7),viewBox:y}}let h=" ";const E=a.match(ge);if(E!==null)c=V[E[1]](a);else if(xe.test(a)===!0)c=a;else if(ke.test(a)===!0)c=`ionicons ion-${v.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(F.test(a)===!0){c="notranslate material-symbols";const s=a.match(F);s!==null&&(a=a.substring(6),c+=X[s[1]]),h=a}else{c="notranslate material-icons";const s=a.match(be);s!==null&&(a=a.substring(2),c+=G[s[1]]),h=a}return{cls:c,content:h}});return()=>{const c={class:q.value,style:x.value,"aria-hidden":"true",role:"presentation"};return d.value.none===!0?i(e.tag,c,W(l.default)):d.value.img===!0?i("span",c,C(l.default,[i("img",{src:d.value.src})])):d.value.svg===!0?i("span",c,C(l.default,[i("svg",{viewBox:d.value.viewBox||"0 0 24 24"},d.value.nodes)])):d.value.svguse===!0?i("span",c,C(l.default,[i("svg",{viewBox:d.value.viewBox},[i("use",{"xlink:href":d.value.src})])])):(d.value.cls!==void 0&&(c.class+=" "+d.value.cls),i(e.tag,c,C(l.default,[d.value.content])))}}});const qe={size:{type:[Number,String],default:"1em"},color:String};function Ee(e){return{cSize:o(()=>e.size in P?`${P[e.size]}px`:e.size),classes:o(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var we=z({name:"QSpinner",props:{...qe,thickness:{type:Number,default:5}},setup(e){const{cSize:l,classes:v}=Ee(e);return()=>i("svg",{class:v.value+" q-spinner-mat",width:l.value,height:l.value,viewBox:"25 25 50 50"},[i("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});const J={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Be=Object.keys(J),Se={align:{type:String,validator:e=>Be.includes(e)}};function Le(e){return o(()=>{const l=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${J[l]}`})}const D={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Re={xs:8,sm:10,md:14,lg:20,xl:24},$e=["button","submit","reset"],Te=/[^\s]\/[^\s]/,Ce=["flat","outline","push","unelevated"],_e=(e,l)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":l,ze={...H,...de,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Ce.reduce((e,l)=>(e[l]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Se.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Me(e){const l=U(e,Re),v=Le(e),{hasRouterLink:x,hasLink:q,linkTag:d,linkAttrs:c,navigateOnClick:a}=ve({fallbackTag:"button"}),h=o(()=>{const u=e.fab===!1&&e.fabMini===!1?l.value:{};return e.padding!==void 0?Object.assign({},u,{padding:e.padding.split(/\s+/).map(m=>m in D?D[m]+"px":m).join(" "),minWidth:"0",minHeight:"0"}):u}),E=o(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),s=o(()=>e.disable!==!0&&e.loading!==!0),y=o(()=>s.value===!0?e.tabindex||0:-1),n=o(()=>_e(e,"standard")),w=o(()=>{const u={tabindex:y.value};return q.value===!0?Object.assign(u,c.value):$e.includes(e.type)===!0&&(u.type=e.type),d.value==="a"?(e.disable===!0?u["aria-disabled"]="true":u.href===void 0&&(u.role="button"),x.value!==!0&&Te.test(e.type)===!0&&(u.type=e.type)):e.disable===!0&&(u.disabled="",u["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(u,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),u}),g=o(()=>{let u;e.color!==void 0?e.flat===!0||e.outline===!0?u=`text-${e.textColor||e.color}`:u=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(u=`text-${e.textColor}`);const m=e.round===!0?"round":`rectangle${E.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${n.value} q-btn--${m}`+(u!==void 0?" "+u:"")+(s.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),k=o(()=>v.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:g,style:h,innerClasses:k,attributes:w,hasLink:q,linkTag:d,navigateOnClick:a,isActionable:s}}const{passiveCapture:f}=oe;let S=null,L=null,R=null;var Qe=z({name:"QBtn",props:{...ze,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:l,emit:v}){const{proxy:x}=I(),{classes:q,style:d,innerClasses:c,attributes:a,hasLink:h,linkTag:E,navigateOnClick:s,isActionable:y}=Me(e),n=O(null),w=O(null);let g=null,k,u=null;const m=o(()=>e.label!==void 0&&e.label!==null&&e.label!==""),Y=o(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:h.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),Z=o(()=>({center:e.round})),p=o(()=>{const t=Math.max(0,Math.min(100,e.percentage));return t>0?{transition:"transform 0.6s",transform:`translateX(${t-100}%)`}:{}}),ee=o(()=>{if(e.loading===!0)return{onMousedown:T,onTouchstart:T,onClick:T,onKeydown:T,onKeyup:T};if(y.value===!0){const t={onClick:j,onKeydown:ne,onMousedown:le};if(x.$q.platform.has.touch===!0){const r=e.onTouchstart!==void 0?"":"Passive";t[`onTouchstart${r}`]=ae}return t}return{onClick:B}}),te=o(()=>({ref:n,class:"q-btn q-btn-item non-selectable no-outline "+q.value,style:d.value,...a.value,...ee.value}));function j(t){if(n.value!==null){if(t!==void 0){if(t.defaultPrevented===!0)return;const r=document.activeElement;if(e.type==="submit"&&r!==document.body&&n.value.contains(r)===!1&&r.contains(n.value)===!1){n.value.focus();const _=()=>{document.removeEventListener("keydown",B,!0),document.removeEventListener("keyup",_,f),n.value!==null&&n.value.removeEventListener("blur",_,f)};document.addEventListener("keydown",B,!0),document.addEventListener("keyup",_,f),n.value.addEventListener("blur",_,f)}}s(t)}}function ne(t){n.value!==null&&(v("keydown",t),Q(t,[13,32])===!0&&L!==n.value&&(L!==null&&$(),t.defaultPrevented!==!0&&(n.value.focus(),L=n.value,n.value.classList.add("q-btn--active"),document.addEventListener("keyup",b,!0),n.value.addEventListener("blur",b,f)),B(t)))}function ae(t){n.value!==null&&(v("touchstart",t),t.defaultPrevented!==!0&&(S!==n.value&&(S!==null&&$(),S=n.value,g=t.target,g.addEventListener("touchcancel",b,f),g.addEventListener("touchend",b,f)),k=!0,u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,k=!1},200)))}function le(t){n.value!==null&&(t.qSkipRipple=k===!0,v("mousedown",t),t.defaultPrevented!==!0&&R!==n.value&&(R!==null&&$(),R=n.value,n.value.classList.add("q-btn--active"),document.addEventListener("mouseup",b,f)))}function b(t){if(n.value!==null&&!(t!==void 0&&t.type==="blur"&&document.activeElement===n.value)){if(t!==void 0&&t.type==="keyup"){if(L===n.value&&Q(t,[13,32])===!0){const r=new MouseEvent("click",t);r.qKeyEvent=!0,t.defaultPrevented===!0&&re(r),t.cancelBubble===!0&&ce(r),n.value.dispatchEvent(r),B(t),t.qKeyEvent=!0}v("keyup",t)}$()}}function $(t){const r=w.value;t!==!0&&(S===n.value||R===n.value)&&r!==null&&r!==document.activeElement&&(r.setAttribute("tabindex",-1),r.focus()),S===n.value&&(g!==null&&(g.removeEventListener("touchcancel",b,f),g.removeEventListener("touchend",b,f)),S=g=null),R===n.value&&(document.removeEventListener("mouseup",b,f),R=null),L===n.value&&(document.removeEventListener("keyup",b,!0),n.value!==null&&n.value.removeEventListener("blur",b,f),L=null),n.value!==null&&n.value.classList.remove("q-btn--active")}function T(t){B(t),t.qSkipRipple=!0}return ue(()=>{$(!0)}),Object.assign(x,{click:j}),()=>{let t=[];e.icon!==void 0&&t.push(i(N,{name:e.icon,left:e.stack===!1&&m.value===!0,role:"img","aria-hidden":"true"})),m.value===!0&&t.push(i("span",{class:"block"},[e.label])),t=C(l.default,t),e.iconRight!==void 0&&e.round===!1&&t.push(i(N,{name:e.iconRight,right:e.stack===!1&&m.value===!0,role:"img","aria-hidden":"true"}));const r=[i("span",{class:"q-focus-helper",ref:w})];return e.loading===!0&&e.percentage!==void 0&&r.push(i("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[i("span",{class:"q-btn__progress-indicator fit block",style:p.value})])),r.push(i("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+c.value},t)),e.loading!==null&&r.push(i(se,{name:"q-transition--fade"},()=>e.loading===!0?[i("span",{key:"loading",class:"absolute-full flex flex-center"},l.loading!==void 0?l.loading():[i(we)])]:null)),ie(i(E.value,te.value,r),[[fe,Y.value,void 0,Z.value]])}}}),Ae=z({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:l}){const v=o(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>i("div",{class:v.value,role:"toolbar"},W(l.default))}});export{N as Q,Qe as a,Ae as b};
