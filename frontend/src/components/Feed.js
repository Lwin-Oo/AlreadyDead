import React from 'react';
import ProductCard from './ProductCard';
import '../styles/Feed.css';
import heroImage from '../assests/images/hero1.jpg'; 
import shirtImage from '../assests/images/tee.jpg'

// Product Data
const products = [
  { id: 1, name: 'Shirt', price: '$200', img: shirtImage },
  { id: 2, name: 'Shirt', price: '$50', img: shirtImage },
  { id: 3, name: 'Shirt', price: '$50', img: shirtImage },
  { id: 4, name: 'Shirt', price: '$50', img: shirtImage },
  { id: 5, name: 'Shirt', price: '$50', img: shirtImage },
  { id: 6, name: 'Shirt', price: '$50', img: shirtImage },
  { id: 7, name: 'Shirt', price: '$50', img: shirtImage },
  { id: 8, name: 'Shirt', price: '$50', img: shirtImage },
];

const Feed = () => {
  return (
    <div className="feed">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <div className="hero-content">
        </div>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
