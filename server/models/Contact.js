const mongoose = require('mongoose');

const contactShema = mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneNumber: String,
    email: String,
    message: String
});

module.exports = mongoose.model('Contact', contactShema);