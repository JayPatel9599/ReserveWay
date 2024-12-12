const mongoose = require('mongoose');

const CourtSchema = new mongoose.Schema({
    name: String,
    game: String
});

module.exports = mongoose.model('Court', CourtSchema);
