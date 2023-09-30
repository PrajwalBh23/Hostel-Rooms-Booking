import User from '../model/Student.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async(req,res,next)=>{
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            Username: req.body.Username,
            email:req.body.email,
            password:hash
        })
        await newUser.save()
        res.status(200).send("User has been Created");
    } catch (error) {
        next(error);
    }
} 

export const login = async(req,res,next)=>{
    try {
        const user = await User.findOne({Username:req.body.Username})
        if(!user) return next(404, "User not found");

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isPasswordCorrect) return next(400, "Wrong Password or Username");

        const token = jwt.sign({id:user._id}, process.env.JWT);
        res.cookie("access_token",token,{
            httpOnly: true,
        }).status(200).send();
    } catch (error) {
        next(error);
    }
}