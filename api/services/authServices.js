import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET;

export function signToken(user){
    return jwt.sign(user,JWT_SECRET,{ expiresIn: '1h'})
}