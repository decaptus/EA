import axios from 'axios';                               //we're going to use it to do API calls

const url_bulltin = 'http://localhost:4000/tutor';              //direccion del backend para bulletins
const url_logIn = 'http://localhost:4000/users';
             //direccion del backend para Register y LogIn


//posts
export const fetchPosts = () => axios.get(url_bulltin);
export const createPost = (newPost) => axios.post(url_bulltin, newPost);
export const likePost = (id) => axios.patch(`${url_bulltin}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url_bulltin}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url_bulltin}/${id}`);

//user
export const Register = (newPost) => axios.post(url_logIn, newPost);
export const fetchUsers = () => axios.get(url_logIn);
export const fetchUser = (id) => axios.get(`${url_logIn}/${id}`);
export const createUser= (newPost) => axios.post(url_logIn, newPost);
export const updateUser = (id, updatedUser) => axios.patch(`${url_logIn}/${id}`, updatedUser);
export const deleteUser = (id) => axios.delete(`${url_logIn}/${id}`);

export const signIn = (formData) => axios.post('/users/signin', formData);
export const signUp = (formData) => axios.post('/users/signup', formData);


 