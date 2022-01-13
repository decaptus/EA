import { FETCH_ALL_ans, CREATE_ans, UPDATE_ans,FETCH_ans,DELETE_ans } from '../constants/actionTypes';

export default (answers = [], action) => {
    switch (action.type) {
      case FETCH_ALL_ans:
        return action.payload;
      case FETCH_ans:
        return answers.map((answer) => (answer._id === action._id ? action : answer));
      case CREATE_ans:
        return [...answers, action.payload];
      case UPDATE_ans:
        return answers.map((answer) => (answer._id === action._id ? action : answer));
      case DELETE_ans:
        return answers.filter((answer) => answer._id !== action);
      default:
        return answers;
    }
  };