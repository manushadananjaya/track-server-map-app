const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup' , async (req, res) => {
    console.log(req.body);

    const user = new User({ email: req.body.email, password: req.body.password });
    await user.save();


    res.send('You made a post request');

    }
);

module.exports = router;