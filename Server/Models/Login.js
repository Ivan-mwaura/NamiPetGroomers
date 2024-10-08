const mongoose = require('mongoose');


const LoginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
        ],unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 6,
    },
},{timestamps: true});

//give sample json data
// {}

LoginSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

LoginSchema.methods.createJWT = function () {
    return jwt.sign(
        {user: this._id, email:this.email},
        process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_EXPIRY}
    )
}

LoginSchema.methods.comparePassword = async function (candidatePassword){
    const isMatch = await bcrypt.compare(candidatePassword, this.password)

    return isMatch
}

module.exports = mongoose.model('Login', LoginSchema);