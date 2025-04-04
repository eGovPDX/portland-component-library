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
    <div className={containerClassName}>
      <h2 className="pgov-typography-title">Typography Tokens</h2>
      <p className="pgov-typography-description">
        The PGOV design system includes a comprehensive set of typography tokens for use in the UI.
      </p>
      
      {showFontFamilies && (
        <div className="pgov-typography-section">
          <h3 className="pgov-typography-section-title">Font Families</h3>
          <p className="pgov-typography-section-description">
            These font families are used throughout the PGOV design system.
          </p>
          <FontFamilies />
        </div>
      )}
      
      {showFontSizes && (
        <div className="pgov-typography-section">
          <h3 className="pgov-typography-section-title">Font Sizes</h3>
          <p className="pgov-typography-section-description">
            A range of font sizes from smallest (3XS) to largest (10XL).
          </p>
          <FontSizes />
        </div>
      )}
      
      {showFontWeights && (
        <div className="pgov-typography-section">
          <h3 className="pgov-typography-section-title">Font Weights</h3>
          <p className="pgov-typography-section-description">
            Font weights from light to bold.
          </p>
          <FontWeights />
        </div>
      )}
      
      {showLineHeights && (
        <div className="pgov-typography-section">
          <h3 className="pgov-typography-section-title">Line Heights</h3>
          <p className="pgov-typography-section-description">
            Line height options for different text densities.
          </p>
          <LineHeights />
        </div>
      )}
      
      {showLetterSpacings && (
        <div className="pgov-typography-section">
          <h3 className="pgov-typography-section-title">Letter Spacing</h3>
          <p className="pgov-typography-section-description">
            Letter spacing options for different text styles.
          </p>
          <LetterSpacings />
        </div>
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

export default Typography; 