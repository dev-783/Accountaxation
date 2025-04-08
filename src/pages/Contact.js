// src/pages/Contact.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import '../styles/Contact.css';

function Contact() {
  // --- State for controlled form inputs ---
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(''); // State for message textarea

  // --- State for submission status ---
  const [status, setStatus] = useState(''); // '', 'SUCCESS', 'ERROR'
  const [isSending, setIsSending] = useState(false);

  // --- Get location state passed from Link ---
  const location = useLocation();

  // --- useEffect to pre-fill message based on location state ---
  useEffect(() => {
    // Check if state exists and has the expected properties
    if (location.state?.service && location.state?.subService) {
      const { service, subService } = location.state;
      // Create the pre-filled message
      const prefilledMessage = `I'm interested in your ${service} services, specifically regarding: ${subService}.\n\nPlease provide more information.\n\n`;
      setMessage(prefilledMessage); // Set the message state
    }
    // Clear state when component unmounts or location changes without state
    // Note: React Router might handle state clearing automatically on navigation,
    // but explicit handling can prevent stale state if the user navigates back/forth.
    // Optional: Clear state if needed, but usually not required for this pattern.
    // return () => {
    //   // Potentially clear message state if you navigate away *without* new state
    // };
  }, [location.state]); // Re-run effect if location.state changes

  // --- Handle form submission ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(''); // Reset status on new submission

    // --- Create JSON data from state ---
    const jsonData = {
      name,
      email,
      phone,
      message,
      // You could add service/subService here if your backend expects it
      // service: location.state?.service || '',
      // subService: location.state?.subService || '',
    };

    // Simulate success/failure by using a timeout (as in original code)
    // Consider removing this simulation for production
    let timeoutId = setTimeout(() => {
      setStatus('ERROR');
      setIsSending(false);
      console.error('Timeout: No response from server. But email may still be sent.');
    }, 5000); // Adjust timeout duration as needed

    try {
      // --- Send data to Google Apps Script ---
      // IMPORTANT: Ensure your Google Apps Script is set up to handle JSON POST requests
      // and potentially the fields you are sending. The 'no-cors' mode means you won't
      // get a direct success/error response in the browser from the script itself.
      await fetch('https://script.google.com/macros/s/AKfycbztBIEXCol0SNcXt6s0vcMbh4_lCpAI1Y_XjCmI2dSUnQZnIL77UansdKsPN0YbZPxm/exec', {
        method: 'POST',
        mode: 'no-cors', // 'no-cors' is necessary for basic Google Apps Script web apps without complex setup
        headers: {
          // Content-Type might not be strictly necessary with 'no-cors' and simple data,
          // but good practice if your script expects JSON. Test this.
           'Content-Type': 'application/json',
        },
         body: JSON.stringify(jsonData), // Send data from state
      });

      clearTimeout(timeoutId); // If request finishes (even with no-cors), assume script received it
      setStatus('SUCCESS');
      // --- Reset form fields (clear state) ---
      setName('');
      setEmail('');
      setPhone('');
      setMessage(''); // Clear message field too
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
          {/* Contact Info remains the same */}
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
            {/* Add Address or other info if needed */}
          </div>

          {/* Contact Form - Now uses controlled components */}
          <div className="contact-form">
            <h2>Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={name} // Controlled input
                  onChange={(e) => setName(e.target.value)} // Update state on change
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={email} // Controlled input
                  onChange={(e) => setEmail(e.target.value)} // Update state on change
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (Optional)"
                  value={phone} // Controlled input
                  onChange={(e) => setPhone(e.target.value)} // Update state on change
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6" // Increased rows slightly
                  value={message} // Controlled textarea
                  onChange={(e) => setMessage(e.target.value)} // Update state on change
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={isSending}>
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
              {/* Status Messages */}
              {status === 'SUCCESS' && <p className="success-msg">Message sent successfully! We'll get back to you soon.</p>}
              {status === 'ERROR' && <p className="error-msg">Oops! There was an error sending your message. Please try again or contact us directly via phone/email.</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
