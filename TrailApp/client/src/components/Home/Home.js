import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Paper, Typography, Container } from '@material-ui/core';

const Home = () => {

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3}>
                <Typography variant="h5">Home</Typography>
                <Button component={Link} to="/blog" variant="contained" color="primary">Blog</Button>
                
            </Paper>
        </Container>
    );
};

export default Home;