// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import Image from '../assets/hero-bgg.jpg'; 

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Our Online Store</h1>
        <h3>Find the best products for your needs</h3>
  
        <img 
          src={Image} 
          alt="Store Image" 
          style={{ width: '100%', height: '500px', objectFit: 'cover' }} 
        />
      </div>
      <ProductList products={products} />
    </div>
  );
};

export default Home;

