import { combineReducers } from 'redux';

import posts from './posts';
import questions from './questions'

export const reducers = combineReducers({ posts, questions });
