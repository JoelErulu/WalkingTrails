import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { googleLogout } from '@react-oauth/google';
import { logout } from '../../api/index.js';

import useStyles from './styles';
import GGC from '../../images/GGClogo.jpg';

const Navbar = () => {
    const classes = useStyles();
    const profile = JSON.parse(localStorage.getItem('profile'));
    const [ user, setUser ] = useState(profile?.payload);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const userToken = useSelector((state)=>state.auth.authData);

    const handleLogout = () => {
     //At this point, I have user stored in my state
        dispatch({ type: 'LOGOUT' }); //Make the call to get rid of it
        //logout(userToken);
        // localStorage.clear();
         googleLogout();
        
        // console.log("After navigation");
        // console.log(user);
         setUser(null);
         localStorage.clear();
         sessionStorage.clear();
         navigate('/auth');
        
        console.log("Is user here after state change?");
        console.log(user);
        
    };

    useEffect(() => {
        // const token = user?.token;
        const profile = JSON.parse(localStorage.getItem('profile'));
        setUser(profile?.payload);
    }, [location]);

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to={ user ? "/home" : "/" } className={classes.heading} variant="h2" align="center">GGC</Typography>
                <img className={classes.image} src={GGC} alt="gwinnett" height="60" />
            </div>
            {user ? (
                <Toolbar className={classes.toolbar}>
                
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.name} src={user.picture}>{user.name}</Avatar>
                        <Typography className={classes.userName} variant="h6">Welcome, {user.name}!</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={handleLogout}>Logout</Button>
                    </div>
                </Toolbar>
            ) : (
                <Typography></Typography>
            )}
        </AppBar>
    );
};

export default Navbar;