// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth'); // Import the auth routes
const jobRoutes = require('./routes/jobs'); // Import the job routes

dotenv.config();

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

// Routes
app.use('/api/auth', authRoutes); // Adjust the path prefix to /api/auth
app.use('/api/jobs', jobRoutes);  // Adjust the path prefix to /api/jobs

app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running on port 5000');
});
