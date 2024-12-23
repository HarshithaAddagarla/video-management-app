import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h2>Dashboard</h2>
                <nav className="dashboard-nav">
                    <a href="#pricing">Pricing</a>
                    <a href="#support">Support</a>
                    <i className="icon-settings"></i>
                </nav>
            </header>
            <main className="dashboard-main">
                <section className="video-viewer">
                    <div className="youtube-video">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/MVGJeGWZoy4"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="video-actions">
                        <button className="btn">Advance Edit</button>
                    </div>
                </section>
                <aside className="video-details">
                    <div className="details-section">
                        <h3>Video Title</h3>
                        <p>Don't Waste Your Life | Jordan B. Peterson</p>
                    </div>
                    <div className="details-section">
                        <h3>Description</h3>
                        <p>
                            Jordan B. Peterson, renowned psychologist and author, explains the
                            importance of not wasting your life. He discusses how you should strive 
                            to be better every single day and how by fixing your life, you not only 
                            help yourself but also positively impact everyone you come in contact with.
                        </p>
                    </div>
                    <div className="details-section">
                        <h3>Hashtags</h3>
                        <p>#JordanPeterson #SelfImprovement #Motivation</p>
                    </div>
                </aside>
            </main>
        </div>
    );
};

export default Dashboard;
