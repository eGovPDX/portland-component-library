import React from 'react';
import { NavItem } from './Header';

export interface HeaderMenuItemProps {
  /**
   * Navigation item
   */
  item: NavItem;
}

/**
 * Menu item component for the Header mobile menu
 */
export const HeaderMenuItem: React.FC<HeaderMenuItemProps> = ({ item }) => {
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

export default HeaderMenuItem; 