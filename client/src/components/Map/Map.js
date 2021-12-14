import React, {useEffect,useState} from 'react';
import GoogleMapReact from 'google-map-react';
import { Container, Box, CircularProgress, Grid } from '@material-ui/core';
import Marker from './Markers/marker'
import { useDispatch,useSelector } from 'react-redux';
import useStyles from './styles';
import {getMarkers} from '../../actions/markers';

const Map = ({ setCurrentId }) => {
    
    const postmarkers = useSelector((state) => state.postmarkers);
    const dispatch = useDispatch();
    const classes = useStyles();
    const coordinates = { lat: 41.27518727573582, lng: 1.9879425228270187 };
 
    useEffect(()=>{
        dispatch(getMarkers()); 
      },[dispatch]);

    if(!postmarkers){
        return (
        <h1>loading...</h1>
        )
    }
    return (
        // !postmarkers.length ? <CircularProgress /> : (                                                  //loading spinner
        //     <Grid container alignItems="stretch" spacing={3} >
        //         {postmarkers.map((marker) => (                                                                
        //             <Grid key={marker._id} item xs={12}>
        //                 <Marker marker={marker} setCurrentId={setCurrentId} />

        //             </Grid>

        //         ))}

        //     </Grid>
        //  )

        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAt-akegvRfN5zpOklVMt-fYS6L6LnZo4Y' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={16}
                margin={[50, 50, 50, 50]}

            >
                
        
                {/* <Container >
                    <div style={{ width: '120%' }}>
                        <Box sx={{ display: 'grid', gridGap: '30px' }}>
                            <h1>marker</h1>  
                        </Box>
                    </div>
                </Container> */}


            </GoogleMapReact>
        </div>

    );
}

export default Map;