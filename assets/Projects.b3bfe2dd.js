var j=Object.defineProperty;var i=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var l=(e,t,a)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))y.call(t,a)&&l(e,a,t[a]);if(i)for(var a of i(t))N.call(t,a)&&l(e,a,t[a]);return e};import{r as n,_ as f,R as M,j as s,a as c,F as P,M as v,b as _,c as D,L as g}from"./index.e753a64b.js";import{U as x,Q as E,V as p,E as T,I as C,D as h,d as r,T as O,p as S,u as b,a as k}from"./Tooltip.0d70ecc6.js";const w=(e,t)=>{const a=n.exports.lazy(()=>f(()=>import("./ProjectModal.7be63fdc.js"),["assets/ProjectModal.7be63fdc.js","assets/index.e753a64b.js","assets/index.94d67ca0.css","assets/Tooltip.0d70ecc6.js","assets/Tooltip.4b0c927d.css","assets/Modal.3bfb2f34.js","assets/Modal.99b1e335.css"]));document.body.style.overflow="hidden";const o=document.createElement("div");o.id="modal",document.body.appendChild(o),M.render(s(n.exports.Suspense,{fallback:s("p",{children:"Loading."}),children:s(a,{root:o,title:e=="edit"?"Editar Proyecto":"Registro de Proyecto",type:e,id:t})}),o)},$=e=>new Intl.DateTimeFormat("es",{dateStyle:"medium"}).format(e*1e3),U=()=>{const e=new Date,t=e.getFullYear(),a=e.getMonth()+1<9?`0${e.getMonth()+1}`:e.getMonth()+1,o=e.getDate();return`${t}-${a}-${o}`},L=async e=>{const t=x(p(r,"projects"),E("date","desc"));T(t,a=>{e(a.docs.map(o=>m({id:o.id},o.data())))})},z=async e=>{await O(p(r,"projects"),{name:e.name,description:e.description,date:e.date})},B=async(e,t)=>{await S(h(r,"projects",t),{name:e.name,description:e.description,date:e.date})},F=async e=>{await C(h(r,"projects",e))};const I=()=>{const[e,t]=n.exports.useState([]);n.exports.useState(!0);const{dispatch:a}=b();n.exports.useEffect(()=>(a({type:"EMPTY_COLUMNS",payload:null}),L(t),()=>{}),[]);const o=(d,u)=>{w(d,u)};return c(P,{children:[c("div",{className:"project-container",children:[s("h1",{className:"project-title",children:"Projects boards"}),s("button",{onClick:()=>o(!1),className:"project-add",children:s(v,{})})]}),s("div",{className:"card-container",children:e.map(d=>c("div",{className:"card",children:[c("div",{className:"card-header",children:[s("h2",{className:"card-title",children:d.name}),c(k,{id:d.id,children:[c("button",{className:"tooltip-edit",onClick:()=>o("edit",d.id),children:[s(_,{className:"tooltip-edit-icon"}),"Edit"]}),c("button",{className:"tooltip-delete",onClick:()=>F(d.id),children:[s(D,{className:"tooltip-delete-icon"}),"Delete"]})]})]}),s("p",{className:"card-description",children:d.description}),c("div",{className:"card-footer",children:[s("span",{className:"card-date",children:$(d.date.seconds)}),s(g,{to:`/projects/${d.id}`,className:"card-link",children:"Ver m\xE1s"})]})]},d.id))})]})};var Q=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"}));export{Q as P,z as a,B as e,U as f};