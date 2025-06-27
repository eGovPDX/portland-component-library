import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Breadcrumbs.css';

/**
 * Breadcrumbs component based on USWDS Breadcrumb
 * Provides navigation context for the current page location
 */
export const Breadcrumbs = ({
  items,
  className = '',
  customSeparator,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768;
      if (isMobile !== newIsMobile) {
        setIsMobile(newIsMobile);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  const renderSeparator = () => {
    if (customSeparator) {
      return customSeparator;
    }
    return (
      <FontAwesomeIcon
        icon={isMobile ? faArrowLeft : faChevronRight}
        className="breadcrumb__separator"
        aria-hidden="true"
      />
    );
  };

  const renderItems = () => {
    return items.map((item, index) => (
      <li key={index} className="breadcrumb__item">
        {isMobile && index > 0 && renderSeparator()}
        {index === items.length - 1 ? (
          <span className="breadcrumb__current" aria-current="page">
            {item.text}
          </span>
        ) : (
          <>
            <a href={item.href} className="breadcrumb__link">
              {item.text}
            </a>
            {!isMobile && renderSeparator()}
          </>
        )}
      </li>
    ));
  };

  const breadcrumbClasses = ['breadcrumb', className].filter(Boolean).join(' ');

  return (
    <nav
      className={breadcrumbClasses}
      aria-label="Breadcrumbs"
    >
      <ol className="breadcrumb__list">
        {renderItems()}
      </ol>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  /**
   * Array of breadcrumb items with text and href
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string,
    })
  ).isRequired,
  /**
   * Additional CSS class names
   */
  className: PropTypes.string,
  /**
   * Custom separator element
   */
  customSeparator: PropTypes.node,
};

Breadcrumbs.defaultProps = {
  className: '',
  customSeparator: undefined,
}; 