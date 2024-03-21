import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography, Container, Paper } from '@material-ui/core';
import useStyles, { containerStyle, goldOptions, greenOptions, greyOptions } from './styles.js';
import { GoogleMap, LoadScript, Polyline } from '@react-google-maps/api';
import { GoldCords, GreenCoords, GreyCoords } from '../BigTrails/Coords.js';

const Home = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const currentUser = JSON.parse(localStorage.getItem("profile"));
    const isAdmin = currentUser && (currentUser.result.role === "admin" || currentUser.result.role === "SuperAdmin");

    const [center] = useState({ lat: 33.9804327949268, lng: -84.00527240759934 });

    useEffect(() => {
        // Potentially fetch user-specific data or settings here
    }, []);

    const goTrail = (trailName) => {
        const trailMap = {
            'gold': isAdmin ? '/GoldAdmin' : '/gold',
            'green': isAdmin ? '/GreenAdmin' : '/green',
            'grey': isAdmin ? '/GrayAdmin' : '/gray'
        };
        navigate(trailMap[trailName]);
    };

    return (
        <Container component="main" maxWidth="xl">
            <Grid className={classes.gridContainer} container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" className={classes.title}>Select a Trail</Typography>
                        <div>
                            <Typography className={classes.gold} onClick={() => goTrail('gold')}>Gold Trail</Typography>
                            <Typography className={classes.green} onClick={() => goTrail('green')}>Green Trail</Typography>
                            <Typography className={classes.grey} onClick={() => goTrail('grey')}>Grey Trail</Typography>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={9}>
                    <div style={{ height: "80vh" }}>
                        <LoadScript googleMapsApiKey="AIzaSyCKEd9gY2vA4IAZdBmZkhvrrfofT2KZfyU">
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={16}
                            >
                                <Polyline path={GoldCords} options={goldOptions} onClick={() => goTrail('gold')} />
                                <Polyline path={GreenCoords} options={greenOptions} onClick={() => goTrail('green')} />
                                <Polyline path={GreyCoords} options={greyOptions} onClick={() => goTrail('grey')} />
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;
