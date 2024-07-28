const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({

    companyLocation: {
        type: String,
        required: [true, 'Please provide a company location'],
    },
    companyContactNumber: {
        type: String,
        required: [true, 'Please provide a company contact number'],
    },
    companyEmail: {
        type: String,
        required: [true, 'Please provide a company email'],
    },
    companyFacebook: {
        type: String,
        required: [true, 'Please provide a company facebook'],
    },
    companyInstagram: {
        type: String,
        required: [true, 'Please provide a company instagram'],
    },
    companyTwitter: {
        type: String,
        required: [true, 'Please provide a company twitter'],
    },

    //which are the variables in this schema?
    //companyLocation, companyContactNumber, companyEmail, companyFacebook, companyInstagram, companyTwitter
     //put the variable in json format with sample data
     //{"companyLocation": "Manila", "companyContactNumber": "09123456789", "companyEmail": "namipetgroomers@gmail.com", "companyFacebook": "Nami Pet Groomers", "companyInstagram": "namipetgroomers", "companyTwitter": "namipetgroomers"}
     

    

})
module.exports = mongoose.model('Contact', ContactSchema)