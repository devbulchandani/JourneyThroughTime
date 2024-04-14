import express from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import periodRoutes from "./routes/period"

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.COUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
}) 


mongoose.connect(process.env.MONGO_URL as string).then(() => {
    console.log("Connected to database")
})

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));

app.use('/period', periodRoutes)

app.listen(5001, () => {
    console.log("Server Port: 5001")
})

