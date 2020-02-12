const mongoose = require('mongoose');

const NotesSchema = mongoose.Schema({
    Title: String,
    Description: String,
    Category: {
        type:mongoose.Schema.Types.ObjectId, 
        ref: 'Category'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

var Notes = mongoose.model('Notes', NotesSchema);

module.exports = Notes;