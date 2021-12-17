import React ,{ useState, useEffect } from 'react';
import useStyles from './styles';
import { useDispatch,useSelector  } from 'react-redux';
import {getUser } from '../../../actions/auth';
import {getQuest, getQuests } from '../../../actions/questions';
import { useParams } from "react-router-dom";
import { deleteQuest,updateQuest} from '../../../actions/questions';
import { Link} from 'react-router-dom';
import { Typography, Grow, Grid, CircularProgress,CardHeader,Card,Avatar,CardContent,Button, CardActions,Container,Box} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import { FaThumbsUp } from 'react-icons/fa';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useHistory } from "react-router-dom";
import Answer from '../../Answers/Answer';
import NewAnswer from '../../NewAnswer/NewAnswer';
import { TextField,  Paper } from '@material-ui/core';

function Preview({ setCurrentId}) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { id} = useParams();
    const [questData, setQuestData]=useState(null);
    const [userData, setUserData]=useState(null);
    const history = useHistory();
    const [answerComp, setAnswerComp]=useState(false);
    const [updated, setUpdate] = useState(false);
    const [deleted, setDelete] = useState(false);
    const [editBool, setEdit] = useState(true);

    useEffect(() => {
      if(!questData){
        dispatch(getQuest(id)).then(val=>setQuestData(val));
      }
      if(questData&&!userData){
        dispatch(getUser(questData.creator)).then(val=>setUserData(val));
        }
      if(updated){
        dispatch(updateQuest(id,questData))
        setUpdate(false);
      }
      if(deleted){
        dispatch(getQuests());
        setCurrentId(0);
        history.push('/forum');
    }
    },[userData,questData,updated,deleted]);

    const deleteQuestion = async (e) => {
        e.preventDefault();
        dispatch(deleteQuest(questData._id)).then(setDelete(true)); 
      };

    const setTrueFalse = () =>{
      if(answerComp){
        setAnswerComp(false)
      }
      else{
        setAnswerComp(true)
      }
    }

    const edit = async (e) => {
      e.preventDefault();
      if(!editBool){
          setEdit(true)    
      }
      else{
          setEdit(false)
      }
      };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setUpdate(true)
    }


    if(!userData||!questData){
        return <>Loading...</>
        }
        return (
        <Container >
        <Card style={{ width: '100%' }} className={classes.card}>
            <CardHeader
              avatar={
                <Avatar  aria-label="avatar" src={userData.picture}/>
              }
              action={
                <Button style={{color:'grey'}} size="small" onClick={edit}>
                  <ModeEditIcon/>
                </Button>
              }
              title={userData.name+' '+userData.lastName}
              subheader={
                moment(questData.createdAt).fromNow()
              }
            />
            <CardContent>
            {editBool? 
                <Typography variant="body2" className={classes.question} >{questData.question} </Typography> :
                    <Paper className={classes.paper}>
                    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <TextField name="question" variant="outlined" label="Question" fullWidth value={questData.question} onChange={(e) => setQuestData({ ...questData, question: e.target.value })} />
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth onClick={edit }>Update</Button>
                    </form>
                    </Paper>}
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Button size="small" color="primary" onClick={setTrueFalse}>
                  Answer
              </Button>
              <Button size="small" color="primary" onClick={deleteQuestion }>
                  <DeleteIcon fontSize="small" />
                  Delete
              </Button>
            </CardActions>
            <Box sx={{ display: 'grid' , gridGap: '30px'}}>
              {answerComp ? <NewAnswer questData={questData} setQuestData={setQuestData}/> :null}
                {questData.answers.map((ans) => (
                <Answer id={ans} question={questData} setQuestData={setQuestData} key={ans}/>))}
            </Box>
        </Card>



        </Container>

   
    );
}   
export default Preview;
