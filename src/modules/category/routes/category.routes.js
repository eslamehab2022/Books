import { Router } from "express";
import * as categoruContrlloer from "../controller/category.js"

const categoryRouter =Router();



categoryRouter.get('/',categoruContrlloer.getAllCategory)


export default categoryRouter