import Question from './Question/Question';
import {Container, AppBar, Typography, Grow, Grid, CircularProgress} from '@material-ui/core';
import {useSelector} from 'react-redux';
import React from 'react';
import useStyles from './styles';

const Questions = ({ setCurrentId }) => {
    const questions = useSelector((state) => state.questions); 
    return(
        <Container> 
            <h1>QUESTIONS</h1>
            {questions.map((question) => ( 
            <Grid key={question._id} item xs={12} sm={6} md={6}>
            <Question question={question} setCurrentId={setCurrentId} />
            </Grid>
            ))};
        </Container>
    );
}   

 
export default Questions;