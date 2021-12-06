import React ,{ useState, useEffect } from 'react';
import useStyles from './styles';
import { useDispatch,useSelector  } from 'react-redux';
import {getUser } from '../../../actions/auth';
import {getQuest } from '../../../actions/questions';
import { useParams } from "react-router-dom";
import { deleteQuest} from '../../../actions/questions';
import { Link} from 'react-router-dom';
import { Typography, Grow, Grid, CircularProgress,CardHeader,Card,Avatar,CardContent,Button, CardActions} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import { FaThumbsUp } from 'react-icons/fa';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useHistory } from "react-router-dom";

function Preview() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { id} = useParams();
    const [questData, setQuestData]=useState(null);
    const [userData, setUserData]=useState(null);
    const history = useHistory();
 
    useEffect(() => {
      if(!questData){
        dispatch(getQuest(id)).then(val=>setQuestData(val));
      }
      if(questData&&!userData){
        dispatch(getUser(questData.creator)).then(val=>setUserData(val));
        }
    },[userData,questData]);

    const deleteQuestion = async (e) => {
        e.preventDefault();
        dispatch(deleteQuest(questData._id)); 
        history.push('/forum');
      };

    if(!userData||!questData){
        return <>Loading...</>
        }
        return (
        <Card style={{ width: '100%' }} className={classes.card}>
            <CardHeader
              avatar={
                <Avatar  aria-label="avatar">
             
                  {userData.name.charAt(0)}
                </Avatar>
              }
              action={
                <Button style={{color:'grey'}} size="small" onClick={()=>{console.log(userData)}}>
                  <FaThumbsUp/>
                  <ModeEditIcon/>
                </Button>
              }
              title={userData.name+' '+userData.lastName}
              subheader={
                moment(questData.createdAt).fromNow()
              }
            />
            <CardContent>
              <Typography variant="body2" className={classes.question} >{questData.question}  </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Button size="small" color="primary" onClick={()=> {}}>
                  Answer
              </Button>
              <Button size="small" color="primary" onClick={deleteQuestion }>
                  <DeleteIcon fontSize="small" />
                  Delete
              </Button>
            </CardActions>
        </Card>

   
    );
}   
export default Preview;
