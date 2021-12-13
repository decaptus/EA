import React from 'react';
import GoogleMapReact from 'google-map-react';
/*import { Paper, Typography, useMediaQuery } from '@material-ui/core';*/
/*import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';*/

import useStyles from './styles';

const Map = () => {
    const classes = useStyles();
    /*const isMobile = useMediaQuery('(min-width:600px');*/
    // const coordinates = {lat: 41.288046125642715, lng: 1.998793944622163};
    const coordinates = {lat: 41.27518727573582, lng: 1.9879425228270187};
    return(
        <div className= {classes.mapContainer}>
            <GoogleMapReact
            bootstrapURLKeys = {{key:'AIzaSyAt-akegvRfN5zpOklVMt-fYS6L6LnZo4Y'}}
            defaultCenter = {coordinates}
            center = {coordinates}
            defaultZoom = {16}
            margin = {[50,50,50,50]}
            options = {''}
            // onChange = {(e) => {
            //     setCoordinates({lat:e.center.lat, lng:e.center.lng});
            //     setBounds({ne:e.marginBounds.ne, sw:e.marginBounds.sw});
            // }}
            //onChildClick = {''}
            >

            </GoogleMapReact>
        </div>
    );
}

export default Map;