import express from "express";
import { addToCart, deleteFromCart, productsInCart, deleteAllFromCart, updateQuantity } from "../controllers/cart.controller.js";

const router = express.Router();

router
.post('/add-to-cart', addToCart)
.get('/:userId', productsInCart)
.patch('/:userId', updateQuantity)
.delete('/:userId', deleteAllFromCart)
.delete('/:userId/:productId', deleteFromCart)

export default router;