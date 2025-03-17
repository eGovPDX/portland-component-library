import React from 'react';
import { HeaderMenuItem } from './HeaderMenuItem';

/**
 * Menu group component for the Header mobile menu
 */
export const HeaderMenuGroup = ({
  items,
  mainHeading = "General Information",
}) => {
  return (
    <div className="pgov-header-menu-group">
      <h3 className="pgov-header-menu-group-main-heading">{mainHeading}</h3>
      <ul className="pgov-header-menu-group-items">
        {items.map((item, index) => (
          <HeaderMenuItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default HeaderMenuGroup; 