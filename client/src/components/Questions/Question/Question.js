
import React ,{ useState, useEffect } from 'react';
import useStyles from './styles';
import { Typography, Grow, Grid, CircularProgress,CardHeader,Card,Avatar,CardContent,Button, CardActions} from '@material-ui/core';
import { useDispatch,useSelector  } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import { deleteQuest} from '../../../actions/questions';
import {getUser } from '../../../actions/auth';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux'



function Question ({question} ){
    const classes = useStyles();
    const dispatch = useDispatch();
    const [userData, setUserData]=useState(null);
   

 
    useEffect(() => {
      if (!userData) {
      dispatch(getUser(question.creator)).then(val=>setUserData(val));
      }
    },[userData]);


 
    if(!userData){
    return <>Loading...</>
    }
    return (
    <Link to= {'questions/'+question._id} style={{ textDecoration: 'none' }}>
    <Card style={{ width: '100%' }} className={classes.card}>
      <CardHeader
        avatar={
          <Avatar  aria-label="avatar">
            {userData.name.charAt(0)}
          </Avatar>
        }
        title={userData.name+' '+userData.lastName}
        subheader={
          moment(question.createdAt).fromNow()
        }
      />
      <CardContent>
        <Typography variant="body2" className={classes.question} >{question.question}  </Typography>
      </CardContent>
    </Card>
    </Link>

   
    );
    
  }
    export default Question