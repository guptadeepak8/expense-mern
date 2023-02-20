import mongoose from "mongoose";
import { Schema } from "mongoose";

const transactionSchema=new Schema({
  amount:Number,
  text:String,
  user_id:mongoose.Types.ObjectId,
  date:{type:Date,default:new Date()},
  createdAt:{type:Date,default:Date.now}
})


export default new mongoose.model("Transaction",transactionSchema);