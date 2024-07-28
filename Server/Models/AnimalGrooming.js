const mongoose = require('mongoose');

const AnimalGroomingSchema = new mongoose.Schema({
    animalName: {
        type: String,
        required: true,
    },
    animalBreed: {
        type: String,
        required: true,
    },
    animalType: {
        type: String,
        required: true,
    },
    groomingImages: {
        before: {
            type: String,
            required: true,
        },
        after: {
            type: String,
            required: true,
        }
    }
});

module.exports = mongoose.model('AnimalGrooming', AnimalGroomingSchema);
