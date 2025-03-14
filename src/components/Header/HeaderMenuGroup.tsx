import React from 'react';
import { NavItem } from './Header';
import { HeaderMenuItem } from './HeaderMenuItem';

export interface HeaderMenuGroupProps {
  /**
   * Group title
   */
  title: string;
  /**
   * Navigation items in this group
   */
  items: NavItem[];
}

/**
 * Menu group component for the Header mobile menu
 */
export const HeaderMenuGroup: React.FC<HeaderMenuGroupProps> = ({
  title,
  items,
}) => {
  return (
    <div className="pgov-header-menu-group">
      <h2 className="pgov-header-menu-group-title">{title}</h2>
      <ul className="pgov-header-menu-group-items">
        {items.map((item, index) => (
          <HeaderMenuItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default HeaderMenuGroup; 