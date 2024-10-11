/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';

function LoginForm() {
  const emailOrUsernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [loginData, setLoginData] = useState({
    emailOrUsername: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  // Client-side validation
  const validate = () => {
    let tempErrors = {};
    if (!loginData.emailOrUsername.trim()) tempErrors.emailOrUsername = 'Email or Username is required';
    if (!loginData.password) tempErrors.password = 'Password is required';
    return tempErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      // Simulate an API call
      setTimeout(() => {
        alert('Login successful!');
        setLoading(false);
        // Optionally clear form
        emailOrUsernameRef.current.value = '';
        passwordRef.current.value = '';
      }, 2000);
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} aria-label="Login Form">
        <div className="form-group">
          <label htmlFor="emailOrUsername">Email or Username</label>
          <input
            ref={emailOrUsernameRef}
            type="text"
            id="emailOrUsername"
            name="emailOrUsername"
            value={loginData.emailOrUsername}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={errors.emailOrUsername ? "true" : "false"}
          />
          {errors.emailOrUsername && <span className="error">{errors.emailOrUsername}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;