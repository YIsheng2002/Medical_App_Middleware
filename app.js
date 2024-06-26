const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const connectDB = require('./api/db/db');
const authRoutes = require('./api/routes/authRoute');
const appointmentRoutes = require('./api/routes/appointmentRoutes'); // Import the appointment routes
const patientRoutes = require('./api/routes/patientRoutes');
const medicalRecordRoutes = require('./api/routes/medicalRecordRoutes');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.use('/api', authRoutes);
app.use('/api/appointments', appointmentRoutes); // Use the appointment routes
app.use('/patient', patientRoutes);
app.use('/medicalRecord', medicalRecordRoutes);

connectDB();

module.exports = app;
