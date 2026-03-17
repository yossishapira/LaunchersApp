import User from "../models/User.js";

export async function createUser({username, password, email, user_type}) {
     const isInType = await User.findOne({ user_type })
            if (isInType) {
                throw new Error ("User type already exists")
            }
    const newUser = await User.create({
        username,
        password,
        email,
        user_type

    })
    return newUser
}

export async function getAllUsers() {
    const users = await User.find({})
    return users.map((user) => ({
        id: user._id,
        username: user.username,
        email: user.email,
        user_type: user.user_type,
        last_login: user.last_login,

    }))

}

export async function updateUser(id, updateData) {
    const user = await User.findByIdAndUpdate(id, updateData, {new:true})
    if (!user) return "Not found"
    return {
        id: user._id,
        username: user.username,
        email: user.email,
        user_type: user.user_type,
        last_login: user.last_login,
    }
}

export async function deleteUser(id){
    const user = await User.findByIdAndDelete(id) 
    if(!user) return "Not found"
    return user
}
