import React from 'react';
import PropTypes from 'prop-types';
import LetterSpacingDisplay from './LetterSpacingDisplay';

/**
 * Displays a collection of all letter spacings
 */
export const LetterSpacings = ({ letterSpacings, className }) => {
  const containerClassName = ['pgov-letter-spacings', className].filter(Boolean).join(' ');
  const letterSpacingsToRender = letterSpacings || defaultLetterSpacings;
  
  return (
    <div className={containerClassName}>
      {letterSpacingsToRender.map((letterSpacing, index) => (
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

// Default letter spacings used in the design system
const defaultLetterSpacings = [
  { name: 'Tighter', variable: '-0.05em', value: '-0.05em' },
  { name: 'Tight', variable: '-0.01em', value: '-0.025em' },
  { name: 'Normal', variable: '0', value: '0em' },
  { name: 'Wide', variable: '0.025em', value: '0.025em' },
  { name: 'Wider', variable: '0.05em', value: '0.05em' },
  { name: 'Widest', variable: '0.1em', value: '0.1em' }
];

LetterSpacings.propTypes = {
  /** Array of letter spacing objects */
  letterSpacings: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      variable: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ),
  /** Additional CSS class */
  className: PropTypes.string
};

LetterSpacings.defaultProps = {
  letterSpacings: defaultLetterSpacings,
  className: ''
};

export default LetterSpacings; 