import { Router } from "express";
import *as taskController from '../controller/task.js'
const taskRouter =Router();
taskRouter.get('/',taskController.getAllTasks);






export default taskRouter;