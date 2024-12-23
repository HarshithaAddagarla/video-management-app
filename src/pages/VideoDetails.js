import React from 'react';

const VideoDetails = ({ video }) => {
    return (
        <div>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
        </div>
    );
};

export default VideoDetails;