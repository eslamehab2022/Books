import { asyncHandelr } from "../../utils/error.js";
import bookModel from "../schema/Books.Model.js";




// get all Book
export const  getAllBooks = asyncHandelr(async(req, res,next)=>{

const books = await bookModel.find({});

return res.status(200).json({books})

});

// get one book 
export const getOneBook = asyncHandelr(async (req,res,next)=>{
 const book = await bookModel.findById(req.params.id);

return res.status(200).json({book})

})














    