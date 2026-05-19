import { Router } from "express";
import URLS from "../helpers/Urls.js";
import taskController from "../controllers/taskController.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";


const router = Router();
const { task } = URLS;



router.post(task.create , isAuthenticated, taskController.createTask);
router.get(task.getAll, isAuthenticated, taskController.getAllTasks);
router.get(task.getById, isAuthenticated, taskController.getTaskById);
router.put(task.update, isAuthenticated, taskController.updateTask);
router.delete(task.delete, isAuthenticated, taskController.deleteTask);


export default router;