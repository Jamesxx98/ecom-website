import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';


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
        <p>Find the best products for your needs</p>
      </div>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
