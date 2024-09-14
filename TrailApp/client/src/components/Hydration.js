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
        </section>
    );
};

export default Hydration;