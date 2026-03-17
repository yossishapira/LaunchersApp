import { Router } from "express";
import * as auth from '../middleware/auth.js'
import { login,getMe } from "../controllers/authControllers.js";
const router = Router()


router.post('/login',login)
router.get('/getUser',auth.approvalRequired,getMe)

export default router