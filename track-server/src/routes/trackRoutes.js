const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middleware/requireAuth");

// Import the Track model
const Track = require("../models/Track");

const router = express.Router();

router.use(requireAuth);

router.get("/tracks", async (req, res) => {
    // Use the Track model to find tracks by userId
    const tracks = await Track.find({ userId: req.user._id });
    res.send(tracks);
});

module.exports = router;
