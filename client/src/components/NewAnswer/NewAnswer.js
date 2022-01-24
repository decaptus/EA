import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { createAnswer, updateAnswer } from '../../actions/answers';
import { updateQuest,getQuest, getQuests } from '../../actions/questions';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NewAnswer ({questData, setQuestData}) {
  const [user,setUser] = useState(JSON.parse(window.localStorage.getItem('profile')));
  const classes = useStyles();
  const [ansData, setAnsData] = useState({ creator: user.result._id, answer: '', createdAt:new Date()});
  const dispatch = useDispatch();
  const [idAns, setId]=useState(null);
  const answer = useSelector((state) => (idAns ? state.answers.find((ans) => ans._id === idAns) : null));
  const [quest, setQData]=useState({_id:questData._id,creator:questData.creator,question:questData.question,createdAt:questData.createdAt,answers:questData.answers});
  const [t, i18n] = useTranslation("global");
  

  useEffect(() => {
    if (answer) setAnsData(answer);
    if(quest.answers.indexOf(idAns)!=-1){
        dispatch(updateQuest(questData._id,quest)).then(data=>setQuestData(data))
        clear();
    }

  }, [answer,quest]);

  const clear = () => {
    setAnsData({ creator: user.result._id, answer: '', createdAt:new Date()});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAnsData({ ...ansData, createdAt:new Date()})
    dispatch( createAnswer(ansData)).then(val=>{
        setId(val._id)
        setQData({ ...quest, answers: quest.answers.concat(val._id)});
    
    });

    clear();
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <TextField name="answer" variant="outlined" label={t("new_answer.answer")} fullWidth value={ansData.answer} onChange={(e) => setAnsData({ ...ansData, answer: e.target.value })} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>{t("new_answer.submit")}</Button>
      </form>
    </Paper>
  );
};


export default NewAnswer;