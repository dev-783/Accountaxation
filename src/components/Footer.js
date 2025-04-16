import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import logo from "../assests/464335333_1607030400025827_26337012294128688_n.jpg"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and About */}
        <div className="footer-section">
          <div className="footer-logo">
            <img src={logo} alt="Company Logo" ></img>
          </div>
          <p>
          Accountaxation, a trusted name in financial excellence, offers 
          expert services in registrations, taxation, and financial strategies,
          ensuring your business thrives with precision and confidence.
          </p>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul className="contact-list">
            <li>
              <span className="icon">📍</span> Naroli Road, Silvassa - 396230
            </li>
            <li>
              <span className="icon">📞</span>
              <a href="tel:+919016048820">+91 9016048820</a>
            </li>
            <li>
              <span className="icon">✉️</span>
              <a href="mailto:servicesa783@gmail.com">servicesa783@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services/registration">Registration</Link></li>
            <li><Link to="/services/taxation">Taxation</Link></li>
            <li><Link to="/services/audit">Audit</Link></li>
            <li><Link to="/services/epf">EPF Services</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/disclaimer">Disclaimer</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2024 Accountaxation. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
