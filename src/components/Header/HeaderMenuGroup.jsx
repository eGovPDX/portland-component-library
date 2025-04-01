import { React } from 'react';
import PropTypes from 'prop-types';

/**
 * Menu group component for the Portland.gov header mobile menu
 */
export const HeaderMenuGroup = ({
  items,
  mainHeading,
  id,
}) => {
  const headingId = `${id}-heading`;
  
  return (
    <>
      <h3 id={headingId} className="pgov-header-menu-heading">{mainHeading}</h3>
      <ul className="pgov-header-mobile-nav-list" role="menu">
        {items.map((item, index) => (
          <li key={index} className="pgov-header-menu-item">
            <a 
              href={item.href} 
              className="pgov-header-menu-link"
              aria-current={item.current ? 'page' : undefined}
            >
              <span className="pgov-header-menu-link-text">{item.label}</span>
              {item.description && (
                <span className="pgov-header-menu-link-description">{item.description}</span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </>
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