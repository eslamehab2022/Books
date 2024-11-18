
import jwt  from  "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()


//create  a new Token
export const createToken = ({payload, signature=process.env.SIGNATURE_KEY,expire=60*60}={})=>{
const token = jwt.sign(payload,signature,{expire:parseInt(expire)})
return token;
}

// vrefiy token 
export const vrefiyToken = ({payload, signature= process.env.SIGNATURE_KEY}={})=>{
    const vrefiy = jwt.verify(payload,signature);
    return vrefiy
};