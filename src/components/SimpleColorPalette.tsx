import React from 'react';

interface ColorInfo {
  name: string;
  hex: string;
  variable: string;
}

interface ColorPaletteProps {
  title: string;
  colors: ColorInfo[];
}

const ColorSwatch: React.FC<ColorInfo> = ({ name, hex, variable }) => {
  return (
    <div style={{ 
      margin: '10px', 
      border: '1px solid #ddd',
      borderRadius: '4px',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      width: '180px',
      display: 'inline-block'
    }}>
      <div style={{ 
        height: '80px', 
        backgroundColor: hex,
        width: '100%'
      }} />
      <div style={{ 
        padding: '10px',
        backgroundColor: 'white'
      }}>
        <div style={{ 
          fontWeight: 'bold',
          color: 'black',
          marginBottom: '4px'
        }}>{name}</div>
        <div style={{ 
          fontSize: '12px',
          color: '#666',
          marginBottom: '4px'
        }}>{variable}</div>
        <div style={{ 
          fontSize: '12px',
          color: 'black'
        }}>{hex}</div>
      </div>
    </div>
  );
};

export const SimpleColorPalette: React.FC<ColorPaletteProps> = ({ title, colors }) => {
  return (
    <div style={{ 
      margin: '20px 0',
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '8px'
    }}>
      <h2 style={{ 
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: 'black'
      }}>{title}</h2>
      <div style={{ 
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        {colors.map((color, index) => (
          <ColorSwatch 
            key={index}
            name={color.name}
            hex={color.hex}
            variable={color.variable}
          />
        ))}
      </div>
    </div>
  );
};

export const RedColors: React.FC = () => {
  const colors = [
    { name: 'Red 5', hex: '#f9eeee', variable: '--pgov-color-red-5' },
    { name: 'Red 10', hex: '#f8e1de', variable: '--pgov-color-red-10' },
    { name: 'Red 20', hex: '#f7bbb6', variable: '--pgov-color-red-20' },
    { name: 'Red 30', hex: '#f2938c', variable: '--pgov-color-red-30' },
    { name: 'Red 40', hex: '#e66a64', variable: '--pgov-color-red-40' },
    { name: 'Red 50', hex: '#d83933', variable: '--pgov-color-red-50' },
    { name: 'Red 60', hex: '#b50909', variable: '--pgov-color-red-60' },
    { name: 'Red 70', hex: '#8b0a03', variable: '--pgov-color-red-70' },
    { name: 'Red 80', hex: '#5c1111', variable: '--pgov-color-red-80' },
    { name: 'Red 90', hex: '#2e0c0a', variable: '--pgov-color-red-90' },
  ];
  
  return (
    <div style={{ 
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px'
    }}>
      {colors.map((color, index) => (
        <ColorSwatch 
          key={index}
          name={color.name}
          hex={color.hex}
          variable={color.variable}
        />
      ))}
    </div>
  );
};

export const OrangeColors: React.FC = () => {
  const colors = [
    { name: 'Orange 5', hex: '#f6efe9', variable: '--pgov-color-orange-5' },
    { name: 'Orange 10', hex: '#f2e4d4', variable: '--pgov-color-orange-10' },
    { name: 'Orange 20', hex: '#f3bf90', variable: '--pgov-color-orange-20' },
    { name: 'Orange 30', hex: '#f09860', variable: '--pgov-color-orange-30' },
    { name: 'Orange 40', hex: '#e88230', variable: '--pgov-color-orange-40' },
    { name: 'Orange 50', hex: '#d16b10', variable: '--pgov-color-orange-50' },
    { name: 'Orange 60', hex: '#a15600', variable: '--pgov-color-orange-60' },
    { name: 'Orange 70', hex: '#7d4200', variable: '--pgov-color-orange-70' },
    { name: 'Orange 80', hex: '#54360e', variable: '--pgov-color-orange-80' },
    { name: 'Orange 90', hex: '#332010', variable: '--pgov-color-orange-90' },
  ];
  
  return (
    <div style={{ 
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px'
    }}>
      {colors.map((color, index) => (
        <ColorSwatch 
          key={index}
          name={color.name}
          hex={color.hex}
          variable={color.variable}
        />
      ))}
    </div>
  );
};

export const GoldColors: React.FC = () => {
  const colors = [
    { name: 'Gold 5', hex: '#f5f5e3', variable: '--pgov-color-gold-5' },
    { name: 'Gold 10', hex: '#f5f0c4', variable: '--pgov-color-gold-10' },
    { name: 'Gold 20', hex: '#f5e641', variable: '--pgov-color-gold-20' },
    { name: 'Gold 30', hex: '#e6c502', variable: '--pgov-color-gold-30' },
    { name: 'Gold 40', hex: '#c9a600', variable: '--pgov-color-gold-40' },
    { name: 'Gold 50', hex: '#a88700', variable: '--pgov-color-gold-50' },
    { name: 'Gold 60', hex: '#8a6e00', variable: '--pgov-color-gold-60' },
    { name: 'Gold 70', hex: '#6b5500', variable: '--pgov-color-gold-70' },
    { name: 'Gold 80', hex: '#4d3d00', variable: '--pgov-color-gold-80' },
    { name: 'Gold 90', hex: '#2e2500', variable: '--pgov-color-gold-90' },
  ];
  
  return (
    <div style={{ 
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px'
    }}>
      {colors.map((color, index) => (
        <ColorSwatch 
          key={index}
          name={color.name}
          hex={color.hex}
          variable={color.variable}
        />
      ))}
    </div>
  );
};

export const YellowColors: React.FC = () => {
  const colors = [
    { name: 'Yellow 5', hex: '#faf3d0', variable: '--pgov-color-yellow-5' },
    { name: 'Yellow 10', hex: '#fee685', variable: '--pgov-color-yellow-10' },
    { name: 'Yellow 20', hex: '#ffda00', variable: '--pgov-color-yellow-20' },
    { name: 'Yellow 30', hex: '#e5bf00', variable: '--pgov-color-yellow-30' },
    { name: 'Yellow 40', hex: '#c2a000', variable: '--pgov-color-yellow-40' },
    { name: 'Yellow 50', hex: '#9e8600', variable: '--pgov-color-yellow-50' },
    { name: 'Yellow 60', hex: '#7a6700', variable: '--pgov-color-yellow-60' },
    { name: 'Yellow 70', hex: '#5c4f00', variable: '--pgov-color-yellow-70' },
    { name: 'Yellow 80', hex: '#3d3400', variable: '--pgov-color-yellow-80' },
    { name: 'Yellow 90', hex: '#1e1a00', variable: '--pgov-color-yellow-90' },
  ];
  
  return (
    <div style={{ 
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px'
    }}>
      {colors.map((color, index) => (
        <ColorSwatch 
          key={index}
          name={color.name}
          hex={color.hex}
          variable={color.variable}
        />
      ))}
    </div>
  );
};

export const GreenColors: React.FC = () => {
  const colors = [
    { name: 'Green 5', hex: '#eaf4e9', variable: '--pgov-color-green-5' },
    { name: 'Green 10', hex: '#dbead2', variable: '--pgov-color-green-10' },
    { name: 'Green 20', hex: '#b5d6a3', variable: '--pgov-color-green-20' },
    { name: 'Green 30', hex: '#7fb06f', variable: '--pgov-color-green-30' },
    { name: 'Green 40', hex: '#5e9f42', variable: '--pgov-color-green-40' },
    { name: 'Green 50', hex: '#4d8c3d', variable: '--pgov-color-green-50' },
    { name: 'Green 60', hex: '#446e38', variable: '--pgov-color-green-60' },
    { name: 'Green 70', hex: '#37552a', variable: '--pgov-color-green-70' },
    { name: 'Green 80', hex: '#27391c', variable: '--pgov-color-green-80' },
    { name: 'Green 90', hex: '#171d12', variable: '--pgov-color-green-90' },
  ];
  
  return (
    <div style={{ 
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px'
    }}>
      {colors.map((color, index) => (
        <ColorSwatch 
          key={index}
          name={color.name}
          hex={color.hex}
          variable={color.variable}
        />
      ))}
    </div>
  );
};

export const MintColors: React.FC = () => {
  const colors = [
    { name: 'Mint 5', hex: '#e0f7f6', variable: '--pgov-color-mint-5' },
    { name: 'Mint 10', hex: '#c4eeeb', variable: '--pgov-color-mint-10' },
    { name: 'Mint 20', hex: '#9bd4cf', variable: '--pgov-color-mint-20' },
    { name: 'Mint 30', hex: '#6fbab3', variable: '--pgov-color-mint-30' },
    { name: 'Mint 40', hex: '#4f9e95', variable: '--pgov-color-mint-40' },
    { name: 'Mint 50', hex: '#40807a', variable: '--pgov-color-mint-50' },
    { name: 'Mint 60', hex: '#376462', variable: '--pgov-color-mint-60' },
    { name: 'Mint 70', hex: '#27504e', variable: '--pgov-color-mint-70' },
    { name: 'Mint 80', hex: '#1a3734', variable: '--pgov-color-mint-80' },
    { name: 'Mint 90', hex: '#111e1d', variable: '--pgov-color-mint-90' },
  ];
  
  return (
    <div style={{ 
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px'
    }}>
      {colors.map((color, index) => (
        <ColorSwatch 
          key={index}
          name={color.name}
          hex={color.hex}
          variable={color.variable}
        />
      ))}
    </div>
  );
};

export const CyanColors: React.FC = () => {
  const colors = [
    { name: 'Cyan 5', hex: '#e7f6f8', variable: '--pgov-color-cyan-5' },
    { name: 'Cyan 10', hex: '#ccecf2', variable: '--pgov-color-cyan-10' },
    { name: 'Cyan 20', hex: '#99deeb', variable: '--pgov-color-cyan-20' },
    { name: 'Cyan 30', hex: '#5dc0d1', variable: '--pgov-color-cyan-30' },
    { name: 'Cyan 40', hex: '#449daa', variable: '--pgov-color-cyan-40' },
    { name: 'Cyan 50', hex: '#168092', variable: '--pgov-color-cyan-50' },
    { name: 'Cyan 60', hex: '#0d6b7a', variable: '--pgov-color-cyan-60' },
    { name: 'Cyan 70', hex: '#085467', variable: '--pgov-color-cyan-70' },
    { name: 'Cyan 80', hex: '#07404f', variable: '--pgov-color-cyan-80' },
    { name: 'Cyan 90', hex: '#074b69', variable: '--pgov-color-cyan-90' },
  ];
  
  return (
    <div style={{ 
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px'
    }}>
      {colors.map((color, index) => (
        <ColorSwatch 
          key={index}
          name={color.name}
          hex={color.hex}
          variable={color.variable}
        />
      ))}
    </div>
  );
};

export const BlueColors: React.FC = () => {
  const colors = [
    { name: 'Blue 5', hex: '#eff6fb', variable: '--pgov-color-blue-5' },
    { name: 'Blue 10', hex: '#d9e8f6', variable: '--pgov-color-blue-10' },
    { name: 'Blue 20', hex: '#ade0ff', variable: '--pgov-color-blue-20' },
    { name: 'Blue 30', hex: '#73b3e7', variable: '--pgov-color-blue-30' },
    { name: 'Blue 40', hex: '#4889c8', variable: '--pgov-color-blue-40' },
    { name: 'Blue 50', hex: '#2672de', variable: '--pgov-color-blue-50' },
    { name: 'Blue 60', hex: '#0050d8', variable: '--pgov-color-blue-60' },
    { name: 'Blue 70', hex: '#1a4480', variable: '--pgov-color-blue-70' },
    { name: 'Blue 80', hex: '#162e51', variable: '--pgov-color-blue-80' },
    { name: 'Blue 90', hex: '#0b1526', variable: '--pgov-color-blue-90' },
  ];
  
  return (
    <div style={{ 
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px'
    }}>
      {colors.map((color, index) => (
        <ColorSwatch 
          key={index}
          name={color.name}
          hex={color.hex}
          variable={color.variable}
        />
      ))}
    </div>
  );
}; 