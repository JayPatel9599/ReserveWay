// Import required modules
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://pateljay637981:testingapp@cluster0.5obcy.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// Define Court Schema
const CourtSchema = new mongoose.Schema({
    name: String,
    game: String
});

const Court = mongoose.model('Court', CourtSchema);

// Seed Data
const courts = [
    { name: 'Basketball Court 1', game: 'Basketball' },
    { name: 'Basketball Court 2', game: 'Basketball' },
    { name: 'Basketball Court 3', game: 'Basketball' },
    { name: 'Badminton Court 1', game: 'Badminton' },
    { name: 'Badminton Court 2', game: 'Badminton' },
    { name: 'Football Field 1', game: 'Football' },
    { name: 'Football Field 2', game: 'Football' }
];

// Insert Courts into Database
Court.insertMany(courts)
    .then(() => {
        console.log('Courts seeded successfully');
        mongoose.disconnect();
    })
    .catch(err => {
        console.error('Error seeding courts:', err);
        mongoose.disconnect();
    });
