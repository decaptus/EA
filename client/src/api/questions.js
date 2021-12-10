import axios from 'axios';  

const url_quest = 'http://localhost:4000/questions';        //direccion de las preguntas del foro

export const fetchQuests = () => axios.get(url_quest);
export const fetchQuest = (id) => axios.get(`${url_quest}/${id}`);
export const createQuest = (newPost) => axios.post(url_quest, newPost);
export const updateQuest = (id, updatedPost) => axios.put(`${url_quest}/${id}`, updatedPost);
export const deleteQuest = (id) => axios.delete(`${url_quest}/${id}`);