import React from 'react';
import PropTypes from 'prop-types';
import FontSizeDisplay from './FontSizeDisplay';

/**
 * Displays a collection of all font sizes
 */
export const FontSizes = ({ sizes, className }) => {
  const containerClassName = ['pgov-font-sizes', className].filter(Boolean).join(' ');
  const sizesToRender = sizes || defaultSizes;
  
  return (
    <div className={containerClassName}>
      {sizesToRender.map((size, index) => (
        <FontSizeDisplay 
          key={index}
          name={size.name}
          variable={size.variable}
          value={size.value}
          sizeInPx={size.sizeInPx}
        />
      ))}
    </div>
  );
};

// Default font sizes used in the design system
const defaultSizes = [
  { name: '3XS', variable: '--pgov-font-size-3xs', value: '0.5rem', sizeInPx: '8px' },
  { name: '2XS', variable: '--pgov-font-size-2xs', value: '0.625rem', sizeInPx: '10px' },
  { name: 'XS', variable: '--pgov-font-size-xs', value: '0.75rem', sizeInPx: '12px' },
  { name: 'SM', variable: '--pgov-font-size-sm', value: '0.875rem', sizeInPx: '14px' },
  { name: 'MD', variable: '--pgov-font-size-md', value: '1rem', sizeInPx: '16px' },
  { name: 'LG', variable: '--pgov-font-size-lg', value: '1.125rem', sizeInPx: '18px' },
  { name: 'XL', variable: '--pgov-font-size-xl', value: '1.25rem', sizeInPx: '20px' },
  { name: '2XL', variable: '--pgov-font-size-2xl', value: '1.5rem', sizeInPx: '24px' },
  { name: '3XL', variable: '--pgov-font-size-3xl', value: '1.75rem', sizeInPx: '28px' },
  { name: '4XL', variable: '--pgov-font-size-4xl', value: '2rem', sizeInPx: '32px' },
  { name: '5XL', variable: '--pgov-font-size-5xl', value: '2.5rem', sizeInPx: '40px' },
  { name: '6XL', variable: '--pgov-font-size-6xl', value: '3rem', sizeInPx: '48px' },
  { name: '7XL', variable: '--pgov-font-size-7xl', value: '3.5rem', sizeInPx: '56px' },
  { name: '8XL', variable: '--pgov-font-size-8xl', value: '4rem', sizeInPx: '64px' },
  { name: '9XL', variable: '--pgov-font-size-9xl', value: '4.5rem', sizeInPx: '72px' },
  { name: '10XL', variable: '--pgov-font-size-10xl', value: '5rem', sizeInPx: '80px' }
];

FontSizes.propTypes = {
  /** Array of font size objects */
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      variable: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      sizeInPx: PropTypes.string.isRequired
    })
  ),
  /** Additional CSS class */
  className: PropTypes.string
};

FontSizes.defaultProps = {
  sizes: defaultSizes,
  className: ''
};

export default FontSizes; 