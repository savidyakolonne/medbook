import { Router } from 'express';
import prisma from '../config/db.js';

const router = Router();

// GET /doctors — list all doctors
router.get('/', async (req, res) => {
  try {
    const doctors = await prisma.doctor.findMany({
      orderBy: { full_name: 'asc' },
    });
    res.json(doctors);
  } catch (error) {
    console.error('Get doctors error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /doctors/:id — get a single doctor
router.get('/:id', async (req, res) => {
  try {
    const doctor = await prisma.doctor.findUnique({
      where: { id: parseInt(req.params.id) },
    });

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    res.json(doctor);
  } catch (error) {
    console.error('Get doctor error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
