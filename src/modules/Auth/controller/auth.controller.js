import userModel from "../../users/schema/user.Model.js";
import { asyncHandelr } from "../../utils/error.js";



export const signUp = asyncHandelr(async(req,res,next)=>{

    const checkUser= await userModel.findOne({email:req.body.email})
    if(checkUser){
        return next(new Error(`user already exists`,{cause:400}))
    }

    
});



export const login = asyncHandelr(async(req,res,next)=>{

});
export const forgetPassword = asyncHandelr(async(req,res,next)=>{

});

