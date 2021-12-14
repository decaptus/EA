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

const url_quest = 'http://localhost:4000/user';              //direccion del backend para Register y LogIn
const url_flats = 'http://localhost:4000/flats';
const url_markers = 'http://localhost:4000/markers';


//posts
export const fetchPosts = () => axios.get(url_bulltin);
export const createPost = (newPost) => API.post(url_bulltin, newPost);
export const likePost = (id) => axios.patch(`${url_bulltin}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url_bulltin}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url_bulltin}/${id}`);

//markers 
export const fetchMarkers = () => axios.get(url_markers);

//flats
export const fetchFlats = () => axios.get(url_flats);
export const getFlat = (id) => axios.get(`${url_flats}/${id}`);
export const createFlat = (newFlat) => axios.post(url_flats, newFlat);
export const updateFlat = (id, updatedFlat) => axios.patch(`${url_flats}/${id}`, updatedFlat);
export const deleteFlat = (id) => axios.delete(`${url_flats}/${id}`);
export const likeFlat = (id) => axios.patch(`${url_flats}/${id}/likeFlat`);

//user
export const Register = (newPost) => axios.post(url_logIn, newPost);

export const fetchUser = (id) => axios.get(`${url_logIn}/${id}`);


export const signIn = (formData) => axios.post(`${url_logIn}/signin`, formData);
export const signUp = (formData) => axios.post(`${url_logIn}/signup`, formData);

 