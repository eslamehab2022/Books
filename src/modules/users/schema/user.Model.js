
import mongoose, { model, Schema } from "mongoose"
import { statusEnum, usersGender } from "../../utils/enum.js";
import dotenv from "dotenv";
import bcrypt from 'bcrypt';
dotenv.config({});

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
phone:{
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
},
timeOut:{
    type:Date,
    default:null
},
idNumber:{
    type:String
}


}, {
    timestamps: true
})
//hash password


userSchem.pre("save", async function (next) {
    const user = this;

    if (!user.isModified("password")) {
        return next();
    }
    const hashValues = await bcrypt.hash(
        this.password,
        parseInt(process.env.SALT_WORK_FACTOR)
    );

    this.password = hashValues;
});

const userModel = mongoose.models.User || model('User', userSchem);
export default userModel

