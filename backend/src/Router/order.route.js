import express from "express";
import { createOrder, getAllOrdersByUser } from "../controllers/order.controller.js";
import { protectRoute } from "../middleware/protect.js";



const router = express.Router();

router
.post('/add-order', protectRoute, createOrder)
.get('/:userId', protectRoute, getAllOrdersByUser)


export default router;