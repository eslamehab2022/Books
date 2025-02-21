import { Router } from "express";
import * as subCategoryController from "../controller/subcategory.js"
const subcategoryRouter = Router({mergeParams:true});


// get all subcategories
subcategoryRouter.get('/',subCategoryController.getAllSubCategory);
// get one subcategorie
subcategoryRouter.get('/:subcategoryId',subCategoryController.oneSubCategorys);
// create  subcategories
subcategoryRouter.post('/',subCategoryController.createSubCategory);
// updates  subcategories
subcategoryRouter.patch('/:subcategoryId',subCategoryController.updateSubcategory);
// delete subcategories
subcategoryRouter.delete('/',subCategoryController.deleteSubCategorys);
// delete All   subcategories
subcategoryRouter.delete('/all',subCategoryController.deleteAllSubCategorys);










export default subcategoryRouter;