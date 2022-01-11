import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';
import Subjects from '../../Subjects/subjects'
import useStyles from './styles';
import './price.css';

const Teacher = ({ profesores: profesores }) => {

  const classes = useStyles();
  

  return (

    <Card className={classes.card}>
      
      <CardMedia className={classes.media} image={profesores.picture || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={profesores.departamento} />
      <div className={classes.overlay}>
        <Typography variant="h6">{profesores.name}</Typography> 
      </div>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">Department: {profesores.departamento}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Email: {profesores.email}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Office: {profesores.office}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Office: {profesores._id}</Typography>
        <Subjects profesores={profesores}></Subjects>
      </CardContent>

    </Card>
  );
};

export default Teacher;