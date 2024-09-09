import React, { useState } from 'react';
import axios from 'axios';
import './ContactUs.scss';
import img from '../../assets/images/img.jpg';
import { toast } from 'react-toastify';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/v1/contactUsInquiries', formData);
      if (response.status === 200) {
        setIsSubmitted(true);
        setErrorMessage('');
        
        toast.success('Message sent successfully');
      }
    } catch (error) {
      setErrorMessage('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="contact-us">
      <div className="contact-header">
        <h2>Contact</h2>
        <p>Home / Contact</p>
      </div>
      <div className="contact-content">
        <div className="info-title">
          <h1>Our Hotlines</h1>
        </div>
        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>198 West 21th Street, Suite 721 Kiambu Ruiru</p>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <p>+254 70123456</p>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <p>namipetgroomers@gmail.com</p>
          </div>
          <div className="info-item">
            <i className="fas fa-globe"></i>
            <p>namipetgroomers.com</p>
          </div>
        </div>
        <div className="contact-form-section">
          <div className="contact-form">
            <h3>Contact Us</h3>
            {isSubmitted ? (
              <p>Thank you for your message. We will get back to you soon.</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit">Send Message</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
              </form>
            )}
          </div>
          <div className="contact-image">
            <img src={img} alt="Contact" />
          </div>
        </div>
      </div>
      <div>
        <p style={{textAlign: "center", fontSize: "20px", marginTop: "20px", marginBottom: "10px", fontWeight: 700}}> Grab a cup of coffee with us</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.010913817372!2d36.97353247480324!3d-1.1526952988362664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f47669d1b7c6d%3A0xc6d72bd8a6f657c4!2sNami%20pet%20groomers!5e0!3m2!1sen!2ske!4v1719314385913!5m2!1sen!2ske"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
