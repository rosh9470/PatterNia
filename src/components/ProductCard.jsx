import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, showDetails = true }) => {
  const {
    id,
    name,
    category,
    size,
    price,
    description,
    image,
    features,
    inStock
  } = product;

  const handleImageError = (e) => {
    // Fallback to a placeholder image if the product image fails to load
    e.target.src = `https://via.placeholder.com/400x300/D4A574/FFFFFF?text=${encodeURIComponent(name)}`;
  };

  return (
    <div className={`product-card ${!inStock ? 'out-of-stock' : ''}`}>
      <div className="product-image-container">
        <img 
          src={image} 
          alt={name}
          className="product-image"
          onError={handleImageError}
        />
        {!inStock && (
          <div className="stock-overlay">
            <span>Out of Stock</span>
          </div>
        )}
        <div className="category-badge">{category}</div>
      </div>

      <div className="product-content">
        <div className="product-header">
          <h3 className="product-name">{name}</h3>
          <span className="product-size">{size}</span>
        </div>

        {showDetails && (
          <>
            <p className="product-description">{description}</p>
            
            {features && features.length > 0 && (
              <ul className="product-features">
                {features.slice(0, 3).map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
                {features.length > 3 && (
                  <li className="more-features">+{features.length - 3} more</li>
                )}
              </ul>
            )}
          </>
        )}

        <div className="product-footer">
          <div className="product-price">
            <span className="price">{price.toLocaleString()} HUF</span>
            <span className="price-note">Handmade</span>
          </div>
          
          <div className="product-actions">
            {inStock ? (
              <>
                <button className="btn btn-secondary btn-sm">View Details</button>
                <button className="btn btn-sm">Contact for Order</button>
              </>
            ) : (
              <button className="btn btn-secondary btn-sm" disabled>
                Notify When Available
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
