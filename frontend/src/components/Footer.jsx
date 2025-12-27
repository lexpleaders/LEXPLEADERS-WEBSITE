import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { whatsappNumber } from '../mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const practiceAreas = [
    'Commercial Litigation',
    'Arbitration & ADR',
    'Real Estate & RERA',
    'Infrastructure Law',
    'Insolvency & Bankruptcy',
    'Banking & Finance'
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-col">
            <img 
              src="https://customer-assets.emergentagent.com/job_c527c564-4a76-43f9-9636-63c3fbd13344/artifacts/8w1w4dns_LEXPLEADERS%20FINAL%20LOGO.png" 
              alt="LEX PLEADERS INDIA" 
              className="footer-logo"
            />
            <p className="footer-about">
              Comprehensive legal services across North India with expertise in commercial litigation, 
              arbitration, and dispute resolution.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="footer-col">
            <h4 className="footer-title">Practice Areas</h4>
            <ul className="footer-links">
              {practiceAreas.map((area, index) => (
                <li key={index}>
                  <button onClick={() => scrollToSection('#services')} className="footer-link">
                    {area}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button onClick={() => scrollToSection(link.href)} className="footer-link">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4 className="footer-title">Contact Us</h4>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <Phone size={18} />
                <a href={`tel:${whatsappNumber}`}>{whatsappNumber}</a>
              </div>
              <div className="footer-contact-item">
                <Mail size={18} />
                <a href="mailto:info@lexpleaders.in">info@lexpleaders.in</a>
              </div>
              <div className="footer-contact-item">
                <MapPin size={18} />
                <span>Delhi NCR, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} LEX PLEADERS INDIA PRIVATE LIMITED. All rights reserved.
          </p>
          <div className="footer-legal">
            <button className="footer-legal-link">Privacy Policy</button>
            <span className="footer-divider">|</span>
            <button className="footer-legal-link">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;