import express from 'express'
import { getCurrentUser, loginUser, logoutUser, registerUser } from '../controller/authController.js';
import { isAuthenticatedUser } from '../middleware/auth.js';

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);

router.route("/me").get(isAuthenticatedUser, getCurrentUser)

export default router;