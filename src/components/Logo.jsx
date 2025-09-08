import React from 'react';
import logoImage from '../assets/2701CB2E-25B9-489E-8FC2-85D581F9C746.png';
import './Logo.css';

const Logo = ({ 
  size = 'medium', 
  showText = true, 
  showTagline = true, 
  className = '',
  textOnly = false,
  imageOnly = false  // New prop for using only the logo image
}) => {
  if (textOnly) {
    return (
      <div className={`logo-text-only ${className}`}>
        <span className="brand-name">PatternNia</span>
      </div>
    );
  }

  if (imageOnly) {
    return (
      <div className={`logo-container logo-image-only ${size} ${className}`}>
        <img 
          src={logoImage} 
          alt="PatternNia Logo" 
          className="logo-image"
        />
        {showTagline && (
          <div className="logo-text-container">
            <span className="logo-tagline">Handmade with Love</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`logo-container ${size} ${className}`}>
      <img 
        src={logoImage} 
        alt="PatternNia Logo" 
        className="logo-image"
      />
      {showText && (
        <div className="logo-text-container">
          <span className="logo-text">PatternNia</span>
          {showTagline && (
            <span className="logo-tagline">Handmade with Love</span>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;
