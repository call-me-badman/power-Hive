import mongoose from "mongoose";
import { config } from "dotenv";
config()

export const connectTodb= async ()=>{
    try{
 await   mongoose.connect(process.env.DB_URI)
    }catch(error){
console.log(error.message)
    };
    
}