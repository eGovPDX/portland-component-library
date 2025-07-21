import { React, useState } from 'react';

/**
 * Navigation component for the Header
 */
export const HeaderNav = ({
  navItems,
  isMobile = false,
  onCloseMenu = () => {},
}) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (label) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  return (
    <nav className={`header-nav ${isMobile ? 'is-mobile' : ''}`} role="navigation">
      {isMobile && (
        <button 
          className="header-nav-close" 
          onClick={onCloseMenu}
          aria-label="Close menu"
        >
          <span className="header-nav-close-icon">×</span>
        </button>
      )}
      
      <ul className="header-nav-list">
        {navItems.map((item, index) => (
          <li 
            key={index} 
            className={`header-nav-item ${item.current ? 'is-current' : ''}`}
          >
            {item.children && item.children.length > 0 ? (
              <>
                <button
                  className={`header-nav-button ${openSubmenu === item.label ? 'is-open' : ''}`}
                  onClick={() => toggleSubmenu(item.label)}
                  aria-expanded={openSubmenu === item.label}
                  aria-controls={`submenu-${index}`}
                >
                  <span>{item.label}</span>
                  <span className="header-nav-button-icon">
                    {openSubmenu === item.label ? '▲' : '▼'}
                  </span>
                </button>
                
                <ul 
                  id={`submenu-${index}`}
                  className={`header-submenu ${openSubmenu === item.label ? 'is-open' : ''}`}
                >
                  {item.children.map((childItem, childIndex) => (
                    <li 
                      key={childIndex} 
                      className={`header-submenu-item ${childItem.current ? 'is-current' : ''}`}
                    >
                      <a 
                        href={childItem.href} 
                        className="header-submenu-link"
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
                className="header-nav-link"
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
