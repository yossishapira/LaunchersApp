import mongoose from "mongoose";

const MONGOOSE_URI = process.env.MONGOOSE_URI

export async function connect() {
    await mongoose.connect(MONGOOSE_URI)
    
}