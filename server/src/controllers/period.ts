import { Request, Response } from "express"
import { v2 as cloudinary } from 'cloudinary';
import Period from "../models/period";
import { PeriodType } from "../shared/type";

export const addPeriod = async (req: Request, res: Response) => {
    try {
        // console.log("function called")
        const picture = req.file as Express.Multer.File
        const newPeriod: PeriodType = req.body

        if (picture) {
            const iconUrl = await uploadImage(picture);

            newPeriod.IconUrl = iconUrl;
        } else {
            // Handle the case where picture is not provided, e.g., provide a default value for IconUrl
            newPeriod.IconUrl = "https://res.cloudinary.com/dnitlc4zr/image/upload/v1712911487/man_kxy1oo.png";
        }

        const period = new Period(newPeriod)
        await period.save();
        res.status(201).send(period);
    } catch (err: any) {
        console.log("Error creating period:", err.message)
        res.status(500).json({ message: "Error adding period" });
    }
}



async function uploadImage(picture: Express.Multer.File) {
    try {
        const uploadPromise = async () => {
            const b64 = Buffer.from(picture.buffer).toString('base64');
            let dataURI = "data:" + picture.mimetype + ";base64," + b64;
            const cloudinaryResponse = await cloudinary.uploader.upload(dataURI);
            return cloudinaryResponse.url;
        };

        const iconUrl = await uploadPromise();
        return iconUrl;
    } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
        throw error;
    }
}

export const getPeriod = async (req: Request, res: Response) => {
    try {
        const era = req.params.era.replace(/\s+/g, '').toLowerCase();

        const periods = await Period.find({ Era: era });

        res.json(periods);
    } catch (err: any) {
        console.log("Error fetching period:", err.message);
        res.status(500).json({ message: "Error fetching periods" });
    }
}