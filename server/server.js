import  express  from "express";
import mongoose from "mongoose";
import cors from 'cors'
const PORT=5000;
const app =express();

mongoose.connect("mongodb+srv://deepak123:deepak21@expense-mern.zae1z2f.mongodb.net/?retryWrites=true&w=majority")
console.log("Mongoosee connection sucessful")

app.use(cors)
app.get("/",(req,res)=>{
  res.send("api is running")
})

app.listen(PORT,console.log(`apis is running on http://localhost:${PORT}`))