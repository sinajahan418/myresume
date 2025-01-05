import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';

import authRoutes from './Router/auth.route.js';
import productRoutes from './Router/product.route.js';
import categoryRoutes from './Router/categoty.route.js';
import cartRoutes from './Router/cart.route.js';
import orderRoutes from './Router/order.route.js';
import adminRouter from './Router/admin.router.js';
import { connectDB } from "./lib/db.js";
import { fileURLToPath } from 'url';

const app = express();
dotenv.config();

app.use(cors({
    origin: 'http://localhost:3000', // دامنه فرانت‌اند شما
    credentials: true // این گزینه برای ارسال کوکی‌ها ضروری است
}
));
app.use(helmet());
app.use(express.json());
app.use(cookieParser());


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Port
const port = process.env.PORT || 5000;



//Root Routs
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/cart', cartRoutes);
app.use('/api/v1/order', orderRoutes);
app.use('/api/v1/admin', adminRouter)







app.listen(port , () => {
    console.log(`app running on port ${port}`);
    
    //connect DB
    connectDB();
})