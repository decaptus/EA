import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Grow, Grid, CircularProgress,CardHeader,Card,Avatar,CardContent,Button, CardActions,Container,Box} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles';
import { FaThumbsUp } from 'react-icons/fa';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { deleteAnswer, getAnswer, updateAnswer } from '../../actions/answers';
import { getUser } from '../../actions/auth';
import moment from 'moment';
import { getQuest, updateQuest } from '../../actions/questions';
import { TextField,  Paper } from '@material-ui/core';
import { useTranslation } from "react-i18next";

function Answer({id, question, setQuestData}) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [ansData, setAns]=useState(null);
    const [userData, setUserData]=useState(null);
    const [questData, setQData]=useState({creator:question.creator,question:question.question,createdAt:question.createdAt,answers:question.answers});
    const [like, setLikeDislike]=useState(false);
    const [updated, setUpdate] = useState(false);
    const [colorData, setColor] = useState("grey");
    const [editBool, setEdit] = useState(true);
    const [deleted, setDelete] = useState(false);
    const [sameUser, setSame] = useState(true);
    const [t, i18n] = useTranslation("global");
//canvi primer commit

useEffect(() => {
    if(!ansData){
        dispatch(getAnswer(id)).then(val=>{setAns(val)});
    }
    if(ansData&&!userData){
        dispatch(getUser(ansData.creator)).then(val=>{setUserData(val)});}
    if(deleted){
        dispatch(updateQuest(question._id,questData))
        setQuestData(questData)
        setDelete(false)
    }
    if(updated){
        dispatch(updateAnswer(ansData._id,ansData))
        setUpdate(false);
    }

},[id,ansData,deleted,updated]);
      
const deleteAns = async (e) => {
    e.preventDefault();
    const newList = questData.answers.filter((item) => item !== id);
    setQData({...questData,answers:newList});
    dispatch(deleteAnswer(id)).then(setDelete(true));
  };

const likeDislike = async (e) => {
    e.preventDefault();
    if(!like){
        setLikeDislike(true)
        setAns({...ansData,"likeCountNumber":ansData.likeCountNumber+1});
        setUpdate(true)
        setColor("primary")
    }
    else{
        setLikeDislike(false)
        setAns({...ansData,"likeCountNumber":ansData.likeCountNumber-1});
        setUpdate(true)
        setColor("grey")
    }
};

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

if(!ansData||!userData){
    return <>{t("question.loading")}...</>
    }
    
return (

    <Container  className={classes.container}>
            <Card style={{ width: '100%'}} className={classes.card} style={{backgroundColor: "#f3f3f3"}}>
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
                    moment(ansData.createdAt).fromNow()
                }
                />
                <CardContent>
                {editBool? 
                <Typography variant="body2" className={classes.question} >{ansData.answer}  </Typography> :
                    <Paper className={classes.paper}>
                    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <TextField name="answer" variant="outlined" label={t("answer.answer")} fullWidth value={ansData.answer} onChange={(e) => setAns({ ...ansData, answer: e.target.value })} />
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth >{t("answer.title")}</Button>
                    </form>
                    </Paper>}
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button size="small" color={colorData} onClick={likeDislike }>
                    {ansData.likeCountNumber} <span> </span> <FaThumbsUp/>
                </Button>
                <Button size="small" color="primary" onClick={deleteAns }>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
                {sameUser?
                    <Button size="small" color="primary" onClick={deleteAns }>
                        <DeleteIcon fontSize="small" />
                        {t("answer.delete")}
                    </Button>
                    :<></>
                }
                </CardActions>
        
            </Card>



            </Container>
    )


}   
export default Answer;