import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Paper, Grid, Typography, Container, InputLabel, MenuItem, FormControl, Select, SelectChangeEvent } from '@material-ui/core';
import useStyles from './styles.js';

const Home = () => {
    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')));
    const classes = useStyles();
    const displayFirstName = user.result.name.split(' ');

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Typography variant="h5">Hello, {displayFirstName[0]}</Typography>
                <Typography component={Link} to="/blog" variant="h3">Blog</Typography>
                <Typography variant="h6">Select Trail</Typography>
                <Grid className={classes.submit} container direction="column">
                    <Button component={Link} to="/trails" variant="contained" color="primary">Manage Trails</Button><br></br>
                    <Button component={Link} to="/blog" variant="contained" color="primary">Start Workout</Button><br></br>
                    <Button component={Link} to="/blog" variant="contained" color="primary">My Trails</Button>
                </Grid>
            </Paper>
        </Container>
    );
};

export default Home;