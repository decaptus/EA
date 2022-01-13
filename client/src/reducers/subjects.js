import { FETCH_ALL, FETCH,CREATE, UPDATE, DELETE, LIKE ,FETCH_SUBJ} from '../constants/actionTypes';

export default (subjects = [], action) => {
    switch (action.type) {
    case FETCH_SUBJ:
        return action.payload;
        case FETCH:
        return subjects.map((subject) => (subject._id === action._id ? action : subject));
        case CREATE:
        return [...subjects, action.payload];
        case UPDATE:
        return subjects.map((subject) => (subject._id === action._id ? action : subject));
        case DELETE:
        return subjects.filter((subject) => subject._id !== action._id);
        default:
        return subjects;
    }
  };