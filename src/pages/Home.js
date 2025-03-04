import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router';
import IconList from "../components/IconList";
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div className="home">
      <Helmet>
        <title>Accountaxation | Expert Tax & Accounting Services</title>
        <meta name="description" content="Affordable taxation, accounting, and registration services across India. Contact us 24/7 for expert support!" />
        <meta name="keywords" content="tax services, accounting, GST registration, India" />
      </Helmet>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
        <h2 class="elementor-heading-title elementor-size-default">Accountaxation Services​</h2>
          <p>WE WORK WITH YOU NOT FOR YOU</p>
          <div>
            <IconList />
          </div>
          <button className="cta-button">Learn More</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className='services-h3'>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <img src="https://snthanvi.in/wp-content/uploads/2024/02/1.webp" alt="Service 1" />
              <h3 className='services-h3'>REGISTRATION​</h3>
              <div className="list-items">
                <p>
                    <li>GST Registration</li>
                    <li>Income Tax Registration</li>
                    <li>ESIC Registration</li>
                    <li>EPF Registration</li>
                    <li>MSME Registration</li>
                    <li>Udhyam Adhar Registration</li>
                </p>
              </div>
            </div>
            <div className="service-card">
              <img src="https://snthanvi.in/wp-content/uploads/2024/01/heap-of-american-money-cash-and-vintage-light-box.jpg" alt="Service 2" />
              <h3 className='services-h3'>TAXATION</h3>
              <div className="list-items">
                <p>
                    <li>GST Return</li>
                    <li>Income tax Return</li>
                    <li>TDS Return</li>
                    <li>ESIC Return</li>
                    <li>EPF Return</li>
                    <li>ROC Return</li>
                </p>
              </div>  
            </div>
            <div className="service-card">
              <img src="https://snthanvi.in/wp-content/uploads/2024/02/2.webp" alt="Service 3" />
              <h3 className='services-h3'>ACCOUNTING</h3>
              <div className="list-items">
                <p>
                    <li>Part time Accounting</li>
                    <li>Book Keeping</li>
                    <li>Balance Sheet</li>
                    <li>Profit & Loss</li>
                    <li>Digital Signet</li>
                    <li>Pan card</li>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <h2>About Us</h2>
            <p>Accountaxation services specializes in: Taxation, Accountancy & Corporate services in accordance with relevant law and accounting standards, tax advisory, ledger keeping, payroll and personnel, also the services related to companies and enterprises with various status of businesses, as well as for individuals. We are always available 24 x 7 to support and provide satisfactory services; all you need to do is call us from wherever you are in India</p>
            <Link to="/about" className="learn-more">Read More</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;