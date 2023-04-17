import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import OAuth2Client from 'google-auth-library';
import GoogleAuth from 'google-auth-library';
import {auth} from 'google-auth-library';
//import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import trailRoutes from './routes/trails.js';
import markerRoutes from './routes/marker.js';

const app = express();
//dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);
app.use('/trails', trailRoutes);
app.use('/googleLogin', trailRoutes);
app.use('/marker', markerRoutes);

//const PORT = process.env.PORT || 5000;
const PORT = 5000;
const CONNECTION_URL = 'mongodb+srv://admin:nierautomatabestgame@ttrail.htmfwmp.mongodb.net/testdb?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
