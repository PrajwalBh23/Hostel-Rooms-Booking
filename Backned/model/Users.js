import mongoose from "mongoose";
// import { text } from "express";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    Username:{
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: Number,
        required:true,
        unique:true
    },
    phone2:{
        type: Number
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    // verify:{
    //     type: String,
    // },
});

// to search in the name and description.
// hotelSchema.index({ name:'text', description : 'text' })


export default mongoose.model("User",userSchema);