import mongoose, { model, Schema } from "mongoose";


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
    }
},{

 timestamps:true

});

const categoryModel = mongoose.models.Category || model('Category',categorySchema);
   

export default categoryModel