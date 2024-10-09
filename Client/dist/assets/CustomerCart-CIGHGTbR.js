import{r as a,j as e,O as x,Q as j,a as n,B as i}from"./index-CP8_raM1.js";import{m as d}from"./motion-DEmmXsN2.js";const y=()=>{const[r,o]=a.useState([]),[m,l]=a.useState(!0),[c,p]=a.useState("");a.useEffect(()=>{const t=localStorage.getItem("UserEmail");p(t)},[]),a.useEffect(()=>{(async()=>{try{const s=await n.get("http://localhost:5000/api/v1/getCartItems",{params:{userEmail:c}});o(s.data.cartItems),l(!1)}catch(s){console.error("Error fetching cart items:",s),l(!1)}})()},[c]);const h=async t=>{try{(await n.delete("http://localhost:5000/api/v1/deleteCartItem",{params:{userEmail:c,itemId:t}})).data.success?(o(r.filter(u=>u._id!==t)),i.success("Item deleted successfully")):i.error("Error deleting item")}catch(s){console.error("Error deleting item:",s),i.error("Error deleting")}};return m?e.jsx("div",{className:"loader",children:"Loading..."}):r.length===0?e.jsxs(d.div,{className:"empty-cart",initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[e.jsx(x,{size:50}),e.jsx("h2",{children:"Your cart is empty"})]}):e.jsxs("div",{className:"customers-cart",children:[e.jsx("h1",{children:"Your Cart"}),e.jsx("div",{className:"cart-items",children:r.map(t=>e.jsxs(d.div,{className:"cart-item",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.3},whileHover:{scale:1.05},whileTap:{scale:.95},children:[e.jsx("img",{src:t.productImage,alt:t.productName}),e.jsxs("div",{className:"item-details",children:[e.jsx("h3",{children:t.productName}),e.jsx("p",{children:t.productPrice}),e.jsxs("p",{children:["Quantity: ",t.quantity]}),e.jsxs("p",{children:["Category: ",t.productCategory]})]}),e.jsx("button",{className:"delete-btn",onClick:()=>h(t._id),children:e.jsx(j,{})})]},t._id))})]})};export{y as default};
