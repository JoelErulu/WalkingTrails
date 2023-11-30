import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Avatar, Button, Toolbar, Typography, Menu, MenuItem } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { googleLogout } from '@react-oauth/google';
import { logout } from '../../api/index.js';
import useStyles from './styles';
import GGC from '../../images/GGClogo.jpg';

const Navbar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);// For Menu anchor
    const profile = JSON.parse(localStorage.getItem('profile'));
    const [ user, setUser ] = useState(profile?.payload);
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [userRole, setUserRole] = useState('');
    const pages = ['Products', 'Pricing', 'Blog'];
    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        
        setUser(null);

        navigate('/#');
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
                <Typography component={Link} to={ user ? "/home" : "/" } className={classes.heading} variant="h2" align="center">Walking Trails</Typography>
                {/* <Link class = "align-right btn btn-primary" component={Link} to="/auth" variant="contained" color="primary" className={classes.submit}>Sign In</Link>
               {/* <Link to={ user ? "/home" : "/" }>
                <img className={classes.image} src={GGC} alt="GGC Bear" height="60"/>
                </Link> */}
            </div>
            <div>
                {userRole==="admin"?<Link to="/admin"><Button variant="contained" color="primary">Admin</Button></Link>:''}
            </div>
            {/* {user ? (
                <Toolbar className={classes.toolbar}>
                
                    <div className={classes.profile}> */}
                        {/* <Avatar className={classes.purple} alt={user.name} src={user.picture}>{user.name}</Avatar> */}
                        {/* <Typography className={classes.userName} variant="h6">Welcome, {user.name}!</Typography> */}
                        {/* <Typography className={classes.userName} variant="h6">Welcome!</Typography> */}
                        {/* <Button variant="contained" className={classes.logout} color="primary" onClick={logout}>Logout</Button> */}
                    {/* </div>
                </Toolbar>
            ) : (
                <MenuItem className={classes.drop} variant="h2" align="right">menu</MenuItem>
            )} */}
            <Button Button variant="contained" className={classes.logout} color="primary"
                aria-controls="user-menu"
                aria-haspopup="true"
                onClick={handleMenuClick}
            >
            menu
            </Button>
            <Menu
                id="user-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                >
                <MenuItem onClick={handleMenuClose} component={Link} to="/#">Home</MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to="/#">Personalized Workout</MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to="/#">Community Partners</MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to="/#">Our Team</MenuItem>
                {user ? (
               
               
               <MenuItem onClick={logout}>Logout</MenuItem>
                
            ) : (
                <MenuItem onClick={handleMenuClose} component={Link} to="/auth">Sign in / Sign up</MenuItem>
            )}
            </Menu>
        </AppBar>
   );
};

export default Navbar;