import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './Veterinarians.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faMailchimp } from '@fortawesome/free-brands-svg-icons';
import Consultation from '../Homepage/Consultation/Consultation';

const Veterinarians = () => {
  const [veterinarians, setVeterinarians] = useState([]);
  const observer = useRef();

  useEffect(() => {
    const fetchVeterinarians = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/getVeterinarians');
        setVeterinarians(response.data.data);
      } catch (error) {
        console.error('Error fetching veterinarians:', error);
      }
    };

    fetchVeterinarians();
  }, []);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.profile-card');
    cards.forEach((card) => observer.current.observe(card));

    return () => observer.current.disconnect();
  }, [veterinarians]);

  return (
    <div className="veterinarian">
      <div className="header">
        <h1>Meet Our Doctors</h1>
      </div>
      <div className="profiles">
        {veterinarians.map((vet, index) => (
          <div className="profile-card" key={index}>
            <img src={vet.veterinarianProfilePicture} alt={vet.veterinarianName} />
            <h2>{vet.veterinarianName}</h2>
            <h3>{vet.veterinarianSpecialty}</h3>
            <p>{vet.veterinarianDescription}</p>
            <p>Contact: {vet.veterinarianContactNumber}</p>
            <p>Email: <a href={`mailto:${vet.veterinarianEmail}`}>{vet.veterinarianEmail}</a></p>
            <div className="social-icons">
              <a href={vet.veterinarianFacebook} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href={vet.veterinarianInstagram} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href={`https://wa.me/${vet.veterinarianContactNumber}`} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a href={`mailto:${vet.veterinarianEmail}`} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faMailchimp} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div>
        <Consultation />
      </div>
    </div>
  );
};

export default Veterinarians;
