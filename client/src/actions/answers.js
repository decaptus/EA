import { FETCH_ALL_ans,FETCH_ans,CREATE_ans, UPDATE_ans, DELETE_ans } from '../constants/actionTypes';

import * as api from '../api/answers';


export const getAnswers = () => async (dispatch) => {
    try {
      const { data } = await api.fetchAnswers();        //we obtain a response of data from an api.get(url)
  
      dispatch({ type: FETCH_ALL_ans, payload: data });   //dispatch takes an action object as parameter
    } catch (error) {
      console.log(error.message);
    }
  };

  export const getAnswer = (id) => async (dispatch) => {
    try {
      const { data } = await api.fetchAnswer(id);        //we obtain a response of data from an api.get(url)
  
      dispatch({ type: FETCH_ans, data });   //dispatch takes an action object as parameter
      return data
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const createAnswer= (ans) => async (dispatch) => {
  
    try {
      const {data} = await api.createAnswer(ans);
  
      dispatch({ type: CREATE_ans, payload: data });
      return data
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const updateAnswer = (id, ans) => async (dispatch) => {
    try {
      const {data} = await api.updateAnswer(id, ans);
  
      dispatch({ type: UPDATE_ans, payload: data });
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };
  
  
  
  export const deleteAnswer = (id) => async (dispatch) => {
    try {
      await api.deleteAnswer(id);
  
      dispatch({ type: DELETE_ans, payload: id });
    } catch (error) {
      console.log(error.message);
    }
    
  };