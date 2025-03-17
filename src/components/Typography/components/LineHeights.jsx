import React from 'react';
import PropTypes from 'prop-types';
import LineHeightDisplay from './LineHeightDisplay';

/**
 * Displays a collection of all line heights
 */
export const LineHeights = ({ lineHeights, className }) => {
  const containerClassName = ['pgov-line-heights', className].filter(Boolean).join(' ');
  const lineHeightsToRender = lineHeights || defaultLineHeights;
  
  return (
    <div className={containerClassName}>
      {lineHeightsToRender.map((lineHeight, index) => (
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

// Default line heights used in the design system
const defaultLineHeights = [
  { name: 'Tight', variable: '--pgov-line-height-tight', value: '1' },
  { name: 'Snug', variable: '--pgov-line-height-snug', value: '1.25' },
  { name: 'Normal', variable: '--pgov-line-height-normal', value: '1.5' },
  { name: 'Relaxed', variable: '--pgov-line-height-relaxed', value: '1.75' },
  { name: 'Loose', variable: '--pgov-line-height-loose', value: '2' }
];

LineHeights.propTypes = {
  /** Array of line height objects */
  lineHeights: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      variable: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ),
  /** Additional CSS class */
  className: PropTypes.string
};

LineHeights.defaultProps = {
  lineHeights: defaultLineHeights,
  className: ''
};

export default LineHeights; 