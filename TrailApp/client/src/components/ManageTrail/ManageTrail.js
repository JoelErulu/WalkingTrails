import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getTrails } from '../../actions/trails.js';
import Trails from '../Trails/Trails.js';
import TrailForm from '../TrailForm/TrailForm.js';
import useStyles from './styles.js';

const ManageTrail = (theme) => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTrails());
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container>
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <TrailForm currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={7} style={{ background: 'rgba(255, 255, 255, 0.5)' }}>
                        <Trails setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default ManageTrail;