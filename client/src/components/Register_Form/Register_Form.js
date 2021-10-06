import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ name: '', email: '', password: '', age: '', subjects: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => { //Limpiamos los campos
    setCurrentId(0);
    setPostData({ name: '', email: '', password: '', age: '', subjects: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Register'}</Typography>
        <TextField name="Name" variant="outlined" label="Name" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, name: e.target.value })} />
        <TextField name="Email" variant="outlined" label="Email" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, email: e.target.value })} />
        <TextField name="Password" variant="outlined" label="Password" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, password: e.target.value })} />
        <TextField name="Age" variant="outlined" label="Age" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, age: e.target.value })} />
        <TextField name="Subjects" variant="outlined" label="Subjects" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, subjects: e.target.value })} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;