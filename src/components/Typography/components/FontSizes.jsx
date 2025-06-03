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
  { name: 'XS', variable: 'var(--font-size-1)', value: '0.75rem', sizeInPx: '12px' },
  { name: 'SM', variable: 'var(--font-size-3)', value: '0.875rem', sizeInPx: '14px' },
  { name: 'MD', variable: 'var(--font-size-5)', value: '1rem', sizeInPx: '16px' },
  { name: 'LG', variable: 'var(--font-size-7)', value: '1.125rem', sizeInPx: '18px' },
  { name: 'XL', variable: 'var(--font-size-8)', value: '1.25rem', sizeInPx: '20px' },
  { name: '2XL', variable: 'var(--font-size-10)', value: '1.5rem', sizeInPx: '24px' },
  { name: '3XL', variable: 'var(--font-size-11)', value: '1.75rem', sizeInPx: '28px' },
  { name: '4XL', variable: 'var(--font-size-12)', value: '2rem', sizeInPx: '32px' },
  { name: '5XL', variable: 'var(--font-size-14)', value: '2.5rem', sizeInPx: '40px' },
  { name: '6XL', variable: 'var(--font-size-15)', value: '3rem', sizeInPx: '48px' },
  { name: '7XL', variable: 'var(--font-size-16)', value: '3.5rem', sizeInPx: '56px' },
  { name: '8XL', variable: 'var(--font-size-17)', value: '4rem', sizeInPx: '64px' },
  { name: '10XL', variable: 'var(--font-size-18)', value: '5rem', sizeInPx: '80px' }
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