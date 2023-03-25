import express from "express";
import {
  activateAccountByCode,
  forgotPassword,
  loggedInUser,
  login,
  loginAsAccount,
  passwordResetAction,
  register,
} from "../controllers/userController.js";

/// init routers
const router = express.Router();

// user auth router
router.post("/login", login);
router.post("/register", register);
router.get("/me", loggedInUser);
router.post("/code-activate/", activateAccountByCode);
router.post("/forgot-password/", forgotPassword);
router.get("/loginAsAccount/:token", loginAsAccount);
router.post("/forgot-password/:token", passwordResetAction);

// export default router
export default router;
