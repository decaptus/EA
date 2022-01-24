import axios from 'axios';  

const url_ans = 'http://localhost:4000/teachers';        //direccion de las preguntas del foro

export const fetchTeachers = () => axios.get(url_ans);
export const fetchTeacher = (id) => axios.get(`${url_ans}/${id}`);
export const createTeacher = (newAns) => axios.post(url_ans, newAns);
export const updateTeacher = (id, updatedAns) => axios.put(`${url_ans}/${id}`, updatedAns);
export const deleteTeacher = (id) => axios.delete(`${url_ans}/${id}`);