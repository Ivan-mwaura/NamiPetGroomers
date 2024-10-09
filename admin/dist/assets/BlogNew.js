import{r as d,j as e,b as y,B as D}from"./index.js";import{C as N,a as v}from"./CustomButton.js";import{b as F}from"./index.esm.js";const E=()=>{const c=F(),[l,p]=d.useState({title:"",author:"",datePosted:"",content:"",image:""}),[r,u]=d.useState(null),[n,h]=d.useState({}),x=async s=>{s.preventDefault();const a={};if(l.title||(a.title="Title is required"),l.author||(a.author="Author is required"),l.datePosted||(a.datePosted="Date is required"),l.content||(a.content="Content is required"),h(a),Object.keys(a).length===0){const t=new FormData;t.append("title",l.title),t.append("author",l.author),t.append("datePosted",l.datePosted),t.append("content",l.content),r&&t.append("image",r);try{await y.post("http://localhost:5000/api/v1/blogs",t,{headers:{"Content-Type":"multipart/form-data"}}).then(o=>{o.status===200&&(D.success("Blog created successfully"),c.push("/blogs"))}),console.log("Blog created successfully",t),c.push("/blogs")}catch(o){console.error("Error creating blog:",o)}}},m=s=>{u(s.target.files[0])},g=s=>{const{name:a,value:t}=s.target;p(o=>({...o,[a]:t}))},i=(s,a,t,o="text",f=!1,j=1)=>e.jsxs("div",{className:"InputGroup",children:[e.jsx("label",{htmlFor:s,children:a}),e.jsx(v,{id:s,name:s,placeholder:t,size:"medium",type:o,multiline:f,rows:j,value:l[s],onChange:g,error:!!n[s],helperText:n[s]&&n[s]})]});return e.jsxs("div",{className:"BlogNew DisplayFlex",children:[e.jsxs("div",{className:"Header DisplayFlex",children:[e.jsx("span",{children:"Dashboard"})," ",e.jsx("i",{className:"fas fa-angle-right"}),e.jsx("span",{children:"Blogs"})," ",e.jsx("i",{className:"fas fa-angle-right"}),e.jsx("span",{children:"Add"})]}),e.jsxs("form",{onSubmit:x,className:"BlogNewContainer DisplayFlex",children:[e.jsxs("div",{className:"EventsTop DisplayFlex",children:[e.jsx("div",{className:"EventImages DisplayFlex",children:e.jsxs("div",{className:"UploadBox DisplayFlex",children:[e.jsx("input",{type:"file",id:"file",name:"file",style:{display:"none"},onChange:m}),e.jsxs("label",{htmlFor:"file",className:"upload-label",children:[e.jsx("i",{className:"fa fa-cloud-upload-alt"}),e.jsx("p",{children:"Click here or drop file to upload Image"})]}),r&&e.jsx("p",{children:r.name})]})}),e.jsxs("div",{className:"EventDetails DisplayFlex",children:[e.jsx("h2",{children:"Blog Details"}),i("title","Title","e.g Blog Title"),e.jsx("div",{className:"InputGroups DisplayFlex",children:i("author","Author","e.g Author Name")}),e.jsx("div",{className:"InputGroups DisplayFlex",children:i("datePosted","Date Posted","YYYY-MM-DD","date")}),i("content","Content","Enter content here...","text",!0,6)]})]}),e.jsx("div",{className:"BtnGroup DisplayFlex",children:e.jsx(N,{text:"Submit",type:"submit",customStyles:{backgroundColor:"var(--green)"}})})]})]})};export{E as default};
