import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Navbar from './components/Navbar/Navbar.js';
import Blog from './components/Blog/Blog.js';
import Auth from './components/Auth/Auth.js';
import Landing from './components/Landing/Landing.js';
import Home from './components/Home/Home.js';
import ManageTrail from './components/ManageTrail/ManageTrail.js';
import Current from './components/Current/Current.js';
import AdminPrivilege from './components/Admin/AdminPrivilege.js';
import Gold from './components/BigTrails/Gold.BigTrails';
import Green from './components/BigTrails/Green.BigTrails';
import Gray from './components/BigTrails/Gray.BigTrails';
import Admin from './components/Admin/Admin.js';
import Nutrition from './components/Nutrition/Nutrition.js';

const App = () => (
    <GoogleOAuthProvider clientId='115519328455-e14hf6515mt6qkkvuvuhnkuv3jdd1059.apps.googleusercontent.com'>
        <BrowserRouter>
            <Container maxWidth="xl">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/nutrition" element={<Nutrition />} />
                    <Route path="/gold" element={<Gold />} />
                    <Route path="/green" element={<Green />} />
                    <Route path="/gray" element={<Gray />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/trails" element={<ManageTrail />} />
                    <Route path="/current" element={<Current />} />
                    <Route path="/adminPrivilege" element={<AdminPrivilege />} />
                </Routes>
            </Container>
        </BrowserRouter>
    </GoogleOAuthProvider>
);

export default App;