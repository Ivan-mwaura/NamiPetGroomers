const mongoose = require('mongoose');

const MessagesSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true  
    },
    selectedService: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Messages', MessagesSchema);