import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { FaHeart, FaDownload } from 'react-icons/fa';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './Gallery.scss';
import { saveAs } from 'file-saver';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Box } from '@mui/material';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showCarousel, setShowCarousel] = useState(false);
  const [open, setOpen] = useState(false);
  const [fileName, setFileName] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('/api/v1/getAnimalGroomings');
        const fetchedImages = response.data.data.map(item => ({
          id: item._id,
          before: item.groomingImages.before,
          after: item.groomingImages.after,
          animalName: item.animalName,
          animalBreed: item.animalBreed,
          animalType: item.animalType,
          liked: false // Initialize liked status
        }));
        setImages(fetchedImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, []);

  const handleLike = (index) => {
    const newImages = [...images];
    newImages[index].liked = !newImages[index].liked;
    setImages(newImages);
  };

  const handleDownload = (url) => {
    setDownloadUrl(url);
    setOpen(true);
  };

  const handleSave = () => {
    saveAs(downloadUrl, `${fileName}.jpg`);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
    setShowCarousel(true);
  };

  const handleCloseCarousel = () => {
    setShowCarousel(false);
  };

  return (
    <div className="gallery">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      >
        <Masonry gutter="20px">
          {images.map((image, index) => (
            <div key={image.id} className="gallery-item" onClick={() => handleImageClick(index)}>
              <img
                src={image.before}
                alt={`${image.animalName} Before`}
              />
              <div className="gallery-item-hover">
                <FaHeart
                  className={`icon top-left ${image.liked ? 'liked' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLike(index);
                  }}
                />
                <FaDownload
                  className="icon bottom-left"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload(image.before);
                  }}
                />
                <div className="gallery-item-info">
                  <p><span>Pet Name: </span> {image.animalName}</p>
                  <p><span>Breed: </span> {image.animalBreed}</p>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      {showCarousel && selectedImage && (
        <div className="carousel-overlay" onClick={handleCloseCarousel}>
          <div className="carousel-content" onClick={(e) => e.stopPropagation()}>
            <ImageGallery
              items={[
                { original: selectedImage.before, description: 'Before' },
                { original: selectedImage.after, description: 'After' },
              ]}
              showThumbnails={false}
              showFullscreenButton={false}
              showPlayButton={false}
            />
            <button className="carousel-close" onClick={handleCloseCarousel}>Close</button>
          </div>
        </div>
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Save Image As</DialogTitle>
        <DialogContent>
          <Box component="form" noValidate>
            <TextField
              autoFocus
              margin="dense"
              id="fileName"
              label="File Name"
              type="text"
              fullWidth
              variant="outlined"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              required
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">Cancel</Button>
          <Button onClick={handleSave} color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Gallery;
