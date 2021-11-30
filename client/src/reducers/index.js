import { combineReducers } from 'redux';

import posts from './posts';
import questions from './questions';
import postflats from './postflats';

export const reducers = combineReducers({ posts, questions, postflats });
