import { Router } from "express";

import dotenv from "dotenv"
import passport from "passport";

const router = Router();
dotenv.config();



router.get('/',passport.authenticate("jwt", { session: false }),(req,res)=>{
  res.json({user:req.user})
})

export default router