import categoryModel from "../../category/schema/category.Model.js";
import { asyncHandelr } from "../../utils/error.js";
import subCategoryModel from "../schema/subcategory.Model.js";


// get all categorys
export const  getAllSubCategory = asyncHandelr(async(req,res,next)=>{
    const subcategory = await subCategoryModel.find({});
    return res.status(200).json({success:true, result:subcategory})

});

// create subCategorys
export const  createSubCategory = asyncHandelr(async(req,res,next)=>{
    if(!await categoryModel.findById(req.body.categoryId)){
      return next(new Error(`category not found`,{cause:404}))
    }
    const subcategory = await subCategoryModel.create(req.body);
    return res.status(200).json({success:true, result:subcategory})
});

// update subcategory
export const updateSubcategory = asyncHandelr(async(req,res,next)=>{
  if(!await subCategoryModel.findById(req.params.subcategoryId)) return next(new Error(`subcategory not found `,{cause:404}));
  const sub = await subCategoryModel.findByIdAndUpdate(subcategoryId,{...req.body},{new:true});
  return res.status(200).json({success:true, result:sub});
});

// delete a category

