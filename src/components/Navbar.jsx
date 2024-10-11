// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/category/electronics">Electronics</Link>
      <Link to="/category/jewelery">Jewelery</Link>
      <Link to="/category/men's clothing">Men Clothing</Link>
      <Link to="/category/women's clothing">Women Clothing</Link>
      <button className="signup-button" >
                Sign Up
              </button>
              <button className="login-button" >
                Login
              </button>
    </nav>
  );
};

export default Navbar;

