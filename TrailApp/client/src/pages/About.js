import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../interfaceSettings.css'; // Import the CSS file
import GwinnettLogo from '../assets/images/gwinnett.png';  // Import the image properly

const About = () => {
    return (
        <section id="about" className="container mt-5">
            <h1>About Us</h1>
            <p>This app was created as joint collaboration between Georgia Gwinnett College's ITEC students and EXCS students, at the request of faculty.</p>
            {/* List out credits of all participants? */}
        </section>
    );
};

export default About;