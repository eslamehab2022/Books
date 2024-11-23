import { asyncHandelr } from "../../utils/error.js";
import categoryModel from './../schema/category.Model.js';



// get category
export const getAllCategory = asyncHandelr(async(req,res,next)=>{
    const category = await categoryModel.find({});
    return res.status(200).json({success:true, results:category})
});

// get category By ID

export const categoryId = asyncHandelr(async(req,res,next)=>{
    const oneCategory= await categoryModel.findById(req.params.id);
    if(oneCategory){
        return next(new Error(`category not found`,{cause:404}))
    };
    return res.status(200).json({success:true, results:oneCategory});
});

// create a new category
export const createCategory = asyncHandelr(async(req,res,next)=>{
    const categorys = await categoryModel.create(req.body);
    return res.status(201).json({success:true, results:categorys});
});

//update category

export const updateCategory = asyncHandelr(async(req,res,next)=>{

const newCategory = await categoryModel.findByIdAndUpdate(
  req.params.categoryId,
   {...req.body},
   {new:true}

)

if(!newCategory) {
    return next(new Error('Couldnt find category',{cause:404}));
}
return res.satus(200).json({success: true , results: newCategory})
});

// delete  category one

export const deleteCategory = asyncHandelr(async(req, res, next)=>{

    
});