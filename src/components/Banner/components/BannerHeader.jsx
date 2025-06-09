import React from 'react';
import PropTypes from 'prop-types';
import { getDefaultIcon } from '../utils';

/**
 * Header section of the Banner component
 */
export const BannerHeader = ({ 
  domain, 
  icon, 
  isExpanded, 
  onToggle, 
  className 
}) => {
  const containerClassName = ['banner-header', className].filter(Boolean).join(' ');
  const iconToDisplay = icon || getDefaultIcon();

  return (
    <div className={containerClassName}>
      <div className="banner-header-inner">
        <div className="banner-header-content">
          <div className="banner-header-icon">
            {iconToDisplay}
          </div>
          <p className="banner-header-text">{domain}</p>
        </div>
        <button 
          className="banner-button" 
          onClick={onToggle}
          aria-expanded={isExpanded}
          aria-controls="banner-content"
        >
          <span className="banner-button-text">Here's how you know</span>
          <span className={`banner-button-icon ${isExpanded ? 'is-open' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

BannerHeader.propTypes = {
  /** Text describing the domain/owner of the site */
  domain: PropTypes.string.isRequired,
  /** Custom icon element to display in the banner */
  icon: PropTypes.node,
  /** Whether the banner content is expanded */
  isExpanded: PropTypes.bool.isRequired,
  /** Function to toggle the expanded state */
  onToggle: PropTypes.func.isRequired,
  /** Additional CSS class */
  className: PropTypes.string
};

BannerHeader.defaultProps = {
  icon: null,
  className: ''
}; 