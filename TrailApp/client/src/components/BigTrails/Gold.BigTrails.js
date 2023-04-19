import { Button, Grid, Typography, Container, Divider, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Polyline, Marker} from '@react-google-maps/api'
import useStyles from './styles.js';
import { createMarker, getMarkers } from '../../actions/markers.js';
import { useDispatch, useSelector } from 'react-redux';

const Gold = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    
    const initialState = { lat: '', lng: '', name: ''};

    //gets markers from store
    const {markers, isLoading} = useSelector((state) => state.markers);

    const [markerFormData, setMarkerFormData] = useState(initialState);
    const [map, setMap] = useState(/** @type google.maps.Map */(null));
    const [lati, setLati] = useState('');
    const [long, setLong] = useState('');
    const [center, setCenter] = useState('');
    const [selectedMarker, setSelectedMarker] = useState(null);

    //sets center of map
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCenter({ lat: 33.9804327949268, lng: -84.00527240759934 });
            setLati(latitude);
            setLong(longitude);
        });
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
    
    //Path cords
    const lineCords = [
        { lat: 33.9804327949268, lng: -84.00527240759934}, //1
        { lat: 33.980353575203154, lng: -84.005425507664}, //2 
        { lat: 33.980258836069275, lng: -84.00544404063348}, //3
        { lat: 33.98023130998688, lng: -84.00553638697316}, //4
        { lat: 33.98031233583348, lng: -84.00566859407513}, //5 
        { lat: 33.98051662236481, lng: -84.00606229109326}, //6 
        { lat: 33.980541303381045, lng: -84.00627567949988}, //7
        { lat: 33.98062901854693, lng: -84.00636015238378}, //8 
        { lat: 33.980620836245514, lng: -84.0070998429049}, //9
        { lat: 33.98047780686156, lng: -84.00705874453666}, //10
        { lat: 33.9791752438593, lng: -84.0072731823203}, //11
        { lat: 33.97931036346966, lng: -84.00668813314094}, //12
        { lat: 33.97946727517414, lng: -84.00607101155583}, //13
        { lat: 33.97949233613153, lng: -84.00514918039732}, //14
        { lat: 33.97979936335503, lng: -84.00453550335115}, //15
        { lat: 33.979476117422834, lng: -84.00413565828339}, //16
        { lat: 33.980763982534704, lng: -84.00127106165904}, //17
        { lat: 33.98067195835729, lng: -84.0011749064003}, //18
        { lat: 33.980967592954045, lng: -84.00080383673247}, //19
        { lat: 33.981652803992205, lng: -84.00059883287396}, //20
        { lat: 33.98250797424149, lng: -84.00086143665311}, //21
        { lat: 33.982456440666276, lng: -84.00113798492909}, //22
        { lat: 33.982909372483, lng: -84.00118626469136}, //23
        { lat: 33.983034372243324, lng: -84.00296987076443}, //24
        { lat: 33.98277545927202, lng: -84.00380743472242}, //25
        { lat: 33.982119348167465, lng: -84.00516753107239}, //26
        { lat: 33.9808875669128, lng: -84.00436201390548}, //27
        { lat: 33.9804327949268, lng: -84.00527240759934}, //28

    ];

    //Path attributes
    const options = {
        strokeColor: 'gold',
        strokeOpacity: 1,
        strokeWeight: 6,
        fillColor: 'cyan',
        fillOpacity: 0.35,
        clickable: false,
        draggable: false,
        editable: false,
        visible: true,
        radius: 30000,
        paths: [
            { lat: 33.98273616870477, lng: -84.00428789168899},
            { lat: 33.98240950306885, lng: 84.00679911047925}
        ],
        zIndex: 1
      };

    //Map Container
    const containerStyle = {
        width: '100%',
        height: '100%'
      };

    return (
    <Container component="main" maxWidth="xl">
        <Grid className={classes.gridContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={6} md={3} style={{ background: 'rgba(255, 255, 255, 1)' }}>
                <Typography variant="h6">Gold Trail</Typography>

                <Typography>
                    {selectedMarker?.name}
                    <br/>
                    {selectedMarker?.lat}
                    <br/>
                    {selectedMarker?.lng}
                    <br/>
                    {selectedMarker?.key}
                    <br/>
                </Typography>

                <Divider/>
                
                <form onSubmit={handleSubmit}>
                <TextField name='name' variant="outlined" label="Name" margin="normal" value={markerFormData.name}
                onChange={(e) => setMarkerFormData({...markerFormData, name: e.target.value})}></TextField>
                <br/>
                <TextField name='lat' variant="outlined" label="Latitude" value = {markerFormData.lat} InputLabelProps={{ shrink: true }} margin="normal"></TextField>
                <br/>
                <TextField name='lng' variant="outlined" label="Longitude" value = {markerFormData.lng} InputLabelProps={{ shrink: true }} margin="normal"></TextField>
                <br/>
                <Button type='submit' color="primary" variant="contained">Create</Button>
                </form>

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
                                path = {lineCords}
                                options={options}
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