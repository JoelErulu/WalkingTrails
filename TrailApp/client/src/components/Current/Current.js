import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Paper, Grid, Typography, Container, InputLabel, MenuItem, FormControl, Select, SelectChangeEvent } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getTrails } from '../../actions/trails.js';
import GoogleMapReact from 'google-map-react';
import useStyles from './styles.js';
import CurrentMarker from './Marker/CurrentMarker.js';
import Marker from './Marker/Marker.js';
import Timer from './Timer.js';

function Current() {
    const [map, setMap] = useState(/** @type google.maps.Map */(null));
    const [lati, setLati] = useState('');
    const [long, setLong] = useState('');
    const [center, setCenter] = useState('');
    const classes = useStyles();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCenter({ lat: latitude, lng: longitude });
            setLati(latitude);
            setLong(longitude);
        });
    }, []);

    console.log(center);

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <div style={{ display: "inline-block", height: "50vh", width: "100%" }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: "AIzaSyBCiYYrFFae6p9h3FcpqEP8p9YxFwqJooY",
                            language: "en",
                            region: "US"
                        }}
                        center={center}
                        defaultZoom={17}

                    >
                        <CurrentMarker
                            lat={lati}
                            lng={long}
                            name="Current Location"
                            color="blue" />
                        <Marker
                            lat={33.979838}
                            lng={-84.0013006}
                            name="Building A"
                            color="red" />
                        <Marker
                            lat={33.9808338}
                            lng={-84.0055385}
                            name="Building B"
                            color="red" />
                        <Marker
                            lat={33.9802712}
                            lng={-84.0063357}
                            name="Building C"
                            color="red" />
                        <Marker
                            lat={33.9791322}
                            lng={-84.0056598}
                            name="Building E"
                            color="red" />
                        <Marker
                            lat={33.9800459}
                            lng={-84.0035811}
                            name="Building H"
                            color="red" />
                        <Marker
                            lat={33.9793307}
                            lng={-84.0047613}
                            name="Building L"
                            color="red" />
                        <Marker
                            lat={33.97968}
                            lng={-84.006435}
                            name="Building W"
                            color="red" />
                    </GoogleMapReact>
                </div>
                <div style={{ height: "50vh", width: "100%" }}>
                    <Timer />
                <div style={{ color: 'white', textAlign: "center", backgroundColor: "purple", height: "7vh", width: "100%" }}>
                    <h1>Checkpoints: 0/3</h1>
                </div>
                <div style={{ color: 'white', textAlign: "center", backgroundColor: "blue", height: "7vh", width: "100%" }}>
                    <h1>Miles Completed: 0</h1>
                </div>
                </div>
                
            </Paper>
        </Container>
    );
}

export default Current;