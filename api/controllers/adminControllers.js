import * as userServices from '../services/userServices.js'

export async function createUsers(req, res) {
    try {
        const { username, password, email, user_type } = req.body
        if (!username || !password || !email || !user_type) {
            return res.status(400).json({ eroor: "No standard fields sent" })
        }
       
        const newUser = await userServices.createUser({
            username,
            password,
            email,
            user_type
    })
        res.status(201).json(newUser)
    }
    catch (err) {
        res.status(400).json(err)
    }
}

export async function getAllUsers(req, res) {
    try {
        const users = await userServices.getAllUsers()
        return res.status(201).json(users)
    }
    catch (err) {
        res.json({ err: "Not found" })
    }
}

export async function updateUser(req, res) {
    const id = req.params.id
    const newUser = req.body
    try {
        const user = await userServices.updateUser(id, newUser)
        return res.status(200).json(user)
    }

    catch (err) {
        res.json({ err: "Not found" })

    }
}

export async function deleteUser(req, res) {
    const id = req.params.id
    const deleteId = await userServices.deleteUser(id)
    if (!deleteId) {
        return res.status(400).json({ err: "Not found" })
    }
    return res.status(200).json({ message: "Deletion successful" })
}