const {
    getAllAppointments,
    getAppointmentById,
    createAppointment,
    updateAppointment,
    deleteAppointment,
  } = require('../services/appointmentService');
  
  const findAll = async (req, res) => {
    try {
      console.log('Handling GET /api/appointments');
      const appointments = await getAllAppointments();
      console.log('Sending response:', appointments);
      res.status(200).json(appointments);
    } catch (error) {
      console.error('Error in findAll:', error);
      res.status(500).json({ error: error.message });
    }
  };
  
  const findByID = async (req, res) => {
    const { appointmentID } = req.params;
    try {
      console.log(`Handling GET /api/appointments/${appointmentID}`);
      const appointment = await getAppointmentById(appointmentID);
      console.log('Sending response:', appointment);
      res.status(200).json(appointment);
    } catch (error) {
      console.error('Error in findByID:', error);
      res.status(500).json({ error: error.message });
    }
  };
  
  const create = async (req, res) => {
    const appointmentData = req.body;
    try {
      console.log('Handling POST /api/appointments', appointmentData);
      const newAppointment = await createAppointment(appointmentData);
      console.log('Sending response:', newAppointment);
      res.status(201).json(newAppointment);
    } catch (error) {
      console.error('Error in create:', error);
      res.status(500).json({ error: error.message });
    }
  };
  
  const update = async (req, res) => {
    const { appointmentID } = req.params;
    const appointmentData = req.body;
    try {
      console.log(`Handling PATCH /api/appointments/${appointmentID}`, appointmentData);
      const updatedAppointment = await updateAppointment(appointmentID, appointmentData);
      console.log('Sending response:', updatedAppointment);
      res.status(200).json(updatedAppointment);
    } catch (error) {
      console.error('Error in update:', error);
      res.status(500).json({ error: error.message });
    }
  };
  
  const deleted = async (req, res) => {
    const { appointmentID } = req.params;
    try {
      console.log(`Handling DELETE /api/appointments/${appointmentID}`);
      await deleteAppointment(appointmentID);
      console.log('Sending response: No Content');
      res.status(202).send();
    } catch (error) {
      console.error('Error in delete:', error);
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    findAll,
    findByID,
    create,
    update,
    deleted
};
  