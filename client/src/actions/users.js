import { FETCH_ALL,FETCH,CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/users';


export const getUsers = () => async (dispatch) => {
    try {
      const { data } = await api.fetchUsers();        //we obtain a response of data from an api.get(url)
  
      dispatch({ type: FETCH_ALL, payload: data });   //dispatch takes an action object as parameter
    } catch (error) {
      console.log(error.message);
    }
  };