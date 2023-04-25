import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Grid, Typography, Container, Button, Paper, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { useDispatch, useSelector} from 'react-redux';
import useStyles from './styles.js';
import { createMarker, getMarkers, updateMarker, deleteMarker} from '../../actions/markers.js';
import FileBase from 'react-file-base64';

const Nutrition = () => {

    const classes = useStyles();
    
    return (
        <>
        
        <Container component="main" maxWidth="xl">
        

                {/* <Paper className={classes.paper} elevation={3}>
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
                <div><FileBase type="file" multiple={false} onDone={({ base64 }) => setMarkerFormData({ ...markerFormData, img: base64 })}/></div>
                <Button type='submit' color="primary" variant="contained">Create</Button>
                </form> */}
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>


                {/* </Paper> */}
            </Container></>
    );
};

export default Nutrition;