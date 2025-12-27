import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { teamMembers } from '../mockData';

const Team = () => {
  return (
    <section className="team-section" id="team">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">OUR TEAM</span>
          <h2 className="section-title">Expert Legal Professionals</h2>
          <p className="section-description">
            Our team of experienced advocates and legal professionals dedicated to your success
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-image-wrapper">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="team-image"
                />
                <div className="team-overlay">
                  <div className="team-social">
                    <button className="social-btn">
                      <Mail size={18} />
                    </button>
                    <button className="social-btn">
                      <Linkedin size={18} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="team-content">
                <h3 className="team-name">{member.name}</h3>
                <span className="team-designation">{member.designation}</span>
                <p className="team-specialization">{member.specialization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;