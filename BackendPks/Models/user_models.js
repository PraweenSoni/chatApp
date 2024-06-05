import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
    }
},{timestamps:true})  //Created Time && updated time

const User = mongoose.model("user",userSchema)
export default User;