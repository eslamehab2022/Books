
import dotenv from"dotenv";
import { asyncHandelr } from './../utils/error';
import { vrefiyToken } from "../utils/jt.js";
import userModel from "../users/schema/user.Model.js";
dotenv.config({})

// start auhountication
export const Auth =(acessRoles =[])=>{
return asyncHandelr(async(req,res,next)=>{
 const {AUth}= req.headers;
 if(!AUth?.startWith(process.env.BERAER_KEY)){
  return next(new Error("Invalid Bearer token", {cause:400}))
 }
  
const token = Auth.split(process.env.BERAER_KEY)[1];
if(!token){
    return next(new Error(`Invalid token`,{cause:400}))
}
const decoded = vrefiyToken({payload:token});
if(!decoded?.id){
    return next(new Error(`In-Valid id`,{cause:400}))
}

const user = await userModel.findById(decoded.id).select("email image role");
if(!user){
    return next(new Error(`user not found`,{cause:404}))
}
//
if(!acessRoles.includes(user.role)){
    next(new Error(`user is Not Authourized`,{cause:403}))
}

req.user=user;
next()

})} 

