import mongoose from "mongoose";

const MONGOOSE_URI = process.env.MONGOOSE_URI

export async function cpnnect() {
const MONGOOSE_URI = process.env.MONGOOSE_URI
    await mongoose.connect()
    
}