import React from 'react';
import { Grid, CircularProgress, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';                                  //Allows you to extract data from the Redux store state, using a selector function.                  
import Subject from './Subject/subject';
import useStyles from './styles';

const Subjects = ({ setCurrentId2 }) => {
  const posts2 = useSelector((state) => state.posts);                          //posts son los reducers combinados
  const classes = useStyles();
  console.log(posts2);

  
  return (
    !posts2.length ? <CircularProgress /> : (                                                  //loading spinner
      <Grid className={classes.container} container  alignItems="stretch" spacing={6}>

        {posts2.map((post) => (                                                                //abrimos corchetes para indicar q es javascript y hacemos un loop para cada anuncio
          <Grid key={post._id} item xs={6} sm={8} md={4}>

          <Subject post={post} setCurrentId={setCurrentId2} /> 
            
          </Grid>
        ))}
        
      </Grid>
    )
  );
};

export default Subjects;
