import React from 'react';

/**
 * Logo component for the Header
 */
export const HeaderLogo = ({
  title,
  logoUrl,
  logoAlt = 'Logo',
  tagline,
  homeUrl = '/',
  homeTitle = 'Home',
  homeAriaLabel = 'Home',
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

export default HeaderLogo; 