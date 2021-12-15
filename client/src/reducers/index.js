import { combineReducers } from 'redux';

import users from './users';
import posts from './posts';
import questions from './questions';

import auth from './auth';
import answers from './answers'

import postflats from './postflats';
import postmarkers from './markers';

export const reducers = combineReducers({ posts, questions, postflats, postmarkers,auth, users, answers });

