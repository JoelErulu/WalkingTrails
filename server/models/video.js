const videoSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  contentType: { type: String, required: true },
  metadata: {
      title: { type: String },
      description: { type: String },
  },
  fileId: { type: String, required: true },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 }
});

const Video = mongoose.model('Video', videoSchema);
