import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false); 
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">Akarsh Gupta</div>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home" onClick={handleLinkClick}>Home</a>
        <a href="#about" onClick={handleLinkClick}>About</a>
        <a href="#experience" onClick={handleLinkClick}>Experience</a>
        <a href="#projects" onClick={handleLinkClick}>Projects</a>
        <a href="#contact" onClick={handleLinkClick}>Contact</a>
      </div>
      <button 
        className="menu-btn"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>
    </nav>
  );
}

export default Navbar;
