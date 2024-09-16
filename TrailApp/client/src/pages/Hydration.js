import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../interfaceSettings.css'; // Import the CSS file
import GwinnettLogo from '../assets/images/gwinnett.png';  // Import the image properly

const Hydration = () => {
    return (
        <section id="hydration" className="container mt-5">
            <h1>Hydration</h1>
            <p>Welcome to the Hydration section! Discover the importance of staying hydrated and tips to improve your water intake.</p>
            {/* Add more content as needed */}
            {/* Provide short blurb for each heading & link to gallery of videos. 
            Perhaps create a Gallery.js that pulls up a grid of videos, 
            with backend for filtering based on a specific tag reated to particular category
            Video.js that pulls up a video player element when thumbnail selected*/}
        </section>
    );
};

export default Hydration;