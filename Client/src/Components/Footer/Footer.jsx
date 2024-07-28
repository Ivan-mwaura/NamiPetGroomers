import React from 'react';
import './Footer.scss';
import image1 from '../../assets/images/image_1.jpg';
import image2 from '../../assets/images/image_2.jpg';
import { Link } from 'react-router-dom';

const Footer = () => {

const navigateTo = (url) => {
    window.location.href = url;
  };

  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Petsitting</h4>
        <p> Reach out us for all pet services</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="footer-section">
        <h4>Latest News</h4>
        <div className="news-item">
          <img src={image1}alt="News" />
          <div>
            <p>Understanding Pet Behavior</p>
            <span>April 7, 2020 Admin 19</span>
          </div>

        </div>
        <div className="news-item">
          <img src={image2} alt="News" />
          <div>
            <p>Training Your Dog: Tips and Tricks</p>
            <span>April 7, 2020 Admin 19</span>
          </div>

        </div>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li  onClick={() => navigateTo('/')}> Home</li>
          <li onClick={() => navigateTo('/AboutUs')}>About</li>
          <li onClick={() => navigateTo('/Services')}>Services</li>
          <li onClick={() => navigateTo('/Gallery')}>Gallery</li>
          <li onClick={() => navigateTo('/Blogs')}>Blog</li>
          <li onClick={() => navigateTo('/contactUs')}>Contact</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Have a Questions?</h4>
        <ul className="contact-info">
          <li><i className="fas fa-map-marker-alt"></i> 203 Fake St. Mountain View, Nairobi, Ruiru</li>
          <li><i className="fas fa-phone-alt"></i> +254 392 3929 210</li>
          <li><i className="fas fa-envelope"></i> info@namipetgroomers.com</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy;2024 All rights reserved </p>
      </div>
    </footer>
  );
};

export default Footer;
