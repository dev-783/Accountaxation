import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Home() {
  const title = "Accountaxation Services";
  const subtitle = "We work with you not for you";

  return (
    <div className="home">
      <Helmet>
        <title>Accountaxation | Expert Tax & Accounting Services</title>
        <meta name="description" content="Affordable taxation, accounting, and registration services across India. Contact us 24/7 for expert support!" />
        <meta name="keywords" content="tax services, accounting, GST registration, India" />
      </Helmet>

      {/* Hero Section - Remains the same */}
      <section className="hero hero-teal-bg">
        <div className="hero-container">
           <div className="hero-content-wrapper">
             {/* Hero content remains the same */}
             <div className="hero-headings">
                <h1 className="hero-title">{title}</h1>
                <h3 className="hero-subtitle">{subtitle}</h3>
             </div>
             <div className="hero-icons elementor-icon-list--layout-inline">
                {/* Icons remain the same */}
                <div className="hero-icon-item">
                    <span className="hero-icon-check"><svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg></span>
                    <span className="hero-icon-text">Trusted</span>
                </div>
                <div className="hero-icon-item">
                    <span className="hero-icon-check"><svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg></span>
                    <span className="hero-icon-text">Experienced</span>
                </div>
                <div className="hero-icon-item">
                    <span className="hero-icon-check"><svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg></span>
                    <span className="hero-icon-text">Professional</span>
                </div>
             </div>
             <div className="hero-ctas">
                {/* CTAs remain the same */}
                <Link to="/contact" className='cta-button cta-primary-teal'>Contact</Link>
                <Link to="/services" className="cta-button cta-secondary-teal">Learn More</Link>
             </div>
           </div>
        </div>
      </section>

      {/* Services Section - Updated Cards */}
      <section className="services" id="services-section">
        <div className="container">
          <h2 className='services-h2'>Our Services</h2>
          <div className="services-grid">

             {/* --- Existing Service Card 1: Registration --- */}
             <Link to="/services/registration" className="service-card-link">
               <div className="service-card">
                 <img src="https://snthanvi.in/wp-content/uploads/2024/02/1.webp" alt="Registration Services" />
                 <h3 className='services-h3'>REGISTRATION​</h3>
                 <ul className="list-items">
                     <li>GST Registration</li>
                     <li>Income Tax Registration</li>
                     <li>ESIC Registration</li>
                     <li>EPF Registration</li>
                     <li>MSME Registration</li>
                     <li>Udhyam Adhar Registration</li>
                 </ul>
               </div>
             </Link>
             {/* --- Existing Service Card 2: Taxation --- */}
             <Link to="/services/taxation" className="service-card-link">
               <div className="service-card">
                 <img src="https://snthanvi.in/wp-content/uploads/2024/01/heap-of-american-money-cash-and-vintage-light-box.jpg" alt="Taxation Services" />
                 <h3 className='services-h3'>TAXATION</h3>
                 <ul className="list-items">
                     <li>GST Return</li>
                     <li>Income tax Return</li>
                     <li>TDS Return</li>
                     <li>ESIC Return</li>
                     <li>EPF Return</li>
                     <li>ROC Return</li>
                 </ul>
               </div>
             </Link>
             {/* --- Existing Service Card 3: Accounting --- */}
             <Link to="/services/accounting" className="service-card-link">
               <div className="service-card">
                 <img src="https://snthanvi.in/wp-content/uploads/2024/02/2.webp" alt="Accounting Services" />
                 <h3 className='services-h3'>ACCOUNTING</h3>
                 <ul className="list-items">
                     <li>Part time Accounting</li>
                     <li>Book Keeping</li>
                     <li>Balance Sheet</li>
                     <li>Profit & Loss</li>
                     <li>Digital Signet</li>
                     <li>Pan card</li>
                 </ul>
               </div>
             </Link>
             {/* --- Existing Service Card 4: EPF Services --- */}
             <Link to="/services/epf" className="service-card-link">
               <div className="service-card">
                 <img src="https://media.assettype.com/outlookbusiness/import/uploadimage/library/16_9/16_9_5/IMAGE_1649068012.webp?w=640&auto=format%2Ccompress&fit=max&format=webp&dpr=1.0" alt="EPF Services" />
                 <h3 className='services-h3'>EPF Services</h3>
                 <ul className="list-items">
                     <li>PF Withdrawal</li>
                     <li>UAN Activation</li>
                     <li>Account Transfer</li>
                     <li>Aadhar Link</li>
                     <li>Passbook</li>
                     <li>Track Claim</li>
                 </ul>
               </div>
             </Link>

             {/* --- New Service Card 1: Domestic Business - Incorporation --- */}
             <Link to="/services/business-incorporation" className="service-card-link">
               <div className="service-card">
                 <img src="https://i.ibb.co/tTJ2S3XG/image-2.png" alt="Business Incorporation Services" /> {/* Replace with an appropriate image URL */}
                 <h3 className='services-h3'>BUSINESS INCORPORATION</h3>
                 <ul className="list-items">
                     <li>Public Limited Company</li>
                     <li>Private Limited Company</li>
                     <li>One Person Company</li>
                     <li>Section 8 Company</li>
                     <li>LIAISON OFFICE</li>
                     <li>And More...</li> {/* Indicate more services on the dedicated page */}
                 </ul>
               </div>
             </Link>
             {/* --- End New Service Card 1 --- */}

             {/* --- New Service Card 2: Bookkeeping (Detailed) --- */}
             <Link to="/services/detailed-bookkeeping" className="service-card-link">
               <div className="service-card">
                 <img src="https://i.ibb.co/Xrd5XSnq/image-3.png" alt="Detailed Bookkeeping Services" /> {/* Replace with an appropriate image URL */}
                 <h3 className='services-h3'>DETAILED BOOKKEEPING</h3>
                 <ul className="list-items">
                     <li>Onsite/Remote Accounting</li>
                     <li>Tax Compliances Filing</li>
                     <li>Payroll Management</li>
                     <li>Stock Management</li>
                     <li>Financial Budgeting</li>
                     <li>And More...</li>
                 </ul>
               </div>
             </Link>
             {/* --- End New Service Card 2 --- */}

             {/* --- New Service Card 3: Income Tax (Advanced) --- */}
             <Link to="/services/advanced-income-tax" className="service-card-link">
               <div className="service-card">
                 <img src="https://taxguru.in/wp-content/uploads/2021/09/On-a-white-tablet-the-inscription-Income-Tax-on-the-background-of-accounting.jpg" alt="Advanced Income Tax Services" /> {/* Replace with an appropriate image URL */}
                 <h3 className='services-h3'>ADVANCED INCOME TAX</h3>
                 <ul className="list-items">
                     <li>Income Tax Assessments</li>
                     <li>Income Tax Notice & Rectifications</li>
                     <li>Exemption & Deduction Certifications</li>
                     <li>Valuations & Certifications</li>
                     <li>Income Tax Appeals & Revisions</li>
                     <li>And More...</li>
                 </ul>
               </div>
             </Link>
             {/* --- End New Service Card 3 --- */}

             {/* --- New Service Card 4: Industry Audit --- */}
             <Link to="/services/industry-audit" className="service-card-link">
               <div className="service-card">
                 <img src="https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/28oct/What-is-AUDIT.jpg" alt="Industry Audit Services" /> {/* Replace with an appropriate image URL */}
                 <h3 className='services-h3'>INDUSTRY AUDIT</h3>
                 <ul className="list-items">
                     <li>Income Tax Audit</li>
                     <li>Secretarial Audit</li>
                     <li>Public Limited Audit</li>
                     <li>Private Limited Audit</li>
                     <li>Financial Statement Audit</li>
                     <li>And More...</li>
                 </ul>
               </div>
             </Link>
             {/* --- End New Service Card 4 --- */}

             {/* --- New Service Card 5: Goods & Service Tax (Advanced) --- */}
             <Link to="/services/advanced-gst" className="service-card-link">
               <div className="service-card">
                 <img src="https://www.adanirealty.com/-/media/Project/Realty/Blogs/positive-and-negative-impact-of-gst-on-the-real-estate-industry" alt="Advanced GST Services" /> {/* Replace with an appropriate image URL */}
                 <h3 className='services-h3'>ADVANCED GST</h3>
                 <ul className="list-items">
                     <li>GST Cancellation & Revocation</li>
                     <li>GST Returns & Other Filing</li>
                     <li>GST Compliance Set-up & Management</li>
                     <li>GST Periodical Review & Reconciliations</li>
                     <li>GST Refunds</li>
                     <li>And More...</li>
                 </ul>
               </div>
             </Link>
             {/* --- End New Service Card 5 --- */}

             {/* --- New Service Card 6: Corporate Regulatory Affairs --- */}
             <Link to="/services/corporate-regulatory" className="service-card-link">
               <div className="service-card">
                 <img src="https://miro.medium.com/v2/resize:fit:740/1*BYhk79WAmo7DRJmlFLhmVg.jpeg" alt="Corporate Regulatory Affairs" /> {/* Replace with an appropriate image URL */}
                 <h3 className='services-h3'>CORPORATE REGULATORY AFFAIRS</h3>
                 <ul className="list-items">
                     <li>Annual Filing of Companies</li>
                     <li>Annual Filing of LLP</li>
                     <li>Company / LLP Strike Off</li>
                     <li>Transfer & Transmission of Shares</li>
                     <li>Increase of Share Capital</li>
                     <li>And More...</li>
                 </ul>
               </div>
             </Link>
             {/* --- End New Service Card 6 --- */}

          </div>
        </div>
      </section>

      {/* About Section - Remains the same */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <h2>About Us</h2>
            <p>Accountaxation services specializes in: Taxation, Accountancy & Corporate services...</p>
            <Link to="/about" className="learn-more">Read More</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;