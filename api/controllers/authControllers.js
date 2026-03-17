import * as authServices from '../services/authServices.js'


export async function login(req, res) {
    try {
        const { username, password } = req.body
        if (!username || !password) {
            return res.status(400).json({ error: "Missing username or password" })
        }
        const result = await authServices.login(username, password)
        res.json(result)
    } catch (err) {
        res.status(401).json({error:err.message})

    }
}

export function getMe(req,res){
    const reqUser = {
        id:req.user._id,
        username:req.user.username,
        email:req.user.email,
        user_type:req.user.user_type,
        last_login:req.user.last_login
    }
    return res.status(200).json(reqUser)
}

