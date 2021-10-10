import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';


//actions creators are funcitions that return an action, and action is an object wich have type and payload 
//Las acciones son un bloque de información(objeto plano) que envia datos desde tu aplicación a tu store. Son la única fuente de información para el store. Las envias al store usando store.dispatch().


//Actions creator
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();        //we obtain a response of data from an api.get(url)

    dispatch({ type: FETCH_ALL, payload: data });   //dispatch takes an action object as parameter
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {

  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
  
};

export const Register = (post) => async (dispatch) => {

  try {
    const { data } = await api.Register(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

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