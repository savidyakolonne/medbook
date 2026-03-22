import pool from "../config/db.js";

export const getAllDoctors = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, full_name, specialization, hospital, available_days,
              available_time, consultation_fee, bio, created_at
       FROM doctors
       ORDER BY id ASC`
    );

    return res.status(200).json(result.rows);
  } catch (error) {
    console.error("Get all doctors error:", error.message);
    return res.status(500).json({
      message: "Server error while fetching doctors",
    });
  }
};

export const getDoctorById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `SELECT id, full_name, specialization, hospital, available_days,
              available_time, consultation_fee, bio, created_at
       FROM doctors
       WHERE id = $1`,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Doctor not found",
      });
    }

    return res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Get doctor by ID error:", error.message);
    return res.status(500).json({
      message: "Server error while fetching doctor",
    });
  }
};

export const createDoctor = async (req, res) => {
  try {
    const {
      full_name,
      specialization,
      hospital,
      available_days,
      available_time,
      consultation_fee,
      bio,
    } = req.body;

    if (
      !full_name ||
      !specialization ||
      !hospital ||
      !available_days ||
      !available_time
    ) {
      return res.status(400).json({
        message: "Required doctor fields are missing",
      });
    }

    const result = await pool.query(
      `INSERT INTO doctors
       (full_name, specialization, hospital, available_days, available_time, consultation_fee, bio)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [
        full_name,
        specialization,
        hospital,
        available_days,
        available_time,
        consultation_fee || 0,
        bio || null,
      ]
    );

    return res.status(201).json({
      message: "Doctor created successfully",
      doctor: result.rows[0],
    });
  } catch (error) {
    console.error("Create doctor error:", error.message);
    return res.status(500).json({
      message: "Server error while creating doctor",
    });
  }
};

export const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      full_name,
      specialization,
      hospital,
      available_days,
      available_time,
      consultation_fee,
      bio,
    } = req.body;

    const existingDoctor = await pool.query(
      "SELECT * FROM doctors WHERE id = $1",
      [id]
    );

    if (existingDoctor.rows.length === 0) {
      return res.status(404).json({
        message: "Doctor not found",
      });
    }

    const currentDoctor = existingDoctor.rows[0];

    const result = await pool.query(
      `UPDATE doctors
       SET full_name = $1,
           specialization = $2,
           hospital = $3,
           available_days = $4,
           available_time = $5,
           consultation_fee = $6,
           bio = $7
       WHERE id = $8
       RETURNING *`,
      [
        full_name || currentDoctor.full_name,
        specialization || currentDoctor.specialization,
        hospital || currentDoctor.hospital,
        available_days || currentDoctor.available_days,
        available_time || currentDoctor.available_time,
        consultation_fee ?? currentDoctor.consultation_fee,
        bio ?? currentDoctor.bio,
        id,
      ]
    );

    return res.status(200).json({
      message: "Doctor updated successfully",
      doctor: result.rows[0],
    });
  } catch (error) {
    console.error("Update doctor error:", error.message);
    return res.status(500).json({
      message: "Server error while updating doctor",
    });
  }
};

export const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM doctors WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Doctor not found",
      });
    }

    return res.status(200).json({
      message: "Doctor deleted successfully",
    });
  } catch (error) {
    console.error("Delete doctor error:", error.message);
    return res.status(500).json({
      message: "Server error while deleting doctor",
    });
  }
};