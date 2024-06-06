import jwt from "jsonwebtoken";
import User from "../Models/user_models.js";

const secureRoute = async (req,res,next)=>{
    try{
        const token=req.cookies.jwt
        if(!token){
            return res.status(401).json({error:"No token authorization denied"});
        }
        const decoded = jwt.verify(token, process.env.jwt_token);
        if(!decoded){
            return res.status(401).json({error:"Invalid Token"});
        }
        const user = await User.findById(decoded.userId).select("-password");
        if(!user){
            return res.status(401).json({error:"No user found"});
        }
        req.user=user;
        next();
    }catch(error){
        console.log("Error in secureToken",error)
        res.status(500).json({error: "Internal server error!"});
    }
}
export default secureRoute;