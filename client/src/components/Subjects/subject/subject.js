import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';
import './price.css';

const Teacher = ({ subjects: subjects }) => {
  //const dispatch = useDispatch();
  const classes = useStyles();
  console.log(subjects);

  return (

    <Card className={classes.card}>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">Department: {subjects.name}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Email: {subjects.credits}</Typography>
      </CardContent>

    </Card>
  );
};

export default Teacher;