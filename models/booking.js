const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    court: String,
    game: String,
    startTime: Date,
    endTime: Date,
    bookedBy: String,
    price: Number
});

module.exports = mongoose.model('Booking', BookingSchema);
