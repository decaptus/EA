import { FETCH_ALL_quest, FETCH_quest,CREATE_quest, UPDATE_quest, DELETE_quest} from '../constants/actionTypes';

export default (questions = [], action) => {
    switch (action.type) {
      case FETCH_ALL_quest:
        return action.payload;
      case FETCH_quest:
        return questions.map((question) => (question._id === action._id)? action : question);
      case CREATE_quest:
        return [...questions, action.payload];
      case UPDATE_quest:
        return questions.map((question) => (question._id === action._id ? action: question));
      case DELETE_quest:
        return questions.filter((question) => question._id !== action._id);
      default:
        return questions;
    }
  };
  
  
  
  