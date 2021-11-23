import React, {useState,useEffect} from "react";                                           //useeffect going to come the component will update
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';                                        //allows us tu dispatch an action


import Bulletins from '../components/Bulletins/bulletins';
import Form from '../components/Form/form';
import { getPosts } from '../actions/posts';

import classIm from '../images/class.png';
import useStyles from '../styles';

const Lessons = () => {

    const [currentId, setCurrentId] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPosts());                           //aqui llamamos a la acción, y inmediatamente va al reducer y hace match, con lo q modifica el estado del 'store'
    }, [currentId, dispatch]);

    return(
        <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">Private classes of students</Typography>
          <img  className={classes.heading} src={classIm} alt="classIm" height="60"  />
        </AppBar>
        <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={1}>
            <Grid item xs={4} sm={9}>
              <Bulletins setCurrentId={setCurrentId} />
            </Grid >
            <Grid item sm={2}>
            <Button variant="contained" color="secondary" type="submit" fullWidth>Post class</Button>
            </Grid>         
          </Grid>
         
        </Container>
      </Grow>
     
      

      </Container>
     
    );

}

export default Lessons;


/*
<Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>

*/
