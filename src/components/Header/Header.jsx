import { React, useState } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { HeaderLogo } from './HeaderLogo';
import { HeaderMenuGroup } from './HeaderMenuGroup';

/**
 * Header component for Portland.gov
 */
export const Header = ({
  title,
  logoUrl,
  logoAlt,
  tagline,
  navItems,
  mainHeading,
  menuText,
  openMenuAriaLabel,
  closeMenuAriaLabel,
  className,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`pgov-header ${className || ''}`}>
      <div className="pgov-header-main">
        <div className="pgov-header-container">
          <div className="pgov-header-logo">
            <HeaderLogo
              title={title}
              logoUrl={logoUrl}
              logoAlt={logoAlt}
              tagline={tagline}
            />
          </div>
          <div className={`pgov-header-mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
            <button
              className="pgov-header-mobile-menu-button"
              aria-label={isMenuOpen ? closeMenuAriaLabel : openMenuAriaLabel}
              aria-expanded={isMenuOpen}
              aria-controls="pgov-header-mobile-dropdown"
              onClick={toggleMenu}
            >
              <span className="pgov-header-mobile-menu-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <span className="pgov-header-mobile-menu-text" aria-hidden="true">{menuText}</span>
            </button>
          </div>
        </div>
      </div>
      <div 
        id="pgov-header-mobile-dropdown" 
        className={`pgov-header-mobile-dropdown ${isMenuOpen ? 'is-open' : ''}`}
      >
        <div className="pgov-header-mobile-menu-content">
          <nav className="pgov-header-mobile-nav" aria-label="Primary navigation">
            <HeaderMenuGroup
              items={navItems}
              mainHeading={mainHeading}
              id="pgov-header-menu-group"
            />
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  /** Title text for the header */
  title: PropTypes.string.isRequired,
  /** URL for the logo image */
  logoUrl: PropTypes.string,
  /** Alt text for the logo image */
  logoAlt: PropTypes.string,
  /** Optional tagline displayed below the title */
  tagline: PropTypes.string,
  /** Array of navigation items */
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      description: PropTypes.string,
      current: PropTypes.bool
    })
  ).isRequired,
  /** Main heading text for the navigation menu */
  mainHeading: PropTypes.string,
  /** Text for the menu button */
  menuText: PropTypes.string,
  /** Aria label for opening the menu */
  openMenuAriaLabel: PropTypes.string,
  /** Aria label for closing the menu */
  closeMenuAriaLabel: PropTypes.string,
  /** Additional CSS class names */
  className: PropTypes.string
};

Header.defaultProps = {
  logoUrl: undefined,
  logoAlt: 'Logo',
  tagline: undefined,
  mainHeading: 'General Information',
  menuText: 'Menu',
  openMenuAriaLabel: 'Menu',
  closeMenuAriaLabel: 'Close menu',
  className: undefined
}; 