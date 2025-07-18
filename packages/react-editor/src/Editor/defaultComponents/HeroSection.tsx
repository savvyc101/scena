import React, { useState } from 'react';
import { makeScenaFunctionComponent, ScenaProps } from '../types';
import './HeroSection.css';

// Individual draggable components
const Logo = makeScenaFunctionComponent("Logo", function Logo(props: ScenaProps) {
  return (
    <div className="logo-container" data-scena-element-id={props.scenaElementId}>
      <div className="logo-circles">
        <span className="logo-circle emerald" />
        <span className="logo-circle gray" />
      </div>
      <span className="logo-text">Agency</span>
    </div>
  );
});

const NavMenu = makeScenaFunctionComponent("NavMenu", function NavMenu(props: ScenaProps) {
  return (
    <ul className="nav-menu" data-scena-element-id={props.scenaElementId}>
      <li><a href="#" className="nav-link">Portfolio</a></li>
      <li><a href="#" className="nav-link">Products</a></li>
      <li><a href="#" className="nav-link">Services</a></li>
      <li><a href="#" className="nav-link">Company</a></li>
    </ul>
  );
});

const NavButton = makeScenaFunctionComponent("NavButton", function NavButton(props: ScenaProps) {
  return (
    <a href="#" className="nav-button" data-scena-element-id={props.scenaElementId}>
      Get in touch
      <span className="nav-button-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
        </svg>
      </span>
    </a>
  );
});

const HeroBadge = makeScenaFunctionComponent("HeroBadge", function HeroBadge(props: ScenaProps) {
  return (
    <span className="hero-badge" data-scena-element-id={props.scenaElementId}>
      Creativity in mind
    </span>
  );
});

const HeroTitle = makeScenaFunctionComponent("HeroTitle", function HeroTitle(props: ScenaProps) {
  return (
    <h1 className="hero-title" data-scena-element-id={props.scenaElementId}>
      We inspire Growth for your business brand
    </h1>
  );
});

const HeroDescription = makeScenaFunctionComponent("HeroDescription", function HeroDescription(props: ScenaProps) {
  return (
    <p className="hero-description" data-scena-element-id={props.scenaElementId}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique deleniti earum, qui odio,
      dolorum labore incidunt ad ab porro, provident excepturi molestiae corporis molestias nam accusamus.
    </p>
  );
});

const HeroButton = makeScenaFunctionComponent("HeroButton", function HeroButton(props: ScenaProps) {
  return (
    <a href="#" className="hero-button" data-scena-element-id={props.scenaElementId}>
      Let's talk
      <span className="hero-button-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
        </svg>
      </span>
    </a>
  );
});

const BackgroundElement1 = makeScenaFunctionComponent("BackgroundElement1", function BackgroundElement1(props: ScenaProps) {
  return (
    <div className="bg-element-1" data-scena-element-id={props.scenaElementId}>
      <div className="bg-inner-1">
        <div className="bg-inner-2" />
      </div>
    </div>
  );
});

const BackgroundElement2 = makeScenaFunctionComponent("BackgroundElement2", function BackgroundElement2(props: ScenaProps) {
  return (
    <div className="bg-element-2" data-scena-element-id={props.scenaElementId}>
      <div className="bg-inner-3">
        <div className="bg-inner-4" />
      </div>
    </div>
  );
});

const BackgroundGradient1 = makeScenaFunctionComponent("BackgroundGradient1", function BackgroundGradient1(props: ScenaProps) {
  return (
    <div className="bg-gradient-1" data-scena-element-id={props.scenaElementId} />
  );
});

const BackgroundGradient2 = makeScenaFunctionComponent("BackgroundGradient2", function BackgroundGradient2(props: ScenaProps) {
  return (
    <div className="bg-gradient-2" data-scena-element-id={props.scenaElementId} />
  );
});

// Main navbar component
const Navbar = makeScenaFunctionComponent("Navbar", function Navbar(props: ScenaProps) {
  const [openNavbar, setOpenNavbar] = useState(false);
  
  const toggleNavbar = () => {
    setOpenNavbar(!openNavbar);
  };

  return (
    <header className="navbar-header" data-scena-element-id={props.scenaElementId}>
      <div className="navbar-container">
        <nav className="navbar-nav">
          <Logo />
          <div className={`navbar-menu ${openNavbar ? 'navbar-menu-open' : ''}`}>
            <NavMenu />
            <NavButton />
          </div>
          <div className="navbar-toggle">
            <button onClick={toggleNavbar} className="toggle-button">
              <span className="sr-only">toggle navbar</span>
              <span className={`toggle-line ${openNavbar ? 'toggle-line-1-open' : ''}`} />
              <span className={`toggle-line ${openNavbar ? 'toggle-line-2-open' : ''}`} />
              <span className={`toggle-line ${openNavbar ? 'toggle-line-3-open' : ''}`} />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
});

// Export all components for use in the editor
export {
  Logo,
  NavMenu,
  NavButton,
  Navbar,
  HeroBadge,
  HeroTitle,
  HeroDescription,
  HeroButton,
  BackgroundElement1,
  BackgroundElement2,
  BackgroundGradient1,
  BackgroundGradient2
};