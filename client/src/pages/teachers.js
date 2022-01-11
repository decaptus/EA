import React, {useState,useEffect} from "react";                                           //useeffect going to come the component will update
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';    
import Axios from 'axios';                                    //allows us tu dispatch an action


import Bulletins from '../components/Bulletins/bulletins';
import Teachers_form from '../components/Teachers/teachers';
import { getPosts } from '../actions/posts';

import classIm from '../images/class.png';
import useStyles from '../styles';
import Navbar from '../components/Navbar/Navbar'

const Teachers = () => {

  const classes = useStyles();

  return(
    <>
    <Navbar/>

      <Container maxWidth="lg">
      <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={1}>
          <Grid item xs={4} sm={9}>
            <Teachers_form />
          </Grid >       
        </Grid>
       
      </Container>
    </Grow>
   
    

    </Container>
    </>
   
  );
  
  /*return (
    <Navbar/>
    <Teachers_form />
  )*/
}

export default Teachers;