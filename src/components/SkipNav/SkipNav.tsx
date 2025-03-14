import React from 'react';
import './SkipNav.css';

export interface SkipNavProps {
  /**
   * The ID of the main content element to skip to
   */
  skipToId?: string;
  /**
   * The text to display in the skip link
   */
  label?: string;
  /**
   * Optional additional class names
   */
  className?: string;
}

/**
 * SkipNav component for accessibility
 */
export const SkipNav: React.FC<SkipNavProps> = ({
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