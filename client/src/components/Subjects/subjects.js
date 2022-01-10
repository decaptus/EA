import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';   

import useStyles from './styles';
import Subject from './subject/subject';

const Subjects_form = ({ profesores: profesores }) => {
  const classes = useStyles();
  const [subjects, setSubjects] = useState([])
  const misubject = []  //Subjects de este profesor

  
  useEffect(() => {
    Axios.get('http://localhost:4000/subjects')
      .then(response => {
        setSubjects(response.data)
      })
  })


  for ( var i=0; i<subjects.length; i++) {  //Recorremos todos los puestos de subjects en general
    for ( var a=0; a<profesores.subjects.length; a++) {  //Recorremos todos los puestos de subjects en profesores
      /*if (subjects[i]._id == profesores.subjects[a]._id) {
        misubject[a] = subjects[i];
      }*/
    }
  }

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