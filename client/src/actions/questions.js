import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/questions';


export const getQuest = () => async (dispatch) => {
    try {
      const { data } = await api.fetchQuest();        //we obtain a response of data from an api.get(url)
  
      dispatch({ type: FETCH_ALL, payload: data });   //dispatch takes an action object as parameter
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const createQuest = (quest) => async (dispatch) => {
  
    try {
      const { data } = await api.createQuest(quest);
  
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const updateQuest = (id, quest) => async (dispatch) => {
    try {
      const { data } = await api.updateQuest(id, quest);
  
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const likeQuest = (id) => async (dispatch) => {
    try {
      const { data } = await api.likeQuest(id);
  
      dispatch({ type: LIKE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const deleteQuest = (id) => async (dispatch) => {
    try {
      await api.deleteQuest(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error.message);
    }
    
  };

  //af