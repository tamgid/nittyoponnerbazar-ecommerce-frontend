/* eslint-disable no-unused-vars */
// src/components/Button.jsx
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

// Reusable Button component
const Button = ({ children, onClick, type, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

// Adding PropTypes validation for props
Button.propTypes = {
  children: PropTypes.node.isRequired,  // Children is required and should be any renderable content (string, JSX, etc.)
  onClick: PropTypes.func.isRequired,   // onClick is required and should be a function
  type: PropTypes.oneOf(['button', 'submit', 'reset']), // Validates type as 'button', 'submit', or 'reset'
  className: PropTypes.string           // className should be a string, not required
};

// Default prop values
Button.defaultProps = {
  type: 'button',  // Default type is 'button'
  className: '',   // Default className is an empty string
};

export default Button;
