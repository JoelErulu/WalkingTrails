import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import GGC from '../../images/GGClogo.jpg';

const Navbar = () => {
    const classes = useStyles();
    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')));
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
        const token = user?.token;

        const currentUser = JSON.parse(localStorage.getItem("profile"));
        const currentUserRole = currentUser?.result?.role;
        setUserRole(currentUserRole);

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location]);


    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer} >
                <Typography component={Link} to={ user ? "/home" : "/" } className={classes.heading} variant="h2" align="center">GGC</Typography>
                <Link to={ user ? "/home" : "/" }>
                <img className={classes.image} src={GGC} alt="GGC Bear" height="60"/>
                </Link>
            </div>
            <div>
                {userRole==="admin"?<Link to="/admin"><Button variant="contained" color="secondary">Admin</Button></Link>:''}
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