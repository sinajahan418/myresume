import { Category } from "../models/category.model.js";
import { Order } from "../models/order.model.js";
import { Product } from "../models/product.model.js";
import { User } from "../models/user.model.js";
import APIFeature from "../utils/apiFeatures.js";

export const createProduct = async (req, res) => {
    const { name, description, price, category, instock, image } = req.body;

    const product = await Product.create({
        name,
        description,
        price,
        category,
        instock,
        image : req.file ? `/uploads/${req.file.filename}` : null
    })

    res.status(201).json(product)
}


//delete image should add after handle with cloudinary
export const deleteProduct = async (req , res) => {
    const { id } = req.params;

    try {

        const product = await Product.findByIdAndDelete(id);
        if(!product)  {
            return res.status(404).json({success : false , message : 'product not found'});
        };

        res.status(200).json({success: true, message: 'product deleted successfully'})

    }catch(err) {


    }
};


//category part
export const createCategory = async(req, res) => {
    const { name, description } = req.body;

    try {

        const category = await Category.create({ name , description });

        res.status(201).json({
            status: 'success',
            data: category,
          });

    }catch(err) {

    }
}

export const deleteCategory = async(req, res) => {
    
    const { id } = req.params;

    const category = await Category.findByIdAndDelete(id);
    if(!category) {
        return res.status(404).json('category not founded')
    }

    res.status(200).json({success: true, data : null})
}




//All Orders
export const getAllOrders = async (req, res) => {
    try {

        const orders = await Order.find({}).populate('items.product', 'name price').populate('user', 'username email');
        if(!orders) {
            return res.status(404).json({success : false, message: "no order found"})
        }

        res.status(200).json({success: true, data : orders})

    }catch(err) {

    }
};



export const getAllUsers = async(req, res) => {
    try {
        const features = new APIFeature(User.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
        
 
 
        const users = await features.query;

        res.status(200).json({success : true, data : users})

    }catch(err) {

    }
};



export const getUser = async (req, res) => {
    const { id } = req.params;

    try {

        const user = await User.findById(id).select('-password');
        if(!user) {
            return res.status(404).json({success : false, message : 'no user founded'})
        }

        res.status(200).json({success : true , data : user})

    }catch(err) {

    }
};


export const deleteUser = async(req, res) => {
    const { id } = req.params;
    try {

        const user = await User.findByIdAndDelete(id);
        if(!user) {
            return res.status(404).json({success : false, message : 'no user founded'})
        }

        res.status(200).json({success : true , data : null})

    }catch(err) {

    }
}