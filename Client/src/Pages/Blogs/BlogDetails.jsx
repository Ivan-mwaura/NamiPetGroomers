import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './BlogDetails.scss';
import { AppContext } from '../../Components/Context/ApiContext';
import { FaShareAlt, FaThumbsUp, FaArrowLeft } from 'react-icons/fa';

const BlogDetails = () => {
  const { blog } = React.useContext(AppContext);
  const [isLiked, setIsLiked] = useState(false);
  const [showSharePanel, setShowSharePanel] = useState(false);

  if (!blog) {
    return <p>Blog not found</p>;
  }

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleShareClick = () => {
    setShowSharePanel(true);
  };

  const closeSharePanel = () => {
    setShowSharePanel(false);
  };

  return (
    <div className="blog-details-container" key={blog.id}>
      <motion.div 
        className="blog-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>{blog.title}</h1>
        <p className="blog-meta">
          by <span className="blog-author">{blog.author}</span> | <span className="blog-date">{new Date(blog.datePosted).toLocaleDateString()}</span>
        </p>
      </motion.div>
      <motion.div 
        className="blog-image-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <img src={blog.image} alt={blog.title} className="blog-image" />
      </motion.div>
      <motion.div 
        className="blog-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p>{blog.content}</p>
      </motion.div>
      <motion.div 
        className="blog-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <button className="share-button" onClick={handleShareClick}><FaShareAlt /> Share</button>
        <motion.button 
          className={`like-button ${isLiked ? 'liked' : ''}`} 
          onClick={handleLikeClick}
          whileTap={{ scale: 1.2 }}
        >
          <FaThumbsUp /> {isLiked ? 'Liked' : 'Like'}
        </motion.button>
        <button className="back-button" onClick={() => window.history.back()}><FaArrowLeft /> Back to Blogs</button>
      </motion.div>

      {showSharePanel && (
        <div className="share-panel">
          <div className="share-content">
            <h3>Share this blog</h3>
            <p>Copy the link below to share:</p>
            <input type="text" value={window.location.href} readOnly />
            <button onClick={() => navigator.clipboard.writeText(window.location.href)}>Copy Link</button>
            <div className="social-share-buttons">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href={`https://twitter.com/intent/tweet?url=${window.location.href}`} target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <button className="close-button" onClick={closeSharePanel}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
