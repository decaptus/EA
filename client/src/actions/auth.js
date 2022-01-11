import { AUTH ,FETCH} from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);  //nos devuelve por un lado la respuesta de mongoose y el token

    console.log(data);

    dispatch({ type: AUTH, data });


    router.push('/home');

  } catch (error) {
    console.log(error); 
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    console.log(formData);
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

  router.push('/home');

  } catch (error) {
    console.log(error);
  }

};

export const getUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchUser(id);        //we obtain a response of data from an api.get(url)

    dispatch({ type: FETCH, data });   //dispatch takes an action object as parameter
    return data
  } catch (error) {
    console.log(error.message);
  }
};





//adding some random text to be able to do a commit in new branchdd
