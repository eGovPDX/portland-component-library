import { useState } from 'react';
import PropTypes from 'prop-types';
import { useComponentTranslation } from '../../hooks/useTranslation';
import './PGOVHeader.css';
import { HeaderLogo } from './HeaderLogo';
import { HeaderMenuGroup } from './HeaderMenuGroup';

/**
 * PGOVHeader component for Portland.gov
 */
export const PGOVHeader = ({
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
  const { t } = useComponentTranslation('PGOVHeader');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${className || ''}`}>
      <div className="header-main">
        <div className="header-container">
          <div className="header-logo">
            <HeaderLogo
              logoUrl={logoUrl}
              logoAlt={logoAlt || t('defaults.logoAlt')}
            />
          </div>
                      <div className="header-text-container">
            <span className="header-title">{title || t('defaults.title')}</span>
            {tagline && (
              <span className="header-tagline" data-testid="tagline">{tagline}</span>
            )}
          </div>
          <div className={`header-mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
            <button
              className="header-mobile-menu-button"
              aria-label={isMenuOpen ? (closeMenuAriaLabel || t('defaults.closeMenuAriaLabel')) : (openMenuAriaLabel || t('defaults.openMenuAriaLabel'))}
              aria-expanded={isMenuOpen}
              aria-controls="header-mobile-dropdown"
              onClick={toggleMenu}
            >
              <span className="header-mobile-menu-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <span className="header-mobile-menu-text" aria-hidden="true">{menuText || t('defaults.menuText')}</span>
            </button>
          </div>
        </div>
      </div>
      <div 
        id="header-mobile-dropdown" 
        className={`header-mobile-dropdown ${isMenuOpen ? 'is-open' : ''}`}
      >
        <div className="header-mobile-menu-content">
          <nav className="header-mobile-nav" aria-label="Primary navigation">
            <HeaderMenuGroup
              items={navItems}
              mainHeading={mainHeading || t('defaults.mainHeading')}
              id="header-menu-group"
            />
          </nav>
        </div>
      </div>
    </header>
  );
};

PGOVHeader.propTypes = {
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

PGOVHeader.defaultProps = {
  title: undefined, // Will use translation if not provided
  logoUrl: undefined,
  logoAlt: undefined, // Will use translation if not provided
  tagline: undefined,
  mainHeading: undefined, // Will use translation if not provided
  menuText: undefined, // Will use translation if not provided
  openMenuAriaLabel: undefined, // Will use translation if not provided
  closeMenuAriaLabel: undefined, // Will use translation if not provided
  className: undefined
}; 