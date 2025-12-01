import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import patientRoutes from './routes/patients';
import appointmentRoutes from './routes/appointments';
import userRoutes from './routes/users';
import reportRoutes from './routes/reports';
import authRoutes from './routes/auth';

dotenv.config();

// Connect to Database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/patients', patientRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/users', userRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('PhysioTrack API is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});