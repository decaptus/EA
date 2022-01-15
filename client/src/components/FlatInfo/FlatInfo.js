import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import { useDispatch } from 'react-redux';
import { getFlat } from '../../api';
import dataflat from '../../components/Flats/Flat/flat'

import { likeFlat, deleteFlat } from '../../actions/flats';
import useStyles from './styles';
import './price.css'
import { useTranslation } from "react-i18next";

const FlatInfo = ({flat}) => {

  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    dispatch(getFlat(flat._id));                           //aqui llamamos a la acción, y inmediatamente va al reducer y hace match, con lo q modifica el estado del 'store'
  }, [currentId, dispatch]);

  return (

    <Card className={classes.card}>
      <h1>{flat._id}</h1>
      {/* <CardMedia className={classes.media} image={dataflat.picture} title={dataflat.name} />

      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{dataflat.name}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{dataflat.description}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Typography className="card-price" component="p">{dataflat.price} €</Typography>
      </CardActions> */}
    </Card>
  );
};

export default FlatInfo;