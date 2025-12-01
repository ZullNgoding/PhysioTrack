import express from 'express';
import Appointment from '../models/Appointment';

const router = express.Router();

// GET all appointments (with populated patient data)
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find().populate('patientId', 'name avatar');
    res.json(appointments);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// POST new appointment
router.post('/', async (req, res) => {
  const appointment = new Appointment(req.body);
  try {
    const newAppointment = await appointment.save();
    res.status(201).json(newAppointment);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});

export default router;