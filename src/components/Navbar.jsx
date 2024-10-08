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
    </nav>
  );
};

export default Navbar;

