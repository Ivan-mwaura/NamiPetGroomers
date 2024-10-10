import { useEffect, useState } from 'react';
import axios from 'axios';
import './Pricing.scss';
import pricingImg from '../../../assets/images/pricing-2.jpg';
import { setSubscriptionId } from '../../../Components/Redux/PetActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Pricing = () => {
  const [pricingData, setPricingData] = useState([]);
  const [loading, setLoading] = useState(false); // New state for loading
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPricingData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/getPricings');
        setPricingData(response.data.data);
      } catch (error) {
        console.error('Error fetching pricing data:', error);
      }
    };

    fetchPricingData();
  }, []);

  const handleJoinNow = (id) => {
    console.log('id:', id);

    dispatch(setSubscriptionId(id));
    setLoading(true); // Show loading spinner
    navigate('/subscription');
  };

  if (loading) {
    // Show CircularProgress while loading
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh', // Full screen height
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div>
        <h1 className="pricing-heading">Choose Your Membership Plan</h1>
      </div>
      <div className="pricing">
        {pricingData.map((pricing, index) => (
          <div className="card" key={index} style={{ position: 'relative' }}>
            <img src={pricingImg} alt={pricing.pricingName} />
            <h3>{pricing.pricingName}</h3>
            <h2>
              {pricing.pricingPrice} <span>/mo</span>
            </h2>
            <ul>
              {pricing.PricingBenefits.map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
            <button
              onClick={() => handleJoinNow(pricing._id)}
              style={{ position: 'absolute', bottom: '20px', right: '120px' }}
            >
              JOIN NOW
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
