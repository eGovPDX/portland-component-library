import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for displaying a color preview square/rectangle
 */
export const ColorSwatchPreview = ({
  colorValue,
  name,
  size = 'medium',
  className,
}) => {
  // Define sizes in pixels (increased by 25%)
  const sizeMap = {
    small: { width: 40, height: 40 },     // Was 32x32
    medium: { width: 80, height: 80 },    // Was 64x64
    large: { width: 125, height: 125 },   // Was 100x100
  };

  // Use size if it's in the map, otherwise default to medium
  const dimensions = sizeMap[size] || sizeMap.medium;
  const { width, height } = dimensions;

  const previewStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: colorValue,
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  const combinedClassName = `pgov-color-swatch-preview ${className || ''}`;

  return (
    <div 
      style={previewStyle} 
      className={combinedClassName}
      aria-label={`Color swatch for ${name}`}
    />
  );
};

ColorSwatchPreview.propTypes = {
  /**
   * Color value (CSS var or hex)
   */
  colorValue: PropTypes.string.isRequired,
  /**
   * Name of the color (for accessibility)
   */
  name: PropTypes.string.isRequired,
  /**
   * Size of the preview
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Additional CSS class names
   */
  className: PropTypes.string,
};

ColorSwatchPreview.defaultProps = {
  size: 'medium',
  className: '',
};
