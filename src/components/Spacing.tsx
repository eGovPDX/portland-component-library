import React from 'react';

interface SpacingProps {
  name: string;
  variable: string;
  value: string;
  sizeInPx: string;
}

const SpacingItem: React.FC<SpacingProps> = ({ name, variable, value, sizeInPx }) => {
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
        display: 'flex',
        alignItems: 'center',
        marginBottom: '16px'
      }}>
        <div style={{ 
          width: value,
          height: '24px',
          backgroundColor: '#0050d8',
          marginRight: '16px'
        }} />
        <div style={{ fontSize: '14px' }}>{value} ({sizeInPx})</div>
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
      </div>
    </div>
  );
};

export const SpacingValues: React.FC = () => {
  const spacings = [
    { name: '3XS', variable: '--pgov-spacing-3xs', value: '0.25rem', sizeInPx: '4px' },
    { name: '2XS', variable: '--pgov-spacing-2xs', value: '0.5rem', sizeInPx: '8px' },
    { name: 'XS', variable: '--pgov-spacing-xs', value: '0.75rem', sizeInPx: '12px' },
    { name: 'SM', variable: '--pgov-spacing-sm', value: '1rem', sizeInPx: '16px' },
    { name: 'MD', variable: '--pgov-spacing-md', value: '1.5rem', sizeInPx: '24px' },
    { name: 'LG', variable: '--pgov-spacing-lg', value: '2rem', sizeInPx: '32px' },
    { name: 'XL', variable: '--pgov-spacing-xl', value: '2.5rem', sizeInPx: '40px' },
    { name: '2XL', variable: '--pgov-spacing-2xl', value: '3rem', sizeInPx: '48px' },
    { name: '3XL', variable: '--pgov-spacing-3xl', value: '4rem', sizeInPx: '64px' }
  ];
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {spacings.map((spacing, index) => (
        <SpacingItem 
          key={index}
          name={spacing.name}
          variable={spacing.variable}
          value={spacing.value}
          sizeInPx={spacing.sizeInPx}
        />
      ))}
    </div>
  );
};

export const BorderRadiusDisplay: React.FC<SpacingProps> = ({ name, variable, value, sizeInPx }) => {
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
        display: 'flex',
        alignItems: 'center',
        marginBottom: '16px'
      }}>
        <div style={{ 
          width: '100px',
          height: '100px',
          backgroundColor: '#0050d8',
          borderRadius: value,
          marginRight: '16px'
        }} />
        <div style={{ fontSize: '14px' }}>{value} ({sizeInPx})</div>
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
      </div>
    </div>
  );
};

export const BorderRadiusValues: React.FC = () => {
  const borderRadii = [
    { name: 'Small', variable: '--pgov-border-radius-sm', value: '2px', sizeInPx: '2px' },
    { name: 'Medium', variable: '--pgov-border-radius-md', value: '4px', sizeInPx: '4px' },
    { name: 'Large', variable: '--pgov-border-radius-lg', value: '8px', sizeInPx: '8px' },
    { name: 'Pill', variable: '--pgov-border-radius-pill', value: '999px', sizeInPx: '999px' }
  ];
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {borderRadii.map((radius, index) => (
        <BorderRadiusDisplay 
          key={index}
          name={radius.name}
          variable={radius.variable}
          value={radius.value}
          sizeInPx={radius.sizeInPx}
        />
      ))}
    </div>
  );
};

// Example usage of spacing in UI components
export const SpacingExamples: React.FC = () => {
  return (
    <div style={{ 
      margin: '10px', 
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      width: '100%',
      maxWidth: '600px'
    }}>
      <h3>Spacing in UI Components</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <h4>Button Padding</h4>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <button style={{ 
            padding: 'var(--pgov-spacing-3xs) var(--pgov-spacing-xs)',
            backgroundColor: '#0050d8',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}>
            Small Button
          </button>
          <button style={{ 
            padding: 'var(--pgov-spacing-2xs) var(--pgov-spacing-sm)',
            backgroundColor: '#0050d8',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}>
            Medium Button
          </button>
          <button style={{ 
            padding: 'var(--pgov-spacing-xs) var(--pgov-spacing-md)',
            backgroundColor: '#0050d8',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}>
            Large Button
          </button>
        </div>
      </div>
      
      <div>
        <h4>Card Spacing</h4>
        <div style={{ 
          padding: 'var(--pgov-spacing-md)',
          border: '1px solid #ddd',
          borderRadius: 'var(--pgov-border-radius-md)'
        }}>
          <h5 style={{ marginTop: 0, marginBottom: 'var(--pgov-spacing-xs)' }}>Card Title</h5>
          <p style={{ marginBottom: 'var(--pgov-spacing-sm)' }}>
            This card uses spacing tokens for consistent padding and margins.
          </p>
          <button style={{ 
            padding: 'var(--pgov-spacing-2xs) var(--pgov-spacing-sm)',
            backgroundColor: '#0050d8',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--pgov-border-radius-md)'
          }}>
            Action
          </button>
        </div>
      </div>
    </div>
  );
};

// Main component that combines all spacing displays
export const SpacingDocumentation: React.FC = () => {
  return (
    <div>
      <h2>Spacing Tokens</h2>
      <p>The PGOV design system includes a comprehensive set of spacing tokens for use in the UI.</p>
    </div>
  );
}; 