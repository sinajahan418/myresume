import { text } from "express";
import mongoose from "mongoose";


const commentSchema = new mongoose.Schema({
    text : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },

    product : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Product",
    required : true
    },
    
    createdAt: { type: Date, default: Date.now }

});

export const Comment = mongoose.model('Comment', commentSchema);