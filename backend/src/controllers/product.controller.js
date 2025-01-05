import { Product } from "../models/product.model.js"
import APIFeature from "../utils/apiFeatures.js";
import { Comment } from "../models/comment.mode.js";


export const getAllProducts = async (req, res) => {
    try {

       const features = new APIFeature(Product.find(), req.query)
       .filter()
       .sort()
       .limitFields()
       .paginate();
       


       const products = await features.query;


        res.status(200).json(products);

    } catch(err) {
        console.log(err.message);
        res.status(500).json({ message: 'Error fetching products', err });
    }
}


export const getProduct = async (req, res) => {
    try {

        const { productId } = req.params;
   

        const product = await Product.findById(productId).populate('category', { name : 1});

        //get comment of product if its not null
        const comments = await Comment.find({ product: productId });
    
        res.status(200).json({
          status: 'success',
          data: { product, comments },
        });

    } catch(err) {
        console.log(err.message);
        res.status(500).json({ message: 'Error fetching products', err });
    }
}