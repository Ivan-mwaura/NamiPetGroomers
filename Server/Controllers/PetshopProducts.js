const fs = require('fs');
const multer = require('multer');
const dogProductsModel = require('../Models/Products/Dog');
const catProductsModel = require('../Models/Products/Cat');
const birdProductsModel = require('../Models/Products/Birds');
const horseProductsModel = require('../Models/Products/Horses');
const fishAndAquaticAnimalsModel = require('../Models/Products/FishAndAcquaticAnimals');
const cloudinary = require('../Cloudinary'); 

const storage = multer.memoryStorage(); 

const upload = multer({ storage: storage });



//POST A DOG PRODUCT
const DogProducts = async (req, res) => {
  try {
    upload.any()(req, res, async (err) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      } else {
        const {animalType, productName, productDescription, productPrice, productCategory, productSubCategory, productRating, productStock } = req.body;
        const file = req.files[0];

        //console.log(animalType, productName, productDescription, productPrice, productCategory, productSubCategory, productRating, productStock)

       
        cloudinary.uploader.upload_stream({ resource_type: 'image' }, async (error, result) => {
          if (error) {
            console.log(error);
            return res.status(500).send(error);
          } else {
            const dogProducts = new dogProductsModel({
              animalType,
              productName,
              productDescription,
              productPrice,
              productCategory,
              productSubCategory,
              productRating,
              productStock,
              productImage: result.secure_url
            });

            const saveResult = await dogProducts.save();
            res.status(200).json({ message: 'Dog Products', saveResult });
          }
        }).end(file.buffer);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

//GET ALL DOG PRODUCTS
const getDogProducts = async (req, res) => {
  try {
    dogProductsModel.find({}, (error, data) => {
      if (error) {
        console.log(error);
        return res.status(500).send(error);
      } else {
        res.status(200).json({ message: 'Dog Products', data });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }

}


//UPDATE A DOG PRODUCT
const updateDogProduct = async (req, res) => {
  try {
    upload.any()(req, res, async (err) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      } else {
        const { animalType, productName, productDescription, productPrice, productCategory, productSubCategory, productRating, productStock, productImage } = req.body;
        const file = req.files && req.files[0]; // Ensure file exists
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
          // If a new file is uploaded, process it
          cloudinary.uploader.upload(file.path, { resource_type: 'image' }, async (error, result) => {
            if (error) {
              console.log(error);
              return res.status(500).send(error);
            } else {
              updatedProductData.productImage = result.secure_url;

              const updateDogProduct = await dogProductsModel.findByIdAndUpdate(id, updatedProductData, { new: true });
              res.status(200).json({ message: 'Dog Product Updated', updateDogProduct });
            }
          });
        } else {
          // If no new file is uploaded, use the existing image URL from the request body
          updatedProductData.productImage = productImage;

          const updateDogProduct = await dogProductsModel.findByIdAndUpdate(id, updatedProductData, { new: true });
          res.status(200).json({ message: 'Dog Product Updated', updateDogProduct });
        }
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};


//DELETE A DOG PRODUCT
const deleteDogProduct = async (req, res) => {

  try {

        const id = req.params.id;
        await dogProductsModel.findByIdAndDelete(id, (error, data) => {
          if (error) {
            console.log(error);
            return res.status(500).send(error);
          }else {
            res.status(200).json({ message: 'Dog Product Deleted', data });
          }
        });
    
  } catch (error) {
    
  }

}



const CatProducts = async (req, res) => {
    try {
        upload.any()(req, res, async (err) => {
          if (err) {
            console.log(err);
            return res.status(500).send(err);
          } else {
            const {animalType, productName, productDescription, productPrice, productCategory, productSubCategory, productRating, productStock } = req.body;
            const file = req.files[0];
    
           
            cloudinary.uploader.upload_stream({ resource_type: 'image' }, async (error, result) => {
              if (error) {
                console.log(error);
                return res.status(500).send(error);
              } else {
                const CatProducts = new catProductsModel({
                  animalType,
                  productName,
                  productDescription,
                  productPrice,
                  productCategory,
                  productSubCategory,
                  productRating,
                  productStock,
                  productImage: result.secure_url 
                });
    
                const saveResult = await CatProducts.save();
                res.status(200).json({ message: 'Cats Products', saveResult });
              }
            }).end(file.buffer);
          }
        });
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
      }     
}

//GET ALL CAT PRODUCTS
const getCatProducts = async (req, res) => {
  try {
    catProductsModel.find({}, (error, data) => {
      if (error) {
        console.log(error);
        return res.status(500).send(error);
      } else {
        res.status(200).json({ message: 'Cat Products', data });
      }
    });
  }catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

//UPDATE A CAT PRODUCT
const updateCatProduct = async (req, res) => { 
  try {
      upload.any()(req, res, async (err) => {
        if (err) {
          console.log(err);
          return res.status(500).send(err);
        } else {
          const { animalType, productName, productDescription, productPrice, productCategory, productSubCategory, productRating, productStock, productImage } = req.body;
          const file = req.files && req.files[0]; // Ensure file exists
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
            // If a new file is uploaded, process it
            cloudinary.uploader.upload(file.path, { resource_type: 'image' }, async (error, result) => {
              if (error) {
                console.log(error);
                return res.status(500).send(error);
              } else {
                updatedProductData.productImage = result.secure_url;
  
                const updateCatProduct = await catProductsModel.findByIdAndUpdate(id, updatedProductData, { new: true });
                res.status(200).json({ message: 'Cat Product Updated', updateCatProduct });
              }
            });
          } else {
            // If no new file is uploaded, use the existing image URL from the request body
            updatedProductData.productImage = productImage;
  
            const updateCatProduct = await catProductsModel.findByIdAndUpdate(id, updatedProductData, { new: true });
            res.status(200).json({ message: 'Cat Product Updated', updateCatProduct });
          }
        }
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
}



//DELETE A CAT PRODUCT
const deleteCatProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await catProductsModel.findByIdAndDelete(id, (error, data) => {
      if (error) {
        console.log(error);
        return res.status(500).send(error);
      }else {
        res.status(200).json({ message: 'Cat Product Deleted', data });
      }

    })
  }catch (error){
    console.log(error);
    res.status(500).send(error);
  }
}

const BirdProducts = async (req, res) => {
    try {
        upload.any()(req, res, async (err) => {
          if (err) {
            console.log(err);
            return res.status(500).send(err);
          } else {
            const {animalType, productName, productDescription, productPrice, productCategory, productSubCategory, productRating, productStock } = req.body;
            const file = req.files[0];
    
           
            cloudinary.uploader.upload_stream({ resource_type: 'image' }, async (error, result) => {
              if (error) {
                console.log(error);
                return res.status(500).send(error);
              } else {
                const BirdProducts = new birdProductsModel({
                  animalType,
                  productName,
                  productDescription,
                  productPrice,
                  productCategory,
                  productSubCategory,
                  productRating,
                  productStock,
                  productImage: result.secure_url 
                });
    
                const saveResult = await BirdProducts.save();
                res.status(200).json({ message: 'Birds Products', saveResult });
              }
            }).end(file.buffer);
          }
        });
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
      }     
}

//GET ALL BIRD PRODUCTS
const getBirdProducts = async (req, res) => {
  try {
    birdProductsModel.find({}, (error, data) => {
      if (error) {
        console.log(error);
        return res.status(500).send(error);
      }else {
        res.status(200).json({ message: 'Bird Products', data });
      }
    })
  }catch (error) {
    console.log(error);
    res.status(500).send(error);
  }

}


//UPDATE A BIRD PRODUCT
const updateBirdProduct = async (req, res) => {
  try {
    upload.any()(req, res, async (err) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      } else {
        const { productName, productDescription, productPrice, productCategory, productSubCategory, productRating, productStock, productImage } = req.body;
        const file = req.files && req.files[0]; // Ensure file exists
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
          // If a new file is uploaded, process it
          cloudinary.uploader.upload_stream({ resource_type: 'image' }, async (error, result) => {
            if (error) {
              console.log(error);
              return res.status(500).send(error);
            } else {
              updatedProductData.productImage = result.secure_url;

              const updateBirdProduct = await birdProductsModel.findByIdAndUpdate(id, updatedProductData, { new: true });
              res.status(200).json({ message: 'Bird Product Updated', updateBirdProduct });
            }
          }).end(file.buffer);
        } else {
          // If no new file is uploaded, use the existing image URL from the request body
          updatedProductData.productImage = productImage;

          const updateBirdProduct = await birdProductsModel.findByIdAndUpdate(id, updatedProductData, { new: true });
          res.status(200).json({ message: 'Bird Product Updated', updateBirdProduct });
        }
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}


//DELETE A BIRD PRODUCT
const deleteBirdProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await birdProductsModel.findByIdAndDelete(id, (error, data) => {
      if (error) {
        console.log(error);
        return res.status(500).send(error);
      }else {
        res.status(200).json({ message: 'Bird Product Deleted', data });
      }
    });
  }catch (error){
    console.log(error);
    res.status(500).send(error);
  }
      
}

//POST A HORSE PRODUCT
const HorseProducts = async (req, res) => {
    try {
        upload.any()(req, res, async (err) => {
          if (err) {
            console.log(err);
            return res.status(500).send(err);
          } else {
            const {animalType, productName, productDescription, productPrice, productCategory, productSubCategory, productRating, productStock } = req.body;
            const file = req.files[0];
    
           
            cloudinary.uploader.upload_stream({ resource_type: 'image' }, async (error, result) => {
              if (error) {
                console.log(error);
                return res.status(500).send(error);
              } else {
                const HorseProducts = new horseProductsModel({
                  animalType,
                  productName,
                  productDescription,
                  productPrice,
                  productCategory,
                  productSubCategory,
                  productRating,
                  productStock,
                  productImage: result.secure_url 
                });
    
                const saveResult = await HorseProducts.save();
                res.status(200).json({ message: 'Horse Products', saveResult });
              }
            }).end(file.buffer);
          }
        });
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
      }     
}

//GET ALL HORSE PRODUCTS
const getHorseProducts = async (req, res) => {
    try {
        horseProductsModel.find({}, (error, data) => {
          if (error) {
            console.log(error);
            return res.status(500).send(error);
          }else {
            res.status(200).json({ message: 'Horse Products', data });
          }
        });
      }catch (error) {
        console.log(error);
        res.status(500).send(error);
      }
}




//UPDATE A HORSE PRODUCT
const updateHorseProduct = async (req, res) => {
  try {
    upload.any()(req, res, async (err) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      } else {
        const { animalType, productName, productDescription, productPrice, productCategory, productSubCategory, productRating, productStock, productImage } = req.body;
        const file = req.files && req.files[0]; // Ensure file exists
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
          // If a new file is uploaded, process it
          cloudinary.uploader.upload_stream({ resource_type: 'image' }, async (error, result) => {
            if (error) {
              console.log(error);
              return res.status(500).send(error);
            } else {
              updatedProductData.productImage = result.secure_url;

              const updateHorseProduct = await horseProductsModel.findByIdAndUpdate(id, updatedProductData, { new: true });
              res.status(200).json({ message: 'Horse Product Updated', updateHorseProduct });
            }
          }).end(file.buffer);
        } else {
          // If no new file is uploaded, use the existing image URL from the request body
          updatedProductData.productImage = productImage;

          const updateHorseProduct = await horseProductsModel.findByIdAndUpdate(id, updatedProductData, { new: true });
          res.status(200).json({ message: 'Horse Product Updated', updateHorseProduct });
        }
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};



//DELETE A HORSE PRODUCT
const deleteHorseProduct = async (req, res) => {
    try {
        const id = req.params.id;
        await horseProductsModel.findByIdAndDelete(id, (error, data) => {
          if (error) {
            console.log(error);
            return res.status(500).send(error);
          }else {
            res.status(200).json({ message: 'Horse Product Deleted', data });
          }
        });
      }catch (error){
        console.log(error);
        res.status(500).send(error);
      }
  }
  //POST A FISH AND AQUATIC ANIMALS PRODUCT
const FishAndAcquaticAnimalsProducts = async (req, res) => {
    try {
        upload.any()(req, res, async (err) => {
          if (err) {
            console.log(err);
            return res.status(500).send(err);
          } else {
            const {animalType, productName, productDescription, productPrice, productCategory, productSubCategory, productRating, productStock } = req.body;
            const file = req.files[0];
    
           
            cloudinary.uploader.upload_stream({ resource_type: 'image' }, async (error, result) => {
              if (error) {
                console.log(error);
                return res.status(500).send(error);
              } else {
                const fishAndAcquaticAnimalsProducts = new fishAndAquaticAnimalsModel({
                  animalType,
                  productName,
                  productDescription,
                  productPrice,
                  productCategory,
                  productSubCategory,
                  productRating,
                  productStock,
                  productImage: result.secure_url 
                });
    
                const saveResult = await fishAndAcquaticAnimalsProducts.save();
                res.status(200).json({ message: 'fishAndAquaticAnimals Products', saveResult });
              }
            }).end(file.buffer);
          }
        });
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
      }     
}
//GET ALL FISH AND AQUATIC ANIMALS PRODUCTS
const getFishAndAcquaticAnimalsProducts = async (req, res) => {
    try {
        fishAndAquaticAnimalsModel.find({}, (error, data) => {
          if (error) {
            console.log(error);
            return res.status(500).send(error);
          }else {
            res.status(200).json({ message: 'Fish And Aquatic Animals Products', data });
          }
        });
      }catch (error) {
        console.log(error);
        res.status(500).send(error);
      }
}


//UPDATE A FISH AND AQUATIC ANIMALS PRODUCT
const updateFishAndAcquaticAnimalsProduct = async (req, res) => {
  try {
    upload.any()(req, res, async (err) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      } else {
        const { animalType, productName, productDescription, productPrice, productCategory, productSubCategory, productRating, productStock, productImage } = req.body;
        const file = req.files && req.files[0]; // Ensure file exists
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
          // If a new file is uploaded, process it
          cloudinary.uploader.upload_stream({ resource_type: 'image' }, async (error, result) => {
            if (error) {
              console.log(error);
              return res.status(500).send(error);
            } else {
              updatedProductData.productImage = result.secure_url;

              const updateFishAndAcquaticAnimals = await fishAndAquaticAnimalsModel.findByIdAndUpdate(id, updatedProductData, { new: true });
              res.status(200).json({ message: 'Fish And Aquatic Animals Product Updated', updateFishAndAcquaticAnimals });
            }
          }).end(file.buffer);
        } else {
          // If no new file is uploaded, use the existing image URL from the request body
          updatedProductData.productImage = productImage;

          const updateFishAndAcquaticAnimals = await fishAndAquaticAnimalsModel.findByIdAndUpdate(id, updatedProductData, { new: true });
          res.status(200).json({ message: 'Fish And Aquatic Animals Product Updated', updateFishAndAcquaticAnimals });
        }
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};


//DELETE A FISH AND AQUATIC ANIMALS PRODUCT
const deleteFishAndAcquaticAnimalsProduct = async (req, res) => {
    try {
        const id = req.params.id;
        await fishAndAquaticAnimalsModel.findByIdAndDelete(id, (error, data) => {
          if (error) {
            console.log(error);
            return res.status(500).send(error);
          }else {
            res.status(200).json({ message: 'Fish And Aquatic Animals Product Deleted', data });
          }
        });
      }catch (error){
        console.log(error);
        res.status(500).send(error);
      }
}


module.exports = {
    DogProducts,
    CatProducts,
    BirdProducts,
    HorseProducts,
    FishAndAcquaticAnimalsProducts,

    //UPDATE AND DELETE A DOG PRODUCT
    updateDogProduct,
    deleteDogProduct,
    //GET ALL DOG PRODUCTS
    getDogProducts,


    //UPDATE AND DELETE A CAT PRODUCT
    updateCatProduct,
    deleteCatProduct,
    //GET ALL CAT PRODUCTS
    getCatProducts,

    //UPDATE AND DELETE A BIRD PRODUCT
    updateBirdProduct,
    deleteBirdProduct,
    //GET ALL BIRD PRODUCTS
    getBirdProducts,

    //UPDATE AND DELETE A HORSE PRODUCT
    updateHorseProduct,
    deleteHorseProduct,
    //GET ALL HORSE PRODUCTS
    getHorseProducts,

    //UPDATE AND DELETE A FISH AND AQUATIC ANIMALS PRODUCT
    updateFishAndAcquaticAnimalsProduct,
    deleteFishAndAcquaticAnimalsProduct,
    //GET ALL FISH AND AQUATIC ANIMALS PRODUCTS
    getFishAndAcquaticAnimalsProducts
};
