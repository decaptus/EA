import axios from 'axios';                               //we're going to use it to do API calls

const url_bulltin = 'http://localhost:4000/tutor';              //direccion del backend para bulletins
const url_logIn = 'http://localhost:4000/user';
const url_quest = 'http://localhost:4000/user';              //direccion del backend para Register y LogIn
const url_flats = 'http://localhost:4000/flats';
const url_markers = 'http://localhost:4000/markers';

//posts
export const fetchPosts = () => axios.get(url_bulltin);
export const createPost = (newPost) => axios.post(url_bulltin, newPost);
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
export const fetchQuest = () => axios.get(url_quest);
export const createQuest = (newPost) => axios.post(url_quest, newPost);
export const likeQuest = (id) => axios.patch(`${url_quest}/${id}/likePost`);
export const updateQuest = (id, updatedPost) => axios.patch(`${url_quest}/${id}`, updatedPost);
export const deleteQuest = (id) => axios.delete(`${url_quest}/${id}`);

export const signIn = (formData) => axios.post('/user/signin', formData);
export const signUp = (formData) => axios.post('/user/signup', formData);


 