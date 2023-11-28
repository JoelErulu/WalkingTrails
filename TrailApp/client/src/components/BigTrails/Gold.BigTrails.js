import { Button, Grid, Typography, Container, Divider, TextField, Collapse, CardMedia, Hidden, ImageListItem, ImageList} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Polyline, Marker} from '@react-google-maps/api'
import useStyles, { GoldTrailOptions, containerStyle, MapID } from './styles.js';
import { createMarker, getMarkers, updateMarker, deleteMarker} from '../../actions/markers.js';
import { useDispatch, useSelector } from 'react-redux';
import { GoldCords } from './Coords.js';
import FileBase from 'react-file-base64';
import { Link, useNavigate } from 'react-router-dom';
import video1 from '../../videos/ProjectVideo1.mp4';
import video2 from '../../videos/ProjectVideo2.mp4';
import video3 from '../../videos/ProjectVideo3.mp4';


const Gold = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const initialState = { lat: '', lng: '', name: '', exercise: '', img: '', };
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const { markers, isLoading } = useSelector((state) => state.markers);
    const [markerFormData, setMarkerFormData] = useState(initialState);
    const [center, setCenter] = useState('');
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [videoSource, setVideoSource] = useState(null);

    useEffect(() => {
        setCenter({ lat: 33.9804327949268, lng: -84.00527240759934 });
        dispatch(getMarkers());
    }, [dispatch]);

    const handleMarkerClick = (marker) => {
        if (selectedMarker && selectedMarker.key === marker.key) {
            // If the same marker is clicked, close the video
            setSelectedMarker(null);
            setIsVideoOpen(false);
        } else {
            // Close the current video before opening a new one
            setSelectedMarker(marker);
            setMarkerFormData({
                lat: marker.lat,
                lng: marker.lng,
                name: marker.name,
                exercise: marker.exercise,
                img: marker.img,
                text: marker.text,
            });
            setVideoSource(marker.videoSource);
            setIsVideoOpen(true);
        }
    };

    const closeVideo = () => {
        setSelectedMarker(null);
        setIsVideoOpen(false);
    };

    


    return (
    <Container component="main" maxWidth="xl">
        <Grid className={classes.gridContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={6} md={3} style={{ background: 'rgba(255, 255, 255, 1)' }}>
                <Typography className={classes.card} variant="h4" textAlign="center">Gold Trail</Typography>

                <Typography >

                {!selectedMarker && !isVideoOpen && (
                            <p>CLICK MARKER TO VIEW VIDEO</p>
                )}
 
                {selectedMarker && isVideoOpen && (
                    <div>
                        <video width="325px" height="auto" controls="controls" autoPlay>
                            <source src={videoSource} type="video/mp4" />
                        </video>
                        <h5>{selectedMarker.name}</h5>
                        <p>{selectedMarker.exercise}</p>
                        <Button onClick={closeVideo} variant="contained" color="primary">
                            Close Video
                        </Button>
                       <br/>
                       <br/>
                    
                    </div>
                )}
                    

                </Typography>

                <Divider/>

                <br/>
                <br/>
                <br/>
                <br/>
                {/* <Link to ="/nutrition"><Button variant="contained" color="success">Nutrition</Button></Link> */}
                
            </Grid>
            <Grid item xs={12} sm={6} md={9} style={{ background: 'rgba(255, 255, 255, 0.5)' }}>
                <div style={{ display: "inline-block", height: "80vh", width: "100%" }}>
                    <LoadScript
                        googleMapsApiKey="AIzaSyCKEd9gY2vA4IAZdBmZkhvrrfofT2KZfyU"
                    >
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={16}
                            options={MapID}
                        >
                            {/* Markers with different video sources */}
            <Marker
                position={{ lat: 33.9804327949268, lng: -84.00527240759934 }}
                onClick={() =>
                    handleMarkerClick({
                        key: 1,
                        lat: 33.9804327949268,
                        lng: -84.00527240759934,
                        name: "B Building Marker",
                        videoSource: video1,
                    })
                }
            />

            <Marker
                position={{ lat: 33.979179, lng: -84.007273 }}
                onClick={() =>
                    handleMarkerClick({
                        key: 2,
                        lat: 33.979179,
                        lng: -84.007273,
                        name: "Basketball Court Marker",
                        videoSource: video2,
                    })
                }
            />

            <Marker
                position={{ lat: 33.982496, lng: -84.000953 }}
                onClick={() =>
                    handleMarkerClick({
                        key: 3,
                        lat: 33.982496,
                        lng: -84.000953,
                        name: "University Center Ln Marker",
                        videoSource: video3,
                    })
                }
            />

                            {/* current marker */}
                            {markerFormData.lat && markerFormData.lng && (
                            <Marker 
                                position={{lat: markerFormData.lat, lng: markerFormData.lng}}
                                name = {markerFormData.name}
                            />
                            )}

                            <Polyline
                                path = {GoldCords}
                                options={GoldTrailOptions}
                            />
                        </GoogleMap>
                    </LoadScript>
                </div>
                </Grid>
            </Grid>
    </Container>

    );
};

export default Gold;

// https://react-google-maps-api-docs.netlify.app/#data