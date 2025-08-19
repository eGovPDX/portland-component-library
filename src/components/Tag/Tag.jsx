import React from 'react';
import PropTypes from 'prop-types';
import './Tag.css';

/**
 * Small label badge with optional big variant.
 *
 * @component
 * @param {Object} props - Component props
 * @param {('default'|'big')} [props.variant='default'] - Visual size variant
 * @param {React.ReactNode} props.children - Tag content
 * @param {string} [props.className] - Additional CSS class names
 * @returns {JSX.Element} Tag element
 */
export const Tag = ({ variant = 'default', children, className, ...props }) => {
  const baseClassName = 'usa-tag';
  const variantClassName = variant === 'big' ? 'usa-tag--big' : '';
  const classes = [baseClassName, variantClassName, className].filter(Boolean).join(' ');

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

Tag.propTypes = {
  /** The content of the tag */
  children: PropTypes.node.isRequired,
  /** The variant of the tag */
  variant: PropTypes.oneOf(['default', 'big']),
  /** Additional className to be applied to the tag */
  className: PropTypes.string,
}; 