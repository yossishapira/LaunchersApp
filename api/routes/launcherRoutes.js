import { Router } from "express";
import { createLaunchers,getByIdLaunchers,getAllLaunchers } from "../controllers/launcherControllers.js";

const router = Router()

router.post('/launchers',createLaunchers)
router.get('/launchers',getAllLaunchers)
router.get('/launchers/:id',getByIdLaunchers)
export default router