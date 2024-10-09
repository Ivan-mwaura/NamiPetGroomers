import{e as p,d as j,s as F,a1 as N,Y as P,_ as r,n as d,r as c,u as G,i as _,a2 as C,a3 as E,a4 as S,j as I,l as $,m as U}from"./index.js";const M=p("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),O=p("MuiListItemIcon",["root","alignItemsFlexStart"]),R=p("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);function D(e){return j("MuiMenuItem",e)}const n=p("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),H=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],W=(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]},z=e=>{const{disabled:t,dense:a,divider:s,disableGutters:l,selected:u,classes:o}=e,i=U({root:["root",a&&"dense",t&&"disabled",!l&&"gutters",s&&"divider",u&&"selected"]},D,o);return r({},o,i)},A=F(N,{shouldForwardProp:e=>P(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:W})(({theme:e,ownerState:t})=>r({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${n.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:d(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${n.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:d(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${n.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:d(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:d(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${n.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${n.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${M.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${M.inset}`]:{marginLeft:52},[`& .${R.root}`]:{marginTop:0,marginBottom:0},[`& .${R.inset}`]:{paddingLeft:36},[`& .${O.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&r({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${O.root} svg`]:{fontSize:"1.25rem"}}))),h=c.forwardRef(function(t,a){const s=G({props:t,name:"MuiMenuItem"}),{autoFocus:l=!1,component:u="li",dense:o=!1,divider:v=!1,disableGutters:i=!1,focusVisibleClassName:k,role:V="menuitem",tabIndex:f,className:w}=s,L=_(s,H),m=c.useContext(C),y=c.useMemo(()=>({dense:o||m.dense||!1,disableGutters:i}),[m.dense,o,i]),g=c.useRef(null);E(()=>{l&&g.current&&g.current.focus()},[l]);const B=r({},s,{dense:y.dense,divider:v,disableGutters:i}),b=z(s),T=S(g,a);let x;return s.disabled||(x=f!==void 0?f:-1),I.jsx(C.Provider,{value:y,children:I.jsx(A,r({ref:T,role:V,tabIndex:x,component:u,focusVisibleClassName:$(b.focusVisible,k),className:$(b.root,w)},L,{ownerState:B,classes:b}))})});export{h as M};
