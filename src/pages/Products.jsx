import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import './Products.css';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const [sortBy, setSortBy] = useState('name');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter and sort products
  useEffect(() => {
    let filtered = [...products];

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(product => product.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.size.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(filtered);
  }, [activeCategory, sortBy, searchTerm]);

  // Update URL params when category changes
  useEffect(() => {
    if (activeCategory === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', activeCategory);
    }
    setSearchParams(searchParams, { replace: true });
  }, [activeCategory, searchParams, setSearchParams]);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearFilters = () => {
    setActiveCategory('all');
    setSearchTerm('');
    setSortBy('name');
  };

  return (
    <div className="products-page">
      <div className="container">
        {/* Page Header */}
        <section className="products-header">
          <h1>Our Products</h1>
          <p>
            Discover our complete collection of handmade laptop and iPad cases. 
            Each piece is carefully crafted with attention to detail and designed 
            to protect your devices in style.
          </p>
        </section>

        {/* Filters and Search */}
        <section className="products-filters">
          <div className="filters-container">
            {/* Search */}
            <div className="search-box">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
              />
              <span className="search-icon">🔍</span>
            </div>

            {/* Category Filter */}
            <div className="category-filter">
              <label>Category:</label>
              <div className="category-buttons">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="sort-filter">
              <label htmlFor="sort-select">Sort by:</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={handleSortChange}
                className="sort-select"
              >
                <option value="name">Name (A-Z)</option>
                <option value="price-low">Price (Low to High)</option>
                <option value="price-high">Price (High to Low)</option>
              </select>
            </div>

            {/* Clear Filters */}
            {(activeCategory !== 'all' || searchTerm || sortBy !== 'name') && (
              <button onClick={clearFilters} className="clear-filters-btn">
                Clear Filters
              </button>
            )}
          </div>
        </section>

        {/* Products Grid */}
        <section className="products-grid-section">
          {/* Results Summary */}
          <div className="results-summary">
            <p>
              Showing {filteredProducts.length} of {products.length} products
              {activeCategory !== 'all' && (
                <span> in {categories.find(c => c.id === activeCategory)?.name}</span>
              )}
              {searchTerm && (
                <span> matching "{searchTerm}"</span>
              )}
            </p>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="no-products">
              <div className="no-products-content">
                <h3>No products found</h3>
                <p>
                  {searchTerm
                    ? `No products match your search for "${searchTerm}"`
                    : `No products found in the selected category`
                  }
                </p>
                <button onClick={clearFilters} className="btn">
                  View All Products
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Custom Order CTA */}
        <section className="custom-order-cta">
          <div className="cta-card">
            <h3>Don't see what you're looking for?</h3>
            <p>
              We love creating custom pieces! Get in touch to discuss a personalized 
              laptop or iPad case made just for you.
            </p>
            <a href="/contact" className="btn">
              Request Custom Order
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
