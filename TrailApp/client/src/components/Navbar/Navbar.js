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

    const [userRole, setUserRole] = useState('');

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        
        setUser(null);

        navigate('/auth');
    };

    useEffect(() => {
        // const token = user?.token;

        const currentUser = JSON.parse(localStorage.getItem("profile"));
        const currentUserRole = currentUser?.result?.role;
        setUserRole(currentUserRole);

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location]);


    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer} >
                <Typography component={Link} to={ user ? "/home" : "/" } className={classes.heading} variant="h2" align="left">Walking Trails</Typography>
                
                {/* <Link class = "align-right btn btn-primary" component={Link} to="/auth" variant="contained" color="primary" className={classes.submit}>Sign In</Link>
               {/* <Link to={ user ? "/home" : "/" }>
                <img className={classes.image} src={GGC} alt="GGC Bear" height="60"/>
                </Link> */}
            </div>
            <div>
                {userRole==="admin"?<Link to="/admin"><Button variant="contained" color="secondary">Admin</Button></Link>:''}
            </div>
            {user ? (
                <Toolbar className={classes.toolbar}>
                
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.name} src={user.picture}>{user.name}</Avatar>
                        <Typography className={classes.userName} variant="h6">Welcome, {user.name}!</Typography>
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