import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../interfaceSettings.css'; // Import the CSS file
import GwinnettLogo from '../assets/images/gwinnett.png';  // Import the image properly

const Nutrition = () => {
    return (
        <section id="nutrition" className="container mt-5">
            <h1>Nutrition</h1>
            <p>Welcome to the Nutrition section! Here you will find information about healthy eating, meal plans, and nutrition tips.</p>
            {/* Add more content as needed */}
        </section>
    );
};

export default Nutrition;