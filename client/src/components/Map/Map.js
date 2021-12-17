import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react'; 
import Marker from 'google-map-react';
import { Container, Button, CircularProgress, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { getMarkers } from '../../actions/markers';

const Map = ({ setCurrentId }) => {

    const postmarkers = useSelector((state) => state.postmarkers);
    const dispatch = useDispatch();
    const classes = useStyles();
    const coordinates = { lat: 41.27518727573582, lng: 1.9879425228270187 };

    useEffect(() => {
        dispatch(getMarkers());
    }, [dispatch]);



    if (!postmarkers) {
        return (
            <CircularProgress />
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

                <Marker
                    title={'The marker`s title.'}
                    name={'The markers name.'}
                    position={{lat: 41.27518727573582, lng: 1.9879425228270187}}
                />
                {/* {postmarkers.map((marker) => (
            <Marker 
                title={'The marker`s title will appear as a tooltip.'}
                name={marker.name}
                position={{
                    lat: marker.lat,
                    lng: marker.lng
                }}  
                
            />
            ))} */}

                {/* 
                {postmarkers.map((marker,i) => {
                    return (
                        <Marker
                            key={i}
                            name={"Current location"}
                            position={{
                                lat: marker.lat,
                                lng: marker.lng
                            }}
                      /> 
                      ); 
                    })} */}


            </GoogleMapReact>
        </div>

    );
}

export default Map;