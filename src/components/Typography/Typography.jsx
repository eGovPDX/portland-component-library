import React from 'react';
import PropTypes from 'prop-types';
import './Typography.css';
import {
  FontFamilies,
  FontSizes,
  FontWeights,
  LineHeights,
  LetterSpacings
} from './components';

export const FontFamilyDisplay = ({ name, variable, value }) => {
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

export const FontSizeDisplay = ({ name, variable, value, sizeInPx }) => {
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
        fontFamily: 'var(--font-family-reading-public-sans)'
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

export const FontWeightDisplay = ({ name, variable, value }) => {
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
        fontFamily: 'var(--font-family-reading-public-sans)'
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

export const LineHeightDisplay = ({ name, variable, value }) => {
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
        fontFamily: 'var(--font-family-reading-public-sans)',
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

export const LetterSpacingDisplay = ({ name, variable, value }) => {
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
        fontFamily: 'var(--font-family-reading-public-sans)',
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

/**
 * Typography Display component that combines all typography token displays
 */
export const Typography = ({ 
  showFontFamilies, 
  showFontSizes, 
  showFontWeights, 
  showLineHeights, 
  showLetterSpacings,
  className 
}) => {
  const containerClassName = ['pgov-typography', className].filter(Boolean).join(' ');
  
  return (
    <div className={containerClassName} data-testid="typography-container">
      <h2 className="pgov-typography-title">Typography Tokens</h2>
      <p className="pgov-typography-description">
        The PGOV design system includes a comprehensive set of typography tokens for use in the UI.
      </p>
      
      {showFontFamilies && (
        <section className="pgov-typography-section">
          <h3 className="pgov-typography-section-title">Font Families</h3>
          <div className="pgov-typography-section-content">
            <FontFamilies />
          </div>
        </section>
      )}
      
      {showFontSizes && (
        <section className="pgov-typography-section">
          <h3 className="pgov-typography-section-title">Font Sizes</h3>
          <div className="pgov-typography-section-content">
            <FontSizes />
          </div>
        </section>
      )}
      
      {showFontWeights && (
        <section className="pgov-typography-section">
          <h3 className="pgov-typography-section-title">Font Weights</h3>
          <div className="pgov-typography-section-content">
            <FontWeights />
          </div>
        </section>
      )}
      
      {showLineHeights && (
        <section className="pgov-typography-section">
          <h3 className="pgov-typography-section-title">Line Heights</h3>
          <div className="pgov-typography-section-content">
            <LineHeights />
          </div>
        </section>
      )}
      
      {showLetterSpacings && (
        <section className="pgov-typography-section">
          <h3 className="pgov-typography-section-title">Letter Spacing</h3>
          <div className="pgov-typography-section-content">
            <LetterSpacings />
          </div>
        </section>
      )}
    </div>
  );
};

Typography.propTypes = {
  /** Whether to show font families section */
  showFontFamilies: PropTypes.bool,
  /** Whether to show font sizes section */
  showFontSizes: PropTypes.bool,
  /** Whether to show font weights section */
  showFontWeights: PropTypes.bool,
  /** Whether to show line heights section */
  showLineHeights: PropTypes.bool,
  /** Whether to show letter spacings section */
  showLetterSpacings: PropTypes.bool,
  /** Additional CSS class */
  className: PropTypes.string
};

Typography.defaultProps = {
  showFontFamilies: true,
  showFontSizes: true,
  showFontWeights: true,
  showLineHeights: true,
  showLetterSpacings: true,
  className: ''
};

// For convenience, we also export all the individual components
export { 
  FontFamilies,
  FontSizes,
  FontWeights,
  LineHeights,
  LetterSpacings
}; 