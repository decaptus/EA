import React, {useState,useEffect} from "react";                                           //useeffect going to come the component will update
import { Container, AppBar, Typography, Grow, Grid, Card } from '@material-ui/core';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';                                        //allows us tu dispatch an action


function FlatInfo(flat) {
    
    
    return (
        <Container>
            <Card> {flat}</Card>
        </Container>
    )
}

export default FlatInfo
