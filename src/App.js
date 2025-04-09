import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import RegistrationServices from './pages/RegistrationServices';
import TaxationServices from './pages/TaxationServices';
import AccountingServices from './pages/AccountingServices';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/registration" element={<RegistrationServices />} />
        <Route path="/services/taxation" element={<TaxationServices />} />     {/* <-- Add Taxation route */}
        <Route path="/services/accounting" element={<AccountingServices />} /> {/* <-- Add Accounting route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;