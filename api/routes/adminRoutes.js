import { Router } from "express";


const router = Router()
router.post('/register/create',createLaunchers)
router.put('/register/update',getAllLaunchers)
router.delete('/register/delete/:id',deleteLaunchers)
export default router