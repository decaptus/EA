import { FETCH_ALL, FETCH,CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (questions = [], action) => {
    switch (action.type) {
      case FETCH_ALL:
        return action.payload;
      case FETCH:
        return questions.map((question) => (question._id === action._id)? action : question);
      case CREATE:
        return [...questions, action.payload];
      case UPDATE:
        return questions.map((question) => (question._id === action._id ? action: question));
      case DELETE:
        return questions.filter((question) => question._id !== action._id);
      default:
        return questions;
    }
  };
  
  
  
  