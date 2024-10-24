// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';


export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [user, setUser] = useState(null);

  const addToCart = (product) => {
    setCart([...cart, product]);  
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