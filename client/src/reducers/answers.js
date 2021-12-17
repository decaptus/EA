import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE,FETCH } from '../constants/actionTypes';

export default (answers = [], action) => {
    switch (action.type) {
      case FETCH_ALL:
        return action.payload;
      case FETCH:
        return answers.map((answer) => (answer._id === action._id ? action : answer));
      case CREATE:
        return [...answers, action.payload];
      case UPDATE:
        return answers.map((answer) => (answer._id === action._id ? action : answer));
      case DELETE:
        return answers.filter((answer) => answer._id !== action);
      default:
        return answers;
    }
  };