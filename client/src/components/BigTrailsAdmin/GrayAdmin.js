import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleMap, LoadScript, Marker, Polyline } from '@react-google-maps/api';
import { Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import useStyles, { GreyTrailOptions, containerStyle, MapID } from './styles.js';
import { createMarker, deleteMarker, getMarkers, updateMarker } from '../../actions/markers.js';
import { GreyCoords } from './Coords.js';

const Gray = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { markers } = useSelector(state => state.markers);
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [markerFormData, setMarkerFormData] = useState({ lat: '', lng: '', name: '', exercise: '' });
    const [center, setCenter] = useState({ lat: 33.98251828102669, lng: -84.00032686036535 });
    const [open, setOpen] = useState(false);

    useEffect(() => {
        dispatch(getMarkers());
    }, [dispatch]);

    // No need for setCenter function call inside useEffect as state is already set above

    const handleMarkerClick = (marker) => {
        setSelectedMarker(marker);
        setMarkerFormData(marker);
        setOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedMarker && selectedMarker._id) {
            dispatch(updateMarker(selectedMarker._id, markerFormData));
        } else {
            dispatch(createMarker(markerFormData));
        }
        clear();
    };

    const handleDelete = () => {
        if (selectedMarker && selectedMarker._id) {
            dispatch(deleteMarker(selectedMarker._id));
            clear();
        }
    };

    const clear = () => {
        setSelectedMarker(null);
        setMarkerFormData({ lat: '', lng: '', name: '', exercise: '' });
        setOpen(false);
    };

    return (
        <Container component="main" maxWidth="xl">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6">Grey Trail</Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            value={markerFormData.name}
                            onChange={(e) => setMarkerFormData({ ...markerFormData, name: e.target.value })}
                        />
                        <TextField
                            label="Latitude"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            value={markerFormData.lat}
                            InputLabelProps={{ shrink: true }}
                        />
                        <TextField
                            label="Longitude"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            value={markerFormData.lng}
                            InputLabelProps={{ shrink: true }}
                        />
                        <Button type="submit" color="primary" variant="contained">Create/Update</Button>
                        <Button onClick={handleDelete} color="secondary" variant="contained">Delete</Button>
                    </form>
                </Grid>
                <Grid item xs={12} sm={6} md={9}>
                    <div style={{ height: "80vh", width: "100%" }}>
                        <LoadScript googleMapsApiKey="AIzaSyCKEd9gY2vA4IAZdBmZkhvrrfofT2KZfyU">
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={{ lat: 33.98251828102669, lng: -84.00032686036535 }}
                                zoom={16}
                                options={MapID}
                            >
                                {markers.map((marker) => (
                                    <Marker
                                        key={marker._id}
                                        position={{ lat: marker.lat, lng: marker.lng }}
                                        onClick={() => handleMarkerClick(marker)}
                                    />
                                ))}
                                <Polyline path={GreyCoords} options={GreyTrailOptions} />
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Gray;
