import{r as m,w as p,j as e}from"./index.js";import{C as f}from"./CustomButton.js";import{C as h}from"./CustomTable.js";import"./index.esm.js";import"./MenuItem.js";const b=()=>{var t;const[s,r]=m.useState(1),l=7,{animalGallery:n}=m.useContext(p),o=()=>{r(a=>a+1)},d=()=>{r(a=>Math.max(a-1,1))},c=n.data.map(a=>({_id:a._id,animalName:a.animalName,animalBreed:a.animalBreed,animalType:a.animalType,beforeImage:a.groomingImages.before,afterImage:a.groomingImages.after})),i=(s-1)*l,x=c.slice(i,i+l),g=[{label:"Animal ID",field:"_id"},{label:"Animal Name",field:"animalName"},{label:"Breed",field:"animalBreed"},{label:"Type",field:"animalType"},{label:"Before Grooming",field:"beforeImage",render:a=>e.jsx("img",{src:a,alt:"Before Grooming",style:{width:"50px",height:"50px"}})},{label:"After Grooming",field:"afterImage",render:a=>e.jsx("img",{src:a,alt:"After Grooming",style:{width:"50px",height:"50px"}})}];return e.jsxs("div",{className:"AnimalGallery DisplayFlex",children:[e.jsxs("div",{className:"Header",children:[e.jsx("span",{children:"Dashboard"})," ",e.jsx("i",{className:"fas fa-angle-right"})," ",e.jsx("span",{children:"AnimalGallery"})]}),e.jsxs("div",{className:"AnimalGalleryContainer DisplayFlex",children:[e.jsxs("div",{className:"AnimalGalleryTop DisplayFlex",children:[e.jsx("div",{className:"Filter DisplayFlex"}),e.jsx("div",{className:"Edit",children:e.jsx(f,{size:"small",text:"Add",customStyles:{backgroundColor:"var(--green)"},onClick:()=>{window.location.href="animalGallery/new"}})})]}),e.jsx("div",{className:"AnimalGalleryBottom",children:e.jsx(h,{data:x,columns:g,usersPerPage:l,currentPage:s,totalItems:(t=n.data)==null?void 0:t.length,handleNextPage:o,handlePreviousPage:d,context:"animalGallery"})})]})]})};export{b as default};
