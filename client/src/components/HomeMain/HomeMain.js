import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import Map from '../Map/Map'
import { fetchMarkers } from '../../api';

import { Link } from 'react-router-dom';

import imageEETAC from '../../images/eetac.png'
import wherearewe from '../../images/wherearewe.png'

import { useDispatch } from "react-redux";
import useStyles from '../../styles';
import { Button, Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Marker from '../Map/Markers/marker';

function Home() {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();

    return (

        //  Banner
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <img className={classes.banner} src={imageEETAC} alt="EETAC School" />

                <div><h1></h1>
                </div>
            </AppBar>

            <Typography className={classes.heading} variant="h2" align="center">Welcome to our University! </Typography>
            <Typography className={classes.heading} variant="h3" align="center">Explore our website </Typography>
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
                        <Link to="/chat" style={{ textDecoration: 'none' }}>
                            <Card
                                src=""
                                text="Chat"
                            />
                        </Link></Grid>

                    <Grid item xs={2} sm={4} md={4}>
                        <Link to="/forum" style={{ textDecoration: 'none' }}>
                            <Card
                                src=""
                                text="Forum"
                            />
                        </Link></Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Link to="/flats" style={{ textDecoration: 'none' }}>
                            <Card
                                src=""
                                text="Apartments"
                            />
                        </Link></Grid>
                </Grid>
            </div>

            <div className="home__section">
                <Grid container align="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={2} sm={4} md={4}>
                        <Link to="/lessons" style={{ textDecoration: 'none' }}>
                            <Card
                                src=""
                                text="Lessons"
                            />
                        </Link></Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Link to="/lessons" style={{ textDecoration: 'none' }}>
                            <Card
                                src=""
                                text="Teachers"
                            />
                        </Link></Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Link to="/support" style={{ textDecoration: 'none' }}>
                            <Card
                                src=""
                                text="Support"
                            />
                        </Link></Grid>
                </Grid>

            </div>

            {/* <Button onClick={() => { fetchMarkers()}}> CLICK ME </Button>
            <Button > {<Marker></Marker>} </Button> */}

            {/* Location */}
            <AppBar className={classes.appBar} position="static" color="inherit">
                <h1></h1>
                <img className={classes.heading} src={wherearewe} alt="forumImage" height="80" />
                <Typography variant="h6"> We are here!</Typography>
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
