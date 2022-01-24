import React from 'react';
import { Button, Container, AppBar, Typography, Grow, Grid, CircularProgress } from '@material-ui/core'; 
import { useSelector } from 'react-redux';                                  //Allows you to extract data from the Redux store state, using a selector function.                  
 
import useStyles from './styles'; 
import wherearewe from '../../images/wherearewe.png'
import MapFlats from './MapFlats';
import Flat from './Flat/flat'

const Flats = ({ setCurrentId }) => {
  const postflats = useSelector((state) => state.postflats);                          //posts son los reducers combinados
  const flats = useStyles();
  const classes = useStyles();

  return(
      
    !postflats.length ? <CircularProgress /> : (                                                   
      <Grid className={flats.container} container  alignItems="stretch" spacing={3} >
        {postflats.map((flat) => (                                                                 
          <Grid key={flat._id} item xs={12}>
            <Flat key={flat._id} flat={flat} setCurrentId={setCurrentId} />
            
          </Grid>
          
        ))}
        
      </Grid>
    )
  ); 
 };

export default Flats;
