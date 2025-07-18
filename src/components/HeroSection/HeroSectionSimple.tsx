import React from 'react';
import './HeroSection.css';

const HeroSectionSimple: React.FC = () => {
    return (
        <div className="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            The only all in one <span className="hero-title-gradient">Tool</span> you need for your Clinic
                        </h1>
                        <p className="hero-description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium omnis, molestias expedita soluta facilis sapiente incidunt.
                        </p>
                        <div className="hero-actions">
                            <a href="#" className="btn-primary">
                                Get Started
                            </a>
                            <a href="#" className="btn-secondary">
                                Watch Demo
                            </a>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="hero-image-placeholder">
                            <span>👩‍⚕️ Medical Professional</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSectionSimple;