import { combineReducers } from 'redux';

import users from './auth';
import posts from './posts';
import questions from './questions';
import auth from './auth';
import answers from './answers'

export const reducers = combineReducers({ posts, questions, auth,answers});
