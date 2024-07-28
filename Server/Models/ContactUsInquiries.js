const mongoose = require('mongoose');


const ContactUsInquiriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,

    },
    subject: {
        type: String,
        required: true,

    },
    message: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: 'Pending'
    },

});

module.exports = mongoose.model('ContactUsInquiries', ContactUsInquiriesSchema)