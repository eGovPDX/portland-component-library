import React from 'react';
import PropTypes from 'prop-types';

/**
 * Displays a line height with example text and metadata
 */
export const LineHeightDisplay = ({ name, variable, value, className }) => {
  const containerClassName = ['pgov-line-height-display', className].filter(Boolean).join(' ');
  
  return (
    <div className={containerClassName}>
      <div 
        className="pgov-line-height-display-example" 
        style={{ lineHeight: value }}
      >
        This is an example of text with {name} line height.<br />
        The quick brown fox jumps over the lazy dog.<br />
        This shows how lines of text are spaced.
      </div>
      <div className="pgov-line-height-display-metadata">
        <div className="pgov-line-height-display-name">{name}</div>
        <code className="pgov-line-height-display-variable">{variable}</code>
        <div className="pgov-line-height-display-value">{value}</div>
      </div>
    </div>
  );
};

LineHeightDisplay.propTypes = {
  /** Name of the line height */
  name: PropTypes.string.isRequired,
  /** CSS variable name */
  variable: PropTypes.string.isRequired,
  /** Actual line-height value */
  value: PropTypes.string.isRequired,
  /** Additional CSS class */
  className: PropTypes.string
};

LineHeightDisplay.defaultProps = {
  className: ''
};

export default LineHeightDisplay; 