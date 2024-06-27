const axios = require('axios');
const { get } = require('http');

const API_BASE_URL = 'http://localhost:8080/doctor'; // Replace with the base URL of the external API

const getDoctorById = async (doctorID) => {
  try {
    console.log(`Requesting doctor ${doctorID} from external API`);
    const response = await axios.get(`${API_BASE_URL}/${doctorID}`);
    console.log('Received response:', response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching doctor ${doctorID}:`, error);
    throw error;
  }
};

const getAllDoctors = async () => {
    try {
        console.log('Requesting all doctors from external API');
        const response = await axios.get(`${API_BASE_URL}/`);
        console.log('Received response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching all doctors:', error);
        throw error;
    }
};

module.exports = {
    getDoctorById,
    getAllDoctors
}