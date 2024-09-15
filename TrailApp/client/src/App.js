import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//This wraps the app and provides Google OAuth functionality to allow users to log in via Google.
import { GoogleOAuthProvider } from '@react-oauth/google';

//These imports are for page elements and routing purposes for the browser. Some of these are not needed by the client anymore
//TODO: Remove deprecated pages to clean up repo & better meet customer requirements.
//TODO: Update links to imports afer file cleanup/reorganization
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Navbar/Footer.js';
import Auth from './components/Auth/Auth.js';
import ManageTrail from './components/ManageTrail/ManageTrail.js';
import AdminPrivilege from './components/Admin/AdminPrivilege.js';
import Gold from './components/BigTrails/Gold.BigTrails';
import Green from './components/BigTrails/Green.BigTrails';
import Gray from './components/BigTrails/Gray.BigTrails';
import Admin from './components/Admin/Admin.js';
import GoldAdmin from './components/BigTrailsAdmin/GoldAdmin';
import GreenAdmin from './components/BigTrailsAdmin/GreenAdmin';
import GrayAdmin from './components/BigTrailsAdmin/GrayAdmin';
import NutritionAdmin from './components/NutritionAdmin/NutritionAdmin.js';
import Landing from './pages/Landing.js';
import Home from './pages/Home.js';

//Deprecated pages
import Library from './pages/Library.js';
import NutritionOld from './pages/NutritionDB - Old.js';
import Blog from './pages/Blog.js';

//New imports:
import Climate from './pages/Climate.js';
import Hydration from './pages/Hydration.js';
import Nutrition from './pages/Nutrition.js';
import Workouts from './pages/Workouts.js';
import About from './pages/About.js'
import Privacy from './pages/Privacy.js'

//const oldIdclientId='115519328455-e14hf6515mt6qkkvuvuhnkuv3jdd1059.apps.googleusercontent.com';

const App = () => (
    //The clientId is the unique identifier for the Google OAuth client, enabling the app to integrate Google login.
    //TODO: Replace below value in clientID with an updated one. This might be root cause of inability to login.
    <GoogleOAuthProvider clientId='222736919095-8clp3t7ndllhnf6jt0n1buveh6a97i62.apps.googleusercontent.com'>
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
                    <Route path="/library" element={<Library />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/trails" element={<ManageTrail />} />
                    <Route path="/adminPrivilege" element={<AdminPrivilege />} />
                    <Route path ="/goldAdmin" element = {<GoldAdmin/>}/>
                    <Route path ="/greenAdmin" element = {<GreenAdmin/>}/>
                    <Route path ="/grayAdmin" element = {<GrayAdmin/>}/>
                    <Route path="/nutritionAdmin" element={<NutritionAdmin />} />

                    <Route path ="/climate" element = {<Climate/>}/>
                    <Route path ="/hydration" element = {<Hydration/>}/>
                    <Route path ="/workouts" element = {<Workouts/>}/>
                    <Route path="/nutrition" element={<Nutrition />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/privacy" element={<Privacy />} />
                </Routes>
                <Footer />
            </Container>
        </BrowserRouter>
    </GoogleOAuthProvider>
);

export default App;