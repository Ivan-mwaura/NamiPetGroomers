const mongoose = require('mongoose');


const dogProductsModel = require('../Models/Products/Dog');
const catProductsModel = require('../Models/Products/Cat');
const birdProductsModel = require('../Models/Products/Birds');
const fishProductsModel = require('../Models/Products/FishAndAcquaticAnimals');
const horseProductsModel = require('../Models/Products/Horses');
const animalGroomingModel = require('../Models/AnimalGrooming');
const blogsModel = require('../Models/Blogs');
const Pricing = require('../Models/Pricing');
const Services = require('../Models/Services');

const CatCategoryProducts = require('./CatCategoryProducts');
const categoryProducts = require('./categoryProducts'); 
const BirdCategoryProducts = require('./BirdCategoryProducts');
const FishCategoryProducts = require('./FishCategoryProducts');
const HorseCategoryProducts = require('./HorseCategoryProducts');
const PricingData = require('./PricingData');
const ServicesData = require('./ServicesData');
const AnimalGroomingData = require('./AnimalGroomingData');
const BlogsData = require('./BlogsData');




const populateDB = async () => {
  try {
   await animalGroomingModel.deleteMany({}); // Clear existing data

   for (const product of AnimalGroomingData) {
    const newProduct = new animalGroomingModel({

      animalName: product.animalName,
      animalBreed: product.animalBreed,
      animalType: product.animalType,
      groomingImages: {
        before: product.groomingImages.before,
        after: product.groomingImages.after
      }
    });

      await newProduct.save();
    }

     /* try {
        await VeterinariansModel.deleteMany({}); // Clear existing data

        for (const vet of VeterinariansData) {
          const newVet = new VeterinariansModel({
            veterinarianName: vet.veterinarianName,
            veterinarianSpecialty: vet.veterinarianSpecialty,
            veterinarianDescription: vet.veterinarianDescription,
            veterinarianContactNumber: vet.veterinarianContactNumber,
            veterinarianEmail: vet.veterinarianEmail,
            veterinarianFacebook: vet.veterinarianFacebook,
            veterinarianInstagram: vet.veterinarianInstagram,
            veterinarianTwitter: vet.veterinarianTwitter,
            veterinarianProfilePicture: vet.veterinarianProfilePicture
          });
    
          await newVet.save();
        }

        */

    console.log('Database populated with Pricing Data successfully');
  } catch (error) {
    console.error('Error populating database:', error);
  } finally {
    mongoose.connection.close();
  }
};

module.exports = populateDB;
