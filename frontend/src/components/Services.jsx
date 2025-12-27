import React from 'react';
import { 
  Scale, 
  Gavel, 
  Building2, 
  HardHat, 
  FileText, 
  Landmark, 
  ShieldAlert, 
  Briefcase, 
  BookOpen, 
  Users, 
  FileCheck,
  Rocket,
  ArrowRight
} from 'lucide-react';
import { services } from '../mockData';

const iconMap = {
  Scale: Scale,
  Gavel: Gavel,
  Building2: Building2,
  HardHat: HardHat,
  FileText: FileText,
  Landmark: Landmark,
  ShieldAlert: ShieldAlert,
  Briefcase: Briefcase,
  BookOpen: BookOpen,
  Users: Users,
  FileCheck: FileCheck
};

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">OUR EXPERTISE</span>
          <h2 className="section-title">Comprehensive Legal Services</h2>
          <p className="section-description">
            Strategic legal counsel across diverse practice areas, tailored to your specific needs
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div key={service.id} className="service-card">
                <div className="service-icon-wrapper">
                  <IconComponent className="service-icon" size={32} />
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <span className="service-subtitle">{service.subtitle}</span>
                  <p className="service-description">{service.description}</p>
                  <button className="service-link">
                    Learn More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;