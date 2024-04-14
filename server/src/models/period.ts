import mongoose from "mongoose";
import { PeriodType } from "../shared/type";


const PeriodSchema = new mongoose.Schema<PeriodType>({
    name: {
        type: String,
        required: true,
    },
    startDate: {
        type: Number,
        required: true,
    },
    startPeriod: {
        type: String,
        required: true,
    },
    endDate: {
        type: Number,
        required: true,
    },
    endPeriod: {
        type: String,
        required: true,
    },
    IconUrl: {
        type: String,
        required: true,
    },
    Era: {
        type: String,
        required: true,
    },
})

const Period = mongoose.model<PeriodType>("Period", PeriodSchema);
export default Period;