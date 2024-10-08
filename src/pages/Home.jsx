import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        console.log('Fetched products:', data); // Add this line to log the data
        setProducts(data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Our Online Store</h1>
        <p>Find the best products for your needs</p>
      </div>
      {/* Check if products exist */}
      {products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default Home;
