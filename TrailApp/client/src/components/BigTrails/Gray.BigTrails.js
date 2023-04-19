import { Button, Grid, Typography, Container, Divider, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Polyline, Marker} from '@react-google-maps/api'
import useStyles from './styles.js';
import { createMarker, getMarkers } from '../../actions/markers.js';
import { useDispatch, useSelector } from 'react-redux';

const Gray = () => {
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
            setCenter({ lat: 33.98251828102669, lng: -84.00032686036535 });
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
    
    //Path cords (PATH IS HARDCODED FUTURE project workers can make it dynamic)
    const lineCoords = [
        { lat: 33.97967560437334, lng: -83.99934638811425}, //1
        { lat: 33.97960640398059, lng: -83.99999280048684}, //2 
        { lat: 33.97949631233059, lng: -84.00018860174492}, //3
        { lat: 33.98059256585612, lng: -84.00095841674242}, //4
        { lat: 33.980658620011404, lng: -84.00083503512774}, //5 
        { lat: 33.98082532788936, lng: -84.00091013698015}, //6 
        { lat: 33.98148318828498, lng: -84.0005864416191}, //7
        { lat: 33.98249386952536, lng: -84.00087524617379}, //8 
        { lat: 33.98243410753451, lng: -84.00113810265725}, //9
        { lat: 33.982728725675095, lng: -84.0013168374316}, //10
        { lat: 33.982904865548576, lng: -84.00287788307827}, //11
        { lat: 33.98316907467445, lng: -84.00292884504955}, //12
        { lat: 33.98333519504798, lng: -84.0028507798253}, //13
        { lat: 33.984200411263295, lng: -84.00405994589548}, //14
        { lat: 33.98443784080755, lng: -84.00480422695614}, //15
        { lat: 33.98468876206725, lng: -84.00525056815857}, //16
        { lat: 33.985462498805724, lng: -84.0049863705706}, //17
        { lat: 33.98516275445264, lng: -84.00375870998322}, //18
        { lat: 33.984491313350226, lng: -84.0039651099732}, //19
        { lat: 33.98479011112938, lng: -84.00514982841312}, //20
        { lat: 33.984718906196086, lng: -84.00517535436221}, //21
        { lat: 33.984479862685, lng: -84.00473866684281}, //22
        { lat: 33.98424082005488, lng: -84.00402519924485}, //23
        { lat: 33.984033229856976, lng: -84.0037086985811}, //24
        { lat: 33.98386399339135, lng: -84.00352730698141}, //25
        { lat: 33.983393560887336, lng: -84.0028364621154}, //26
        { lat: 33.98304470109728, lng: -84.00279191095645}, //27
        { lat: 33.98302169262648, lng: -84.00227023197125}, //28
        { lat: 33.982884187922664, lng: -84.00121054359171}, //29
        { lat: 33.98306839827867, lng: -84.00103796590041}, //30
        { lat: 33.98341136240258, lng: -84.00053822218693}, //31
        { lat: 33.98019843191301, lng: -83.99831153137256}, //32
        { lat: 33.97967560437334, lng: -83.99934638811425}, //33
    ];

    //Path attributes
    const options = {
        strokeColor: 'gray',
        strokeOpacity: 1,
        strokeWeight: 6,
        fillColor: 'gray',
        fillOpacity: 0.35,
        clickable: false,
        draggable: false,
        editable: false,
        visible: true,
        radius: 30000,
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
                <Typography variant="h6">Grey Trail</Typography>

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
                                position={{lat: 33.97967560437334, lng: -83.99934638811425}}
                                onClick={() => handleMarkerClick({
                                    key: 1,
                                    lat: 33.97967560437334,
                                    lng: -83.99934638811425,
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
                                path = {lineCoords}
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

export default Gray;