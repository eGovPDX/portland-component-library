import React from 'react';
import PropTypes from 'prop-types';

/**
 * Menu item component for the Header mobile menu
 */
export const HeaderMenuItem = ({ item }) => {
  // Create a more descriptive aria-label when description is available
  const ariaLabel = item.description 
    ? `${item.label} - ${item.description}` 
    : undefined;
    
  return (
    <li className="pgov-header-menu-item" role="menuitem">
      <a 
        href={item.href} 
        className="pgov-header-menu-link"
        aria-label={ariaLabel}
        aria-current={item.current ? "page" : undefined}
      >
        <div className="pgov-header-menu-link-content">
          <span className="pgov-header-menu-link-title">{item.label}</span>
          {item.description && (
            <span className="pgov-header-menu-link-description">
              {item.description}
            </span>
          )}
        </div>
      </a>
    </li>
  );
};

HeaderMenuItem.propTypes = {
  /** Item object containing link details */
  item: PropTypes.shape({
    /** Text label for the menu item */
    label: PropTypes.string.isRequired,
    /** URL for the menu item link */
    href: PropTypes.string.isRequired,
    /** Optional description text */
    description: PropTypes.string,
    /** Whether this is the current page */
    current: PropTypes.bool
  }).isRequired
};

