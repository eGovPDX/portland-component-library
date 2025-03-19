import { React, useState } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import HeaderLogo from './HeaderLogo';
import HeaderMobileMenu from './HeaderMobileMenu';
import HeaderMenuGroup from './HeaderMenuGroup';

/**
 * Header component for Portland.gov
 */
const Header = ({
  title,
  logoUrl,
  logoAlt,
  tagline,
  navItems,
  className,
  mainHeading,
  menuText,
  openMenuAriaLabel,
  closeMenuAriaLabel,
  homeTitle,
  homeAriaLabel,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuId = "pgov-header-mobile-menu";
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`pgov-header ${className}`} role="banner">
      <div className="pgov-header-main">
        <div className="pgov-header-container">
          <HeaderLogo
            title={title}
            logoUrl={logoUrl}
            logoAlt={logoAlt}
            tagline={tagline}
            homeTitle={homeTitle}
            homeAriaLabel={homeAriaLabel}
          />
          <HeaderMobileMenu
            isOpen={isMobileMenuOpen}
            onClick={toggleMobileMenu}
            menuId={menuId}
            menuText={menuText}
            openMenuAriaLabel={openMenuAriaLabel}
            closeMenuAriaLabel={closeMenuAriaLabel}
          />
        </div>
      </div>
      <div 
        id={menuId} 
        className={`pgov-header-mobile-dropdown ${isMobileMenuOpen ? 'is-open' : ''}`}
        aria-labelledby={menuId}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="pgov-header-mobile-menu-content">
          <div className="pgov-header-mobile-nav">
            <HeaderMenuGroup 
              items={navItems}
              mainHeading={mainHeading}
              id="pgov-header-main-nav"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  /** Title displayed in the header */
  title: PropTypes.string.isRequired,
  /** URL for the logo image */
  logoUrl: PropTypes.string,
  /** Alt text for the logo image */
  logoAlt: PropTypes.string,
  /** Tagline displayed below the title */
  tagline: PropTypes.string,
  /** Array of navigation items */
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  ),
  /** Additional CSS class for the header */
  className: PropTypes.string,
  /** Main heading for the navigation group */
  mainHeading: PropTypes.string,
  /** Text displayed on the menu button */
  menuText: PropTypes.string,
  /** Aria label for the menu button when closed */
  openMenuAriaLabel: PropTypes.string,
  /** Aria label for the menu button when open */
  closeMenuAriaLabel: PropTypes.string,
  /** Text for the home link */
  homeTitle: PropTypes.string,
  /** Aria label for the home link */
  homeAriaLabel: PropTypes.string
};

Header.defaultProps = {
  logoUrl: undefined,
  logoAlt: undefined,
  tagline: undefined,
  navItems: [],
  className: '',
  mainHeading: 'General Information',
  menuText: 'Menu',
  openMenuAriaLabel: 'Open menu',
  closeMenuAriaLabel: 'Close menu',
  homeTitle: 'Home',
  homeAriaLabel: 'Homepage'
};

export default Header; 