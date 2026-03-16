import mongoose from "mongoose";

const launchersSchema = new mongoose.Schema({
    city:{type:String,requird:true},
    rocketType:{type:String,requird:true},
    latitude:{type:Number,requird:true},
    longitude:{type:Number,requird:true},
    name:{type:String,requird:true}
},
{timstamps:true}
)

export default mongoose.model('Launchers',launchersSchema)