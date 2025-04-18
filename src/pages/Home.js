import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom'; // Link is already imported
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

             {/* --- Service Card 1: Wrapped in Link --- */}
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
             {/* --- End Service Card 1 --- */}

             {/* --- Service Card 2: Wrapped in Link --- */}
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
             {/* --- End Service Card 2 --- */}

             {/* --- Service Card 3: Wrapped in Link --- */}
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
             {/* --- End Service Card 3 --- */}

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
