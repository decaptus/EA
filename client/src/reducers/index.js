import { combineReducers } from 'redux';

import posts from './posts';
import questions from './questions'
import auth from './auth';

export const reducers = combineReducers({ posts, questions,auth });
