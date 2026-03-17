import mongoose from "mongoose";
import { type } from "node:os";

const launchersSchema = new mongoose.Schema({
    city:{type:String,required:true},
    rocketType:{type:String,required:true},
    latitude:{type:Number,required:true},
    longitude:{type:Number,required:true},
    name:{type:String,required:true},
    destroyed:{type:Boolean,default:false}
},
{timestamps:true}
)

export default mongoose.model('Launchers',launchersSchema)