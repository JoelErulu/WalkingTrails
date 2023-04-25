import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Grid, Typography, Container, Button, Paper, FormControl, InputLabel, Select, MenuItem, TextField, } from '@material-ui/core';
import { useDispatch, useSelector} from 'react-redux';
import useStyles from './styles.js';
import { createNutrition, getNutrition, updateNutrition, deleteNutrition} from '../../actions/nutritions.js';
import FileBase from 'react-file-base64';

const Nutrition = () => {

    const classes = useStyles();

    const initialState = {name: '',};

    //gets markers from store
    const {nutrition, isLoading} = useSelector((state) => state.nutrition);

    const [nutritionFormData, setNutritionFormData] = useState(initialState);
    const [center, setCenter] = useState('');
    const [selectedNutrition, setSelectedNutrition] = useState(null);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    //get markers from db
    useEffect(() => {
        dispatch(getNutrition());
    }, [dispatch])


    //submit form to create marker
    const handleSubmit = (e) => {
        // e.preventDefault();

        dispatch(createNutrition(nutritionFormData));

        // if (selectedMarker.key) {
        //     dispatch(updateNutrition(selectedMarker._id, markerFormData));
        // }
        // clear();
        
    
    };

    // const handleDelete = (e) => {
    //     if (selectedMarker.key) {
    //         dispatch(deleteMarker(selectedMarker.key))
    //         clear();
    //     }
    // };

    const clear = () => {
        setSelectedNutrition(null)
        setNutritionFormData(initialState);

    };

    
    return (
        <>
        
        <Container component="main" maxWidth="xl">
        

                <Paper className={classes.paper} elevation={3}>
                <form onSubmit={handleSubmit}>
                <TextField name='name' variant="outlined" label="Name" margin="normal" value={nutritionFormData.name}
                onChange={(e) => setNutritionFormData({...nutritionFormData, name: e.target.value})}></TextField>
                <br/>
                <Button type='submit' color="primary" variant="contained">Create</Button>
                </form>
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


                </Paper>
            </Container></>
    );
};

export default Nutrition;