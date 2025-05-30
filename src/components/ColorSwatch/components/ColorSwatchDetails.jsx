import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Component for displaying color details (name, variable, description)
 */
export const ColorSwatchDetails = ({
  name,
  colorVar,
  description,
  hexValue: initialHexValue,
  alignment,
  className,
}) => {
  const [computedColorValue, setComputedColorValue] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined' && colorVar) {
      try {
        const value = getComputedStyle(document.documentElement).getPropertyValue(colorVar).trim();
        setComputedColorValue(value);
      } catch (error) {
        console.error(`Error getting computed style for ${colorVar}:`, error);
        setComputedColorValue('Error'); // Display an error if fetching fails
      }
    }
  }, [colorVar]);

  const combinedClassName = `pgov-color-swatch-details ${className || ''}`;
  
  return (
    <div 
      className={combinedClassName}
      role="group"
      aria-label={`Details for ${name} color`}
    >
      <div className="pgov-color-swatch-name">{name}</div>
      <div className="pgov-color-swatch-var" aria-label={`CSS variable: ${colorVar}`}>{colorVar}</div>
      {description && (
        <div className="pgov-color-swatch-description" aria-label={`Description: ${description}`}>
          {description}
        </div>
      )}
      {computedColorValue && !description && (
        <div className="pgov-color-swatch-hex" aria-label={`Computed value: ${computedColorValue}`}>
          {computedColorValue}
        </div>
      )}
      {!computedColorValue && initialHexValue && !description && (
         <div className="pgov-color-swatch-hex" aria-label={`Initial Hex value: ${initialHexValue}`}>
           {initialHexValue} (Initial)
         </div>
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
   * Hex value of the color (passed from parent, can be kept for prop validation)
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
