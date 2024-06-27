const {
    getAllDoctors,
    getDoctorById
} = require('../services/doctorService');

const findAll = async (req, res) => {
    try {
        console.log('Handling GET /api/doctor');
        const doctors = await getAllDoctors();
        console.log('Sending response:', doctors);
        res.status(200).json(doctors);
    } catch (error) {
        console.error('Error in findAll:', error);
        res.status(500).json({ error: error.message });
    }
};

const findByID = async (req, res) => {
    const { doctorID } = req.params;
    try {
        console.log(`Handling GET /api/doctor/${doctorID}`);
        const doctor = await getDoctorById(doctorID);
        console.log('Sending response:', doctor);
        res.status(200).json(doctor);
    } catch (error) {
        console.error('Error in findByID:', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    findAll,
    findByID
};