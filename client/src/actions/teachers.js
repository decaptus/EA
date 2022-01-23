import { FETCH_ALL_ans,FETCH_ans,CREATE_ans, UPDATE_ans, DELETE_ans } from '../constants/actionTypes';

import * as api from '../api/teachers';


export const getTeachers = () => async (dispatch) => {
    try {
      const { data } = await api.fetchTeachers();        //we obtain a response of data from an api.get(url)
  
      dispatch({ type: FETCH_ALL_ans, payload: data });   //dispatch takes an action object as parameter
    } catch (error) {
      console.log(error.message);
    }
  };

  export const getTeacher = (id) => async (dispatch) => {
    try {
      const { data } = await api.fetchTeacher(id);        //we obtain a response of data from an api.get(url)
  
      dispatch({ type: FETCH_ans, data });   //dispatch takes an action object as parameter
      return data
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const createTeacher= (ans) => async (dispatch) => {
  
    try {
      const {data} = await api.createTeacher(ans);
  
      dispatch({ type: CREATE_ans, payload: data });
      return data
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const updateTeacher = (id, ans) => async (dispatch) => {
    try {
      const {data} = await api.updateTeacher(id, ans);
  
      dispatch({ type: UPDATE_ans, payload: data });
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };
  
  
  
  export const deleteTeacher = (id) => async (dispatch) => {
    try {
      await api.deleteTeacher(id);
  
      dispatch({ type: DELETE_ans, payload: id });
    } catch (error) {
      console.log(error.message);
    }
    
  };