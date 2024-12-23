import React, { useState, useEffect } from 'react';
import { fetchVideos } from '../../api/videoApi';
import VideoPlayer from './VideoPlayer';

const VideoList = () => {
    const [videos, setVideos] = useState([]);
    
    useEffect(() => {
        const getVideos = async () => {
            const data = await fetchVideos();
            setVideos(data);
        };
        getVideos();
    }, []);

    return (
        <div>
            {videos.map((video) => (
                <div key={video.id}>
                    <h3>{video.title}</h3>
                    <VideoPlayer videoUrl={video.url} />
                </div>
            ))}
        </div>
    );
};

export default VideoList;
