import { Router } from "express";
import *as taskController from '../controller/task.js'
const taskRouter =Router();
taskRouter.get('/',taskController.getAllTasks);
taskRouter.get('/:taskId',taskController.onTask);







export default taskRouter;