import { Category } from "../models/category.model.js"
import { Product } from "../models/product.model.js";


export const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json({
            status: 'success',
            results: categories.length,
            data: categories,
    })
    }catch(err) {
        console.log(err.message);
        res.status(500).json({success : false, message : 'intenal server error'})
        
    }
};

export const getCategory = async(req, res) => {

    const { id } = req.params;
    try {

        const category = await Category.findById(id);
        if(!category) {
            return res.status(404).json({success : false, message: 'category not found'})
        }
 
        res.status(200).json({
            status: 'success',
            data: category,
          });

    }catch(err) {
        console.log(err.message);
        res.status(500).json({success : false, message : 'intenal server error'})
    }
}


export const categoryProducts = async(req, res) => {
    const { id } = req.params; 
    try {

        const products = await Product.find({category: id}).populate('category');

        res.status(200).json({
            status: 'success',
            results: products.length,
            data: products,
        });

    } catch(err) {
        console.log(err.message);
        res.status(500).json({success : false, message : 'intenal server error'})
    }
}