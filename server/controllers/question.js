import express from 'express';
import mongoose from 'mongoose';

import Question from '../models/question.js';

const router = express.Router();

export const getQuestions = async (req, res) => { 
    try {
        const questions = await Question.find();               
        res.status(200).json(questions);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getQuestion = async (req, res) => { 
    const { id } = req.params;

    try {
        const question = await Question.findById(id);
        
        res.status(200).json(question);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createQuestion = async (req, res) => {

    const {creator,picture,question,solved} = req.body;

    const newPostQuestion = new Question({ creator,picture,question,solved })

    try {
        await newPostQuestion.save();

        res.status(201).json(newPostQuestion );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateQuestion = async (req, res) => {
    const { id } = req.params;
    const { creator,picture,question,solved } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No question with id: ${id}`);

    const updatedQuestion = { reator,picture,question,solved , _id: id };

    await Question.findByIdAndUpdate(id, updatedQuestion, { new: true });

    res.json(updatedQuestion);
}

export const deleteQuestion = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No question with id: ${id}`);

    await Question.findByIdAndRemove(id);

    res.json({ message: "Question deleted successfully." });
}


export default router;