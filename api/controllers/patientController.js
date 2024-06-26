const {
    getPatientById,
    createPatient,
    updatePatient,
    deletePatient,
} = require('../services/patientService');
  
  
const findByID = async (req, res) => {
    const { patientID } = req.params;
    try {
      console.log(`Handling GET patient/${patientID}`);
      const patient = await getPatientById(patientID);
      console.log('Sending response:', patient);
      res.status(200).json(patient);
    } catch (error) {
      console.error('Error in findByID:', error);
      res.status(500).json({ error: error.message });
    }
};
  
const create = async (req, res) => {
    const patientData = req.body;
    try {
      console.log('Handling POST /patient/add', patientData);
      const newpatient = await createPatient(patientData);
      console.log('Sending response:', newpatient);
      res.status(201).json(newpatient);
    } catch (error) {
      console.error('Error in create:', error);
      res.status(500).json({ error: error.message });
    }
};
  
const update = async (req, res) => {
    const patientData = req.body;
    try {
      console.log(`Handling PATCH /patient/update`, patientData);
      const updatedpatient = await updatePatient(patientID, patientData);
      console.log('Sending response:', updatedpatient);
      res.status(200).json(updatedpatient);
    } catch (error) {
      console.error('Error in update:', error);
      res.status(500).json({ error: error.message });
    }
};
  
const deleted = async (req, res) => {
    const patientData = req.body;
    try {
      console.log(`Handling DELETE /patient/delete`);
      await deletePatient(patientData);
      console.log('Sending response: No Content');
      res.status(202).send();
    } catch (error) {
      console.error('Error in delete:', error);
      res.status(500).json({ error: error.message });
    }
};
  
module.exports = {
    findByID,
    create,
    update,
    deleted
};
  