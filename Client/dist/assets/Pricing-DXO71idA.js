import{g as I,d as w,k as _,s as k,e as g,_ as u,f as M,r as p,h as E,i as U,j as s,l as z,m as B,u as W,c as F,n as J,a as K}from"./index-DmJMEmdV.js";import{i as L}from"./pricing-2-DwiU3LKj.js";import{c as O}from"./PetActions-DWTXjQOe.js";function G(r){return I("MuiCircularProgress",r)}w("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const V=["className","color","disableShrink","size","style","thickness","value","variant"];let x=r=>r,D,S,N,$;const i=44,Y=_(D||(D=x`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),Z=_(S||(S=x`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),q=r=>{const{classes:e,variant:a,color:o,disableShrink:l}=r,d={root:["root",a,`color${g(o)}`],svg:["svg"],circle:["circle",`circle${g(a)}`,l&&"circleDisableShrink"]};return B(d,G,e)},A=k("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.root,e[a.variant],e[`color${g(a.color)}`]]}})(({ownerState:r,theme:e})=>u({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&M(N||(N=x`
      animation: ${0} 1.4s linear infinite;
    `),Y)),H=k("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),Q=k("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.circle,e[`circle${g(a.variant)}`],a.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>u({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&M($||($=x`
      animation: ${0} 1.4s ease-in-out infinite;
    `),Z)),T=p.forwardRef(function(e,a){const o=E({props:e,name:"MuiCircularProgress"}),{className:l,color:d="primary",disableShrink:f=!1,size:t=40,style:n,thickness:c=3.6,value:h=0,variant:P="indeterminate"}=o,R=U(o,V),m=u({},o,{color:d,disableShrink:f,size:t,thickness:c,value:h,variant:P}),v=q(m),y={},C={},j={};if(P==="determinate"){const b=2*Math.PI*((i-c)/2);y.strokeDasharray=b.toFixed(3),j["aria-valuenow"]=Math.round(h),y.strokeDashoffset=`${((100-h)/100*b).toFixed(3)}px`,C.transform="rotate(-90deg)"}return s.jsx(A,u({className:z(v.root,l),style:u({width:t,height:t},C,n),ownerState:m,ref:a,role:"progressbar"},j,R,{children:s.jsx(H,{className:v.svg,ownerState:m,viewBox:`${i/2} ${i/2} ${i} ${i}`,children:s.jsx(Q,{className:v.circle,style:y,ownerState:m,cx:i,cy:i,r:(i-c)/2,fill:"none",strokeWidth:c})})}))}),sr=()=>{const[r,e]=p.useState([]),[a,o]=p.useState(!1),l=W(),d=F();p.useEffect(()=>{(async()=>{try{const n=await K.get("http://localhost:5000/api/v1/getPricings");e(n.data.data)}catch(n){console.error("Error fetching pricing data:",n)}})()},[]);const f=t=>{console.log("id:",t),l(O(t)),o(!0),d("/subscription")};return a?s.jsx(J,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:s.jsx(T,{})}):s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[s.jsx("div",{children:s.jsx("h1",{className:"pricing-heading",children:"Choose Your Membership Plan"})}),s.jsx("div",{className:"pricing",children:r.map((t,n)=>s.jsxs("div",{className:"card",style:{position:"relative"},children:[s.jsx("img",{src:L,alt:t.pricingName}),s.jsx("h3",{children:t.pricingName}),s.jsxs("h2",{children:[t.pricingPrice," ",s.jsx("span",{children:"/mo"})]}),s.jsx("ul",{children:t.PricingBenefits.map((c,h)=>s.jsx("li",{children:c},h))}),s.jsx("button",{onClick:()=>f(t._id),style:{position:"absolute",bottom:"20px",right:"120px"},children:"JOIN NOW"})]},n))})]})};export{sr as P};
