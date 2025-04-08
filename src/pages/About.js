// src/pages/About.js (or components/About.js)
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../styles/About.css'; // Using existing CSS

// Placeholder image (replace with a relevant image, e.g., team, office, concept)
const aboutImagePlaceholder = 'https://placehold.co/600x400/1E5A6C/FFFFFF?text=About+Accountaxation';

function About() {
  return (
    <div className="about-page">
      <Helmet>
        {/* SEO Meta Tags */}
        <title>About Accountaxation | Your Trusted Tax & Accounting Partner</title>
        <meta name="description" content="Learn about Accountaxation Services - specializing in taxation, accountancy, and corporate services across India. We work with you, offering 24/7 expert support." />
        <meta name="keywords" content="about Accountaxation, accounting firm India, tax consultants India, corporate services, financial advisory" />
      </Helmet>

      {/* Page Header Section - Reuse style from other pages if available */}
      <section className="page-header about-header">
        <div className="container">
          <h1>About Accountaxation Services</h1>
          <p className="subtitle">Your dedicated partner for navigating finance and compliance in India.</p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="about-content">
        <div className="container">
          <div className="about-grid">

            {/* Left Column: Text Content */}
            <div className="about-text">
              <h2>Who We Are</h2>
              <p>
                Accountaxation services specializes in: Taxation, Accountancy & Corporate services
                in accordance with relevant law and accounting standards. We offer tax advisory,
                ledger keeping, payroll and personnel management, as well as services related to
                companies and enterprises with various business statuses, catering to both
                businesses and individuals.
              </p>
              <p>
                Our commitment is to work <strong>with you, not just for you</strong>. We believe in building partnerships
                based on trust and understanding your unique needs.
              </p>

              {/* Optional: Add Mission/Vision */}
              <div className="mission-vision">
                 <h3>Our Mission</h3>
                 <p>
                   [Placeholder: Briefly state your company's primary mission, e.g., To simplify finance and compliance for Indian businesses and individuals through expert, accessible, and reliable services.]
                 </p>
                 {/* <h3>Our Vision</h3>
                 <p>
                   [Placeholder: State your long-term aspiration, e.g., To be the most trusted financial partner for growing businesses across India.]
                 </p> */}
              </div>

            </div>

            {/* Right Column: Image */}
            <div className="about-image">
              <img
                src={aboutImagePlaceholder}
                alt="About Accountaxation Services"
                onError={(e) => e.target.src='https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found'}
              />
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="why-choose-us">
            <h2>Why Partner with Accountaxation?</h2>
            <ul>
              <li>
                <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 448c-110.532 0-200-89.451-200-200 0-110.531 89.451-200 200-200 110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200zm107.314-291.314l-184 184c-6.248 6.248-16.379 6.248-22.627 0l-22.627-22.627c-6.248-6.249-6.248-16.379 0-22.628l104-104c6.249-6.249 16.379-6.249 22.628 0l184 184c6.248 6.248 6.248 16.379 0 22.627l-22.627 22.627c-6.248 6.249-16.379 6.249-22.628 0z"></path></svg>
                 {/* --- FIX: Use <strong> tag instead of ** --- */}
                 <span><strong>Expertise:</strong> Deep knowledge of Indian tax laws, accounting standards, and corporate regulations.</span>
              </li>
              <li>
                 <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 448c-110.532 0-200-89.451-200-200 0-110.531 89.451-200 200-200 110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200zm107.314-291.314l-184 184c-6.248 6.248-16.379 6.248-22.627 0l-22.627-22.627c-6.248-6.249-6.248-16.379 0-22.628l104-104c6.249-6.249 16.379-6.249 22.628 0l184 184c6.248 6.248 6.248 16.379 0 22.627l-22.627 22.627c-6.248 6.249-16.379 6.249-22.628 0z"></path></svg>
                 {/* --- FIX: Use <strong> tag instead of ** --- */}
                 <span><strong>Availability:</strong> We are always available 24x7 to support you, wherever you are in India.</span>
              </li>
              <li>
                 <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 448c-110.532 0-200-89.451-200-200 0-110.531 89.451-200 200-200 110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200zm107.314-291.314l-184 184c-6.248 6.248-16.379 6.248-22.627 0l-22.627-22.627c-6.248-6.249-6.248-16.379 0-22.628l104-104c6.249-6.249 16.379-6.249 22.628 0l184 184c6.248 6.248 6.248 16.379 0 22.627l-22.627 22.627c-6.248 6.249-16.379 6.249-22.628 0z"></path></svg>
                 {/* --- FIX: Use <strong> tag instead of ** --- */}
                 <span><strong>Client-Centric:</strong> We prioritize understanding your needs and providing satisfactory, tailored solutions.</span>
              </li>
               <li>
                 <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 448c-110.532 0-200-89.451-200-200 0-110.531 89.451-200 200-200 110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200zm107.314-291.314l-184 184c-6.248 6.248-16.379 6.248-22.627 0l-22.627-22.627c-6.248-6.249-6.248-16.379 0-22.628l104-104c6.249-6.249 16.379-6.249 22.628 0l184 184c6.248 6.248 6.248 16.379 0 22.627l-22.627 22.627c-6.248 6.249-16.379 6.249-22.628 0z"></path></svg>
                 {/* --- FIX: Use <strong> tag instead of ** --- */}
                 <span><strong>Comprehensive Services:</strong> Covering taxation, accounting, and corporate needs under one roof.</span>
              </li>
            </ul>
          </div>

          {/* Optional: Team Section Placeholder */}
          {/* <div className="team-section">
            <h2>Meet Our Team</h2>
            <p>[Placeholder: Briefly introduce key team members or mention the team's collective experience. You could add photos later.]</p>
          </div> */}

        </div>
      </section>

      {/* Call to Action Section - Reuse style from other pages */}
      <section className="cta-section about-cta">
          <div className="container">
              <h2>Have Questions or Need Assistance?</h2>
              <p>We're here to help. Reach out to discuss your specific requirements.</p>
              <Link to="/contact" className="cta-button cta-primary-teal">Contact Us Now</Link>
          </div>
      </section>

    </div>
  );
}

export default About;
