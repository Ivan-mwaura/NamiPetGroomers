import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrashAlt, FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './CustomerCart.scss';
import { toast } from 'react-toastify';

const CustomerCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {

    const email = localStorage.getItem('UserEmail');

    setUserEmail(email);
    
  },[]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/getCartItems`, {
          params: { userEmail }
        });
        setCartItems(response.data.cartItems);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cart items:', error);
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [userEmail]);

  const handleDelete = async (itemId) => {
    // Implement delete logic here
    //setCartItems(cartItems.filter(item => item._id !== itemId));
    // You can also make an API call to delete the item from the server
    //we are also passind the email of the user to the server to delete the item from the cart



    try {
      const response = await axios.delete(`http://localhost:5000/api/v1/deleteCartItem`, {
        params: { userEmail, itemId }
      });

      if (response.data.success) {
        setCartItems(cartItems.filter(item => item._id !== itemId));
        toast.success('Item deleted successfully');
      } else {
        toast.error('Error deleting item');
      }
    } catch (error) {
      console.error('Error deleting item:', error);
      toast.error('Error deleting');
    }
};

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  if (cartItems.length === 0) {
    return (
      <motion.div
        className="empty-cart"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <FaShoppingCart size={50} />
        <h2>Your cart is empty</h2>
      </motion.div>
    );
  }

  return (
    <div className="customers-cart">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <motion.div
            key={item._id}
            className="cart-item"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={item.productImage} alt={item.productName} />
            <div className="item-details">
              <h3>{item.productName}</h3>
              <p>{item.productPrice}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Category: {item.productCategory}</p>
            </div>
            <button
              className="delete-btn"
              onClick={() => handleDelete(item._id)}
            >
              <FaTrashAlt />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CustomerCart;
