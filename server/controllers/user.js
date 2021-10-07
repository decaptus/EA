import express from 'express';
import mongoose from 'mongoose';

import User from '../models/user.js';

const router = express.Router();

export const Register = async (req, res) => {
    console.log("He pasado por el Register");
    console.log(req.body);
    const { name, email, password, age, subjects } = req.body;
    const newUser = new User({ name, email, password, age, subjects })
    console.log(newUser);
    try {
        await newUser.save();
        console.log("he pasado por el try");
        res.status(201).json(newUser);
    } catch (error) {
        console.log("he pasado por el catch");
        res.status(409).json({ message: error.message });
    }
}


export default router;