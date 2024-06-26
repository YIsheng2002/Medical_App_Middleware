const express = require('express');
const router = express.Router();
const patient = require('../controllers/patientController');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/:patientID', authenticateToken, patient.findByID);
router.post('/add', authenticateToken, patient.create);
router.patch('/update', authenticateToken, patient.update);
router.delete('/delete', authenticateToken, patient.deleted);

module.exports = router;