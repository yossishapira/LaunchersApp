import { Router } from "express";
import * as adminControllers from '../controllers/adminControllers.js'
import { approvalRequired ,requireType} from "../middleware/auth";
const router = Router()
router.post('/register/create',approvalRequired,requireType('admin'),adminControllers.createUsers)
router.get('/users',approvalRequired,requireType('admin'),adminControllers.getAllUsers)
router.put('/register/update/:id',approvalRequired,requireType('admin'),adminControllers.updateUser)
router.delete('/register/delete/:id',approvalRequired,requireType('admin'),adminControllers.deleteUser)
export default router