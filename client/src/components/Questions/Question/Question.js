
import React from 'react';
import useStyles from './styles';
import {Container, AppBar, Typography, Grow, Grid, CircularProgress,CardHeader,Card,Avatar,CardContent,Button, CardActions} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';

const Question = ({question: question, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return(

    <Card style={{ width: '100%' }} className={classes.card}>
      <CardHeader
        avatar={
          <Avatar  aria-label="avatar">
            {question.creator.charAt(0)}
          </Avatar>
        }
        action={
          <Button style={{color:'grey'}} size="small" onClick={()=>{}}>
            <MoreHorizIcon fontSize="medium"/>
          </Button>
        }
        title={question.creator}
        subheader={
          moment(question.createdAt).fromNow()
        }
      />
      <CardContent>
        <Typography variant="body2" className={classes.question}>{question.question} </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={()=> {}}>
            Answer
        </Button>
        <Button size="small" color="primary" onClick={()=> {}}>
            <DeleteIcon fontSize="small" />
            Delete
        </Button>
      </CardActions>
    </Card>

   
    );
}   
export default Question;
