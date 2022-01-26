import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Paper, Input, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import Axios from 'axios'

import useStyles from './styles';
import { createFlat, updateFlat } from '../../api';
import { useTranslation } from "react-i18next";


const NewFlat = ({ currentId, setCurrentId }) => {
  const [user, setUser] = useState(JSON.parse(window.localStorage.getItem('profile')));

  const [flatData, setFlatData] = useState({
    creator: user.result.name,
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
  const [t, i18n] = useTranslation("global");

  let urlimagen = "" ;

  useEffect(() => {
    if (flat) { setFlatData(flat) };
    clear();
  }, [flat]);

  const [imageSelected, setImageSelected] = useState("")

  const uploadImage = (files) => {
    const formData = new FormData()
    formData.append("file", imageSelected)
    formData.append("upload_preset","pfnjslol")  

    Axios.post("https://api.cloudinary.com/v1_1/sergiogras/image/upload",
    formData
    ).then((response) => {
      setImageSelected(response.data.secure_url);
      urlimagen = response.data.secure_url ;
      setFlatData({ ...flatData, picture: urlimagen })
    });
  }

  const clear = () => {
    setFlatData({
      creator: user.result.name,
      name: '',
      address: '',
      description: '',
      picture: '',
      price: 0,
      lat: 0,
      lng: 0
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFlatData({ ...flatData })

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

        <Typography variant="h6">{currentId ? `Editing "${flat.name}"` : 'Write the info of the flat'}</Typography> 
        <TextField name="name" variant="outlined" label="Name" fullWidth value={flatData.name} onChange={(e) => setFlatData({ ...flatData, name: e.target.value })} />
        <Typography name="creator" variant="outlined" label="Creator" fullWidth value={flatData.creator} onChange={(e) => setFlatData({ ...flatData, creator: e.target.value })} />
        <TextField name="address" variant="outlined" label="Address" fullWidth value={flatData.address} onChange={(e) => setFlatData({ ...flatData, address: e.target.value })} />
        <TextField name="description" variant="outlined" label="Description" fullWidth value={flatData.description} onChange={(e) => setFlatData({ ...flatData, description: e.target.value })} />
        <Typography name="picture" variant="outlined" label="Picture" fullWidth value={flatData.picture} onChange={(e) => setFlatData({ ...flatData, picture: urlimagen })} />
        <TextField name="lat" variant="outlined" label="Latitude" fullWidth value={flatData.lat} onChange={(e) => setFlatData({ ...flatData, lat: e.target.value })} />
        <TextField name="lng" variant="outlined" label="Longitude" fullWidth value={flatData.lng} onChange={(e) => setFlatData({ ...flatData, lng: e.target.value })} />
        <TextField name="price" variant="outlined" label="Price" fullWidth value={flatData.price} onChange={(e) => setFlatData({ ...flatData, price: e.target.value })} />
        <InsertPhotoIcon/>
        <Input type="file"
          onChange={(event) => {
            setImageSelected(event.target.files[0])
          //   setFlatData({ ...flatData, creator: event.target.value })
          //   setFlatData({ ...flatData, picture: urlimagen })
           }}
          ></Input>
          
        <Button variant="contained" color="primary" size="large"  onClick={(event) => { uploadImage(event.target.files)  }} fullWidth >First Upload the image</Button>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button> 

      </form>
    </Paper>
  );
};

export default NewFlat;