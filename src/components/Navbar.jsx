// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const { user, login, signup, cart } = useContext(AppContext); // Access the context

  return (
    <nav className="navbar">
      {/* Simple navigation links */}
      <Link to="/">Home</Link>
      <Link to="/category/electronics">Electronics</Link>
      <Link to="/category/jewelery">Jewellery</Link>
      <Link to="/category/men's clothing">Men Clothing</Link>
      <Link to="/category/women's clothing">Women Clothing</Link>

      {/* Display cart count */}
      <div>Cart ({cart.length})</div>

      {/* If user is logged in, show a welcome message, otherwise show login/signup buttons */}
      {user ? (
        <span>Welcome, {user.email}</span>
      ) : (
        <>
          <button className="signup-button" onClick={() => signup({ email: 'test@test.com' })}>
            Sign Up
          </button>
          <button className="login-button" onClick={() => login('test@test.com', 'password')}>
            Login
          </button>
        </>
      )}
    </nav>
  );
};

export default Navbar;