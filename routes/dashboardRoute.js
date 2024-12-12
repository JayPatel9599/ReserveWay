const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');

router.get('/', async (req, res) => {
    if (!req.session.user) return res.redirect('/login');

    try {
        const userBookings = await Booking.find({ bookedBy: req.session.user.username });
        res.render('dashboard', {
            title: 'Dashboard',
            user: req.session.user,
            bookings: userBookings
        });
    } catch (error) {
        console.error('Error fetching bookings for dashboard:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/bookings/:id', async (req, res) => {
    if (!req.session.user) return res.redirect('/login');

    try {
        const bookingId = req.params.id;
        await Booking.deleteOne({ _id: bookingId, bookedBy: req.session.user.username });
        res.redirect('/dashboard');
    } catch (error) {
        console.error('Error deleting booking:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
