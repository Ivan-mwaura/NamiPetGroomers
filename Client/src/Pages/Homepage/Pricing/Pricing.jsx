import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Pricing.scss';
import pricingImg from '../../../assets/images/pricing-2.jpg';

const Pricing = () => {
  const [pricingData, setPricingData] = useState([]);
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

  const handleGetStarted = (id) => {
    window.location.href = `/subscription/${id}`;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div>
        <h1 className="pricing-heading">Our Affordable Pricing</h1>
      </div>
      <div className="pricing">
        {pricingData.map((pricing, index) => (
          <div className="card" key={index}>
            <img src={pricingImg} alt={pricing.pricingName} />
            <h3>{pricing.pricingName}</h3>
            <h2>{pricing.pricingPrice} <span>/mo</span></h2>
            <ul>
              {pricing.PricingBenefits.map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
            <button onClick={() => handleGetStarted(pricing._id)}>GET STARTED</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
