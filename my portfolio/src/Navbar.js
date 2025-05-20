import React from 'react';
import { FaInstagram, FaPinterest } from 'react-icons/fa';
import './Navbar.css';

export default function Navbar() {
    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Adjust for navbar height
            behavior: 'smooth'
    });
  };

  return (
    <nav className="navbar">
      <w.instagram.com className="logo">RN-GALLERY</w.instagram.com/rizwnmohmd" target="_blank" rel="noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="https://pin.it/4DcF3KQXI" target="_blank" rel="noreferrer">
          <FaPinterest className="icon" />
        </a>
      </div>
    </nav>div>
      
      <div className="nav-links">
        <button onClick={() => scrollTo('home')}>Home</button>
        <button onClick={() => scrollTo('gallery')}>Gallery</button>
        <button onClick={() => scrollTo('contact')}>Contact</button>
        
<button onClick={() => scrollTo('about')}>About</button>
      </div>

      <div className="social-icons">
        <a href="https://ww
  );
}