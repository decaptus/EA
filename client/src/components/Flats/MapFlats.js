import React, { useEffect, useState } from 'react';
import { Container, Box, CircularProgress, Grid, requirePropFactory, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles'; 
import { getFlats, getFlat } from '../../actions/flats';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';   

import L from 'leaflet';
import Flat from './Flat/flat';
import FlatInfo from '../FlatInfo/FlatInfo';
import { Link, useHistory} from 'react-router-dom'; 

delete L.Icon.Default.prototype._getIconUrl;
 
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
    iconUrl: require('leaflet/dist/images/marker-icon.png').default,
    shadowUrl: require('leaflet/dist/images/marker-shadow.png').default
});


const MapFlats = ({ setCurrentId }) => {

    const postflats = useSelector((state) => state.postflats);
    const dispatch = useDispatch();
    const classes = useStyles();
    const coordinates = { lat: 41.321145081334556, lng: 2.0380449306553925};

    useEffect(() => {
        dispatch(getFlats());
    }, [dispatch]);

    if (!postflats) {
        return (
            <h1>loading...</h1>
        )
    }
 
    return (
        
        !postflats.length ? <CircularProgress /> : (    
                                                        
            <MapContainer center={coordinates} zoom={12} display= "flex" scrollWheelZoom={false}>

                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {postflats.map((flat) => (                                                                
                    <Marker    
                    key={flat.name}
                    position={[
                        flat.lat,
                      flat.lng
                    ]}>

                    <Popup> 
                        <div>{flat.creator}'s {flat.name}</div>
                        <div>{flat.address}</div>
                        <div>{flat.price}  {" €"}</div>
                         
                        <Link to= {'flats/'+flat._id} style={{ textDecoration: 'none' }}>
                        <Button key={flat._id} flat={flat} onClick={getFlat(flat._id)}>More info</Button>
                        </Link>
                    </Popup>

                </Marker> 
                
                ))}


            </MapContainer >

              
         )
 
         
        );

}

export default MapFlats;