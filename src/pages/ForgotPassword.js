import React, { useState } from 'react';
import '../pages/forgotPassword.css';

const ForgotPassword = () => {
  // State to store email input value
  const [email, setEmail] = useState('');

  // State to manage the display of the success message
  const [message, setMessage] = useState('');

  // Function to handle email input change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate sending an email and handle forgot password request
    console.log(`Forgot password request for email: ${email}`);
    
    // Reset the email input field
    setEmail('');

    // Display success message
    setMessage('Email sent successfully. Please check your inbox.');
  };

  // Function to dismiss the success message
  const dismissMessage = () => {
    setMessage('');
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit} className="forgot-password-form">
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Reset Password</button>
      </form>
      {message && (
        <div className="success-message">
          {message}
          <a href='/login'><button onClick={dismissMessage} className="ok-btn">OK</button></a>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
