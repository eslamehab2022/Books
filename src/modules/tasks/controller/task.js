import { asyncHandelr } from "../../utils/error.js";
import taskModel from "../schema/task.model.js";



export const getAllTasks = asyncHandelr(async(req , resizeBy,next)=>{
    const tasks = await taskModel.find();
    return res.status(200).json({tasks:tasks})
});

export const onTask = asyncHandelr(async(req , resizeBy,next)=>{
    const task = await taskModel.findById(req.params.taskId);
    if(!task) return next({statusCode:404, message:"Task not found"})
    return res.status(200).json({tasks:task})
});  