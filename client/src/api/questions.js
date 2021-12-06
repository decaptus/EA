import axios from 'axios';  

const url_quest = 'http://147.83.7.158:4000/questions';        //direccion de las preguntas del foro

export const fetchQuest = () => axios.get(url_quest);
export const createQuest = (newPost) => axios.post(url_quest, newPost);
export const likeQuest = (id) => axios.patch(`${url_quest}/${id}/likePost`);
export const updateQuest = (id, updatedPost) => axios.patch(`${url_quest}/${id}`, updatedPost);
export const deleteQuest = (id) => axios.delete(`${url_quest}/${id}`);