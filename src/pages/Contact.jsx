import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    orderType: 'general'
  });

  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Since this is a static site, we'll simulate form submission
    // In a real implementation, you'd send this to a backend service or use a service like Formspree
    setFormStatus('sending');
    
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        orderType: 'general'
      });
      
      setTimeout(() => {
        setFormStatus('');
      }, 5000);
    }, 1000);
  };

  return (
    <div className="contact-page">
      <div className="container">
        {/* Header */}
        <section className="contact-header">
          <h1>Get in Touch</h1>
          <p>
            We'd love to hear from you! Whether you have questions about our products, 
            want to discuss a custom order, or just want to say hello, don't hesitate to reach out.
          </p>
        </section>

        <div className="contact-content">
          {/* Contact Form */}
          <section className="contact-form-section">
            <div className="form-container">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="orderType">Inquiry Type</label>
                  <select
                    id="orderType"
                    name="orderType"
                    value={formData.orderType}
                    onChange={handleInputChange}
                  >
                    <option value="general">General Question</option>
                    <option value="custom">Custom Order</option>
                    <option value="existing">Existing Product Question</option>
                    <option value="shipping">Shipping & Returns</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Tell us more about your inquiry. For custom orders, please include device model, preferred colors, patterns, and any special requirements."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn submit-btn"
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {formStatus === 'success' && (
                  <div className="form-success">
                    <span className="success-icon">✅</span>
                    <p>Thank you for your message! We'll get back to you within 24 hours.</p>
                  </div>
                )}
              </form>
            </div>
          </section>

          {/* Contact Info */}
          <section className="contact-info-section">
            <div className="contact-info">
              <h2>Contact Information</h2>
              
              <div className="info-item">
                <div className="info-icon">📧</div>
                <div className="info-content">
                  <h3>Email</h3>
                  <p>hello@patternia.com</p>
                  <span>We respond within 24 hours</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📱</div>
                <div className="info-content">
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                  <span>Mon-Fri, 9AM-5PM EST</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">🏠</div>
                <div className="info-content">
                  <h3>Studio</h3>
                  <p>Szada, Hungary</p>
                  <span>Student studio - by appointment</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">🚚</div>
                <div className="info-content">
                  <h3>Shipping</h3>
                  <p>Hungary delivery</p>
                  <span>Free shipping on orders over 15,000 HUF</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="social-section">
              <h3>Follow Our Journey</h3>
              <p>See behind-the-scenes content, new designs, and customer features on our social media.</p>
              <div className="social-links">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="social-icon">📷</span>
                  <span>Instagram</span>
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="social-icon">📘</span>
                  <span>Facebook</span>
                </a>
                <a 
                  href="https://pinterest.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="social-icon">📌</span>
                  <span>Pinterest</span>
                </a>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="faq-link-section">
              <h3>Frequently Asked Questions</h3>
              <p>Looking for quick answers? Check out our FAQ section for common questions about orders, shipping, and customization.</p>
              <a href="/faq" className="btn btn-secondary">
                View FAQ
              </a>
            </div>
          </section>
        </div>

        {/* Custom Order Info */}
        <section className="custom-order-info section-alt">
          <div className="custom-info-content">
            <h2>Custom Orders</h2>
            <p>
              We love creating unique, personalized cases! Here's what you need to know about custom orders:
            </p>
            
            <div className="custom-features">
              <div className="custom-feature">
                <span className="feature-icon">🎨</span>
                <div>
                  <h4>Design Consultation</h4>
                  <p>We'll work with you to create the perfect design, pattern, and color combination</p>
                </div>
              </div>
              <div className="custom-feature">
                <span className="feature-icon">⏱️</span>
                <div>
                  <h4>2-3 Week Timeline</h4>
                  <p>Custom orders typically take 2-3 weeks from design approval (depending on study schedule)</p>
                </div>
              </div>
              <div className="custom-feature">
                <span className="feature-icon">💰</span>
                <div>
                  <h4>Starting at 12,000 HUF</h4>
                  <p>Custom laptop cases start at 20,000 HUF, iPad cases at 12,000 HUF (depending on complexity)</p>
                </div>
              </div>
              <div className="custom-feature">
                <span className="feature-icon">📏</span>
                <div>
                  <h4>Perfect Fit</h4>
                  <p>Precise measurements ensure your case fits your device perfectly</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
