
import { Router } from 'express';
import *as bookController from '../controller/Books.js'

const bookRouter =Router();



// get allBooks 

bookRouter.get('/',bookController.getAllBooks);

// get one Book 
bookRouter.get('/:id',bookController.getOneBook)






export default bookRouter;