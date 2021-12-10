import Question from './Question/Question';
import {Container, AppBar, Typography, Grow, Grid, CircularProgress,Box} from '@material-ui/core';
import {useSelector} from 'react-redux';
import React from 'react';

const Questions = () => {
    const questions = useSelector((state) => state.questions); 
    return(
        <Container > 
        <div style={{ width: '120%'}}>
            <Box sx={{ display: 'grid' , gridGap: '30px'}}>
                {questions.map((question) => ( 
                <Question question={question} key={question._id} />
                ))}
            </Box>
        </div>
        </Container>
    );
}   
 
export default Questions;