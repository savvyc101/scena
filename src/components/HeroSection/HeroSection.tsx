import React, { useState } from 'react';
import './HeroSection.css';

const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false);
    const toggleNavbar = () => {
        setOpenNavbar(openNavbar => !openNavbar);
    };
    const closeNavbar = () => {
        setOpenNavbar(false);
    };
    return (
        <>
            <div onClick={() => { closeNavbar(); }} aria-hidden="true" className={
                `navbar-overlay ${openNavbar ? "navbar-overlay--open" : "navbar-overlay--closed"}`
            } />
            <header className="navbar-header">
                <nav className="navbar-nav">
                    <div className="navbar-brand">
                        <a href="#" className="brand-link">
                            <span className="brand-text">Medi</span>Care
                        </a>
                    </div>
                    <div className={`navbar-menu ${openNavbar ? "navbar-menu--open" : "navbar-menu--closed"}`}>
                        <ul className="navbar-links">
                            <li>
                                <a href="#" className="navbar-link">
                                    Solutions
                                    <span className="dropdown-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="navbar-link">
                                    Products
                                    <span className="dropdown-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="navbar-link">Support</a>
                            </li>
                            <li>
                                <a href="#" className="navbar-link">Company</a>
                            </li>
                        </ul>
                        <div className="navbar-actions">
                            <a href="#" className="book-demo-btn">
                                Book Demo
                            </a>
                        </div>
                    </div>
                    <div className="navbar-toggle">
                        <button onClick={() => { toggleNavbar(); }} aria-label="Toggle navbar" className="toggle-btn">
                            <span aria-hidden="true" className={`toggle-line ${openNavbar ? "toggle-line--open-1" : ""}`} />
                            <span aria-hidden="true" className={`toggle-line toggle-line--2 ${openNavbar ? "toggle-line--open-2" : ""}`} />
                        </button>
                    </div>
                </nav>
            </header>
        </>
    );
};

const metrics = [
    {
        id: 1,
        // eslint-disable-next-line max-len
        icon: <svg xmlns="http://www.w3.org/2000/svg" width={20} className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" /></svg>,
        stat: "4.5 Stars",
        title: "430 Reviews",
    },
    {
        id: 2,
        // eslint-disable-next-line max-len
        icon: <svg className="w-5 h-5" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.125 3.02173C9.78748 3.02173 3.02081 9.78931 3.02081 18.1279C3.02081 26.4666 9.78748 33.2341 18.125 33.2341C26.4625 33.2341 33.2291 26.4666 33.2291 18.1279C33.2291 9.78931 26.4625 3.02173 18.125 3.02173ZM29.3927 13.7773L25.1937 15.5146C24.8154 14.4966 24.2213 13.5726 23.4522 12.8059C22.683 12.0393 21.7571 11.4482 20.738 11.0733L22.475 6.87381C25.6469 8.08231 28.1693 10.605 29.3927 13.7773ZM18.125 22.6598C15.6177 22.6598 13.5937 20.6356 13.5937 18.1279C13.5937 15.6203 15.6177 13.5961 18.125 13.5961C20.6323 13.5961 22.6562 15.6203 22.6562 18.1279C22.6562 20.6356 20.6323 22.6598 18.125 22.6598ZM13.7901 6.8587L15.5573 11.0582C14.5261 11.4341 13.5893 12.0301 12.8119 12.805C12.0346 13.5798 11.4355 14.5148 11.0562 15.5448L6.85727 13.7924C7.46293 12.2156 8.39302 10.7836 9.58731 9.58911C10.7816 8.39466 12.2134 7.46444 13.7901 6.8587ZM6.85727 22.4634L11.0562 20.7262C11.4328 21.7535 12.0295 22.686 12.8044 23.4585C13.5793 24.2309 14.5137 24.8244 15.5422 25.1976L13.775 29.3972C12.2017 28.7887 10.7733 27.8573 9.58184 26.6631C8.39038 25.4688 7.46225 24.0382 6.85727 22.4634ZM22.475 29.3972L20.738 25.1976C21.7619 24.8182 22.6908 24.2203 23.4603 23.4456C24.2298 22.6708 24.8213 21.7376 25.1937 20.7111L29.3927 22.4785C28.785 24.05 27.8558 25.4772 26.6645 26.6686C25.4733 27.8601 24.0463 28.7894 22.475 29.3972Z" fill="white" /></svg>,
        stat: "H 24/24",
        title: "Support",
    },
    {
        id: 3,
        // eslint-disable-next-line max-len
        icon: <svg className="w-5 h-5" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.125 3.02173C9.78748 3.02173 3.02081 9.78931 3.02081 18.1279C3.02081 26.4666 9.78748 33.2341 18.125 33.2341C26.4625 33.2341 33.2291 26.4666 33.2291 18.1279C33.2291 9.78931 26.4625 3.02173 18.125 3.02173ZM29.3927 13.7773L25.1937 15.5146C24.8154 14.4966 24.2213 13.5726 23.4522 12.8059C22.683 12.0393 21.7571 11.4482 20.738 11.0733L22.475 6.87381C25.6469 8.08231 28.1693 10.605 29.3927 13.7773ZM18.125 22.6598C15.6177 22.6598 13.5937 20.6356 13.5937 18.1279C13.5937 15.6203 15.6177 13.5961 18.125 13.5961C20.6323 13.5961 22.6562 15.6203 22.6562 18.1279C22.6562 20.6356 20.6323 22.6598 18.125 22.6598ZM13.7901 6.8587L15.5573 11.0582C14.5261 11.4341 13.5893 12.0301 12.8119 12.805C12.0346 13.5798 11.4355 14.5148 11.0562 15.5448L6.85727 13.7924C7.46293 12.2156 8.39302 10.7836 9.58731 9.58911C10.7816 8.39466 12.2134 7.46444 13.7901 6.8587ZM6.85727 22.4634L11.0562 20.7262C11.4328 21.7535 12.0295 22.686 12.8044 23.4585C13.5793 24.2309 14.5137 24.8244 15.5422 25.1976L13.775 29.3972C12.2017 28.7887 10.7733 27.8573 9.58184 26.6631C8.39038 25.4688 7.46225 24.0382 6.85727 22.4634ZM22.475 29.3972L20.738 25.1976C21.7619 24.8182 22.6908 24.2203 23.4603 23.4456C24.2298 22.6708 24.8213 21.7376 25.1937 20.7111L29.3927 22.4785C28.785 24.05 27.8558 25.4772 26.6645 26.6686C25.4733 27.8601 24.0463 28.7894 22.475 29.3972Z" fill="white" /></svg>,
        stat: "+ 5k",
        title: "Clients",
    },
];

const HeroSection: React.FC = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className="hero-section">
                    <div className="hero-container">
                        <div className="hero-background-blur" />
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
                                        <span className="play-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        Watch Demo
                                    </a>
                                </div>
                                <div className="hero-metrics">
                                    {
                                        metrics.map(metric => (
                                            <div key={metric.id} className="metric-item">
                                                <span className="metric-icon">
                                                    {metric.icon}
                                                </span>
                                                <div className="metric-content">
                                                    <h4 className="metric-stat">{metric.stat}</h4>
                                                    <span className="metric-title">{metric.title}</span>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div aria-hidden="true" className="hero-image">
                                <div className="hero-image-bg" />
                                <div className="hero-image-placeholder">
                                    <span>👩‍⚕️ Medical Professional</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default HeroSection;