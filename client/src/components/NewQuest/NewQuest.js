import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createQuest, getQuests, updateQuest } from '../../actions/questions';

const NewQuestion = ({ currentId, setCurrentId }) => {
  const [user,setUser] = useState(JSON.parse(window.localStorage.getItem('profile')));
  const [questData, setQuestData] = useState({ creator: user.result._id, question: '', createdAt:new Date()});
  const question = useSelector((state) => (currentId ? state.questions.find((question) => question._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    if (question) {
      setQuestData(question);
    }
    if(updated){
      dispatch(getQuests());
    }
  }, [question,updated]);

  const clear = () => {
    setCurrentId(0);
    setQuestData({ creator: user.result._id, question: '', createdAt:new Date()});
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createQuest(questData));
      clear();
    } else {
      dispatch(updateQuest(currentId, questData));
      setUpdated(true)
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${question.title}"` : 'Ask something'}</Typography>
        <TextField name="question" variant="outlined" label="Question" fullWidth value={questData.question} onChange={(e) => setQuestData({ ...questData, question: e.target.value })} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default NewQuestion;