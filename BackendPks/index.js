import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

const app = express()
dotenv.config();

//Middleware
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000
const MongoDB_URI = process.env.MongoDB_URI;


try{
  mongoose.connect(MongoDB_URI)
  console.log("connected");
}catch(error){
  console.log(error);
}

//Routes
app.use("/user", userRoute)


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
