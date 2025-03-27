import React from 'react';
import PropTypes from 'prop-types';
import './SideNav.css';

export const SideNav = ({ items, activeIndex }) => {
  return (
    <nav 
      className="side-nav"
      aria-label="Section Navigation"
      role="navigation"
    >
      {items.map((item, index) => {
        const isActive = index === activeIndex;
        return (
          <a
            key={item.title}
            href={item.link}
            className={`side-nav-item ${isActive ? 'active' : ''}`}
            aria-current={isActive ? 'step' : undefined}
          >
            <div className={`nav-indicator ${isActive ? 'active-indicator' : ''}`} />
            <div className="side-nav-text">
              {item.title}
            </div>
          </a>
        );
      })}
    </nav>
  );
};

SideNav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeIndex: PropTypes.number.isRequired,
};

SideNav.defaultProps = {
  activeIndex: 0,
}; 