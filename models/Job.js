const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    requirements: { type: String, required: true },
    company: { type: String, required: true },
    status: { type: String, enum: ['active', 'expired'], default: 'active' },
});

module.exports = mongoose.model('Job', jobSchema);