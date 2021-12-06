import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';


//actions creators are funcitions that return an action, and action is an object wich have type and payload 
//Las acciones son un bloque de información(objeto plano) que envia datos desde tu aplicación a tu store. Son la única fuente de información para el store. Las envias al store usando store.dispatch().


//Actions for teachers page
export const getTeachers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTeachers();        //we obtain a response of data from an api.get(url)

    dispatch({ type: FETCH_ALL, payload: data });   //dispatch takes an action object as parameter
  } catch (error) {
    console.log(error.message);
  }
};
