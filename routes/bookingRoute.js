const express = require('express');
const router = express.Router();
const Booking = require('../models/booking');
const Court = require('../models/court');

router.get('/', async (req, res) => {
    if (!req.session.user) return res.redirect('/login');
    const courts = await Court.find();
    const bookings = await Booking.find();
    const timeSlots = Array.from({ length: 20 }, (_, i) => {
        const start = new Date(0, 0, 0, 8, i * 30);
        const end = new Date(0, 0, 0, 8, (i + 1) * 30);
        return `${start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - ${end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    });
    res.render('booking', { title: 'Booking', user: req.session.user, courts, bookings, timeSlots });
});

router.post('/', async (req, res) => {
    if (!req.session.user) return res.redirect('/login');

    try {
        const { court, time } = req.body;

        const [startTime, endTime] = time.split(' - ').map(t => {
            const date = new Date();
            const [hours, minutes] = t.split(':');
            date.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0, 0);
            return date;
        });

        const courtData = await Court.findOne({ name: court });
        if (!courtData) return res.status(404).send('Court not found');

        const booking = new Booking({
            court,
            game: courtData.game,
            startTime,
            endTime,
            bookedBy: req.session.user.username,
            price: ((endTime - startTime) / (1000 * 60 * 30)) * 10
        });

        await booking.save();
        res.redirect('/booking');
    } catch (error) {
        console.error('Error saving booking:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
