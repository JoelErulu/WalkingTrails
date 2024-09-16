import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../interfaceSettings.css'; // Import the CSS file
import GwinnettLogo from '../assets/images/gwinnett.png';  // Import the image properly

const Climate = () => {
    return (
        <section id="climate" className="container mt-5">
            <h1>Climate</h1>
            <p>Welcome to the Climate section! Learn about the effects of climate on fitness and how to adapt your workout to different weather conditions.</p>
            {/* Add more content as needed */}
            {/* Provide short blurb for each heading & link to gallery of videos. 
            Perhaps create a Gallery.js that pulls up a grid of videos, 
            with backend for filtering based on a specific tag reated to particular category
            Video.js that pulls up a video player element when thumbnail selected*/}
        </section>
    );
};

export default Climate;