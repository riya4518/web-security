import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css'; // Ensure the correct path and file name

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>XSS Demo Project</h1>
        <p>This project demonstrates various types of Cross-Site Scripting (XSS) attacks.</p>
      </header>
      <nav className="home-nav">
        <ul className="home-nav-list">
          <li><Link to="/dom-xss" aria-label="Navigate to DOM-based XSS demo">DOM-based XSS</Link></li>
          <li><Link to="/stored-xss" aria-label="Navigate to Stored XSS demo">Stored XSS</Link></li>
          <li><Link to="/reflected-xss" aria-label="Navigate to Reflected XSS demo">Reflected XSS</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
