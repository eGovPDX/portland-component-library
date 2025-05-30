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
    { name: 'Red 5', colorVar: '--pgov-color-red-5', hexValue: '#f9eeee' },
    { name: 'Red 10', colorVar: '--pgov-color-red-10', hexValue: '#f8e1de' },
    { name: 'Red 20', colorVar: '--pgov-color-red-20', hexValue: '#f7bbb1' },
    { name: 'Red 30', colorVar: '--pgov-color-red-30', hexValue: '#f2938c' },
    { name: 'Red 40', colorVar: '--pgov-color-red-40', hexValue: '#e9695f' },
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

export const OrangeColorSwatches = () => {
  const colors = [
    { name: 'Orange 5', colorVar: '--pgov-color-orange-5', hexValue: '#faeee5' },
    { name: 'Orange 10', colorVar: '--pgov-color-orange-10', hexValue: '#fce2c5' },
    { name: 'Orange 20', colorVar: '--pgov-color-orange-20', hexValue: '#fbbaa7' },
    { name: 'Orange 30', colorVar: '--pgov-color-orange-30', hexValue: '#fc906d' },
    { name: 'Orange 40', colorVar: '--pgov-color-orange-40', hexValue: '#ff580a' },
    { name: 'Orange 50', colorVar: '--pgov-color-orange-50', hexValue: '#cf4900' },
    { name: 'Orange 60', colorVar: '--pgov-color-orange-60', hexValue: '#8c471c' },
    { name: 'Orange 70', colorVar: '--pgov-color-orange-70', hexValue: '#5f3617' },
    { name: 'Orange 80', colorVar: '--pgov-color-orange-80', hexValue: '#3d231d' },
    { name: 'Orange 90', colorVar: '--pgov-color-orange-90', hexValue: '#3d1a06' }
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
    { name: 'Gold 5', colorVar: '--pgov-color-gold-5', hexValue: '#fef0c8' },
    { name: 'Gold 10', colorVar: '--pgov-color-gold-10', hexValue: '#ffe396' },
    { name: 'Gold 20', colorVar: '--pgov-color-gold-20', hexValue: '#ffbe2e' },
    { name: 'Gold 30', colorVar: '--pgov-color-gold-30', hexValue: '#ffd166' },
    { name: 'Gold 40', colorVar: '--pgov-color-gold-40', hexValue: '#ffbe2e' },
    { name: 'Gold 50', colorVar: '--pgov-color-gold-50', hexValue: '#e5a000' },
    { name: 'Gold 60', colorVar: '--pgov-color-gold-60', hexValue: '#c2850c' },
    { name: 'Gold 70', colorVar: '--pgov-color-gold-70', hexValue: '#936f38' },
    { name: 'Gold 80', colorVar: '--pgov-color-gold-80', hexValue: '#7a591a' },
    { name: 'Gold 90', colorVar: '--pgov-color-gold-90', hexValue: '#5c410a' }
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
    { name: 'Yellow 5', colorVar: '--pgov-color-yellow-5', hexValue: '#fff5c2' },
    { name: 'Yellow 10', colorVar: '--pgov-color-yellow-10', hexValue: '#fee685' },
    { name: 'Yellow 20', colorVar: '--pgov-color-yellow-20', hexValue: '#face00' },
    { name: 'Yellow 30', colorVar: '--pgov-color-yellow-30', hexValue: '#f5e049' },
    { name: 'Yellow 40', colorVar: '--pgov-color-yellow-40', hexValue: '#fee685' },
    { name: 'Yellow 50', colorVar: '--pgov-color-yellow-50', hexValue: '#face00' },
    { name: 'Yellow 60', colorVar: '--pgov-color-yellow-60', hexValue: '#ddaa01' },
    { name: 'Yellow 70', colorVar: '--pgov-color-yellow-70', hexValue: '#a38400' },
    { name: 'Yellow 80', colorVar: '--pgov-color-yellow-80', hexValue: '#776017' },
    { name: 'Yellow 90', colorVar: '--pgov-color-yellow-90', hexValue: '#5c4809' }
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
    { name: 'Green 5', colorVar: '--pgov-color-green-5', hexValue: '#ecf3ec' },
    { name: 'Green 10', colorVar: '--pgov-color-green-10', hexValue: '#dfeacd' },
    { name: 'Green 20', colorVar: '--pgov-color-green-20', hexValue: '#b4d0b9' },
    { name: 'Green 30', colorVar: '--pgov-color-green-30', hexValue: '#85c281' },
    { name: 'Green 40', colorVar: '--pgov-color-green-40', hexValue: '#7fb135' },
    { name: 'Green 50', colorVar: '--pgov-color-green-50', hexValue: '#00a91c' },
    { name: 'Green 60', colorVar: '--pgov-color-green-60', hexValue: '#008817' },
    { name: 'Green 70', colorVar: '--pgov-color-green-70', hexValue: '#216e1f' },
    { name: 'Green 80', colorVar: '--pgov-color-green-80', hexValue: '#154c21' },
    { name: 'Green 90', colorVar: '--pgov-color-green-90', hexValue: '#161814' }
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
    { name: 'Mint 5', colorVar: '--pgov-color-mint-5', hexValue: '#e0f7f6' },
    { name: 'Mint 10', colorVar: '--pgov-color-mint-10', hexValue: '#c4eeeb' },
    { name: 'Mint 20', colorVar: '--pgov-color-mint-20', hexValue: '#83fcd4' },
    { name: 'Mint 30', colorVar: '--pgov-color-mint-30', hexValue: '#0ceda6' },
    { name: 'Mint 40', colorVar: '--pgov-color-mint-40', hexValue: '#04c585' },
    { name: 'Mint 50', colorVar: '--pgov-color-mint-50', hexValue: '#00a871' },
    { name: 'Mint 60', colorVar: '--pgov-color-mint-60', hexValue: '#008659' },
    { name: 'Mint 70', colorVar: '--pgov-color-mint-70', hexValue: '#146947' },
    { name: 'Mint 80', colorVar: '--pgov-color-mint-80', hexValue: '#0c4e29' },
    { name: 'Mint 90', colorVar: '--pgov-color-mint-90', hexValue: '#0d351e' }
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
    { name: 'Cyan 5', colorVar: '--pgov-color-cyan-5', hexValue: '#e7f6f8' },
    { name: 'Cyan 10', colorVar: '--pgov-color-cyan-10', hexValue: '#ccecf2' },
    { name: 'Cyan 20', colorVar: '--pgov-color-cyan-20', hexValue: '#99deea' },
    { name: 'Cyan 30', colorVar: '--pgov-color-cyan-30', hexValue: '#5dc0d1' },
    { name: 'Cyan 40', colorVar: '--pgov-color-cyan-40', hexValue: '#28a0cb' },
    { name: 'Cyan 50', colorVar: '--pgov-color-cyan-50', hexValue: '#00bde3' },
    { name: 'Cyan 60', colorVar: '--pgov-color-cyan-60', hexValue: '#009ec1' },
    { name: 'Cyan 70', colorVar: '--pgov-color-cyan-70', hexValue: '#0d7ea2' },
    { name: 'Cyan 80', colorVar: '--pgov-color-cyan-80', hexValue: '#07648d' },
    { name: 'Cyan 90', colorVar: '--pgov-color-cyan-90', hexValue: '#074b69' }
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
    { name: 'Blue 5', colorVar: '--pgov-color-blue-5', hexValue: '#eff6fb' },
    { name: 'Blue 10', colorVar: '--pgov-color-blue-10', hexValue: '#d9e8f6' },
    { name: 'Blue 20', colorVar: '--pgov-color-blue-20', hexValue: '#aacdec' },
    { name: 'Blue 30', colorVar: '--pgov-color-blue-30', hexValue: '#73b3e7' },
    { name: 'Blue 40', colorVar: '--pgov-color-blue-40', hexValue: '#4f97d1' },
    { name: 'Blue 50', colorVar: '--pgov-color-blue-50', hexValue: '#0050d8' },
    { name: 'Blue 60', colorVar: '--pgov-color-blue-60', hexValue: '#1a4480' },
    { name: 'Blue 70', colorVar: '--pgov-color-blue-70', hexValue: '#162e51' },
    { name: 'Blue 80', colorVar: '--pgov-color-blue-80', hexValue: '#0e1f3f' },
    { name: 'Blue 90', colorVar: '--pgov-color-blue-90', hexValue: '#0b1526' }
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