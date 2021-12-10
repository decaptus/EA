import * as actionType from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      window.localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loading: false, errors: null };

    case actionType.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
    case FETCH_ALL:
      return action.payload;
    case FETCH:
      return users.map((user) => (user._id === action._id ? action : user));
    case CREATE:
      return [...users, action.payload];
    case UPDATE:
      return users.map((user) => (user._id === action._id ? action : user));
    case DELETE:
      return users.filter((user) => user._id !== action._id);
    default:
      return users;
  }
};

export default authReducer;

