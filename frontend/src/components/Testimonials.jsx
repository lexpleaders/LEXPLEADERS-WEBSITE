import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../mockData';

const Testimonials = () => {
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