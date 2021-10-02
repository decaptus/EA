import express from 'express';
import mongoose from 'mongoose';

import Bulletin from '../models/bulletin.js';

const router = express.Router();

export const getBulletins = async (req, res) => { 
    try {
        const bulletins = await Bulletin.find();               
        res.status(200).json(bulletins);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getBulletin = async (req, res) => { 
    const { id } = req.params;

    try {
        const bulletin = await Bulletin.findById(id);
        
        res.status(200).json(bulletin);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createBulletin = async (req, res) => {

    const { title, description, creator, picture, availability, price  } = req.body;

    const newPostBulletin = new Bulletin({ title, description, creator, picture, availability, price })

    try {
        await newPostBulletin.save();

        res.status(201).json(newPostBulletin );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await Bulletin.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deleteBulletin = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Bulletin.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

/*
export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await Bulletin.findById(id);

    const updatedPost = await Bulletin.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);
}
*/

export default router;