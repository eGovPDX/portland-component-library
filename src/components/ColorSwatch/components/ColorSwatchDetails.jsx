import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for displaying color details (name, variable, description)
 */
const ColorSwatchDetails = ({
  name,
  colorVar,
  description,
  hexValue,
  alignment,
  className,
}) => {
  const combinedClassName = `pgov-color-swatch-details ${className || ''}`;

  return (
    <div className={combinedClassName}>
      <div className="pgov-color-swatch-name">{name}</div>
      <div className="pgov-color-swatch-var">{colorVar}</div>
      {description && (
        <div className="pgov-color-swatch-description">{description}</div>
      )}
      {hexValue && !description && (
        <div className="pgov-color-swatch-hex">{hexValue}</div>
      )}
    </div>
  );
};

ColorSwatchDetails.propTypes = {
  /**
   * Name of the color
   */
  name: PropTypes.string.isRequired,
  /**
   * CSS variable name for the color
   */
  colorVar: PropTypes.string.isRequired,
  /**
   * Description of the color
   */
  description: PropTypes.string,
  /**
   * Hex value of the color
   */
  hexValue: PropTypes.string,
  /**
   * Text alignment
   */
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
  /**
   * Additional CSS class names
   */
  className: PropTypes.string,
};

ColorSwatchDetails.defaultProps = {
  description: undefined,
  hexValue: undefined,
  alignment: 'left',
  className: '',
};

export default ColorSwatchDetails; 