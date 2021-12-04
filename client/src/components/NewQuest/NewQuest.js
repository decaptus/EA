import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createQuest, updateQuest } from '../../actions/questions';

const NewQuestion = ({ currentId, setCurrentId }) => {
  const [questData, setQuestData] = useState({ creator: '', question: '', date: '',solved: false, answerCountNumber: 0});
  const question = useSelector((state) => (currentId ? state.questions.find((question) => question._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (question) setQuestData(question);
  }, [question]);

  const clear = () => {
    setCurrentId(0);
    setQuestData({ creator: '', question: '', date: '',solved: false, answerCountNumber: 0});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createQuest(questData));
      clear();
    } else {
      dispatch(updateQuest(currentId, questData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${question.title}"` : 'Ask something'}</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={questData.creator} onChange={(e) => setQuestData({ ...questData, creator: e.target.value })} />
        <TextField name="question" variant="outlined" label="Question" fullWidth value={questData.question} onChange={(e) => setQuestData({ ...questData, question: e.target.value })} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default NewQuestion;