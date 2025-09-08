import React from 'react';
import Logo from '../components/Logo';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <Logo size="large" imageOnly={true} showTagline={true} />
            <p className="hero-subtitle">
              Where artistry meets functionality in every handmade case
            </p>
          </div>
        </section>

        {/* Main Story Section */}
        <section className="story-section section">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                <Logo textOnly={true} /> was born from a simple desire: to create beautiful, functional 
                cases that protect your most important devices while expressing your unique 
                style. What started as a student's creative hobby in Szada, Hungary, has 
                grown into a passion for crafting one-of-a-kind pieces that bring joy to 
                everyday technology use.
              </p>
              <p>
                Each case tells a story through carefully chosen patterns, premium materials, 
                and meticulous attention to detail. We believe that the items you carry 
                should be as unique and special as you are.
              </p>
            </div>
            <div className="story-image">
              <img 
                src="https://via.placeholder.com/500x400/D4A574/FFFFFF?text=Our+Workshop" 
                alt="PatternNia workshop with fabric and tools"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/500x400/D4A574/FFFFFF?text=Our+Workshop';
                }}
              />
            </div>
          </div>
        </section>

        {/* Artisan Section */}
        <section className="artisan-section section-alt">
          <div className="artisan-content">
            <div className="artisan-image">
              <img 
                src="https://via.placeholder.com/400x500/8B7355/FFFFFF?text=Student+Artisan+from+Szada" 
                alt="Student artisan working on a handmade case in Szada, Hungary"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x500/8B7355/FFFFFF?text=Student+Artisan+from+Szada';
                }}
              />
            </div>
            <div className="artisan-text">
              <h2>Meet Our Artisan</h2>
              <p>
                Behind every <Logo textOnly={true} /> case is a passionate student from Szada, Hungary, 
                who discovered her love for textile arts and handmade craftsmanship during 
                her studies. What started as a creative outlet has grown into a meaningful 
                pursuit that combines her artistic vision with functional design.
              </p>
              <p>
                Her journey began with experimenting with different fabrics and patterns 
                as a hobby, but she found her true calling in creating protective cases 
                that combine beauty with functionality. Each case is carefully planned, 
                cut, sewn, and finished by hand in her studio in Szada, Hungary.
              </p>
              <div className="artisan-credentials">
                <div className="credential">
                  <span className="credential-icon">🎓</span>
                  <div>
                    <h4>Currently Studying</h4>
                    <p>Pursuing higher education while crafting</p>
                  </div>
                </div>
                <div className="credential">
                  <span className="credential-icon">🏆</span>
                  <div>
                    <h4>Self-Taught Artisan</h4>
                    <p>Learned through passion and practice</p>
                  </div>
                </div>
                <div className="credential">
                  <span className="credential-icon">❤️</span>
                  <div>
                    <h4>Passion Project</h4>
                    <p>Creating beautiful, functional cases</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section section">
          <h2 className="text-center">Our Crafting Process</h2>
          <p className="text-center mb-4" style={{color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto 3rem'}}>
            Every <Logo textOnly={true} /> case goes through a careful, multi-step process to ensure 
            the highest quality and attention to detail.
          </p>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Design & Planning</h3>
                <p>
                  Each design starts with inspiration from nature, art, or cultural patterns. 
                  We carefully plan the layout and select the perfect color combinations.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Material Selection</h3>
                <p>
                  We source only premium, sustainable materials including organic cotton, 
                  genuine leather, and eco-friendly padding for maximum protection.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Cutting & Preparation</h3>
                <p>
                  Each piece is precisely cut by hand, ensuring perfect proportions and 
                  attention to the fabric's natural grain and pattern alignment.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Hand Assembly</h3>
                <p>
                  Using traditional sewing techniques and modern reinforcement methods, 
                  each case is carefully assembled with strong, beautiful stitching.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Quality Control</h3>
                <p>
                  Every finished case undergoes thorough inspection to ensure it meets 
                  our high standards for durability, appearance, and functionality.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">6</div>
              <div className="step-content">
                <h3>Finishing Touches</h3>
                <p>
                  Final details like closures, pockets, and protective elements are added 
                  before careful packaging and preparation for shipping.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section section-alt">
          <h2 className="text-center">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>
                We're committed to using eco-friendly materials and sustainable practices 
                in our crafting process, minimizing waste and environmental impact.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">✋</div>
              <h3>Handmade Quality</h3>
              <p>
                Every case is made entirely by hand using traditional techniques combined 
                with modern materials for superior quality and durability.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎨</div>
              <h3>Unique Design</h3>
              <p>
                We create original patterns and designs that you won't find anywhere else, 
                ensuring your case is as unique as you are.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">💝</div>
              <h3>Personal Touch</h3>
              <p>
                From custom orders to personalized details, we love adding that special 
                personal touch that makes each piece truly yours.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="contact-cta section">
          <div className="cta-content text-center">
            <h2>Want to Learn More?</h2>
            <p>
              We'd love to hear from you! Whether you have questions about our process, 
              want to discuss a custom order, or just want to say hello, don't hesitate to reach out.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn">Get in Touch</a>
              <a href="/products" className="btn btn-secondary">Shop Our Collection</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
