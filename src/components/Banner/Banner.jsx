import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Banner.css';

/**
 * Banner component based on USWDS Banner
 */
export const Banner = ({
  domain,
  icon,
  heading,
  description,
  className,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleBanner = () => {
    setIsExpanded(!isExpanded);
  };

  // Default icon if none provided
  const defaultIcon = (
    <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 54C21.375 54 13.5 49.5 9.1875 42C4.875 34.5938 4.875 25.5 9.1875 18C13.5 10.5938 21.375 6 30 6C38.5312 6 46.4062 10.5938 50.7188 18C55.0312 25.5 55.0312 34.5938 50.7188 42C46.4062 49.5 38.5312 54 30 54ZM26.25 37.5C24.9375 37.5 24 38.5312 24 39.75C24 41.0625 24.9375 42 26.25 42H33.75C34.9688 42 36 41.0625 36 39.75C36 38.5312 34.9688 37.5 33.75 37.5H33V29.25C33 28.0312 31.9688 27 30.75 27H26.25C24.9375 27 24 28.0312 24 29.25C24 30.5625 24.9375 31.5 26.25 31.5H28.5V37.5H26.25ZM30 18C28.3125 18 27 19.4062 27 21C27 22.6875 28.3125 24 30 24C31.5938 24 33 22.6875 33 21C33 19.4062 31.5938 18 30 18Z" fill="currentColor"/>
    </svg>
  );

  return (
    <section className={`pgov-banner ${className}`}>
      <div className="pgov-banner-inner">
        <div className="pgov-banner-header">
          <div className="pgov-banner-header-inner">
            <div className="pgov-banner-header-content">
              <div className="pgov-banner-header-icon">
                {icon || defaultIcon}
              </div>
              <p className="pgov-banner-header-text">{domain}</p>
            </div>
            <button 
              className="pgov-banner-button" 
              onClick={toggleBanner}
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
        
        {isExpanded && (
          <div 
            id="pgov-banner-content" 
            className="pgov-banner-content"
          >
            <div className="pgov-banner-guidance">
              <div className="pgov-banner-guidance-icon">
                {icon || defaultIcon}
              </div>
              <div className="pgov-banner-guidance-text">
                <p>
                  <strong>{heading}</strong>
                  <br />
                  {description}
                </p>
              </div>
            </div>
            
            <div className="pgov-banner-guidance">
              <div className="pgov-banner-guidance-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <div className="pgov-banner-guidance-text">
                <p>
                  <strong>Secure websites use HTTPS</strong>
                  <br />
                  A <strong>lock</strong> or <strong>https://</strong> means you've safely connected to the .gov website. Share sensitive information only on official, secure websites.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

Banner.propTypes = {
  /** Text describing the domain/owner of the site */
  domain: PropTypes.string,
  /** Custom icon element to display in the banner */
  icon: PropTypes.node,
  /** Heading text for the banner content */
  heading: PropTypes.string,
  /** Description text for the banner content */
  description: PropTypes.string,
  /** Additional CSS class for the banner */
  className: PropTypes.string
};

Banner.defaultProps = {
  domain: 'An official website of the City of Portland',
  icon: undefined,
  heading: 'Important Information',
  description: 'This is a placeholder description that can be changed in the Banner story.',
  className: ''
};

export default Banner; 