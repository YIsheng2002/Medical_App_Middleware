const {
    createMedicalRecord,
    getMedicalRecordByPatientId,
    getMedicalRecordById,
    deleteMedicalRecord,
    updateMedicalRecord
} = require('../services/medicalRecordService');

const findByPatientID = async (req, res) => {
    const { patientID } = req.params;
    try {
      console.log(`Handling GET medicalRecord/${patientID}`);
      const medicalRecord = await getMedicalRecordByPatientId(patientID);
      console.log('Sending response:', medicalRecord);
      res.status(200).json(medicalRecord);
    } catch (error) {
      console.error('Error in findByPatientID:', error);
      res.status(500).json({ error: error.message });
    }
};

const findByID = async (req, res) => {
    const { patientID, medicalRecordID } = req.params;
    try {
      console.log(`Handling GET medicalRecord/${patientID}/${medicalRecordID}`);
      const medicalRecord = await getMedicalRecordById(patientID, medicalRecordID);
      console.log('Sending response:', medicalRecord);
      res.status(200).json(medicalRecord);
    } catch (error) {
      console.error('Error in findByID:', error);
      res.status(500).json({ error: error.message });
    }
};

const create = async (req, res) => {
    const medicalRecordData = req.body;
    try {
      console.log('Handling POST /medicalRecord/add', medicalRecordData);
      const newMedicalRecord = await createMedicalRecord(medicalRecordData);
      console.log('Sending response:', newMedicalRecord);
      res.status(201).json(newMedicalRecord);
    } catch (error) {
      console.error('Error in create:', error);
      res.status(500).json({ error: error.message });
    }
};

const update = async (req, res) => {
    const { patientID, medicalRecordID } = req.params;
    const medicalRecordData = req.body;
    try {
      console.log(`Handling PATCH /medicalRecord/${patientID}/${medicalRecordID}`, medicalRecordData);
      const updatedMedicalRecord = await updateMedicalRecord(patientID, medicalRecordID, medicalRecordData);
      console.log('Sending response:', updatedMedicalRecord);
      res.status(200).json(updatedMedicalRecord);
    } catch (error) {
      console.error('Error in update:', error);
      res.status(500).json({ error: error.message });
    }
};

const deleted = async (req, res) => {
    const { patientID, medicalRecordID } = req.params;
    try {
      console.log(`Handling DELETE /medicalRecord/${patientID}/${medicalRecordID}/delete`);
      await deleteMedicalRecord(patientID, medicalRecordID);
      console.log('Sending response: No Content');
      res.status(202).send();
    } catch (error) {
      console.error('Error in delete:', error);
      res.status(500).json({ error: error.message });
    }
};

module.exports = {
    findByPatientID,
    findByID,
    create,
    update,
    deleted
};