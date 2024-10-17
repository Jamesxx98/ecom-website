// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Create a context object for the application
export const AppContext = createContext();

// AppProvider component that will wrap the entire application to provide context values
export const AppProvider = ({ children }) => {
  // State for storing cart items. Initially an empty array.
  const [cart, setCart] = useState([]);

  // State for storing user information. Initially null (no user logged in).
  const [user, setUser] = useState(null);

  // Function to add a product to the cart.
  const addToCart = (product) => {
    setCart([...cart, product]);  // Append the new product to the existing cart
  };

  // Function to simulate a user signup. This would usually involve an API call to register a user.
  const signup = (newUser) => {
    setUser(newUser);  // Set the new user as the current user
  };

  // Function to simulate a user login. This would usually involve an API call to authenticate the user.
  const login = (email, password) => {
    // Perform a simple mock validation (you can expand this later)
    if (password === '123456') {  // Example password check, for now
      const mockUser = { email };  // Create a mock user object
      setUser(mockUser);  // Set the logged-in user
    } else {
      console.error('Invalid password');  // Handle invalid password scenario
    }
  };
  
  // Return the provider component, passing down the states and functions as the context value
  return (
    <AppContext.Provider value={{ cart, user, addToCart, signup, login }}>
      {children}  {/* Render the children components that are wrapped by this provider */}
    </AppContext.Provider>
  );
};

// Add prop-types validation for the children prop
AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };