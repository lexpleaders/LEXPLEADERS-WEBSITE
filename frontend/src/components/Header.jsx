import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { whatsappNumber } from '../mockData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header-main">
      <div className="header-container">
        <div className="header-logo">
          <img 
            src="https://customer-assets.emergentagent.com/job_c527c564-4a76-43f9-9636-63c3fbd13344/artifacts/1d8yvx81_ChatGPT%20Image%20Dec%2026%2C%202025%2C%2005_47_29%20PM.png" 
            alt="LEX PLEADERS INDIA" 
            className="logo-image"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="nav-link"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* WhatsApp CTA */}
        <div className="header-cta">
          <a 
            href={`https://wa.me/${whatsappNumber.replace(/\+/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <Phone size={18} />
            <span>Contact Us</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="nav-mobile">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="nav-link-mobile"
            >
              {link.name}
            </button>
          ))}
          <a 
            href={`https://wa.me/${whatsappNumber.replace(/\+/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-mobile"
          >
            <Phone size={18} />
            <span>Contact Us</span>
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;