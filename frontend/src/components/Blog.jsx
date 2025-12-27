import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { blogPosts } from '../mockData';

const Blog = () => {
  return (
    <section className="blog-section" id="blog">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">LEGAL INSIGHTS</span>
          <h2 className="section-title">Latest Updates & Articles</h2>
          <p className="section-description">
            Stay informed with our latest legal insights, case analyses, and regulatory updates
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image-wrapper">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="blog-image"
                />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <Calendar size={14} />
                  <span>{new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <button className="blog-read-more">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;