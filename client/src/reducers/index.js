import { combineReducers } from 'redux';

import users from './auth';
import posts from './posts';
import questions from './questions'
import answers from './answers'

export const reducers = combineReducers({ posts, questions,users ,answers});
