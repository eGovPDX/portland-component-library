import { React } from 'react';
import PropTypes from 'prop-types';
import { HeaderMenuItem } from './HeaderMenuItem';

/**
 * Menu group component for the Portland.gov header mobile menu
 */
export const HeaderMenuGroup = ({
  items,
  mainHeading,
  id,
  className
}) => {
  const headingId = `${id}-heading`;
  
  return (
    <nav className={`header-menu-group ${className || ''}`} role="navigation" aria-labelledby={headingId}>
      <h3 id={headingId} className="header-menu-heading">{mainHeading}</h3>
      <ul className="header-menu-group-items" role="menu">
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
  id: PropTypes.string,
  /** Custom class name */
  className: PropTypes.string
};

HeaderMenuGroup.defaultProps = {
  mainHeading: "General Information",
  id: "pgov-header-menu-group"
}; 