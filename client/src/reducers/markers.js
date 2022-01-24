import { FETCH_ALL} from '../constants/actionTypes';

//Las acciones describen que algo pasó, pero no especifican cómo cambió el estado de la aplicación en respuesta. Esto es trabajo de los reducers.
//El reducer es una función pura que toma el estado anterior y una acción, y devuelve en nuevo estado.


// reducer(state,action) => new State

export default (postmarkers = [], action) => {
  switch (action.type) {

    case FETCH_ALL: 
      return action.payload;
    
    default: 
      return postmarkers;
  }
};

