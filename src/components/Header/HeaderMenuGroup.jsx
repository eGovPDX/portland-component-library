import React from 'react';
import PropTypes from 'prop-types';
import { HeaderMenuItem } from './HeaderMenuItem';

/**
 * Menu group component for the Header mobile menu
 */
const HeaderMenuGroup = ({
  items,
  mainHeading,
  id,
}) => {
  const headingId = `${id}-heading`;
  
  return (
    <nav className="pgov-header-menu-group" role="navigation" aria-labelledby={headingId}>
      <h3 id={headingId} className="pgov-header-menu-group-main-heading">{mainHeading}</h3>
      <ul className="pgov-header-menu-group-items" role="menu">
        {items.map((item, index) => (
          <HeaderMenuItem key={index} item={item} />
        ))}
      </ul>
    </nav>
  );
};

HeaderMenuGroup.propTypes = {
  /** Array of menu items to display */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      description: PropTypes.string,
      current: PropTypes.bool
    })
  ).isRequired,
  /** Main heading text for the menu group */
  mainHeading: PropTypes.string,
  /** ID for the component */
  id: PropTypes.string
};

HeaderMenuGroup.defaultProps = {
  mainHeading: "General Information",
  id: "pgov-header-menu-group"
};

export default HeaderMenuGroup; 