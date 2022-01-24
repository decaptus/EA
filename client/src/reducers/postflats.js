import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, FETCH } from '../constants/actionTypes';

//Las acciones describen que algo pasó, pero no especifican cómo cambió el estado de la aplicación en respuesta. Esto es trabajo de los reducers.
//El reducer es una función pura que toma el estado anterior y una acción, y devuelve en nuevo estado.


// reducer(state,action) => new State

export default (postflats = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case FETCH:
      return postflats.map((flat) => (flat._id === action._id ? action : flat));
    case LIKE:
      return postflats.map((flat) => (flat._id === action.payload._id ? action.payload : flat));
    case CREATE:
      return [...postflats, action.payload];  //we have to spread all the posts and add a new post that is store in the action payload
    case UPDATE:
      return postflats.map((flat) => (flat._id === action.payload._id ? action.payload : flat));
    case DELETE:
      return postflats.filter((flat) => flat._id !== action.payload);
    default:
      return postflats;
  }
};

