import prisma from '../config/db.js';

export const bookAppointment = async (req, res) => {
  try {
    const { doctor_id, appointment_date, appointment_time, notes } = req.body;

    const doctor = await prisma.doctor.findUnique({
      where: { id: doctor_id }
    });

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    const appointment = await prisma.appointment.create({
      data: {
        user_id: req.user.id,
        doctor_id,
        appointment_date,
        appointment_time,
        notes: notes || null
      }
    });

    res.status(201).json({
      message: 'Appointment booked successfully',
      appointment
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getMyAppointments = async (req, res) => {
  try {
    const appointments = await prisma.appointment.findMany({
      where: { user_id: req.user.id },
      include: {
        doctor: true
      },
      orderBy: { created_at: 'desc' }
    });

    res.json(
      appointments.map(a => ({
        id: a.id,
        doctor_name: a.doctor.full_name,
        specialization: a.doctor.specialization,
        hospital: a.doctor.hospital,
        appointment_date: a.appointment_date,
        appointment_time: a.appointment_time,
        status: a.status
      }))
    );
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const cancelAppointment = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const appointment = await prisma.appointment.findUnique({
      where: { id }
    });

    if (!appointment) {
      return res.status(404).json({ message: 'Not found' });
    }

    if (appointment.user_id !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    await prisma.appointment.update({
      where: { id },
      data: { status: 'cancelled' }
    });

    res.json({ message: 'Cancelled' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};