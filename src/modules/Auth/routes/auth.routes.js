import { Router } from "express";
import * as authController from "../controller/auth.controller.js"
const authRouter = Router();

//sign up user
authRouter.post('/signup',authController.signUp);

//sign in user
authRouter.post('/login',authController.login);

// forget password used for login
authRouter.post('/forgetpassword', authController.forgetPassword)


export default authRouter   