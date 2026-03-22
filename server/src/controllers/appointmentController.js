import pool from "../config/db.js";

export const createAppointment = async (req, res) => {
  try {
    const patient_id = req.user.id;
    const { doctor_id, appointment_date, appointment_time, notes } = req.body;

    if (!doctor_id || !appointment_date || !appointment_time) {
      return res.status(400).json({
        message: "Doctor, date, and time are required",
      });
    }

    const doctorCheck = await pool.query(
      "SELECT * FROM doctors WHERE id = $1",
      [doctor_id]
    );

    if (doctorCheck.rows.length === 0) {
      return res.status(404).json({
        message: "Doctor not found",
      });
    }

    const existingSlot = await pool.query(
      `SELECT * FROM appointments
       WHERE doctor_id = $1
       AND appointment_date = $2
       AND appointment_time = $3`,
      [doctor_id, appointment_date, appointment_time]
    );

    if (existingSlot.rows.length > 0) {
      return res.status(400).json({
        message: "This doctor is already booked for that date and time",
      });
    }

    const result = await pool.query(
      `INSERT INTO appointments
       (patient_id, doctor_id, appointment_date, appointment_time, notes)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [
        patient_id,
        doctor_id,
        appointment_date,
        appointment_time,
        notes || null,
      ]
    );

    return res.status(201).json({
      message: "Appointment booked successfully",
      appointment: result.rows[0],
    });
  } catch (error) {
    console.error("Create appointment error:", error.message);
    return res.status(500).json({
      message: "Server error while booking appointment",
    });
  }
};

export const getMyAppointments = async (req, res) => {
  try {
    const patient_id = req.user.id;

    const result = await pool.query(
      `SELECT 
          a.id,
          a.appointment_date,
          a.appointment_time,
          a.status,
          a.notes,
          a.created_at,
          d.id AS doctor_id,
          d.full_name AS doctor_name,
          d.specialization,
          d.hospital,
          d.consultation_fee
       FROM appointments a
       JOIN doctors d ON a.doctor_id = d.id
       WHERE a.patient_id = $1
       ORDER BY a.appointment_date ASC, a.appointment_time ASC`,
      [patient_id]
    );

    return res.status(200).json(result.rows);
  } catch (error) {
    console.error("Get my appointments error:", error.message);
    return res.status(500).json({
      message: "Server error while fetching appointments",
    });
  }
};

export const cancelAppointment = async (req, res) => {
  try {
    const patient_id = req.user.id;
    const { id } = req.params;

    const appointmentCheck = await pool.query(
      "SELECT * FROM appointments WHERE id = $1",
      [id]
    );

    if (appointmentCheck.rows.length === 0) {
      return res.status(404).json({
        message: "Appointment not found",
      });
    }

    const appointment = appointmentCheck.rows[0];

    if (appointment.patient_id !== patient_id) {
      return res.status(403).json({
        message: "You can only cancel your own appointments",
      });
    }

    const result = await pool.query(
      `UPDATE appointments
       SET status = 'cancelled'
       WHERE id = $1
       RETURNING *`,
      [id]
    );

    return res.status(200).json({
      message: "Appointment cancelled successfully",
      appointment: result.rows[0],
    });
  } catch (error) {
    console.error("Cancel appointment error:", error.message);
    return res.status(500).json({
      message: "Server error while cancelling appointment",
    });
  }
};