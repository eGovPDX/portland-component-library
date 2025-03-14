import React from 'react';

export interface HeaderMobileMenuProps {
  /**
   * Whether the mobile menu is open
   */
  isOpen: boolean;
  /**
   * Click handler for the mobile menu button
   */
  onClick: () => void;
}

/**
 * Mobile menu button component for the Header
 */
export const HeaderMobileMenu: React.FC<HeaderMobileMenuProps> = ({
  isOpen,
  onClick,
}) => {
  return (
    <div className={`pgov-header-mobile-menu ${isOpen ? 'is-open' : ''}`}>
      <button 
        className="pgov-header-mobile-menu-button"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        type="button"
      >
        <div className="pgov-header-mobile-menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className="pgov-header-mobile-menu-text">Menu</span>
      </button>
    </div>
  );
};

export default HeaderMobileMenu; 