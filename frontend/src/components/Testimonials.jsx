import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get(`${API}/testimonials`);
      setTestimonials(response.data);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">CLIENT TESTIMONIALS</span>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-description">Loading...</p>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">CLIENT TESTIMONIALS</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-description">
            Trusted by leading corporates, developers, and individuals across Delhi-NCR
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <Quote className="testimonial-quote-icon" size={40} />
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="star-icon" size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div>
                  <h4 className="author-name">{testimonial.name}</h4>
                  <span className="author-company">{testimonial.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;