import { Router } from "express";
import { createLaunchers,getByIdLaunchers,getAllLaunchers,deleteLaunchers} from "../controllers/launcherControllers.js";

const router = Router()

router.post('/launchers',createLaunchers)
router.get('/launchers',getAllLaunchers)
router.get('/launchers/:id',getByIdLaunchers)
router.delete('/launchers/:id',deleteLaunchers)
export default router