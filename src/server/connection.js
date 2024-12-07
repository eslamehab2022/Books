import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({});
const mongoDb = process.env.ENV ==="development" 
? process.env.DEV_DB
: process.env.PRODUCTION_DB 


const connectionDb = async()=>{
    await mongoose.connect(mongoDb).then(()=>{
     console.log(`Connection to database successfully created at ${mongoDb}`);

    }).catch((err)=>{
        console.log(`Connection to database error: ${err}`);
    })




};


export default connectionDb