import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Calendar } from 'lucide-react';
import { whatsappNumber } from '../mockData';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [consultationData, setConsultationData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    caseType: '',
    details: ''
  });

  const [loading, setLoading] = useState(false);
  const [consultationLoading, setConsultationLoading] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post(`${API}/contact`, formData);
      
      if (response.data.success) {
        toast.success(response.data.message);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Contact form error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleConsultationSubmit = async (e) => {
    e.preventDefault();
    setConsultationLoading(true);
    
    try {
      const response = await axios.post(`${API}/consultations`, consultationData);
      
      if (response.data.success) {
        toast.success(response.data.message);
        setConsultationData({
          name: '',
          email: '',
          phone: '',
          preferredDate: '',
          preferredTime: '',
          caseType: '',
          details: ''
        });
      }
    } catch (error) {
      toast.error('Failed to book consultation. Please try again.');
      console.error('Consultation booking error:', error);
    } finally {
      setConsultationLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">GET IN TOUCH</span>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-description">
            Reach out to us for legal consultation and expert advice
          </p>
        </div>

        <div className="contact-wrapper">
          {/* Contact Information */}
          <div className="contact-info">
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-text">
              Get in touch with us for professional legal services and consultation.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <Phone className="contact-icon" />
                <div>
                  <h4 className="contact-detail-label">Phone</h4>
                  <a href={`tel:${whatsappNumber}`} className="contact-detail-value">{whatsappNumber}</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <Mail className="contact-icon" />
                <div>
                  <h4 className="contact-detail-label">Email</h4>
                  <a href="mailto:info@lexpleaders.in" className="contact-detail-value">info@lexpleaders.in</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <MapPin className="contact-icon" />
                <div>
                  <h4 className="contact-detail-label">Location</h4>
                  <p className="contact-detail-value">Delhi NCR, India</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a 
              href={`https://wa.me/${whatsappNumber.replace(/\+/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-large"
            >
              <Phone size={20} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Forms */}
          <div className="contact-forms">
            {/* Quick Contact Form */}
            <div className="form-card">
              <h3 className="form-title">Send us a Message</h3>
              <form onSubmit={handleContactSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Name *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone *</label>
                    <input 
                      type="tel" 
                      className="form-input" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input 
                    type="email" 
                    className="form-input" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Subject *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea 
                    className="form-textarea" 
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary">
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>

            {/* Consultation Booking Form */}
            <div className="form-card">
              <h3 className="form-title">
                <Calendar size={24} />
                Book Consultation
              </h3>
              <form onSubmit={handleConsultationSubmit} className="contact-form">
                <div className="form-group">
                  <label className="form-label">Name *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    value={consultationData.name}
                    onChange={(e) => setConsultationData({...consultationData, name: e.target.value})}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input 
                      type="email" 
                      className="form-input" 
                      value={consultationData.email}
                      onChange={(e) => setConsultationData({...consultationData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone *</label>
                    <input 
                      type="tel" 
                      className="form-input" 
                      value={consultationData.phone}
                      onChange={(e) => setConsultationData({...consultationData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Preferred Date *</label>
                    <input 
                      type="date" 
                      className="form-input" 
                      value={consultationData.preferredDate}
                      onChange={(e) => setConsultationData({...consultationData, preferredDate: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Preferred Time *</label>
                    <input 
                      type="time" 
                      className="form-input" 
                      value={consultationData.preferredTime}
                      onChange={(e) => setConsultationData({...consultationData, preferredTime: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Case Type *</label>
                  <select 
                    className="form-input" 
                    value={consultationData.caseType}
                    onChange={(e) => setConsultationData({...consultationData, caseType: e.target.value})}
                    required
                  >
                    <option value="">Select a practice area</option>
                    <option value="commercial">Commercial & Corporate Litigation</option>
                    <option value="arbitration">Arbitration & ADR</option>
                    <option value="realestate">Real Estate & RERA</option>
                    <option value="infrastructure">Infrastructure & Construction</option>
                    <option value="insolvency">Insolvency & Bankruptcy</option>
                    <option value="banking">Banking & Finance</option>
                    <option value="whitecol">White Collar Crime</option>
                    <option value="civil">Civil & Criminal</option>
                    <option value="constitutional">Constitutional Law</option>
                    <option value="family">Family & Matrimonial</option>
                    <option value="corporate">Corporate Advisory</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Case Details *</label>
                  <textarea 
                    className="form-textarea" 
                    rows="3"
                    value={consultationData.details}
                    onChange={(e) => setConsultationData({...consultationData, details: e.target.value})}
                    placeholder="Brief description of your legal matter"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary">
                  Book Consultation
                  <Calendar size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="map-section">
          <h3 className="map-title">Our Location</h3>
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1702891234567!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LEX PLEADERS Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;