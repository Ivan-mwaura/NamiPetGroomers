const mongoose = require('mongoose')

const ServicesSchema = new mongoose.Schema({
    serviceName: {
        type: String,
        required: [true, 'Please provide a service name'],
    },
    serviceDescription: {
        type: String,
        required: [true, 'Please provide a service description'],
    },
    servicePrice: {
        type: Number,
        required: [true, 'Please provide a service price'],
    },
    
})

module.exports = mongoose.model('Services', ServicesSchema)