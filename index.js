const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const serviceRoutes = require('./routes/serviceRoutes');
const dbConfig = require('./config/db');

const app = express();

// Middleware
app.use(bodyParser.json());

// Use the service routes
app.use('/api', serviceRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
