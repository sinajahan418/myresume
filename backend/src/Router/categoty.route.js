import express from "express";
import { createCategory, deleteCategory } from "../controllers/admin.controller.js";
import { categoryProducts, getAllCategories, getCategory } from "../controllers/category.controller.js";
import { protectRoute } from "../middleware/protect.js";
import { isAdmin } from "../middleware/isAdmin.js";


const router = express.Router();

router
.post('/cerate-category', protectRoute, isAdmin, createCategory)
.get('/', getAllCategories)
.get('/:id', getCategory)
.get('/:id/products', categoryProducts)


export default router;