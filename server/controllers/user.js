import express from 'express';
import mongoose from 'mongoose';

import User from '../models/user.js';

const router = express.Router();

export const Register = async (req, res) => {
    console.log("He llegado");
    const { name, password } = req.body;

    const newUser = new User({ name, password })

    try {
        await newUser.save();

        res.status(201).json(newUser);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}


export default router;