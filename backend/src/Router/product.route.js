import express from "express";

import { getAllProducts, getProduct } from "../controllers/product.controller.js";
import { createCommentForProduct } from "../controllers/comment.controller.js";
import { protectRoute } from "../middleware/protect.js";

const router = express.Router();

router
.get('/', getAllProducts)
.get('/:productId', getProduct)
.post('/:productId/comments', protectRoute, createCommentForProduct)






export default router;