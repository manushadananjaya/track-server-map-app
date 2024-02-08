const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ // Use mongoose.Schema directly
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

mongoose.model('User', userSchema);
