// server/server.js

const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const app = express();

const query = 'cat';
const accessKey = 'vvwZfPDtzR9sUvQwwkY9FJunjyQzw-WPmZwyp_69hXI';
const perPage = 30;
const totalImages = 80;
const totalPages = Math.ceil(totalImages / perPage);

app.get('/fetch-images', async (req, res) => {
  let images = [];

  for (let page = 1; page <= totalPages; page++) {
    const url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${perPage}&client_id=${accessKey}`;
    try {
      const response = await axios.get(url);
      const fetchedImages = response.data.results.map(img => img.urls.regular);
      images = images.concat(fetchedImages);
      console.log(images)
    } catch (error) {
      console.error(`Error fetching page ${page}:`, error);
      return res.status(500).json({ error: 'Error fetching images' });
    }
  }

  const filePath = path.join(__dirname, 'images.json');
  fs.writeFileSync(filePath, JSON.stringify(images, null, 2));

  res.json({ message: 'Images saved successfully', images });

 
});



app.listen(6000, () => {
  console.log('Server is running on port 6000');
});
