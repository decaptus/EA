import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ creator: '', title: '', description: '', price: '', picture: '' });  //object/state to store data. declaring as a empty string 
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', description: '', price: '', picture: '' });
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();   //not to get the refresh in the browser,  evita q se haga la accion predeterminada

    if (currentId === 0) {
      dispatch(createPost(postData));          //hacemos un dispatch de una accion, le pasamos todos los datos para crear un nuevo anuncio cuando el usuairo hace un submit 
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear(); 
    }
  };

  return ( 
    <Paper className={classes.paper}>
      
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>  
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Bulletin'}</Typography>
        <TextField 
        name="creator" 
        variant="outlined" 
        label="Creator" 
        fullWidth 
        value={postData.creator} 
        onChange={(e) => setPostData({ ...postData, creator: e.target.value })} //event as a parameter, setPostData -> setter method for the state, assign creator to the event.target.value. we put "...postdata" to avoid override when we add more textflieds
        />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })} />
        <TextField name="price" variant="outlined" label="Price" fullWidth value={postData.price} onChange={(e) => setPostData({ ...postData, price: e.target.value })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, picture: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;