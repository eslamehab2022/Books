import mongoose, { model, Schema, Types } from "mongoose";

const categorySchema = new Schema({
    name:{
        type:String
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    image:{
        type:String
    },
    createdBy:{
   type:Types.ObjectId
    }
},{


 timestamps:true
});

const categoryModel = mongoose.models.Category || model('Category',categorySchema);
export default categoryModel