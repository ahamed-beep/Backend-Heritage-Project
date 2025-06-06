import mongoose from "mongoose";

const usermodel = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
     email:{
        type:String,
        required:true
    },
     password:{
        type:String,
        required:true
    },
     role:{
        type:String,
        required:false,
        default:'user'
    }
});

const user = mongoose.model('user' , usermodel);
export default user