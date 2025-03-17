import React from 'react';
import PropTypes from 'prop-types';
import { HeaderMenuItem } from './HeaderMenuItem';

/**
 * Menu group component for the Header mobile menu
 */
export const HeaderMenuGroup = ({
  items,
  mainHeading,
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

HeaderMenuGroup.propTypes = {
  /** Array of menu items to display */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  ).isRequired,
  /** Main heading text for the menu group */
  mainHeading: PropTypes.string
};

HeaderMenuGroup.defaultProps = {
  mainHeading: "General Information"
};

export default HeaderMenuGroup; 