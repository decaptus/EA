import { FETCH_ALL_quest,FETCH_quest,CREATE_quest, UPDATE_quest, DELETE_quest } from '../constants/actionTypes';

import * as api from '../api/questions';


export const getQuests = () => async (dispatch) => {
    try {
      const { data } = await api.fetchQuests();        //we obtain a response of data from an api.get(url)
  
      dispatch({ type: FETCH_ALL_quest, payload: data });
      return data   //dispatch takes an action object as parameter
    } catch (error) {
      console.log(error.message);
    }
  };

  export const getQuest = (id) => async (dispatch) => {
    try {
      const { data } = await api.fetchQuest(id);        //we obtain a response of data from an api.get(url)
  
      dispatch({ type: FETCH_quest, data });   //dispatch takes an action object as parameter
      return data
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const createQuest = (quest) => async (dispatch) => {
  
    try {
      const { data } = await api.createQuest(quest);
  
      dispatch({ type: CREATE_quest, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const updateQuest = (id, quest) => async (dispatch) => {
    try {
      const { data } = await api.updateQuest(id, quest);
  
      dispatch({ type: UPDATE_quest, payload: data });
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };
 
  
  export const deleteQuest = (id) => async (dispatch) => {
    try {
      await api.deleteQuest(id);
  
      dispatch({ type: DELETE_quest, payload: id });
    } catch (error) {
      console.log(error.message);
    }
    
  };