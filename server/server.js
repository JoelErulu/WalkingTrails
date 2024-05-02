import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import multer from 'multer';
import { GridFSBucket } from 'mongodb';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import trailRoutes from './routes/trails.js';
import markerRoutes from './routes/markers.js';
import nutritionRoutes from './routes/nutrition.js';
import videoRoutes from './routes/video.js';
import TrailDetail from './models/trailDetail'; // Ensure this is the correct path to your Trail model

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.MONGODB_URI;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/users', userRoutes);
app.use('/trails', trailRoutes);
app.use('/markers', markerRoutes);
app.use('/nutrition', nutritionRoutes);
app.use('/videos', videoRoutes);

// Database connection and app initialization
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log(`MongoDB connected and server running on port: ${PORT}`);
      app.listen(PORT);
    })
    .catch((error) => console.error(error.message));

// GridFS setup for handling file uploads
const conn = mongoose.createConnection(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });

conn.once('open', () => {
  const gfs = new GridFSBucket(conn.db, {
    bucketName: 'videos'
  });
  const storage = multer.memoryStorage();
  const upload = multer({ storage });

  app.post('/upload-video', upload.single('video'), async (req, res) => {
    try {
      const { originalname, buffer } = req.file;
      const writeStream = gfs.openUploadStream(originalname);
      const stream = require('stream');
      const bufferStream = new stream.PassThrough();
      bufferStream.end(buffer);
      bufferStream.pipe(writeStream).on('finish', async (file) => {
        const Video = mongoose.model('Video', new mongoose.Schema({
          title: String,
          filename: String,
          originalname: String,
        }));

        const newVideo = new Video({
          title: req.body.title,
          filename: file.filename,
          originalname: originalname,
        });

        await newVideo.save();
        res.status(201).json(newVideo);
      });
    } catch (error) {
      res.status(500).json({ message: 'Could not upload video.', error: error.message });
    }
  });
});
