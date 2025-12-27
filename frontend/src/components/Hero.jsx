import React from 'react';
import { ArrowRight, Scale, Shield } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1648772974966-70554aaf22ff?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBTdXByZW1lJTIwQ291cnR8ZW58MHx8fHwxNzY2ODQ1Mjk0fDA&ixlib=rb-4.1.0&q=85"
          alt="Supreme Court of India"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <Scale size={20} />
          <span>Trusted Legal Excellence Since Inception</span>
        </div>

        <h1 className="hero-title">
          LEGAL EXCELLENCE
          <br />
          <span className="hero-title-accent">DELIVERED</span>
        </h1>

        <p className="hero-description">
          Comprehensive legal services across North India with expertise in commercial litigation, 
          arbitration, and dispute resolution before the Supreme Court of India, High Courts, and specialized tribunals.
        </p>

        <div className="hero-stats">
          <div className="stat-item">
            <Shield className="stat-icon" />
            <div>
              <div className="stat-number">Supreme Court</div>
              <div className="stat-label">Representation</div>
            </div>
          </div>
          <div className="stat-item">
            <Scale className="stat-icon" />
            <div>
              <div className="stat-number">12+ Practice Areas</div>
              <div className="stat-label">Legal Expertise</div>
            </div>
          </div>
        </div>

        <div className="hero-cta-group">
          <button onClick={scrollToContact} className="btn-primary">
            Schedule Consultation
            <ArrowRight size={18} />
          </button>
          <button onClick={scrollToServices} className="btn-secondary">
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;