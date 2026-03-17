import { Router } from "express";
import { createLaunchers,getByIdLaunchers,getAllLaunchers,deleteLaunchers,updateDestroyedStatus} from "../controllers/launcherControllers.js";
import { approvalRequired,requireType } from "../middleware/auth.js";
const router = Router()

router.post('/launchers',approvalRequired,requireType('admin','intelligence'),createLaunchers)
router.get('/launchers',approvalRequired,getAllLaunchers)
router.get('/launchers/:id',approvalRequired,getByIdLaunchers)
router.put('/launchers/:id',approvalRequired,updateDestroyedStatus)
router.delete('/launchers/:id',approvalRequired,requireType('admin','intelligence'),deleteLaunchers)
export default router