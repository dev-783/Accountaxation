// src/pages/TaxationServices.js
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../styles/RegistrationServices.css'; // Reuse styles

// Placeholder images (replace as needed)
const placeholderBase = 'https://placehold.co/400x250/1E5A6C/FFFFFF?text=';
const gstReturnImage = `${placeholderBase}GST+Return`;
const itrImage = `${placeholderBase}Income+Tax+Return`;
const tdsImage = `${placeholderBase}TDS+Return`;
const esicReturnImage = `${placeholderBase}ESIC+Return`;
const epfReturnImage = `${placeholderBase}EPF+Return`;
const rocImage = `${placeholderBase}ROC+Return`;

function TaxationServices() {
  const serviceName = "Taxation"; // Define service name for state

  return (
    <div className="registration-services-page"> {/* Reuse class */}
      <Helmet>
        <title>Taxation Services | Accountaxation</title>
        <meta name="description" content="Comprehensive tax return filing services including GST, Income Tax (ITR), TDS, ESIC, EPF, and ROC returns. Ensure compliance and accuracy with Accountaxation." />
        <meta name="keywords" content="GST return filing, Income Tax Return, ITR filing, TDS return, ESIC return, EPF return, ROC filing, tax compliance India, taxation services" />
      </Helmet>

      <section className="page-header taxation-header">
        <div className="container">
          <h1>Taxation Services</h1>
          <p className="subtitle">Stay compliant and optimize your tax strategy with our expert return filing and advisory services.</p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          {/* GST Return */}
          <div className="service-item">
            <img src={gstReturnImage} alt="GST Return Filing Service" className="service-image" onError={(e) => e.target.src='https://placehold.co/400x250/cccccc/ffffff?text=Image+Not+Found'}/>
            <div className="service-text">
              <h2>GST Return Filing</h2>
              <p>Accurate and timely filing of monthly, quarterly, and annual GST returns (GSTR-1, GSTR-3B, GSTR-9, etc.) is crucial for compliance...</p>
              {/* --- Added Link --- */}
              <Link
                to="/contact"
                className="service-contact-link"
                state={{ service: serviceName, subService: "GST Return Filing" }}
              >
                Inquire about GST Return Filing
              </Link>
              {/* --- End Added Link --- */}
            </div>
          </div>

          {/* Income tax Return */}
          <div className="service-item">
            <img src={itrImage} alt="Income Tax Return (ITR) Filing Service" className="service-image" onError={(e) => e.target.src='https://placehold.co/400x250/cccccc/ffffff?text=Image+Not+Found'}/>
            <div className="service-text">
              <h2>Income Tax Return (ITR) Filing</h2>
              <p>We provide ITR filing services for individuals (salaried, business owners, professionals) and corporate entities...</p>
              {/* --- Added Link --- */}
              <Link
                to="/contact"
                className="service-contact-link"
                state={{ service: serviceName, subService: "Income Tax Return (ITR) Filing" }}
              >
                Inquire about ITR Filing
              </Link>
              {/* --- End Added Link --- */}
            </div>
          </div>

          {/* TDS Return */}
          <div className="service-item">
            <img src={tdsImage} alt="TDS Return Filing Service" className="service-image" onError={(e) => e.target.src='https://placehold.co/400x250/cccccc/ffffff?text=Image+Not+Found'}/>
            <div className="service-text">
              <h2>TDS Return Filing</h2>
              <p>Businesses deducting Tax at Source (TDS) are required to file quarterly TDS returns (Form 24Q, 26Q, etc.)...</p>
              {/* --- Added Link --- */}
              <Link
                to="/contact"
                className="service-contact-link"
                state={{ service: serviceName, subService: "TDS Return Filing" }}
              >
                Inquire about TDS Return Filing
              </Link>
              {/* --- End Added Link --- */}
            </div>
          </div>

          {/* ESIC Return */}
          <div className="service-item">
            <img src={esicReturnImage} alt="ESIC Return Filing Service" className="service-image" onError={(e) => e.target.src='https://placehold.co/400x250/cccccc/ffffff?text=Image+Not+Found'}/>
            <div className="service-text">
              <h2>ESIC Return Filing</h2>
              <p>Employers registered under ESIC need to file monthly contributions and half-yearly returns...</p>
              {/* --- Added Link --- */}
              <Link
                to="/contact"
                className="service-contact-link"
                state={{ service: serviceName, subService: "ESIC Return Filing" }}
              >
                Inquire about ESIC Return Filing
              </Link>
              {/* --- End Added Link --- */}
            </div>
          </div>

          {/* EPF Return */}
          <div className="service-item">
            <img src={epfReturnImage} alt="EPF Return Filing Service" className="service-image" onError={(e) => e.target.src='https://placehold.co/400x250/cccccc/ffffff?text=Image+Not+Found'}/>
            <div className="service-text">
              <h2>EPF Return Filing</h2>
              <p>Compliance with the Employees' Provident Fund scheme involves monthly deposit of contributions and filing electronic challan cum return (ECR)...</p>
              {/* --- Added Link --- */}
              <Link
                to="/contact"
                className="service-contact-link"
                state={{ service: serviceName, subService: "EPF Return Filing" }}
              >
                Inquire about EPF Return Filing
              </Link>
              {/* --- End Added Link --- */}
            </div>
          </div>

          {/* ROC Return */}
          <div className="service-item">
            <img src={rocImage} alt="ROC Return Filing Service" className="service-image" onError={(e) => e.target.src='https://placehold.co/400x250/cccccc/ffffff?text=Image+Not+Found'}/>
            <div className="service-text">
              <h2>ROC Return / Compliance Filing</h2>
              <p>Companies registered in India must file various annual returns and forms with the Registrar of Companies (ROC)...</p>
              {/* --- Added Link --- */}
              <Link
                to="/contact"
                className="service-contact-link"
                state={{ service: serviceName, subService: "ROC Return / Compliance Filing" }}
              >
                Inquire about ROC Filing
              </Link>
              {/* --- End Added Link --- */}
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section remains the same */}
      <section className="cta-section">
          <div className="container">
              <h2>Need Help with Tax Filings?</h2>
              <p>Ensure accuracy and timeliness in all your tax compliance requirements.</p>
              <Link to="/contact" className="cta-button cta-primary-teal">Contact Us for Tax Services</Link>
          </div>
      </section>
    </div>
  );
}

export default TaxationServices;
