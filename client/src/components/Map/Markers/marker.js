import React, { useEffect, useState } from 'react'; 
import { Container, Box, CircularProgress, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from '../styles';
import { getMarkers } from '../../../actions/markers';

const Marker = ({marker: marker, setCurrentId }) => {
    const dispatch = useDispatch(); 
    const postmarkers = useSelector((state) => state.postmarkers);
    const classes = useStyles();
    
    useEffect(() => {
        dispatch(getMarkers());
    }, [dispatch]);

    return(

      !postmarkers.length ? <CircularProgress /> : (                                                  //loading spinner
            <Grid container alignItems="stretch" spacing={3} >
                {postmarkers.map((marker) => (                                                                
                    <Grid key={marker._id} item xs={12}>
                        <Marker 
                        marker={marker} 
                        setCurrentId={setCurrentId}
                        position={{
                          lat: marker.lat,
                          lng: marker.lng
                      }} />

                    </Grid>

                ))}

            </Grid>
         )

    );
}   
export default Marker;
