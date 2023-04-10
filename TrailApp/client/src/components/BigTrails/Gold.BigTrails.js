import { Button, Box, Paper, Grid, Typography, Container, InputLabel, MenuItem, FormControl, Select, SelectChangeEvent, Drawer, Divider } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import useStyles from './styles.js';
import CurrentMarker from './CurrentMarker.Gold.js';
import Marker from './Marker.Gold.js';

const Gold = () => {

    const classes = useStyles();

    const [map, setMap] = useState(/** @type google.maps.Map */(null));
    const [lati, setLati] = useState('');
    const [long, setLong] = useState('');
    const [center, setCenter] = useState('');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCenter({ lat: latitude, lng: longitude });
            setLati(latitude);
            setLong(longitude);
        });
    }, []);

    const OpenDrawer = () => {
        <Drawer anchor = 'left' open = {isDrawerOpen} onClose = {() => setIsDrawerOpen(false)}>
            <Box>
                <Typography> Side Panel </Typography>
            </Box>
        </Drawer>
    }

    return (
    <Container component="main" maxWidth="xl">
        <Grid className={classes.gridContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={6} md={3} style={{ background: 'rgba(255, 255, 255, 1)' }}>
                <Typography variant="h6">Gold Trail</Typography>

                <Divider/>

                <table>
                    
                </table>
            </Grid>
            <Grid item xs={12} sm={6} md={9} style={{ background: 'rgba(255, 255, 255, 0.5)' }}>
                <div style={{ display: "inline-block", height: "80vh", width: "100%" }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: "AIzaSyBWo0kr3jti4QZCS6vyqjHVKEv6L31S2VA",
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
                            color="red" 
                            />
                        {/* <Marker
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
                            color="red" /> */}
                    </GoogleMapReact>
                </div>
                </Grid>
            </Grid>
    </Container>

    );
};

export default Gold;