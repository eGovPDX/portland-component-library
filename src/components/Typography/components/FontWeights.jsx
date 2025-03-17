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
  { name: 'Thin', variable: '--pgov-font-weight-thin', value: '100' },
  { name: 'Extra Light', variable: '--pgov-font-weight-extralight', value: '200' },
  { name: 'Light', variable: '--pgov-font-weight-light', value: '300' },
  { name: 'Regular', variable: '--pgov-font-weight-regular', value: '400' },
  { name: 'Medium', variable: '--pgov-font-weight-medium', value: '500' },
  { name: 'Semi Bold', variable: '--pgov-font-weight-semibold', value: '600' },
  { name: 'Bold', variable: '--pgov-font-weight-bold', value: '700' },
  { name: 'Extra Bold', variable: '--pgov-font-weight-extrabold', value: '800' },
  { name: 'Black', variable: '--pgov-font-weight-black', value: '900' }
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