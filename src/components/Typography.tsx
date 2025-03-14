import React from 'react';

interface FontFamilyProps {
  name: string;
  variable: string;
  value: string;
}

interface FontSizeProps {
  name: string;
  variable: string;
  value: string;
  sizeInPx: string;
}

interface FontWeightProps {
  name: string;
  variable: string;
  value: string;
}

interface LineHeightProps {
  name: string;
  variable: string;
  value: string;
}

interface LetterSpacingProps {
  name: string;
  variable: string;
  value: string;
}

const FontFamilyDisplay: React.FC<FontFamilyProps> = ({ name, variable, value }) => {
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

const FontSizeDisplay: React.FC<FontSizeProps> = ({ name, variable, value, sizeInPx }) => {
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

const FontWeightDisplay: React.FC<FontWeightProps> = ({ name, variable, value }) => {
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

const LineHeightDisplay: React.FC<LineHeightProps> = ({ name, variable, value }) => {
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

const LetterSpacingDisplay: React.FC<LetterSpacingProps> = ({ name, variable, value }) => {
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

export const FontFamilies: React.FC = () => {
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

export const FontSizes: React.FC = () => {
  const sizes = [
    { name: '3XS', variable: '--pgov-font-size-3xs', value: '0.75rem', sizeInPx: '12px' },
    { name: '2XS', variable: '--pgov-font-size-2xs', value: '0.875rem', sizeInPx: '14px' },
    { name: 'XS (Base)', variable: '--pgov-font-size-xs', value: '1rem', sizeInPx: '16px' },
    { name: 'SM', variable: '--pgov-font-size-sm', value: '1.125rem', sizeInPx: '18px' },
    { name: 'MD', variable: '--pgov-font-size-md', value: '1.25rem', sizeInPx: '20px' },
    { name: 'LG', variable: '--pgov-font-size-lg', value: '1.5rem', sizeInPx: '24px' },
    { name: 'XL', variable: '--pgov-font-size-xl', value: '1.75rem', sizeInPx: '28px' },
    { name: '2XL', variable: '--pgov-font-size-2xl', value: '2rem', sizeInPx: '32px' },
    { name: '3XL', variable: '--pgov-font-size-3xl', value: '2.5rem', sizeInPx: '40px' }
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

export const FontWeights: React.FC = () => {
  const weights = [
    { name: 'Light', variable: '--pgov-font-weight-light', value: '300' },
    { name: 'Normal', variable: '--pgov-font-weight-normal', value: '400' },
    { name: 'Medium', variable: '--pgov-font-weight-medium', value: '500' },
    { name: 'Semibold', variable: '--pgov-font-weight-semibold', value: '600' },
    { name: 'Bold', variable: '--pgov-font-weight-bold', value: '700' }
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

export const LineHeights: React.FC = () => {
  const lineHeights = [
    { name: 'Tight', variable: '--pgov-line-height-tight', value: '1.1' },
    { name: 'Normal', variable: '--pgov-line-height-normal', value: '1.5' },
    { name: 'Loose', variable: '--pgov-line-height-loose', value: '1.7' }
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

export const LetterSpacings: React.FC = () => {
  const letterSpacings = [
    { name: 'Tight', variable: '--pgov-letter-spacing-tight', value: '-0.01em' },
    { name: 'Normal', variable: '--pgov-letter-spacing-normal', value: '0' },
    { name: 'Loose', variable: '--pgov-letter-spacing-loose', value: '0.025em' }
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
export const TypographyDisplay: React.FC = () => {
  return (
    <div>
      <h2>Typography Tokens</h2>
      <p>The PGOV design system includes a comprehensive set of typography tokens for use in the UI.</p>
    </div>
  );
}; 