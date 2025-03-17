import React from 'react';
import PropTypes from 'prop-types';

/**
 * Displays a letter spacing with example text and metadata
 */
export const LetterSpacingDisplay = ({ name, variable, value, className }) => {
  const containerClassName = ['pgov-letter-spacing-display', className].filter(Boolean).join(' ');
  
  return (
    <div className={containerClassName}>
      <div 
        className="pgov-letter-spacing-display-example" 
        style={{ letterSpacing: value }}
      >
        THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
      </div>
      <div className="pgov-letter-spacing-display-metadata">
        <div className="pgov-letter-spacing-display-name">{name}</div>
        <code className="pgov-letter-spacing-display-variable">{variable}</code>
        <div className="pgov-letter-spacing-display-value">{value}</div>
      </div>
    </div>
  );
};

LetterSpacingDisplay.propTypes = {
  /** Name of the letter spacing */
  name: PropTypes.string.isRequired,
  /** CSS variable name */
  variable: PropTypes.string.isRequired,
  /** Actual letter-spacing value */
  value: PropTypes.string.isRequired,
  /** Additional CSS class */
  className: PropTypes.string
};

LetterSpacingDisplay.defaultProps = {
  className: ''
};

export default LetterSpacingDisplay; 