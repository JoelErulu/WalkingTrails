import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Paper, Typography, Container } from '@material-ui/core';
import useStyles from './styles.js';

const Landing = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <Card className={classes.paper} >
            <div className={classes.title}>
                <Typography variant="h3" color="primary">Walking Trail</Typography>
            </div>
            <div className={classes.subtitle}>
                <Typography variant="h6">Explore the trails of GGC</Typography>
            </div>
            <div className={classes.body}>
                <Typography variant="body1">Explore our trails through a unique, digital experience. Just scan the QR codes and go! Walking Trail serves to provide a great experience for Stuentds, Teachers, and nature lovers.</Typography>
            </div>
                <Button component={Link} to="/auth" variant="contained" color="primary" className={classes.submit}>Sign In</Button>
                
            </Card>
        </Container>
    );
};

export default Landing;