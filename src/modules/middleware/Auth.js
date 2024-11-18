
import dotenv from"dotenv";
import { asyncHandelr } from './../utils/error';
import { vrefiyToken } from "../utils/jt.js";
dotenv.config({})

// start auhountication
export const Auth =(acessRoles =[])=>{
return asyncHandelr(async(req,res,next)=>{
 const {AUth}= req.headers;
 if(!AUth?.startWith(process.env.BERAER_KEY)){
  return next(new Error("Invalid Bearer token", {cause:400}))
 }
  
const token = Auth.split(process.env.BERAER_KEY)[0];
if(!token){
    return next(new Error(`Invalid token`,{cause:400}))
}




})

}
