const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
    resume: { type: String, required: true },
    coverLetter: { type: String },
    status: { type: String, enum: ['under review', 'accepted', 'rejected'], default: 'under review' },
});

module.exports = mongoose.model('Application',applicationSchema);