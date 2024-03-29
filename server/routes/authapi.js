import { Router } from "express";
import bcrypt from "bcrypt";
import  jwt  from "jsonwebtoken";
import dotenv from "dotenv"
import   { registerUser, userLogin, userLogout } from "../controllers/userController.js";
const router = Router();
dotenv.config();


router.post("/register",registerUser)
router.post("/logout",userLogout)
router.post('/login',userLogin)

export default router;
