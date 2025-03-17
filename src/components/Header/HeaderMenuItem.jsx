import React from 'react';
import PropTypes from 'prop-types';

/**
 * Menu item component for the Header mobile menu
 */
export const HeaderMenuItem = ({ item }) => {
  return (
    <li className="pgov-header-menu-item">
      <a href={item.href} className="pgov-header-menu-link">
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
    description: PropTypes.string
  }).isRequired
};

export default HeaderMenuItem; 