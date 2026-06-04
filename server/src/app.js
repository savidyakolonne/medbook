import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoute.js';
import doctorsRoutes from './routes/doctorsRoute.js';
import appointmentsRoutes from './routes/appointmentsRoute.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/doctors', doctorsRoutes);
app.use('/appointments', appointmentsRoutes);

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'MedBook API is running' });
});

export default app;
