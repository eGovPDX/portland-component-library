import React from 'react';
import PropTypes from 'prop-types';
import FontWeightDisplay from './FontWeightDisplay';

/**
 * Displays a collection of all font weights
 */
export const FontWeights = ({ weights, className }) => {
  const containerClassName = ['pgov-font-weights', className].filter(Boolean).join(' ');
  const weightsToRender = weights || defaultWeights;
  
  return (
    <div className={containerClassName}>
      {weightsToRender.map((weight, index) => (
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

// Default font weights used in the design system
const defaultWeights = [
  { name: 'Thin', variable: '--theme-font-weight-thin', value: '100' },
  { name: 'Light', variable: '--theme-font-weight-light', value: '300' },
  { name: 'Regular', variable: '--theme-font-weight-normal', value: '400' },
  { name: 'Semi Bold', variable: '--theme-font-weight-semibold', value: '600' },
  { name: 'Bold', variable: '--theme-font-weight-bold', value: '700' },
  { name: 'Extra Bold', variable: '--theme-font-weight-heavy', value: '800' },
];

FontWeights.propTypes = {
  /** Array of font weight objects */
  weights: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      variable: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ),
  /** Additional CSS class */
  className: PropTypes.string
};

FontWeights.defaultProps = {
  weights: defaultWeights,
  className: ''
};

export default FontWeights; 