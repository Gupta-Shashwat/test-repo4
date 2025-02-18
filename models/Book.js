const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Book', BookSchema);
