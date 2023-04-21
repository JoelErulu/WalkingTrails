import { Button, Grid, Typography, Container, Divider, TextField, Collapse, CardMedia, Hidden, ImageListItem, ImageList, } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Polyline, Marker} from '@react-google-maps/api'
import useStyles, { GoldTrailOptions, containerStyle, MapID } from './styles.js';
import { createMarker, getMarkers } from '../../actions/markers.js';
import { useDispatch, useSelector } from 'react-redux';
import { GoldCords } from './Coords.js';
import FileBase from 'react-file-base64';


const Gold = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    
    const initialState = { lat: '', lng: '', name: '', exercise: '',  img: '',};

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

    //click on map to fill in form data
    const _onClick = (event) => {
        setMarkerFormData({...markerFormData, lat: event.latLng.lat(), lng: event.latLng.lng()});
    };

    //when marker is clicked
    const handleMarkerClick = (event) => {
        setSelectedMarker(event);
    };

    //submit form to create marker
    const handleSubmit = (e) => {
        // e.preventDefault();

         dispatch(createMarker(markerFormData));

    }

    return (
    <Container component="main" maxWidth="xl">
        <Grid className={classes.gridContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={6} md={3} style={{ background: 'rgba(255, 255, 255, 1)' }}>
                <Typography variant="h6">Gold Trail</Typography>

                <Typography>
 
                    <ImageList >
                    {selectedMarker?.img.map((img, index) => (
                    <ImageListItem key={index}>
                    <img src={img} className={classes.media} />
                    </ImageListItem>
                     ))}
                    </ImageList>
                    {/* {selectedMarker?.img.map((img, index) => (
                    <img key={index} src={img} className={classes.media} />
                    ))}           */}
                    <br/>
                    {selectedMarker?.img}
                    <br/>
                    {selectedMarker?.name}
                    <br/>
                    {selectedMarker?.exercise}
                    <br/>
                    {selectedMarker?.img.map((item) => (item))}
                    

                </Typography>

                <Divider/>
                
                <Button 
                    onClick={() => setOpen(!open)}
                > Create Checkpoint   
                {open ?
                (<Button variant="outlined" color="Secondary"> Close </Button>) : (<Button variant="outlined" color='Primary'> Open  </Button>)
                }
                </Button>

                <Collapse in={open}>
                <form onSubmit={handleSubmit}>
                <TextField name='name' variant="outlined" label="Name" margin="normal" value={markerFormData.name}
                onChange={(e) => setMarkerFormData({...markerFormData, name: e.target.value})}></TextField>
                <br/>
                <TextField name='exersice' variant="outlined" label="Exercise" margin="normal" value={markerFormData.exercise}
                onChange={(e) => setMarkerFormData({...markerFormData, exercise: e.target.value})}></TextField>
                <br/>
                <Collapse>
                <TextField name='lat' variant="outlined" label="Latitude" value = {markerFormData.lat} InputLabelProps={{ shrink: true }} margin="normal"></TextField>
                <br/>
                <TextField name='lng' variant="outlined" label="Longitude" value = {markerFormData.lng} InputLabelProps={{ shrink: true }} margin="normal"></TextField>
                </Collapse>
                <br/>
                <div><FileBase type="file" multiple={true} onDone={({ base64 }) => setMarkerFormData({ ...markerFormData, img: base64.split(',') })}/></div>
                <Button type='submit' color="primary" variant="contained">Create</Button>
                </form>
                </Collapse>

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
                            onClick={_onClick}
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
                                onClick={() => handleMarkerClick({
                                    key: marker._id,
                                    lat: marker.lat,
                                    lng: marker.lng,
                                    name: marker.name,
                                    exercise: marker.exercise,
                                    img: marker.img,
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