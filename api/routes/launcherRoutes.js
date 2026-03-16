import { Router } from "express";
import { createLaunchers } from "../controllers/launcherControllers.js";

const router = Router()

router.post('/launchers',createLaunchers)
router.get('/launchers')
router.get('/launchers/:id')
export default router