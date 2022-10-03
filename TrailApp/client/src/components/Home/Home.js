import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Paper, Typography, Container } from '@material-ui/core';
import useStyles from './styles.js';

const Home = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Typography variant="h5">Home</Typography>
                <Typography variant="h5">Explore the trails of GGC</Typography>
                <Typography variant="h5">Explore our trails through a unique, digital experience. Just scan the QR codes and go! Walking Trail serves to provide a great experience for Stuentds, Teachers, and nature lovers.</Typography>
                <Button component={Link} to="/blog" variant="contained" color="primary">Blog</Button>
                
            </Paper>
        </Container>
    );
};

export default Home;