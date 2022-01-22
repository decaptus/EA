import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { FaThumbsUp } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';
import Subjects from '../../Subjects/subjects'
import useStyles from './styles';
import './price.css';

import { getQuest, updateQuest } from '../../../actions/questions';
import { getUser } from '../../../actions/auth';
import { deleteTeacher, getAnswer, getTeacher, updateTeacher } from '../../../actions/teachers';

const Teacher = ({ profesores: profesores }) => {

  const [user,setUser] = useState(JSON.parse(window.localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const classes = useStyles();
  const [ansData, setAns]=useState(null);
  const [userData, setUserData]=useState(null);
  //const [questData, setQData]=useState({_id:question._id,creator:question.creator,question:question.question,createdAt:question.createdAt,answers:question.answers});
  const [updated, setUpdate] = useState(false);
  const [colorData, setColor] = useState("grey");
  const [editBool, setEdit] = useState(true);
  const [deleted, setDelete] = useState(false);
  const [sameUser, setSame] = useState(true);
//canvi primer commit

useEffect(() => {
  if(!ansData){
      dispatch(getTeacher(profesores._id)).then(val=>{setAns(val)});  //Cogemos el JSON del profesor y lo almacenamos en val
  }
  if(updated){
      console.log(ansData)
      dispatch(updateTeacher(ansData._id,ansData))
      setUpdate(false);
  }

  if(ansData){
      if(!ansData.likes.find(ids=>ids===user.result._id))
      setColor("default")
  
      else{
          setColor("primary")
      }
  }
  

},[profesores._id,ansData,deleted,updated]);
    

const likeDislike = async (e) => {
  e.preventDefault();
  if(!ansData.likes.find(id=>id===user.result._id)){
    setAns({...ansData,likes:ansData.likes.concat(user.result._id)});
    setUpdate(true)
    console.log(ansData)
  }
  else{
      console.log(user.result._id)
      setAns({...ansData, likes:ansData.likes.filter(item=>item!==user.result._id)});
      setUpdate(true)
  }
  };


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

        <Button size="small" color={colorData} onClick={likeDislike} >
            {profesores.likes.length} <span> </span> <FaThumbsUp/> 
        </Button>

        <Subjects profesores={profesores} ></Subjects>
      </CardContent>

    </Card>
  );
};

export default Teacher;