const express = require('express');
const router = express.Router();
const medicalRecord = require('../controllers/medicalRecordController');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/:patientID', authenticateToken, medicalRecord.findByPatientID);
router.get('/:patientID/:medicalRecordID', authenticateToken, medicalRecord.findByID);
router.post('/:patientID/add', authenticateToken, medicalRecord.create);
router.patch('/:patientID/:medicalRecordID/update', authenticateToken, medicalRecord.update);
router.delete('/:medicalRecordID/delete', authenticateToken, medicalRecord.deleted);

module.exports = router;