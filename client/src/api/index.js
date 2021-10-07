import axios from 'axios';                               //we're going to use it to do API calls

const url_bulltin = 'http://localhost:4000/posts';              //direccion del backend para bulletins
const url_logIn = 'http://localhost:4000/user';              //direccion del backend para Register y LogIn


export const fetchPosts = () => axios.get(url_bulltin);
export const createPost = (newPost) => axios.post(url_bulltin, newPost);
export const likePost = (id) => axios.patch(`${url_bulltin}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url_bulltin}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url_bulltin}/${id}`);

export const Register = (newPost) => axios.post(url_logIn, newPost);

 