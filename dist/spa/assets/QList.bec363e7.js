import{c as d}from"./create.913f1bae.js";import{h as q,u as I,b as K,c as R}from"./use-router-link.3adc6712.js";import{c as n,h as o,r as b,d as $,s as w,g as k}from"./index.9f4a94b3.js";var P=d({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:a}){const l=n(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>o("div",{class:l.value},q(a.default))}});const g={dark:{type:Boolean,default:null}};function y(e,a){return n(()=>e.dark===null?a.dark.isActive:e.dark)}var F=d({name:"QItem",props:{...g,...I,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:a,emit:l}){const{proxy:{$q:i}}=k(),c=y(e,i),{hasLink:v,linkAttrs:h,linkClass:B,linkTag:_,navigateOnClick:C}=K(),s=b(null),r=b(null),m=n(()=>e.clickable===!0||v.value===!0||e.tag==="label"),u=n(()=>e.disable!==!0&&m.value===!0),L=n(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(c.value===!0?" q-item--dark":"")+(v.value===!0&&e.active===null?B.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(u.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),x=n(()=>{if(e.insetLevel===void 0)return null;const t=i.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function E(t){u.value===!0&&(r.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===s.value?r.value.focus():document.activeElement===r.value&&s.value.focus()),C(t))}function Q(t){if(u.value===!0&&$(t,13)===!0){w(t),t.qKeyEvent=!0;const f=new MouseEvent("click",t);f.qKeyEvent=!0,s.value.dispatchEvent(f)}l("keyup",t)}function S(){const t=R(a.default,[]);return u.value===!0&&t.unshift(o("div",{class:"q-focus-helper",tabindex:-1,ref:r})),t}return()=>{const t={ref:s,class:L.value,style:x.value,role:"listitem",onClick:E,onKeyup:Q};return u.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,h.value)):m.value===!0&&(t["aria-disabled"]="true"),o(_.value,t,S())}}}),N=d({name:"QList",props:{...g,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:a}){const l=k(),i=y(e,l.proxy.$q),c=n(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>o(e.tag,{class:c.value},q(a.default))}});export{N as Q,F as a,P as b};