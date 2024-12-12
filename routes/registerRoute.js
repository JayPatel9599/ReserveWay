const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
    res.render('register', { title: 'Register' });
});

router.post('/', async (req, res) => {
    try {
        const { name, username, email, password, studentNumber } = req.body;

        if (!name || !username || !email || !password || !studentNumber) {
            return res.status(400).send('All fields are required');
        }

        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.render('register', { title: 'Register', error: 'Username or email already exists' });
        }

        const user = new User({ name, username, email, password, studentNumber });
        await user.save();
        res.redirect('/login');
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
