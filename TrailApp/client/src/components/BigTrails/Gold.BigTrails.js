import { Button, Grid, Typography, Container, Divider, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import useStyles from './styles.js';
import CurrentMarker from './CurrentMarker.Gold.js';
import Marker from './Marker.Gold.js';
import Line from './Line.js';
import { createMarker, getMarkers } from '../../actions/markers.js';
import { useDispatch, useSelector } from 'react-redux';

const Gold = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    
    const initialState = { lat: '', lng: '', name: '', color: '' };

    const {markers, isLoading} = useSelector((state) => state.markers);

    const [markerData, setMarkerData] = useState(initialState);
    const [map, setMap] = useState(/** @type google.maps.Map */(null));
    const [lati, setLati] = useState('');
    const [long, setLong] = useState('');
    const [center, setCenter] = useState('');
    const [selectedMarker, setSelectedMarker] = useState(initialState);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCenter({ lat: 33.979904281519644, lng: -84.00106991202341 });
            setLati(latitude);
            setLong(longitude);
        });
    }, []);

    useEffect(() => {
        dispatch(getMarkers());
    }, [dispatch])

    function _onClick({x,y,lat,lng, event}) {
        console.log(x,y,lat,lng,event)
        setMarkerData({...markerData, lat: lat, lng: lng});
    }

    function handleMarkerClick(key, props) {
        setSelectedMarker({...selectedMarker, name: props.name, color: props.color})
    };

    const handleSubmit = (e) => {
        // e.preventDefault();

         dispatch(createMarker(markerData));

    }
    
    // const lineCoords = [
    //     { lat: 33.98086540534484, lng: -84.00684184158578},

    // ];

    return (
    <Container component="main" maxWidth="xl">
        <Grid className={classes.gridContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={6} md={3} style={{ background: 'rgba(255, 255, 255, 1)' }}>
                <Typography variant="h6">Gold Trail</Typography>

                <Typography>
                    {selectedMarker?.name}
                    {selectedMarker?.color}
                </Typography>

                <Divider/>
                
                <form onSubmit={handleSubmit}>
                <TextField name='name' variant="outlined" label="Name" margin="normal" value={markerData.name}
                onChange={(e) => setMarkerData({...markerData, name: e.target.value})}></TextField>
                <br/>
                <TextField name='color' variant="outlined" label="Color" margin="normal"   value={markerData.color}
                onChange={(e) => setMarkerData({...markerData, color: e.target.value})}></TextField>
                <br/>
                <TextField name='lat' variant="outlined" label="Latitude" value = {markerData.lat} InputLabelProps={{ shrink: true }} margin="normal"></TextField>
                <br/>
                <TextField name='lng' variant="outlined" label="Longitude" value = {markerData.lng} InputLabelProps={{ shrink: true }} margin="normal"></TextField>
                <br/>
                <Button type='submit' color="primary" variant="contained">Create</Button>
                </form>

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
                        defaultZoom={16}
                        onClick={_onClick}
                        onChildClick={handleMarkerClick}
                    >

                        <CurrentMarker
                            lat={lati}
                            lng={long}
                            name="Current Location"
                            color="blue" />

                        {markers.map((marker) => (
                            <Marker 
                                key = {marker._id}
                                lat = {marker.lat}
                                lng = {marker.lng}
                                name = {marker.name}
                                color = {marker.color}
                            />
                        ))}

                        {markerData.lat && markerData.lng && (
                            <Marker 
                                lat = {markerData.lat}
                                lng = {markerData.lng}
                                name = {markerData.name}
                                color = {markerData.color}
                            />
                        )}

                        <Marker 
                            lat = {33.979904281519644}
                            lng = {-84.00106991202341}
                            name = "GGC A Building"
                            color = "red"
                        />
                    </GoogleMapReact>
                </div>
                </Grid>
            </Grid>
    </Container>

    );
};

export default Gold;