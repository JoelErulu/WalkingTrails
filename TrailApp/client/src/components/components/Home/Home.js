import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Grid, Typography, Container, Button, Divider, Collapse} from '@material-ui/core';
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
    const [openGold, setOpenGold] = useState(false);
    const [openGreen, setOpenGreen] = useState(false);
    const [openGrey, setOpenGrey] = useState(false);

    // };
    //Keep this in mind
    useEffect(() => {
        // navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCenter({ lat: 33.9804327949268, lng: -84.00527240759934 });
        // });
    }, []);

    const goGold = (e) => {
        navigate('/gold')
    };

    const goGreen = (e) => {
        navigate('/green')
    };

    const goGrey = (e) => {
        navigate('/gray')
    };

    const mapID = {
        mapId: "1ed395dbcf77ef66"
    };


    return (
        <Container component="main" maxWidth="xl">
            <Grid className={classes.gridContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={6} md={4} style={{ background: '#ffffff' }}>
                    <div style={{textAlign: "center"}}>

                        <Typography className = {classes.gold} onClick = {() => setOpenGold(!openGold)}>Gold Trail</Typography>
                        <Collapse in={openGold}>
                            <Link to ="/gold">
                                <img className={classes.image} src={gold} alt="Gold Trail"/>
                            </Link>
                        </Collapse>
                        <Divider/>

                        <Typography className = {classes.green} onClick = {() => setOpenGreen(!openGreen)}>Green Trail</Typography>
                        <Collapse Collapse in={openGreen}>
                            <Link to ="/green">
                            <img className={classes.image} src={green} alt="Green Trail"/>
                            </Link>
                        </Collapse>
                        <Divider/>

                        <Typography className = {classes.grey} onClick = {() => setOpenGrey(!openGrey)}>Gray Trail</Typography>
                        <Collapse Collapse in={openGrey}>
                            <Link to ="/gray">
                            <img className={classes.image} src={gray} alt="Gray Trail"/>
                            </Link>
                        </Collapse>
                        <Divider/>

                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={8} style={{ background: 'rgba(255, 255, 255, 0.5)' }}>


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
                        googleMapsApiKey="AIzaSyCKEd9gY2vA4IAZdBmZkhvrrfofT2KZfyU"
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
                                onClick={goGold}
                            />
                            <Polyline
                                path = {GreenCoords}
                                options={greenOptions}
                                onClick={goGreen}
                            />
                            <Polyline 
                                path = {GreyCoords}
                                options={greyOptions}
                                onClick={goGrey}
                            />
                        </GoogleMap>
                    </LoadScript>
                </div>
                </Grid>
            </Grid>
            
        </Container>
    );
};

export default Home;

// https://react-google-maps-api-docs.netlify.app/#data