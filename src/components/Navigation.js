import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; // <-- Import HashLink
import '../styles/Navigation.css';
import logo from "../assests/464335333_1607030400025827_26337012294128688_n.jpg";

function Navigation() {
  const getActiveClass = ({ isActive }) => (isActive ? 'active' : '');

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

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="container nav-container">
          {/* Logo */}
          <Link to="/" className="logo">
            <img src={logo} alt="Accountaxation Services Logo" />
          </Link>

          {/* Navigation Links */}
          <div className="nav-links">
            <ul className="main-menu">
              <li><NavLink to="/" className={getActiveClass} end>Home</NavLink></li>
              <li><NavLink to="/about" className={getActiveClass}>About Us</NavLink></li>

              {/* Services Dropdown */}
              <li className="services-dropdown">
                <HashLink smooth to="/#services-section" className={getActiveClass}>
                  Services
                </HashLink>
                <ul className="submenu">
                  <li><Link to="/services/registration">Registration</Link></li>
                  <li><Link to="/services/taxation">Taxation</Link></li>
                  <li><Link to="/services/accounting">Accounting</Link></li>
                  <li><Link to="/services/epf">EPF Services</Link></li>
                </ul>
              </li>
              <li><NavLink to="/contact" className={getActiveClass}>Contact</NavLink></li>
            </ul>
          </div>
          {/* Consider adding a mobile menu toggle button and logic here */}
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
