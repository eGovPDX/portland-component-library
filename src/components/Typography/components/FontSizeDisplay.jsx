import React from 'react';
import PropTypes from 'prop-types';

/**
 * Displays a font size with example text and metadata
 */
export const FontSizeDisplay = ({ name, variable, value, sizeInPx, className }) => {
  const containerClassName = ['pgov-font-size-display', className].filter(Boolean).join(' ');
  
  return (
    <div className={containerClassName}>
      <div className="pgov-font-size-display-example" style={{ fontSize: value }}>
        Aa
      </div>
      <div className="pgov-font-size-display-metadata">
        <div className="pgov-font-size-display-name">{name}</div>
        <code className="pgov-font-size-display-variable">{variable}</code>
        <div className="pgov-font-size-display-value">{value} ({sizeInPx})</div>
      </div>
    </div>
  );
};

FontSizeDisplay.propTypes = {
  /** Name of the font size */
  name: PropTypes.string.isRequired,
  /** CSS variable name */
  variable: PropTypes.string.isRequired,
  /** Actual font-size value (with unit) */
  value: PropTypes.string.isRequired,
  /** Size in pixels for reference */
  sizeInPx: PropTypes.string.isRequired,
  /** Additional CSS class */
  className: PropTypes.string
};

FontSizeDisplay.defaultProps = {
  className: ''
};

export default FontSizeDisplay; 