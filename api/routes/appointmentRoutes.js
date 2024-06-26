const express = require('express');
const router = express.Router();
const appointment = require('../controllers/appointmentController');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/', authenticateToken, appointment.findAll);
router.post('/', authenticateToken, appointment.create);
router.get('/:appointmentID', authenticateToken, appointment.findByID);
router.patch('/:appointmentID', authenticateToken, appointment.update);
router.delete('/:appointmentID', authenticateToken, appointment.deleted);

module.exports = router;
