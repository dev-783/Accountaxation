// src/pages/EpfServices.js
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
// Reuse the same CSS file for consistent styling
import '../styles/RegistrationServices.css'; // Or your shared services CSS file

// --- Placeholder Image URLs ---
const placeholderBase = 'https://placehold.co/400x250/1E5A6C/FFFFFF?text='; // Using the teal base color
const pfWithdrawalImage = `${placeholderBase}PF+Withdrawal`;
const uanActivationImage = `${placeholderBase}UAN+Activation`;
const accountTransferImage = `${placeholderBase}PF+Transfer`;
const aadharLinkImage = `${placeholderBase}Aadhar+Link+EPF`;
const passbookImage = `${placeholderBase}EPF+Passbook`;
const trackClaimImage = `${placeholderBase}Track+Claim`;
// --- End Placeholder Images ---

function EpfServices() {
  const serviceName = "EPF Services"; // Define service name for state

  return (
    // Use the same main class name to apply shared styles
    <div className="registration-services-page"> {/* Reuse class */}
      <Helmet>
        {/* SEO Meta Tags */}
        <title>EPF Services | Accountaxation</title>
        <meta name="description" content="Complete EPF (Employees' Provident Fund) services including PF withdrawal assistance, UAN activation, account transfer, Aadhaar linking, passbook access, and claim tracking." />
        <meta name="keywords" content="EPF services, PF withdrawal, UAN activation, PF transfer, link Aadhaar to EPF, EPF passbook, track PF claim, provident fund India" />
      </Helmet>

      {/* Page Header Section */}
      <section className="page-header epf-header"> {/* Optional: Add specific class if needed */}
        <div className="container">
          <h1>EPF Services</h1>
          <p className="subtitle">Manage your Employees' Provident Fund account seamlessly with our comprehensive support services.</p>
        </div>
      </section>

      {/* Main Content Section for Services */}
      <section className="services-content">
        <div className="container">
          {/* PF Withdrawal */}
          <div className="service-item">
            <img src={pfWithdrawalImage} alt="PF Withdrawal Assistance" className="service-image" onError={(e) => e.target.src='https://placehold.co/400x250/cccccc/ffffff?text=Image+Not+Found'}/>
            <div className="service-text">
              <h2>PF Withdrawal Assistance</h2>
              <p>Need to withdraw funds from your EPF account for specific reasons like retirement, unemployment, medical emergencies, or home purchase? We guide you through the eligibility criteria, documentation, and online claim submission process for full or partial withdrawals.</p>
              {/* --- Added Link --- */}
              <Link
                to="/contact"
                className="service-contact-link"
                state={{ service: serviceName, subService: "PF Withdrawal Assistance" }}
              >
                Inquire about PF Withdrawal
              </Link>
              {/* --- End Added Link --- */}
            </div>
          </div>

          {/* UAN Activation */}
          <div className="service-item">
            <img src={uanActivationImage} alt="UAN Activation Service" className="service-image" onError={(e) => e.target.src='https://placehold.co/400x250/cccccc/ffffff?text=Image+Not+Found'}/>
            <div className="service-text">
              <h2>UAN Activation</h2>
              <p>Your Universal Account Number (UAN) is key to accessing EPF services online. If you haven't activated your UAN provided by your employer, we assist you in the activation process using your member ID, Aadhaar, or PAN, allowing you to manage your PF account digitally.</p>
              {/* --- Added Link --- */}
              <Link
                to="/contact"
                className="service-contact-link"
                state={{ service: serviceName, subService: "UAN Activation" }}
              >
                Inquire about UAN Activation
              </Link>
              {/* --- End Added Link --- */}
            </div>
          </div>

          {/* Account Transfer */}
          <div className="service-item">
            <img src={accountTransferImage} alt="EPF Account Transfer Service" className="service-image" onError={(e) => e.target.src='https://placehold.co/400x250/cccccc/ffffff?text=Image+Not+Found'}/>
            <div className="service-text">
              <h2>PF Account Transfer</h2>
              <p>When changing jobs, it's crucial to transfer your PF balance from your previous employer's account to the new one linked to your UAN. We help you initiate and track the online transfer process (Form 13) to consolidate your retirement savings.</p>
              {/* --- Added Link --- */}
              <Link
                to="/contact"
                className="service-contact-link"
                state={{ service: serviceName, subService: "PF Account Transfer" }}
              >
                Inquire about PF Account Transfer
              </Link>
              {/* --- End Added Link --- */}
            </div>
          </div>

          {/* Aadhar Link */}
          <div className="service-item">
            <img src={aadharLinkImage} alt="Aadhaar Linking with EPF/UAN" className="service-image" onError={(e) => e.target.src='https://placehold.co/400x250/cccccc/ffffff?text=Image+Not+Found'}/>
            <div className="service-text">
              <h2>Aadhaar Linking with UAN/EPF</h2>
              <p>Linking your Aadhaar number with your UAN is mandatory for KYC compliance and enables seamless online claim submissions and other services. We assist you in linking your Aadhaar through the EPFO portal or offline methods if required.</p>
              {/* --- Added Link --- */}
              <Link
                to="/contact"
                className="service-contact-link"
                state={{ service: serviceName, subService: "Aadhaar Linking with UAN/EPF" }}
              >
                Inquire about Aadhaar Linking
              </Link>
              {/* --- End Added Link --- */}
            </div>
          </div>

          {/* Passbook */}
          <div className="service-item">
            <img src={passbookImage} alt="EPF Passbook Access" className="service-image" onError={(e) => e.target.src='https://placehold.co/400x250/cccccc/ffffff?text=Image+Not+Found'}/>
            <div className="service-text">
              <h2>EPF Passbook Access</h2>
              <p>View your monthly contributions from both employee and employer, check your accumulated balance, and download your EPF passbook easily. We guide you on how to access the e-passbook facility through the EPFO member portal using your activated UAN.</p>
              {/* --- Added Link --- */}
              <Link
                to="/contact"
                className="service-contact-link"
                state={{ service: serviceName, subService: "EPF Passbook Access" }}
              >
                Inquire about Accessing EPF Passbook
              </Link>
              {/* --- End Added Link --- */}
            </div>
          </div>

          {/* Track Claim */}
          <div className="service-item">
            <img src={trackClaimImage} alt="Track EPF Claim Status" className="service-image" onError={(e) => e.target.src='https://placehold.co/400x250/cccccc/ffffff?text=Image+Not+Found'}/>
            <div className="service-text">
              <h2>Track Claim Status</h2>
              <p>After submitting an EPF withdrawal or transfer claim, you can monitor its progress online. We help you understand how to use the EPFO portal's 'Track Claim Status' feature to stay updated on the processing of your application.</p>
              {/* --- Added Link --- */}
              <Link
                to="/contact"
                className="service-contact-link"
                state={{ service: serviceName, subService: "Track Claim Status" }}
              >
                Inquire about Tracking EPF Claims
              </Link>
              {/* --- End Added Link --- */}
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
          <div className="container">
              <h2>Need Assistance with Your EPF Account?</h2>
              <p>Let us simplify your EPF procedures and ensure you manage your account effectively.</p>
              <Link to="/contact" className="cta-button cta-primary-teal">Contact Us for EPF Support</Link>
          </div>
      </section>

    </div>
  );
}

export default EpfServices;
