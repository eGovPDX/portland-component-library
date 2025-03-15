import React from 'react';

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

export default HeaderMobileMenu; 