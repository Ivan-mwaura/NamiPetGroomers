const mongoose = require('mongoose')


const SubscribersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'active'
    },
    replied: {
        type: Boolean,
        default: false
    },
    amount: {
        type: Number,
        required: true
    },
    subscriptionDate: {
        type: Date,
        default: Date.now
    },
    subscriptionEndDate: {
        type: Date,
        default : new Date().setMonth(new Date().getMonth() + 1)
    },
    subscriptionPlan: {
        type: String,
        required: true
    },

    //give sample data for the subscription plan in json to test in postman
    // { "email": "test@gmail", "phoneNumber": "1234567890", "name": "test", "amount": 1000, "subscriptionPlan": "basic",  }
    
})

module.exports = mongoose.model('Subscribers', SubscribersSchema)

