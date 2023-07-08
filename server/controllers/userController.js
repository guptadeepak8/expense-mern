import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser= async (req, res) => {

  const { email, firstName, lastName, password } = req.body;
  
  const userExits = await User.findOne({ email });
  if (userExits) {
    res.status(409).json({ message: "User already exit" });
    return
  }
  const saltRounds = 10;
  const salt = await bcrypt.genSaltSync(saltRounds);
  const hash = await bcrypt.hashSync(password, salt);
  const newUser = await new User({ email, firstName, lastName, password: hash });
  await newUser.save();
  const payload={
    username:email,
    _id:newUser._id
   }

  const token=jwt.sign(payload, process.env.JWT_SECRET)
  res.json({ message: "registerd",token });
};


const userLogin= async (req, res) => {
   
  const {email,password}=req.body;
    
  const user = await User.findOne({ email});
    
  if (!user) {
    res.status(409).json({ message: "User doesn't exit" });
    return 
  }
    
  const hashPassword =await bcrypt.compare(password, user.password);
  if (!hashPassword) {
    res.status(404).json({ message: "User password is wrong" });
    return 
  }
   const payload={
    username:email,
    _id:user._id
   }

  const token=jwt.sign(payload, process.env.JWT_SECRET)
  res.status(201).json({message:"sign in",token,user})
   
}

export { registerUser, userLogin } ;