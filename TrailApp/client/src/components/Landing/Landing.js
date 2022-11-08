import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Paper, Typography, Container } from '@material-ui/core';
import useStyles from './styles.js';
import LearnCard from './LearnCard.js';

const Landing = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xl">
            <div className={classes.container}>
               <div className={classes.paper}>
                <LearnCard />
                </div>
                <div className={classes.paper}>
                    <h1>Grizzly Fitness @ Your Fingertips</h1>
                </div> 
            </div>   
        </Container>
    );
};

export default Landing;