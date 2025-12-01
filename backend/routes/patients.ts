import express from 'express';
import Patient from '../models/Patient';

const router = express.Router();

// GET all patients
router.get('/', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// POST new patient
router.post('/', async (req, res) => {
  const patient = new Patient(req.body);
  try {
    const newPatient = await patient.save();
    res.status(201).json(newPatient);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});

export default router;