import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa'; // Importing icons
import './Footer.css'; // Assuming you have a Footer.css file for styles

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>Follow me on social media for updates and collaborations.</p>
          <div className="footer-links">
            <a href="https://linkedin.com/in/theakarshgupta" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" size="24" /> LinkedIn
            </a>
            <a href="https://github.com/theakarshgupta" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" size="24" /> GitHub
            </a>
            <a href="https://facebook.com/theakarshgupta" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="icon" size="24" /> Facebook
            </a>
            <a href="https://instagram.com/the_akarshgupta" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" size="24" /> Instagram
            </a>
          </div>
        </div>
        <div className="footer-right">
          <p>&copy; 2024 Akarsh Gupta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
