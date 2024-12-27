import { asyncHandelr } from "../../utils/error.js";
import taskModel from "../schema/task.model.js";



export const getAllTasks = asyncHandelr(async(req , resizeBy,next)=>{
    const task = await taskModel.find();
    return res.status(200).json({tasks:task})
});