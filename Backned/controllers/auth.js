import User from '../model/Users.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async(req,res,next)=>{
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt)

        if(!name || !email || !password || !phone || !Username){
            return res.status(422).json({error: "plz fill it properly"})
        }

        const newUser = new User({
            Username: req.body.Username,
            email:req.body.email,
            name: req.body.name,
            phone:req.body.phone,
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
        if(!user) return res.status(404).json({ error: "Invalid Credential" });
 
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isPasswordCorrect) return res.status(404).json({ error: "Invalid Credential" });
        
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}