const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    Index: { type: String },
    
});

module.exports = mongoose.model('versiculo', todoSchema);
