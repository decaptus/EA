import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createPost } from '../../actions/posts';
import { useTranslation } from "react-i18next";

const Form = ( ) => {
  const [lessonData, setLessonData] = useState({ creatorName: ' ', subject: '', description: '', price: '' ,picture: ' ', creatorId: ''});  
  const [user,setUser] = useState(JSON.parse(window.localStorage.getItem('profile')));
  const [t, i18n] = useTranslation("global");
  const dispatch = useDispatch(); 
  
  const classes = useStyles();

  

  const clear = () => {
    setLessonData({creatorName: ' ', subject: '', description: '', price: '' , picture: ' ', creatorId: '' });
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();
    

      lessonData.creatorName = user.result.name;
      lessonData.picture= user.result.picture;
      lessonData.creatorId= user.result._id;

      console.log(lessonData);



    dispatch(createPost(lessonData));          
    clear();
   
  };

  return ( 
    <Paper className={classes.paper}>
      
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>  
        <Typography variant="h6">{t("lessons_form.post")}</Typography>
        <TextField name="subject" variant="outlined" label={t("lessons_form.subject")} fullWidth value={lessonData.subject} onChange={(e) => setLessonData({ ...lessonData, subject: e.target.value })} />
        <TextField name="description" variant="outlined" label={t("lessons_form.description")} fullWidth value={lessonData.description} onChange={(e) => setLessonData({ ...lessonData, description: e.target.value })} />
        <TextField name="price" variant="outlined" label={t("lessons_form.price")} fullWidth value={lessonData.price} onChange={(e) => setLessonData({ ...lessonData, price: e.target.value })} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>{t("lessons_form.submit")}</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>{t("lessons_form.clear")}</Button>
      </form>
    </Paper>
  );
};

export default Form;