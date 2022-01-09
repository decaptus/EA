import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';   

import useStyles from './styles';
import Subject from './subject/subject';

const Subjects_form = ({ profesores: profesores }) => {
  const [subjects, setSubjects] = useState([])
  useEffect(() => {
    Axios.get('http://localhost:4000/subjects')
      .then(response => {
        setSubjects(response.data)
      })
  })

  const classes = useStyles();
  
  return (
    !subjects.length ? <CircularProgress /> : ( 

      <Grid className={classes.container} container  alignItems="stretch" spacing={6} >
        {subjects.map((subjects) => (                                                 //abrimos corchetes para indicar q es javascript y hacemos un loop para cada anuncio

            <Subject subjects={subjects} setSubjects={setSubjects}></Subject>

        ))}
      </Grid>

    )
  );
};

export default Subjects_form;