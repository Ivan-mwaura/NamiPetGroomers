const mongoose = require('mongoose');


const PricingSchema = new mongoose.Schema({
    pricingName: {
        type: String,
        required: [true, 'Please provide a pricing name'],
    },
    pricingDescription: {
        type: String,
        required: [true, 'Please provide a pricing description'],
    },
    pricingPrice: {
        type: String,
        required: [true, 'Please provide a pricing price'],
    },
    PricingBenefits: {
        type: Array,
        required: [true, 'Please provide pricing benefits'],
        
    },
    //which are the variables in this schema?
    //pricingName, pricingDescription, pricingPrice, PricingBenefits
    //put the variable in json format with sample data
    //{"pricingName": "Gold", "pricingDescription": "Best for business", "pricingPrice": 1000, "PricingBenefits": ["Unlimited Storage", "Unlimited Bandwidth", "Free Domain"]}
});

module.exports = mongoose.model('Pricing', PricingSchema);
