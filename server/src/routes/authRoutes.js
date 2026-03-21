const express = require("express");
const {
  registerPatient,
  loginPatient,
  getProfile,
} = require("../controller/authController.js");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerPatient);
router.post("/login", loginPatient);
router.get("/profile", protect, getProfile);

module.exports = router;