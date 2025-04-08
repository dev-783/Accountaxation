// src/pages/RegistrationServices.js
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../styles/RegistrationServices.css'; // Styles will be updated

// Placeholder images (replace as needed)
const placeholderBase = 'https://placehold.co/400x250/1E5A6C/FFFFFF?text=';
const gstImage = `${placeholderBase}GST+Registration`;
const incomeTaxImage = `${placeholderBase}Income+Tax`;
const esicImage = `${placeholderBase}ESIC+Registration`;
const epfImage = `${placeholderBase}EPF+Registration`;
const msmeImage = `${placeholderBase}MSME+Registration`;
const udyamImage = `${placeholderBase}Udyam+Registration`;

function RegistrationServices() {
  const serviceName = "Registration"; // Define service name for state

  return (
    <div className="registration-services-page">
      <Helmet>
        <title>Registration Services | Accountaxation</title>
        <meta name="description" content="Expert registration services including GST, Income Tax (PAN/TAN), ESIC, EPF, MSME, and Udyam Adhar registration for businesses and individuals across India." />
        <meta name="keywords" content="GST registration, Income Tax registration, PAN, TAN, ESIC registration, EPF registration, MSME registration, Udyam Adhar registration, business registration India, company registration India" />
      </Helmet>

      <section className="page-header registration-header">
        <div className="container">
          <h1>Registration Services</h1>
          <p className="subtitle">Navigate the complexities of Indian business and tax registrations with our expert guidance. We ensure a smooth and compliant process.</p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          {/* GST Registration */}
          <div className="service-item">
            <img src={gstImage} alt="GST Registration Service" className="service-image" onError={(e) => e.target.src='https://placehold.co/400x250/cccccc/ffffff?text=Image+Not+Found'}/>
            <div className="service-text">
              <h2>GST Registration</h2>
              <p>Goods and Services Tax (GST) registration is mandatory for businesses crossing specified turnover limits or engaging in inter-state supply...</p>
              {/* --- Added Link --- */}
              <Link
                to="/contact"
                className="service-contact-link"
                state={{ service: serviceName, subService: "GST Registration" }}
              >
                Inquire about GST Registration
              </Link>
              {/* --- End Added Link --- */}
            </div>
          </div>

          {/* Income Tax Registration */}
          <div className="service-item">
            <img src={incomeTaxImage} alt="Income Tax PAN/TAN Registration Service" className="service-image" onError={(e) => e.target.src='https://placehold.co/400x250/cccccc/ffffff?text=Image+Not+Found'}/>
            <div className="service-text">
              <h2>Income Tax Registration (PAN/TAN)</h2>
              <p>A Permanent Account Number (PAN) is crucial for all tax-related activities in India for individuals and entities...</p>
              {/* --- Added Link --- */}
              <Link
                to="/contact"
                className="service-contact-link"
                state={{ service: serviceName, subService: "Income Tax Registration (PAN/TAN)" }}
              >
                Inquire about Income Tax Registration
              </Link>
              {/* --- End Added Link --- */}
            </div>
          </div>

          {/* ESIC Registration */}
          <div className="service-item">
            <img src={esicImage} alt="ESIC Registration Service" className="service-image" onError={(e) => e.target.src='https://placehold.co/400x250/cccccc/ffffff?text=Image+Not+Found'}/>
            <div className="service-text">
              <h2>ESIC Registration</h2>
              <p>Employees' State Insurance Corporation (ESIC) registration provides employees with social security benefits like medical care...</p>
              {/* --- Added Link --- */}
              <Link
                to="/contact"
                className="service-contact-link"
                state={{ service: serviceName, subService: "ESIC Registration" }}
              >
                Inquire about ESIC Registration
              </Link>
              {/* --- End Added Link --- */}
            </div>
          </div>

          {/* EPF Registration */}
          <div className="service-item">
            <img src={epfImage} alt="EPF Registration Service" className="service-image" onError={(e) => e.target.src='https://placehold.co/400x250/cccccc/ffffff?text=Image+Not+Found'}/>
            <div className="service-text">
              <h2>EPF Registration</h2>
              <p>The Employees' Provident Fund (EPF) registration is a mandatory retirement savings scheme for employees in eligible organizations...</p>
              {/* --- Added Link --- */}
              <Link
                to="/contact"
                className="service-contact-link"
                state={{ service: serviceName, subService: "EPF Registration" }}
              >
                Inquire about EPF Registration
              </Link>
              {/* --- End Added Link --- */}
            </div>
          </div>

          {/* MSME Registration */}
          <div className="service-item">
            <img src={msmeImage} alt="MSME Registration Service" className="service-image" onError={(e) => e.target.src='https://placehold.co/400x250/cccccc/ffffff?text=Image+Not+Found'}/>
            <div className="service-text">
              <h2>MSME Registration</h2>
              <p>Registering your business as a Micro, Small, or Medium Enterprise (MSME) unlocks various government benefits...</p>
              {/* --- Added Link --- */}
              <Link
                to="/contact"
                className="service-contact-link"
                state={{ service: serviceName, subService: "MSME Registration" }}
              >
                Inquire about MSME Registration
              </Link>
              {/* --- End Added Link --- */}
            </div>
          </div>

          {/* Udyam Adhar Registration */}
          <div className="service-item">
            <img src={udyamImage} alt="Udyam Adhar Registration Service" className="service-image" onError={(e) => e.target.src='https://placehold.co/400x250/cccccc/ffffff?text=Image+Not+Found'}/>
            <div className="service-text">
              <h2>Udyam Adhar Registration</h2>
              <p>Udyam Registration is the current, simplified process for registering MSMEs in India, replacing the older Udyog Aadhar...</p>
              {/* --- Added Link --- */}
              <Link
                to="/contact"
                className="service-contact-link"
                state={{ service: serviceName, subService: "Udyam Adhar Registration" }}
              >
                Inquire about Udyam Adhar Registration
              </Link>
              {/* --- End Added Link --- */}
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section remains the same */}
      <section className="cta-section">
          <div className="container">
              <h2>Ready to Get Registered?</h2>
              <p>Let us handle the paperwork and compliance complexities for you.</p>
              <Link to="/contact" className="cta-button cta-primary-teal">Contact Us Today</Link>
          </div>
      </section>
    </div>
  );
}

export default RegistrationServices;
