import { Readable } from 'stream';
import mongoose from 'mongoose';
// import { ObjectId } from 'mongodb';


// Connect to MongoDB and get the database connection
const conn = mongoose.connection;
let gfs;
conn.once('open', () => {
  // Initialize GridFS Bucket
  gfs = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'videos' 
  });
});

// Function to upload video
export const uploadVideo = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No video file uploaded' });
  }

  const { originalname, buffer } = req.file;

  // Create a readable stream from the buffer
  const readableStream = new Readable({
    read() {
      this.push(buffer);
      this.push(null);
    }
  });

  // Create a writable stream to store the video file in GridFS
  const writeStream = gfs.openUploadStream(originalname);

  readableStream.pipe(writeStream);

  writeStream.on('error', error => {
    console.error('Error uploading video:', error);
    res.status(500).json({ message: 'Error uploading video' });
  });

  writeStream.on('finish', file => {
    res.status(200).json({ message: 'Video uploaded successfully', fileId: file._id });
  });
};


// Function to get video by ID
export const getVideoById = (req, res) => {
  const videoId = req.params.videoId;

  if (!videoId || !mongoose.Types.ObjectId.isValid(videoId)) {
    return res.status(400).json({ message: 'Invalid video ID' });
  }

  gfs.find({ _id: new mongoose.Types.ObjectId(videoId) }).toArray((err, files) => {
    if (err) {
      return res.status(500).json({ message: 'Error retrieving video', error: err });
    }
    if (!files[0] || files.length === 0) {
      return res.status(404).json({ message: 'No video found' });
    }

    // Streaming to client
    const readStream = gfs.openDownloadStream(new mongoose.Types.ObjectId(videoId));
    readStream.pipe(res);
  });
};

// Function to like a video
export const likeVideo = async (req, res) => {
  const videoId = req.params.videoId; // Get the video ID from the request
  try {
    const video = await Video.findById(videoId);
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }
    video.likes += 1; 
    await video.save();
    res.json(video); // Send back the updated video data
  } catch (error) {
    console.error('Error liking video:', error);
    res.status(500).json({ message: 'Error liking video', error: error });
  }
};

// Function to dislike a video
export const dislikeVideo = async (req, res) => {
  const videoId = req.params.videoId;
  try {
    const video = await Video.findById(videoId);
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }
    video.dislikes += 1; 
    await video.save();
    res.json(video); // Send back the updated video data
  } catch (error) {
    console.error('Error disliking video:', error);
    res.status(500).json({ message: 'Error disliking video', error: error });
  }
};



