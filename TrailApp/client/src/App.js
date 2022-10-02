import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Navbar from './components/Navbar/Navbar.js';
import Blog from './components/Blog/Blog.js';
import Auth from './components/Auth/Auth.js';

const App = () => (
    <GoogleOAuthProvider clientId='115519328455-e14hf6515mt6qkkvuvuhnkuv3jdd1059.apps.googleusercontent.com'>
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Blog}/>
                    <Route path="/auth" exact component={Auth}/>
                </Switch>
            </Container>
        </BrowserRouter>
    </GoogleOAuthProvider>
);

export default App;