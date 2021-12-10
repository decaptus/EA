import { FETCH_ALL,FETCH,CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/answers';


export const getAnswers = () => async (dispatch) => {
    try {
      const { data } = await api.fetchAnswers();        //we obtain a response of data from an api.get(url)
  
      dispatch({ type: FETCH_ALL, payload: data });   //dispatch takes an action object as parameter
    } catch (error) {
      console.log(error.message);
    }
  };

  export const getAnswer = (id) => async (dispatch) => {
    try {
      const { data } = await api.fetchAnswer(id);        //we obtain a response of data from an api.get(url)
  
      dispatch({ type: FETCH, data });   //dispatch takes an action object as parameter
      return data
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const createAnswer= (ans) => async (dispatch) => {
  
    try {
      const { data } = await api.createAnswer(ans);
  
      dispatch({ type: CREATE, payload: data });
      return data
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const updateAnswer = (id, ans) => async (dispatch) => {
    try {
      const { data } = await api.updateAnswer(id, ans);
  
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  
  
  export const deleteAnswer = (id) => async (dispatch) => {
    try {
      await api.deleteAnswer(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error.message);
    }
    
  };