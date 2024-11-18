import { asyncHandelr } from "../../utils/error.js";
import userModel from './../schema/user.Model.js';



// get One user from the system 
export const getUsers = asyncHandelr(async (req,res,next)=>{
const user = await userModel.find({});
return res.status(200).json({ sucsess:true,message:`get user`,user})

});