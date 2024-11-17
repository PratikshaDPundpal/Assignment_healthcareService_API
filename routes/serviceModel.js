const mongoose = require('mongoose');

// Define the schema for healthcare services
const ServiceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true }
});

// Export the model
module.exports = mongoose.model('Service', ServiceSchema);
