import React, { useEffect, useState } from 'react';
import { Container, Box, CircularProgress, Grid, requirePropFactory } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles'; 
import { getMarkers } from '../../actions/markers';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';   

import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
 
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
    iconUrl: require('leaflet/dist/images/marker-icon.png').default,
    shadowUrl: require('leaflet/dist/images/marker-shadow.png').default
});
const MapView = ({ setCurrentId }) => {

    const postmarkers = useSelector((state) => state.postmarkers);
    const dispatch = useDispatch();
    const classes = useStyles();
    const coordinates = { lat: 41.27518727573582, lng: 1.9879425228270187 };

    useEffect(() => {
        dispatch(getMarkers());
    }, [dispatch]);

    if (!postmarkers) {
        return (
            <h1>loading...</h1>
        )
    }
    return (
        !postmarkers.length ? <CircularProgress /> : (    
                                                        
            <MapContainer center={coordinates} zoom={15} scrollWheelZoom={false}>

                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {postmarkers.map((marker) => (                                                                
                    <Marker    
                    key={marker.name}
                    position={[
                      marker.lat,
                      marker.lng
                    ]}>

                    <Popup> 
                        <div>{marker.name}</div>
                        <div>{marker.address}</div>
                    </Popup>

                </Marker> 
                    
                ))}
            </MapContainer >
              
         )
 
    );
}

export default MapView;