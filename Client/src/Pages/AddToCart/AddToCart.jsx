import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../../Components/Context/ApiContext';
import { toast } from 'react-toastify';
import './AddToCart.scss';
import { ColorRing } from 'react-loader-spinner';
import axios from 'axios';

const AddToCart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};
  //const { addToCart } = useContext(AppContext);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);



  if (!product) {
    return <div>Product not found</div>;
  }


  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const loaderContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "var(--primary-color)",
};



const handleAddToCart = () => {
  const itemToAdd = { ...product, quantity };

  // Retrieve the existing cart items from localStorage
  const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Add the new item to the cart array
  const updatedCartItems = [...existingCartItems, itemToAdd];

  // Save the updated cart back to localStorage
  localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

  const userEmail = localStorage.getItem("UserEmail") || [];

  console.log('cartGoods', updatedCartItems);
  console.log('userEmail', userEmail);

  axios.post('/api/v1/storeCartItems', { userEmail,updatedCartItems })
    .then((response) => {
      if (response.status === 200) {
        toast.success('Cart items stored successfully');
      }
    });

  setLoading(true);
  toast.success("Item added successfully to cart!");
  setTimeout(() => {
    navigate('/Cart');
    setLoading(false);
  }, 300); 
};

  return (
    
    <>

        {loading ? (
                 <div style={loaderContainer}>
                    <ColorRing
                        colors={["rgb(0, 189, 86)", "rgb(0, 189, 86)", "rgb(0, 189, 86)", "rgb(0, 189, 86)", "rgb(0, 189, 86)"]}
                         height={80}
                         width={50}
                        timeout={1000}
                    />
                </div>
        ) : (
        <div className="add-to-cart">
            <div className="breadcrumb">
            <span>Home / Pet Store / Dog Supplies / Dog Food & Treats / {product.productName}</span>
          </div>
          <div className="product-details">
            <div className="image-section">
              <img src={product.productImage} alt={product.productName} />
            </div>
            <div className="details-section">
              <h1>{product.productName}</h1>
              <div className="ratings">
                <span>{'⭐'.repeat(product.productRating)}</span> (5000 customer reviews)
              </div>
              <div className="price">{product.productPrice} KSh</div>
              <p>{product.productDescription}</p>
              <div className="options">
                <label>Select Menu:</label>
                <select>
                  <option value="">Choose an option</option>
                  {/* Add your product options here */}
                </select>
              </div>
              <div className="quantity">
                <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                />
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button className="add-to-cart-btn" onClick={handleAddToCart}>ADD TO CART</button>
            </div>
          </div>
        </div>
            
        )}
    </>

  );
};

AddToCart.propTypes = {
  product: PropTypes.object,
};

export default AddToCart;
