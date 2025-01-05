import { Comment } from "../models/comment.mode.js";

export const createCommentForProduct = async (req, res) => {
    const { productId } = req.params;
    const { text, email } = req.body;

    const comment = await Comment.create({text, email , product: productId});
    res.status(201).json({ status: 'success', data: comment });
}