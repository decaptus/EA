import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import { useDispatch } from 'react-redux';

import { likeFlat, deleteFlat } from '../../actions/flats';
import useStyles from './styles';
import './price.css'

const FlatInfo = ({ flat, setCurrentId }) => {
  const dispatch = useDispatch();
  const flats = useStyles();
  

  return (

    <Card className={flats.card}>
      <CardMedia className={flats.media} /*image={flat.picture}*/ title={flat.name} />
        
      <Typography className={flats.title} gutterBottom variant="h5" component="h2">{flat.name}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{flat.description}</Typography>
      </CardContent>
      <CardActions className={flats.cardActions}>
        <Typography className="card-price" component="p">{flat.price} €</Typography>
      </CardActions>
    </Card>
  );
};

export default FlatInfo;