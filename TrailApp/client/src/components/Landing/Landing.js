import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Paper, Typography, Container } from '@material-ui/core';

const Landing = () => {

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3}>
                <Typography variant="h5">Walking Trail</Typography>
                <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                
            </Paper>
        </Container>
    );
};

export default Landing;