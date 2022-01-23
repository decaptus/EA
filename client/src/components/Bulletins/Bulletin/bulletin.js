import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import useStyles from './styles';
import './price.css';

const Bulletin = ({ post: lesson, setCurrentId }) => {
  //const dispatch = useDispatch();
  const classes = useStyles();
  

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={lesson.picture || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={lesson.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{lesson.creatorName}</Typography> 
      </div>
         
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{lesson.subject}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{lesson.description}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
      <div className="card-price">
        <Typography className={classes.price} component="p">{lesson.price} €</Typography>
      </div>
      </CardActions>
    </Card>
  );
};

export default Bulletin;