"use strict";(self.webpackChunkwebpack_vue3=self.webpackChunkwebpack_vue3||[]).push([[444],{4979:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var a=n(5910),s=n(7375),u=n(9353);const l={__name:"line",setup(e){const t=(0,s.iH)(null),n={xAxis:{type:"category",data:["星期一","星期二","星期三","星期四","星期五","星期六","星期日"]},yAxis:{type:"value"},series:[{type:"line",data:[100,200,300,400,135,147,260]}]};let l=null,r=null,i=!1,o=!1;function c(){n.series[0].data=[];for(let e=0;e<7;e++)n.series[0].data.push(p());l.setOption(n)}function p(){let e=400*Math.random().toFixed(2);return e>400&&(e=400),e}return(0,a.bv)((()=>{l=u.S1(t.value),l.setOption(n),r=new ResizeObserver((()=>{o?i||(i=!0,requestAnimationFrame((()=>{i=!1})),l.resize()):o=!0})),r.observe(t.value)})),(0,a.Jd)((()=>{r.unobserve(t.value)})),(e,n)=>{const s=(0,a.up)("el-button");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(s,{type:"primary",onClick:c},{default:(0,a.w5)((()=>[(0,a.Uk)("更新数据")])),_:1}),(0,a._)("div",{ref_key:"mainRef",ref:t,class:"main"},null,512)])}}};const r=(0,n(8972).Z)(l,[["__scopeId","data-v-63b2ec79"]])}}]);
//# sourceMappingURL=444-d3eb8e37.js.map