import React, {useEffect,useState} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Questions from '../components/Questions/Questions';
import NewQuestion from '../components/NewQuest/NewQuest';
import { useDispatch } from "react-redux";
import {getPosts, getQuest} from '../actions/posts.js';



function Forum() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getQuest()); //dispatch the action 'getPosts'
  },[dispatch]);

  return (
    <Container maxwidth="lg">
      <Grow in>
        <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Questions setCurrentId={setCurrentId}/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <NewQuestion currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
      </Grow>
    </Container>
  );
}

export default Forum;