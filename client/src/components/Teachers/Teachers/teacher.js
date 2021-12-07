import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import Subjects from '../../Subjects/subjects';
import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';
import './price.css';

import React, {useState,useEffect} from "react";                                           //useeffect going to come the component will update
import { Container, AppBar, Grow, Grid } from '@material-ui/core';


import { getSubject } from '../../../actions/subjects';



const Teacher = ({ post: teacher, setCurrentId }) => {
  //const dispatch = useDispatch();
    const [currentId, setCurrentId2] = useState(1);
    const [showForm, setShowForm] = useState(false);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getSubject("618d117bb9ad3c771fb619aa"));                           //aqui llamamos a la acción, y inmediatamente va al reducer y hace match, con lo q modifica el estado del 'store'
    }, [currentId, dispatch]);

  

  return (
    <Card className={classes.card}>

      <CardMedia className={classes.media} image={teacher.picture || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}/>

      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{teacher.name}</Typography>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">Email: {teacher.email}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Departamento: {teacher.departamento}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Office: {teacher.office}</Typography>
        <Subjects setCurrentId2={setCurrentId2} />
      </CardContent>

    </Card>
  );
};

export default Teacher;