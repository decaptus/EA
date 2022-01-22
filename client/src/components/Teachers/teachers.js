import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';   

import useStyles from './styles';
import Teacher from './teacher/teacher';

const Teachers_form = () => {
  
  const [profesores, setProfesores] = useState([])
  
  useEffect(() => {
    Axios.get('http://localhost:4000/teachers')
      .then(response => {
        setProfesores(response.data)
      })
  }, [])
  const classes = useStyles();



  return (
    !profesores.length ? <CircularProgress /> : ( 
      <Grid className={classes.container} container  alignItems="stretch" spacing={6} >
        {profesores.map((profesores) => (                                                 //abrimos corchetes para indicar q es javascript y hacemos un loop para cada anuncio
          <Grid key={profesores._id} item xs={3} sm={4} md={6}>
            <Teacher profesores={profesores} setProfesores={setProfesores}></Teacher>
          </Grid>
        ))}
        
      </Grid>
    )
  );
};

export default Teachers_form;