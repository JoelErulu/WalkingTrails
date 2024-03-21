// Import necessary libraries
import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import { GridFSBucket } from 'mongodb';

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb+srv://gsmith32:Gregory1247@trails.uhojira.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const conn = mongoose.connection;

// Initiate GridFS stream
let gfs;
conn.once('open', () => {
  gfs = new GridFSBucket(conn.db);
  gfs.collection('videos'); // Specify the collection name for storing videos
});

// Set up Multer storage
const storage = multer.memoryStorage(); // Use memory storage for handling file uploads

// Set up Multer upload middleware
const upload = multer({ storage });

// Define the Video model and schema using Mongoose
const videoSchema = new mongoose.Schema({
  title: String,
  filename: String,
  originalname: String,
  // Add any additional fields you need for your video documents
});

const Video = mongoose.model('Video', videoSchema);

// Express app
const app = express();

// Route for uploading a video
app.post('/upload-video', upload.single('video'), async (req, res) => {
  try {
    // Access uploaded video file information from req.file
    const { originalname, buffer } = req.file;

    // Create a writable stream to store the video file in GridFS
    const writeStream = gfs.openUploadStream(originalname);

    // Pipe the file buffer to the GridFS write stream
    buffer.pipe(writeStream);

    // Once the write stream is finished, save the file metadata to your database
    writeStream.on('close', (file) => {
      const newVideo = new Video({
        title: req.body.title,
        filename: file.filename,
        originalname: originalname,
        // Add any additional metadata fields as needed
      });

      // Save the new document to MongoDB
      newVideo.save()
        .then(() => {
          res.status(201).json(newVideo);
        })
        .catch((error) => {
          res.status(500).json({ message: 'Could not upload video.', error: error.message });
        });
    });
  } catch (error) {
    res.status(500).json({ message: 'Could not upload video.', error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
