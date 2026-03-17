import Users from "../models/Users.js";

export async function createUser(username,password,email,user_type) {
    const newUser = await Users.create({
        username,
        password,
        email,
        user_type
        
    })
    return newUser
}
