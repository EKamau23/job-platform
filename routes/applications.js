const express = require('express');
const Application = require('../models/Application');
const router = express.Router();

//Apply for a job
router.post('/', async (req, res) => {
    const applications = await
    Application.find().populate('jobId userId');
    res.json(applications);
});

module.exports = router;