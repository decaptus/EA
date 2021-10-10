import express from 'express';

import { getQuestions, getQuestion, createQuestion, deleteQuestion } from '../controllers/question.js';

const router = express.Router();

router.get('/', getQuestions);
router.post('/', createQuestion);
router.get('/:id', getQuestion);
router.delete('/:id', deleteQuestion);


export default router;