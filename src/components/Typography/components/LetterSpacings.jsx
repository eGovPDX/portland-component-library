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
  { name: 'Tighter', variable: '--pgov-letter-spacing-tighter', value: '-0.05em' },
  { name: 'Tight', variable: '--pgov-letter-spacing-tight', value: '-0.025em' },
  { name: 'Normal', variable: '--pgov-letter-spacing-normal', value: '0em' },
  { name: 'Wide', variable: '--pgov-letter-spacing-wide', value: '0.025em' },
  { name: 'Wider', variable: '--pgov-letter-spacing-wider', value: '0.05em' },
  { name: 'Widest', variable: '--pgov-letter-spacing-widest', value: '0.1em' }
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