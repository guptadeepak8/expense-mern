import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import transactionroutes from "./routes/transRoutes.js"
import authapi from"./routes/authapi.js"
import userApi from"./routes/userApi.js"
import connect from "./database/mongodb.js";
import passport from "passport"
import passportConfig from "./config/passport.js"
import dotenv from "dotenv";
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
passportConfig(passport);
app.get("/", (req, res) => {
  res.send("api is running");
});

connect();

app.use("/transaction", passport.authenticate("jwt", { session: false }),transactionroutes)
app.use("/auth",authapi)
app.use("/user",userApi)

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`apis is running on http://localhost:${PORT}`));
