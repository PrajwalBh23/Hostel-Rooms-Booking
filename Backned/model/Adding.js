
import mongoose from "mongoose";
// import { text } from "express";

const Schema = mongoose.Schema;

const roomSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    owned: {
        type: String,
        enum: ['Room', 'Hostel','Flat']
    },
    address: {
        type: String,
        required: true
    },
    room: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    share: {
        type: String,
        enum: ['Shared', 'Single']
    },
    sharing: {
        type: String,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Prefer Not to say'],
    },
    deposit: {
        type: String,
        // required: true
    },
    image: {
        type: [String]
    },
    rules: {
        type: Array,
        // required: true
    },
    config: {
        type: Array,
        // required: true
    },
    semiFurnished: {
        type: String,
        enum: ['Semi-Furnished', 'Full-Furnished', 'Un-Furnished'],
    },
    bill: {
        type: Array,
        // required: true
    },
    park: {
        type: String,
        // required: true
    },
    college: {
        type: Array,
        // required: true
    },
    area: {
        type: Array,
        // required: true
    },
    fact: {
        type: Array,
        // required: true
    },
    verify: {
        type: String,
        // required: true
    },
});

// to search in the name and description.
// hotelSchema.index({ name:'text', description : 'text' })


export default mongoose.model("Room", roomSchema);