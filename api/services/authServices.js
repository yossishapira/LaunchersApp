import jwt from 'jsonwebtoken'
import User from '../models/User.js';
const JWT_SECRET = process.env.JWT_SECRET;

export function signToken(user){
    return jwt.sign(user,JWT_SECRET,{ expiresIn: '1h'})
}


export async function login(username,password){
    const user = await User.findOne({username})
    if(!user){
        throw new Error("invalid username or password")
    }
    if(user.password !==password){
        throw new Error("invalid username or password")
    }
    user.last_login = new Date()
    await user.save()
    return {user,token:signToken(user)}
    
}