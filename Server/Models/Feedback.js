const mongoose = require('mongoose');


const FeedbackSchema = new mongoose.Schema({

    clientsName: {
        type: String,
        required: [true, 'Please provide a clients name'],
    },
    clientsProfilePicture: {
            
        type: String,
        required: [true, 'Please provide a clients image'],
    },
    clientsFeedback: {
        type: String,
        required: [true, 'Please provide a clients feedback'],
    },
    clientsRating: {
        type: Number,
        required: [true, 'Please provide a clients rating'],
    },
    clientsPosition: {
        type: String,
        required: [true, 'Please provide a clients position'],
    },
    
})

module.exports = mongoose.model('Feedback', FeedbackSchema)
