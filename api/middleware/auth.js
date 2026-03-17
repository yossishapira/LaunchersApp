import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET;

export function approvalRequired(req,res,next){
    const authHeader = req.header.authorization
    if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }
    const token = authHeader.split(' ')[1];
 if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    req.user = decoded.user

    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }

}

