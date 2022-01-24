import React, {useState,useEffect} from "react";                                           //useeffect going to come the component will update
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';    
import Axios from 'axios';                                    //allows us tu dispatch an action


import Bulletins from '../components/Bulletins/bulletins';
import Teachers_form from '../components/Teachers/teachers';
import { getPosts } from '../actions/posts';

import TeacherIm from '../images/teachers.png';
import useStyles from '../styles';
import Navbar from '../components/Navbar/Navbar'
import { useTranslation } from "react-i18next";

const Teachers = () => {

  const classes = useStyles();
  const [t, i18n] = useTranslation("global");

  return(
    <>
    <Navbar/>

    <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography className={classes.heading} variant="h2" align="center">{t("teacher_page.title")}</Typography>
      <img  className={classes.heading} src={TeacherIm} alt="classIm" height="60"  />
    </AppBar>

      <Container maxWidth="lg">
      <Grow in>
      <Container>
        <Grid container justify="center" alignItems="stretch" spacing={1}>
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