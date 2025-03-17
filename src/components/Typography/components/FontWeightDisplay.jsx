import React from 'react';
import PropTypes from 'prop-types';

/**
 * Displays a font weight with example text and metadata
 */
export const FontWeightDisplay = ({ name, variable, value, className }) => {
  const containerClassName = ['pgov-font-weight-display', className].filter(Boolean).join(' ');
  
  return (
    <div className={containerClassName}>
      <div className="pgov-font-weight-display-example" style={{ fontWeight: value }}>
        Aa
      </div>
      <div className="pgov-font-weight-display-metadata">
        <div className="pgov-font-weight-display-name">{name}</div>
        <code className="pgov-font-weight-display-variable">{variable}</code>
        <div className="pgov-font-weight-display-value">{value}</div>
      </div>
    </div>
  );
};

FontWeightDisplay.propTypes = {
  /** Name of the font weight */
  name: PropTypes.string.isRequired,
  /** CSS variable name */
  variable: PropTypes.string.isRequired,
  /** Actual font-weight value */
  value: PropTypes.string.isRequired,
  /** Additional CSS class */
  className: PropTypes.string
};

FontWeightDisplay.defaultProps = {
  className: ''
};

export default FontWeightDisplay; 