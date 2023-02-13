import { Router } from "express";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import  jwt  from "jsonwebtoken";
import dotenv from "dotenv"
const router = Router();
dotenv.config();

router.post("/register", async (req, res) => {
  const { email, firstName, lastName, password } = req.body;

  const userExit = await User.findOne({ email });
  if (userExit) {
    res.status(409).json({ message: "User already exit" });
    return
  }
  const saltRounds = 10;
  const salt = await bcrypt.genSaltSync(saltRounds);
  const hash = await bcrypt.hashSync(password, salt);
  const user = await new User({ email, firstName, lastName, password: hash });
  await user.save();
  res.json({ message: "registerd" });
});


router.post('/login',async(req,res)=>{

    const {email,password}=req.body;

    const user = await User.findOne({ email});
      
    if (!user) {
      res.status(409).json({ message: "User doesnt exit" });
      return
    }
      
    const hashPassword =await bcrypt.compare(password, user.password);
    if (!hashPassword) {
      res.status(409).json({ message: "User pasword is wrong" });
      return
    }
     const payload={
      usernsme:email,
      _id:user._id
     }

    const token=jwt.sign(payload, process.env.JWT_SECRET)
    res.status(201).json({message:"sign in",token})

})

export default router;
