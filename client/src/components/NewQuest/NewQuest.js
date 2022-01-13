import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import useStyles from './styles';
import { createQuest, getQuests, updateQuest } from '../../actions/questions';

const NewQuestion = ({ currentId, setCurrentId }) => {
  const [user,setUser] = useState(JSON.parse(window.localStorage.getItem('profile')));
  const [questData, setQuestData] = useState({ creator: user.result._id, question: '', createdAt:new Date(),subject:''});
  const question = useSelector((state) => (currentId ? state.questions.find((question) => question._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const [updated, setUpdated] = useState(false);
  const [subject, setSubj] = useState(null);
  const subjects = useSelector((state)=>state.subjects);

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
    setQuestData({ creator: user.result._id, question: '', createdAt:new Date(), subject:''});
    
  };

  function setSubject(val){
    console.log(val)
    if(val){
        setQuestData({ ...questData, subject: val._id })
        setSubj(val)
      }
    }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(questData.question!=='' && questData.subject!==''){
      dispatch(createQuest(questData));
      setSubj(null)
      clear();
    } else {
      if(questData.question!=='' && questData.subject!==''){
      dispatch(updateQuest(currentId, questData));
      setUpdated(true)
      setSubj(null)
      clear();
      }
    }
  };

  if(!subjects){
    return <>Loading...</>
    }
  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${question.title}"` : 'Ask something'}</Typography>
        <TextField name="question" variant="outlined" label="Question" fullWidth value={questData.question} onChange={(e) => setQuestData({ ...questData, question: e.target.value })}/>
        <Stack spacing={2} sx={{ width: 320 }}>
          <Autocomplete
            id="Subject"
            value={subject}
            options={subjects}
            getOptionLabel={(option) => option.name || ""}
            onChange={(e,value) => { setSubject(value)}}
            renderInput={(params) => <TextField {...params} label="Subject"/> }
          />
        </Stack>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
      </form>
    </Paper>
  );
};

export default NewQuestion;