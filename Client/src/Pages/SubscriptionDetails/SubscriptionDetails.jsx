import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
  Typography,
  InputAdornment
} from '@mui/material';
import './SubscriptionDetails.scss';
import { toast } from 'react-toastify';
import image2 from "../../assets/images/pricing-2.jpg";

const SubscriptionDetails = () => {
  const { id } = useParams();
  const [subscription, setSubscription] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: ''
  });

  useEffect(() => {
    const fetchSubscriptionDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/getPricing/${id}`);
        setSubscription(response.data.data);
      } catch (error) {
        console.error('Error fetching subscription details:', error);
      }
    };

    fetchSubscriptionDetails();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  if (!subscription) {
    return <div>Loading...</div>;
  }

  const handleSubscribe = async () => {

    try {
      await axios.post('http://localhost:5000/api/v1/sendSubscribeReply', {
        name: formData.name,
        phoneNumber: `254${formData.phoneNumber}`,
        email: formData.email,
        amount: subscription.pricingPrice,
        subscriptionPlan: subscription.pricingName
      }).then((res) => {
        if (res.status === 200) {
          toast.success("Hello, you have successfully subscribed to our service. We will get back to you soon.");
        }

      }).catch((error) => {
        console.log('Error sending reply:', error);
        toast.error('Failed to subscribe. Please try again later.');
      });

      try {
        await axios.post('http://localhost:5000/api/v1/payment', { phone: `254${formData.phoneNumber}`, amount: subscription.pricingPrice })
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

      setIsDialogOpen(false);

    } catch (error) {
      toast.error('Failed to subscribe. Please try again later.');
    }
  };

  return (
    <div className="subscription-details">
      <div className="subscription-card">
        <img src={subscription.image || image2} alt={subscription.pricingName} />
        <h2>{subscription.pricingName}</h2>
        <h3>{subscription.pricingPrice} <span>Ksh/mo</span></h3>
        <p>{subscription.pricingDescription}</p>
        <h4>Benefits:</h4>
        <ul>
          {subscription.PricingBenefits.map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </div>
      <div className="additional-details">
        <h3>How it works</h3>
        <p>Here you can add detailed information about how the subscription works, any special instructions, or additional benefits that users will get.</p>
        <h4>Additional Benefits:</h4>
        <ul>
          <li>24/7 Customer Support</li>
          <li>Access to premium features</li>
          <li>Monthly newsletters</li>
          <li>Special discounts on other services</li>
        </ul>
      </div>
      <div className="call-to-action">
        <button onClick={() => setIsDialogOpen(true)}>Subscribe</button>
      </div>

      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <DialogTitle>Payment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your name, phone number, and email address to subscribe.
          </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="phoneNumber"
            label="Phone Number"
            type="text"
            fullWidth
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            InputProps={{
              startAdornment: <InputAdornment position="start">+254</InputAdornment>,
            }}
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {paymentStatus && <Typography color="error">{paymentStatus}</Typography>}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubscribe} color="primary">
            Pay
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SubscriptionDetails;
