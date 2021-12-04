
import React ,{ useState, useEffect } from 'react';
import useStyles from './styles';
import { Typography, Grow, Grid, CircularProgress,CardHeader,Card,Avatar,CardContent,Button, CardActions} from '@material-ui/core';
import { useDispatch,useSelector  } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import { deleteQuest} from '../../../actions/questions';
import {getUser } from '../../../actions/auth';
import { FaThumbsUp } from 'react-icons/fa';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux'



function Question ({question} ){
    const classes = useStyles();
    const dispatch = useDispatch();
    //{ name: '',email:'',password: '',age: 0,subjects: ['']}
    const [userData, setUserData] = useState({ name: '',email:'',password: '',age: 0,subjects: ['']});


   
    useEffect(() => {
      setUserData(dispatch(getUser(question.creator)).value)
    },[userData]);
    
    const deleteQuestion = async (e) => {
      e.preventDefault();
      dispatch(deleteQuest(question._id)); 
    };

  
    return (
    <Link to= {'questions/'+question._id} style={{ textDecoration: 'none' }}>
    <Card style={{ width: '100%' }} className={classes.card}>
      <CardHeader
        avatar={
          <Avatar  aria-label="avatar">
       
            {  }
          </Avatar>
        }
        action={
          <Button style={{color:'grey'}} size="small" onClick={()=>{console.log(userData)}}>
             <FaThumbsUp/>
          </Button>
        }
        title={question.creator}
        subheader={
          moment(question.createdAt).fromNow()
        }
      />
      <CardContent>
        <Typography variant="body2" className={classes.question} >{question.question}  </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={()=> {}}>
            Answer
        </Button>
        <Button size="small" color="primary" onClick={deleteQuestion}>
            <DeleteIcon fontSize="small" />
            Delete
        </Button>
      </CardActions>
    </Card>
    </Link>

   
    );

}   

export default Question
