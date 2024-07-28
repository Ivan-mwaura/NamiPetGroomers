const mongoose = require('mongoose');

const fishAndAquaticAnimalsSchema = new mongoose.Schema({
    animalType: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productCategory: {
        type: String,
        required: true
    },
    productSubCategory: {
        type: String,
        required: true
    },
    productPrice: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        //required: true
    },
    productImage: {
        type: String,
        required: true
    },
    productRating: {
        type: Number,
        required: true
    },
    productStock: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('FishAndAquaticAnimals', fishAndAquaticAnimalsSchema);