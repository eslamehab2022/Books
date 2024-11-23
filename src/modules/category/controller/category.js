import { asyncHandelr } from "../../utils/error.js";
import categoryModel from './../schema/category.Model.js';



// get category
export const getAllCategory = asyncHandelr(async(req,res,next)=>{
    const category = await categoryModel.find({});
    return res.status(200).json({success:true, results:category})
});