import React, { useState } from "react";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          My Portfolio
        </a>
        <div
          className={`navbar-toggle ${isMobileMenuOpen ? "active" : ""}`}
          id="mobile-menu"
          onClick={toggleMobileMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <a href="#home" className="navbar-links" onClick={toggleMobileMenu}>
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-links" onClick={toggleMobileMenu}>
              About
            </a>
          </li>
          <li className="navbar-item">
            <a href="#projects" className="navbar-links" onClick={toggleMobileMenu}>
              Projects
            </a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-links" onClick={toggleMobileMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;