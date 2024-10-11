import React from 'react';
import './AboutUs.scss';
import { motion } from 'framer-motion';
import { FaPaw, FaHeartbeat, FaHandsHelping, FaRegClock, FaUsers, FaQuestionCircle } from 'react-icons/fa';
import teamImage from '../../assets/images/gallery-7.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from '../../assets/images/person_1.jpg';
import image2 from '../../assets/images/person_2.jpg';
import image3 from '../../assets/images/person_3.jpg';
import image4 from '../../assets/images/person_4.jpg';

const teamMembers = [
  { name: 'John Doe', position: 'Veterinarian', image: image1 },
  { name: 'Jane Smith', position: 'Groomer', image: image2 },
  { name: 'Alice Johnson', position: 'Trainer', image: image3 },
  { name: 'Bob Brown', position: 'Veterinarian Assistant', image: image4 },
];

const AboutUs = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="about-us">
      <div className="header">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h1>
      </div>
      <div className="content">
        <motion.div
          className="intro"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            Welcome to Nami, where our love for animals meets professional care. We are committed to providing the best care for your beloved pets. From grooming to veterinary services, we ensure your pets are healthy, happy, and loved. Our mission is to offer a comprehensive range of pet care services that cater to the unique needs of each pet. Whether it's a routine grooming session or a medical emergency, our team of experts is here to provide the highest standard of care. We believe in creating a stress-free and enjoyable experience for both pets and their owners. Our state-of-the-art facilities are equipped with the latest technology and tools to provide top-notch services. At Nami PetGroomers, we understand that your pet is a cherished member of your family, and we treat them with the same level of love and care that we would our own. Our dedicated team of professionals is passionate about animals and committed to their well-being. We continuously strive to improve our services and stay updated with the latest advancements in pet care. Your pet's health and happiness are our top priorities, and we go above and beyond to ensure they receive the best possible care. Thank you for choosing Nami PetGroomers as your trusted partner in pet care. We look forward to serving you and your furry friends.
          </p>
        </motion.div>

        <motion.div
          className="story"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Our Story</h2>
          <p>
            Nami PetGroomers was founded in 2010 by a group of pet lovers who wanted to provide a one-stop solution for all pet care needs. With a passion for animals and a commitment to excellence, we have grown to become a trusted name in pet grooming and care. Our journey began with a small team and a big dream. Over the years, we have expanded our services and facilities to cater to the growing needs of our clients. Our founders, driven by their love for pets, envisioned a place where pet owners could find all the services they needed under one roof. Today, Nami PetGroomers is a testament to that vision. We take pride in our journey and the relationships we have built with our clients and their pets. Our story is one of dedication, growth, and a relentless pursuit of excellence. We started with a simple mission: to provide the best care for pets. This mission has guided us through the years and continues to be the driving force behind everything we do. We have faced challenges along the way, but our commitment to our mission has never wavered. Our growth is a result of the trust our clients place in us and the hard work of our team. We are grateful for the support of our community and the opportunity to make a difference in the lives of pets and their owners. As we look to the future, we remain committed to our mission and excited about the possibilities that lie ahead.
          </p>
        </motion.div>

        <motion.div
          className="history"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Our History</h2>
          <p>
            Over the years, we have handled over 10,000 pets, providing them with top-notch grooming, veterinary care, and training. Our team has grown to include over 50 dedicated staff members, each passionate about animal care. We have built a reputation for excellence and a commitment to the well-being of pets. Our history is marked by milestones that reflect our growth and the trust our clients have in us. From our humble beginnings to becoming a leading name in pet care, our journey has been one of dedication and hard work. We have expanded our services to include specialized care for different types of pets, ensuring that each pet receives the attention and care they deserve. Our facilities have evolved to incorporate the latest advancements in pet care technology, allowing us to provide the best possible services. Our team has grown, bringing together a diverse group of professionals who share a common passion for animals. Each member of our team is dedicated to providing the highest standard of care and continuously improving their skills and knowledge. Our history is not just about growth, but also about the relationships we have built with our clients and their pets. We take pride in the trust and loyalty our clients have shown us over the years. As we look back on our history, we are proud of what we have achieved and excited about the future. We remain committed to our mission and dedicated to providing the best care for pets.
          </p>
        </motion.div>

        <div className="services">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <div className="service-list">
            <motion.div
              className="service"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <FaPaw className="icon" />
              <h3>Pet Grooming</h3>
              <p>Comprehensive grooming services to keep your pet looking and feeling great.</p>
            </motion.div>
            <motion.div
              className="service"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <FaHeartbeat className="icon" />
              <h3>Veterinary Care</h3>
              <p>Professional veterinary services to ensure your pet&apos;s health and well-being.</p>
            </motion.div>
            <motion.div
              className="service"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <FaHandsHelping className="icon" />
              <h3>Pet Training</h3>
              <p>Expert training services to help your pet learn and grow.</p>
            </motion.div>
          </div>
        </div>

        <div className="company-stats">
          <motion.div
            className="stat"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <FaUsers className="icon" />
            <h3>10,000+</h3>
            <p>Pets Handled</p>
          </motion.div>
          <motion.div
            className="stat"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <FaRegClock className="icon" />
            <h3>50+</h3>
            <p>Staff Members</p>
          </motion.div>
          <motion.div
            className="stat"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <FaPaw className="icon" />
            <h3>14</h3>
            <p>Years of Experience</p>
          </motion.div>
        </div>

        <div className="time-faq">
          <div className="opening-hours">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Opening Hours
            </motion.h2>
            <ul>
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                Monday - Friday: 8 AM - 8 PM
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                Saturday: 9 AM - 5 PM
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                Sunday: Closed
              </motion.li>
            </ul>
          </div>

          <div className="faq">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="faq-list">
              <motion.div
                className="faq-item"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <FaQuestionCircle className="icon" />
                <h3>What services do you offer?</h3>
                <p>We offer pet grooming, veterinary care, pet training, and boarding services.</p>
              </motion.div>
              <motion.div
                className="faq-item"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <FaQuestionCircle className="icon" />
                <h3>Do you offer emergency services?</h3>
                <p>Yes, we have 24/7 emergency veterinary services available.</p>
              </motion.div>
              <motion.div
                className="faq-item"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.2 }}
              >
                <FaQuestionCircle className="icon" />
                <h3>What are your operating hours?</h3>
                <p>We are open Monday to Friday from 8 AM to 8 PM and Saturday from 9 AM to 5 PM. We are closed on Sundays.</p>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="company-values">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Our Company Values
          </motion.h2>
          <ul>
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              Compassion
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Integrity
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              Excellence
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              Teamwork
            </motion.li>
          </ul>
        </div>

        <div className="safety-first">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Always Putting Safety First
          </motion.h2>
          <p>
            At Nami PetGroomers, we take every step necessary to ensure your pup is in the best hands. We treat all our Campers as if they were our own. We prioritize individualized attention and tender loving care.
          </p>
          <ul>
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              Our staff is trained in dog behavior.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Team members are certified in pet first aid and CPR.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              Our facilities are monitored 24/7.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              Our live webcams allow pet parents to check on their dogs from anywhere.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              All Campers are healthy and must be spayed, neutered, and vaccinated (rabies, distemper, Bordetella).
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              Indoor play yards and sleeping quarters are climate-controlled, clean, and well-ventilated.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              To ensure everyone has fun, pups with similar temperaments and sizes are grouped together during all-day playtime.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              Every dog is given a Camper interview to observe social behavior in a group setting.
            </motion.li>
          </ul>
        </div>

        <div className="team">
          <motion.img
            src={teamImage}
            alt="Our Team"
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
          <div className="team-content">
            <h2>Meet Our Team</h2>
            <p>
              Our dedicated team of professionals is passionate about animals and committed to providing the best care for your pets. From experienced veterinarians to skilled groomers and trainers, we are here to support you and your pet every step of the way.
            </p>
          </div>
        </div>

        <div className="team-carousel">
          <h2>Our Team Members</h2>
          <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
