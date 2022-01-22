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
  var bool = 0;

  useEffect(() => {
    Axios.get('http://localhost:4000/subjects')
      .then(response => {
        setSubjects(response.data)
      })
    bool = 1
  },[bool])

  const asiganturas = profesores.subjects;

  return (
    !asiganturas.length ? "This professor doesn't teach right now" : ( 

      <Grid className={classes.container} container  alignItems="stretch" spacing={6} >
        {asiganturas.map((asiganturas) => (                                                 //abrimos corchetes para indicar q es javascript y hacemos un loop para cada anuncio

            <Subject subjects={asiganturas} ></Subject>

        ))}
      </Grid>

    )
  );
};

export default Subjects_form;