import React from 'react';
import PropTypes from 'prop-types';

/**
 * Mobile menu button component for the Header
 */
export const HeaderMobileMenu = ({
  isOpen,
  onClick,
  menuText = 'Menu',
  openMenuAriaLabel = 'Open menu',
  closeMenuAriaLabel = 'Close menu',
}) => {
  return (
    <div className={`pgov-header-mobile-menu ${isOpen ? 'is-open' : ''}`}>
      <button 
        className="pgov-header-mobile-menu-button"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-label={isOpen ? closeMenuAriaLabel : openMenuAriaLabel}
        type="button"
      >
        <div className="pgov-header-mobile-menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className="pgov-header-mobile-menu-text">{menuText}</span>
      </button>
    </div>
  );
};

HeaderMobileMenu.propTypes = {
  /** Whether the mobile menu is open */
  isOpen: PropTypes.bool.isRequired,
  /** Click handler for the menu button */
  onClick: PropTypes.func.isRequired,
  /** Text displayed on the menu button */
  menuText: PropTypes.string,
  /** Aria label for the button when menu is closed */
  openMenuAriaLabel: PropTypes.string,
  /** Aria label for the button when menu is open */
  closeMenuAriaLabel: PropTypes.string
};

export default HeaderMobileMenu; 