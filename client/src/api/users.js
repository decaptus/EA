import axios from 'axios';  

const url_usr = 'http://localhost:4000/users';        //direccion de las preguntas del foro

export const fetchUsers = () => axios.get(url_usr);