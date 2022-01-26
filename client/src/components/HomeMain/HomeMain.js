import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import MapView from '../Map/Map' 

import { Link } from 'react-router-dom';

import imageEETAC from '../../images/eetac.png'
import wherearewe from '../../images/wherearewe.png'

import { useDispatch } from "react-redux";
import useStyles from '../../styles';
import { Button, Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Marker from '../Map/Markers/marker';
import { useTranslation } from "react-i18next";


function Home() {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();
    const [t, i18n] = useTranslation("global");

    return (

        //  Banner
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <img className={classes.banner} src={imageEETAC} alt="EETAC School" />

                <div><h1></h1>
                </div>
            </AppBar>

            <Typography className={classes.heading} variant="h2" align="center"> {t("home.welcome")} </Typography>
            <Typography className={classes.heading} variant="h3" align="center"> {t("home.explorer")} </Typography>
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
                                text={t("home.chat")}
                            />
                        </Link></Grid>

                    <Grid item xs={2} sm={4} md={4}>
                        <Link to="/forum" style={{ textDecoration: 'none' }}>
                            <Card
                                src=""
                                text={t("home.forum")}
                            />
                        </Link></Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Link to="/flats" style={{ textDecoration: 'none' }}>
                            <Card
                                src=""
                                text={t("home.apartaments")}
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
                                text={t("home.lessons")}
                            />
                        </Link></Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Link to="/teachers" style={{ textDecoration: 'none' }}>
                            <Card
                                src=""
                                text={t("home.teachers")}
                            />
                        </Link></Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Link to="/support" style={{ textDecoration: 'none' }}>
                            <Card
                                src=""
                                text={t("home.support")}
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
                <Typography variant="h6"> {t("home.we-are-here")} </Typography>
                <div><h1></h1>
                </div>
            </AppBar>

            <MapView />
            <span>  </span> 
        </Container>


    )
}

export default Home
