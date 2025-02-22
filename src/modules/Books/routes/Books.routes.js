
import { Router } from 'express';
import *as bookController from '../controller/Books.js'

const bookRouter =Router();



// get allBooks 

bookRouter.get('/',bookController.getAllBooks)





export default bookRouter;