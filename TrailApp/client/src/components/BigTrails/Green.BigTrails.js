import { Button, Grid, Typography, Container, Divider, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Polyline, Marker} from '@react-google-maps/api'
import useStyles from './styles.js';
import { createMarker, getMarkers } from '../../actions/markers.js';
import { useDispatch, useSelector } from 'react-redux';

const Green = () => {

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
            setCenter({ lat: 33.9818935074201, lng: -84.00325859457956 });
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
        { lat: 33.97809098899297, lng: -84.00006969125516}, //1
        { lat: 33.97758629354619, lng: -84.00301387572847}, //2 
        { lat: 33.979310787281094, lng: -84.00408138735254}, //3
        { lat: 33.9793709406993, lng: -84.00400062888367}, //4
        { lat: 33.9798257240277, lng: -84.00454296954817}, //5 
        { lat: 33.97948750866205, lng: -84.00515024881724}, //6 
        { lat: 33.97947719314045, lng: -84.00606444823453}, //7
        { lat: 33.97917484775735, lng: -84.00727684826602}, //8 
        { lat: 33.97939071628647, lng: -84.00930292478986}, //9
        { lat: 33.979188813845546, lng: -84.01020958125805}, //10
        { lat: 33.97901494111879, lng: -84.01030054892523}, //11
        { lat: 33.977662367267115, lng: -84.01042929495794}, //12
        { lat: 33.97776428264252, lng: -84.01193964705985}, //13
        { lat: 33.977877450156726, lng: -84.01201937346033}, //14
        { lat: 33.979138801396935, lng: -84.01192013172678}, //15
        { lat: 33.97910203519382, lng: -84.0106159450226}, //16
        { lat: 33.97894771267771, lng: -84.01055385649103}, //17
        { lat: 33.97895089459389, lng: -84.01042293939832}, //18
        { lat: 33.97906727793773, lng: -84.01039477620367}, //19
        { lat: 33.979174730342315, lng: -84.01049933624462}, //20
        { lat: 33.979273806621364, lng: -84.01047956602821}, //21
        { lat: 33.97948404867353, lng: -84.01157386327976}, //22
        { lat: 33.97970423186272, lng: -84.01171065593952}, //23
        { lat: 33.97976712648228, lng: -84.01166938621931}, //24
        { lat: 33.98044865426362, lng: -84.01063134533894}, //25
        { lat: 33.980809382702496, lng: -84.0097913121089}, //26
        { lat: 33.98078425174301, lng: -84.00914090857894}, //27
        { lat: 33.98061001161156, lng: -84.00722926630057}, //28
        { lat: 33.980831511007125, lng: -84.00672184217707}, //29
        { lat: 33.9816744816242, lng: -84.00579916227595}, //30
        { lat: 33.981735841661425, lng: -84.00565039830704}, //31
        { lat: 33.981814476497135, lng: -84.00573488789101}, //32
        { lat: 33.982960032232526, lng: -84.00343875445816}, //33
        { lat: 33.98306100345038, lng: -84.00287445574696}, //34
        { lat: 33.98334647866549, lng: -84.00285019746674}, //35
        { lat: 33.98386792054119, lng: -84.00365964159394}, //36
        { lat: 33.984200411263295, lng: -84.00405994589548}, //37
        { lat: 33.98443784080755, lng: -84.00480422695614}, //38
        { lat: 33.98468876206725, lng: -84.00525056815857}, //39
        { lat: 33.985462498805724, lng: -84.0049863705706}, //40
        { lat: 33.98516275445264, lng: -84.00375870998322}, //41
        { lat: 33.984491313350226, lng: -84.0039651099732}, //42
        { lat: 33.98479011112938, lng: -84.00514982841312}, //43
        { lat: 33.984718906196086, lng: -84.00517535436221}, //44
        { lat: 33.984479862685, lng: -84.00473866684281}, //45
        { lat: 33.98424082005488, lng: -84.00402519924485}, //46
        { lat: 33.984033229856976, lng: -84.0037086985811}, //47
        { lat: 33.98386399339135, lng: -84.00352730698141}, //48
        { lat: 33.983393560887336, lng: -84.0028364621154}, //49
        { lat: 33.98304470109728, lng: -84.00279191095645}, //50
        { lat: 33.98302169262648, lng: -84.00227023197125}, //51
        { lat: 33.982884187922664, lng: -84.00121054359171}, //52
        { lat: 33.98306839827867, lng: -84.00103796590041}, //53
        { lat: 33.98341136240258, lng: -84.00053822218693}, //54
        { lat: 33.97927322465532, lng: -83.99764503234873}, //55
        { lat: 33.97809098899297, lng: -84.00006969125516}, //56
    ];

    //Path attributes
    const options = {
        strokeColor: 'green',
        strokeOpacity: 1,
        strokeWeight: 6,
        fillColor: 'green',
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
                <Typography variant="h6">Green Trail</Typography>

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
                                position={{lat: 33.97809098899297, lng: -84.00006969125516}}
                                onClick={() => handleMarkerClick({
                                    key: 1,
                                    lat: 33.97809098899297,
                                    lng: -84.00006969125516,
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

export default Green;