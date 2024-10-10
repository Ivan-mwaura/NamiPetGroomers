import{r as l,j as e,b as y,B as x}from"./index.js";import{C as N}from"./CustomTextField.js";import{C as S}from"./CustomButton.js";import{b as F}from"./index.esm.js";import{C as b}from"./CircularProgress.js";const B=()=>{const u=F(),[v,p]=l.useState(!1),[t,m]=l.useState({title:"",description:"",price:""});l.useState(null);const[c,h]=l.useState({}),j=async s=>{s.preventDefault();const r={};if(t.title||(r.title="Title is required"),t.description||(r.description="Description is required"),t.price||(r.price="Price is required"),h(r),Object.keys(r).length===0)try{p(!0);const i={serviceName:t.title,serviceDescription:t.description,servicePrice:t.price};console.log("Submitting service data:",i),await y.post("http://localhost:5000/api/v1/services",i),x.success("Service created successfully"),u.push("/admin/Services")}catch(i){console.error("Error creating service:",i),x.error("Failed to create service")}finally{p(!1)}},f=s=>{const{name:r,value:i}=s.target;m(o=>({...o,[r]:i}))},n=(s,r,i,o="text",g=!1,D=1,a=null)=>e.jsxs("div",{className:"InputGroup",children:[e.jsx("label",{htmlFor:s,children:r}),e.jsx(N,{id:s,name:s,placeholder:i,size:"medium",type:o,multiline:g,rows:D,value:t[s],onChange:f,error:!!c[s],helperText:c[s]&&c[s],select:!!a,SelectProps:a?{native:!0}:void 0,children:a&&a.map(d=>e.jsx("option",{value:d.value,children:d.label},d.value))})]});return e.jsxs("div",{className:"EventsNew DisplayFlex",children:[e.jsxs("div",{className:"Header DisplayFlex",children:[e.jsx("span",{children:"Dashboard"})," ",e.jsx("i",{className:"fas fa-angle-right"}),e.jsx("span",{children:"New Service"})," ",e.jsx("i",{className:"fas fa-angle-right"}),e.jsx("span",{children:"Add"})]}),v?e.jsxs("div",{className:"loading-indicator DisplayFlex",children:[e.jsx(b,{}),e.jsx("p",{children:"Loading, please wait..."})]}):e.jsxs("form",{onSubmit:j,className:"EventsNewContainer DisplayFlex",children:[e.jsxs("div",{className:"EventsTop DisplayFlex",children:[e.jsx("div",{className:"EventImages DisplayFlex",children:e.jsx("div",{className:"UploadBox DisplayFlex",children:"Add a new Service"})}),e.jsxs("div",{className:"EventDetails DisplayFlex",children:[e.jsx("h2",{children:"Service Details"}),n("title","Title","e.g Service name"),e.jsx("div",{className:"InputGroups DisplayFlex",children:n("price","Price","e.g Ksh. 4,000","number")}),n("description","Description","Enter event description here...","text",!0,4)]})]}),e.jsx("div",{className:"BtnGroup DisplayFlex",children:e.jsx(S,{text:"Submit",type:"submit",customStyles:{backgroundColor:"var(--green)"}})})]})]})};export{B as default};
