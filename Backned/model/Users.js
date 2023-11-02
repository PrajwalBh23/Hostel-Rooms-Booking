import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
// import { text } from "express";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    Username: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    phone2: {
        type: Number
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            }
        }
    ]
});

// to search in the name and description.
// hotelSchema.index({ name:'text', description : 'text' })

// Generation of token
userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
}

export default mongoose.model("User", userSchema);