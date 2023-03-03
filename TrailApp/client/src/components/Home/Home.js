import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Paper, Grid, Typography, Container, InputLabel, MenuItem, FormControl, Select, SelectChangeEvent } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getTrails } from '../../actions/trails.js';
import useStyles from './styles.js';

const Home = () => {
    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')));
    const [ trail, settrail ] = useState();
    const [ currentId, setCurrentId ] = useState(null);
    const trails = useSelector((state) => state.trails);
    const classes = useStyles();
    const displayFirstName = user.result.name.split(' ');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        settrail(e.target.value);
    }
    useEffect(() => {
        dispatch(getTrails());
    }, [currentId, dispatch]);
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Typography variant="h5">Hello, {displayFirstName[0]}</Typography>
                <Typography component={Link} to="/blog" variant="h3">Blog</Typography>
                <Typography variant="h6">{trail}</Typography>
                
                <Grid className={classes.submit} container direction="column">
                    <FormControl variant="filled" fullWidth>
                        <InputLabel id="demo-simple-select-label">Trails</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={trail}
                            label="Trails"
                            onChange={handleChange}
                        >
                            {trails.map((trail) => (
                                <MenuItem key ={trail._id} value={trail._id}>{trail.title}</MenuItem>
                                
                            ))}
                        </Select>
                    </FormControl><br></br>
                    <Button component={Link} to="/trails" variant="contained" color="primary">Manage Trails</Button><br></br>
                    <Button component={Link} to="/current" variant="contained" color="primary">Start Workout</Button><br></br>
                    <Button component={Link} to="/blog" variant="contained" color="primary">My Trails</Button>
                </Grid>
            </Paper>
        </Container>
    );
};

export default Home;