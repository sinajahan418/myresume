import mongoose from "mongoose";


export const connectDB = async (req, res) => {
    try {

        await mongoose.connect(process.env.MONGO_URL);
        console.log('Database connected');
        
    }catch(err) {
        console.log(err.message);
        res.status(500).json('internal server error');
    }
}