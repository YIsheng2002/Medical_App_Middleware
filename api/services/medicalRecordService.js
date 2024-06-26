const axios = require('axios');

const API_BASE_URL = 'http://localhost:8080/medicalRecord'; // Replace with the base URL of the external API

const createMedicalRecord = async (medicalRecordData) => {
    try {
        console.log('Creating new medical record in external API', medicalRecordData);
        const response = await axios.post(`${API_BASE_URL}/add`, medicalRecordData);
        console.log('Received response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating medical record:', error);
        throw error;
    }
};

const getMedicalRecordByPatientId = async (patientID) => {
    try {
        console.log(`Requesting medical record for patient ${patientID} from external API`);
        const response = await axios.get(`${API_BASE_URL}/${patientID}`);
        console.log('Received response:', response.data);
        return response.data;
    } catch (error) {
        console.error(`Error fetching medical record for patient ${patientID}:`, error);
        throw error;
    }
};

const getMedicalRecordById = async ( patientID, medicalRecordID) => {
    try {
        console.log(`Requesting medical record ${medicalRecordID} from external API`);
        const response = await axios.get(`${API_BASE_URL}/${patientID}/${medicalRecordID}`);
        console.log('Received response:', response.data);
        return response.data;
    } catch (error) {
        console.error(`Error fetching medical record ${medicalRecordID}:`, error);
        throw error;
    }
};

const deleteMedicalRecord = async (patientID, medicalRecordID) => {
    try {
        console.log(`Deleting medical record ${medicalRecordID} in external API`);
        const response = await axios.delete(`${API_BASE_URL}/${patientID}/${medicalRecordID}/delete`);
        console.log('Received response:', response.data);
        return response.data;
    } catch (error) {
        console.error(`Error deleting medical record ${medicalRecordID}:`, error);
        throw error;
    }
};

const updateMedicalRecord = async (patientID, medicalRecordID, medicalRecordData) => {
    try {
        console.log(`Updating medical record ${medicalRecordID} in external API`, medicalRecordData);
        const response = await axios.patch(`${API_BASE_URL}/${patientID}/${medicalRecordID}/update`, medicalRecordData);
        console.log('Received response:', response.data);
        return response.data;
    } catch (error) {
        console.error(`Error updating medical record ${medicalRecordID}:`, error);
        throw error;
    }
};

module.exports = {
    createMedicalRecord,
    getMedicalRecordByPatientId,
    getMedicalRecordById,
    deleteMedicalRecord,
    updateMedicalRecord,
};