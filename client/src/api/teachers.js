import axios from 'axios';  

const url_ans = 'http://localhost:4000/teachers';        //direccion de las preguntas del foro

export const fetchAnswers = () => axios.get(url_ans);
export const fetchAnswer = (id) => axios.get(`${url_ans}/${id}`);
export const createAnswer = (newAns) => axios.post(url_ans, newAns);
export const updateAnswer = (id, updatedAns) => axios.put(`${url_ans}/${id}`, updatedAns);
export const deleteAnswer = (id) => axios.delete(`${url_ans}/${id}`);