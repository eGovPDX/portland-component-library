import React from 'react';
import PropTypes from 'prop-types';
import './SkipNav.css';

/**
 * SkipNav component for accessibility
 */
export const SkipNav = ({
  skipToId = 'main-content',
  label = 'Skip to main content',
  className = '',
}) => {
  return (
    <a 
      href={`#${skipToId}`} 
      className={`pgov-skipnav ${className}`}
    >
      {label}
    </a>
  );
};

SkipNav.propTypes = {
  /** ID of the element to skip to */
  skipToId: PropTypes.string,
  /** Link text */
  label: PropTypes.string,
  /** Additional CSS class */
  className: PropTypes.string
};

export default SkipNav; 