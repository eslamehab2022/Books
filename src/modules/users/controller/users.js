import { statusEnum } from "../../utils/enum.js";
import { asyncHandelr } from "../../utils/error.js";
import userModel from './../schema/user.Model.js';



// get One user from the system 
export const getUsers = asyncHandelr(async (req,res,next)=>{

const users = await userModel.find({})

return res.status(200).json({ message:`Done`,users});
});

export const  statisticUsers = asyncHandelr(async (req,res,next)=>{
//  let statustics= {};
// const all =await userModel.find({}).countDocuments();

// const online =await userModel.find({status:stst}).countDocuments();
// const offline =await userModel.find({}).countDocuments();

})