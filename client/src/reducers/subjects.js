import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

//Las acciones describen que algo pasó, pero no especifican cómo cambió el estado de la aplicación en respuesta. Esto es trabajo de los reducers.
//El reducer es una función pura que toma el estado anterior y una acción, y devuelve en nuevo estado.


// reducer(state,action) => new State

export default (posts = [], action) => {
  switch (action.type) {
    case LIKE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    default:
      return posts;
  }
};
