import React from 'react';
import PropTypes from 'prop-types';
import { ColorSwatchPreview } from './ColorSwatchPreview';
import { ColorSwatchDetails } from './ColorSwatchDetails';

/**
 * Individual color swatch component that combines a preview and details
 */
export const ColorSwatchItem = ({
  colorVar,
  name,
  description,
  size,
  orientation,
  className,
}) => {
  const combinedClassName = `pgov-color-swatch-item ${className || ''}`;

  return (
    <div className={combinedClassName}>
      <ColorSwatchPreview 
        colorValue={colorVar}
        name={name}
        size={size}
      />
      <ColorSwatchDetails 
        name={name}
        colorVar={colorVar}
        description={description}
        alignment="center"
      />
    </div>
  );
};

ColorSwatchItem.propTypes = {
  /**
   * CSS variable name for the color
   */
  colorVar: PropTypes.string.isRequired,
  /**
   * Name of the color
   */
  name: PropTypes.string.isRequired,
  /**
   * Description of the color
   */
  description: PropTypes.string,
  /**
   * Size of the color swatch preview
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Layout orientation of the swatch
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
   * Additional CSS class names
   */
  className: PropTypes.string,
};

ColorSwatchItem.defaultProps = {
  description: undefined,
  size: 'medium',
  orientation: 'vertical',
  className: '',
};
