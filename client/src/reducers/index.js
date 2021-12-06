import { combineReducers } from 'redux';

import users from './auth';
import posts from './posts';
import questions from './questions'

export const reducers = combineReducers({ posts, questions,users });
