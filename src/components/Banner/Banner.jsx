import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark, faLock } from '@fortawesome/free-solid-svg-icons';
import './Banner.css';

/**
 * Banner component based on USWDS Banner
 * Displays information about the official nature of government websites
 */
export const Banner = ({
  domain = 'An official website of the City of Portland',
  icon = undefined,
  heading = 'Official websites use .gov',
  description = 'A .gov website belongs to an official government organization in the United States.',
  showHttpsGuidance = true,
  initiallyExpanded = false,
  className = '',
}) => {
  const [isExpanded, setIsExpanded] = useState(initiallyExpanded);
  const containerClassName = ['banner', className].filter(Boolean).join(' ');

  const toggleBanner = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={containerClassName}>
      <div className="banner-content">
        <div className="banner-header">
              <div className="banner-header-icon">
                {icon || (
                  <svg width="24" height="16" viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg">
                    {/* Red stripes */}
                    <rect width="24" height="16" fill="#B22234"/>
                    {/* White stripes */}
                    <rect y="1.23" width="24" height="1.23" fill="white"/>
                    <rect y="3.69" width="24" height="1.23" fill="white"/>
                    <rect y="6.15" width="24" height="1.23" fill="white"/>
                    <rect y="8.62" width="24" height="1.23" fill="white"/>
                    <rect y="11.08" width="24" height="1.23" fill="white"/>
                    <rect y="13.54" width="24" height="1.23" fill="white"/>
                    {/* Blue canton */}
                    <rect width="9.6" height="8.62" fill="#3C3B6E"/>
                    {/* Stars (simplified as white dots) */}
                    <circle cx="1.2" cy="1.1" r="0.3" fill="white"/>
                    <circle cx="2.4" cy="1.1" r="0.3" fill="white"/>
                    <circle cx="3.6" cy="1.1" r="0.3" fill="white"/>
                    <circle cx="4.8" cy="1.1" r="0.3" fill="white"/>
                    <circle cx="6" cy="1.1" r="0.3" fill="white"/>
                    <circle cx="7.2" cy="1.1" r="0.3" fill="white"/>
                    <circle cx="8.4" cy="1.1" r="0.3" fill="white"/>
                    <circle cx="1.8" cy="2.2" r="0.3" fill="white"/>
                    <circle cx="3" cy="2.2" r="0.3" fill="white"/>
                    <circle cx="4.2" cy="2.2" r="0.3" fill="white"/>
                    <circle cx="5.4" cy="2.2" r="0.3" fill="white"/>
                    <circle cx="6.6" cy="2.2" r="0.3" fill="white"/>
                    <circle cx="7.8" cy="2.2" r="0.3" fill="white"/>
                    <circle cx="1.2" cy="3.3" r="0.3" fill="white"/>
                    <circle cx="2.4" cy="3.3" r="0.3" fill="white"/>
                    <circle cx="3.6" cy="3.3" r="0.3" fill="white"/>
                    <circle cx="4.8" cy="3.3" r="0.3" fill="white"/>
                    <circle cx="6" cy="3.3" r="0.3" fill="white"/>
                    <circle cx="7.2" cy="3.3" r="0.3" fill="white"/>
                    <circle cx="8.4" cy="3.3" r="0.3" fill="white"/>
                    <circle cx="1.8" cy="4.4" r="0.3" fill="white"/>
                    <circle cx="3" cy="4.4" r="0.3" fill="white"/>
                    <circle cx="4.2" cy="4.4" r="0.3" fill="white"/>
                    <circle cx="5.4" cy="4.4" r="0.3" fill="white"/>
                    <circle cx="6.6" cy="4.4" r="0.3" fill="white"/>
                    <circle cx="7.8" cy="4.4" r="0.3" fill="white"/>
                    <circle cx="1.2" cy="5.5" r="0.3" fill="white"/>
                    <circle cx="2.4" cy="5.5" r="0.3" fill="white"/>
                    <circle cx="3.6" cy="5.5" r="0.3" fill="white"/>
                    <circle cx="4.8" cy="5.5" r="0.3" fill="white"/>
                    <circle cx="6" cy="5.5" r="0.3" fill="white"/>
                    <circle cx="7.2" cy="5.5" r="0.3" fill="white"/>
                    <circle cx="8.4" cy="5.5" r="0.3" fill="white"/>
                    <circle cx="1.8" cy="6.6" r="0.3" fill="white"/>
                    <circle cx="3" cy="6.6" r="0.3" fill="white"/>
                    <circle cx="4.2" cy="6.6" r="0.3" fill="white"/>
                    <circle cx="5.4" cy="6.6" r="0.3" fill="white"/>
                    <circle cx="6.6" cy="6.6" r="0.3" fill="white"/>
                    <circle cx="7.8" cy="6.6" r="0.3" fill="white"/>
                    <circle cx="1.2" cy="7.7" r="0.3" fill="white"/>
                    <circle cx="2.4" cy="7.7" r="0.3" fill="white"/>
                    <circle cx="3.6" cy="7.7" r="0.3" fill="white"/>
                    <circle cx="4.8" cy="7.7" r="0.3" fill="white"/>
                    <circle cx="6" cy="7.7" r="0.3" fill="white"/>
                    <circle cx="7.2" cy="7.7" r="0.3" fill="white"/>
                    <circle cx="8.4" cy="7.7" r="0.3" fill="white"/>
                  </svg>
                )}
              </div>
              <p className="banner-header-text">{domain}</p>
            </div>
            <button 
              className="banner-button" 
              onClick={toggleBanner}
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
        
        {isExpanded && (
          <div 
            id="banner-expanded-content" 
            className="banner-expanded-content"
          >
            <div className="banner-guidance">
              <div className="banner-guidance-icon">
                {<FontAwesomeIcon icon={faLandmark} style={{ fontSize: '40px', color: '#2378C3' }} /> || null}
              </div>
              <div className="banner-guidance-text">
                <p>
                  <strong>{heading}</strong>
                  <br />
                  {description}
                </p>
              </div>
            </div>
            
            {showHttpsGuidance && (
              <div className="banner-guidance">
                <div className="banner-guidance-icon">
                  <FontAwesomeIcon icon={faLock} style={{ fontSize: '40px', color: '#719F2A' }} />
                </div>
                <div className="banner-guidance-text">
                  <p>
                    <strong>Secure websites use HTTPS</strong>
                    <br />
                    A <strong>lock</strong> or <strong>https://</strong> means you've safely connected to the .gov website. Share sensitive information only on official, secure websites.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
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
  description: PropTypes.node,
  /** Whether to show the HTTPS guidance section */
  showHttpsGuidance: PropTypes.bool,
  /** Whether the banner content is initially expanded */
  initiallyExpanded: PropTypes.bool,
  /** Additional CSS class for the banner */
  className: PropTypes.string
};

Banner.defaultProps = {
  domain: 'An official website of the City of Portland',
  icon: undefined,
  heading: 'Official websites use .gov',
  description: 'A .gov website belongs to an official government organization in the United States.',
  showHttpsGuidance: true,
  initiallyExpanded: false,
  className: ''
}; 