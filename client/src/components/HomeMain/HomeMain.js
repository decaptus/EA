import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import Map from '../Map/Map'
import './Home.css'

import imageEETAC from '../../images/eetac.png'
import wherearewe from '../../images/wherearewe.png'
import support from '../../images/support.png'
import teachers from '../../images/teachers.png'
import chat from '../../images/chat.png'
import forum from '../../images/quest.png'
import apartment from '../../images/home.png'

import { useDispatch } from "react-redux";
import useStyles from '../../styles';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

function Home() {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();

    return (

        //  Banner
        <Container maxwidth="lg">
            <AppBar className={classes.appBarHome} position="static" color="inherit">
                <img className={classes.banner} src={imageEETAC} alt="EETAC School" />
                <Typography className={classes.heading} variant="h2" align="center">Welcome to our University! </Typography>
                <Typography className={classes.heading} variant="h3" align="center">Explore our website </Typography>
                <div><h1></h1>
                </div>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>

                    </Grid>
                </Container>
            </Grow>

            {/* Buttons * */}
            <div className="home__section">
                <Grid container align="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={2} sm={4} md={4}>
                        <Card
                            src=""
                            text="Chat"
                            /></Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Card
                            src=""
                            text="Forum"
                            /></Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Card
                            src=""
                            text="Apartments" 
                            /></Grid>
                </Grid>
            </div>

            <div className="home__section">
                <Grid container align="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={2} sm={4} md={4}>
                        <Card
                            src=""
                            text="Map" 
                            /></Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Card
                            src=""
                            text="Teachers" 
                            /></Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Card
                            src=""
                            text="Support" 
                            /></Grid>
                </Grid>

            </div>

            {/* Location */}
            <AppBar className={classes.appBarHome} position="static" color="inherit">
                <h1></h1>
                <img className={classes.heading} src={wherearewe} alt="forumImage" height="80" />
                <Typography variant="h6"  > We are here!</Typography>
                <div><h1></h1>
                </div>
            </AppBar>


            <Map />

            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>

                    </Grid>
                </Container>
            </Grow>
        </Container>



    )
}

export default Home
