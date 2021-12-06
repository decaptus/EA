import React, {useState,useEffect} from "react";                                           //useeffect going to come the component will update
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';                                        //allows us tu dispatch an action


import Teachers from '../components/Teachers/teachers';
import Form from '../components/lessonForm/form';
import { getTeachers } from '../actions/teachers';

import classIm from '../images/class.png';
import useStyles from '../styles';



const Teachers_Page = () => {

    const [currentId, setCurrentId] = useState(0);
    const [showForm, setShowForm] = useState(false);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getTeachers());                           //aqui llamamos a la acción, y inmediatamente va al reducer y hace match, con lo q modifica el estado del 'store'
    }, [currentId, dispatch]);

    return(
        <Container maxWidth="lg">

            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Teachers</Typography>
                <img  className={classes.heading} src={classIm} alt="classIm" height="60"  />
            </AppBar>

            <Grow in>
                <Container>
                    <Grid justify="space-between" alignItems="stretch" spacing={1}>
                            <Grid item>
                                <Teachers setCurrentId={setCurrentId} />
                            </Grid >   
                    </Grid>
                
                </Container>
            </Grow>
     
      </Container>
     
    );
}

export default Teachers_Page;