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
  const containerClassName = ['pgov-banner-header', className].filter(Boolean).join(' ');
  const iconToDisplay = icon || getDefaultIcon();

  return (
    <div className={containerClassName}>
      <div className="pgov-banner-header-inner">
        <div className="pgov-banner-header-content">
          <div className="pgov-banner-header-icon">
            {iconToDisplay}
          </div>
          <p className="pgov-banner-header-text">{domain}</p>
        </div>
        <button 
          className="pgov-banner-button" 
          onClick={onToggle}
          aria-expanded={isExpanded}
          aria-controls="pgov-banner-content"
        >
          <span className="pgov-banner-button-text">Here's how you know</span>
          <span className={`pgov-banner-button-icon ${isExpanded ? 'is-open' : ''}`}>
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

export default BannerHeader; 