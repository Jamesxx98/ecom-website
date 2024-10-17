// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useContext } from 'react';
import ProductList from '../components/ProductList';
import { AppContext } from '../context/AppContext';
import Image from '../assets/os.jpg'; 

const Home = () => {
  const [products, setProducts] = useState([]); 
  const { addToCart } = useContext(AppContext); 

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
      
      
      <ProductList products={products} addToCart={addToCart} />
      
     
      <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f1f1f1', marginTop: '50px' }}>
        <p>&copy; 2024 Our Online Store. All rights reserved.</p>
        <p>
          <a href="/about">About Us</a> | <a href="/contact">Contact</a> | <a href="/privacy">Privacy Policy</a>
        </p>
      </footer>
    </div> 
  );
};

export default Home;
