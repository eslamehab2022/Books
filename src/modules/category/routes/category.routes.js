import { Router } from "express";
import * as categoruContrlloer from "../controller/category.js"
import subcategoryRouter from './../../subCategory/routes/subcategory.routes.js';

const categoryRouter =Router();
categoryRouter.use('/categoryId/subcategory',subcategoryRouter)
categoryRouter.get('/',categoruContrlloer.getAllCategory);
categoryRouter.get('/:categoryId',categoruContrlloer.categoryId);

categoryRouter.post('/',categoruContrlloer.createCategory)
categoryRouter.patch('/:CategoryId', categoruContrlloer.updateCategory);
categoryRouter.delete('/', categoruContrlloer.deleteCategory);
categoryRouter.delete('/all', categoruContrlloer.deleteAllCategorys);





export default categoryRouter