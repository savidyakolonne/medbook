import bcrypt from "bcrypt";
import pool from "../config/db.js";
import generateToken from "../utils/generateToken.js";

export const registerPatient = async (req, res) => {
  try {
    const { full_name, email, password, phone } = req.body;

    if (!full_name || !email || !password) {
      return res.status(400).json({
        message: "Full name, email, and password are required",
      });
    }

    const existingUser = await pool.query(
      "SELECT * FROM patients WHERE email = $1",
      [email]
    );

    if (existingUser.rows.length > 0) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const password_hash = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO patients (full_name, email, password_hash, phone)
       VALUES ($1, $2, $3, $4)
       RETURNING id, full_name, email, phone, role`,
      [full_name, email, password_hash, phone || null]
    );

    const user = result.rows[0];
    const token = generateToken(user);

    return res.status(201).json({
      message: "Patient registered successfully",
      user,
      token,
    });
  } catch (error) {
    console.error("Register error:", error.message);
    return res.status(500).json({
      message: "Server error during registration",
    });
  }
};

export const loginPatient = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const result = await pool.query(
      "SELECT * FROM patients WHERE email = $1",
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const token = generateToken(user);

    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        full_name: user.full_name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.error("Login error:", error.message);
    return res.status(500).json({
      message: "Server error during login",
    });
  }
};

export const getProfile = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, full_name, email, phone, role, created_at
       FROM patients
       WHERE id = $1`,
      [req.user.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Profile error:", error.message);
    return res.status(500).json({
      message: "Server error while fetching profile",
    });
  }
};