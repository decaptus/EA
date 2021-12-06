import React from 'react';
import { Grid, CircularProgress, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';                                  //Allows you to extract data from the Redux store state, using a selector function.                  

import Teacher from './Teachers/teacher';
import useStyles from './styles';

const Teachers = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);                          //posts son los reducers combinados
  const classes = useStyles();
  console.log(posts);
  
  return (
    !posts.length ? <CircularProgress /> : (                                                  //loading spinner
      <Grid className={classes.container} container  alignItems="stretch" spacing={6}>

        {posts.map((post) => (                                                                //abrimos corchetes para indicar q es javascript y hacemos un loop para cada anuncio
          <Grid key={post._id} item xs={6} sm={8} md={4}>

            <Teacher post={post} setCurrentId={setCurrentId} />
            
          </Grid>
        ))}
        
      </Grid>
    )
  );
};

export default Teachers;
