const express = require('express');
const router = express.Router();
const doctor = require('../controllers/doctorController');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/', authenticateToken, doctor.findAll);
router.get('/:doctorID', authenticateToken, doctor.findByID);

module.exports = router;