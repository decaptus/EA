import React, {useState,useEffect} from "react";                                           //useeffect going to come the component will update
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';                                        //allows us tu dispatch an action

import FlatsComp from '../components/Flats/flats';
import { getFlats } from '../actions/flats';

import homeIm from '../images/home.png';
import useStyles from '../styles';
import NewFlat from "../components/NewFlat_Form/NewFlat";
import Navbar from '../components/Navbar/Navbar';
import { useTranslation } from "react-i18next";


const Flats = () => {

    const [currentId, setCurrentId] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();
    const [t, i18n] = useTranslation("global");
    const [pulsadoNew, setPulsadoNew] = useState(false);

    useEffect(() => {
      dispatch(getFlats());                           //aqui llamamos a la acción, y inmediatamente va al reducer y hace match, con lo q modifica el estado del 'store'
    }, [currentId, dispatch]);

    return(
      <>
    <Navbar/>
        <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">{t("flat_page.title")}</Typography>
          <img  className={classes.heading} src={homeIm} alt="homeIm" height="60"  />
        </AppBar>
        <Grow in>

            {pulsadoNew ? (
              <Container>
              <Grid container justify="space-between" alignItems="stretch" spacing={2}>

              <Grid item sm={2}>
              <Button variant="contained" color="primary" type="submit" onClick = {() => setPulsadoNew(!pulsadoNew)} fullWidth>{t("flat_page.cancel")}</Button>
              <h1></h1>
              </Grid> 

              <Grid item xs={4}> 
              <NewFlat currentId={currentId} setCurrentId={setCurrentId}/>
              </Grid>
              
              </Grid>
              </Container>
            ) : (
              <Container>
              <Grid container justify="space-between" alignItems="stretch" spacing={2}>

              <Grid>
              <Grid item sm={2}>
              <Button variant="contained" color="primary" type="submit" onClick = {() => setPulsadoNew(!pulsadoNew)} fullWidth>{t("flat_page.post")}</Button>
              <h1></h1>
              </Grid> 
              

              <AppBar className={classes.appBarCards} position="static" color="inherit">
              <Grid item sm={6}>
              <FlatsComp />
              </Grid>
              </AppBar>
              </Grid>
              
              </Grid>
              </Container>
              
            )}
            
      </Grow>     

      </Container>
      
    </>
    );

}

export default Flats;
