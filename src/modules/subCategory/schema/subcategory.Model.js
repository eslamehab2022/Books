import mongoose, { Schema, Types } from "mongoose";


const subcategorySchema= new Schema({

name:{
    type:String
},
categoryId:{
    type:Types.ObjectId,
    ref:'Category'
},
isDeleted:{
    type:Boolean,
    default:false
}

},{
    timestamps:true
});


const subCategoryModel = mongoose.models.SubCategory ||model('SubCategory', subcategorySchema);

export default subCategoryModel