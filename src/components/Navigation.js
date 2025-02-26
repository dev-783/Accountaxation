// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';
import logo from "../assests/464335333_1607030400025827_26337012294128688_n.jpg"

function Navigation() {
  return (
    <header>
      <div className="top-bar">
        <div className="container">
          <div className="contact-info-nav">
            <a href="tel:+919016048820">+91 9016048820</a>
            <a href="mailto:servicesa783@gmail.com">servicesa783@gmail.com</a>
          </div>
        </div>
      </div>
      
      <nav className="main-nav">
        <div className="container nav-container">
          <Link to="/" className="logo">
            <img src={logo} alt="Company Logo" />
          </Link>
          
          <div className="nav-links">
            <ul className="main-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li className="services-dropdown">
                <Link to="/services">Services</Link>
                <ul className="submenu">
                  <li><Link to="/services/service1">Service 1</Link></li>
                  <li><Link to="/services/service2">Service 2</Link></li>
                  <li><Link to="/services/service3">Service 3</Link></li>
                </ul>
              </li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;