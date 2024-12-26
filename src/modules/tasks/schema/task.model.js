import mongoose ,{Types, models}from "mongoose";


// create schema for task
const taskSchema = new mongoose.Schema({


userId:{
type:Types.ObjectId,
    ref:"User"

},

    name:{
        type:String,
        required:true
}



},{timeseries:true}

)



const task = mongoose.model || models.Task("Task",taskSchema);


export default task;