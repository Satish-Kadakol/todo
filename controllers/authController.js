import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async(req, res) => {
    const {email, password} = req.body;
    try{
        const existingUser = await User.findOne({email});
        if(existingUser) return res.status(400).json({error: 'User already exists'});

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({email, password:hashedPassword});
        newUser.save();
        res.status(201).json({message:'User registered'});
    } catch(error){
        res.status(500).json({error:error.message});
    }
};

export const login = async (req, res) => {
    const {email, password} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({error: 'Invalid credentials'});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({error: "Invalid credentials"});

        const token = jwt.sign({userId:user._id}, process.env.JWT_SECRET, {expiresIn: '1d'});
        console.log(token);
        res.json({token});
    }catch(error){
        res.status(500).json({error: error.message});
    }
};