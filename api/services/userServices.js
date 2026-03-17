import User from "../models/User.js";

export async function createUser(username,password,email,user_type) {
    const newUser = await User.create({
        username,
        password,
        email,
        user_type
        
    })
    return newUser
}
