const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middleware/requireAuth");

// Import the Track model
const Track = require("../models/Track");

const router = express.Router();

router.use(requireAuth);

router.get("/tracks", async (req, res) => {
    try {
        // Use the Track model to find tracks by userId
        const tracks = await Track.find({ userId: req.user._id });
        res.send(tracks);
    } catch (err) {
        res.status(500).send({ error: "Internal server error" });
    }
});

router.post("/tracks", async (req, res) => {
    const { name, locations } = req.body;
    if (!name || !locations || locations.length === 0) {
        return res.status(422).send({ error: "You must provide a name and at least one location" });
    }
    
    try {
        const track = new Track({ name, locations, userId: req.user._id });
        await track.save();
        res.send(track);
    } catch (err) {
        res.status(422).send({ error: err.message });
    }
});

module.exports = router;
