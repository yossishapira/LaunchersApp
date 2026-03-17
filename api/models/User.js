import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{type:String,requird:true ,unique:true},
    password:{type:String,requird:true},
    email:{type:String,requird:true, unique:true},
    type_user:{type:Number,requird:true,unique:true},
    last_login:{type:String}
},
{timstamps:true}
)

export default mongoose.model('users',userSchema)