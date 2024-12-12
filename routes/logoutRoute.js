const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                console.error('Error during logout:', err);
                return res.status(500).send('Internal Server Error');
            }
            res.redirect('/');
        });
    } else {
        res.redirect('/');
    }
});

module.exports = router;
