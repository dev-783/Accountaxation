import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with us for any inquiries</p>
      </div>

      <div className="container">
        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="info-item">
              <h3>Phone</h3>
              <a href="tel:+919016048820">+91 9016048820</a>
            </div>
            <div className="info-item">
              <h3>Email</h3>
              <a href="mailto:servicesa783@gmail.com">servicesa783@gmail.com</a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h2>Send us a message</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;