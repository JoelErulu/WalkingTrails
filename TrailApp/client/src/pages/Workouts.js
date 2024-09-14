import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../interfaceSettings.css'; // Import the CSS file
import GwinnettLogo from '../assets/images/gwinnett.png';  // Import the image properly

const Workouts = () => {
    return (
        <section id="workouts" className="container mt-5">
            <h1>Personalized Workouts</h1>
            <p>Welcome to the Personalized Workouts section! to different weather conditions.</p>
            {/* Add more content as needed */}
        </section>
    );
};

export default Workouts;