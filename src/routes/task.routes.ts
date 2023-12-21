import { Router } from 'express'
import { TaskController } from '../controllers/task.controller';

const router: Router = Router();
const taskController = new TaskController();

router.route('/')
    .get(taskController.getAll)



export default router;