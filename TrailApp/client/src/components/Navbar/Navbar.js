import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../../interfaceSettings.css'; // Import the CSS file
import GwinnettLogo from './gwinnett.png';  // Import the image properly

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
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">
                {/* Logo and "WALKING TRAILS" */}
                <Link className="navbar-brand d-flex align-items-center" to={user ? "/home" : "/"}>
                    <img src={GwinnettLogo} alt="Gwinnett Logo" className="logo me-2" />
                    <span className="heading">WALKING TRAILS</span>
                </Link>

                {/* Menu Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#workout">Personalized Workout</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#community">Hydration</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#questions">Nutrition</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#instructors">Climate</a>
                        </li>
                        {user ? (
                            <li className="nav-item">
                                <button className="btn btn-outline-danger" onClick={logout}>Logout</button>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <Link className="nav-link" to="/auth">Sign in / Sign up</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;