import React, {useState,useEffect} from "react";                                           //useeffect going to come the component will update
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';                                        //allows us tu dispatch an action


import Bulletins from '../components/Bulletins/bulletins';
import Form from '../components/lessonForm/form';
import { getPosts } from '../actions/posts';

import classIm from '../images/class.png';
import useStyles from '../styles';
import Navbar from '../components/Navbar/Navbar'
import { useTranslation } from "react-i18next";


const Lessons = () => {

    const [currentId, setCurrentId] = useState(0);
    const [showForm, setShowForm] = useState(false);
    const classes = useStyles();
    const dispatch = useDispatch();
    const [t, i18n] = useTranslation("global");

    useEffect(() => {
      dispatch(getPosts());                           //aqui llamamos a la acción, y inmediatamente va al reducer y hace match, con lo q modifica el estado del 'store'
    }, [currentId, dispatch]);

    return(
      <>
      <Navbar/>

        <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">{t("lessons_page.title")}</Typography>
          <img  className={classes.heading} src={classIm} alt="classIm" height="60"  />
        </AppBar>
        <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={1}>
            <Grid item xs={4} sm={9}>
              <Bulletins setCurrentId={setCurrentId} />
            </Grid >
            <Grid item sm={2}>
              {showForm && (
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              )}
               {!showForm && (
               <Button variant="contained"  type="submit" fullWidth onClick={() => setShowForm(true)}>{t("lessons_page.button")}</Button>

              )}
           
            </Grid>         
          </Grid>
         
        </Container>
      </Grow>
     
      

      </Container>
      </>
     
    );

}

export default Lessons;


/*
<Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            delete

*/
