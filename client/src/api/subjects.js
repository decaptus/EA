import axios from 'axios';  

const url_subjects = 'http://localhost:4000/subjects';       

export const fetchSubjects = () => axios.get(url_subjects);
export const fetchSubject = (id) => axios.get(`${url_subjects}/${id}`);
export const createSubject = (newSubject) => axios.post(url_subjects, newSubject);
export const updateSubject = (id, updatedSubject) => axios.put(`${url_subjects}/${id}`, updatedSubject);
export const deleteSubject = (id) => axios.delete(`${url_subjects}/${id}`);