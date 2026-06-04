import { Router } from 'express';
import prisma from '../config/db.js';
import authMiddleware from '../middlewares/auth.js';

const router = Router();

// POST /appointments — book an appointment
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { doctor_id, appointment_date, appointment_time, notes } = req.body;

    if (!doctor_id || !appointment_date || !appointment_time) {
      return res.status(400).json({ message: 'Doctor, date and time are required' });
    }

    const doctor = await prisma.doctor.findUnique({ where: { id: doctor_id } });
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    const appointment = await prisma.appointment.create({
      data: {
        user_id: req.user.id,
        doctor_id,
        appointment_date,
        appointment_time,
        notes: notes || null,
      },
    });

    res.status(201).json({ message: 'Appointment booked successfully', appointment });
  } catch (error) {
    console.error('Book appointment error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /appointments/my — get logged-in user's appointments
router.get('/my', authMiddleware, async (req, res) => {
  try {
    const appointments = await prisma.appointment.findMany({
      where: { user_id: req.user.id },
      include: {
        doctor: {
          select: {
            full_name: true,
            specialization: true,
            hospital: true,
          },
        },
      },
      orderBy: { created_at: 'desc' },
    });

    // Flatten doctor info to match client expectations
    const result = appointments.map((a) => ({
      id: a.id,
      doctor_name: a.doctor.full_name,
      specialization: a.doctor.specialization,
      hospital: a.doctor.hospital,
      appointment_date: a.appointment_date,
      appointment_time: a.appointment_time,
      notes: a.notes,
      status: a.status,
    }));

    res.json(result);
  } catch (error) {
    console.error('Get appointments error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// PUT /appointments/:id/cancel — cancel an appointment
router.put('/:id/cancel', authMiddleware, async (req, res) => {
  try {
    const appointmentId = parseInt(req.params.id);

    const appointment = await prisma.appointment.findUnique({
      where: { id: appointmentId },
    });

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    if (appointment.user_id !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    await prisma.appointment.update({
      where: { id: appointmentId },
      data: { status: 'cancelled' },
    });

    res.json({ message: 'Appointment cancelled' });
  } catch (error) {
    console.error('Cancel appointment error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
