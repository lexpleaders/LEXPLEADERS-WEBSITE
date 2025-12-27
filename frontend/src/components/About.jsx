import React from 'react';
import { Award, Target, Users, TrendingUp } from 'lucide-react';
import { officeImages } from '../mockData';

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Commitment to the highest standards of legal practice"
    },
    {
      icon: Target,
      title: "Result-Driven",
      description: "Strategic approach focused on achieving client objectives"
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Personalized attention and tailored legal solutions"
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Modern legal solutions for contemporary challenges"
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-content-wrapper">
          {/* Left Content */}
          <div className="about-text-content">
            <span className="section-subtitle">ABOUT US</span>
            <h2 className="section-title">LEX PLEADERS INDIA PRIVATE LIMITED</h2>
            <p className="about-description">
              We are a full-service law firm providing comprehensive legal services across North India, 
              with a strong focus on commercial litigation, arbitration, and dispute resolution before 
              the Supreme Court of India, High Courts, and specialized tribunals.
            </p>
            <p className="about-description">
              Our practice encompasses a wide range of legal services including real estate and infrastructure 
              disputes, RERA compliance, corporate advisory, insolvency proceedings, banking disputes, and 
              regulatory compliance. We also handle civil and criminal litigation, white-collar crime, and 
              family law matters.
            </p>
            <p className="about-description">
              With a client-centric and result-driven approach, we cater to corporates, startups, real estate 
              developers, investors, and individuals seeking reliable, efficient, and solution-oriented legal 
              representation.
            </p>

            <div className="values-grid">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="value-item">
                    <IconComponent className="value-icon" size={24} />
                    <div>
                      <h4 className="value-title">{value.title}</h4>
                      <p className="value-description">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Office Images */}
          <div className="about-images-grid">
            {officeImages.map((image, index) => (
              <div key={index} className="about-image-wrapper">
                <img 
                  src={image} 
                  alt={`LEX PLEADERS Office ${index + 1}`}
                  className="about-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;