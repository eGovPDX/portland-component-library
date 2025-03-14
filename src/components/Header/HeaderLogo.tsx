import React from 'react';

export interface HeaderLogoProps {
  /**
   * Site title or organization name
   */
  title: string;
  /**
   * Optional logo URL
   */
  logoUrl?: string;
  /**
   * Optional logo alt text
   */
  logoAlt?: string;
  /**
   * Optional tagline text
   */
  tagline?: string;
}

/**
 * Logo component for the Header
 */
export const HeaderLogo: React.FC<HeaderLogoProps> = ({
  title,
  logoUrl,
  logoAlt = 'Logo',
  tagline,
}) => {
  return (
    <div className="pgov-header-logo">
      <a href="/" title="Home" aria-label="Home">
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