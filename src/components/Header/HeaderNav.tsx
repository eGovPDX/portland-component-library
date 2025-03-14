import React, { useState } from 'react';
import { NavItem } from './Header';

export interface HeaderNavProps {
  /**
   * Navigation items
   */
  navItems: NavItem[];
  /**
   * Whether the navigation is in mobile view
   */
  isMobile?: boolean;
  /**
   * Callback for closing the mobile menu
   */
  onCloseMenu?: () => void;
}

/**
 * Navigation component for the Header
 */
export const HeaderNav: React.FC<HeaderNavProps> = ({
  navItems,
  isMobile = false,
  onCloseMenu = () => {},
}) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  return (
    <nav className={`pgov-header-nav ${isMobile ? 'is-mobile' : ''}`} role="navigation">
      {isMobile && (
        <button 
          className="pgov-header-nav-close" 
          onClick={onCloseMenu}
          aria-label="Close menu"
        >
          <span className="pgov-header-nav-close-icon">×</span>
        </button>
      )}
      
      <ul className="pgov-header-nav-list">
        {navItems.map((item, index) => (
          <li 
            key={index} 
            className={`pgov-header-nav-item ${item.current ? 'is-current' : ''}`}
          >
            {item.children && item.children.length > 0 ? (
              <>
                <button
                  className={`pgov-header-nav-button ${openSubmenu === item.label ? 'is-open' : ''}`}
                  onClick={() => toggleSubmenu(item.label)}
                  aria-expanded={openSubmenu === item.label}
                  aria-controls={`submenu-${index}`}
                >
                  <span>{item.label}</span>
                  <span className="pgov-header-nav-button-icon">
                    {openSubmenu === item.label ? '▲' : '▼'}
                  </span>
                </button>
                
                <ul 
                  id={`submenu-${index}`}
                  className={`pgov-header-submenu ${openSubmenu === item.label ? 'is-open' : ''}`}
                >
                  {item.children.map((childItem, childIndex) => (
                    <li 
                      key={childIndex} 
                      className={`pgov-header-submenu-item ${childItem.current ? 'is-current' : ''}`}
                    >
                      <a 
                        href={childItem.href} 
                        className="pgov-header-submenu-link"
                        onClick={isMobile ? onCloseMenu : undefined}
                        aria-current={childItem.current ? 'page' : undefined}
                      >
                        {childItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <a 
                href={item.href} 
                className="pgov-header-nav-link"
                onClick={isMobile ? onCloseMenu : undefined}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav; 