const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config();

const AdminLoginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role : {
        type: String,
        required: true,
        enum: ['user', 'admin'],
        default: 'admin'
    }
},{timestamps: true});

AdminLoginSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

AdminLoginSchema.methods.createJWT = function () {
    return jwt.sign(
        {user: this._id, email:this.email},
        process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_EXPIRY}
    )
}

AdminLoginSchema.methods.comparePassword = async function (candidatePassword){
    const isMatch = await bcrypt.compare(candidatePassword, this.password)

    return isMatch
}

module.exports = mongoose.model('AdminLogin', AdminLoginSchema);