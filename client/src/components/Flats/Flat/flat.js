import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';

import { likeFlat, deleteFlat } from '../../../actions/flats';
import useStyles from './styles';
import './price.css';
import FlatInfo from '../../FlatInfo/FlatInfo';

const Flat = ({ flat, setCurrentId }) => {
  const dispatch = useDispatch();
  const flats = useStyles();
  const [pulsadoInfo, setPulsadoInfo] = useState(false);

  return (
    <Card className={flats.card}>
      {/* <CardMedia className={flats.media} image={flat.picture || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={flat.name} />
      <div className={flats.overlay}>
        <Typography variant="h6">{flat.creator}</Typography> 
      </div>
         
      <Typography className={flats.title} gutterBottom variant="h5" component="h2">{flat.name}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{flat.description}</Typography>
      </CardContent>
      <CardActions className={flats.cardActions}>
        <Typography className="card-price" component="p">{flat.price} €</Typography>
      </CardActions>

      <Button variant="contained" color="secondary"  onClick = {() => setPulsadoInfo(!pulsadoInfo)}>More Info</Button> */}

      {pulsadoInfo ? (
              <FlatInfo/>
            ) : (
              <Card className={flats.card}>
                <CardMedia className={flats.media} image={flat.picture || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={flat.name} />
                <div className={flats.overlay}>
                <Typography variant="h6">{flat.creator}</Typography> 
                </div>
         
                <Typography className={flats.title} gutterBottom variant="h5" component="h2">{flat.name}</Typography>
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">{flat.description}</Typography>
                </CardContent>
                <CardActions className={flats.cardActions}>
                  <Typography className="card-price" component="p">{flat.price} €</Typography>
                </CardActions>

                <Button variant="contained" color="secondary"  onClick = {() => setPulsadoInfo(!pulsadoInfo)}>More Info</Button>
              </Card>
            )}
    </Card>
  );
};

export default Flat;