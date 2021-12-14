import React from 'react';
import { Grid, CircularProgress, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';                                  //Allows you to extract data from the Redux store state, using a selector function.                  

import Flat from './Flat/flat';
import useStyles from './styles';

const Flats = ({ setCurrentId }) => {
  const postflats = useSelector((state) => state.postflats);                          //posts son los reducers combinados
  const flats = useStyles();

  return (
    !postflats.length ? <CircularProgress /> : (                                                  //loading spinner
      <Grid className={flats.container} container  alignItems="stretch" spacing={3} >
        {postflats.map((flat) => (                                                                //abrimos corchetes para indicar q es javascript y hacemos un loop para cada anuncio
          <Grid key={flat._id} item xs={12}>
            <Flat flat={flat} setCurrentId={setCurrentId} />
            
          </Grid>
          
        ))}
        
      </Grid>
    )
  );
};

export default Flats;
