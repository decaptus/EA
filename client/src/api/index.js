import axios from 'axios';                               //we're going to use it to do API calls

const url_bulltin = 'http://localhost:4000/tutor';              //direccion del backend para bulletins
const url_logIn = 'http://localhost:4000/users';

const API = axios.create({ baseURL: 'http://localhost:4000' });


API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    console.log( `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`);
  }

  return req;
});

//posts
export const fetchPosts = () => axios.get(url_bulltin);
export const createPost = (newPost) => API.post(url_bulltin, newPost);
export const likePost = (id) => axios.patch(`${url_bulltin}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url_bulltin}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url_bulltin}/${id}`);

//user
export const Register = (newPost) => axios.post(url_logIn, newPost);

export const fetchUser = (id) => axios.get(`${url_logIn}/${id}`);


export const signIn = (formData) => axios.post(`${url_logIn}/signin`, formData);
export const signUp = (formData) => axios.post(`${url_logIn}/signup`, formData);

 