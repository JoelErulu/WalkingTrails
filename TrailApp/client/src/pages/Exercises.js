import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../interfaceSettings.css'; // Import the CSS file
import GwinnettLogo from '../assets/images/gwinnett.png';  // Import the image properly

const Exercises = () => {
    return (
        <section id="exercises" className="container mt-5">
            <h1>Exercises</h1>
            <p>Welcome to the Exercises library! Here we will have information regarding strengthening and stretching exercises, as well as information regarding proper walking mechanics.</p>
            <h3>Stretching Exercises</h3>
            {/* Provide short blurb for each heading & link to gallery of videos. 
            Perhaps create a Gallery.js that pulls up a grid of videos, 
            with backend for filtering based on a specific tag reated to particular category
            Video.js that pulls up a video player element when thumbnail selected*/}
            {/*<p></p>*/}
            <h3>Strengthening Exercises</h3>
            {/*<p></p>*/}
            <h3>Walking Mechanics</h3>
            {/*<p></p>*/}
            {/* Add more content as needed */}
        </section>
    );
};

export default Exercises;