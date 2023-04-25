import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Grid, Typography, Container, Button, Paper, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { useDispatch, useSelector} from 'react-redux';
import { getTrails } from '../../actions/trails.js';
import useStyles from './styles.js';
import gold from '../../images/gold.png';
import green from '../../images/green.png';
import gray from '../../images/gray.png';


const Nutrition = () => {

    const classes = useStyles();
    
    return (
        <>
        
        <Container component="main" maxWidth="xl">
        

                <Paper className={classes.paper} elevation={3}>
                    
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>


                </Paper>
            </Container></>
    );
};

export default Nutrition;