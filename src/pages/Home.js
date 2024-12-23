import React, { useState } from 'react';
import './Home.css';


const Home = () => {
    const [videoLink, setVideoLink] = useState('');
    const [keywords, setKeywords] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Video Link:", videoLink);
        console.log("Keywords:", keywords);
    };

    return (
        <div className="home-container">
            <h1>#Repurpose video with AI</h1>
            <h2>Now Repurpose long video, 10x faster.</h2>
            <p>Sierra allows you to create new video content in just a few clicks, saving you time and effort.</p>
            <form className="home-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Paste your video link (Live, YouTube, Behance)"
                    value={videoLink}
                    onChange={(e) => setVideoLink(e.target.value)}
                />
                <textarea
                    placeholder="Keywords to include relevant data"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                />
                <button type="submit">Call to Action</button>
            </form>
        </div>
    );
};

export default Home;
