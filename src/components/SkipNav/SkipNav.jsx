import React from 'react';
import PropTypes from 'prop-types';
import './SkipNav.css';

/**
 * SkipNav component for keyboard accessibility
 * Provides a link to skip to the main content
 */
export const SkipNav = ({
  text = 'Skip to main content',
  mainContentId = 'main-content',
  className = ''
}) => {
  const containerClassName = ['skipnav', className].filter(Boolean).join(' ');
  
  return (
    <a 
      href={`#${mainContentId}`}
      className={containerClassName}
      data-testid="skip-nav"
    >
      {text}
    </a>
  );
};

SkipNav.propTypes = {
  /** The text to display in the skip nav link */
  text: PropTypes.string,
  /** The ID of the main content element to skip to */
  mainContentId: PropTypes.string,
  /** Custom class name */
  className: PropTypes.string
};

SkipNav.defaultProps = {
  text: 'Skip to main content',
  mainContentId: 'main-content',
  className: ''
}; 