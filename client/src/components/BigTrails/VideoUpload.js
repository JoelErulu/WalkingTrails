import React, { useState } from 'react';

const VideoUpload = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('video', selectedFile);

      fetch('/api/upload-video', {
        method: 'POST',
        body: formData,
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to upload video');
        }
        return response.json(); // Assuming your server returns some data after successful upload
      })
      .then(data => {
        console.log('Video uploaded successfully:', data);
        // Optionally, you can perform any additional actions after successful upload
        // For example, you can update the UI or notify the user
        if (typeof onUpload === 'function') {
          onUpload(data); // You can pass any relevant data to the parent component
        }
      })
      .catch(error => {
        console.error('Error uploading video:', error);
      });
    } else {
      console.warn('No file selected');
    }
  };

  return (
    <div>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Video</button>
    </div>
  );
};

export default VideoUpload;
