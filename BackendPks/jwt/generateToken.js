import jwt from "jsonwebtoken";

const createTokenAndSaveCookie = (userId,res) =>{
    const token=jwt.sign({userId},process.env.jwt_token,{
        expiresIn:"5d"
    });
    res.cookie("jwt",token,{
        httpOnly:true,      //xss attack safe
        secure:true,
        sameSite:"strict"     //csrf attack safe
    });
}

export default createTokenAndSaveCookie;