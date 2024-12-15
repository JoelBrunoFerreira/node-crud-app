const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const allergyRoute = require("./src/routes/allergy.route.js");
const app = express();


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // <-- Allow form URL encoded


// Routes
app.get('/', (req, res) => {
    res.send('<h1>Node REST API</h1>');
})

app.use('/api/allergies', allergyRoute)


// DB connection
mongoose.connect (process.env.MONGODB_URI)
    .then (()  => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log('Connection Error: ', error);
    })


// Server is listening on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})