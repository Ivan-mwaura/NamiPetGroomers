import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import "./Services.scss";
import WhyChooseUs from "../Homepage/WhyChooseUs/WhyChooseUs";
import service1 from '../../assets/images/services/dog-with-belt-walking-with-a-man.png';
import service2 from '../../assets/images/services/dog-eating.png';
import service3 from '../../assets/images/services/grooming.png';
import greaterThan from '../../assets/images/services/greater-than-symbol.png';
import Consultation from "../Homepage/Consultation/Consultation";

const Services = () => {
    const [servicesData, setServicesData] = useState([]);
    const consultationRef = useRef(null);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/getServices'); // Adjust the endpoint URL as needed
                const services = response.data.data.map((service, index) => ({
                    id: service._id,
                    icon: [service1, service2, service3][index % 3], // Cycle through the icons
                    title: service.serviceName,
                    description: service.serviceDescription,
                }));
                setServicesData(services);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };

        fetchServices();
    }, []);

    const handleScrollToConsultation = () => {
        consultationRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="services">
            <div className="services-header">
                <h2>Services</h2>
                <p>Home / Services</p>
            </div>

            <div className="whyChooseUs">
                <WhyChooseUs />
            </div>

            <div className="services-section">
                <div className="services-container">
                    {servicesData.map((service) => (
                        <div key={service.id} className={`service-card ${service.id === 1 ? "highlight" : ""}`}>
                            <div className="icon-container">
                                <img src={service.icon} alt={service.title} />
                            </div>
                            <h3 className={` ${service.id === 1 ? "highlight" : "h3"}`} >{service.title}</h3>
                            <p className={` ${service.id === 1 ? "highlight" : "p"}`}>{service.description}</p>
                            <div className="learn-more" onClick={handleScrollToConsultation}>
                                <img src={greaterThan} alt="greater than symbol" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="consult" ref={consultationRef}>
                <Consultation />
            </div>
        </div>
    );
};

export default Services;
