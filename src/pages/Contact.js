import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const form = e.target;
    const formData = new FormData(form);
    const jsonData = Object.fromEntries(formData.entries()); // Convert FormData to JSON
  
    // Simulate success/failure by using a timeout
    let timeoutId = setTimeout(() => {
      setStatus('ERROR');
      setIsSending(false);
      console.error('Timeout: No response from server. But email may still be sent.');
    }, 5000); // Adjust timeout duration as needed
  
    try {
      await fetch('https://script.google.com/macros/s/AKfycbztBIEXCol0SNcXt6s0vcMbh4_lCpAI1Y_XjCmI2dSUnQZnIL77UansdKsPN0YbZPxm/exec', {
        method: 'POST',
        mode: 'no-cors', // Prevents CORS error
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      });
  
      clearTimeout(timeoutId); // If request was successful, cancel timeout
      setStatus('SUCCESS');
      form.reset();
    } catch (error) {
      clearTimeout(timeoutId);
      setStatus('ERROR');
      console.error('Fetch error:', error);
    } finally {
      setIsSending(false);
    }
  };
  

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with us for any inquiries</p>
      </div>

      <div className="container">
        <div className="contact-grid">
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

          <div className="contact-form">
            <h2>Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" placeholder="Phone Number" />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={isSending}>
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'SUCCESS' && <p className="success-msg">Message sent successfully!</p>}
              {status === 'ERROR' && <p className="error-msg">Oops! Something went wrong.</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;