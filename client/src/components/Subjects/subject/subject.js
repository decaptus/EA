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
import { useTranslation } from "react-i18next";

const Teacher = ({ subjects: subjects }) => {
  //const dispatch = useDispatch();
  const classes = useStyles();
  const [t, i18n] = useTranslation("global");

  return (

    <Card>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{t("subject.name")}: {subjects.name}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">{t("subject.credits")}: {subjects.credits}</Typography>
      </CardContent>

    </Card>
  );
};

export default Teacher;