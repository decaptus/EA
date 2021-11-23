import React from 'react';
import { Grid, CircularProgress, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';                                  //Allows you to extract data from the Redux store state, using a selector function.                  

import Bulletin from './Bulletin/bulletin';
import useStyles from './styles';

const Bulletins = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);                          //posts son los reducers combinados
  const classes = useStyles();

  return (
    !posts.length ? <CircularProgress /> : (                                                  //loading spinner
      <Grid className={classes.container} container  alignItems="stretch" spacing={6} >
        {posts.map((post) => (                                                                //abrimos corchetes para indicar q es javascript y hacemos un loop para cada anuncio
          <Grid key={post._id} item xs={3} sm={4} md={4}>
            <Bulletin post={post} setCurrentId={setCurrentId} />
            
          </Grid>
          
        ))}
        
      </Grid>
    )
  );
};

export default Bulletins;
