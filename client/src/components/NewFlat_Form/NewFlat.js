import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import uploadImage from '../Auth/Auth';

import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';


import useStyles from './styles';
import { createFlat, updateFlat } from '../../api';

const NewFlat = ({ currentId, setCurrentId }) => {
  const [flatData, setFlatData] = useState({ 
      creator: '',
      name: '',
      address: '',
      description: '',
      picture: '',
      price: 0,
      lat: 0,
      lng: 0
    });

  const flat = useSelector((state) => (currentId ? state.flats.find((flat) => flat._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (flat) setFlatData(flat);
  }, [flat]);

  const clear = () => {
    setCurrentId(0);
    setFlatData({ 
        creator: '',
        name: '',
        address: '',
        description: '',
        picture: '',
        price: 0,
        lat: 0,
        lng: 0});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createFlat(flatData));
      clear();
    } else {
      dispatch(updateFlat(currentId, flatData));
      clear();
    }
  };   

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        {/* <Typography variant="h6">{currentId ? `Editing "${flat.name}"` : 'Write the info of the flat'}</Typography> */}
        <TextField name="name" variant="outlined" label="Name" fullWidth value={flatData.name} onChange={(e) => setFlatData({ ...flatData, name: e.target.value })} />
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={flatData.creator} onChange={(e) => setFlatData({ ...flatData, creator: e.target.value })} />
        <TextField name="address" variant="outlined" label="Address" fullWidth value={flatData.address} onChange={(e) => setFlatData({ ...flatData, address: e.target.value })} />
        <TextField name="description" variant="outlined" label="Description" fullWidth value={flatData.description} onChange={(e) => setFlatData({ ...flatData, description: e.target.value })} />
        <TextField name="picture" variant="outlined" label="Picture" fullWidth value={flatData.picture} onChange={(e) => setFlatData({ ...flatData, picture: e.target.value })} />
        <TextField name="lat" variant="outlined" label="Latitude" fullWidth value={flatData.lat} onChange={(e) => setFlatData({ ...flatData, lat: e.target.value })} />
        <TextField name="lng" variant="outlined" label="Longitude" fullWidth value={flatData.lng} onChange={(e) => setFlatData({ ...flatData, lng: e.target.value })} />
        <TextField name="price" variant="outlined" label="Price" fullWidth value={flatData.price} onChange={(e) => setFlatData({ ...flatData, price: e.target.value })} />
        {/* <>
            <Grid item xs={1}>
               <InsertPhotoIcon fontSize="large" color="primary"  />
               
            </Grid>
            <Grid item xs={10}>
              <div>Picture</div>
            <input name='picture' type="file" className={classes.margin} onChange={(event) => {
              uploadImage(event.target.files);
              setFlatData({ ...flatData, picture: event.target.value })
            }}></input >
            </Grid>
              
            </> */}
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth >Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default NewFlat;