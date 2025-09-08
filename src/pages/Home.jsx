import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Logo from '../components/Logo';
import { products } from '../data/products';
import './Home.css';

const Home = () => {
  // Get featured products (first 3 products)
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content fade-in">
            <div className="hero-logo">
              <Logo size="large" imageOnly={true} showTagline={true} />
            </div>
            <p>
              Discover handmade laptop and iPad cases crafted with love, attention to detail, 
              and unique patterns that reflect your personal style. Each piece is carefully 
              created to protect your devices while making a statement.
            </p>
            <div className="hero-cta">
              <Link to="/products" className="btn">
                Shop All Products
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products section">
        <div className="container">
          <h2 className="text-center">Featured Products</h2>
          <p className="text-center mb-4" style={{color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto 3rem'}}>
            Handpicked selection of our most popular laptop and iPad cases, 
            each one unique and made with premium materials.
          </p>
          <div className="grid grid-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/products" className="btn btn-secondary">
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview section-alt">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Handmade with Love</h2>
              <p>
                Every <Logo textOnly={true} /> case is lovingly handcrafted by a passionate student artisan 
                from Szada, Hungary, who brings creativity and dedication to creating 
                functional beauty. We believe that your device case should be as unique 
                as you are.
              </p>
              <p>
                Using carefully selected materials and passion-driven techniques, each case is 
                designed to provide superior protection while showcasing beautiful, 
                one-of-a-kind patterns that you won't find anywhere else.
              </p>
              <Link to="/about" className="btn">
                Learn More About Us
              </Link>
            </div>
            <div className="about-image">
              <img 
                src="https://via.placeholder.com/500x400/D4A574/FFFFFF?text=Artisan+at+Work" 
                alt="Artisan crafting a laptop case"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/500x400/D4A574/FFFFFF?text=Artisan+at+Work';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values section">
        <div className="container">
          <h2>Why Choose <Logo textOnly={true} />?</h2>
          <div className="values-grid">
            <div className="value-item fade-in">
              <div className="value-icon">🎨</div>
              <h3>Unique Designs</h3>
              <p>
                Each case features original patterns and designs that you won't find 
                anywhere else. Express your individuality with our artistic creations.
              </p>
            </div>
            <div className="value-item fade-in">
              <div className="value-icon">🛡️</div>
              <h3>Superior Protection</h3>
              <p>
                Handcrafted with premium materials and thoughtful design to keep your 
                devices safe from scratches, bumps, and everyday wear.
              </p>
            </div>
            <div className="value-item fade-in">
              <div className="value-icon">♻️</div>
              <h3>Sustainable Materials</h3>
              <p>
                We use eco-friendly, sustainable materials whenever possible, creating 
                beautiful cases that are kind to both you and the environment.
              </p>
            </div>
            <div className="value-item fade-in">
              <div className="value-icon">✨</div>
              <h3>Custom Orders</h3>
              <p>
                Have a specific vision? We love creating custom pieces tailored to your 
                exact specifications, colors, and style preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section section-alt">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Find Your Perfect Case?</h2>
            <p>
              Browse our collection of handmade laptop and iPad cases, or get in touch 
              to discuss a custom order made just for you.
            </p>
            <div className="cta-buttons">
              <Link to="/products" className="btn">
                Shop Now
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Custom Order
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
