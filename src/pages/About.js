// src/pages/About.js (or components/About.js)
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../styles/About.css'; // Using existing CSS

// Placeholder image (replace with a relevant image, e.g., team, office, concept)
const aboutImagePlaceholder = 'https://placehold.co/600x400/1E5A6C/FFFFFF?text=About+Accountaxation';

function About() {
  const teamMembers = [
    { name: "GAGANDEEP SINGH", profession: "CHARTERED ACCOUNTANT" },
    { name: "ANKIT JAISWAL", profession: "CHARTERED ACCOUNTANT" },
    { name: "AMAN SINGH", profession: "COMPANY SECRETARY" },
    { name: "RAJNI MIGLANI", profession: "COMPANY SECRETARY" },
    { name: "SUNIL KUMAR", profession: "ADVOCATE" },
    { name: "PBA SRINIVASAN", profession: "ADVOCATE" },
    { name: "KARAN SONI", profession: "COMPANY SECRETARY" },
    { name: "PRACHI GOEL", profession: "CHARTERED ACCOUNTANT" },
    { name: "MANISH BAJAJ", profession: "CHARTERED ACCOUNTANT" },
    { name: "HARPREET SINGH", profession: "ADVOCATE" },
    { name: "GANAT JUNEJA", profession: "ADVOCATE" }
  ];
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
              ACCOUNTAXATION SERVICES is a long-lasting business consulting firm specialized in Start-Ups, Corporate Laws, Taxation (Direct & Indirect), International Taxation, GST Accounting, Import Export, Govt Registration & Licenses, Transfer Pricing, Transaction Advisory, Book Keeping, Audit and Assurance, Business Registrations, and Corporate Financial and Risk Advisory
              </p>
              <p>
                Our commitment is to work <strong>with you, not just for you</strong>. We believe in building partnerships
                based on trust and understanding your unique needs.
                Our team of experts offers solutions to meet individual client needs in today's market[cite: 3]. [cite_start]As a Trusted Partner, we prioritize exceptional customer service and aim to be with you at every step of the way
              </p>

              {/* Optional: Add Mission/Vision */}
              <div className="mission-vision">
                 <h3>Our Mission</h3>
                 <p>
                  Our mission revolves around providing essential support and solutions to businesses to ensure their operations run smoothly and efficiently. We ensure client satisfaction by delivering high-quality services, consult clients to achieve operational efficiency , and combine global capabilities with local market knowledge.
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


          <div className="team-section">
            <h2>Meet Our Team</h2>
            <p>Our firm is powered by a dedicated team of highly qualified and experienced professionals.</p>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-member-card">
                  <h4>{member.name}</h4>
                  <p>{member.profession}</p>
                </div>
              ))}
            </div>
          </div>

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
