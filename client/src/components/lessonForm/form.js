import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createPost } from '../../actions/posts';

const Form = ( ) => {
  const [lessonData, setLessonData] = useState({ creatorName: ' ', subject: '', description: '', price: '' ,picture: ' ', creatorId: ''});  
  const [user,setUser] = useState(JSON.parse(window.localStorage.getItem('profile')));
  
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
        <Typography variant="h6">Post a lesson</Typography>
        <TextField name="subject" variant="outlined" label="Subject" fullWidth value={lessonData.subject} onChange={(e) => setLessonData({ ...lessonData, subject: e.target.value })} />
        <TextField name="description" variant="outlined" label="Description" fullWidth value={lessonData.description} onChange={(e) => setLessonData({ ...lessonData, description: e.target.value })} />
        <TextField name="price" variant="outlined" label="Price" fullWidth value={lessonData.price} onChange={(e) => setLessonData({ ...lessonData, price: e.target.value })} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;