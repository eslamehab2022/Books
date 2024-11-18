import { Router } from "express";
import *as userController from "../controller/users.js"
const userRouter = Router();

//get users
userRouter.get('/',userController.getUsers);





export default userRouter