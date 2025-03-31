import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SideNav.css';

const NavItem = ({ item, isActive, isExpanded, isParent, position, onClick }) => {
  const itemClasses = [
    'side-nav-item',
    isActive ? 'active' : '',
    isParent ? 'parent' : 'child',
    position,
    isExpanded ? 'expanded' : ''
  ].filter(Boolean).join(' ');

  return (
    <a
      href={item.link}
      className={itemClasses}
      aria-current={isActive ? 'page' : undefined}
      aria-expanded={isParent ? isExpanded : undefined}
      onClick={(e) => {
        if (isParent) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className={`nav-indicator ${isActive ? 'active-indicator' : ''}`} />
      <div className="nav-content">
        <div className="side-nav-text">
          {item.title}
        </div>
      </div>
    </a>
  );
};

NavItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })),
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  isParent: PropTypes.bool.isRequired,
  position: PropTypes.oneOf(['top', 'middle', 'bottom']).isRequired,
  onClick: PropTypes.func.isRequired,
};

export const SideNav = ({ items, activeItemId, activeIndex }) => {
  const [expandedSection, setExpandedSection] = useState(null);

  const getItemPosition = (index, total, isChild = false) => {
    if (index === 0 && !isChild) return 'top';
    if (index === total - 1) return 'bottom';
    return 'middle';
  };

  const renderItems = (navItems, isChild = false) => {
    return navItems.map((item, index) => {
      const isParent = Boolean(item.children?.length);
      const isActive = activeItemId ? item.link === activeItemId : index === activeIndex;
      const isExpanded = expandedSection === item.link;
      const position = getItemPosition(index, navItems.length, isChild);

      return (
        <li key={item.link} className="nav-item-container">
          <NavItem
            item={item}
            isActive={isActive}
            isExpanded={isExpanded}
            isParent={isParent}
            position={position}
            onClick={() => {
              setExpandedSection(isExpanded ? null : item.link);
            }}
          />
          {isParent && isExpanded && (
            <ul className="nav-children">
              {renderItems(item.children, true)}
            </ul>
          )}
        </li>
      );
    });
  };

  return (
    <nav 
      className="side-nav"
      aria-label="Section Navigation"
      role="navigation"
    >
      <ul>
        {renderItems(items)}
      </ul>
    </nav>
  );
};

SideNav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      children: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })),
    })
  ).isRequired,
  activeItemId: PropTypes.string,
  activeIndex: PropTypes.number,
};

SideNav.defaultProps = {
  activeItemId: null,
  activeIndex: null,
}; 