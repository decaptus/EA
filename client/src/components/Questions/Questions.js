import Question from './Question/Question';
import {Container, TextField,Box} from '@material-ui/core';
import {useSelector} from 'react-redux';
import React, { useState } from 'react';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';

const Questions = ({ setCurrentId }) => {
    const questions = useSelector((state) => state.questions);
    const subjects = useSelector((state)=>state.subjects);
    const [subject,setSubject] = useState(null) 

    if(!subjects){
        return <>Loading...</>
        }
    return(
        <Container > 
            <Stack spacing={2} sx={{ width: 300 }}>
                <Autocomplete
                    id="Subject"
                    options={subjects}
                    value={subject}
                    getOptionLabel={(option) => option.name || ""}
                    onChange={(e,value) => { setSubject(value)}}
                    renderInput={(params) => <TextField {...params} label="Subject"/> }
                
                />
            </Stack>
            <div style={{ width: '120%', marginTop: `30px`}}>
                <Box sx={{ display: 'grid' , gridGap: '30px'}}>
                    {questions.map((question) => { 
                        if(subject===null){
                            return(
                            <Question question={question} key={question._id} />)}
                        else{
                            if(question.subject===subject._id){
                                return(
                                    <Question question={question} key={question._id} />
                                )
                            }
                        }
                    })}
                </Box>
            </div>
        </Container>
    );
}   
 
export default Questions;