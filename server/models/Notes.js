const mongoose = require('mongoose')

const NotesSchema = mongoose.Schema({
    Title: String,
    Description: String
})

module.exports = mongoose.model('Notes', NotesSchema)