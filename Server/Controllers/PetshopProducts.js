const fs = require('fs');
const multer = require('multer');
const cloudinary = require('../Cloudinary');

// Importing product models
const dogProductsModel = require('../Models/Products/Dog');
const catProductsModel = require('../Models/Products/Cat');
const birdProductsModel = require('../Models/Products/Birds');
const horseProductsModel = require('../Models/Products/Horses');
const fishAndAquaticAnimalsModel = require('../Models/Products/FishAndAcquaticAnimals');

// Multer setup for memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Function to upload an image to Cloudinary and handle errors
const uploadImageToCloudinary = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      return reject({ message: 'Image file is required for the product.' });
    }

    cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
      if (error) {
        console.error("Cloudinary Upload Error: ", error);
        return reject({ message: 'Failed to upload image to Cloudinary', error });
      }
      resolve(result.secure_url);
    }).end(file.buffer);
  });
};

//--------------------- DOG PRODUCTS CONTROLLERS ----------------------

// CREATE DOG PRODUCT
const DogProducts = async (req, res) => {
  try {
    upload.any()(req, res, async (err) => {
      if (err) {
        console.error("Multer Error: ", err);
        return res.status(500).json({ message: 'Error processing file upload', error: err });
      }

      const { animalType, productName, productDescription, productPrice, productCategory, productSubCategory, productRating, productStock } = req.body;
      const file = req.files && req.files[0];

      if (!productName || !productDescription || !productPrice) {
        return res.status(400).json({ message: 'Required fields are missing. Please provide product name, description, and price.' });
      }

      try {
        const productImage = await uploadImageToCloudinary(file);
        const dogProduct = new dogProductsModel({
          animalType,
          productName,
          productDescription,
          productPrice,
          productCategory,
          productSubCategory,
          productRating,
          productStock,
          productImage
        });

        const saveResult = await dogProduct.save();
        res.status(201).json({ message: 'Dog Product created successfully', saveResult });
      } catch (error) {
        console.error("Product Creation Error: ", error);
        res.status(500).json({ message: error.message || 'Internal server error', error });
      }
    });
  } catch (error) {
    console.error("Server Error: ", error);
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// GET ALL DOG PRODUCTS
const getDogProducts = async (req, res) => {
  try {
    dogProductsModel.find({}, (error, data) => {
      if (error) {
        console.error("Database Error: ", error);
        return res.status(500).json({ message: 'Error fetching dog products', error });
      }
      res.status(200).json({ message: 'Dog Products', data });
    });
  } catch (error) {
    console.error("Server Error: ", error);
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// UPDATE DOG PRODUCT
const updateDogProduct = async (req, res) => {
  try {
    upload.any()(req, res, async (err) => {
      if (err) {
        console.error("Multer Error: ", err);
        return res.status(500).json({ message: 'Error processing file upload', error: err });
      }

      const { animalType, productName, productDescription, productPrice, productCategory, productSubCategory, productRating, productStock, productImage } = req.body;
      const file = req.files && req.files[0];
      const id = req.params.id;

      let updatedProductData = {
        animalType,
        productName,
        productDescription,
        productPrice,
        productCategory,
        productSubCategory,
        productRating,
        productStock
      };

      if (file) {
        try {
          const productImageUrl = await uploadImageToCloudinary(file);
          updatedProductData.productImage = productImageUrl;
        } catch (error) {
          return res.status(500).json({ message: error.message || 'Error uploading image', error });
        }
      } else {
        updatedProductData.productImage = productImage;
      }

      const updateDogProduct = await dogProductsModel.findByIdAndUpdate(id, updatedProductData, { new: true });
      res.status(200).json({ message: 'Dog Product Updated', updateDogProduct });
    });
  } catch (error) {
    console.error("Server Error: ", error);
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// DELETE DOG PRODUCT
const deleteDogProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await dogProductsModel.findByIdAndDelete(id, (error, data) => {
      if (error) {
        console.error("Database Error: ", error);
        return res.status(500).json({ message: 'Error deleting dog product', error });
      }
      res.status(200).json({ message: 'Dog Product Deleted', data });
    });
  } catch (error) {
    console.error("Server Error: ", error);
    res.status(500).json({ message: 'Internal server error', error });
  }
};

//--------------------- CAT PRODUCTS CONTROLLERS ----------------------

// CREATE CAT PRODUCT
const CatProducts = async (req, res) => {
  try {
    upload.any()(req, res, async (err) => {
      if (err) {
        console.error("Multer Error: ", err);
        return res.status(500).json({ message: 'Error processing file upload', error: err });
      }

      const { animalType, productName, productDescription, productPrice, productCategory, productSubCategory, productRating, productStock } = req.body;
      const file = req.files && req.files[0];

      if (!productName || !productDescription || !productPrice) {
        return res.status(400).json({ message: 'Required fields are missing. Please provide product name, description, and price.' });
      }

      try {
        const productImage = await uploadImageToCloudinary(file);
        const catProduct = new catProductsModel({
          animalType,
          productName,
          productDescription,
          productPrice,
          productCategory,
          productSubCategory,
          productRating,
          productStock,
          productImage
        });

        const saveResult = await catProduct.save();
        res.status(201).json({ message: 'Cat Product created successfully', saveResult });
      } catch (error) {
        console.error("Product Creation Error: ", error);
        res.status(500).json({ message: error.message || 'Internal server error', error });
      }
    });
  } catch (error) {
    console.error("Server Error: ", error);
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// UPDATE CAT PRODUCT
const updateCatProduct = async (req, res) => {
  try {
    upload.any()(req, res, async (err) => {
      if (err) {
        console.error("Multer Error: ", err);
        return res.status(500).json({ message: 'Error processing file upload', error: err });
      }

      const { animalType, productName, productDescription, productPrice, productCategory, productSubCategory, productRating, productStock, productImage } = req.body;
      const file = req.files && req.files[0];
      const id = req.params.id;

      let updatedProductData = {
        animalType,
        productName,
        productDescription,
        productPrice,
        productCategory,
        productSubCategory,
        productRating,
        productStock
      };

      if (file) {
        try {
          const productImageUrl = await uploadImageToCloudinary(file);
          updatedProductData.productImage = productImageUrl;
        } catch (error) {
          return res.status(500).json({ message: error.message || 'Error uploading image', error });
        }
      } else {
        updatedProductData.productImage = productImage;
      }

      const updateCatProduct = await catProductsModel.findByIdAndUpdate(id, updatedProductData, { new: true });
      res.status(200).json({ message: 'Cat Product Updated', updateCatProduct });
    });
  } catch (error) {
    console.error("Server Error: ", error);
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// DELETE CAT PRODUCT
const deleteCatProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await catProductsModel.findByIdAndDelete(id, (error, data) => {
      if (error) {
        console.error("Database Error: ", error);
        return res.status(500).json({ message: 'Error deleting cat product', error });
      }
      res.status(200).json({ message: 'Cat Product Deleted', data });
    });
  } catch (error) {
    console.error("Server Error: ", error);
    res.status(500).json({ message: 'Internal server error', error });
  }
};

//--------------------- Repeat similar structure for BIRD, HORSE, and FISH & AQUATIC ANIMALS PRODUCTS ----------------------

// Repeat the same pattern for creating, updating, and deleting bird, horse, and fish & aquatic animals products.

//--------------------- BIRD PRODUCTS CONTROLLERS ----------------------

// CREATE BIRD PRODUCT
const BirdProducts = async (req, res) => {
  try {
    upload.any()(req, res, async (err) => {
      if (err) {
        console.error("Multer Error: ", err);
        return res.status(500).json({ message: 'Error processing file upload', error: err });
      }

      const { animalType, productName, productDescription, productPrice, productCategory, productSubCategory, productRating, productStock } = req.body;
      const file = req.files && req.files[0];

      if (!productName || !productDescription || !productPrice) {
        return res.status(400).json({ message: 'Required fields are missing. Please provide product name, description, and price.' });
      }

      try {
        const productImage = await uploadImageToCloudinary(file);
        const birdProduct = new birdProductsModel({
          animalType,
          productName,
          productDescription,
          productPrice,
          productCategory,
          productSubCategory,
          productRating,
          productStock,
          productImage
        });

        const saveResult = await birdProduct.save();
        res.status(201).json({ message: 'Bird Product created successfully', saveResult });
      } catch (error) {
        console.error("Product Creation Error: ", error);
        res.status(500).json({ message: error.message || 'Internal server error', error });
      }
    });
  } catch (error) {
    console.error("Server Error: ", error);
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// UPDATE BIRD PRODUCT
const updateBirdProduct = async (req, res) => {
  try {
    upload.any()(req, res, async (err) => {
      if (err) {
        console.error("Multer Error: ", err);
        return res.status(500).json({ message: 'Error processing file upload', error: err });
      }

      const { productName, productDescription, productPrice, productCategory, productSubCategory, productRating, productStock, productImage } = req.body;
      const file = req.files && req.files[0];
      const id = req.params.id;

      let updatedProductData = {
        productName,
        productDescription,
        productPrice,
        productCategory,
        productSubCategory,
        productRating,
        productStock
      };

      if (file) {
        try {
          const productImageUrl = await uploadImageToCloudinary(file);
          updatedProductData.productImage = productImageUrl;
        } catch (error) {
          return res.status(500).json({ message: error.message || 'Error uploading image', error });
        }
      } else {
        updatedProductData.productImage = productImage;
      }

      const updateBirdProduct = await birdProductsModel.findByIdAndUpdate(id, updatedProductData, { new: true });
      res.status(200).json({ message: 'Bird Product Updated', updateBirdProduct });
    });
  } catch (error) {
    console.error("Server Error: ", error);
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// DELETE BIRD PRODUCT
const deleteBirdProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await birdProductsModel.findByIdAndDelete(id, (error, data) => {
      if (error) {
        console.error("Database Error: ", error);
        return res.status(500).json({ message: 'Error deleting bird product', error });
      }
      res.status(200).json({ message: 'Bird Product Deleted', data });
    });
  } catch (error) {
    console.error("Server Error: ", error);
    res.status(500).json({ message: 'Internal server error', error });
  }
};

//--------------------- HORSE PRODUCTS CONTROLLERS ----------------------

// CREATE HORSE PRODUCT
const HorseProducts = async (req, res) => {
  try {
    upload.any()(req, res, async (err) => {
      if (err) {
        console.error("Multer Error: ", err);
        return res.status(500).json({ message: 'Error processing file upload', error: err });
      }

      const { animalType, productName, productDescription, productPrice, productCategory, productSubCategory, productRating, productStock } = req.body;
      const file = req.files && req.files[0];

      if (!productName || !productDescription || !productPrice) {
        return res.status(400).json({ message: 'Required fields are missing. Please provide product name, description, and price.' });
      }

      try {
        const productImage = await uploadImageToCloudinary(file);
        const horseProduct = new horseProductsModel({
          animalType,
          productName,
          productDescription,
          productPrice,
          productCategory,
          productSubCategory,
          productRating,
          productStock,
          productImage
        });

        const saveResult = await horseProduct.save();
        res.status(201).json({ message: 'Horse Product created successfully', saveResult });
      } catch (error) {
        console.error("Product Creation Error: ", error);
        res.status(500).json({ message: error.message || 'Internal server error', error });
      }
    });
  } catch (error) {
    console.error("Server Error: ", error);
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// UPDATE HORSE PRODUCT
const updateHorseProduct = async (req, res) => {
  try {
    upload.any()(req, res, async (err) => {
      if (err) {
        console.error("Multer Error: ", err);
        return res.status(500).json({ message: 'Error processing file upload', error: err });
      }

      const { animalType, productName, productDescription, productPrice, productCategory, productSubCategory, productRating, productStock, productImage } = req.body;
      const file = req.files && req.files[0];
      const id = req.params.id;

      let updatedProductData = {
        animalType,
        productName,
        productDescription,
        productPrice,
        productCategory,
        productSubCategory,
        productRating,
        productStock
      };

      if (file) {
        try {
          const productImageUrl = await uploadImageToCloudinary(file);
          updatedProductData.productImage = productImageUrl;
        } catch (error) {
          return res.status(500).json({ message: error.message || 'Error uploading image', error });
        }
      } else {
        updatedProductData.productImage = productImage;
      }

      const updateHorseProduct = await horseProductsModel.findByIdAndUpdate(id, updatedProductData, { new: true });
      res.status(200).json({ message: 'Horse Product Updated', updateHorseProduct });
    });
  } catch (error) {
    console.error("Server Error: ", error);
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// DELETE HORSE PRODUCT
const deleteHorseProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await horseProductsModel.findByIdAndDelete(id, (error, data) => {
      if (error) {
        console.error("Database Error: ", error);
        return res.status(500).json({ message: 'Error deleting horse product', error });
      }
      res.status(200).json({ message: 'Horse Product Deleted', data });
    });
  } catch (error) {
    console.error("Server Error: ", error);
    res.status(500).json({ message: 'Internal server error', error });
  }
};

//--------------------- FISH AND AQUATIC ANIMALS PRODUCTS CONTROLLERS ----------------------

// CREATE FISH AND AQUATIC ANIMALS PRODUCT
const FishAndAcquaticAnimalsProducts = async (req, res) => {
  try {
    upload.any()(req, res, async (err) => {
      if (err) {
        console.error("Multer Error: ", err);
        return res.status(500).json({ message: 'Error processing file upload', error: err });
      }

      const { animalType, productName, productDescription, productPrice, productCategory, productSubCategory, productRating, productStock } = req.body;
      const file = req.files && req.files[0];

      if (!productName || !productDescription || !productPrice) {
        return res.status(400).json({ message: 'Required fields are missing. Please provide product name, description, and price.' });
      }

      try {
        const productImage = await uploadImageToCloudinary(file);
        const fishAndAcquaticAnimalsProduct = new fishAndAquaticAnimalsModel({
          animalType,
          productName,
          productDescription,
          productPrice,
          productCategory,
          productSubCategory,
          productRating,
          productStock,
          productImage
        });

        const saveResult = await fishAndAcquaticAnimalsProduct.save();
        res.status(201).json({ message: 'Fish And Aquatic Animals Product created successfully', saveResult });
      } catch (error) {
        console.error("Product Creation Error: ", error);
        res.status(500).json({ message: error.message || 'Internal server error', error });
      }
    });
  } catch (error) {
    console.error("Server Error: ", error);
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// UPDATE FISH AND AQUATIC ANIMALS PRODUCT
const updateFishAndAcquaticAnimalsProduct = async (req, res) => {
  try {
    upload.any()(req, res, async (err) => {
      if (err) {
        console.error("Multer Error: ", err);
        return res.status(500).json({ message: 'Error processing file upload', error: err });
      }

      const { animalType, productName, productDescription, productPrice, productCategory, productSubCategory, productRating, productStock, productImage } = req.body;
      const file = req.files && req.files[0];
      const id = req.params.id;

      let updatedProductData = {
        animalType,
        productName,
        productDescription,
        productPrice,
        productCategory,
        productSubCategory,
        productRating,
        productStock
      };

      if (file) {
        try {
          const productImageUrl = await uploadImageToCloudinary(file);
          updatedProductData.productImage = productImageUrl;
        } catch (error) {
          return res.status(500).json({ message: error.message || 'Error uploading image', error });
        }
      } else {
        updatedProductData.productImage = productImage;
      }

      const updateFishAndAcquaticAnimals = await fishAndAquaticAnimalsModel.findByIdAndUpdate(id, updatedProductData, { new: true });
      res.status(200).json({ message: 'Fish And Aquatic Animals Product Updated', updateFishAndAcquaticAnimals });
    });
  } catch (error) {
    console.error("Server Error: ", error);
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// DELETE FISH AND AQUATIC ANIMALS PRODUCT
const deleteFishAndAcquaticAnimalsProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await fishAndAquaticAnimalsModel.findByIdAndDelete(id, (error, data) => {
      if (error) {
        console.error("Database Error: ", error);
        return res.status(500).json({ message: 'Error deleting fish and aquatic animal product', error });
      }
      res.status(200).json({ message: 'Fish And Aquatic Animals Product Deleted', data });
    });
  } catch (error) {
    console.error("Server Error: ", error);
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// GET ALL CAT PRODUCTS
const getCatProducts = async (req, res) => {
  try {
    catProductsModel.find({}, (error, data) => {
      if (error) {
        console.error("Database Error: ", error);
        return res.status(500).json({ message: 'Error retrieving cat products', error });
      } else {
        res.status(200).json({ message: 'Cat Products Retrieved Successfully', data });
      }
    });
  } catch (error) {
    console.error("Server Error: ", error);
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// GET ALL BIRD PRODUCTS
const getBirdProducts = async (req, res) => {
  try {
    birdProductsModel.find({}, (error, data) => {
      if (error) {
        console.error("Database Error: ", error);
        return res.status(500).json({ message: 'Error retrieving bird products', error });
      } else {
        res.status(200).json({ message: 'Bird Products Retrieved Successfully', data });
      }
    });
  } catch (error) {
    console.error("Server Error: ", error);
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// GET ALL HORSE PRODUCTS
const getHorseProducts = async (req, res) => {
  try {
    horseProductsModel.find({}, (error, data) => {
      if (error) {
        console.error("Database Error: ", error);
        return res.status(500).json({ message: 'Error retrieving horse products', error });
      } else {
        res.status(200).json({ message: 'Horse Products Retrieved Successfully', data });
      }
    });
  } catch (error) {
    console.error("Server Error: ", error);
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// GET ALL FISH AND AQUATIC ANIMALS PRODUCTS
const getFishAndAcquaticAnimalsProducts = async (req, res) => {
  try {
    fishAndAquaticAnimalsModel.find({}, (error, data) => {
      if (error) {
        console.error("Database Error: ", error);
        return res.status(500).json({ message: 'Error retrieving fish and aquatic animals products', error });
      } else {
        res.status(200).json({ message: 'Fish And Aquatic Animals Products Retrieved Successfully', data });
      }
    });
  } catch (error) {
    console.error("Server Error: ", error);
    res.status(500).json({ message: 'Internal server error', error });
  }
};



module.exports = {
  // Dog Products
  DogProducts,
  getDogProducts,
  updateDogProduct,
  deleteDogProduct,

  // Cat Products
  CatProducts,
  getCatProducts,
  updateCatProduct,
  deleteCatProduct,

  // Bird Products
  BirdProducts,
  getBirdProducts,
  updateBirdProduct,
  deleteBirdProduct,

  // Horse Products
  HorseProducts,
  getHorseProducts,
  updateHorseProduct,
  deleteHorseProduct,

  // Fish and Aquatic Animals Products
  FishAndAcquaticAnimalsProducts,
  getFishAndAcquaticAnimalsProducts,
  updateFishAndAcquaticAnimalsProduct,
  deleteFishAndAcquaticAnimalsProduct,
};
