import React from 'react';
import PropTypes from 'prop-types';
import ColorSwatchItem from './ColorSwatchItem';

/**
 * Component for displaying a group of related color swatches
 */
const ColorPalette = ({
  colors,
  title,
  description,
  layout,
  itemOrientation,
  swatchSize,
  className,
}) => {
  const combinedClassName = `pgov-color-palette ${className || ''}`;

  return (
    <div className={combinedClassName}>
      {title && <h3 className="pgov-color-palette-title">{title}</h3>}
      {description && <p className="pgov-color-palette-description">{description}</p>}
      <div className="pgov-color-palette-grid">
        {colors.map((color, index) => (
          <ColorSwatchItem 
            key={index}
            colorVar={color.colorVar}
            name={color.name}
            description={color.description}
            hexValue={color.hexValue}
            size={swatchSize}
            orientation={itemOrientation}
          />
        ))}
      </div>
    </div>
  );
};

ColorPalette.propTypes = {
  /**
   * Array of color objects to display
   */
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      colorVar: PropTypes.string.isRequired,
      description: PropTypes.string,
      hexValue: PropTypes.string,
    })
  ).isRequired,
  /**
   * Title for the palette (optional)
   */
  title: PropTypes.string,
  /**
   * Description for the palette (optional)
   */
  description: PropTypes.string,
  /**
   * Layout style for the colors
   */
  layout: PropTypes.oneOf(['grid', 'flex']),
  /**
   * Orientation of individual color swatch items
   */
  itemOrientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
   * Size of the color swatches
   */
  swatchSize: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Additional CSS class names
   */
  className: PropTypes.string,
};

ColorPalette.defaultProps = {
  title: undefined,
  description: undefined,
  layout: 'grid',
  itemOrientation: 'vertical',
  swatchSize: 'large',
  className: '',
};

export default ColorPalette; 