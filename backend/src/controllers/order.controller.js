import { Cart } from "../models/cart.mode.js";
import { Order } from "../models/order.model.js";


export const createOrder = async (req, res) => {
  try {
    const { userId } = req.body;



    const cart = await Cart.findOne({ user: userId }).populate('items.product');
if (!cart) {
    return res.status(404).json({ message: 'Cart not found' });
}
if (!cart.items || cart.items.length === 0) {
    console.log('Cart items:', cart.items); 
    return res.status(400).json({ message: 'Cart is empty' });
}


    for (const item of cart.items) {
        if (item.product.instock < item.quantity) {
            return res.status(400).json({
                message: `Insufficient stock for product: ${item.product.name}`
            });
        }
    }


    const totalAmount = cart.items.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
    );

    const order = new Order({
        user: userId,
        items: cart.items.map(item => ({
            product: item.product._id,
            quantity: item.quantity,
            price: item.product.price,
            
        })),
        totalAmount,
        status: 'Pending'
    });

    await order.save();


    for (const item of cart.items) {
        item.product.instock -= item.quantity;
        await item.product.save();
    }


    cart.items = [];
    await cart.save();

    res.status(201).json(order);
} catch (error) {
    res.status(500).json({ message: error.message });
}
}


export const getAllOrdersByUser = async (req, res) => {
    const { userId } = req.params;

    try {

      const orders = await Order.find({user : userId}).populate("items.product")
      if (orders.length === 0) {
        return res.status(404).json({
          status: 'fail',
          message: 'No orders found',
        });
      }

      res.status(200).json({
        status: 'success',
        data: {
          orders,
        },
      });

    }catch(err) {
      res.status(500).json({ message: err.message });
    }
};


export const deleteOrder = async ( req, res ) =>{

  const { orderId } = req.params;
  const userId = req.user.id;
  
  try {

    const order = await Order.findById({ userId});

    if(!order) {
      return res.status(404).json({success : false , message: "order not founded wit that id"})
    }

    await Order.findByIdAndDelete(orderId);
    res.status(200).json({success : true, message: 'order deleted successfully'})

  }catch(err) {

  }
}