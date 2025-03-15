import React from 'react';
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

export default SkipNav; 