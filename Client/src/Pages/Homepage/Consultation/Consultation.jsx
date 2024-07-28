import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Consultation.scss';
import bg3 from '../../../assets/images/bg_3.jpg';
import { toast } from 'react-toastify';

const Consultation = () => {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    selectedService: '',
    email: '',
    phoneNo: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/getServices'); // Adjust the endpoint URL as needed
        setServices(response.data.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
       await axios.post('http://localhost:5000/api/v1/messages', formData)
      .then((response) => {
        if (response.status === 200) {
          toast.success('Message Sent Successfully.');
        }
      });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="consultation">
      <div className="image-container">
        {/* Add your image or background here if needed */}
      </div>
      <div className="form-container">
        <h2>Free Consultation</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="selectedService">Select services</label>
            <select
              id="selectedService"
              name="selectedService"
              value={formData.selectedService}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a service</option>
              {services.map((service) => (
                <option key={service._id} value={service.serviceName}>
                  {service.serviceName}
                </option>
              ))}
            </select>
          </div>

          <div className="name-vn">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="contact-info">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNo">Phone Number</label>
              <input
                type="tel"
                id="phoneNo"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'SEND MESSAGE'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Consultation;
