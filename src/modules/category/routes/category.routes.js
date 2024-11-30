import { Router } from "express";
import * as categoruContrlloer from "../controller/category.js"
import subcategoryRouter from './../../subCategory/routes/subcategory.routes.js';

const categoryRouter =Router();
categoryRouter.use('/categoryId/subcategory',subcategoryRouter)

categoryRouter.get('/',categoruContrlloer.getAllCategory)


export default categoryRouter