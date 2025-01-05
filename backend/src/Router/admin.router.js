import express from "express";
import { createProduct, deleteCategory, deleteProduct, deleteUser, getAllUsers, getUser } from "../controllers/admin.controller.js";
import { protectRoute } from "../middleware/protect.js";
import { isAdmin } from "../middleware/isAdmin.js";
import upload from "../middleware/upload.js";


const router = express.Router();

router
.get('/', protectRoute, getAllUsers)
.get('/:id', protectRoute, isAdmin, getUser)
.delete('/:id', protectRoute, isAdmin, deleteUser)
.delete('/:id',  isAdmin, deleteCategory)
.delete('/:id', deleteProduct)
.post('/add-product', protectRoute, isAdmin, upload.single('image'), createProduct)

export default router;