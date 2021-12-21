
import React, {useState,useEffect} from "react";       
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';
import './price.css';
import { updatePost } from '../../../actions/posts';

const Bulletin = ({ post: lesson }) => {
  //const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(likePost(lesson._id, lesson));                           //aqui llamamos a la acción, y inmediatamente va al reducer y hace match, con lo q modifica el estado del 'store'
  }, [currentId, dispatch]);


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
      <Typography className={classes.price} component="p">Likes: {lesson.like}</Typography>
      <Button variant="contained"  type="submit" fullWidth onClick={() => setShowForm(true)}>Like</Button>
      
    </Card>
  );
};

export default Bulletin;