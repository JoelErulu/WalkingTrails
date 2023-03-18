import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Container} from '@material-ui/core';
import { useDispatch} from 'react-redux';
import { getTrails } from '../../actions/trails.js';
import useStyles from './styles.js';
import gold from '../../images/gold.png';
import green from '../../images/green.png';
import gray from '../../images/gray.png';

const Home = () => {

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xl">
            <Grid className={classes.gridContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                <Grid className={classes.gridItem} item xs={12} sm={6} md={3} style={{ background: 'rgba(255, 255, 255, 1)' }}>
                    <Typography variant="h5">Gold Trail</Typography>
                    <Link to ="/gold">
                        <img className={classes.image} src={gold} alt="Gold Trail"/>
                    </Link>
                </Grid>
                <Grid className={classes.gridItem} item xs={12} sm={6} md={3} style={{ background: 'rgba(255, 255, 255, 1)' }}>
                    <Typography variant="h5">Green Trail</Typography>
                    <Link to ="/green">
                        <img className={classes.image} src={green} alt="Green Trail"/>
                    </Link>
                </Grid>
                <Grid className={classes.gridItem} item xs={12} sm={6} md={3} style={{ background: 'rgba(255, 255, 255, 1)' }}>
                    <Typography variant="h5">Gray Trail</Typography>
                    <Link to ="/gray">
                        <img className={classes.image} src={gray} alt="Gray Trail"/>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;