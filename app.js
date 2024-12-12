// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// Initialize app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://pateljay637981:testingapp@cluster0.5obcy.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// Middleware
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'reserveway_secret',
    resave: false,
    saveUninitialized: false
}));
app.use(methodOverride('_method'));

// Import Routes
const bookingRoute = require('./routes/bookingRoute');
const loginRoute = require('./routes/loginRoute');
const dashboardRoute = require('./routes/dashboardRoute');
const registerRoute = require('./routes/registerRoute');
const logoutRoute = require('./routes/logoutRoute');

// Use Routes
app.use('/booking', bookingRoute);
app.use('/dashboard', dashboardRoute);
app.use('/register', registerRoute);
app.use('/logout', logoutRoute);
app.use('/', loginRoute);

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
