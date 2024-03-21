import { Button, Grid, Typography, Container, Divider, TextField, Collapse, CardMedia, Hidden, ImageListItem, ImageList} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Polyline, Marker} from '@react-google-maps/api';
import useStyles, { GoldTrailOptions, containerStyle, MapID } from './styles.js';
import { createMarker, getMarkers, updateMarker, deleteMarker} from '../../actions/markers.js';
import { useDispatch, useSelector } from 'react-redux';
import { GoldCords } from './Coords.js';
import FileBase from 'react-file-base64';
import { Link, useNavigate } from 'react-router-dom';
import VideoUpload from './VideoUpload'; // Import the VideoUpload component
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
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);
    const [hasDisliked, setHasDisliked] = useState(false);

    useEffect(() => {
        setCenter({ lat: 33.9804327949268, lng: -84.00527240759934 });
    }, []);

    //get markers from db
    useEffect(() => {
        dispatch(getMarkers());
    }, [dispatch])

    const handleMarkerClick = (marker) => {
        if (selectedMarker && selectedMarker.key === marker.key) {
            setSelectedMarker(null);
            setIsVideoOpen(false);
        } else {
            setSelectedMarker(marker);
            setMarkerFormData({
                lat: marker.lat,
                lng: marker.lng,
                name: marker.name,
                exercise: marker.exercise,
                img: marker.img,
                text: marker.text,
            });
            // Assuming `marker.videoId` contains the ID of the video in the database
            setVideoSource(`/videos/${marker.videoId}`);
            setIsVideoOpen(true);
            setHasLiked(false);
            setHasDisliked(false);
        }
    };

    const closeVideo = () => {
        setSelectedMarker(null);
        setIsVideoOpen(false);
    };

    const handleLike = () => {
        if (selectedMarker && selectedMarker.videoId && !hasLiked) {
            fetch(`/videos/${selectedMarker.videoId}/like`, { method: 'POST' })
                .then(response => response.json())
                .then(data => {
                    setLikes(data.likes); // Update likes count in the UI
                    setHasLiked(true);
                    setHasDisliked(false); // Ensure the user cannot dislike simultaneously
                })
                .catch(error => console.error('Error liking video:', error));
        }
    };
    
    const handleDislike = () => {
        if (selectedMarker && selectedMarker.videoId && !hasDisliked) {
            fetch(`/videos/${selectedMarker.videoId}/dislike`, { method: 'POST' })
                .then(response => response.json())
                .then(data => {
                    setDislikes(data.dislikes); // Update dislikes count in the UI
                    setHasDisliked(true);
                    setHasLiked(false); // Ensure the user cannot like simultaneously
                })
                .catch(error => console.error('Error disliking video:', error));
        }
    };
    

    const handleVideoUpload = (file) => {
        const formData = new FormData();
        formData.append('video', file);
    
        fetch('/videos/upload-video', {
            method: 'POST',
            body: formData,
        })

        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to upload video');
            }
            return response.json(); // Assuming your server returns some data after successful upload
        })
        .then(data => {
            console.log('Video uploaded successfully:', data);
            // Optionally, you can perform any additional actions after successful upload
            // For example, you can update the UI or notify the user
            alert('Video uploaded successfully!');
            // Or you can update some state variable to trigger a UI change
            // setUploadSuccess(true);
        })
        .catch(error => {
            console.error('Error uploading video:', error);
            alert('Failed to upload video. Please try again later.');
        });
    };
    

    return (
        <Container component="main" maxWidth="xl">
            <Grid className={classes.gridContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={6} md={3} style={{ background: 'rgba(255, 255, 255, 1)' }}>
                    <Typography className={classes.card} variant="h4" textAlign="center">Gold Trail</Typography>
                    <Typography>
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
                                <Button onClick={handleLike} variant="contained" color="primary" disabled={hasLiked}>
                                    Like ({likes})
                                </Button>
                                <Button onClick={handleDislike} variant="contained" color="primary" disabled={hasDisliked}>
                                    Dislike ({dislikes})
                                </Button>
                                <Button variant="contained" color="primary" component="label">
                                    Upload Video
                                    <input type="file" accept="video/*" style={{ display: "none" }} onChange={(e) => handleVideoUpload(e.target.files[0])} />
                                </Button>
                                <br/>
                                <br/>
                                {/* Font Awesome like/dislike icons */}
                                <i className={`fa fa-thumbs-up${hasLiked ? ' active' : ''}`} onClick={handleLike}></i>
                                <i className={`fa fa-thumbs-down${hasDisliked ? ' active' : ''}`} onClick={handleDislike}></i>
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
                                <Polyline
                                    path={GoldCords}
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

