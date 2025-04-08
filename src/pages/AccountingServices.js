// src/pages/AccountingServices.js
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../styles/RegistrationServices.css'; // Reuse styles

// Placeholder images (replace as needed)
const placeholderBase = 'https://placehold.co/400x250/1E5A6C/FFFFFF?text=';
const partTimeImage = `${placeholderBase}Part-Time+Accounting`;
const bookkeepingImage = `${placeholderBase}Bookkeeping`;
const balanceSheetImage = `${placeholderBase}Balance+Sheet`;
const pnlImage = `${placeholderBase}Profit+and+Loss`;
const dscImage = `${placeholderBase}Digital+Signature`;
const panImage = `${placeholderBase}PAN+Card+Services`;

function AccountingServices() {
  const serviceName = "Accounting"; // Define service name for state

  return (
    <div className="registration-services-page"> {/* Reuse class */}
      <Helmet>
        <title>Accounting Services | Accountaxation</title>
        <meta name="description" content="Professional accounting services including part-time accounting, bookkeeping, balance sheet preparation, profit & loss statements, and related support like Digital Signatures and PAN card assistance." />
        <meta name="keywords" content="accounting services, bookkeeping, part-time accountant, balance sheet, profit and loss statement, financial statements, digital signature certificate, DSC, PAN card, India" />
      </Helmet>

      <section className="page-header accounting-header">
        <div className="container">
          <h1>Accounting Services</h1>
          <p className="subtitle">Maintain accurate financial records and gain valuable insights with our comprehensive accounting solutions.</p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          {/* Part time Accounting */}
          <div className="service-item">
            <img src={partTimeImage} alt="Part-time Accounting Service" className="service-image" onError={(e) => e.target.src='https://placehold.co/400x250/cccccc/ffffff?text=Image+Not+Found'}/>
            <div className="service-text">
              <h2>Part-time Accounting</h2>
              <p>Ideal for small businesses and startups, our part-time accounting service provides expert financial management...</p>
              {/* --- Added Link --- */}
              <Link
                to="/contact"
                className="service-contact-link"
                state={{ service: serviceName, subService: "Part-time Accounting" }}
              >
                Inquire about Part-time Accounting
              </Link>
              {/* --- End Added Link --- */}
            </div>
          </div>

          {/* Book Keeping */}
          <div className="service-item">
            <img src={bookkeepingImage} alt="Bookkeeping Service" className="service-image" onError={(e) => e.target.src='https://placehold.co/400x250/cccccc/ffffff?text=Image+Not+Found'}/>
            <div className="service-text">
              <h2>Bookkeeping</h2>
              <p>Accurate bookkeeping is the foundation of sound financial management. We meticulously record all your financial transactions...</p>
              {/* --- Added Link --- */}
              <Link
                to="/contact"
                className="service-contact-link"
                state={{ service: serviceName, subService: "Bookkeeping" }}
              >
                Inquire about Bookkeeping
              </Link>
              {/* --- End Added Link --- */}
            </div>
          </div>

          {/* Balance Sheet */}
          <div className="service-item">
            <img src={balanceSheetImage} alt="Balance Sheet Preparation Service" className="service-image" onError={(e) => e.target.src='https://placehold.co/400x250/cccccc/ffffff?text=Image+Not+Found'}/>
            <div className="service-text">
              <h2>Balance Sheet Preparation</h2>
              <p>The Balance Sheet provides a snapshot of your company's financial health at a specific point in time...</p>
              {/* --- Added Link --- */}
              <Link
                to="/contact"
                className="service-contact-link"
                state={{ service: serviceName, subService: "Balance Sheet Preparation" }}
              >
                Inquire about Balance Sheet Preparation
              </Link>
              {/* --- End Added Link --- */}
            </div>
          </div>

          {/* Profit & Loss */}
          <div className="service-item">
            <img src={pnlImage} alt="Profit & Loss Statement Preparation Service" className="service-image" onError={(e) => e.target.src='https://placehold.co/400x250/cccccc/ffffff?text=Image+Not+Found'}/>
            <div className="service-text">
              <h2>Profit & Loss (P&L) Statement Preparation</h2>
              <p>The P&L statement summarizes your company's revenues, costs, and expenses over a specific period...</p>
              {/* --- Added Link --- */}
              <Link
                to="/contact"
                className="service-contact-link"
                state={{ service: serviceName, subService: "Profit & Loss Statement Preparation" }}
              >
                Inquire about P&L Statement Preparation
              </Link>
              {/* --- End Added Link --- */}
            </div>
          </div>

          {/* Digital Signet (Signature) */}
          <div className="service-item">
            <img src={dscImage} alt="Digital Signature Certificate (DSC) Service" className="service-image" onError={(e) => e.target.src='https://placehold.co/400x250/cccccc/ffffff?text=Image+Not+Found'}/>
            <div className="service-text">
              <h2>Digital Signature Certificate (DSC)</h2>
              <p>Digital Signatures are required for electronically signing documents and filing various forms securely online...</p>
              {/* --- Added Link --- */}
              <Link
                to="/contact"
                className="service-contact-link"
                state={{ service: serviceName, subService: "Digital Signature Certificate (DSC)" }}
              >
                Inquire about DSC
              </Link>
              {/* --- End Added Link --- */}
            </div>
          </div>

          {/* Pan card */}
          <div className="service-item">
            <img src={panImage} alt="PAN Card Application/Correction Service" className="service-image" onError={(e) => e.target.src='https://placehold.co/400x250/cccccc/ffffff?text=Image+Not+Found'}/>
            <div className="service-text">
              <h2>PAN Card Services</h2>
              <p>The Permanent Account Number (PAN) is a unique identifier essential for financial transactions and tax purposes in India...</p>
              {/* --- Added Link --- */}
              <Link
                to="/contact"
                className="service-contact-link"
                state={{ service: serviceName, subService: "PAN Card Services" }}
              >
                Inquire about PAN Card Services
              </Link>
              {/* --- End Added Link --- */}
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section remains the same */}
      <section className="cta-section">
          <div className="container">
              <h2>Streamline Your Accounting?</h2>
              <p>Focus on your business while we manage your books and financial reporting.</p>
              <Link to="/contact" className="cta-button cta-primary-teal">Get Accounting Support</Link>
          </div>
      </section>
    </div>
  );
}

export default AccountingServices;
