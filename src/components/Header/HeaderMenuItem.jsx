import { React } from 'react';
import PropTypes from 'prop-types';

/**
 * Menu item component for the Portland.gov header menu
 */
export const HeaderMenuItem = ({ item }) => {
  return (
    <li className="header-menu-item" role="menuitem">
      <a 
        href={item.href} 
        className="header-menu-link"
        aria-current={item.current ? 'page' : undefined}
      >
        <span className="header-menu-link-title">{item.label}</span>
        {item.description && (
          <span className="header-menu-link-description">{item.description}</span>
        )}
      </a>
    </li>
  );
};

HeaderMenuItem.propTypes = {
  /** Menu item object containing label, href, description, and current state */
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    description: PropTypes.string,
    current: PropTypes.bool
  }).isRequired
}; 