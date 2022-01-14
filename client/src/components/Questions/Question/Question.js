
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
import { render } from 'react-dom';
import { useTranslation } from "react-i18next";


function Question ({question} ){
    const classes = useStyles();
    const dispatch = useDispatch();
    const [userData, setUserData]=useState(null);
    const [t, i18n] = useTranslation("global");
    let start = true;

 
    useEffect(() => {
      

      if (!userData) {
        dispatch(getUser(question.creator)).then(val=>{
          if(start){
        setUserData(val)}});
      }
      return()=>{
        start=false
      }
    },[userData]); //si aixo cambia tornara a fer el useeffect, sino no.




    if(!userData){
      return (<> {t("question.loading")}...</>);
    }
    else{
    return (
    <Link to= {'questions/'+question._id} style={{ textDecoration: 'none' }}>
    <Card style={{ width: '100%' }} className={classes.card} >
      <CardHeader
        avatar={
          <Avatar  aria-label="avatar" src={userData.picture}/>
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
 
    

 } export default Question