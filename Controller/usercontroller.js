import user from "../Model/usermodel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const signincontroller = async(req , res)=>{
    try {
        const {name , email, password , role} =req.body;
        const hashpassword = await bcrypt.hash(password , 10) 
        const userdetail = await user.create({
            name,
            email,
            password:hashpassword,
            role
        });
        res.status(200).json({message :"user signin successfully"})
    } catch (error) {
        res.status(500).json({message :"user signin failed"})
        
    }
};

export const logincontroller = async(req , res)=>{
    try {
        const {email,password} = req.body;
        const emailfind = await user.findOne({email});
        if(!emailfind){
            return res.status(400).json({message :"user not found"})
        };
        
        const ismatch = await bcrypt.compare(password , emailfind.password);
        if(!ismatch){
            return res.status(400).json({message :"password not matched"})
        }

      const token = jwt.sign(
  { id: emailfind._id },
  "myTempSecretKey", 
  { expiresIn: "1h" }
);

        res.status(200).json({
            message :"user login successfully",
            token: token
        })

    } catch (error) {
        res.status(500).json({message :"user login failed"})
    }
}
