import mongoose, { model, Schema, Types } from "mongoose";

const taskchema = new Schema({
    assignTo:[{
        type:Types.ObjectId
    }],
    isDeleted:{
        type:Boolean,
        default:false
    },
    screenChoot:{
        type:[String]
    },
    startTime:{
        type:String
    },
    taskData:{
        type:Date
    },

    endTime:{
        type:String
    }
},{


 timestamps:true
});

const taskModel = mongoose.models.Task || model('Task',taskchema);
export default taskModel