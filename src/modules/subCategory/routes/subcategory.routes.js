import { Router } from "express";

import * as subCategoryController from "../controller/subcategory.js"
const subcategoryRouter = Router({mergeParams:true});


// get all subcategories
subcategoryRouter.get('/',subCategoryController.getAllSubCategory);
// create  subcategories
subcategoryRouter.post('/categoryId/subcategory',subCategoryController.createSubCategory);
// updates  subcategories
subcategoryRouter.patch('/subcategoryId',subCategoryController.updateSubcategory);








export default subcategoryRouter;