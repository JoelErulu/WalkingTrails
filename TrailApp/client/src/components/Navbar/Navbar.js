import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import gwinnett from '../../images/gwinnett.png';

const Navbar = () => {
    const classes = useStyles();
    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useNavigate();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        history('/');

        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location]);

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to={ user ? "/home" : "/" } className={classes.heading} variant="h2" align="center">Gwinnett</Typography>
                <img className={classes.image} src={gwinnett} alt="gwinnett" height="60" />
            </div>
            {user ? (
                <Toolbar className={classes.toolbar}>
                
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.picture}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">Welcome, {user.result.name}!</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                    </div>
                </Toolbar>
            ) : (
                <Typography></Typography>
            )}
        </AppBar>
    );
};

export default Navbar;