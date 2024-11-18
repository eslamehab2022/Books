
import  mongoose, {model, Schema} from "mongoose"


const userSchem = new Schema({

firstName:{
    type:String
},
lastName:{
    type:String
},
email:{
    type:String
},
password:{
    type:String
},
status:{
    type:Number,
    default:0
},
gender:{
    type:Number,
    default:0
},
isLogin:{
    type:Boolean,
    default:false
},
isActive:{
    type:Boolean,
    default:false
},
image:{
    type:String
}



},{
    timestamps:true
})

const userModel = mongoose.models.User ||model('User',userSchem);
export default userModel