import express from "express";

import {
  registerUser,
  loginUser,
  getProfile,
  forgotPassword,
} from "../controllers/authController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Profile
router.get("/profile", protect, getProfile);

// Forgot Password
router.post("/forgot-password", forgotPassword);

export default router;
