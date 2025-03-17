import React from 'react';
import PropTypes from 'prop-types';
import './ColorSwatch.css';
import '../../styles/index.scss';

// Individual color swatch component
const ColorSwatchItem = ({ colorVar, name, description }) => (
  <div style={{ 
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }}>
    <div 
      style={{ 
        width: '100px', 
        height: '100px', 
        backgroundColor: description, // Use hex value directly
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: '8px'
      }}
      aria-label={`Color swatch for ${name}`}
    ></div>
    <div style={{ fontWeight: 600, width: '100%', textAlign: 'center' }}>{name}</div>
    <div style={{ fontSize: '12px', color: '#71767a', width: '100%', textAlign: 'center' }}>{colorVar}</div>
    {description && (
      <div style={{ fontSize: '12px', width: '100%', textAlign: 'center' }}>{description}</div>
    )}
  </div>
);

ColorSwatchItem.propTypes = {
  colorVar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string
};

/**
 * Component to display a color swatch
 */
export const ColorSwatch = ({
  colorVar,
  name,
  description,
}) => {
  return (
    <div className="flex items-center mb-4">
      <div 
        className="w-16 h-16 rounded mr-4 shadow-md" 
        style={{ backgroundColor: `var(${colorVar})` }}
        aria-label={`Color swatch for ${name}`}
      ></div>
      <div>
        <div className="font-semibold">{name}</div>
        <div className="text-xs text-gray-600">{colorVar}</div>
        {description && (
          <div className="text-xs">{description}</div>
        )}
      </div>
    </div>
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
   * Description of the color (often hex value)
   */
  description: PropTypes.string
};

export const RedColorSwatches = () => {
  const colors = [
    { name: 'Red 5', colorVar: '--pgov-color-red-5', description: '#f9e9e9' },
    { name: 'Red 10', colorVar: '--pgov-color-red-10', description: '#f8e1de' },
    { name: 'Red 20', colorVar: '--pgov-color-red-20', description: '#f7bbb3' },
    { name: 'Red 30', colorVar: '--pgov-color-red-30', description: '#f2938c' },
    { name: 'Red 40', colorVar: '--pgov-color-red-40', description: '#e76a61' },
    { name: 'Red 50', colorVar: '--pgov-color-red-50', description: '#d83933' },
    { name: 'Red 60', colorVar: '--pgov-color-red-60', description: '#b50909' },
    { name: 'Red 70', colorVar: '--pgov-color-red-70', description: '#8b0a03' },
    { name: 'Red 80', colorVar: '--pgov-color-red-80', description: '#5c1111' },
    { name: 'Red 90', colorVar: '--pgov-color-red-90', description: '#2e0c0a' }
  ];

  return (
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '24px',
      justifyContent: 'flex-start'
    }}>
      {colors.map((color, index) => (
        <ColorSwatchItem 
          key={index}
          name={color.name}
          colorVar={color.colorVar}
          description={color.description}
        />
      ))}
    </div>
  );
};

export const OrangeColorSwatches = () => {
  const colors = [
    { name: 'Orange 5', colorVar: '--pgov-color-orange-5', description: '#faf3ef' },
    { name: 'Orange 10', colorVar: '--pgov-color-orange-10', description: '#fce2cd' },
    { name: 'Orange 20', colorVar: '--pgov-color-orange-20', description: '#f6bd9c' },
    { name: 'Orange 30', colorVar: '--pgov-color-orange-30', description: '#eb9873' },
    { name: 'Orange 40', colorVar: '--pgov-color-orange-40', description: '#e87939' },
    { name: 'Orange 50', colorVar: '--pgov-color-orange-50', description: '#c05600' },
    { name: 'Orange 60', colorVar: '--pgov-color-orange-60', description: '#974a00' },
    { name: 'Orange 70', colorVar: '--pgov-color-orange-70', description: '#7a3800' },
    { name: 'Orange 80', colorVar: '--pgov-color-orange-80', description: '#4e2500' },
    { name: 'Orange 90', colorVar: '--pgov-color-orange-90', description: '#331800' }
  ];

  return (
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '24px',
      justifyContent: 'flex-start'
    }}>
      {colors.map((color, index) => (
        <ColorSwatchItem 
          key={index}
          name={color.name}
          colorVar={color.colorVar}
          description={color.description}
        />
      ))}
    </div>
  );
};

export const GoldColorSwatches = () => {
  const colors = [
    { name: 'Gold 5', colorVar: '--pgov-color-gold-5', description: '#faf5e9' },
    { name: 'Gold 10', colorVar: '--pgov-color-gold-10', description: '#fcebb2' },
    { name: 'Gold 20', colorVar: '--pgov-color-gold-20', description: '#fee685' },
    { name: 'Gold 30', colorVar: '--pgov-color-gold-30', description: '#f5d348' },
    { name: 'Gold 40', colorVar: '--pgov-color-gold-40', description: '#e5b800' },
    { name: 'Gold 50', colorVar: '--pgov-color-gold-50', description: '#b58b00' },
    { name: 'Gold 60', colorVar: '--pgov-color-gold-60', description: '#876600' },
    { name: 'Gold 70', colorVar: '--pgov-color-gold-70', description: '#5d4200' },
    { name: 'Gold 80', colorVar: '--pgov-color-gold-80', description: '#422d00' },
    { name: 'Gold 90', colorVar: '--pgov-color-gold-90', description: '#241800' }
  ];

  return (
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '24px',
      justifyContent: 'flex-start'
    }}>
      {colors.map((color, index) => (
        <ColorSwatchItem 
          key={index}
          name={color.name}
          colorVar={color.colorVar}
          description={color.description}
        />
      ))}
    </div>
  );
};

export const YellowColorSwatches = () => {
  const colors = [
    { name: 'Yellow 5', colorVar: '--pgov-color-yellow-5', description: '#fafaee' },
    { name: 'Yellow 10', colorVar: '--pgov-color-yellow-10', description: '#fdf9cd' },
    { name: 'Yellow 20', colorVar: '--pgov-color-yellow-20', description: '#fff799' },
    { name: 'Yellow 30', colorVar: '--pgov-color-yellow-30', description: '#fee800' },
    { name: 'Yellow 40', colorVar: '--pgov-color-yellow-40', description: '#ead200' },
    { name: 'Yellow 50', colorVar: '--pgov-color-yellow-50', description: '#baaa00' },
    { name: 'Yellow 60', colorVar: '--pgov-color-yellow-60', description: '#8e8000' },
    { name: 'Yellow 70', colorVar: '--pgov-color-yellow-70', description: '#635a00' },
    { name: 'Yellow 80', colorVar: '--pgov-color-yellow-80', description: '#403700' },
    { name: 'Yellow 90', colorVar: '--pgov-color-yellow-90', description: '#211d00' }
  ];

  return (
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '24px',
      justifyContent: 'flex-start'
    }}>
      {colors.map((color, index) => (
        <ColorSwatchItem 
          key={index}
          name={color.name}
          colorVar={color.colorVar}
          description={color.description}
        />
      ))}
    </div>
  );
};

export const GreenColorSwatches = () => {
  const colors = [
    { name: 'Green 5', colorVar: '--pgov-color-green-5', description: '#f1f9f7' },
    { name: 'Green 10', colorVar: '--pgov-color-green-10', description: '#dfefe6' },
    { name: 'Green 20', colorVar: '--pgov-color-green-20', description: '#b4ddc1' },
    { name: 'Green 30', colorVar: '--pgov-color-green-30', description: '#89ca9b' },
    { name: 'Green 40', colorVar: '--pgov-color-green-40', description: '#4ea868' },
    { name: 'Green 50', colorVar: '--pgov-color-green-50', description: '#008817' },
    { name: 'Green 60', colorVar: '--pgov-color-green-60', description: '#216e3a' },
    { name: 'Green 70', colorVar: '--pgov-color-green-70', description: '#154c21' },
    { name: 'Green 80', colorVar: '--pgov-color-green-80', description: '#103417' },
    { name: 'Green 90', colorVar: '--pgov-color-green-90', description: '#0b1e0f' }
  ];

  return (
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '24px',
      justifyContent: 'flex-start'
    }}>
      {colors.map((color, index) => (
        <ColorSwatchItem 
          key={index}
          name={color.name}
          colorVar={color.colorVar}
          description={color.description}
        />
      ))}
    </div>
  );
};

export const MintColorSwatches = () => {
  const colors = [
    { name: 'Mint 5', colorVar: '--pgov-color-mint-5', description: '#e9f7f4' },
    { name: 'Mint 10', colorVar: '--pgov-color-mint-10', description: '#d0f0e8' },
    { name: 'Mint 20', colorVar: '--pgov-color-mint-20', description: '#a6e8d7' },
    { name: 'Mint 30', colorVar: '--pgov-color-mint-30', description: '#6adbc3' },
    { name: 'Mint 40', colorVar: '--pgov-color-mint-40', description: '#2ecaaa' },
    { name: 'Mint 50', colorVar: '--pgov-color-mint-50', description: '#008659' },
    { name: 'Mint 60', colorVar: '--pgov-color-mint-60', description: '#066153' },
    { name: 'Mint 70', colorVar: '--pgov-color-mint-70', description: '#034e45' },
    { name: 'Mint 80', colorVar: '--pgov-color-mint-80', description: '#08352e' },
    { name: 'Mint 90', colorVar: '--pgov-color-mint-90', description: '#041f1b' }
  ];

  return (
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '24px',
      justifyContent: 'flex-start'
    }}>
      {colors.map((color, index) => (
        <ColorSwatchItem 
          key={index}
          name={color.name}
          colorVar={color.colorVar}
          description={color.description}
        />
      ))}
    </div>
  );
};

export const CyanColorSwatches = () => {
  const colors = [
    { name: 'Cyan 5', colorVar: '--pgov-color-cyan-5', description: '#e6f6fa' },
    { name: 'Cyan 10', colorVar: '--pgov-color-cyan-10', description: '#ccecf3' },
    { name: 'Cyan 20', colorVar: '--pgov-color-cyan-20', description: '#99deea' },
    { name: 'Cyan 30', colorVar: '--pgov-color-cyan-30', description: '#5dc0d8' },
    { name: 'Cyan 40', colorVar: '--pgov-color-cyan-40', description: '#07a5c3' },
    { name: 'Cyan 50', colorVar: '--pgov-color-cyan-50', description: '#0080a7' },
    { name: 'Cyan 60', colorVar: '--pgov-color-cyan-60', description: '#00687d' },
    { name: 'Cyan 70', colorVar: '--pgov-color-cyan-70', description: '#00505f' },
    { name: 'Cyan 80', colorVar: '--pgov-color-cyan-80', description: '#003947' },
    { name: 'Cyan 90', colorVar: '--pgov-color-cyan-90', description: '#001f28' }
  ];

  return (
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '24px',
      justifyContent: 'flex-start'
    }}>
      {colors.map((color, index) => (
        <ColorSwatchItem 
          key={index}
          name={color.name}
          colorVar={color.colorVar}
          description={color.description}
        />
      ))}
    </div>
  );
};

export const BlueColorSwatches = () => {
  const colors = [
    { name: 'Blue 5', colorVar: '--pgov-color-blue-5', description: '#eef6fb' },
    { name: 'Blue 10', colorVar: '--pgov-color-blue-10', description: '#d9e8f5' },
    { name: 'Blue 20', colorVar: '--pgov-color-blue-20', description: '#addcf4' },
    { name: 'Blue 30', colorVar: '--pgov-color-blue-30', description: '#79affa' },
    { name: 'Blue 40', colorVar: '--pgov-color-blue-40', description: '#2491ff' },
    { name: 'Blue 50', colorVar: '--pgov-color-blue-50', description: '#0050d8' },
    { name: 'Blue 60', colorVar: '--pgov-color-blue-60', description: '#1a4480' },
    { name: 'Blue 70', colorVar: '--pgov-color-blue-70', description: '#162e51' },
    { name: 'Blue 80', colorVar: '--pgov-color-blue-80', description: '#0f1f38' },
    { name: 'Blue 90', colorVar: '--pgov-color-blue-90', description: '#0a141f' }
  ];

  return (
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '24px',
      justifyContent: 'flex-start'
    }}>
      {colors.map((color, index) => (
        <ColorSwatchItem 
          key={index}
          name={color.name}
          colorVar={color.colorVar}
          description={color.description}
        />
      ))}
    </div>
  );
};

export default ColorSwatch; 