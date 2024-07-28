const mongose = require('mongoose');

const connectDB = (url) => {
    return mongose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
}

module.exports = connectDB;