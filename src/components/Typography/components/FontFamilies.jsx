import React from 'react';
import PropTypes from 'prop-types';
import FontFamilyDisplay from './FontFamilyDisplay';

/**
 * Displays a collection of all font families
 */
export const FontFamilies = ({ families, className }) => {
  const containerClassName = ['pgov-font-families', className].filter(Boolean).join(' ');
  const familiesToRender = families || defaultFamilies;
  
  return (
    <div className={containerClassName}>
      {familiesToRender.map((family, index) => (
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

// Default font families used in the design system
const defaultFamilies = [
  { 
    name: 'Sans Serif', 
    variable: 'var(--font-family-reading-public-sans)', 
    value: "Public Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" 
  },
  { 
    name: 'Serif', 
    variable: 'var(--font-family-display-merriweather)', 
    value: "Merriweather, Georgia, Cambria, 'Times New Roman', Times, serif" 
  },
  { 
    name: 'Monospace', 
    variable: 'var(--font-family-mono-roboto-mono)', 
    value: "'Roboto Mono', Consolas, Monaco, 'Andale Mono', monospace" 
  }
];

FontFamilies.propTypes = {
  /** Array of font family objects */
  families: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      variable: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ),
  /** Additional CSS class */
  className: PropTypes.string
};

FontFamilies.defaultProps = {
  families: defaultFamilies,
  className: ''
};

export default FontFamilies; 