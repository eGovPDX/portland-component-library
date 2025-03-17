import React from 'react';
import PropTypes from 'prop-types';
import './ColorSwatch.css';
import '../../styles/index.scss';
import ColorSwatchItem from './components/ColorSwatchItem';
import ColorPalette from './components/ColorPalette';
import ColorSwatchDetails from './components/ColorSwatchDetails';
import ColorSwatchPreview from './components/ColorSwatchPreview';

/**
 * Component to display a color swatch
 */
const ColorSwatch = ({
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

const RedColorSwatches = () => {
  const colors = [
    { name: 'Red 5', colorVar: '--pgov-color-red-5', hexValue: '#f9e9e9' },
    { name: 'Red 10', colorVar: '--pgov-color-red-10', hexValue: '#f8e1de' },
    { name: 'Red 20', colorVar: '--pgov-color-red-20', hexValue: '#f7bbb3' },
    { name: 'Red 30', colorVar: '--pgov-color-red-30', hexValue: '#f2938c' },
    { name: 'Red 40', colorVar: '--pgov-color-red-40', hexValue: '#e76a61' },
    { name: 'Red 50', colorVar: '--pgov-color-red-50', hexValue: '#d83933' },
    { name: 'Red 60', colorVar: '--pgov-color-red-60', hexValue: '#b50909' },
    { name: 'Red 70', colorVar: '--pgov-color-red-70', hexValue: '#8b0a03' },
    { name: 'Red 80', colorVar: '--pgov-color-red-80', hexValue: '#5c1111' },
    { name: 'Red 90', colorVar: '--pgov-color-red-90', hexValue: '#2e0c0a' }
  ];

  return (
    <ColorPalette
      colors={colors}
      title="Red Colors"
      description="A range of red colors from lightest to darkest."
    />
  );
};

const OrangeColorSwatches = () => {
  const colors = [
    { name: 'Orange 5', colorVar: '--pgov-color-orange-5', hexValue: '#faf3ef' },
    { name: 'Orange 10', colorVar: '--pgov-color-orange-10', hexValue: '#fce2cd' },
    { name: 'Orange 20', colorVar: '--pgov-color-orange-20', hexValue: '#f6bd9c' },
    { name: 'Orange 30', colorVar: '--pgov-color-orange-30', hexValue: '#eb9873' },
    { name: 'Orange 40', colorVar: '--pgov-color-orange-40', hexValue: '#e87939' },
    { name: 'Orange 50', colorVar: '--pgov-color-orange-50', hexValue: '#c05600' },
    { name: 'Orange 60', colorVar: '--pgov-color-orange-60', hexValue: '#974a00' },
    { name: 'Orange 70', colorVar: '--pgov-color-orange-70', hexValue: '#7a3800' },
    { name: 'Orange 80', colorVar: '--pgov-color-orange-80', hexValue: '#4e2500' },
    { name: 'Orange 90', colorVar: '--pgov-color-orange-90', hexValue: '#331800' }
  ];

  return (
    <ColorPalette
      colors={colors}
      title="Orange Colors"
      description="A range of orange colors from lightest to darkest."
    />
  );
};

const GoldColorSwatches = () => {
  const colors = [
    { name: 'Gold 5', colorVar: '--pgov-color-gold-5', hexValue: '#faf5e9' },
    { name: 'Gold 10', colorVar: '--pgov-color-gold-10', hexValue: '#fcebb2' },
    { name: 'Gold 20', colorVar: '--pgov-color-gold-20', hexValue: '#fee685' },
    { name: 'Gold 30', colorVar: '--pgov-color-gold-30', hexValue: '#f5d348' },
    { name: 'Gold 40', colorVar: '--pgov-color-gold-40', hexValue: '#e5b800' },
    { name: 'Gold 50', colorVar: '--pgov-color-gold-50', hexValue: '#b58b00' },
    { name: 'Gold 60', colorVar: '--pgov-color-gold-60', hexValue: '#876600' },
    { name: 'Gold 70', colorVar: '--pgov-color-gold-70', hexValue: '#5d4200' },
    { name: 'Gold 80', colorVar: '--pgov-color-gold-80', hexValue: '#422d00' },
    { name: 'Gold 90', colorVar: '--pgov-color-gold-90', hexValue: '#241800' }
  ];

  return (
    <ColorPalette
      colors={colors}
      title="Gold Colors"
      description="A range of gold colors from lightest to darkest."
    />
  );
};

const YellowColorSwatches = () => {
  const colors = [
    { name: 'Yellow 5', colorVar: '--pgov-color-yellow-5', hexValue: '#fafaee' },
    { name: 'Yellow 10', colorVar: '--pgov-color-yellow-10', hexValue: '#fdf9cd' },
    { name: 'Yellow 20', colorVar: '--pgov-color-yellow-20', hexValue: '#fff799' },
    { name: 'Yellow 30', colorVar: '--pgov-color-yellow-30', hexValue: '#fee800' },
    { name: 'Yellow 40', colorVar: '--pgov-color-yellow-40', hexValue: '#ead200' },
    { name: 'Yellow 50', colorVar: '--pgov-color-yellow-50', hexValue: '#baaa00' },
    { name: 'Yellow 60', colorVar: '--pgov-color-yellow-60', hexValue: '#8e8000' },
    { name: 'Yellow 70', colorVar: '--pgov-color-yellow-70', hexValue: '#635a00' },
    { name: 'Yellow 80', colorVar: '--pgov-color-yellow-80', hexValue: '#403700' },
    { name: 'Yellow 90', colorVar: '--pgov-color-yellow-90', hexValue: '#211d00' }
  ];

  return (
    <ColorPalette
      colors={colors}
      title="Yellow Colors"
      description="A range of yellow colors from lightest to darkest."
    />
  );
};

const GreenColorSwatches = () => {
  const colors = [
    { name: 'Green 5', colorVar: '--pgov-color-green-5', hexValue: '#f1f9f7' },
    { name: 'Green 10', colorVar: '--pgov-color-green-10', hexValue: '#dfefe6' },
    { name: 'Green 20', colorVar: '--pgov-color-green-20', hexValue: '#b4ddc1' },
    { name: 'Green 30', colorVar: '--pgov-color-green-30', hexValue: '#89ca9b' },
    { name: 'Green 40', colorVar: '--pgov-color-green-40', hexValue: '#4ea868' },
    { name: 'Green 50', colorVar: '--pgov-color-green-50', hexValue: '#008817' },
    { name: 'Green 60', colorVar: '--pgov-color-green-60', hexValue: '#216e3a' },
    { name: 'Green 70', colorVar: '--pgov-color-green-70', hexValue: '#154c21' },
    { name: 'Green 80', colorVar: '--pgov-color-green-80', hexValue: '#103417' },
    { name: 'Green 90', colorVar: '--pgov-color-green-90', hexValue: '#0b1e0f' }
  ];

  return (
    <ColorPalette
      colors={colors}
      title="Green Colors"
      description="A range of green colors from lightest to darkest."
    />
  );
};

const MintColorSwatches = () => {
  const colors = [
    { name: 'Mint 5', colorVar: '--pgov-color-mint-5', hexValue: '#e9f7f4' },
    { name: 'Mint 10', colorVar: '--pgov-color-mint-10', hexValue: '#d0f0e8' },
    { name: 'Mint 20', colorVar: '--pgov-color-mint-20', hexValue: '#a6e8d7' },
    { name: 'Mint 30', colorVar: '--pgov-color-mint-30', hexValue: '#6adbc3' },
    { name: 'Mint 40', colorVar: '--pgov-color-mint-40', hexValue: '#2dc4ad' },
    { name: 'Mint 50', colorVar: '--pgov-color-mint-50', hexValue: '#00a398' },
    { name: 'Mint 60', colorVar: '--pgov-color-mint-60', hexValue: '#008a84' },
    { name: 'Mint 70', colorVar: '--pgov-color-mint-70', hexValue: '#126c64' },
    { name: 'Mint 80', colorVar: '--pgov-color-mint-80', hexValue: '#0d504a' },
    { name: 'Mint 90', colorVar: '--pgov-color-mint-90', hexValue: '#072c29' }
  ];

  return (
    <ColorPalette
      colors={colors}
      title="Mint Colors"
      description="A range of mint colors from lightest to darkest."
    />
  );
};

const CyanColorSwatches = () => {
  const colors = [
    { name: 'Cyan 5', colorVar: '--pgov-color-cyan-5', hexValue: '#e7f6f8' },
    { name: 'Cyan 10', colorVar: '--pgov-color-cyan-10', hexValue: '#ccecf2' },
    { name: 'Cyan 20', colorVar: '--pgov-color-cyan-20', hexValue: '#99deea' },
    { name: 'Cyan 30', colorVar: '--pgov-color-cyan-30', hexValue: '#5dc0d1' },
    { name: 'Cyan 40', colorVar: '--pgov-color-cyan-40', hexValue: '#449dae' },
    { name: 'Cyan 50', colorVar: '--pgov-color-cyan-50', hexValue: '#168092' },
    { name: 'Cyan 60', colorVar: '--pgov-color-cyan-60', hexValue: '#0d6b7a' },
    { name: 'Cyan 70', colorVar: '--pgov-color-cyan-70', hexValue: '#074b59' },
    { name: 'Cyan 80', colorVar: '--pgov-color-cyan-80', hexValue: '#02313d' },
    { name: 'Cyan 90', colorVar: '--pgov-color-cyan-90', hexValue: '#01232a' }
  ];

  return (
    <ColorPalette
      colors={colors}
      title="Cyan Colors"
      description="A range of cyan colors from lightest to darkest."
    />
  );
};

const BlueColorSwatches = () => {
  const colors = [
    { name: 'Blue 5', colorVar: '--pgov-color-blue-5', hexValue: '#e8f5ff' },
    { name: 'Blue 10', colorVar: '--pgov-color-blue-10', hexValue: '#cfe8ff' },
    { name: 'Blue 20', colorVar: '--pgov-color-blue-20', hexValue: '#a1d3ff' },
    { name: 'Blue 30', colorVar: '--pgov-color-blue-30', hexValue: '#58b4ff' },
    { name: 'Blue 40', colorVar: '--pgov-color-blue-40', hexValue: '#2491ff' },
    { name: 'Blue 50', colorVar: '--pgov-color-blue-50', hexValue: '#0076d6' },
    { name: 'Blue 60', colorVar: '--pgov-color-blue-60', hexValue: '#005ea2' },
    { name: 'Blue 70', colorVar: '--pgov-color-blue-70', hexValue: '#0b4778' },
    { name: 'Blue 80', colorVar: '--pgov-color-blue-80', hexValue: '#112f4e' },
    { name: 'Blue 90', colorVar: '--pgov-color-blue-90', hexValue: '#071d41' }
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
  ColorPalette,
  RedColorSwatches,
  OrangeColorSwatches, 
  GoldColorSwatches,
  YellowColorSwatches,
  GreenColorSwatches,
  MintColorSwatches,
  CyanColorSwatches,
  BlueColorSwatches
};

export default ColorSwatch; 