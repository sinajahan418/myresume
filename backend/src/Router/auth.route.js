import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";
import { forgotPassword, resetPassword, updatePassword, uploadProfilePicture } from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/protect.js";
import upload from "../middleware/upload.js";


const router = express.Router();

router
.post('/signup', signup)
.post('/login', login)
.post('/logout', logout)
.post('/forgot-password', forgotPassword)
.post('/reset-password/:token', resetPassword)
.put('/update-password', protectRoute, updatePassword )
.post('/upload', protectRoute, upload.single('profilePic'), uploadProfilePicture)


export default router;