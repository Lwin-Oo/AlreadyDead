import React from 'react';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="brand-name">Already Dead</h1>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>Men</li>
          <li>Women</li>
          <li>Accessories</li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="icon">🛒</div>
        <div className="icon">👤</div>
      </div>
    </nav>
  );
};

export default Navbar;
