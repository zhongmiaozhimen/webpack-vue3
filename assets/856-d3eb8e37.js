"use strict";(self.webpackChunkwebpack_vue3=self.webpackChunkwebpack_vue3||[]).push([[856],{6856:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var o=n(5910),l=n(3295),i=n(7375);const u=["onMousedown","onTouchstart","onTouchmove","onTouchend"],a=50,c={__name:"list-drag",setup(e){const t=(0,i.iH)("text"),n=(0,i.iH)([]);["a","b","c","d","e","f","g"].forEach(((e,t)=>{n.value.push({id:`${Date.now()}-${t}`,index:t,top:10+60*t,transition:"",zIndex:0,constant:e})}));const c=n.value.length,d=c*a+10*(c-1)+20;let s=0,v=0,p=0;function f(e,t){let o=p+(t-s);const l=d-a;o<0?o=0:o>l&&(o=l),e.top=o;const i=e.top+25;for(let t=0;t<n.value.length;t++)if(e.index!==n.value[t].index&&i>n.value[t].top&&i<n.value[t].top+a){e.index=n.value[t].index,n.value[t].index=v,n.value[t].top=60*v+10,n.value[t].transition="top 0.3s linear 0s",v=e.index;break}}const r=function(e,n){t.value="none",s=e.clientY,v=n.index,p=n.top,function(e){document.onmousemove=function(t){e.zIndex=99,e.transition="",f(e,t.clientY)}}(n),function(e){document.onmouseup=function(){e.top=60*v+10,e.zIndex=0,t.value="text",document.onmousemove=null}}(n)};return(e,i)=>((0,o.wg)(),(0,o.iD)("div",{class:"drag-list",style:(0,l.j5)({height:d+"px",userSelect:t.value})},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.value,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.id,class:"drag-list-item",style:(0,l.j5)({height:"50px",top:e.top+"px",transition:e.transition,"z-index":e.zIndex}),onMousedown:t=>r(t,e),onTouchstart:n=>function(e,n){t.value="none";const o=e.targetTouches[0];s=o.clientY,v=n.index,p=n.top}(n,e),onTouchmove:t=>function(e,t){t.zIndex=99,t.transition="",f(t,e.targetTouches[0].clientY)}(t,e),onTouchend:n=>function(e){e.top=60*v+10,e.zIndex=0,t.value="text"}(e)},(0,l.zw)(e.constant)+" --- top: "+(0,l.zw)(e.top.toFixed()),45,u)))),128))],4))}};var d=n(8972);const s=(0,d.Z)(c,[["__scopeId","data-v-0e9acfee"]]),v=["onMousedown","onTouchstart","onTouchmove","onTouchend"],p=100,f=100,r={__name:"grid-drag",setup(e){const t=(0,i.iH)("text"),n=(0,i.iH)([]);let u=0,a=0;["a","b","c","d","e","f","g"].forEach(((e,t)=>{u=10+t%3*110,a=10+110*Math.floor(t/3),n.value.push({id:`${Date.now()}-${t}`,index:t,left:u,top:a,transition:"",zIndex:0,constant:e})}));const c=n.value.length,d=Math.ceil(c/3)*f+20+20;let s=0,r=0,x=0,h=0,m=0;function g(e,t,o){let l=h+(t-s),i=m+(o-r);const u=d-f;l<0?l=0:l>240&&(l=240),i<0?i=0:i>u&&(i=u),e.left=l,e.top=i;const a=e.left+50,c=e.top+50;for(let t=0;t<n.value.length;t++)if(e.index!==n.value[t].index&&a>n.value[t].left&&a<n.value[t].left+p&&c>n.value[t].top&&c<n.value[t].top+f){e.index=n.value[t].index,n.value[t].index=x,n.value[t].left=x%3*110+10,n.value[t].top=110*Math.floor(x/3)+10,n.value[t].transition="left 0.3s linear,top 0.3s linear",x=e.index;break}}const w=function(e,n){t.value="none",s=e.clientX,r=e.clientY,x=n.index,h=n.left,m=n.top,function(e){document.onmousemove=function(t){e.zIndex=99,e.transition="",g(e,t.clientX,t.clientY)}}(n),function(e){document.onmouseup=function(){e.left=x%3*110+10,e.top=110*Math.floor(x/3)+10,e.zIndex=0,t.value="text",document.onmousemove=null}}(n)};return(e,i)=>((0,o.wg)(),(0,o.iD)("div",{class:"drag-list",style:(0,l.j5)({width:"340px",height:d+"px",userSelect:t.value})},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.value,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.id,class:"drag-list-item",style:(0,l.j5)({width:p+"px",height:f+"px",top:e.top+"px",left:e.left+"px",transition:e.transition,"z-index":e.zIndex}),onMousedown:t=>w(t,e),onTouchstart:n=>function(e,n){t.value="none";const o=e.targetTouches[0];s=o.clientX,r=o.clientY,x=n.index,h=n.left,m=n.top}(n,e),onTouchmove:t=>function(e,t){t.zIndex=99,t.transition="";const n=e.targetTouches[0];g(t,n.clientX,n.clientY)}(t,e),onTouchend:n=>function(e){e.left=x%3*110+10,e.top=110*Math.floor(x/3)+10,e.zIndex=0,t.value="text"}(e)},[(0,o._)("div",null,(0,l.zw)(e.constant),1),(0,o._)("div",null,"left: "+(0,l.zw)(e.left.toFixed()),1),(0,o._)("div",null,"top: "+(0,l.zw)(e.top.toFixed()),1)],44,v)))),128))],4))}},x=(0,d.Z)(r,[["__scopeId","data-v-62321f50"]]),h=(e=>((0,o.dD)("data-v-d82e5866"),e=e(),(0,o.Cn)(),e))((()=>(0,o._)("div",{class:"title"},"元素拖拽",-1))),m={__name:"index",setup:e=>(e,t)=>{const n=(0,o.up)("el-tab-pane"),l=(0,o.up)("el-tabs");return(0,o.wg)(),(0,o.iD)(o.HY,null,[h,(0,o.Wm)(l,{"model-value":"1"},{default:(0,o.w5)((()=>[(0,o.Wm)(n,{label:"列表",name:"1"},{default:(0,o.w5)((()=>[(0,o.Wm)(s)])),_:1}),(0,o.Wm)(n,{label:"网格",name:"2",lazy:""},{default:(0,o.w5)((()=>[(0,o.Wm)(x)])),_:1})])),_:1})],64)}},g=(0,d.Z)(m,[["__scopeId","data-v-d82e5866"]])}}]);
//# sourceMappingURL=856-d3eb8e37.js.map