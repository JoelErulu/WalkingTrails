import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '10vh',
    },
    content: {
        flexGrow: 1,
    },
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        width: '100%',
    },
    footerText: {
        flexGrow: 1,
        textAlign: 'center',
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                {/* All other page components go here, this div pushes the footer down */}
            </div>
            <AppBar position="static" color="inherit" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="body1" className={classes.footerText}>
                        © 2024 Walking Trails. All rights reserved.
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Footer;
