
import  mongoose, {model, Schema} from "mongoose"
import { statusEnum, usersGender } from "../../utils/enum.js";
import dotenv from "dotenv";
dotenv.config({});

import jwt from "bcrypt"

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
    type:String,
    required:true
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
},
isDeleted:{
    type:Boolean,
    default:false
}



},{
    timestamps:true
})
//hash password
userSchem.pre("save",async function(next){

    var user = this ; 
    if (!user.isModified('password')) return next();
    jwt.hash(user.password,process.env.SALT,function(err,hash){
    if(err) return next(err);

    user.password = hash;
    next();

})
})
const userModel = mongoose.models.User ||model('User',userSchem);
export default userModel

