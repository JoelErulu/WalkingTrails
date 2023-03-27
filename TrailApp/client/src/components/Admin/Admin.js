import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Grid, Typography, Container, Button, Paper, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { useDispatch} from 'react-redux';
import { getTrails } from '../../actions/trails.js';
import useStyles from './styles.js';
import gold from '../../images/gold.png';
import green from '../../images/green.png';
import gray from '../../images/gray.png';


const Admin = () => {

    const classes = useStyles();
    const [trail, setTrail] = useState('');
    const [trails, setTrails] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTrails());
    }, [dispatch]);

    const handleChange = (event) => {
        setTrail(event.target.value);
    };

    return (
        <>
        
        <Container component="main" maxWidth="xl">
        <div className={classes.welcomeAdmin}> Hello Admin, Pick The Trail You'd Like to Edit </div>
                <Grid className={classes.gridContainer} container justifyContent="space-between" alignItems="stretch" spacing={0}>
                    
                </Grid>

                <Paper className={classes.paper} elevation={3}>
                    <Grid className={classes.submit} container direction="column">
                        <Button component={Link} to="/trails" variant="contained" color="primary">Manage Trails</Button><br></br>
                        <Button component={Link} to="" variant="contained" color="primary">Create Nutrition</Button><br></br>
                        <Button component={Link} to="/blog" variant="contained" color="primary">My Trails</Button>
                    </Grid>
                </Paper>
            </Container></>
    );
};

export default Admin;