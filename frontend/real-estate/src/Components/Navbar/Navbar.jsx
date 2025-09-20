import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand */}
        <div className="navbar-brand">
          <span className="brand-text">RealestateRoyal</span>
        </div>

        {/* Navigation Menu */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#home" className="navbar-link">House Design</a>
          </li>
          <li className="navbar-item">
            <a href="#inclusions" className="navbar-link">Inclusion List</a>
          </li>
          <li className="navbar-item">
            <a href="#services" className="navbar-link">About</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link">Get in touch</a>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="navbar-actions">
          <a href="#contact" className="get-in-touch-btn">Get in touch</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
