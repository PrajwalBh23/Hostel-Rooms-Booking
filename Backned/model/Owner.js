import mongoose from "mongoose";
// import { text } from "express";

const Schema = mongoose.Schema;

const hotelSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    type:{
        type: String,
        enum: ['Shared','Single']
    },
    Extra:{
        type: String,
        enum: ['Only Boys','Only Girls','Mixed'],
    },
    city:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    photos:{
        type: [String]
    },
    Near_local:{
        type: Array
    },
    rooms:{
        type: [String],
        min:0,
        max:5
    },
    Price:{
        type: String,
        required: true
    },
    Condition:{
        type: Array
    },
    availbility:{
        type: Boolean,
        default:false
    },
    verify:{
        type: String,
        required: true
    },
});

// to search in the name and description.
// hotelSchema.index({ name:'text', description : 'text' })


export default mongoose.model("Hotel",hotelSchema);