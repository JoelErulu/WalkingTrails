import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
      },
    footerText: {
        flexGrow: 1,
        textAlign: 'center',
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" color="inherit" className={classes.appBar}>
            <Toolbar>
                <Typography variant="body1" className={classes.footerText}>
                    &copy; Walking Trails Fall 2024
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;