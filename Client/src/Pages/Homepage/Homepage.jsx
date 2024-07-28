import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Homepage.scss';
import service1 from '../../assets/images/services/dog-with-belt-walking-with-a-man.png';
import service2 from '../../assets/images/services/dog-eating.png';
import service3 from '../../assets/images/services/grooming.png';
import greaterThan from '../../assets/images/services/greater-than-symbol.png';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import Professionalism from './Proffessionlism/Professionalism';
import ClientsFeedback from './ClientsFeedback/ClientsFeedback';
import Pricing from './Pricing/Pricing';
import Consultation from './Consultation/Consultation';
import Petshop from './Petshop/Petshop';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const [servicesData, setServicesData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/getServices');
        const services = response.data.data.map((service, index) => ({
          id: service._id,
          icon: [service1, service2, service3][index % 3], // Cycle through the icons
          title: service.serviceName,
          description: service.serviceDescription,
        }));
        setServicesData(services.slice(0, 3)); // Limit to 3 services
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };
    fetchServices();
  }, []);

  const handleViewAllServices = () => {
    window.location.href = '/services';
  };

  return (
    <div className="homepage">
      <div className="welcome-section">
        <div className="welcome-content">
          <h1>Highest Quality Care For Pets You&apos;ll Love</h1>
          <button>LEARN MORE</button>
        </div>
      </div>
      <div className="services-section">
        <div className="services-container">
          {servicesData.map((service) => (
            <div key={service.id} className={`service-card ${service.id === 1 ? "highlight" : ""}`}>
              <div className="icon-container">
                <img src={service.icon} alt={service.title} />
              </div>
              <h3 className={` ${service.id === 1 ? "highlight" : ""}`}>{service.title}</h3>
              <p className={` ${service.id === 1 ? "highlight" : ""}`}>{service.description}</p>
              <div className="learn-more">
                <img src={greaterThan}/>
              </div>
            </div>
          ))}


        </div>

        <button onClick={handleViewAllServices} className="view-all-services-button">
          View All Services
        </button>

      </div>
      <div className="why-choose-us-section">
        <WhyChooseUs />
      </div>
      <div className='professionalism'>
        <Professionalism />
      </div>
      <div className='clients-feedback'>
          <ClientsFeedback/>
      </div>
      <div className='pricing'>
          <Pricing/>
      </div>
      <div className='petshop'>
        <Petshop/>
      </div>
      <div className='consultation'>
          <Consultation/>
      </div>
    </div>
  );
};

export default Homepage;
