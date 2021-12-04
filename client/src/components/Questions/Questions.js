import Question from './Question/Question';
import {Container, AppBar, Typography, Grow, Grid, CircularProgress,Box} from '@material-ui/core';
import {useSelector} from 'react-redux';
import React from 'react';
import { BrowserRouter, Switch,Link ,Route} from 'react-router-dom';
import Preview from './Preview';
import Navbar from '../Navbar/Navbar';
import Lessons from '../../pages/Lessons';
import Forum from '../../pages/Forum';



function Questions({ setCurrentId }) {

    const questions = useSelector((state) => state.questions); 
    return(
        <Container> 
        <div style={{ width: '120%'}}>
            <Box sx={{ display: 'grid' , gridGap: '50px'}}>
                {questions.map(question => {
                    return <Question key={question._id} question={question}/>
                })}
            </Box>
        </div>
        </Container>

    );
};   
 
export default Questions;