import React from 'react';
import PropTypes from 'prop-types';
import './Spacing.css';

export const SpacingDisplay = ({ name, variable, value, pixels }) => {
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
        width: value,
        height: '24px',
        backgroundColor: '#0050d8',
        borderRadius: '4px'
      }} />
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        textAlign: 'right',
        minWidth: '200px'
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
        }}>{value} ({pixels})</div>
      </div>
    </div>
  );
};

SpacingDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  variable: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  pixels: PropTypes.string.isRequired
};

export const SpacingTokens = () => {
  const spacings = [
    { name: '3XS', variable: '--pgov-spacing-3xs', value: '0.25rem', pixels: '4px' },
    { name: '2XS', variable: '--pgov-spacing-2xs', value: '0.5rem', pixels: '8px' },
    { name: 'XS', variable: '--pgov-spacing-xs', value: '0.75rem', pixels: '12px' },
    { name: 'SM', variable: '--pgov-spacing-sm', value: '1rem', pixels: '16px' },
    { name: 'MD', variable: '--pgov-spacing-md', value: '1.5rem', pixels: '24px' },
    { name: 'LG', variable: '--pgov-spacing-lg', value: '2rem', pixels: '32px' },
    { name: 'XL', variable: '--pgov-spacing-xl', value: '2.5rem', pixels: '40px' },
    { name: '2XL', variable: '--pgov-spacing-2xl', value: '3rem', pixels: '48px' },
    { name: '3XL', variable: '--pgov-spacing-3xl', value: '4rem', pixels: '64px' },
  ];
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {spacings.map((spacing, index) => (
        <SpacingDisplay 
          key={index}
          name={spacing.name}
          variable={spacing.variable}
          value={spacing.value}
          pixels={spacing.pixels}
        />
      ))}
    </div>
  );
};

export const SpacingExamples = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '40px',
      maxWidth: '800px'
    }}>
      <div>
        <h3 style={{ marginBottom: '16px' }}>Margin Examples</h3>
        <div style={{ 
          border: '1px dashed #ddd',
          padding: '20px',
          borderRadius: '4px'
        }}>
          <div style={{ 
            backgroundColor: '#f0f0f0',
            padding: '16px',
            marginBottom: 'var(--pgov-spacing-md)',
            borderRadius: '4px'
          }}>
            Element with margin-bottom: var(--pgov-spacing-md)
          </div>
          <div style={{ 
            backgroundColor: '#f0f0f0',
            padding: '16px',
            borderRadius: '4px'
          }}>
            Next element
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px' }}>Padding Examples</h3>
        <div style={{ 
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div style={{ 
            backgroundColor: '#f0f0f0',
            padding: 'var(--pgov-spacing-xs)',
            borderRadius: '4px',
            width: '200px'
          }}>
            Padding: var(--pgov-spacing-xs)
          </div>
          <div style={{ 
            backgroundColor: '#f0f0f0',
            padding: 'var(--pgov-spacing-md)',
            borderRadius: '4px',
            width: '200px'
          }}>
            Padding: var(--pgov-spacing-md)
          </div>
          <div style={{ 
            backgroundColor: '#f0f0f0',
            padding: 'var(--pgov-spacing-xl)',
            borderRadius: '4px',
            width: '200px'
          }}>
            Padding: var(--pgov-spacing-xl)
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px' }}>Gap Examples</h3>
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <div style={{ 
            display: 'flex',
            gap: 'var(--pgov-spacing-xs)',
            backgroundColor: '#f0f0f0',
            padding: '16px',
            borderRadius: '4px'
          }}>
            <div style={{ backgroundColor: '#0050d8', color: 'white', padding: '8px', borderRadius: '4px' }}>Item</div>
            <div style={{ backgroundColor: '#0050d8', color: 'white', padding: '8px', borderRadius: '4px' }}>Item</div>
            <div style={{ backgroundColor: '#0050d8', color: 'white', padding: '8px', borderRadius: '4px' }}>Item</div>
          </div>
          <div style={{ 
            display: 'flex',
            gap: 'var(--pgov-spacing-md)',
            backgroundColor: '#f0f0f0',
            padding: '16px',
            borderRadius: '4px'
          }}>
            <div style={{ backgroundColor: '#0050d8', color: 'white', padding: '8px', borderRadius: '4px' }}>Item</div>
            <div style={{ backgroundColor: '#0050d8', color: 'white', padding: '8px', borderRadius: '4px' }}>Item</div>
            <div style={{ backgroundColor: '#0050d8', color: 'white', padding: '8px', borderRadius: '4px' }}>Item</div>
          </div>
          <div style={{ 
            display: 'flex',
            gap: 'var(--pgov-spacing-xl)',
            backgroundColor: '#f0f0f0',
            padding: '16px',
            borderRadius: '4px'
          }}>
            <div style={{ backgroundColor: '#0050d8', color: 'white', padding: '8px', borderRadius: '4px' }}>Item</div>
            <div style={{ backgroundColor: '#0050d8', color: 'white', padding: '8px', borderRadius: '4px' }}>Item</div>
            <div style={{ backgroundColor: '#0050d8', color: 'white', padding: '8px', borderRadius: '4px' }}>Item</div>
          </div>
        </div>
      </div>
    </div>
  );
}; 