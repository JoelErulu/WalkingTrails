import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Paper, Grid, Typography, Container, InputLabel, MenuItem, FormControl, Select, SelectChangeEvent } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getTrails } from '../../actions/trails.js';
import GoogleMapReact from 'google-map-react';
import useStyles from './styles.js';

const Current = () => {
    const [ lat, setLat ] = useState(33.7490);
    const [ lon, setLon ] = useState(-84.3880);
    const classes = useStyles();
   
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
        })
    }, [])

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <div style={{ height: "75vh", width: "100%" }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: "AIzaSyBCiYYrFFae6p9h3FcpqEP8p9YxFwqJooY",
                            language: "en",
                            region: "US"
                        }}
                        defaultCenter={{ lat: 33.7490, lng: -84.3880 }}
                        defaultZoom={15}
                    >
                    
                    </GoogleMapReact>
                </div>
            </Paper>
        </Container>
    );
};

export default Current;