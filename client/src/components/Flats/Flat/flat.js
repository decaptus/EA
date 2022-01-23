import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import './price.css';
import FlatInfo from '../../FlatInfo/FlatInfo';
import { Grid, Box } from '@material-ui/core';
import { deleteFlat, getFlat } from '../../../api';
import { useTranslation } from "react-i18next";


const Flat = ({ flat, setCurrentId }) => {
  const dispatch = useDispatch();
  const flats = useStyles();
  const [pulsadoInfo, setPulsadoInfo] = useState(false);
  const [t, i18n] = useTranslation("global");

  return (
    <Card className={flats.card}>
      {pulsadoInfo ? (
        <FlatInfo/>
      ) : (
        <Card className={flats.card}>
          <CardMedia className={flats.media} image={flat.picture || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={flat.name} />
          <div className={flats.overlay}>
            <Typography variant="h6">{flat.creator}</Typography>
          </div>

          <Grid container spacing={2}>
            
            <Grid item xs={3}>
              <Button className={flats.delete}  size="small" variant="contained" color="secondary" onClick={() => { deleteFlat(flat._id)}}>
                <DeleteIcon fontSize="small" />
                {t("flat.delete")}
              </Button>
            </Grid>
          </Grid>

          <Typography className={flats.title} gutterBottom variant="h5" component="h2">{flat.name}</Typography>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">{flat.description}</Typography>
          </CardContent>
          <CardActions className={flats.cardActions}>
          <div className="card-price">
            <Typography className={flats.price} component="p">{flat.price} €</Typography>
            </div>
          </CardActions>

        </Card>
      )}
    </Card>
  );
};

export default Flat;