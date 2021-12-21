import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, FETCH } from '../constants/actionTypes';

import * as api from '../api/index.js';


//actions creators are functions that return an action, and action is an object wich have type and payload 
//Las acciones son un bloque de información(objeto plano) que envia datos desde tu aplicación a tu store. Son la única fuente de información para el store. Las envias al store usando store.dispatch().


//Actions creator
export const getFlats = () => async (dispatch) => {
  try {
    const { data } = await api.fetchFlats();        //we obtain a response of data from an api.get(url)

    dispatch({ type: FETCH_ALL, payload: data });   //dispatch takes an action object as parameter
  } catch (error) {
    console.log(error.message);
  }
};

export const createFlat = (flat) => async (dispatch) => {

  try {
    const { data } = await api.createFlat(flat);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateFlat = (id, flat) => async (dispatch) => {
  try {
    const { data } = await api.updateFlat(id, flat);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteFlat = (id) => async (dispatch) => {
  try {
    await api.deleteFlat(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
  
};

export const getFlat = (id) => async (dispatch) => {
  try {
    await api.getFlat(id);

    dispatch({ type: FETCH, payload: id });
  } catch (error) {
    console.log(error.message);
  }
  
};


export const likeFlat = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeFlat(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
