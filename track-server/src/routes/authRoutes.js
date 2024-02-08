// Assuming your User model file is located in models/User.js
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("../models/NewUser"); // Import the User model


const User = mongoose.model("User"); // Now you can use the User model

const router = express.Router();

router.post("/signup", async (req, res) => {

  try {
    const { email, password } = req.body;
    const user = new User({ email, password });
    await user.save();
    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");

    res.send({ token });
  }
  catch (err) {
    res.status(422).send(err.message);
  }
  
});

module.exports = router;
