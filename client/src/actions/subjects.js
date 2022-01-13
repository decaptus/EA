import { FETCH_SUBJ,FETCH,CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/subjects';


export const getSubjects = () => async (dispatch) => {
    try {
      const { data } = await api.fetchSubjects();        //we obtain a response of data from an api.get(url)
  
      dispatch({ type: FETCH_SUBJ, payload: data });
      return data   //dispatch takes an action object as parameter
    } catch (error) {
      console.log(error.message);
    }
  };

  export const getSubject = (id) => async (dispatch) => {
    try {
      const { data } = await api.fetchSubject(id);        //we obtain a response of data from an api.get(url)
  
      dispatch({ type: FETCH, data });   //dispatch takes an action object as parameter
      return data
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const createSubject = (subject) => async (dispatch) => {
  
    try {
      const { data } = await api.createSubject(subject);
  
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const updateSubject = (id, subject) => async (dispatch) => {
    try {
      const { data } = await api.updateSubject(id, subject);
  
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
 
  
  export const deleteSubject = (id) => async (dispatch) => {
    try {
      await api.deleteSubject(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error.message);
    }
    
  };