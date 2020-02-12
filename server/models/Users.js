const mongoose = require('mongoose');

const UserShema = mongoose.Schema({
    Firstname: String,
    Lastname: String,
    Email: String,
    Password: String
});

module.exports = mongoose.model('Users', UserShema);