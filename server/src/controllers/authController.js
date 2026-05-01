import bcrypt from "bcrypt";
import { OAuth2Client } from "google-auth-library";
import pool from "../config/db.js";
import generateToken from "../utils/generateToken.js";
import generateVerificationToken from "../utils/generateVerificationToken.js";
import sendEmail from "../utils/sendEmail.js";

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

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
    const verificationToken = generateVerificationToken();
    const verificationExpiry = new Date(Date.now() + 1000 * 60 * 60 * 24);

    const result = await pool.query(
      `INSERT INTO patients
       (full_name, email, password_hash, phone, is_verified, verification_token, verification_token_expires_at, auth_provider)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING id, full_name, email, phone, role, is_verified`,
      [
        full_name,
        email,
        password_hash,
        phone || null,
        false,
        verificationToken,
        verificationExpiry,
        "local",
      ]
    );

    const verifyLink = `${process.env.CLIENT_URL}/verify-email?token=${verificationToken}`;

    await sendEmail({
      to: email,
      subject: "Verify your MediBook account",
      html: `
        <h2>Welcome to MediBook</h2>
        <p>Please verify your email by clicking the link below:</p>
        <a href="${verifyLink}">${verifyLink}</a>
        <p>This link expires in 24 hours.</p>
      `,
    });

    return res.status(201).json({
      message: "Registration successful. Please verify your email.",
      user: result.rows[0],
    });
  } catch (error) {
    console.error("Register error:", error.message);
    return res.status(500).json({
      message: "Server error during registration",
    });
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.query;

    if (!token) {
      return res.status(400).json({
        message: "Verification token is required",
      });
    }

    const result = await pool.query(
      `SELECT * FROM patients
       WHERE verification_token = $1
       AND verification_token_expires_at > NOW()`,
      [token]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({
        message: "Invalid or expired verification token",
      });
    }

    const user = result.rows[0];

    await pool.query(
      `UPDATE patients
       SET is_verified = true,
           verification_token = NULL,
           verification_token_expires_at = NULL
       WHERE id = $1`,
      [user.id]
    );

    return res.status(200).json({
      message: "Email verified successfully",
    });
  } catch (error) {
    console.error("Verify email error:", error.message);
    return res.status(500).json({
      message: "Server error during email verification",
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

    if (user.auth_provider === "google") {
      return res.status(400).json({
        message: "This account uses Google Sign-In",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    if (!user.is_verified) {
      return res.status(403).json({
        message: "Please verify your email before logging in",
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
        is_verified: user.is_verified,
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

export const googleSignIn = async (req, res) => {
  try {
    const { credential } = req.body;

    if (!credential) {
      return res.status(400).json({
        message: "Google credential is required",
      });
    }

    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    const google_id = payload.sub;
    const email = payload.email;
    const full_name = payload.name || "Google User";

    let userResult = await pool.query(
      "SELECT * FROM patients WHERE email = $1",
      [email]
    );

    let user;

    if (userResult.rows.length === 0) {
      const insertResult = await pool.query(
        `INSERT INTO patients
         (full_name, email, google_id, is_verified, auth_provider, role)
         VALUES ($1, $2, $3, $4, $5, $6)
         RETURNING *`,
        [full_name, email, google_id, true, "google", "patient"]
      );

      user = insertResult.rows[0];
    } else {
      user = userResult.rows[0];

      if (!user.google_id) {
        const updateResult = await pool.query(
          `UPDATE patients
           SET google_id = $1,
               auth_provider = 'google',
               is_verified = true
           WHERE id = $2
           RETURNING *`,
          [google_id, user.id]
        );

        user = updateResult.rows[0];
      }
    }

    const token = generateToken(user);

    return res.status(200).json({
      message: "Google sign-in successful",
      user: {
        id: user.id,
        full_name: user.full_name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        is_verified: user.is_verified,
      },
      token,
    });
  } catch (error) {
    console.error("Google sign-in error:", error.message);
    return res.status(401).json({
      message: "Invalid Google sign-in",
    });
  }
};

export const resendVerificationEmail = async (req, res) => {
  try {
    const { email } = req.body;

    const result = await pool.query(
      "SELECT * FROM patients WHERE email = $1",
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const user = result.rows[0];

    if (user.is_verified) {
      return res.status(400).json({
        message: "Email is already verified",
      });
    }

    const verificationToken = generateVerificationToken();
    const verificationExpiry = new Date(Date.now() + 1000 * 60 * 60 * 24);

    await pool.query(
      `UPDATE patients
       SET verification_token = $1,
           verification_token_expires_at = $2
       WHERE id = $3`,
      [verificationToken, verificationExpiry, user.id]
    );

    const verifyLink = `${process.env.CLIENT_URL}/verify-email?token=${verificationToken}`;

    await sendEmail({
      to: user.email,
      subject: "Verify your MediBook account",
      html: `
        <h2>Email Verification</h2>
        <p>Click below to verify your email:</p>
        <a href="${verifyLink}">${verifyLink}</a>
      `,
    });

    return res.status(200).json({
      message: "Verification email sent again",
    });
  } catch (error) {
    console.error("Resend verification error:", error.message);
    return res.status(500).json({
      message: "Server error while resending verification email",
    });
  }
};

export const getProfile = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, full_name, email, phone, role, is_verified, auth_provider, created_at
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