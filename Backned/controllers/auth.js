import User from '../model/Users.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        // Check if all required fields are provided
        if (!req.body.name || !req.body.email || !req.body.password || !req.body.phone) {
            return res.status(422).json({ error: "Please fill in all the fields properly" });
        }

        const newUser = new User({
            email: req.body.email,
            name: req.body.name,
            phone: req.body.phone,
            password: hash,
        });

        // Save the user and generate a token
        await newUser.save();
        const token = await newUser.generateAuthToken();

        res.status(200).json({ message: "User has been created", token });
    } catch (error) {
        next(error);
    }
}


export const login = async (req, res, next) => {
    try {
        let token;
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({error:'Please filled the data'});
        }
        const user = await User.findOne({ email: req.body.email });
        if (user) 
        {
            const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
            if (isPasswordCorrect) 
            {
                token = await user.generateAuthToken();
                console.log(token);

                res.cookie("JwtToken", token,{
                    expires: new Date(Date.now() + 259200000)
                });

                res.status(200).json({message:"User Sign in Successfully"});
            }
            else{
                return res.status(404).json({ error: "Invalid Credentials" });
            }
        }
        else
        {
            return res.status(404).json({ error: "Invalid Credentials" });
        }

    } catch (error) {
        next(error);
    }
}
