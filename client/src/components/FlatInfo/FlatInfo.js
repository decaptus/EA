import React, { useState, useEffect } from 'react';
import { Card } from '@material-ui/core/';
import { useDispatch } from 'react-redux';
import { getFlat } from '../../api'; 
import useStyles from './styles';
import './price.css'

const FlatInfo = ({flat}) => {

  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlat(flat._id));                           
  }, [currentId, dispatch]);

  console.log(flat)
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