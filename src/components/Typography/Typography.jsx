import React from 'react';
import PropTypes from 'prop-types';
import './Typography.css';

const FontFamilyDisplay = ({ name, variable, value }) => {
  return (
    <div style={{ 
      margin: '10px', 
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      width: '100%',
      maxWidth: '600px'
    }}>
      <div style={{ 
        fontFamily: value,
        fontSize: '24px',
        marginBottom: '16px'
      }}>
        The quick brown fox jumps over the lazy dog
      </div>
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}>
        <div style={{ fontWeight: 'bold' }}>{name}</div>
        <code style={{ 
          backgroundColor: '#f5f5f5',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '14px'
        }}>{variable}</code>
        <div style={{ 
          fontSize: '14px',
          color: '#666'
        }}>{value}</div>
      </div>
    </div>
  );
};

FontFamilyDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  variable: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

const FontSizeDisplay = ({ name, variable, value, sizeInPx }) => {
  return (
    <div style={{ 
      margin: '10px', 
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      width: '100%',
      maxWidth: '600px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div style={{ 
        fontSize: value,
        fontFamily: 'var(--pgov-font-family-sans)'
      }}>
        Aa
      </div>
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        textAlign: 'right'
      }}>
        <div style={{ fontWeight: 'bold' }}>{name}</div>
        <code style={{ 
          backgroundColor: '#f5f5f5',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '14px'
        }}>{variable}</code>
        <div style={{ 
          fontSize: '14px',
          color: '#666'
        }}>{value} ({sizeInPx})</div>
      </div>
    </div>
  );
};

FontSizeDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  variable: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  sizeInPx: PropTypes.string.isRequired
};

const FontWeightDisplay = ({ name, variable, value }) => {
  return (
    <div style={{ 
      margin: '10px', 
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      width: '100%',
      maxWidth: '600px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div style={{ 
        fontWeight: value,
        fontSize: '24px',
        fontFamily: 'var(--pgov-font-family-sans)'
      }}>
        Aa
      </div>
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        textAlign: 'right'
      }}>
        <div style={{ fontWeight: 'bold' }}>{name}</div>
        <code style={{ 
          backgroundColor: '#f5f5f5',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '14px'
        }}>{variable}</code>
        <div style={{ 
          fontSize: '14px',
          color: '#666'
        }}>{value}</div>
      </div>
    </div>
  );
};

FontWeightDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  variable: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

const LineHeightDisplay = ({ name, variable, value }) => {
  return (
    <div style={{ 
      margin: '10px', 
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      width: '100%',
      maxWidth: '600px'
    }}>
      <div style={{ 
        lineHeight: value,
        fontSize: '16px',
        fontFamily: 'var(--pgov-font-family-sans)',
        marginBottom: '16px',
        padding: '10px',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px'
      }}>
        This is an example of text with {name} line height.<br />
        The quick brown fox jumps over the lazy dog.<br />
        This shows how lines of text are spaced.
      </div>
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}>
        <div style={{ fontWeight: 'bold' }}>{name}</div>
        <code style={{ 
          backgroundColor: '#f5f5f5',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '14px'
        }}>{variable}</code>
        <div style={{ 
          fontSize: '14px',
          color: '#666'
        }}>{value}</div>
      </div>
    </div>
  );
};

LineHeightDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  variable: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

const LetterSpacingDisplay = ({ name, variable, value }) => {
  return (
    <div style={{ 
      margin: '10px', 
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      width: '100%',
      maxWidth: '600px'
    }}>
      <div style={{ 
        letterSpacing: value,
        fontSize: '18px',
        fontFamily: 'var(--pgov-font-family-sans)',
        marginBottom: '16px',
        padding: '10px',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px'
      }}>
        THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
      </div>
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}>
        <div style={{ fontWeight: 'bold' }}>{name}</div>
        <code style={{ 
          backgroundColor: '#f5f5f5',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '14px'
        }}>{variable}</code>
        <div style={{ 
          fontSize: '14px',
          color: '#666'
        }}>{value}</div>
      </div>
    </div>
  );
};

LetterSpacingDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  variable: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export const FontFamilies = () => {
  const families = [
    { name: 'Sans Serif', variable: '--pgov-font-family-sans', value: "'Source Sans Pro', 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif" },
    { name: 'Serif', variable: '--pgov-font-family-serif', value: "Merriweather, Georgia, Cambria, 'Times New Roman', Times, serif" },
    { name: 'Monospace', variable: '--pgov-font-family-mono', value: "'Roboto Mono', Consolas, Monaco, 'Andale Mono', monospace" }
  ];
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {families.map((family, index) => (
        <FontFamilyDisplay 
          key={index}
          name={family.name}
          variable={family.variable}
          value={family.value}
        />
      ))}
    </div>
  );
};

export const FontSizes = () => {
  const sizes = [
    { name: '3XS', variable: '--pgov-font-size-3xs', value: '0.5rem', sizeInPx: '8px' },
    { name: '2XS', variable: '--pgov-font-size-2xs', value: '0.625rem', sizeInPx: '10px' },
    { name: 'XS', variable: '--pgov-font-size-xs', value: '0.75rem', sizeInPx: '12px' },
    { name: 'SM', variable: '--pgov-font-size-sm', value: '0.875rem', sizeInPx: '14px' },
    { name: 'MD', variable: '--pgov-font-size-md', value: '1rem', sizeInPx: '16px' },
    { name: 'LG', variable: '--pgov-font-size-lg', value: '1.125rem', sizeInPx: '18px' },
    { name: 'XL', variable: '--pgov-font-size-xl', value: '1.25rem', sizeInPx: '20px' },
    { name: '2XL', variable: '--pgov-font-size-2xl', value: '1.5rem', sizeInPx: '24px' },
    { name: '3XL', variable: '--pgov-font-size-3xl', value: '1.75rem', sizeInPx: '28px' },
    { name: '4XL', variable: '--pgov-font-size-4xl', value: '2rem', sizeInPx: '32px' },
    { name: '5XL', variable: '--pgov-font-size-5xl', value: '2.5rem', sizeInPx: '40px' },
    { name: '6XL', variable: '--pgov-font-size-6xl', value: '3rem', sizeInPx: '48px' },
    { name: '7XL', variable: '--pgov-font-size-7xl', value: '3.5rem', sizeInPx: '56px' },
    { name: '8XL', variable: '--pgov-font-size-8xl', value: '4rem', sizeInPx: '64px' },
    { name: '9XL', variable: '--pgov-font-size-9xl', value: '4.5rem', sizeInPx: '72px' },
    { name: '10XL', variable: '--pgov-font-size-10xl', value: '5rem', sizeInPx: '80px' }
  ];
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {sizes.map((size, index) => (
        <FontSizeDisplay 
          key={index}
          name={size.name}
          variable={size.variable}
          value={size.value}
          sizeInPx={size.sizeInPx}
        />
      ))}
    </div>
  );
};

export const FontWeights = () => {
  const weights = [
    { name: 'Thin', variable: '--pgov-font-weight-thin', value: '100' },
    { name: 'Extra Light', variable: '--pgov-font-weight-extralight', value: '200' },
    { name: 'Light', variable: '--pgov-font-weight-light', value: '300' },
    { name: 'Regular', variable: '--pgov-font-weight-regular', value: '400' },
    { name: 'Medium', variable: '--pgov-font-weight-medium', value: '500' },
    { name: 'Semi Bold', variable: '--pgov-font-weight-semibold', value: '600' },
    { name: 'Bold', variable: '--pgov-font-weight-bold', value: '700' },
    { name: 'Extra Bold', variable: '--pgov-font-weight-extrabold', value: '800' },
    { name: 'Black', variable: '--pgov-font-weight-black', value: '900' }
  ];
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {weights.map((weight, index) => (
        <FontWeightDisplay 
          key={index}
          name={weight.name}
          variable={weight.variable}
          value={weight.value}
        />
      ))}
    </div>
  );
};

export const LineHeights = () => {
  const lineHeights = [
    { name: 'Tight', variable: '--pgov-line-height-tight', value: '1' },
    { name: 'Snug', variable: '--pgov-line-height-snug', value: '1.25' },
    { name: 'Normal', variable: '--pgov-line-height-normal', value: '1.5' },
    { name: 'Relaxed', variable: '--pgov-line-height-relaxed', value: '1.75' },
    { name: 'Loose', variable: '--pgov-line-height-loose', value: '2' }
  ];
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {lineHeights.map((lineHeight, index) => (
        <LineHeightDisplay 
          key={index}
          name={lineHeight.name}
          variable={lineHeight.variable}
          value={lineHeight.value}
        />
      ))}
    </div>
  );
};

export const LetterSpacings = () => {
  const letterSpacings = [
    { name: 'Tighter', variable: '--pgov-letter-spacing-tighter', value: '-0.05em' },
    { name: 'Tight', variable: '--pgov-letter-spacing-tight', value: '-0.025em' },
    { name: 'Normal', variable: '--pgov-letter-spacing-normal', value: '0em' },
    { name: 'Wide', variable: '--pgov-letter-spacing-wide', value: '0.025em' },
    { name: 'Wider', variable: '--pgov-letter-spacing-wider', value: '0.05em' },
    { name: 'Widest', variable: '--pgov-letter-spacing-widest', value: '0.1em' }
  ];
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {letterSpacings.map((letterSpacing, index) => (
        <LetterSpacingDisplay 
          key={index}
          name={letterSpacing.name}
          variable={letterSpacing.variable}
          value={letterSpacing.value}
        />
      ))}
    </div>
  );
};

// Main component that combines all typography displays
export const TypographyDisplay = () => {
  return (
    <div>
      <h2>Typography Tokens</h2>
      <p>The PGOV design system includes a comprehensive set of typography tokens for use in the UI.</p>
    </div>
  );
};

export default TypographyDisplay; 