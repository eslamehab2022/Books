
import  mongoose, {model, Schema} from "mongoose"
import { statusEnum, usersGender } from "../../utils/enum.js";
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
 default:statusEnum.Offline,
 enum:Object.values(statusEnum)
},
gender:{
    type:Number,
    default:usersGender.Male,
    enum:Object.values(usersGender)
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