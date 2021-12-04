import { AUTH, FETCH,FETCH_ALL } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error); 
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }

};

export const getUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchUser(id);        //we obtain a response of data from an api.get(url)

    dispatch({ type: FETCH, data });   //dispatch takes an action object as parameter





  } catch (error) {
    console.log(error.message);
  }
};





//adding some random text to be able to do a commit in new branch
