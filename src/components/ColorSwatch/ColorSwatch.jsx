import React from 'react';
import PropTypes from 'prop-types';
import './ColorSwatch.css';
import '../../styles/index.scss';
import { ColorPalette } from './components/ColorPalette';
import { ColorSwatchItem } from './components/ColorSwatchItem';
import { ColorSwatchPreview } from './components/ColorSwatchPreview';
import { ColorSwatchDetails } from './components/ColorSwatchDetails';

/**
 * Component to display a color swatch
 */
export const ColorSwatch = ({
  colorVar,
  name,
  description,
  hexValue,
  size,
  orientation,
  className,
}) => {
  return (
    <ColorSwatchItem
      colorVar={colorVar}
      name={name}
      description={description}
      hexValue={hexValue}
      size={size}
      orientation={orientation}
      className={className}
    />
  );
};

ColorSwatch.propTypes = {
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
   * Hex value of the color
   */
  hexValue: PropTypes.string,
  /**
   * Size of the color swatch
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Orientation of the swatch (horizontal or vertical)
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
   * Additional CSS class names
   */
  className: PropTypes.string,
};

ColorSwatch.defaultProps = {
  description: undefined,
  hexValue: undefined,
  size: 'medium',
  orientation: 'horizontal',
  className: '',
};

// Color palette definitions

export const RedColorSwatches = () => {
  const colors = [
    { name: 'Red 5', colorVar: 'var(--color-red-5)' },
    { name: 'Red 10', colorVar: 'var(--color-red-10)' },
    { name: 'Red 20', colorVar: 'var(--color-red-20)' },
    { name: 'Red 30', colorVar: 'var(--color-red-30)' },
    { name: 'Red 40', colorVar: 'var(--color-red-40)' },
    { name: 'Red 50', colorVar: 'var(--color-red-50)' },
    { name: 'Red 60', colorVar: 'var(--color-red-60)' },
    { name: 'Red 70', colorVar: 'var(--color-red-70)' },
    { name: 'Red 80', colorVar: 'var(--color-red-80)' },
    { name: 'Red 90', colorVar: 'var(--color-red-90)' }
  ];

  return (
    <ColorPalette
      colors={colors}
      title="Red Colors"
      description="A range of red colors from lightest to darkest."
    />
  );
};

export const OrangeColorSwatches = () => {
  const colors = [
    { name: 'Orange 5', colorVar: 'var(--color-orange-5)' },
    { name: 'Orange 10', colorVar: 'var(--color-orange-10)' },
    { name: 'Orange 20', colorVar: 'var(--color-orange-20)' },
    { name: 'Orange 30', colorVar: 'var(--color-orange-30)' },
    { name: 'Orange 40', colorVar: 'var(--color-orange-40)' },
    { name: 'Orange 50', colorVar: 'var(--color-orange-50)' },
    { name: 'Orange 60', colorVar: 'var(--color-orange-60)' },
    { name: 'Orange 70', colorVar: 'var(--color-orange-70)' },
    { name: 'Orange 80', colorVar: 'var(--color-orange-80)' },
    { name: 'Orange 90', colorVar: 'var(--color-orange-90)' }
  ];

  return (
    <ColorPalette
      colors={colors}
      title="Orange Colors"
      description="A range of orange colors from lightest to darkest."
    />
  );
};

export const GoldColorSwatches = () => {
  const colors = [
    { name: 'Gold 5', colorVar: 'var(--color-gold-5)' },
    { name: 'Gold 10', colorVar: 'var(--color-gold-10)' },
    { name: 'Gold 20', colorVar: 'var(--color-gold-20)' },
    { name: 'Gold 30', colorVar: 'var(--color-gold-30)' },
    { name: 'Gold 40', colorVar: 'var(--color-gold-40)' },
    { name: 'Gold 50', colorVar: 'var(--color-gold-50)' },
    { name: 'Gold 60', colorVar: 'var(--color-gold-60)' },
    { name: 'Gold 70', colorVar: 'var(--color-gold-70)' },
    { name: 'Gold 80', colorVar: 'var(--color-gold-80)' },
    { name: 'Gold 90', colorVar: 'var(--color-gold-90)' }
  ];

  return (
    <ColorPalette
      colors={colors}
      title="Gold Colors"
      description="A range of gold colors from lightest to darkest."
    />
  );
};

export const YellowColorSwatches = () => {
  const colors = [
    { name: 'Yellow 5', colorVar: 'var(--color-yellow-5)' },
    { name: 'Yellow 10', colorVar: 'var(--color-yellow-10)' },
    { name: 'Yellow 20', colorVar: 'var(--color-yellow-20)' },
    { name: 'Yellow 30', colorVar: 'var(--color-yellow-30)' },
    { name: 'Yellow 40', colorVar: 'var(--color-yellow-40)' },
    { name: 'Yellow 50', colorVar: 'var(--color-yellow-50)' },
    { name: 'Yellow 60', colorVar: 'var(--color-yellow-60)' },
    { name: 'Yellow 70', colorVar: 'var(--color-yellow-70)' },
    { name: 'Yellow 80', colorVar: 'var(--color-yellow-80)' },
    { name: 'Yellow 90', colorVar: 'var(--color-yellow-90)' }
  ];

  return (
    <ColorPalette
      colors={colors}
      title="Yellow Colors"
      description="A range of yellow colors from lightest to darkest."
    />
  );
};

export const GreenColorSwatches = () => {
  const colors = [
    { name: 'Green 5', colorVar: 'var(--color-green-5)' },
    { name: 'Green 10', colorVar: 'var(--color-green-10)' },
    { name: 'Green 20', colorVar: 'var(--color-green-20)' },
    { name: 'Green 30', colorVar: 'var(--color-green-30)' },
    { name: 'Green 40', colorVar: 'var(--color-green-40)' },
    { name: 'Green 50', colorVar: 'var(--color-green-50)' },
    { name: 'Green 60', colorVar: 'var(--color-green-60)' },
    { name: 'Green 70', colorVar: 'var(--color-green-70)' },
    { name: 'Green 80', colorVar: 'var(--color-green-80)' },
    { name: 'Green 90', colorVar: 'var(--color-green-90)' }
  ];

  return (
    <ColorPalette
      colors={colors}
      title="Green Colors"
      description="A range of green colors from lightest to darkest."
    />
  );
};

export const MintColorSwatches = () => {
  const colors = [
    { name: 'Mint 5', colorVar: 'var(--color-mint-5)' },
    { name: 'Mint 10', colorVar: 'var(--color-mint-10)' },
    { name: 'Mint 20', colorVar: 'var(--color-mint-20)' },
    { name: 'Mint 30', colorVar: 'var(--color-mint-30)' },
    { name: 'Mint 40', colorVar: 'var(--color-mint-40)' },
    { name: 'Mint 50', colorVar: 'var(--color-mint-50)' },
    { name: 'Mint 60', colorVar: 'var(--color-mint-60)' },
    { name: 'Mint 70', colorVar: 'var(--color-mint-70)' },
    { name: 'Mint 80', colorVar: 'var(--color-mint-80)' },
    { name: 'Mint 90', colorVar: 'var(--color-mint-90)' }
  ];

  return (
    <ColorPalette
      colors={colors}
      title="Mint Colors"
      description="A range of mint colors from lightest to darkest."
    />
  );
};

export const CyanColorSwatches = () => {
  const colors = [
    { name: 'Cyan 5', colorVar: 'var(--color-cyan-5)' },
    { name: 'Cyan 10', colorVar: 'var(--color-cyan-10)' },
    { name: 'Cyan 20', colorVar: 'var(--color-cyan-20)' },
    { name: 'Cyan 30', colorVar: 'var(--color-cyan-30)' },
    { name: 'Cyan 40', colorVar: 'var(--color-cyan-40)' },
    { name: 'Cyan 50', colorVar: 'var(--color-cyan-50)' },
    { name: 'Cyan 60', colorVar: 'var(--color-cyan-60)' },
    { name: 'Cyan 70', colorVar: 'var(--color-cyan-70)' },
    { name: 'Cyan 80', colorVar: 'var(--color-cyan-80)' },
    { name: 'Cyan 90', colorVar: 'var(--color-cyan-90)' }
  ];

  return (
    <ColorPalette
      colors={colors}
      title="Cyan Colors"
      description="A range of cyan colors from lightest to darkest."
    />
  );
};

export const BlueColorSwatches = () => {
  const colors = [
    { name: 'Blue 5', colorVar: 'var(--color-blue-5)' },
    { name: 'Blue 10', colorVar: 'var(--color-blue-10)' },
    { name: 'Blue 20', colorVar: 'var(--color-blue-20)' },
    { name: 'Blue 30', colorVar: 'var(--color-blue-30)' },
    { name: 'Blue 40', colorVar: 'var(--color-blue-40)' },
    { name: 'Blue 50', colorVar: 'var(--color-blue-50)' },
    { name: 'Blue 60', colorVar: 'var(--color-blue-60)' },
    { name: 'Blue 70', colorVar: 'var(--color-blue-70)' },
    { name: 'Blue 80', colorVar: 'var(--color-blue-80)' },
    { name: 'Blue 90', colorVar: 'var(--color-blue-90)' }
  ];

  return (
    <ColorPalette
      colors={colors}
      title="Blue Colors"
      description="A range of blue colors from lightest to darkest."
    />
  );
};

// Export the sub-components for direct use
export {
  ColorSwatchItem,
  ColorSwatchPreview,
  ColorSwatchDetails,
  ColorPalette
};

export default ColorSwatch; 