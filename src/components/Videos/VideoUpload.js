import React, { useState } from 'react';
import { uploadVideo } from '../../api/videoApi';

const VideoUpload = () => {
    const [videoFile, setVideoFile] = useState(null);

    const handleVideoChange = (e) => {
        setVideoFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (videoFile) {
            await uploadVideo(videoFile);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleVideoChange} />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default VideoUpload;
