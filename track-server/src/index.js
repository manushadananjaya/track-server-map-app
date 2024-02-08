const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');


const app = express();

app.use(authRoutes);

const mongoUri = "mongodb+srv://manushadananjaya999:A3amGyjkv6AqI0Cs@cluster0.dpyghhm.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoUri);
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
    }
);
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo', err);
    }
);


app.get('/', (req, res) => {
    res.send( "hi there ");
    }
);

app.listen(5001, () => {
    console.log('Listening on port 3002');
    }
);