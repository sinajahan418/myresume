import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true ,
        unique : true
    },
    profilePic : {
        type : String,
        default : ""
    },
    role : {
        type : String,
        enum : ['Admin', 'user'],
        default : 'user'
    },
    
    passwrodResetToken : String,
    passwrodResetExpires: Date
    
}, { timestamps : true });


export const User = mongoose.model('User', userSchema);