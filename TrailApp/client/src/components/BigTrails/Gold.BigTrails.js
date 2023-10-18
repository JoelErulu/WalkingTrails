import { Button, Grid, Typography, Container, Divider, TextField, Collapse, CardMedia, Hidden, ImageListItem, ImageList} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Polyline, Marker} from '@react-google-maps/api'
import useStyles, { GoldTrailOptions, containerStyle, MapID } from './styles.js';
import { createMarker, getMarkers, updateMarker, deleteMarker} from '../../actions/markers.js';
import { useDispatch, useSelector } from 'react-redux';
import { GoldCords } from './Coords.js';
import FileBase from 'react-file-base64';
import { Link, useNavigate } from 'react-router-dom';
import video from '/Users/khales/Desktop/School/Soft Dev II/Walking Trail App/WalkingTrailApp/TrailApp/client/src/videos/ProjectVideo1.mp4';


const Gold = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    
    const initialState = { lat: '', lng: '', name: '', exercise: '',  img: '',};
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    //gets markers from store
    const {markers, isLoading} = useSelector((state) => state.markers);

    const [markerFormData, setMarkerFormData] = useState(initialState);
    const [center, setCenter] = useState('');
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [open, setOpen] = useState(false);

    //sets center of map
    useEffect(() => {
        setCenter({ lat: 33.9804327949268, lng: -84.00527240759934 });
        // navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            
        // });
    }, []);

    //get markers from db
    useEffect(() => {
        dispatch(getMarkers());
    }, [dispatch])

    //when marker is clicked
    const handleMarkerClick = (event) => {
        if (selectedMarker && selectedMarker.key === event.key) {
            // If the same marker is clicked, close the video
            setSelectedMarker(null);
            setIsVideoOpen(false);
        } else {
            setSelectedMarker(event);
            setMarkerFormData({
                lat: event.lat,
                lng: event.lng,
                name: event.name,
                exercise: event.exercise,
                img: event.img,
                text: event.text,
            });
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
                <Typography className={classes.card} variant="h6" textAlign="center">Gold Trail</Typography>

                <Typography >
 
                {selectedMarker && isVideoOpen && (
                    <div>
                        <video width="400px" height="auto" controls="controls">
                            <source src={video} type="video/mp4" />
                        </video>
                        <h2>{selectedMarker.name}</h2>
                        <p>{selectedMarker.exercise}</p>
                        <Button onClick={closeVideo} variant="contained" color="secondary">
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
                <Link to ="/nutrition"><Button variant="contained" color="success">Nutrition</Button></Link>
                
            </Grid>
            <Grid item xs={12} sm={6} md={9} style={{ background: 'rgba(255, 255, 255, 0.5)' }}>
                <div style={{ display: "inline-block", height: "80vh", width: "100%" }}>
                    <LoadScript
                        googleMapsApiKey="AIzaSyBWo0kr3jti4QZCS6vyqjHVKEv6L31S2VA"
                    >
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={16}
                            options={MapID}
                        >
                            {/* Initial Marker */}
                            <Marker
                                position={{lat: 33.9804327949268, lng: -84.00527240759934}}
                                onClick={() => handleMarkerClick({
                                    key: 1,
                                    lat: 33.9804327949268,
                                    lng: -84.00527240759934,
                                    name: "First",
                                })}
                            />
                            {/* database markers */}
                            {markers.map((marker) => (
                            <Marker 
                                position={{lat: marker.lat, lng: marker.lng}}
                                key = {marker._id}
                                onClick={() => handleMarkerClick({
                                    key: marker._id,
                                    lat: marker.lat,
                                    lng: marker.lng,
                                    name: marker.name,
                                    exercise: marker.exercise,
                                    img: marker.img,
                                    text: marker.text,
                                })}
                            />
                            ))}

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