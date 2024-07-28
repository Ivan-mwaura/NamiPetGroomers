import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../Components/Context/ApiContext';
import { FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography, Box } from "@mui/material";
import axios from 'axios';
import './Cart.scss';

const Cart = () => {
  const { cart, setCart } = useContext(AppContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');

  useEffect(() => {
    const newTotalPrice = cart.reduce((sum, item) => {
      const price = parseFloat(item.productPrice);
      const quantity = parseInt(item.quantity, 10);
      if (!isNaN(price) && !isNaN(quantity)) {
        return sum + (price * quantity);
      } else {
        return sum;
      }
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [cart]);

  const handleDelete = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handleContinueShopping = () => {
    window.location.href =  '/Petshop/PetCategorySection';
  };

  const handleCheckout = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPaymentStatus('');
  };

  const handlePayment = async () => {
    try {
      await axios.post('http://localhost:5000/api/v1/payment', { phone, amount: totalPrice })
      .then((response) => {
        if (response.status === 200) {
          setPaymentStatus('Payment initiated successfully. Check your phone.');
          toast.success('Payment initiated successfully. Check your phone.');
        }
      });
      setPaymentStatus('Payment initiated successfully. Check your phone.');
    } catch (error) {
      setPaymentStatus('Failed to initiate payment');
    }
  };

  if (cart.length === 0) {
    return <div className="cart">Your cart is empty.</div>;
  }

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <div className="cart-table">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td className="item-image">
                  <img src={item.productImage} alt={item.productName} />
                </td>
                <td>{item.productName}</td>
                <td>{item.productPrice} KSh</td>
                <td>{item.quantity}</td>
                <td>{item.productRating} ⭐</td>
                <td>
                  <button className="delete-btn" onClick={() => handleDelete(index)}>
                    <FaTrashAlt /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="cart-total">
        <h2>Total: {totalPrice} KSh</h2>
        <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
        <button className="continue-shopping-btn" onClick={handleContinueShopping}>
          Continue Shopping
        </button>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Checkout</DialogTitle>
        <DialogContent>
          <Box component="form" noValidate>
            <Typography variant="h6">Total Amount: {totalPrice} KSh</Typography>
            <TextField
              autoFocus
              margin="dense"
              id="phone"
              label="Phone Number"
              type="text"
              fullWidth
              variant="outlined"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            {paymentStatus && <Typography color="error">{paymentStatus}</Typography>}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">Cancel</Button>
          <Button onClick={handlePayment} color="primary">Pay Now</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Cart;
