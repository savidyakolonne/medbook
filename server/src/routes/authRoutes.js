import express from "express";
import {
  registerPatient,
  loginPatient,
  getProfile,
  verifyEmail,
  resendVerificationEmail,
  googleSignIn,
} from "../controllers/authController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerPatient);
router.post("/login", loginPatient);
router.post("/google", googleSignIn);
router.post("/resend-verification", resendVerificationEmail);
router.get("/verify-email", verifyEmail);
router.get("/profile", protect, getProfile);

export default router;