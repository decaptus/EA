import React, {useEffect,useState} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Questions from '../components/Questions/Questions';
import NewQuestion from '../components/NewQuest/NewQuest';
import { useDispatch } from "react-redux";
import {getPosts, getQuest} from '../actions/posts.js';
import useStyles from '../styles';
import forumImage from '../images/forum.png';


function Forum() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(()=>{
    dispatch(getQuest()); //dispatch the action 'getPosts'
  },[dispatch]);

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">Forum </Typography>
          <img  className={classes.heading} src={forumImage} alt="forumImage" height="60"  />
        </AppBar>
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