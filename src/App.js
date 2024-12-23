import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/Authentication/AuthContext';
import Navbar from './components/Layout/Navbar.js';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import VideoDetails from './pages/VideoDetails';
import Footer from './components/Layout/Footer';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>  {/* Replaced Switch with Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/video/:id" element={<VideoDetails />} />
                </Routes>
                <Footer />
            </Router>
        </AuthProvider>
    );
};

export default App;
