import React, { useState } from 'react';
import './Header.css';
import { HeaderLogo } from './HeaderLogo';
import { HeaderMobileMenu } from './HeaderMobileMenu';
import { HeaderMenuItem } from './HeaderMenuItem';

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  current?: boolean;
}

export interface HeaderProps {
  /**
   * Site title or organization name
   */
  title: string;
  /**
   * URL for the logo image
   */
  logoUrl?: string;
  /**
   * Alt text for the logo image
   */
  logoAlt?: string;
  /**
   * Tagline to display under the logo
   */
  tagline?: string;
  /**
   * Navigation items for the mobile menu
   */
  navItems?: NavItem[];
  /**
   * Optional additional class names
   */
  className?: string;
}

/**
 * Header component for Portland.gov
 */
export const Header: React.FC<HeaderProps> = ({
  title,
  logoUrl,
  logoAlt,
  tagline,
  navItems = [],
  className = '',
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
            <ul className="pgov-header-mobile-nav-list">
              {navItems.map((item, index) => (
                <HeaderMenuItem key={index} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 