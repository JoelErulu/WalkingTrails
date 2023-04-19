import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Grid, Typography, Container, Button} from '@material-ui/core';
import useStyles, {goldOptions, greenOptions, greyOptions, containerStyle, exampleMapStyles} from './styles.js';
import { GoogleMap, LoadScript, Polyline, Marker} from '@react-google-maps/api';
import { GoldCords, GreenCoords, GreyCoords} from '../BigTrails/Coords.js'
import gold from '../../images/gold.png';
import green from '../../images/green.png';
import gray from '../../images/gray.png';

const Home = () => {

    const classes = useStyles();
    const navigate = useNavigate();

    const [center, setCenter] = useState('');

    const admin = () => {

        navigate('/admin');

    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCenter({ lat: 33.9804327949268, lng: -84.00527240759934 });
        });
    }, []);

    const go = (e) => {
        navigate('/gold')
    };

    const mapID = {
        mapId: "1ed395dbcf77ef66"
    };

    return (
        <Container component="main" maxWidth="xl">
            <Grid className={classes.gridContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={12} md={12} style={{ background: 'rgba(255, 255, 255, 1)' }}>
                {/* <Grid className={classes.gridItem} item xs={12} sm={6} md={3} style={{ background: 'rgba(255, 255, 255, 1)' }}>
                    <Typography variant="h5">Gold Trail</Typography>
                    <Link to ="/gold">
                        <img className={classes.image} src={gold} alt="Gold Trail"/>
                    </Link>
                </Grid>
                <Grid className={classes.gridItem} item xs={12} sm={6} md={3} style={{ background: 'rgba(255, 255, 255, 1)' }}>
                    <Typography variant="h5">Green Trail</Typography>
                    <Link to ="/green">
                        <img className={classes.image} src={green} alt="Green Trail"/>
                    </Link>
                </Grid>
                <Grid className={classes.gridItem} item xs={12} sm={6} md={3} style={{ background: 'rgba(255, 255, 255, 1)' }}>
                    <Typography variant="h5">Gray Trail</Typography>
                    <Link to ="/gray">
                        <img className={classes.image} src={gray} alt="Gray Trail"/>
                    </Link>
                </Grid> */}
                    <div style={{ display: "inline-block", height: "80vh", width: "100%" }}>
                    <LoadScript
                        googleMapsApiKey="AIzaSyBWo0kr3jti4QZCS6vyqjHVKEv6L31S2VA"
                    >
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={16}
                            options={mapID}
                        >
                            <Polyline
                                path = {GoldCords}
                                options={goldOptions}
                                onClick={go}
                            />
                            <Polyline
                                path = {GreenCoords}
                                options={greenOptions}
                            />
                            <Polyline 
                                path = {GreyCoords}
                                options={greyOptions}
                            />
                        </GoogleMap>
                    </LoadScript>
                </div>
                </Grid>
            </Grid>

            <Button variant="contained" className={classes.admin} color="secondary" onClick={admin}>Admin View</Button>
            
        </Container>
    );
};

export default Home;