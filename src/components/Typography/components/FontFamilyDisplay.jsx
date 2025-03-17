import React from 'react';
import PropTypes from 'prop-types';

/**
 * Displays a font family with example text and metadata
 */
export const FontFamilyDisplay = ({ name, variable, value, className }) => {
  const containerClassName = ['pgov-font-family-display', className].filter(Boolean).join(' ');
  
  return (
    <div className={containerClassName}>
      <div className="pgov-font-family-display-example" style={{ fontFamily: value }}>
        The quick brown fox jumps over the lazy dog
      </div>
      <div className="pgov-font-family-display-metadata">
        <div className="pgov-font-family-display-name">{name}</div>
        <code className="pgov-font-family-display-variable">{variable}</code>
        <div className="pgov-font-family-display-value">{value}</div>
      </div>
    </div>
  );
};

FontFamilyDisplay.propTypes = {
  /** Name of the font family */
  name: PropTypes.string.isRequired,
  /** CSS variable name */
  variable: PropTypes.string.isRequired,
  /** Actual font-family value */
  value: PropTypes.string.isRequired,
  /** Additional CSS class */
  className: PropTypes.string
};

FontFamilyDisplay.defaultProps = {
  className: ''
};

export default FontFamilyDisplay; 