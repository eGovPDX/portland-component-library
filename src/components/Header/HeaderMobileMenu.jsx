import React from 'react';
import PropTypes from 'prop-types';

/**
 * Mobile menu button component for the Header
 */
export const HeaderMobileMenu = ({
  isOpen,
  onClick,
  menuText = 'Menu',
  openMenuAriaLabel,
  closeMenuAriaLabel,
  menuId,
}) => {
  return (
    <div className={`header-mobile-menu ${isOpen ? 'is-open' : ''}`}>
      <button 
        className="header-mobile-menu-button"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={isOpen ? closeMenuAriaLabel : openMenuAriaLabel}
        aria-haspopup="true"
        type="button"
      >
        <div className="header-mobile-menu-icon" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className="header-mobile-menu-text">{menuText}</span>
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
  closeMenuAriaLabel: PropTypes.string,
  /** ID of the menu being controlled */
  menuId: PropTypes.string
};

HeaderMobileMenu.defaultProps = {
  menuText: 'Menu',
  openMenuAriaLabel: 'Open menu',
  closeMenuAriaLabel: 'Close menu',
  menuId: 'pgov-header-mobile-menu'
}; 