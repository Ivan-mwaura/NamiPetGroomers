import{r as c,j as e,b as D,B as v}from"./index.js";import{C as b}from"./CustomTextField.js";import{C as F}from"./CustomButton.js";import{b as C}from"./index.esm.js";import{C as E}from"./CircularProgress.js";const V=()=>{const u=C(),[x,m]=c.useState(!1),[a,h]=c.useState({veterinarianName:"",veterinarianSpecialty:"",veterinarianDescription:"",veterinarianContactNumber:"",veterinarianEmail:"",veterinarianFacebook:"",veterinarianInstagram:"",veterinarianTwitter:""}),[o,f]=c.useState(null),[p,N]=c.useState({}),y=async i=>{var s,l;i.preventDefault();const n={};if(a.veterinarianName||(n.veterinarianName="Name is required"),a.veterinarianSpecialty||(n.veterinarianSpecialty="Specialty is required"),a.veterinarianDescription||(n.veterinarianDescription="Description is required"),a.veterinarianContactNumber||(n.veterinarianContactNumber="Contact is required"),a.veterinarianEmail||(n.veterinarianEmail="Email is required"),N(n),Object.keys(n).length===0){const r=new FormData;r.append("veterinarianName",a.veterinarianName),r.append("veterinarianSpecialty",a.veterinarianSpecialty),r.append("veterinarianDescription",a.veterinarianDescription),r.append("veterinarianContactNumber",a.veterinarianContactNumber),r.append("veterinarianEmail",a.veterinarianEmail),r.append("veterinarianFacebook",a.veterinarianFacebook),r.append("veterinarianInstagram",a.veterinarianInstagram),r.append("veterinarianTwitter",a.veterinarianTwitter),o&&r.append("veterinarianProfilePicture",o);try{m(!0),await D.post("http://localhost:5000/api/v1/veterinarians",r,{headers:{"Content-Type":"multipart/form-data"}}),v.success("Veterinarian created successfully"),console.log("Veterinarian created successfully",r),u.push("/admin/Veterinarians")}catch(d){v.error(((l=(s=d.response)==null?void 0:s.data)==null?void 0:l.message)||"Failed to create veterinarian")}finally{m(!1)}}},g=i=>{f(i.target.files[0])},j=i=>{const{name:n,value:s}=i.target;h(l=>({...l,[n]:s}))},t=(i,n,s,l="text",r=!1,d=1)=>e.jsxs("div",{className:"InputGroup",children:[e.jsx("label",{htmlFor:i,children:n}),e.jsx(b,{id:i,name:i,placeholder:s,size:"medium",type:l,multiline:r,rows:d,value:a[i],onChange:j,error:!!p[i],helperText:p[i]&&p[i]})]});return e.jsxs("div",{className:"AccomodationNew DisplayFlex",children:[e.jsxs("div",{className:"Header DisplayFlex",children:[e.jsx("span",{children:"Dashboard"})," ",e.jsx("i",{className:"fas fa-angle-right"}),e.jsx("span",{children:"Veterinarians"})," ",e.jsx("i",{className:"fas fa-angle-right"}),e.jsx("span",{children:"Add"})]}),x?e.jsxs("div",{className:"loading-indicator",children:[e.jsx(E,{}),e.jsx("p",{children:"Loading, please wait..."})]}):e.jsxs("form",{onSubmit:y,className:"AccomodationNewContainer DisplayFlex",children:[e.jsxs("div",{className:"EventsTop DisplayFlex",children:[e.jsx("div",{className:"EventImages DisplayFlex",children:e.jsxs("div",{className:"UploadBox DisplayFlex",children:[e.jsx("input",{type:"file",id:"file",name:"file",style:{display:"none"},onChange:g}),e.jsxs("label",{htmlFor:"file",className:"upload-label",children:[e.jsx("i",{className:"fa fa-cloud-upload-alt"}),e.jsx("p",{children:"Click here or drop file to Profile Image"})]}),o&&e.jsx("p",{children:o.name})]})}),e.jsxs("div",{className:"EventDetails DisplayFlex",children:[e.jsx("h2",{children:"Veterinarian Details"}),t("veterinarianName","Name","e.g Veterinarian name"),e.jsx("div",{className:"InputGroups DisplayFlex",children:t("veterinarianSpecialty","Specialty","e.g Veterinarian")}),e.jsxs("div",{className:"InputGroups DisplayFlex",children:[t("veterinarianContactNumber","Contact","+254789....","number"),t("veterinarianEmail","Email","yahoo@gmail.com","email"),t("veterinarianFacebook","Facebook","Enter Facebook link here...")]}),t("veterinarianInstagram","Instagram","Enter Instagram link here..."),t("veterinarianTwitter","Twitter","Enter Twitter link here..."),t("veterinarianDescription","Description","Enter description here...","text",!0,4)]})]}),e.jsx("div",{className:"BtnGroup DisplayFlex",children:e.jsx(F,{text:"Submit",type:"submit",customStyles:{backgroundColor:"var(--green)"}})})]})]})};export{V as default};
