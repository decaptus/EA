import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getSubject = (id) => async (dispatch) => {
    try {
      const { data } = await api.fetchSubjects(id);
  
      dispatch({ type: LIKE, payload: data });
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };