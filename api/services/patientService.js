const axios = require('axios');

const API_BASE_URL = 'http://localhost:8080/patient'; // Replace with the base URL of the external API

const getPatientById = async (patientID) => {
  try {
    console.log(`Requesting patient ${patientID} from external API`);
    const response = await axios.get(`${API_BASE_URL}/${patientID}`);
    console.log('Received response:', response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching patient ${patientID}:`, error);
    throw error;
  }
};

const createPatient = async (patientData) => {
  try {
    console.log('Creating new patient in external API', patientData);
    const response = await axios.post(`${API_BASE_URL}/add`, patientData);
    console.log('Received response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating patient:', error);
    throw error;
  }
};

const updatePatient = async (patientData) => {
  try {
    console.log(`Updating patient in external API`, patientData);
    const response = await axios.patch(`${API_BASE_URL}/update`, patientData);
    console.log('Received response:', response.data);
    return response.data;
  } catch (error) {
    console.error(`Error updating patient:`, error);
    throw error;
  }
};

const deletePatient = async (patientID) => {
  try {
    console.log(`Deleting patient ${patientID} in external API`);
    const response = await axios.delete(`${API_BASE_URL}/delete/${patientID}`);
    console.log('Received response:', response.data);
    return response.data;
  } catch (error) {
    console.error(`Error deleting patient:`, error);
    throw error;
  }
};

module.exports = {
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
};
