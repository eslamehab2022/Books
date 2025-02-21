import mongoose, { model, Schema, Types } from "mongoose";

 const bookSchema= new Schema({

name:{
    type:String
},
description:{
    type:String
},
categoryId:{
    type:Types.ObjectId
},
subCategoryId:{
    type:Types.ObjectId
},
image:{
    type:String,
},
isDeleted:{
    type:Boolean,
    default:false
}


 },
 {timestamps:true}
)

const bookModel = mongoose.models.Book || model('Book', bookSchema);
export default bookModel;
