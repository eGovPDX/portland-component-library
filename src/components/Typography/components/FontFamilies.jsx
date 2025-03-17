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
    variable: '--pgov-font-family-sans', 
    value: "'Source Sans Pro', 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif" 
  },
  { 
    name: 'Serif', 
    variable: '--pgov-font-family-serif', 
    value: "Merriweather, Georgia, Cambria, 'Times New Roman', Times, serif" 
  },
  { 
    name: 'Monospace', 
    variable: '--pgov-font-family-mono', 
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