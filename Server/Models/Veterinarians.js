const mongoose = require('mongoose');

const VeterinariansSchema = new mongoose.Schema({

    veterinarianName: {
        type: String,
        required: [true, 'Please provide a veterinarian name'],
    },
    veterinarianSpecialty: {
        type: String,
        required: [true, 'Please provide a veterinarian specialty'],
    },
    veterinarianDescription: {
        type: String,
        required: [true, 'Please provide a veterinarian description'],
    },
    veterinarianContactNumber: {
        type: Number,
        //required: [true, 'Please provide a veterinarian contact number'],
    },
    veterinarianEmail: {
        type: String,
        required: [true, 'Please provide a veterinarian email'],
    },
    veterinarianFacebook: {
        type: String,
        required: [true, 'Please provide a veterinarian facebook'],
    },
    veterinarianInstagram: {
        type: String,
        required: [true, 'Please provide a veterinarian instagram'],
    },
    veterinarianTwitter: {
        type: String,
        required: [true, 'Please provide a veterinarian twitter'],
    },
    veterinarianProfilePicture: {

        type: String,
        required: [true, 'Please provide a veterinarian profile picture'],
    },

    //list for me the variables in this schema

    //veterinarianName, veterinarianSpecialty, veterinarianDescription, veterinarianContactNumber, veterinarianEmail, veterinarianFacebook, veterinarianInstagram, veterinarianTwitter, veterinarianProfilePicture




})

module.exports = mongoose.model('Veterinarians', VeterinariansSchema)