import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
const connect=async()=>{
  mongoose.connect(
    process.env.MONGO_URL
  );
  
}

export default connect;