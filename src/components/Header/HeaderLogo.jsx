import React from 'react';
import PropTypes from 'prop-types';

/**
 * Logo component for the Header
 */
export const HeaderLogo = ({
  title,
  logoUrl,
  logoAlt,
  tagline,
  homeUrl,
  homeTitle,
  homeAriaLabel,
}) => {
  return (
    <div className="pgov-header-logo">
      <a href={homeUrl} title={homeTitle} aria-label={homeAriaLabel}>
        <div className="pgov-header-logo-container">
          {logoUrl && (
            <img 
              src={logoUrl} 
              alt={logoAlt} 
              className="pgov-header-logo-img" 
            />
          )}
          <div className="pgov-header-logo-text-container">
            <span className="pgov-header-logo-text">{title}</span>
            {tagline && (
              <span className="pgov-header-logo-tagline">{tagline}</span>
            )}
          </div>
        </div>
      </a>
    </div>
  );
};

HeaderLogo.propTypes = {
  /** Title text for the logo */
  title: PropTypes.string.isRequired,
  /** URL for the logo image */
  logoUrl: PropTypes.string,
  /** Alt text for the logo image */
  logoAlt: PropTypes.string,
  /** Optional tagline displayed below the title */
  tagline: PropTypes.string,
  /** URL for the home link */
  homeUrl: PropTypes.string,
  /** Title attribute for the home link */
  homeTitle: PropTypes.string,
  /** Aria label for the home link */
  homeAriaLabel: PropTypes.string
};

HeaderLogo.defaultProps = {
  logoUrl: undefined,
  logoAlt: 'Logo',
  tagline: undefined,
  homeUrl: '/',
  homeTitle: 'Home',
  homeAriaLabel: 'Home'
};

export default HeaderLogo; 