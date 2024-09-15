import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import '../../interfaceSettings.css'; // Import the CSS file

const Footer = () => {

    return (
        <AppBar position="static" color="inherit" className="appBar">
            <Toolbar>
                <Typography variant="body1" className="footerText">
                    &copy; Walking Trails, Fall 2024
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;