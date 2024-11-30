import { Router } from "express";

import * as subCategoryController from "../controller/subcategory.js"
const subcategoryRouter = Router({mergeParams:true});



subcategoryRouter.get('/',subCategoryController.getAllSubCategory)




export default subcategoryRouter;