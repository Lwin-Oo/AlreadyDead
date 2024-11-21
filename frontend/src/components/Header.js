import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        {/* Brand Name */}
        <div className="navbar-left">
          <h1 className="brand-name">Already Dead</h1>
        </div>

        {/* Navigation Links */}
        <nav className="navbar-center">
          <ul className="nav-links">
            <li><a href="#collections">Collections</a></li>
            <li><a href="#new-arrivals">New Arrivals</a></li>
            <li><a href="#stories">Stories</a></li>
          </ul>
        </nav>

        {/* Icons */}
        <div className="navbar-right">
          <div className="icon">🛒</div>
          <div className="icon">👤</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
