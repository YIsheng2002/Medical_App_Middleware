const axios = require('axios');

const API_BASE_URL = 'http://127.0.0.1:3000/api'; // Replace with the base URL of the external API

const getAllAppointments = async () => {
  try {
    console.log('Requesting all appointments from external API');
    const response = await axios.get(`${API_BASE_URL}/appointments`);
    console.log('Received response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching all appointments:', error);
    throw error;
  }
};

const getAppointmentById = async (appointmentID) => {
  try {
    console.log(`Requesting appointment ${appointmentID} from external API`);
    const response = await axios.get(`${API_BASE_URL}/appointments/${appointmentID}`);
    console.log('Received response:', response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching appointment ${appointmentID}:`, error);
    throw error;
  }
};

const createAppointment = async (appointmentData) => {
  try {
    console.log('Creating new appointment in external API', appointmentData);
    const response = await axios.post(`${API_BASE_URL}/appointments`, appointmentData);
    console.log('Received response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating appointment:', error);
    throw error;
  }
};

const updateAppointment = async (appointmentID, appointmentData) => {
  try {
    console.log(`Updating appointment ${appointmentID} in external API`, appointmentData);
    const response = await axios.patch(`${API_BASE_URL}/appointments/${appointmentID}`, appointmentData);
    console.log('Received response:', response.data);
    return response.data;
  } catch (error) {
    console.error(`Error updating appointment ${appointmentID}:`, error);
    throw error;
  }
};

const deleteAppointment = async (appointmentID) => {
  try {
    console.log(`Deleting appointment ${appointmentID} in external API`);
    const response = await axios.delete(`${API_BASE_URL}/appointments/${appointmentID}`);
    console.log('Received response:', response.data);
    return response.data;
  } catch (error) {
    console.error(`Error deleting appointment ${appointmentID}:`, error);
    throw error;
  }
};

module.exports = {
  getAllAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  deleteAppointment,
};
