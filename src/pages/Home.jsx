import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';  


const Home = () => {
  return (
    <div className="landing-container">
      {/* Hero section with welcome message */}
      <div className="hero">
        <h1>Welcome to Tracom's Online Store</h1>
        <p>Your one-stop shop for the best products!</p>
        
        {/* Button that links to the products page */}
        <Link to="/products" className="cta-button">
          Browse Products
        </Link>
      </div>
    </div>
  );
};

export default Home;
