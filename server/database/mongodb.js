import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
const connect=async()=>{
  mongoose.connect(
    process.env.MONGO_URL
  );
  
  console.log("Mongoosee connection sucessful");
  
}

export default connect;