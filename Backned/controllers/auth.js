import User from '../model/Users.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        // Check if all required fields are provided
        if (!req.body.name || !req.body.email || !req.body.password || !req.body.phone || !req.body.Username) {
            return res.status(422).json({ error: "P fill in all the fields properly" });
        }

        const newUser = new User({
            Username: req.body.Username,
            email: req.body.email,
            name: req.body.name,
            phone: req.body.phone,
            password: hash,
        });
        await newUser.save();
        res.status(200).send("User has been created");
    } catch (error) {
        next(error);
    }
}

export const login = async (req, res, next) => {
    try {
        let token;
        const {Username, password} = req.body;

        if(!Username || !password){
            return res.status(400).json({error:'Please filled the data'});
        }
        const user = await User.findOne({ Username: req.body.Username });
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
