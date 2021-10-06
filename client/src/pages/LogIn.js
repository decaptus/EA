import React, {useState,useEffect} from "react";                                           //useeffect going to come the component will update
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';                                        //allows us tu dispatch an action


import LogIn_Form from '../components/LogIn_Form/LogIn_Form';
import Register_Form from '../components/Register_Form/Register_Form';
import { getPosts } from '../actions/posts';

const LogIn = () => {

    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPosts());                           //aqui llamamos a la acción, y inmediatamente va al reducer y hace match, con lo q modifica el estado del 'store'
    }, [currentId, dispatch]);

    return(
      <Container maxWidth="lg">
      <Grow in>
        <Container>
          <Grid container justify="center" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={4}>
              <Register_Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <LogIn_Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
      </Container>
    );

}

export default LogIn;
