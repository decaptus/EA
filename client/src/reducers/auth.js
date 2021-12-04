import { FETCH_ALL,FETCH, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

//Las acciones describen que algo pasó, pero no especifican cómo cambió el estado de la aplicación en respuesta. Esto es trabajo de los reducers.
//El reducer es una función pura que toma el estado anterior y una acción, y devuelve en nuevo estado.


// reducer(state,action) => new State

export default (users = [], action) => {
  switch (users.type) {
    case FETCH_ALL:
      return users.payload;
    case FETCH:
      return users.map((user) => (user._id === action.payload._id ? action.payload : user));
    case LIKE:
      return users.map((user) => (user._id === action.payload._id ? action.payload : user));
    case CREATE:
      return [...users, action.payload];  //we have to spread all the posts and add a new post that is store in the action payload
    case UPDATE:
      return users.map((user) => (user._id === user.payload._id ? action.payload : user));
    case DELETE:
      return users.filter((user) => user._id !== action.payload);
    default:
      return users;
  }
};