import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Button, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import '../../interfaceSettings.css'; // Import the CSS file


const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const profile = JSON.parse(localStorage.getItem('profile'));
    const [user, setUser] = useState(profile?.payload);
    const [userRole, setUserRole] = useState('');
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        setUser(null);
        navigate('/#');
    };

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("profile"));
        const currentUserRole = currentUser?.result?.role;
        setUserRole(currentUserRole);
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <AppBar className="appBar" position="static">
            <Toolbar className="toolbar">
                
                {/* Move Menu to the Left */}
                <div className="menuContainer">
                    <Button
                        variant="contained"
                        className="menuButton"
                        aria-controls="user-menu"
                        aria-haspopup="true"
                        onClick={handleMenuClick}
                    >
                        Menu
                    </Button>
                    <Menu
                        id="user-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        className="menu"
                    >
                        <MenuItem onClick={handleMenuClose} component={Link} to="/">Home</MenuItem>
                        <MenuItem
                            onClick={() => {
                                handleMenuClose();
                                document.getElementById('workout').scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Personalized Workout
                        </MenuItem>
                        <MenuItem
                            onClick={() => {
                                handleMenuClose();
                                document.getElementById('community').scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Community Partners
                        </MenuItem>
                        <MenuItem
                            onClick={() => {
                                handleMenuClose();
                                document.getElementById('questions').scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            F.A.Q
                        </MenuItem>
                        <MenuItem
                            onClick={() => {
                                handleMenuClose();
                                document.getElementById('instructors').scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Our Team
                        </MenuItem>
                        {user ? (
                            <MenuItem onClick={logout}>Logout</MenuItem>
                        ) : (
                            <MenuItem onClick={handleMenuClose} component={Link} to="/auth">Sign in / Sign up</MenuItem>
                        )}
                    </Menu>
                </div>

                {/* Move Title to the Right */}
                <div className="textContainer">
                    <Typography component={Link} to={user ? "/home" : "/"} className="heading" variant="h1" align="right">
                        WALKING TRAILS
                    </Typography>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;