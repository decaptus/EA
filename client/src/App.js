import React, {useState,useEffect} from "react";                                           //useeffect going to come the component will update
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';                                        //allows us tu dispatch an action


import Bulletins from './components/Bulletins/bulletins';
import Form from './components/Form/form';
import { getPosts } from './actions/posts';

import classIm from './images/class.png';
import useStyles from './styles';

const App = () => {

    const [currentId, setCurrentId] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch]);

    return(
        <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">Bulletin board</Typography>
          <img  className={classes.heading} src={classIm} alt="classIm" height="60"  />
        </AppBar>
        <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Bulletins setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>





      </Container>
    );

}

export default App;
