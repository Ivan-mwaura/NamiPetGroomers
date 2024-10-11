import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Blogs.scss';
import { AppContext } from '../../Components/Context/ApiContext';

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);
  const navigate = useNavigate();
  const { setBlog } = useContext(AppContext);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/api/v1/getBlogs');
        setBlogData(response.data.data); // Update the state with the fetched data
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const handleGetStarted = (blog) => {
    setBlog(blog); // Store the selected blog in context
    navigate('/blogDetails');
  };

  return (
    <div className="blogs-container">
      <div className="header">
        <h1>Home</h1>
        <p>Blogs</p>
      </div>
      <h1 className="blogs-header">Pet Blogs</h1>
      <div className="blogs">
        {blogData.map((blog, index) => (
          <motion.div 
            className="blog-item" 
            key={index} 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="blog-image">
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className="blog-content">
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-author">by {blog.author || 'Unknown'}</p>
              <p className="blog-date">{new Date(blog.datePosted).toLocaleDateString()}</p>
              <a 
                href="#" 
                onClick={() => handleGetStarted(blog)} 
                className="blog-link"
              >
                Read more <FaExternalLinkAlt />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
