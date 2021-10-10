import React from 'react';
import useStyles from './styles';
import {Container, AppBar, Typography, Grow, Grid, CircularProgress} from '@material-ui/core';
import { useDispatch } from 'react-redux';

const Question = ({question: question, setCurrentId }) => {
    
    const dispatch = useDispatch();
    return(

        <div>
            <Typography variant="h6">{question.creator}</Typography>
            <Typography variant="body2">{question.question}</Typography>
        </div>
   
    );
}   
export default Question;