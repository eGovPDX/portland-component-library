import React, { useState } from 'react';
import './Header.css';
import { HeaderLogo } from './HeaderLogo';
import { HeaderMobileMenu } from './HeaderMobileMenu';
import { HeaderMenuGroup } from './HeaderMenuGroup';

/**
 * Header component for Portland.gov
 */
export const Header = ({
  title,
  logoUrl,
  logoAlt,
  tagline,
  navItems = [],
  className = '',
  mainHeading = 'General Information',
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`pgov-header ${className}`}>
      <div className="pgov-header-main">
        <div className="pgov-header-container">
          <HeaderLogo
            title={title}
            logoUrl={logoUrl}
            logoAlt={logoAlt}
            tagline={tagline}
          />
          <HeaderMobileMenu
            isOpen={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          />
        </div>
      </div>
      <div className={`pgov-header-mobile-dropdown ${isMobileMenuOpen ? 'is-open' : ''}`}>
        <div className="pgov-header-mobile-menu-content">
          <div className="pgov-header-mobile-nav">
            <HeaderMenuGroup 
              items={navItems}
              mainHeading={mainHeading}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 