import userModel from "../../users/schema/user.Model.js";
import { asyncHandelr } from "../../utils/error.js";
import bcrypt from "bcrypt"
import dotenv from "dotenv";
import { createToken, vrefiyToken } from "../../utils/jt.js";
dotenv.config({})
 // user sign up in Application
export const signUp = asyncHandelr(async(req,res,next)=>{
    const checkUser= await userModel.findOne({email:req.body.email})
    if(checkUser){
        return next(new Error(`user already exists`,{cause:400}))
    }
    const user = await userModel.create({...req.body});
    return res.status(201).json({succes:true, message:`user signed up successfully`,user})
    
});


// user login form validation
export const login = asyncHandelr(async(req,res,next)=>{
const{email, password}=req.body
const user= await userModel.findOne({email:email});
if(!user ) return next(new Error(`user not found`,{cause:404}));
const match =    bcrypt.compareSync(req.body.password,user.password);
if(!match) return next(new Error(`password mismatch`,{cause:400}))

  const Token = createToken({
    payload: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    }, expiresIn: '1h'
});
return res.status(200).json({succes:true,message:`user login Done`, results:Token});

});
export const forgetPassword = asyncHandelr(async(req,res,next)=>{

});

