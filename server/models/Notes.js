const mongoose = require('mongoose')

const NotesSchema = mongoose.Schema({
    Title: String,
    Description: String
})

var Notes = mongoose.model('Notes', NotesSchema)

module.exports = Notes