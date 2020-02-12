var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
    title: String,
    notes: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Notes'}
    ],
    createdAt: {
      type: Date,
      default: Date.now
    }
});

module.exports = mongoose.model('Category', categorySchema);