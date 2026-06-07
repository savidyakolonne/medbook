import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoute.js';
import doctorRoutes from './routes/doctorRoute.js';
import appointmentRoutes from './routes/appointmentRoute.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/appointments', appointmentRoutes);

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'MedBook API is running' });
});

export default app;
